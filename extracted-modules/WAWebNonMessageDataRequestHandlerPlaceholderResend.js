__d("WAWebNonMessageDataRequestHandlerPlaceholderResend", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCurrentUser",
    "WAWebHandleMsgProcess",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgProcessingApiUtils",
    "WAWebNonMessageDataRequestLoggingUtils",
    "WAWebParseWebMessageInfoApi",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsWeb.pb",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumPeerDataResponseApplyResultType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err"
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
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const t_length = t.length;
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] placeholder resend: handling response len=",
                ""
            ])), t_length);
            if (t_length === 0) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] Placeholder resend: got empty response in result"
                ])));
                o("WAWebNonMessageDataRequestLoggingUtils").logPlaceholderMessageResendResponse(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND, e, o("WAWebWamEnumPeerDataResponseApplyResultType").PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.INVALID_RESPONSE, 0, 0, 0);
                return;
            }
            let a = 0;
            let i = 0;
            let l = 0;
            let s = 0;
            t.forEach((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    try {
                        const t = e.placeholderMessageResendResponse;
                        if (t == null) {
                            l++;
                            i++;
                            return;
                        }
                        const n = t.webMessageInfoBytes;
                        if (n == null) {
                            s++;
                            i++;
                            return;
                        }
                        const r = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsWeb.pb").WebMessageInfoSpec, n);
                        const bizInfo = {
                            verifiedNameSerial: null,
                            verifiedLevel: null,
                            verifiedNameCert: null,
                            privacyMode: null,
                            nativeFlowName: null,
                            campaignId: null
                        };
                        const c = o("WAWebParseWebMessageInfoApi").parseWebMessageInfo(r);
                        if (o("WAWebCurrentUser").isEmployee() && c) {
                            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[rdu] placeholder resend: parsed msg type=",
                                " subtype=",
                                " id=",
                                ""
                            ])), String(c.type), String(c.subtype), c.id.toString());
                        }
                        let renderableMsgs = c ? yield S([
                            c
                        ]) : [];
                        if (o("WAWebCurrentUser").isEmployee() && o("WAWebABProps").getABPropConfigValue("wa_web_debug_color_code_retry_messages")) {
                            renderableMsgs = renderableMsgs.map((e)=>babelHelpers.extends({}, e, {
                                    backgroundColor: 8388736
                                }));
                        }
                        const m = L(r);
                        if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(m.chat)) {
                            const p = o("WAWebLidMigrationUtils").toUserLid(m.chat);
                            if (p) {
                                m.accountLid = p;
                            }
                        }
                        const messageOverwriteOption = o("WAWebMsgProcessingApiUtils").isRevokeInfo(m) ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.PEER_RETRY : o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE;
                        if (o("WAWebCurrentUser").isEmployee()) {
                            const y = renderableMsgs.entries().toArray().length;
                            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                "[rdu] placeholder resend: got webMsgInfo cnt=",
                                ""
                            ])), y);
                        }
                        o("WAWebHandleMsgProcess").processMsgs({
                            renderableMsgs,
                            reparsing: false,
                            bizInfo,
                            msgMeta: null,
                            paymentInfo: r.paymentInfo,
                            info: m,
                            messageOverwriteOption
                        });
                    } catch (error) {
                        o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[rdu] error: ",
                            ""
                        ])), error).sendLogs("placeholderResendResponse: error while handling response from placeholder resend request");
                        i++;
                        return;
                    }
                    a++;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            if (l > 0) {
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] placeholder resend: ",
                    " null responses in result"
                ])), l);
            }
            if (s > 0) {
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] placeholder resend: ",
                    " null webMsgInfo in result"
                ])), s);
            }
            o("WAWebNonMessageDataRequestLoggingUtils").logPlaceholderMessageResendResponse(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.PLACEHOLDER_MESSAGE_RESEND, e, i === 0 ? o("WAWebWamEnumPeerDataResponseApplyResultType").PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.SUCCESS : o("WAWebWamEnumPeerDataResponseApplyResultType").PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.OTHER_ERROR, t_length, a, i);
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const n = (yield o("WAWebSchemaMessage").getMessageTable().bulkGet([
                        e.id.toString(),
                        o("WAWebLidMigrationUtils").getAlternateMsgKey(e.id)?.toString()
                    ])).find(Boolean);
                    if (n) {
                        return babelHelpers.extends({}, e, {
                            id: r("WAWebMsgKey").from(n.id),
                            from: o("WAWebWidFactory").createWid(n.from)
                        });
                    }
                    return e;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            return (C || (C = n("Promise"))).all(t);
        });
        return R.apply(this, arguments);
    }
    function L(t) {
        const n = o("WAWebProtobufMsgKeyUtils").protobufToMsgKey(t.key);
        const a = {
            externalId: n.id,
            ts: t.messageTimestamp != null ? o("WATimeUtils").castLongIntToUnixTime(t.messageTimestamp) : o("WATimeUtils").unixTime(),
            edit: -1,
            isHsm: false,
            count: null,
            pushname: t.pushName,
            displayName: null,
            senderPn: null,
            senderLid: null,
            recipientLid: null,
            recipientPn: null,
            category: null,
            offline: null
        };
        let i;
        if (n.remote.isGroup()) {
            i = n.remote;
        } else if (n.fromMe) {
            i = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        } else {
            i = n.remote;
        }
        let author;
        if (t.participant != null) {
            author = o("WAWebWidFactory").createWid(t.participant);
        } else if (n.participant != null) {
            author = n.participant;
        }
        const m = t.userReceipt.map((e)=>o("WAWebWidFactory").createUserWidOrThrow(e.userJid));
        if (i.isUser()) {
            if (m != null && m.length > 0) {
                if (!o("WAWebUserPrefsMeUser").isMeAccount(i)) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[rdu] placeholder resend: msgInfo fail - not from me"
                    ])));
                    throw r("err")("recipient on non peer chat message");
                }
                return babelHelpers.extends({
                    type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                }, a, {
                    chat: m[0],
                    author: i
                });
            }
            return babelHelpers.extends({
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
            }, a, {
                chat: o("WAWebWidFactory").asUserWidOrThrow(i),
                author: i
            });
        } else if (i.isGroup()) {
            if (author == null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] placeholder resend: fail - group no participant"
                ])));
                throw r("err")("group message with no participant");
            }
            return babelHelpers.extends({
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
            }, a, {
                chat: i,
                author,
                isDirect: false
            });
        } else if (i.isBroadcast() && !i.isStatus()) {
            if (author == null) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] placeholder resend: fail - bcast no participant"
                ])));
                throw r("err")("broadcast message with no participant");
            }
            if (o("WAWebUserPrefsMeUser").isMeAccount(author)) {
                return babelHelpers.extends({
                    type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
                }, a, {
                    chat: i,
                    author,
                    isDirect: false,
                    bclParticipants: [],
                    bclHashValidated: false
                });
            }
            return babelHelpers.extends({
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST
            }, a, {
                chat: i,
                author,
                isDirect: false,
                ephSetting: null
            });
        } else if (i.isBroadcast() && i.isStatus()) {
            if (author == null) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] placeholder resend: fail - status no participant"
                ])));
                throw r("err")("status message with no participant");
            }
            return babelHelpers.extends({
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS
            }, a, {
                chat: i,
                author,
                isDirect: false
            });
        }
        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "[rdu] Placeholder resend: failed to recognize message type"
        ])));
        throw r("err")("Unrecognized message type");
    }
    l.handlePlaceholderResendOperationRequestResponse = b;
    l.applyMatOnBackfillMessages = S;
}, 98);