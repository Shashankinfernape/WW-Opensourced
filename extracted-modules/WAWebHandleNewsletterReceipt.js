__d("WAWebHandleNewsletterReceipt", [
    "WAAckLevel",
    "WALogger",
    "WAWebAck",
    "WAWebHandleMsgReceiptCommon",
    "WAWebMessageReceiptBatcher",
    "WAWebMsgKey",
    "WAWebOfflineHandler",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ack: n, ackString: a, externalIds: i, from: l, offline: u, participant: c, stanzaId: d, ts: m }) {
            const p = `[receipt][newsletter][${d}]`;
            if (a === "view") {
                return o("WAWebHandleMsgReceiptCommon").updateMsgViewed(i.map((e)=>parseInt(e, 10)), l);
            }
            if (n !== o("WAAckLevel").ACK.READ && n !== o("WAAckLevel").ACK.PLAYED) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " ACK should be READ or PLAYED, ",
                    " received instead"
                ])), p, n);
                throw r("err")("handleNewsletterSimpleReceipt: only READ/PLAYED ack for newsletters");
            }
            const _ = (a === o("WAWebAck").ACK_STRING.READ_SELF || a === o("WAWebAck").ACK_STRING.PLAYED_SELF) && c != null && o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").asUserWidOrThrow(c));
            if (!_) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " only peer receipts are accepted"
                ])), p);
                throw r("err")("handleNewsletterSimpleReceipt: only peer receipts for newsletters");
            }
            const f = i.map((e)=>new (r("WAWebMsgKey"))({
                    id: e,
                    remote: l,
                    fromMe: false
                }));
            const g = f.map((e)=>e.toString());
            if (u != null) {
                o("WAWebOfflineHandler").OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
            }
            const h = u != null && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete();
            const y = o("WAWebMessageReceiptBatcher").receiptBatcher.acceptPeerReceipt({
                isOffline: h,
                ack: n,
                ts: m,
                remote: l,
                msgKeys: g
            });
            if (!h) {
                yield o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches();
            }
            return y;
        });
        return c.apply(this, arguments);
    }
    l.handleNewsletterSimpleReceipt = u;
}, 98);