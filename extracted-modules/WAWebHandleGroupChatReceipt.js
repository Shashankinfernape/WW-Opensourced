__d("WAWebHandleGroupChatReceipt", [
    "WALogger",
    "WAWebAck",
    "WAWebHandleMsgReceiptCommon",
    "WAWebHandleMsgReceiptUtils",
    "WAWebMessageReceiptBatcher",
    "WAWebMsgKey",
    "WAWebOfflineHandler",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ack: n, ackString: a, externalIds: i, from: l, isLidBot: u, offline: c, participant: d, recipient: m, ts: p }) {
            if (!d) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "error: got group ack without participant."
                ]))).sendLogs("handleGroupSimpleReceipt: failed");
                return;
            }
            const _ = o("WAWebWidFactory").asUserWidOrThrow(d);
            const f = a === o("WAWebAck").ACK_STRING.SENDER;
            const g = !f && o("WAWebUserPrefsMeUser").isMeAccount(_);
            let h;
            if (g) {
                if (!m) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[handleGroupSimpleReceipt] skip self peer: no recipient"
                    ]))).sendLogs("handleGroupSimpleReceipt: skip self receipt without recipient", {
                        sampling: 0.01
                    });
                    return;
                }
                h = m;
            } else {
                h = _.isLid() || u ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            }
            const y = i.map((e)=>new (r("WAWebMsgKey"))({
                    id: e,
                    remote: l,
                    fromMe: !g,
                    participant: h
                }));
            if (g && n === o("WAWebAck").ACK.PLAYED) {
                o("WAWebHandleMsgReceiptCommon").handleViewOnceOpenedIfNecessary(y);
            }
            const C = y.map((e)=>e.toString());
            if (c != null) {
                o("WAWebOfflineHandler").OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
            }
            const b = c != null && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete();
            let v;
            if (g) {
                if (m != null && o("WAWebHandleMsgReceiptUtils").isReadOrPlayedReceipt(a) && i.length > 0) {
                    v = o("WAWebMessageReceiptBatcher").receiptBatcher.acceptPeerReceipt({
                        isOffline: b,
                        ack: n,
                        ts: p,
                        msgKeys: C,
                        remote: l
                    });
                }
            } else {
                v = o("WAWebMessageReceiptBatcher").receiptBatcher.acceptOtherReceipt({
                    ack: n,
                    ts: p,
                    receiverId: d,
                    msgKeys: C
                });
            }
            if (!b) {
                yield o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("receiptBatcherRunActiveBatches", function() {
                    return o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches();
                }).waitUntilCompleted();
            }
            return v;
        });
        return c.apply(this, arguments);
    }
    l.handleGroupSimpleReceipt = u;
}, 98);