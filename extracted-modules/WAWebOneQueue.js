__d("WAWebOneQueue", [
    "Promise",
    "TaskSchedulerError",
    "TaskSchedulerPriority",
    "WAComms",
    "WALogger",
    "WAOfflineUtils",
    "WAOneQueue",
    "WAWebBoolFunc",
    "WAWebDanglingReceiptQueue",
    "WAWebMessageDeliveryCounters",
    "WAWebMessageQueueImpl",
    "WAWebSignalStoreOneQueueFlushable"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u = null;
    let c = null;
    const d = new Set;
    function m() {
        if (u == null) {
            u = new (o("WAOneQueue")).WAOneQueue({
                castAcks: function() {
                    return (s || (s = n("Promise"))).resolve();
                },
                context: {},
                danglingQueue: o("WAWebDanglingReceiptQueue").danglingReceiptQueue,
                enqueuePriority: o("TaskSchedulerPriority").NORMAL_PRIORITY,
                flushables: [
                    o("WAWebSignalStoreOneQueueFlushable").signalStoreOneQueueFlushable
                ],
                mode: o("WAOfflineUtils").ServerRPCMode.ONLINE,
                promotionTimeoutMs: null,
                pullMode: {
                    clear: function() {},
                    offlineStart: function() {},
                    shouldFlash: o("WAWebBoolFunc").returnFalse,
                    stanzaProcessed: function() {},
                    stanzaReceived: function() {}
                },
                schedulerLifecycleListener: null,
                schedulerName: "waweb"
            });
        }
        return u;
    }
    function p({ action, isOffline, waitForAdmission }) {
        const a = function() {
            return m().enqueue(function() {
                return action();
            }, {
                flush: !isOffline,
                operationType: "wa_web_message_queue"
            });
        };
        const i = waitForAdmission == null ? a() : _(waitForAdmission, a);
        return i.catch((e)=>{
            if (e instanceof o("TaskSchedulerError").TaskSchedulerTimeoutError) {
                o("WAWebMessageDeliveryCounters").logMessageQueueTimeout(isOffline ? "offline" : "online", "one_queue");
            }
            throw e;
        });
    }
    function _(waitForAdmission, t) {
        const n = waitForAdmission();
        d.add(n);
        const r = function() {
            d.delete(n);
        };
        n.then(r, r);
        return n.then(t);
    }
    function f(e) {
        if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
            const t = m();
            h(t);
            t.handleOfflineStartStanza({
                appdata: 0,
                count: e.count,
                message: e.message,
                notification: e.notification,
                receipt: e.receipt
            });
        }
    }
    function g() {
        if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
            const t = m();
            if (c !== o("WAComms").getComms()?.socketId) {
                h(t);
            }
            y();
        }
    }
    function h(e) {
        e.newConnection();
        c = o("WAComms").getComms()?.socketId;
    }
    function y() {
        if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
            const t = m();
            const r = c;
            const a = function() {
                return t.handleOfflineEndStanza(r);
            };
            const i = d.size === 0 ? a() : (s || (s = n("Promise"))).allSettled(Array.from(d)).then(a);
            i.catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[one-queue] offline_end failed: ",
                    ""
                ])), t);
            });
        }
    }
    function C() {
        return m().waitForWAInfraOfflineSyncEnd();
    }
    l.getWAWebOneQueue = m;
    l.enqueueOnOneQueue = p;
    l.handleOneQueueOfflineStart = f;
    l.handleOneQueueOfflineIb = g;
    l.handleOneQueueOfflineEnd = y;
    l.waitForOneQueueOfflineEnd = C;
}, 98);