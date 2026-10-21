__d("WAWebHandleBotInvokeMsgReceipt", [
    "WAWebAck",
    "WAWebMessageReceiptBatcher",
    "WAWebMsgKey",
    "WAWebOfflineHandler",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ack: t, ackString: n, externalIds: a, from: i, offline: l, recipient: s, ts: u }) {
            const c = l != null && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete();
            if (n !== o("WAWebAck").ACK_STRING.READ || s == null || !i.isBot()) {
                throw r("err")("handleBotOneToOneInvokeSimpleReadReceipt: unexpected receipt");
            }
            const d = a.map((e)=>new (r("WAWebMsgKey"))({
                    id: e,
                    remote: s,
                    fromMe: true
                }));
            const m = d.map((e)=>e.toString());
            const p = o("WAWebMessageReceiptBatcher").receiptBatcher.acceptOtherReceipt({
                ack: t,
                ts: u,
                receiverId: i,
                msgKeys: m,
                isBotInvoke: true
            });
            if (!c) {
                yield o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("receiptBatcherRunActiveBatches", function() {
                    return o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches();
                }).waitUntilCompleted();
            }
            return p;
        });
        return s.apply(this, arguments);
    }
    l.handleBotOneToOneInvokeSimpleReadReceipt = e;
}, 98);