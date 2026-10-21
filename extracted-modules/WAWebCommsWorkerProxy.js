__d("WAWebCommsWorkerProxy", [
    "Promise",
    "WAComms",
    "WAErrors",
    "WALogger",
    "WAWap",
    "WAWebCommsWorkerReady",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = (()=>{
        function e(e) {
            const t = this;
            this.socketId = o("WAComms").DEFAULT_SOCKET_ID;
            this.$2 = false;
            this.$3 = 1;
            this.$4 = false;
            this.softCloseSocket = function() {
                t.$1.fireAndForget("comms", "softCloseSocket");
            };
            this.handleStanza = function() {
                throw r("err")("WAWebCommsWorkerProxy.handleStanza is not supported");
            };
            this.setOnBeforeCastStanzaForE2E = function() {
                throw r("err")("WAWebCommsWorkerProxy.setOnBeforeCastStanzaForE2E is not supported");
            };
            this.getAndIncrementNextOrderedId = function() {
                throw r("err")("WAWebCommsWorkerProxy.getAndIncrementNextOrderedId is not supported");
            };
            this.socketLoopIteration = function() {
                return t.$1.sendAndReceive("comms", "socketLoopIteration", void 0);
            };
            this.waitForNetworkHealth = function() {
                return t.$1.sendAndReceive("comms", "waitForNetworkHealth", void 0);
            };
            this.stopComms = function() {
                t.$1.fireAndForget("comms", "stopComms", void 0);
            };
            this.closeSocket = function() {
                t.$1.fireAndForget("comms", "closeSocket", void 0);
            };
            this.closeSocketInDebugMode = function() {
                t.$1.fireAndForget("comms", "closeSocketInDebugMode", void 0);
            };
            this.closeSocketAndPreventRetry = function() {
                t.$1.fireAndForget("comms", "closeSocketAndPreventRetry", void 0);
            };
            this.closeSocketAndPause = function() {
                t.$1.fireAndForget("comms", "closeSocketAndPause");
            };
            this.closeSocketAndResume = function() {
                t.$1.fireAndForget("comms", "closeSocketAndResume");
            };
            this.openSocketLoop = function() {
                t.$1.fireAndForget("comms", "openSocketLoop");
            };
            this.maybeResetSocketLoop = function() {
                t.$1.fireAndForget("comms", "maybeResetSocketLoop");
            };
            this.forceResetSocketLoop = function() {
                t.$1.fireAndForget("comms", "forceResetSocketLoop");
            };
            this.forceAbortSocketConnection = function() {
                t.$1.fireAndForget("comms", "forceAbortSocketConnection", void 0);
            };
            this.onStreamErrorReceived = function() {
                t.$1.fireAndForget("comms", "onStreamErrorReceived");
            };
            this.cancelDeadSocketTimer = function() {
                t.$1.fireAndForget("comms", "cancelDeadSocketTimer");
            };
            this.getMsSinceLastInboundRx = function() {
                return -1;
            };
            this.$1 = e;
        }
        const t = e.prototype;
        t.updateSocketState = function(t, n) {
            this.$2 = t;
            if (n != null) {
                this.socketId = o("WAComms").toSocketId(n);
            }
        };
        t.isSocketConnected = function() {
            return this.$2;
        };
        t.rebuildInRestartedWorker = function(t) {
            this.$2 = false;
            this.socketId = o("WAComms").DEFAULT_SOCKET_ID;
            this.$1.fireAndForget("comms", "createComms", t);
            if (this.$4) {
                this.startHandlingRequests();
            }
            this.$1.fireAndForget("comms", "openSocketLoop");
            o("WAWebCommsWorkerReady").setCommsWorkerReady(true);
        };
        t.sendIq = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const { attachToSocket: r, iq: a, signal: i, timeoutSeconds: l } = e;
                const u = l === void 0 ? 0 : l;
                const c = e.type;
                const d = c === void 0 ? "iq" : c;
                yield o("WAWebCommsWorkerReady").waitForCommsWorker();
                if (i?.aborted === true) {
                    throw new (o("WAErrors")).Disconnected("aborted while waiting for the backend worker");
                }
                const m = this.$3++;
                if (i != null) {
                    i.addEventListener("abort", function() {
                        t.$1.fireAndForget("comms", "abortSendIq", {
                            abortToken: m
                        });
                    });
                }
                const p = o("WAWap").encodeStanza(a);
                const _ = yield this.$1.sendAndReceive("comms", "sendIq", {
                    iq: p,
                    attachToSocket: r,
                    timeoutSeconds: u,
                    type: d,
                    abortToken: m
                }, void 0, void 0, void 0, [
                    p.buffer
                ]);
                return o("WAWap").decodeStanza(_, function(e) {
                    return (s || (s = n("Promise"))).resolve(e);
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.callStanza = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                yield o("WAWebCommsWorkerReady").waitForCommsWorker();
                const n = o("WAWap").encodeStanza(e);
                return this.$1.sendAndReceive("comms", "callStanza", {
                    stanza: n,
                    flags: t
                }, true, void 0, void 0, [
                    n.buffer
                ]);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.castStanza = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                yield o("WAWebCommsWorkerReady").waitForCommsWorker();
                const n = o("WAWap").encodeStanza(e);
                return this.$1.sendAndReceive("comms", "castStanza", {
                    stanza: n,
                    flags: t
                }, true, void 0, void 0, [
                    n.buffer
                ]);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.sendPing = function() {
            return this.$1.sendAndReceive("comms", "sendPing");
        };
        t.startHandlingRequests = function() {
            this.$4 = true;
            return this.$1.sendAndReceive("comms", "startHandlingRequests", void 0);
        };
        t.setSocket = function(t) {
            throw r("err")("WAWebCommsWorkerProxy.setSocket is not supported");
        };
        t.addAckHandler = function(t) {
            throw r("err")("WAWebCommsWorkerProxy.addAckHandler is not supported");
        };
        t.removeAckHandler = function(t) {
            throw r("err")("WAWebCommsWorkerProxy.removeAckHandler is not supported");
        };
        return e;
    })();
    let c = null;
    let d = null;
    function m(e) {
        if (d == null) {
            throw r("err")("[WAWebCommsWorkerProxy] comms startup args are null");
        }
        e.fireAndForget("comms", "createComms", d);
        const t = new u(e);
        c = t;
        o("WAWebCommsWorkerReady").setCommsWorkerReady(true);
        return t;
    }
    function p() {
        const t = c;
        if (!(t == null || d == null)) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] rebuilding comms in restarted backend worker"
            ])));
            t.rebuildInRestartedWorker(d);
        }
    }
    function _(e, t) {
        c?.updateSocketState(e, t);
    }
    function f(e) {
        d = e;
    }
    l.createCommsWorkerProxy = m;
    l.rebuildCommsInRestartedWorker = p;
    l.updateCommsProxySocketState = _;
    l.setStartCommsArgs = f;
}, 98);