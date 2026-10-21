__d("WAWebPaymentNotificationParser", [
    "WADeprecatedWapParser",
    "WAWebHandlePaymentAmountUtils",
    "WAWebJidToWid",
    "WAWebMsgKey",
    "WAWebPaymentStatusUtils",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    const e = new (r("WADeprecatedWapParser"))("paymentNotificationParser", function(e) {
        e.assertTag("notification");
        e.assertAttr("type", "pay");
        const t = e.hasChild("transaction") ? e.child("transaction") : null;
        return {
            stanzaId: e.attrString("id"),
            from: e.attrWapJid("from"),
            transaction: t ? s(t) : null,
            dehydratedTransaction: t != null && o("WAWebHandlePaymentAmountUtils").isDehydratedPaymentNode(t),
            invite: u(e)
        };
    });
    function s(e) {
        if (o("WAWebHandlePaymentAmountUtils").isDehydratedPaymentNode(e)) {
            return null;
        }
        let remote;
        let n;
        const a = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("sender"));
        const receiver = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("receiver"));
        const fromMe = o("WAWebUserPrefsMeUser").isMeAccount(a);
        if (e.hasAttr("group")) {
            remote = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("group"));
            n = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("sender"));
        } else if (fromMe) {
            remote = receiver;
        } else {
            remote = a;
        }
        const msgKey = new (r("WAWebMsgKey"))({
            id: e.attrString("message-id"),
            fromMe,
            remote,
            participant: n
        });
        const u = o("WAWebPaymentStatusUtils").getPaymentTransactionType(e.attrString("transaction-type"), msgKey.fromMe);
        const c = o("WAWebHandlePaymentAmountUtils").getAmount1000AndCurrency(e);
        const { amount1000, currency } = c;
        return {
            receiver,
            currency,
            amount1000,
            status: o("WAWebPaymentStatusUtils").getNotificationTransactionStatus(u, e.attrString("status")),
            ts: e.attrInt("ts"),
            type: u,
            msgKey
        };
    }
    function u(e) {
        if (!e.hasChild("invite")) {
            return null;
        }
        const t = e.child("invite");
        return {
            type: t.maybeAttrString("type"),
            service: t.maybeAttrString("service"),
            inviteUsed: t.hasAttr("invite-used") ? t.attrString("invite-used") === "1" : null,
            from: o("WAWebJidToWid").chatJidToChatWid(e.attrChatJid("from")),
            timestamp: e.attrTime("t")
        };
    }
    l.paymentNotificationParser = e;
    l.parseTransactionNode = s;
}, 98);