__d("WAWebNewsletterSendViewReceiptJob", [
    "WABatcher",
    "WAJobOrchestratorTypes",
    "WASmaxReceiptPublishViewRPC",
    "WAStanzaUtils",
    "WAWap",
    "WAWebNewsletterDBUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = new Map;
    const delayMs = 3000;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const i = e.get(t) ?? o("WABatcher").createSimpleBatcher({
                delayMs
            }, (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    yield d(t, e);
                    return e;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            e.set(t, i);
            yield i.accept(r);
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(receiptTo, t) {
            return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendNewsletterViewReceipt", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WASmaxReceiptPublishViewRPC").sendPublishViewRPC({
                    receiptTo,
                    receiptId: o("WAStanzaUtils").toStanzaId(o("WAWap").generateId()),
                    itemArgs: t.map(({ itemServerId })=>({
                            itemServerId
                        }))
                });
                yield o("WAWebNewsletterDBUtils").updateMsgViewReceipt(t.map((e)=>e.itemId));
            }), {
                priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW
            }).waitUntilCompleted();
        });
        return m.apply(this, arguments);
    }
    l.sendViewReceiptJob = u;
}, 98);