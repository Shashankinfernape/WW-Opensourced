__d("WAWebVoipWebTransportDataChannelThread", [
    "Promise",
    "WAWebNoop",
    "WAWebVoipJsWorkerThread",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipWebTransportSendRingBuffer",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {
        incomingMaxBufferedDatagrams: 512,
        outgoingMaxBufferedDatagrams: 64,
        outgoingMaxAgeMs: 0
    };
    const u = (()=>{
        function t(e) {
            this.$3 = o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.WEBTRANSPORT_SEND_RING);
            this.$4 = true;
            this.$5 = 0;
            this.$6 = new Map;
            this.$7 = new Map;
            this.$8 = new Map;
            this.$9 = null;
            this.$10 = new Map;
            this.$2 = e;
        }
        t.create = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = yield r("WAWebVoipJsWorkerThread").create();
                const n = new t(e);
                n.$1();
                return n;
            });
            function o() {
                return e.apply(this, arguments);
            }
            return o;
        })();
        const t_prototype = t.prototype;
        t_prototype.$1 = function() {
            const e = this;
            this.$2.worker.addMessageListener("webTransportState", function(t) {
                e.$11(t);
            });
        };
        t_prototype.$11 = function(t) {
            let e;
            const n = t.event === "closed" || t.event === "error";
            const r = this.$8.get(t.connectionId);
            if (n) {
                this.$12(t.connectionId, t.attemptId);
            }
            if (!(t.event === "open" && (this.$13(t) || r !== t.attemptId))) {
                if (!(!n && t.event !== "open" && r !== t.attemptId || n && (this.$14(t.connectionId, t.attemptId), r !== t.attemptId || t.event === "error" && this.$15(t)) || (e = this.$9) == null)) {
                    e.call(this, {
                        connectionId: t.connectionId,
                        attemptId: t.attemptId,
                        event: t.event,
                        relayGeneration: t.relayGeneration,
                        error: t.error,
                        stats: t.stats
                    });
                }
            }
        };
        t_prototype.$12 = function(t, n) {
            const e = this.$10.get(t);
            if (e != null && e.attemptId === n) {
                this.$10.delete(t);
            }
        };
        t_prototype.$13 = function(t) {
            const e = this.$6.get(t.connectionId);
            if (e == null || e.attemptId !== t.attemptId) {
                return false;
            }
            this.$6.delete(t.connectionId);
            this.$10.delete(t.connectionId);
            if (e.sendRing != null && t.sendRingReady === true) {
                this.$10.set(t.connectionId, {
                    attemptId: e.attemptId,
                    producer: e.sendRing
                });
            }
            e.resolve();
            return true;
        };
        t_prototype.$15 = function(t) {
            const n = this.$6.get(t.connectionId);
            if (n == null || n.attemptId !== t.attemptId) {
                return false;
            }
            this.$6.delete(t.connectionId);
            n.reject(t.error ?? r("err")("WebTransport worker connect failed"));
            return true;
        };
        t_prototype.$14 = function(t, n) {
            if (this.$8.get(t) === n) {
                this.$8.delete(t);
            }
            const e = this.$7.get(t);
            if (e != null && e.attemptId === n) {
                this.$7.delete(t);
                e.resolve();
            }
        };
        t_prototype.registerStateHandler = function(t) {
            this.$9 = t;
        };
        t_prototype.connect = function(a, i, l, u, c, d = s) {
            const t = this;
            if (this.$4) {
                if (this.$6.has(a)) {
                    return (e || (e = n("Promise"))).reject(r("err")(`WebTransport connection already pending: ${a}`));
                }
                return new (e || (e = n("Promise")))(function(resolve, n) {
                    const r = ++t.$5;
                    const s = t.$3 ? o("WAWebVoipWebTransportSendRingBuffer").createWebTransportSendRing() : null;
                    const m = {
                        attemptId: r,
                        reject: n,
                        resolve,
                        sendRing: s?.producer
                    };
                    t.$6.set(a, m);
                    t.$8.set(a, r);
                    try {
                        t.$16(a, i, l, u, c, r, d, s?.ringBuffer);
                        return;
                    } catch (error) {
                        if (s == null) {
                            t.$17(a, r, n, error);
                            return;
                        }
                        t.$3 = false;
                        m.sendRing = null;
                    }
                    try {
                        t.$16(a, i, l, u, c, r, d);
                    } catch (error) {
                        t.$17(a, r, n, error);
                    }
                });
            }
            return (e || (e = n("Promise"))).reject(r("err")("WebTransport worker is not active"));
        };
        t_prototype.$16 = function(t, n, r, o, a, attemptId, datagramConfig, sendRing) {
            this.$2.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "openWebTransport",
                connectionId: t,
                url: n,
                ip: r,
                port: o,
                relayGeneration: a,
                attemptId,
                datagramConfig,
                sendRing
            });
        };
        t_prototype.$17 = function(t, n, o, a) {
            this.$6.delete(t);
            if (this.$8.get(t) === n) {
                this.$8.delete(t);
            }
            o(r("err")(String(a)));
        };
        t_prototype.resetDatagramHealth = function(t) {
            if (this.$4) {
                this.$2.worker.postMessage({
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "resetWebTransportDatagramHealth",
                    relayGeneration: t
                });
            }
        };
        t_prototype.send = function(t, n) {
            if (!this.$4 || this.$6.has(t)) {
                return false;
            }
            const e = this.$10.get(t);
            if (e != null) {
                return e.producer.write(n);
            }
            try {
                this.$2.worker.postMessage({
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "sendWebTransportDatagram",
                    connectionId: t,
                    data: n
                }, [
                    n
                ]);
                return true;
            } catch (e) {
                return false;
            }
        };
        t_prototype.close = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                if (this.$4) {
                    if (t == null) {
                        yield (e || (e = n("Promise"))).all(Array.from(this.$8.keys()).map((e)=>r.$18(e)));
                        return;
                    }
                    return this.$18(t);
                }
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.$18 = function(o) {
            this.$10.delete(o);
            const t = this.$8.get(o);
            const a = this.$7.get(o);
            if (a != null && a.attemptId === t) {
                return a.promise;
            }
            const i = this.$6.get(o);
            if (i != null) {
                this.$6.delete(o);
                i.reject(r("err")("WebTransport connect aborted"));
            }
            if (t == null) {
                return (e || (e = n("Promise"))).resolve();
            }
            a?.resolve();
            let resolve = r("WAWebNoop");
            const promise = new (e || (e = n("Promise")))(function(e) {
                resolve = function() {
                    return e();
                };
            });
            this.$7.set(o, {
                attemptId: t,
                promise,
                resolve
            });
            this.$2.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "closeWebTransport",
                connectionId: o
            });
            return promise;
        };
        t_prototype.isActive = function() {
            return this.$4;
        };
        t_prototype.shutdown = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.$4) {
                    yield this.close();
                    this.$4 = false;
                    yield this.$2.shutdown();
                    this.$9 = null;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    l.default = u;
}, 98);