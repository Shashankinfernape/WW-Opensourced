__d("WAWebHandleSingleMsg", [
    "Promise",
    "WABackoffUtils",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WATimeUtils",
    "WAWebApiChatCommon",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebApiGroupInviteV4Store",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebCheckUpdateOrphanReactions",
    "WAWebDBProcessMessage",
    "WAWebDBProcessRevokeMsgs",
    "WAWebHandleForMessageRange",
    "WAWebHandleForMessageRangeEnums",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandlePlaceholderWam",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebRequestDeleteAddOns",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId: a, newMsg: i, handleSingleMsgOrigin: l, messageOverwriteOption: v = o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE, preserveOrder: R = true }) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleSingleMsg: called with msgId::",
                ", chat id::",
                " type::",
                ",",
                ""
            ])), i.id.id, a.toLogString(), i.type, i.subtype).tags("messaging");
            const L = v !== o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE;
            const E = v === o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.VOIP_CALL_LOG;
            const k = {
                add: "after",
                update: L,
                isHistory: false
            };
            const I = i.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && [
                "sender_revoke",
                "admin_revoke"
            ].includes(i.subtype);
            let T = i;
            if (!I) {
                const D = yield o("WAWebApiFilterAndReplaceMessages").filterAndReplaceMessages([
                    T
                ]);
                const x = D.newMsgs;
                if (x.length === 0) {
                    return;
                }
                T = x[0];
            }
            const $ = yield o("WAWebHandleForMessageRange").handleForActiveMessageRange(a, T);
            const P = l === "scheduledMsgReveal";
            if (!(!P && $.has(o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction.DropMessage))) {
                const N = $.has(o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction.SkipUI);
                try {
                    if (o("WAWebMsgGetters").getIsStatus(i)) {
                        yield o("WAWebBackendApi").frontendSendAndReceive("handleStatusUpdate", {
                            rawMsg: T,
                            checksum: null,
                            isMsgUpdate: false
                        });
                    }
                    yield o("WAPromiseLoop").promiseLoop((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, i) {
                            const l = o("WAPromiseDelays").delayMs(o("WABackoffUtils").expBackoff(i, 120000, 1000, 0.1));
                            try {
                                let p;
                                if (L) {
                                    try {
                                        T = yield o("WAWebDBProcessMessage").updateMessage(T);
                                        p = false;
                                    } catch (e) {
                                        if (e instanceof o("WAWebDBProcessMessage").NoMessageToUpdateError && E) {
                                            p = true;
                                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                                "Msg overwrite failed, will fall back to creation"
                                            ])));
                                        } else {
                                            throw e;
                                        }
                                    }
                                }
                                if (!L || p === true) {
                                    if (I) {
                                        const f = r("nullthrows")(T.t, "revoke timestamp is null");
                                        const g = r("nullthrows")(T.protocolMessageKey, "revoke target is null");
                                        const h = yield o("WAWebDBProcessRevokeMsgs").processRevokeMsgsAndGetCleanupEligibleKeys([
                                            {
                                                revokeMsgKey: g,
                                                newMsgKey: T.id,
                                                timestamp: f,
                                                subtype: T.subtype,
                                                authenticatedSender: T.senderWithDevice ?? o("WAWebMsgGetters").getSender(T),
                                                sender: T.author,
                                                revokeTimestamp: f
                                            }
                                        ]);
                                        const y = g.toString();
                                        if (h.has(y)) {
                                            o("WAWebBackendApi").frontendFireAndForget("deleteModelsForLastAddOnPreview", {
                                                messagesIds: [
                                                    y
                                                ]
                                            });
                                            yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(a.toString(), [
                                                y
                                            ]);
                                        }
                                    } else {
                                        try {
                                            yield o("WAWebDBProcessMessage").storeMessages([
                                                T
                                            ], a);
                                            if (T.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
                                                o("WAWebHandlePlaceholderWam").postPlaceholderActivityAddEvent([
                                                    T
                                                ]);
                                            }
                                        } catch (e) {
                                            if (e instanceof o("WAWebDBProcessMessage").DuplicateMessageError) {
                                                if (T.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
                                                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                                        "processPlaceholderMsg: skip creating duplicate placeholder"
                                                    ])));
                                                } else {
                                                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                                        "storeMessages loop: detect resend message"
                                                    ])));
                                                    T = yield o("WAWebDBProcessMessage").updateMessage(T);
                                                    k.update = true;
                                                }
                                            } else {
                                                throw e;
                                            }
                                        }
                                    }
                                }
                                if (T.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) {
                                    const b = T.id.toString();
                                    yield o("WAWebApiGroupInviteV4Store").persistGroupInviteV4Msg(b, {
                                        id: b,
                                        from: T.from.toString(),
                                        to: T.to.toString(),
                                        groupId: T.inviteGrp,
                                        expiration: parseInt(T.inviteCodeExp, 10),
                                        expired: o("WATimeUtils").unixTime() >= parseInt(T.inviteCodeExp, 10)
                                    });
                                }
                                e();
                            } catch (e) {
                                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "storeMessages loop: failed with error ",
                                    "."
                                ])), e).tags("handleSingleMsg");
                                if (i > 3) {
                                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                        "storeMessages loop: Gave up after ",
                                        " tries"
                                    ])), i);
                                    return (C || (C = n("Promise"))).reject(e);
                                }
                                return l;
                            }
                        });
                        return function(t, n, r) {
                            return e.apply(this, arguments);
                        };
                    })());
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "handleSingleMsg: msgId=",
                        " chatId=",
                        " type=",
                        ",",
                        " db+ overwrite=",
                        " skipUI=",
                        ""
                    ])), T.id.id, a.toLogString(), T.type, T.subtype, L, N).tags("messaging");
                    try {
                        const w = (T.threadIds ?? []).map((e)=>e.toString());
                        yield o("WAWebBackendApi").frontendSendAndReceive("checkOrphanMutations", {
                            msgIds: [
                                T.id.toString()
                            ],
                            chatIds: [
                                a.toString()
                            ],
                            threadIds: w
                        });
                        yield o("WAWebCheckUpdateOrphanReactions").checkUpdateForOrphanReactions([
                            T.id.toString()
                        ]);
                    } catch (e) {
                        const A = r("getErrorSafe")(e);
                        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "handleSingleMsg: checkOrphanMutations failed msg=",
                            " chat=",
                            ""
                        ])), String(T.id), String(a)).catching(A);
                    }
                    let F = false;
                    if (l === "createChat" && T.type !== o("WAWebMsgType").MSG_TYPE.CHAT && a.isRegularUser()) {
                        const O = yield o("WAWebApiChatCommon").getChatRecord(a);
                        if (O == null) {
                            F = true;
                            o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                "handleSingleMsg: no chat for system msg chatId=",
                                ""
                            ])), a.toLogString());
                        }
                    }
                    if (!N && !F) {
                        yield o("WAWebBackendApi").frontendSendAndReceive("processMultipleMessages", {
                            chatId: a,
                            msgObjs: [
                                babelHelpers.extends({}, T, {
                                    recvFresh: true,
                                    isNewMsg: true
                                })
                            ],
                            meta: k,
                            processMessagesOrigin: l,
                            chatMsgsCollection: null,
                            preserveOrder: R
                        });
                    }
                } catch (e) {
                    if (e instanceof o("WAWebBackendErrors").LogoutDrop) {
                        return;
                    }
                    if (e instanceof o("WAWebDBProcessMessage").PreviousMsgNotUpdatableError) {
                        o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "Msg: ",
                            " chat: ",
                            " Error: PreviousMsgNotUpdatableError"
                        ])), String(T.id), String(a));
                        return;
                    }
                    const B = r("getErrorSafe")(e);
                    if (r("gkx")("26258")) {
                        o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "Msg: ",
                            " chat: ",
                            " Error: ",
                            ", message: ",
                            ", stack: ",
                            ""
                        ])), String(T.id), String(a), B.name, B.message, B.stack).tags("messaging");
                    } else {
                        o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "Msg: ",
                            " chat: ",
                            " Error: ",
                            ", message: ",
                            ", stack: ",
                            ""
                        ])), String(T.id), String(a), B.name, B.message, B.stack).tags("messaging").sendLogs("msg_handler: error storing/processing single message");
                    }
                }
            }
        });
        return v.apply(this, arguments);
    }
    l.handleSingleMsgImpl = b;
}, 98);