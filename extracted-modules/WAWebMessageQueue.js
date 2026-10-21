__d("WAWebMessageQueue", [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseQueue",
    "WAPromiseTimeout",
    "WAWebApiContact",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebEventsWaitForReadyForOffline",
    "WAWebHandleMsgCommon",
    "WAWebMessageDeliveryCounters",
    "WAWebMessageQueueImpl",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeCounters",
    "WAWebOneQueue",
    "WAWebPromiseQueue",
    "WAWebWaitForInitialChatsSynced",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 20000;
    const d = {
        allChatQueue: new (o("WAWebPromiseQueue")).PromiseQueue,
        chatQueue: new (o("WAPromiseQueue")).PromiseQueueMap
    };
    const m = {
        allChatQueue: new (o("WAWebPromiseQueue")).PromiseQueue,
        chatQueue: new (o("WAPromiseQueue")).PromiseQueueMap
    };
    let p = null;
    const _ = {
        offline: 0,
        online: 0
    };
    function f(e) {
        if (e) {
            if (p == null) {
                p = new (o("WAWebPromiseQueue")).PromiseQueue;
            }
        } else {
            p = null;
        }
    }
    function g(e) {
        if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
            return C(e);
        }
        return h(e);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action: t, chatWid: n, isOffline: r, msgCategory: a, skipOfflineWait: i }) {
            const l = n.isRegularUser() && !n.isLid() ? o("WAWebApiContact").getCurrentLid(n) : null;
            const s = (l ?? n).toString();
            if (k(a)) {
                yield o("WAWebWaitForInitialChatsSynced").waitForInitialChatsSynced();
            }
            if (r && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete()) {
                o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued("offline", "legacy");
                return R("offline", E(s, t));
            }
            o("WAWebOfflineResumeCounters").maybeLogOfflineMsgRoutedToOnlineQueue(r, "legacy");
            o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued("online", "legacy");
            return R("online", I({
                enqueue: function() {
                    return $(s, t);
                },
                skipOfflineWait: i
            }));
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action: t, isOffline: n, msgCategory: r, skipOfflineWait: a }) {
            if (n && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete()) {
                o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued("offline", "one_queue");
                return S(t, r);
            }
            if (k(r)) {
                yield o("WAWebWaitForInitialChatsSynced").waitForInitialChatsSynced();
            }
            o("WAWebOfflineResumeCounters").maybeLogOfflineMsgRoutedToOnlineQueue(n, "one_queue");
            o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued("online", "one_queue");
            return R("online", I({
                enqueue: function() {
                    return o("WAWebOneQueue").enqueueOnOneQueue({
                        action: t,
                        isOffline: false
                    });
                },
                skipOfflineWait: a
            }));
        });
        return b.apply(this, arguments);
    }
    function v() {
        return babelHelpers.extends({}, _);
    }
    function S(e, t) {
        let r = null;
        return o("WAWebOneQueue").enqueueOnOneQueue({
            action: e,
            isOffline: true,
            waitForAdmission: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (k(t)) {
                        yield o("WAWebWaitForInitialChatsSynced").waitForInitialChatsSynced();
                    }
                    r = L("offline");
                    yield o("WAWebEventsWaitForReadyForOffline").waitForOfflineProcessReady();
                });
                function a() {
                    return e.apply(this, arguments);
                }
                return a;
            })()
        }).finally(()=>r?.());
    }
    function R(e, t) {
        return t.finally(L(e));
    }
    function L(e) {
        _[e]++;
        return function() {
            _[e]--;
        };
    }
    function E(t, r) {
        return m.allChatQueue.enqueue(function() {
            return m.chatQueue.enqueue(t, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebEventsWaitForReadyForOffline").waitForOfflineProcessReady();
                return o("WAPromiseTimeout").promiseTimeout(r(), c).catch((t)=>{
                    if (t instanceof o("WACustomError").TimeoutError) {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Offline chat queue MAX_MESSAGE_DELAY exceeded"
                        ]))).tags("messaging");
                        o("WAWebMessageDeliveryCounters").logMessageQueueTimeout("offline", "legacy");
                        return null;
                    }
                    throw t;
                });
            }));
        });
    }
    function k(e) {
        return e !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer && o("WAWebWaitForInitialChatsSynced").isWaitForInitialChatsSyncedPending();
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ enqueue: t, skipOfflineWait: n }) {
            const r = p;
            if (r != null) {
                if (n === true) {
                    return t();
                }
                return D({
                    enqueue: t,
                    onlineAdmissionQueue: r
                });
            }
            if (n !== true) {
                yield o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd();
            }
            return t();
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ enqueue: t, onlineAdmissionQueue: r }) {
            const a = o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd();
            let i = (u || (u = n("Promise"))).resolve(null);
            yield r.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield a;
                i = t();
            }));
            return i;
        });
        return x.apply(this, arguments);
    }
    function $(e, t) {
        return d.allChatQueue.enqueue(function() {
            return d.chatQueue.enqueue(e, function() {
                return o("WAPromiseTimeout").promiseTimeout(t(), c).catch((e)=>{
                    if (e instanceof o("WACustomError").TimeoutError) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Online chat queue MAX_MESSAGE_DELAY exceeded"
                        ]))).tags("messaging");
                        o("WAWebMessageDeliveryCounters").logMessageQueueTimeout("online", "legacy");
                        return null;
                    }
                    throw e;
                });
            });
        });
    }
    function P() {
        return m.allChatQueue.wait();
    }
    function N() {
        return d.allChatQueue.wait();
    }
    function M() {
        return p != null;
    }
    function w() {
        if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
            return (u || (u = n("Promise"))).resolve();
        }
        const e = p;
        if (e == null) {
            return N();
        }
        return e.enqueue(function() {
            return N();
        });
    }
    l.configureWorkerOnlineMessageQueueTracking = f;
    l.onMessageQueue = g;
    l.getMessageQueueDepth = v;
    l.waitForLegacyOfflineMessageQueue = P;
    l.waitForLegacyOnlineMessageQueue = N;
    l.isWorkerOnlineMessageQueueTrackingEnabled = M;
    l.waitForWorkerOnlineMessageQueueAfterOfflineDeliveryEnd = w;
}, 98);