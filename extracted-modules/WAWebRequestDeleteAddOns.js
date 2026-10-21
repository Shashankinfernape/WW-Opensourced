__d("WAWebRequestDeleteAddOns", [
    "Promise",
    "QPLFlow",
    "WACoalescer",
    "WALogger",
    "WATimeUtils",
    "WAWebAddonDeletionQueueDef",
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPersistedQueueQpl",
    "WAWormQueueDef",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = o("WAWebLazyPersistedQueue").lazyPersistedQueue(o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE);
    const c = o("WACoalescer").createCoalescer({
        dispatch,
        name: "addon-deletion-queue",
        waitBeforeDispatch: o("WAWebLazyPersistedQueue").whenPersistedQueuesMayOpen
    });
    function d(e, t) {
        if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
            _(e, t);
            return (s || (s = n("Promise"))).resolve();
        }
        const r = p("deleteAddOns");
        return o("QPLFlow").endWith(r, function() {
            return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().waitUntilPersisted(o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(e, t));
        });
    }
    function m(e, t) {
        if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
            _(e, t);
            return;
        }
        const r = p("deleteAddOnsFireAndForget");
        o("QPLFlow").endWith(r, function() {
            o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().fireAndForget(o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(e, t));
            return (s || (s = n("Promise"))).resolve();
        });
    }
    function p(operationType) {
        return o("QPLFlow").startQPLFlow(o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT, {
            annotations: {
                bool: {
                    isPQ: false
                },
                string: {
                    operationType
                }
            },
            timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS
        });
    }
    function _(e, t) {
        for (const n of h(e, t)){
            c.add(n);
        }
    }
    function dispatch(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = new Map;
            for (const a of t){
                n.set(a.queueId, a);
            }
            const i = Array.from(n.values());
            const l = o("QPLFlow").startQPLFlow(o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT, {
                annotations: {
                    bool: {
                        isPQ: true
                    },
                    string: {
                        operationType: "deleteAddOns"
                    }
                },
                timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS
            });
            try {
                yield o("QPLFlow").endWith(l, function() {
                    return u.add(l, i);
                });
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[addon-deletion-queue] enqueue failed, dropping ",
                    " rows"
                ])), i.length).catching(r("getErrorSafe")(error)).tags("addons", "messaging").sendLogs("addon-deletion-enqueue-failed");
            }
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        const n = o("WATimeUtils").unixTimeMs();
        return t.map((t)=>({
                addedAtMs: n,
                changedAtMs: n,
                chatId: e,
                parentMsgKey: t,
                queueId: o("WAWormQueueDef").toWAWormQueueId(t)
            }));
    }
    l.requestDeleteAddOns = d;
    l.requestDeleteAddOnsFireAndForget = m;
}, 98);