__d("WAWebHandleMsgProcessUtils", [
    "Promise",
    "WALogger",
    "WAWebApplyBrazilPaymentStateUpdatesWithRetries",
    "WAWebBackendApi",
    "WAWebBrazilPaymentStateUpdateMsgUtils",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebGetMessageCache",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleMsgValidate",
    "WAWebIcdcHandlerApi",
    "WAWebKeepAndApplyBrazilPaymentStateUpdates",
    "WAWebOfflineDeviceCache",
    "WAWebPaymentsGatingUtils",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:10197",
    "cr:402",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t, n) {
        const r = t.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer;
        const a = {
            externalId: e.id.id,
            from: e.from,
            author: t.author,
            receiptClass: o("WAWebDeliveryReceiptClassUtils").getDeliveryReceiptClass(e.from, n)
        };
        const i = r ? {
            msg: e
        } : {
            msg: e,
            receiptInfo: a
        };
        o("WAWebGetMessageCache").getMessageCache().addMessages([
            i
        ], false);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.offline == null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "processDecryptedMessageProto: msgId::",
                    ", message decrypted: "
                ])), e.externalId).tags("messaging");
            }
            if (!e.isHsm && t.highlyStructuredMessage) {
                throw new (o("WAWebHandleMsgCommon")).HsmMismatchError;
            }
            let a = null;
            if (!(yield o("WAWebHandleMsgValidate").isFromKnownDevice(e.author))) {
                const i = o("WAWebWidFactory").asUserWidOrThrow(e.author);
                if (e.offline == null) {
                    o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob([
                        i
                    ], null, null);
                } else {
                    o("WAWebOfflineDeviceCache").OfflinePendingDeviceCache.addOfflinePendingDevice(String(i), null);
                }
                throw new (o("WAWebHandleMsgError")).UnknownDeviceMessageError(`[messaging] msgId::${e.externalId}, processDecryptedMessageProto: reject message from unknown device`);
            }
            const l = t.messageContextInfo;
            if (l) {
                a = e.chat.isUser() ? yield o("WAWebIcdcHandlerApi").handleHostedIcdcMetadataInline(e.chat, e.author, l) : null;
                if (n("cr:402") != null) {
                    n("cr:402").monitorAeaMessageGossip(e, l).catch((e)=>{
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[aea] failed to monitor message gossip"
                        ]))).catching(r("getErrorSafe")(e)).sendLogs("aea-message-gossip-fail");
                    });
                }
                o("WAWebIcdcHandlerApi").handleICDCData(e.author, e.chat.isUser() ? e.chat : null, l);
            }
            return a;
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msg: t, msgInfo: n, msgMeta: r, reparsing: a }) {
            if (n.offline != null && !a) {
                return d(t, n, r);
            }
            yield o("WAWebBackendApi").frontendSendAndReceive("processEphemeralSyncResponse", {
                msg: t
            });
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msg: t, msgInfo: n, msgMeta: r, reparsing: a }) {
            if (n.offline != null && !a) {
                return d(t, n, r);
            }
            yield o("WAWebBackendApi").frontendSendAndReceive("processKeepInChatMessage", {
                keepInChatMessage: t,
                allowNotification: true
            });
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msg: t, msgInfo: n, msgMeta: r, reparsing: a }) {
            const i = t;
            if (n.offline != null && !a) {
                return d(i, n, r);
            }
            yield o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs([
                i
            ], a);
        });
        return C.apply(this, arguments);
    }
    function b({ msg: t, msgInfo: r, msgMeta: a, reparsing: i }) {
        if (t == null || !o("WAWebKeepAndApplyBrazilPaymentStateUpdates").isRoutedBrazilPaymentStateUpdateMsg(t)) {
            return null;
        }
        if (r.offline != null && !i) {
            d(t, r, a);
            return (c || (c = n("Promise"))).resolve();
        }
        return o("WAWebKeepAndApplyBrazilPaymentStateUpdates").keepAndApplyBrazilPaymentStateUpdate(t, i);
    }
    function v(t) {
        return S(t).catch((n)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] could not set the update aside"
            ]))).catching(r("getErrorSafe")(n)).sendLogs("br-payment-state-set-aside-failed");
            return t.msgs;
        });
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgInfo: t, msgMeta: n, msgs: r, reparsing: a }) {
            L(t, a);
            const i = r.length === 1 ? b({
                msg: r[0],
                msgInfo: t,
                msgMeta: n,
                reparsing: a
            }) : null;
            if (i == null) {
                return [].concat(o("WAWebBrazilPaymentStateUpdateMsgUtils").hideAwaitedBrazilPaymentReceipts(r));
            }
            yield i;
            return [];
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        if (!(e.offline != null && !t)) {
            if (o("WAWebPaymentsGatingUtils").isBrazilPaymentStateUpdateSupported()) {
                o("WAWebApplyBrazilPaymentStateUpdatesWithRetries").replayPendingBrazilPaymentStateUpdates([]);
            }
        }
    }
    l.preProcessMsg = m;
    l.processEphemeralSyncResponseMsg = _;
    l.processKeepInChatMsg = g;
    l.processEditProtocolMsg = y;
    l.maybeProcessBrazilPaymentStateUpdateMsg = b;
    l.withoutProcessedBrazilPaymentStateUpdate = v;
}, 98);