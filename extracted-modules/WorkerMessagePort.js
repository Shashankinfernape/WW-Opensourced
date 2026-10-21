__d("WorkerMessagePort", [
    "Deferred",
    "FBLogger",
    "MainPageUrl",
    "Promise",
    "PromiseAnnotate",
    "SimpleHook",
    "VirtualMessageChannel",
    "WorkerMessagePortLogging",
    "performanceAbsoluteNow",
    "promiseDone"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(e) {
        return e;
    }
    const d = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("SimpleHook").SimpleHook);
    function m(e, t) {
        e.__timing = t;
    }
    function p(e) {
        return e.__timing;
    }
    const _ = (()=>{
        function e(e, t) {
            const n = this;
            this.$1 = {};
            this.onUnhandledMessage = new d;
            this.onMessage = new d;
            this.onPostMessage = new d;
            this.onError = new d;
            this.$2 = e;
            this.name = t;
            this.$2.addEventListener("message", function(e) {
                return n.onMessageHandler(e.data);
            });
            this.$2.addEventListener("error", function(e) {
                return n.onError.call(e);
            });
            this.onPostMessage.add(function(e) {
                m(e, {
                    receiveDateTime: -1,
                    receiveTimestamp: -1,
                    sendDateTime: Date.now(),
                    sendDelayHighPrecision: 0,
                    sendDelayLowPrecision: 0,
                    sendTimestamp: (u || (u = r("performanceAbsoluteNow")))()
                });
            });
            this.onMessage.add(function(e) {
                const t = p(e);
                if (t != null) {
                    const { sendDateTime, sendTimestamp } = t;
                    const l = (u || (u = r("performanceAbsoluteNow")))();
                    const s = Date.now();
                    t.receiveTimestamp = l;
                    t.receiveDateTime = s;
                    t.sendDelayHighPrecision = l - sendTimestamp;
                    t.sendDelayLowPrecision = s - sendDateTime;
                    o("WorkerMessagePortLogging").logMessageTiming(n.name, t);
                }
            });
        }
        const e_prototype = e.prototype;
        e_prototype.onMessageHandler = function(t) {
            try {
                this.onMessage.call(t);
                const e = this.$1[t.type];
                if (e) {
                    e.call(t);
                } else {
                    this.onUnhandledMessage.call(t);
                }
            } catch (error) {
                this.onError.call(error);
            }
        };
        e_prototype.postMessage = function(t, n) {
            this.onPostMessage.call(t);
            if (n) {
                this.$2.postMessage(t, n);
            } else {
                this.$2.postMessage(t);
            }
        };
        e_prototype.addMessageListener = function(t, n) {
            let e = this.$1[t];
            if (!e) {
                e = new d;
                this.$1[t] = e;
            }
            return e.add(n);
        };
        e_prototype.removeMessageListener = function(t, n) {
            const e = this.$1[t];
            return !!e && e.remove(n);
        };
        e_prototype.removeAllMessageListeners = function(t) {
            const e = this.$1[t];
            if (e) {
                e.clear();
            }
        };
        e_prototype.onMessageOnce = function(t, r) {
            const e = this;
            return new (s || (s = n("Promise")))(function(n) {
                var o = e.addMessageListener(t, function(a) {
                    if (r(a)) {
                        e.removeMessageListener(t, o);
                        n(a);
                    }
                });
            });
        };
        e_prototype.close = function() {
            const e = this.$2;
            e.close?.();
            e.terminate?.();
        };
        e_prototype.isWrappingVirtualMessagePort = function() {
            return this.$2 instanceof o("VirtualMessageChannel").VirtualMessagePort;
        };
        return e;
    })();
    function f(e) {
        return e;
    }
    const g = ((t)=>{
        function a(a, i) {
            let l;
            l = t.call(this, a, i) || this;
            const u = l;
            const d = new (r("Deferred"));
            const m = d.getPromise();
            u.addMessageListener("endpoint_started", function(e) {
                d.resolve(e);
                const t = p(e);
                u.postMessage({
                    endpoint: e.endpoint,
                    startSendTimestamp: t?.sendTimestamp,
                    targetEndpoint: l.name,
                    type: "endpoint_started_received"
                });
            });
            const _ = u.onMessageOnce("endpoint_started_received", function() {
                return true;
            });
            (e || (e = o("PromiseAnnotate"))).setDisplayName(m, "endpoint_started");
            e.setDisplayName(_, "endpoint_started_received");
            u.postMessage({
                endpoint: l.name,
                type: "endpoint_started"
            });
            r("promiseDone")(m, function(e) {
                const t = p(e);
                o("WorkerMessagePortLogging").logMessageTiming(l.name, t);
            });
            r("promiseDone")(_, function(e) {
                const t = p(e);
                if (t != null) {
                    o("WorkerMessagePortLogging").logMessageTiming(l.name, t, true);
                }
            });
            l.fullyConnected = (s || (s = n("Promise"))).race([
                m,
                _
            ]).then(()=>l);
            return l;
        }
        babelHelpers.inheritsLoose(a, t);
        return a;
    })(_);
    l.getMessageTiming = p;
    l.WorkerMessagePort = _;
    l.CastWorkerMessagePort = f;
    l.WorkerSyncedMessagePort = g;
}, 98);