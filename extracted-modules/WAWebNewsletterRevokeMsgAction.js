__d("WAWebNewsletterRevokeMsgAction", [
    "Promise",
    "WAAckLevel",
    "WALogger",
    "WATimeUtils",
    "WAWebAssociatedMessagesRevokeUtils",
    "WAWebChatSendMessages",
    "WAWebDBProcessRevokeMsgs",
    "WAWebMsgActionCapability",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebNewsletterSendMessageJob",
    "WAWebNewsletterValidationUtils",
    "WAWebSendMsgResultAction",
    "WAWebUpdateNewsletterMsgUIAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e, t, r) {
        return (m || (m = n("Promise"))).all(t.map((t)=>_(e, t, r)));
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a) {
            o("WAWebAssociatedMessagesRevokeUtils").getAssociatedChildMessageRevokePromises(r, function(e) {
                return g(t, e, a);
            }).then((e)=>(m || (m = n("Promise"))).all(e)).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] Failed to revoke associated child messages"
                ]))).tags("newsletter").sendLogs("newsletter-revoke-child-messages-fail");
            });
            const i = yield g(t, r, a);
            return i;
        });
        return f.apply(this, arguments);
    }
    function g(e, t, n) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, msgToBeRevoked, n) {
            if (!o("WAWebMsgActionCapability").canRevokeNewsletterMsg(msgToBeRevoked)) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "sendNewsletterRevokeMsg: msg cannot be revoked"
                ])));
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED
                };
            }
            const t_serverId = msgToBeRevoked.serverId;
            if (t_serverId == null) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[sendNewsletterRevokeMsg] missing serverId"
                ]))).tags("newsletter").sendLogs("newsletter-revoke-missing-id");
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED
                };
            }
            const me = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const revokeMsg = y(msgToBeRevoked, n, me);
            try {
                const newsletterJid = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(e.id.toJid());
                const m = yield o("WAWebNewsletterSendMessageJob").sendNewsletterMessageJob({
                    newsletterJid,
                    messageId: msgToBeRevoked.id.id,
                    isContentMedia: msgToBeRevoked.mediaObject != null,
                    type: "revoke",
                    isWamoSub: msgToBeRevoked.isWamoSub
                });
                if (m.success) {
                    return yield C({
                        chat: e,
                        msgToBeRevoked,
                        revokeMsg,
                        me
                    });
                }
                if (m.ack.error === "404") {
                    return v({
                        chat: e,
                        msgToBeRevoked,
                        clearMedia: n
                    });
                }
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] Failed to send message, ",
                    " from server"
                ])), m.ack.error).tags("newsletter").sendLogs("newsletter-send-revoke-message-fail-server");
                revokeMsg.updateAck(o("WAAckLevel").ACK.FAILED, true);
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK
                };
            } catch (e) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] Failed to send message"
                ]))).tags("newsletter").sendLogs("newsletter-send-revoke-message-fail-client");
                revokeMsg.updateAck(o("WAAckLevel").ACK.FAILED, true);
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
                };
            }
        });
        return h.apply(this, arguments);
    }
    function y(msgToBeRevoked, t, from) {
        const a = new (r("WAWebMsgKey"))({
            id: r("WAWebMsgKey").newId_DEPRECATED(),
            remote: msgToBeRevoked.id.remote,
            fromMe: true
        });
        const subtype = "admin_revoke";
        const l = o("WATimeUtils").unixTime();
        const s = {
            id: a,
            from,
            to: msgToBeRevoked.id.remote,
            t: l,
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            subtype,
            protocolMessageKey: msgToBeRevoked.id,
            clearMedia: t,
            local: true,
            revokeDuration: l - msgToBeRevoked.t,
            revokeTimestamp: l,
            serverId: msgToBeRevoked.serverId,
            viewMode: o("WAWebViewMode.flow").ViewModeType.NEWSLETTER_TOMBSTONE
        };
        return new (o("WAWebMsgModel")).Msg(s);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, me: sender, msgToBeRevoked, revokeMsg }) {
            yield o("WAWebDBProcessRevokeMsgs").processRevokeMsgs([
                {
                    revokeMsgKey: msgToBeRevoked.id,
                    newMsgKey: revokeMsg.id,
                    timestamp: msgToBeRevoked.t,
                    revokeTimestamp: revokeMsg.t,
                    subtype: revokeMsg.subtype,
                    sender,
                    viewMode: revokeMsg.viewMode
                }
            ]);
            o("WAWebUpdateNewsletterMsgUIAction").updateNewsletterMessageUI(revokeMsg, chat.id);
            return {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK
            };
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, clearMedia, msgToBeRevoked }) {
            yield o("WAWebChatSendMessages").sendDeleteMsgs({
                chat_: chat,
                clearMedia,
                record: {
                    type: "message",
                    list: [
                        msgToBeRevoked
                    ]
                }
            });
            return {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK
            };
        });
        return S.apply(this, arguments);
    }
    l.sendNewsletterRevokeMsgs = p;
    l.sendNewsletterRevokeMsg = _;
}, 98);