__d("WAWebScheduledMsgPostNotificationHandler", [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAttachScheduledAssociationChildren",
    "WAWebBackendApi",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebExtractAssociationFieldsFromScheduledMsg",
    "WAWebExtractEphemeralFieldsFromScheduledMsg",
    "WAWebExtractLinkPreviewFieldsFromScheduledMsg",
    "WAWebExtractMediaFieldsFromScheduledMsg",
    "WAWebExtractMentionFieldsFromScheduledMsg",
    "WAWebExtractPairedMediaTypeFromScheduledMsg",
    "WAWebExtractQuoteFieldsFromScheduledMsg",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsg",
    "WAWebLimitSharingAcp2HideReceivedMsgs",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgDecryptInnerProto",
    "WAWebScheduledMsgExtractText",
    "WAWebScheduledMsgOutgoingMsgKey",
    "WAWebScheduledMsgRevealChatUtils",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
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
    let b;
    let v;
    let S;
    let R;
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            if (o("WAWebScheduledMessagesGatingUtils").isScheduledMessagesSenderEnabled()) {
                const i = a.xwa2_notify_scheduled_message_post;
                if (i == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg][mex][post] missing post data in notification"
                    ]))).sendLogs("mex-scheduled-msg-post-missing-data");
                    return;
                }
                const { rkid, status } = i;
                if (rkid == null) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg][mex][post] missing rkid in notification"
                    ]))).sendLogs("mex-scheduled-msg-post-missing-rkid");
                    return;
                }
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] received rkid, status=",
                    ""
                ])), status);
                if (status == null) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg][mex][post] missing status in notification"
                    ]))).sendLogs("mex-scheduled-msg-post-missing-status");
                    return;
                }
                const _ = !!t.offline && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete();
                yield o("WAWebMessageQueue").onMessageQueue({
                    chatWid: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                    isOffline: _,
                    msgCategory: null,
                    action: (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            try {
                                const e = yield o("WAWebScheduledMsgRevealKeyStore").getRevealKeyByRevealKeyId(rkid);
                                if (e == null) {
                                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                        "[scheduled_msg][mex][post] no record found for rkid"
                                    ])));
                                    return null;
                                }
                                switch(status){
                                    case "SUCCESS":
                                        {
                                            const t = e.revealKey.byteLength === 0 ? null : yield o("WAWebScheduledMsgDecryptInnerProto").decryptAndDecodeRevealPayload(e.encPayload, e.encIv, e.revealKey);
                                            yield k(e, t);
                                            break;
                                        }
                                    default:
                                        yield T(e.msgId, status);
                                }
                            } catch (error) {
                                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "[scheduled_msg][mex][post] handler failed"
                                ]))).catching(r("getErrorSafe")(error)).sendLogs("mex-scheduled-msg-post-handler-failed");
                            }
                            return null;
                        });
                        function t() {
                            return e.apply(this, arguments);
                        }
                        return t;
                    })()
                }).catch((e)=>o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(e, "scheduled_msg_post"));
            }
        });
        return E.apply(this, arguments);
    }
    function k(e, t) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const { chatId, msgId } = e;
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][post] SUCCESS for msgId"
            ])));
            if (t == null) {
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] no inner proto; keep reveal-key"
                ])));
                return;
            }
            const i = o("WAWebExtractMediaFieldsFromScheduledMsg").extractMediaFieldsFromScheduledMsg(t);
            const l = o("WAWebScheduledMsgExtractText").extractScheduledMsgText(t);
            if (i == null && l == null) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] no renderable content; keep reveal-key"
                ])));
                return;
            }
            const s = o("WAWebWidFactory").createWid(chatId);
            const u = s.isGroup();
            let c;
            try {
                c = yield o("WAWebScheduledMsgRevealChatUtils").resolveScheduledRevealChat(s);
            } catch (error) {
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] ensure chat failed; keep reveal-key"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("mex-scheduled-msg-post-ensure-chat-failed");
                return;
            }
            const d = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            const m = o("WAWebScheduledMsgOutgoingMsgKey").buildScheduledMsgOutgoingMsgKey(msgId, c, d);
            const R = e.scheduledTimestampS > 0 ? e.scheduledTimestampS : o("WATimeUtils").unixTime();
            yield o("WAWebSchemaMessage").getMessageTable().remove(m.toString());
            yield o("WAWebDBDeleteAssociatedMsgsByMsgKey").bulkDeleteMessagesByMsgKeys([
                m.toString()
            ]);
            try {
                yield o("WAWebBackendApi").frontendSendAndReceive("removeScheduledMsgModelForReveal", {
                    msgKey: m
                });
            } catch (error) {
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] drop in-memory model failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("mex-scheduled-msg-post-drop-model-failed");
            }
            const L = o("WAWebExtractAssociationFieldsFromScheduledMsg").extractAssociationFieldsFromScheduledMsg(t, {
                id: m,
                from: d,
                to: c,
                author: u ? d : undefined,
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
            });
            const E = babelHelpers.extends({}, o("WAWebExtractEphemeralFieldsFromScheduledMsg").extractEphemeralFieldsFromScheduledMsg(t, d), o("WAWebExtractMentionFieldsFromScheduledMsg").extractMentionFieldsFromScheduledMsg(t), o("WAWebExtractLinkPreviewFieldsFromScheduledMsg").extractLinkPreviewFieldsFromScheduledMsg(t), o("WAWebExtractQuoteFieldsFromScheduledMsg").extractQuoteFieldsFromScheduledMsg(t, m), o("WAWebExtractPairedMediaTypeFromScheduledMsg").extractPairedMediaTypeFromScheduledMsg(t));
            const k = babelHelpers.extends({
                id: m,
                from: d,
                to: c,
                author: u ? d : undefined,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
            }, E, {
                t: R,
                ack: o("WAWebAck").ACK.RECEIVED,
                isNewMsg: true,
                recvFresh: true,
                invis: false,
                isScheduledMsg: false,
                scheduledTimestampS: o("WATimeUtils").castToUnixTime(R)
            });
            const I = ()=>{
                if (i != null) {
                    if (L == null) {
                        return babelHelpers.extends({}, k, i);
                    }
                    if (i.kind === o("WAWebMsgType").MsgKind.Image) {
                        return babelHelpers.extends({}, k, i, L, {
                            kind: o("WAWebMsgType").MsgKind.AssociatedImage
                        });
                    }
                    return babelHelpers.extends({}, k, i, L, {
                        kind: o("WAWebMsgType").MsgKind.AssociatedVideo
                    });
                }
                if (L != null) {
                    return babelHelpers.extends({}, k, L, {
                        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                        kind: o("WAWebMsgType").MsgKind.AssociatedUnknown
                    });
                }
                return babelHelpers.extends({}, k, {
                    type: o("WAWebMsgType").MSG_TYPE.CHAT,
                    kind: o("WAWebMsgType").MsgKind.Chat,
                    body: l ?? ""
                });
            };
            const T = I();
            const D = yield o("WAWebLimitSharingAcp2HideReceivedMsgs").hideMsgsReceivedInAcp2RestrictedChat({
                messageType: u ? o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP : o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT,
                msgs: [
                    T
                ],
                proto: t
            });
            if (D.length === 0) {
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] hidden in ACP2-restricted chat, deleting key"
                ])));
                try {
                    yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(msgId);
                } catch (error) {
                    o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg][mex][post] deleteRevealKey - hidden"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("mex-scheduled-msg-post-delete-after-hide-failed");
                }
                return;
            }
            try {
                yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
                    chatId: c,
                    newMsg: T,
                    handleSingleMsgOrigin: "scheduledMsgReveal"
                });
            } catch (error) {
                o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] handleSingleMsgImpl -, keep key"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("mex-scheduled-msg-post-insert-failed");
                return;
            }
            yield o("WAWebAttachScheduledAssociationChildren").attachScheduledAssociationChildren(m, L?.parentMsgKey);
            try {
                yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(msgId);
            } catch (error) {
                o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] deleteRevealKey - post-insert"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("mex-scheduled-msg-post-delete-failed");
            }
            o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][post] posted message to chat"
            ])));
        });
        return I.apply(this, arguments);
    }
    function T(e, t) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][post] FAILURE for msgId status=",
                ""
            ])), t).sendLogs("mex-scheduled-msg-post-failure");
            yield o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(e, "FAILED");
        });
        return D.apply(this, arguments);
    }
    l.mexHandleScheduledMsgPost = L;
}, 98);