__d("WAWebRequestKeyShare", [
    "QPLFlow",
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPersistedQueueQpl",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
        if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
            return s(e, t, n);
        }
        const r = c(false);
        return o("QPLFlow").endWith(r, function() {
            return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().waitUntilPersisted(o("WAWebPersistedJobDefinitions").jobSerializers.sendRequestedKeyShare(e, t, n));
        });
    }
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            yield o("WAWebLazyPersistedQueue").whenPersistedQueuesMayOpen();
            const a = c(true);
            yield o("QPLFlow").endWith(a, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const n = yield o("WAWebLazyPersistedQueue").whenPersistedQueuesReady(a);
                yield n.requestKeyShareNow(e, t, r);
            }));
        });
        return u.apply(this, arguments);
    }
    function c(isPQ) {
        return o("QPLFlow").startQPLFlow(o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT, {
            annotations: {
                bool: {
                    isPQ
                },
                string: {
                    operationType: "sendRequestedKeyShare"
                }
            },
            timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS
        });
    }
    l.requestKeyShare = e;
}, 98);