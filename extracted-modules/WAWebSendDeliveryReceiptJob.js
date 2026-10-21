__d("WAWebSendDeliveryReceiptJob", [
    "WADeprecatedSendIq",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebOnlineDanglingReceipts",
    "WAWebSendReceiptJobCommon",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isPeerMsg: n, isStatusContext: a, msgId: i, participant: l, receiptModeBitmask: u = 0, recipient: d, response: m, sendsGroupAgentDeliveryReceipt: _ = false, to: f }) {
            const g = f.isUser() && o("WAWebUserPrefsMeUser").isMeAccount(f) || l != null && o("WAWebUserPrefsMeUser").isMeAccount(l);
            const h = m.hasInactiveMsg === true && !g;
            const y = !h;
            c({
                externalId: i,
                isActiveReceipt: y,
                isFromPeer: g,
                isPeerMsg: n,
                isStatusContext: a === true,
                participant: l,
                recipient: d,
                sendsGroupAgentDeliveryReceipt: _,
                to: f,
                receiptModeBitmask: u
            }).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendDeliveryReceipt failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("send-delivery-receipt-error", {
                    sampling: 0.01
                });
            });
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ externalId: t, isActiveReceipt: n, isFromPeer: r, isPeerMsg: a, isStatusContext: i, participant: l, receiptModeBitmask: s, recipient: u, sendsGroupAgentDeliveryReceipt: c, to: d }) {
            let m = o("WAWap").DROP_ATTR;
            if (a) {
                m = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PEER_MSG;
            } else if (r) {
                m = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER;
            } else if (!n) {
                m = o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.INACTIVE;
            }
            const p = i ? "status" : void 0;
            const _ = p != null ? o("WAWap").CUSTOM_STRING(p) : o("WAWap").DROP_ATTR;
            const f = o("WAJids").extractJidFromJidWithType(o("WAWebWidToJid").widToJidWithType(d));
            const g = m === o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER || m === o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PEER_MSG;
            const h = g ? null : o("WAWebSendReceiptJobCommon").genReceiptMetaModeNode(s);
            const y = o("WAWap").wap("receipt", {
                id: o("WAWap").CUSTOM_STRING(t),
                to: o("WAWap").JID(f),
                participant: (d.isGroup() || d.isBroadcast()) && l ? o("WAWebCommsWapMd").DEVICE_JID(l) : o("WAWap").DROP_ATTR,
                recipient: !a && r && u ? o("WAWebCommsWapMd").USER_JID(u) : o("WAWap").DROP_ATTR,
                type: m,
                class: _
            }, h);
            o("WAWebOnlineDanglingReceipts").addOnlineDanglingReceipts({
                author: l || d,
                externalId: t,
                from: d,
                options: {
                    sendsGroupAgentDeliveryReceipt: c
                },
                receiptClass: p
            });
            o("WADeprecatedSendIq").deprecatedCastStanza(y);
        });
        return d.apply(this, arguments);
    }
    l.sendDeliveryReceiptsAfterDecryption = s;
}, 98);