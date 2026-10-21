__d("WAComms", [
    "Promise",
    "WAArrayUtils",
    "WAErrors",
    "WALogger",
    "WANotifyConnectionChangeFactory",
    "WAPromiseRetryLoop",
    "WAResolvable",
    "WAShiftTimer",
    "WASmaxInPingsClientResponseServerResponse",
    "WASmaxOutPingsClientRequest",
    "WASmaxParseUtils",
    "WATimeUtils",
    "WAWap",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    let M;
    let w;
    let A;
    let F;
    let O;
    let B;
    let W;
    let q;
    let U;
    let V = null;
    let H = function(t, n, r) {
        return new K(t, n, r);
    };
    function G(e) {
        H = e;
    }
    function z(e) {
        return e;
    }
    const j = 0;
    var K = (()=>{
        function t(t, r, a, i) {
            const l = this;
            this.$1 = null;
            this.$2 = 1;
            this.nextSocketId = 1;
            this.pendingIqs = new Map;
            this.ackHandlers = [];
            this.pendingSmaxStanzas = new Map;
            this.$4 = new (o("WAResolvable")).Resolvable;
            this.socketAbortController = null;
            this.activePing = null;
            this.$5 = new Set;
            this.$6 = 0;
            this.$7 = 0;
            this.socketId = j;
            this.socket = null;
            this.softCloseSocket = null;
            this.setOnBeforeCastStanzaForE2E = function(e) {
                l.config.handlers.onBeforeCastStanzaForE2E = e;
            };
            this.getAndIncrementNextOrderedId = function() {
                return l.$2++;
            };
            this.waitForNetworkHealth = function() {
                if (!l.$1) {
                    l.$1 = new (o("WAResolvable")).Resolvable;
                }
                return l.$1.promise;
            };
            this.handleStanza = function(t, r, a) {
                const i = o("WASmaxParseUtils").attrString(t, "id");
                if (i.success && t.tag !== "receipt") {
                    const u = i.value;
                    const c = l.pendingSmaxStanzas.get(u);
                    if (c) {
                        l.pendingSmaxStanzas.delete(u);
                        c.resolve(t);
                        l.maybeScheduleHealthCheck();
                        return (U || (U = n("Promise"))).resolve("NO_ACK");
                    }
                }
                const d = be(t);
                if (d != null) {
                    const m = l.pendingIqs.get(d);
                    if (m) {
                        l.pendingIqs.delete(d);
                        m.resolve(t);
                        l.maybeScheduleHealthCheck();
                    } else {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "handleIq no handler for iq with id ",
                            ""
                        ])), d);
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "handleIq no handler for iq"
                        ])));
                    }
                } else if (t.tag === "ack") {
                    l.handleAck(t);
                } else {
                    if (t.tag === "failure" && l.config.shouldBlockReceivingUntilSuccess) {
                        return l.$3(t, r, a);
                    }
                    return l.$4.promise.then(()=>l.$3(t, r, a));
                }
                return (U || (U = n("Promise"))).resolve("NO_ACK");
            };
            this.deadSocketTimer = new (o("WAShiftTimer")).ShiftTimer(function(e) {
                if (e === l.socketId) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] Socket ",
                        " expired"
                    ])), e);
                    if (l.softCloseSocket) {
                        l.softCloseSocket();
                    }
                }
            });
            this.healthCheckTimer = new (o("WAShiftTimer")).ShiftTimer(function() {
                if (l.socketId) {
                    l.sendPing();
                }
            });
            this.stopComms = function() {
                l.socketLoop.endWithValue();
                l.socket?.close();
            };
            this.closeSocketAndPreventRetry = function() {
                l.socketLoop.endWithValue();
                if (l.socket) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] closeSocketAndPreventRetry called"
                    ])));
                    l.socket.close();
                }
            };
            this.closeSocketAndPause = function() {
                l.socketLoop.pauseOnNextIteration();
                if (l.socket) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] closeSocketAndPause called"
                    ])));
                    l.socket.close();
                }
            };
            this.closeSocketAndResume = function() {
                l.socketLoop.unpause();
                if (l.socket) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] closeSocketAndResume called"
                    ])));
                    l.socket.close();
                }
            };
            this.openSocketLoop = function() {
                l.socketLoop.start();
            };
            this.maybeResetSocketLoop = function() {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] maybeResetSocketLoop"
                ])));
                if (!l.isSocketConnected()) {
                    l.socketLoop.reset();
                }
            };
            this.forceResetSocketLoop = function() {
                l.socketLoop.reset();
            };
            this.forceAbortSocketConnection = function() {
                l.socketAbortController?.abort();
                l.softCloseSocket?.();
            };
            this.closeSocket = function() {
                if (l.socket) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] Socket ",
                        " closed"
                    ])), l.socketId);
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] closeSocket called"
                    ])));
                    l.socket.close();
                }
            };
            this.closeSocketInDebugMode = function() {
                const e = l.socket;
                if (e) {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "closeSocket called"
                    ])));
                    e.setOnClose(function() {
                        const e = l.socketId;
                        o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[comms] Socket ",
                            " closed"
                        ])), e);
                        if (l.activePing && e === l.activePing.socketId) {
                            l.activePing.handler.resolve();
                            l.activePing = null;
                        }
                        l.filterPending(function(t) {
                            return t.attachedToSocketId === e;
                        }).forEach((e)=>void l.removeHandler(e));
                        if (e === l.socketId) {
                            l.socketId = j;
                            l.socket = null;
                            l.$8(false, j);
                        }
                    });
                    e.close();
                }
            };
            this.onStreamErrorReceived = function() {
                l.socketLoop.cancelReset();
            };
            this.cancelDeadSocketTimer = function() {
                l.deadSocketTimer.cancel();
            };
            this.socketLoopIteration = function() {
                const t = l.nextSocketId++;
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] Socket ",
                    " opening"
                ])), t);
                const n = function() {
                    l.onConnectionChange("in_handshake");
                };
                l.config.handlers.onSocketLoopIteration?.(l.socketAbortController);
                if (typeof AbortController === "function") {
                    l.socketAbortController = new AbortController;
                }
                return l.config.openChatSocket(n, l.socketAbortController?.signal).then((e)=>{
                    if (e.success) {
                        const n = e.value;
                        l.config.handlers.onSocketOpen?.();
                        const r = new (o("WAResolvable")).Resolvable;
                        o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                            "[comms] Socket ",
                            " opened"
                        ])), t);
                        l.socketId = t;
                        l.socket = n;
                        l.$7 = self.performance.now();
                        l.$6 = 0;
                        l.$8(true, t);
                        l.softCloseSocket = function() {
                            l.softCloseSocket = null;
                            if (l.socket && l.config.shouldCloseStaleSocket) {
                                l.socket.close();
                                l.socket = null;
                                l.$8(false);
                            }
                            r.resolve();
                        };
                        l.socketLoop.resetTimeoutAfter(10000);
                        l.deadSocketTimer.cancel();
                        l.maybeScheduleHealthCheck();
                        n.setOnFrame(function(e) {
                            return l.parseAndHandleStanza(t, e);
                        });
                        n.setOnClose(function() {
                            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                                "[comms] Socket ",
                                " closed"
                            ])), t);
                            if (l.activePing && t === l.activePing.socketId) {
                                l.activePing.handler.resolve();
                                l.activePing = null;
                            }
                            l.filterPending(function(e) {
                                return e.attachedToSocketId === t;
                            }).forEach((e)=>void l.removeHandler(e));
                            if (t === l.socketId) {
                                l.socketId = j;
                                l.socket = null;
                                l.$8(false, t);
                                l.onConnectionChange("disconnected");
                                if (l.config.handlers.onDisconnect != null) {
                                    l.config.handlers.onDisconnect();
                                }
                                r.resolve();
                            }
                        });
                        l.onConnectionChange("connected");
                        l.config.handlers.onConnect?.();
                        l.filterPending(function(e) {
                            return !e.attachedToSocketId;
                        }).sort((e, t)=>e.orderedId - t.orderedId).forEach((e)=>{
                            switch(e.type){
                                case "smax":
                                case "iq":
                                    l.maybeSendPendingStanza(e);
                                    break;
                                case "ack":
                                    l.$9(e);
                                    break;
                                default:
                                    e.type;
                                    break;
                            }
                        });
                        return r.promise;
                    } else {
                        const a = e.error;
                        switch(a){
                            case "max-hunters":
                                o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                                    "[comms] socketLoopIteration socket closed while in noise handshake using treasureHunt strategy"
                                ])));
                                break;
                            case "disconnected":
                                o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                                    "[comms] socketLoopIteration socket disconnected while in noise handshake"
                                ])));
                                break;
                            default:
                                return;
                        }
                    }
                }).catch((e)=>{
                    if (e instanceof o("WAErrors").Disconnected) {
                        o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                            "[comms] socketLoopIteration socket closed while in noise handshake"
                        ])));
                    } else {
                        o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                            "[comms] socketLoopIteration failed ",
                            ""
                        ])), e);
                    }
                });
            };
            this.$8 = i ?? function() {};
            this.$3 = t;
            this.onConnectionChange = o("WANotifyConnectionChangeFactory").notifyConnectionChangeFactory(r.handlers.onConnectionChange ?? function() {}, r.handlers.onOptimisticConnectionChange ?? function() {});
            this.gzipInflate = a;
            this.config = r;
            this.socketLoop = new (o("WAPromiseRetryLoop")).PromiseRetryLoop({
                name: "MainSocketLoop",
                code: le,
                timer: r.socketReconnectBackoffAlgo ?? {
                    jitter: 0.1,
                    max: r.maxSocketLoopWaitTime,
                    algo: {
                        type: "fibonacci",
                        first: 10000,
                        second: 10000
                    },
                    relativeDelay: true
                },
                resetDelay: 30000,
                isPauseEnabled: r.isPauseEnabled === true
            });
        }
        const a = t.prototype;
        a.setSocket = function(t) {
            this.socket = t;
        };
        a.addAckHandler = function(t) {
            this.ackHandlers.push(t);
        };
        a.removeAckHandler = function(t) {
            const e = this.ackHandlers.indexOf(t);
            if (e !== -1) {
                o("WAArrayUtils").removeIndexWithoutPreservingOrder(this.ackHandlers, e);
            }
        };
        a.filterPending = function(t) {
            const e = [];
            function n(n) {
                if (t(n)) {
                    e.push(n);
                }
            }
            this.pendingIqs.forEach(n);
            this.ackHandlers.forEach(n);
            this.pendingSmaxStanzas.forEach(n);
            return e;
        };
        a.sendPendingStanza = function(t) {
            t.cleanup?.();
            t.cleanup = void 0;
            this.$9(t);
        };
        a.$9 = function(t) {
            const e = this;
            this.callStanza(t.stanza).catch((n)=>{
                if (!(n instanceof o("WAErrors").BufferTooLargeError)) {
                    throw n;
                }
                e.$10(t, n);
            });
        };
        a.$10 = function(t, r) {
            if (t.type === "ack") {
                const e = this.ackHandlers.indexOf(t);
                if (e === -1) {
                    return;
                }
                o("WAArrayUtils").removeIndexWithoutPreservingOrder(this.ackHandlers, e);
            } else {
                const a = t.stanza.attrs.id;
                if (typeof a !== "string") {
                    return;
                }
                if (t.type === "iq") {
                    if (this.pendingIqs.get(a) !== t) {
                        return;
                    }
                    this.pendingIqs.delete(a);
                } else {
                    t.type;
                    if (this.pendingSmaxStanzas.get(a) !== t) {
                        return;
                    }
                    this.pendingSmaxStanzas.delete(a);
                }
                t.cleanup?.();
                t.cleanup = void 0;
            }
            t.resolve((U || (U = n("Promise"))).reject(r));
        };
        a.maybeSendPendingStanza = function(t) {
            if (t.attempt >= this.config.maxRetries) {
                this.config.handlers.onDropStanza?.(t);
                t.cleanup?.();
                t.cleanup = void 0;
                this.removeHandler(t, "max-retries");
            } else if (this.socket) {
                t.attempt += 1;
                this.sendPendingStanza(t);
                return;
            } else {
                o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "Comms has no open socket, will resend stanza when socket opens"
                ])));
            }
        };
        a.callStanzaAsync = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield this.callStanza(e, t);
                return n;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.callStanza = function(t, n) {
            const e = this.castStanza(t, n);
            this.deadSocketTimer.onOrBefore(this.config.deadSocketTime, this.socketId);
            this.healthCheckTimer.cancel();
            return e;
        };
        a.castStanzaAsync = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = yield this.castStanza(e);
                return t;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a.castStanza = function(t, r) {
            const e = this;
            try {
                const l = this.config.handlers.onBeforeCastStanzaForE2E?.(t, r);
                if (l != null) {
                    o("WALogger").DEV_XMPP(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                        "Dropping stanza since onBeforeCastStanza matched:\n",
                        ". We return mock response directly."
                    ], [
                        "Dropping stanza since onBeforeCastStanza matched:\\n",
                        ". We return mock response directly."
                    ])), t);
                    o("WALogger").DEV_XMPP(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                        "--- Receive (via SMAX+E2E) ---\n",
                        ""
                    ], [
                        "--- Receive (via SMAX+E2E) ---\\n",
                        ""
                    ])), l);
                    o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "Dropping stanza since onBeforeCastStanza matched. We return mock response directly."
                    ])));
                    if (Array.isArray(l)) {
                        return (U || (U = n("Promise"))).all(l.map((t)=>(U || (U = n("Promise"))).resolve(e.handleStanza(t, e.socketId, j))));
                    }
                    this.handleStanza(l, this.socketId, j);
                    return (U || (U = n("Promise"))).resolve();
                }
            } catch (e) {
                o("WALogger").DEV_XMPP(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                    "Error in onBeforeCastStanza, we consumed and continue with normal stanza sending to the server:\n",
                    ""
                ], [
                    "Error in onBeforeCastStanza, we consumed and continue with normal stanza sending to the server:\\n",
                    ""
                ])), e);
            }
            const s = this.socketOrThrow("castStanza");
            try {
                o("WALogger").DEV_XMPP(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                    "--- Sending ---\n",
                    ""
                ], [
                    "--- Sending ---\\n",
                    ""
                ])), t);
                return s.sendFrame(o("WAWap").encodeStanza(t)).then(()=>{
                    e.config.handlers.onCastStanza?.(t, r);
                }).catch((e)=>{
                    o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "castStanza async error ",
                        ""
                    ])), e);
                    if (e instanceof o("WAErrors").BufferTooLargeError) {
                        return (U || (U = n("Promise"))).reject(e);
                    }
                });
            } catch (e) {
                o("WALogger").ERROR(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                    "castStanza error ",
                    ""
                ])), e);
            }
            return (U || (U = n("Promise"))).resolve();
        };
        a.socketOrThrow = function(t) {
            const e = this.socket;
            if (e) {
                return e;
            }
            throw r("err")(`Comms.${t} called while no socket`);
        };
        a.startHandlingRequests = function() {
            o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                "Comms.startHandlingRequests"
            ])));
            this.$4.resolve();
            return this.$4.promise.then(()=>{});
        };
        a.parseAndHandleStanza = function(t, n) {
            const e = this;
            if (t === this.socketId) {
                this.deadSocketTimer.cancel();
                this.$6 = self.performance.now();
                if (this.$1) {
                    this.$1.resolve();
                    this.$1 = null;
                }
            }
            const r = o("WAWap").decodeStanza(n, this.gzipInflate).catch((e)=>{
                o("WALogger").ERROR(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                    "Failure parsing stanza!"
                ])));
                throw e;
            }).then((r)=>{
                o("WALogger").DEV_XMPP(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                    "--- Receiving ---\n",
                    ""
                ], [
                    "--- Receiving ---\\n",
                    ""
                ])), r);
                e.config.handlers.onHandleStanza?.(r, t, n.byteLength);
                const a = e.activePing;
                if (a && a.socketId === t && a.stanzaId === be(r)) {
                    e.activePing = null;
                    a.handler.resolve(r);
                    e.maybeScheduleHealthCheck();
                    return "NO_ACK";
                }
                return e.handleStanza(r, t, n.byteLength);
            }).then((n)=>{
                if (t === e.socketId) {
                    if (n === "CLOSE_SOCKET") {
                        o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                            "[comms] job response is CLOSE_SOCKET"
                        ])));
                        const r = e.socket;
                        if (r) {
                            r.close();
                        }
                    } else {
                        if (n !== "NO_ACK") {
                            e.castStanza(n);
                        }
                    }
                    return "NO_ACK";
                }
            });
            this.$5.add(r);
            r.finally(()=>void e.$5.delete(r));
        };
        a.handleAck = function(t) {
            for(var e = this.ackHandlers, n = -1, r = null; !r && ++n < e.length;){
                r = e[n].parseAndTest(t);
            }
            if (r) {
                const l = e[n];
                o("WAArrayUtils").removeIndexWithoutPreservingOrder(e, n);
                this.config.handlers.onHandleAck?.(t);
                l.resolve(r);
                this.maybeScheduleHealthCheck();
            } else {
                o("WALogger").WARN(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                    "handleAck: unrecognized ",
                    ""
                ])), t);
            }
        };
        a.removeHandler = function(t, r = "disconnect") {
            if (t.type === "iq" || t.type === "smax") {
                const e = t.stanza.attrs.id;
                if (!e || typeof e !== "string" || t.type === "iq" && !this.pendingIqs.delete(e) || t.type === "smax" && !this.pendingSmaxStanzas.delete(e)) {
                    return;
                }
            } else {
                t.type;
                const a = this.ackHandlers.indexOf(t);
                if (a === -1) {
                    return;
                }
                o("WAArrayUtils").removeIndexWithoutPreservingOrder(this.ackHandlers, a);
            }
            switch(r){
                case "disconnect":
                    t.resolve((U || (U = n("Promise"))).reject(new (o("WAErrors")).Disconnected));
                    break;
                case "abort":
                    t.resolve((U || (U = n("Promise"))).reject(new (o("WAErrors")).Aborted));
                    break;
                default:
                    t.resolve((U || (U = n("Promise"))).reject(new (o("WAErrors")).MaxRetries));
            }
        };
        a.maybeScheduleHealthCheck = function() {
            if (!this.healthCheckTimer.isScheduled() && !(this.activePing || this.ackHandlers.length || this.pendingIqs.size || this.pendingSmaxStanzas.size)) {
                const e = this.config.healthCheckInterval;
                const t = Math.ceil(e * 1000 * (1 + Math.random()));
                this.healthCheckTimer.onOrBefore(t);
            }
        };
        a.isSocketConnected = function() {
            return this.socket != null;
        };
        a.getMsSinceLastInboundRx = function() {
            if (!this.isSocketConnected() || this.$7 === 0) {
                return -1;
            }
            const e = this.$6 > 0 ? this.$6 : this.$7;
            return self.performance.now() - e;
        };
        a.sendIq = function(t) {
            const e = this;
            const { attachToSocket: a, iq: i, signal: l, timeoutSeconds: s } = t;
            const u = s === void 0 ? 0 : s;
            const c = t.type;
            const d = c === void 0 ? "iq" : c;
            return new (U || (U = n("Promise")))(function(t) {
                const s = i.attrs.id;
                if (!s || typeof s !== "string") {
                    throw r("err")(`[comms] sendIq given iq without id: ${String(i)}`);
                }
                const c = e.socketId;
                if (a && !c) {
                    t((U || (U = n("Promise"))).reject(new (o("WAErrors")).Offline));
                    return;
                }
                const m = function(a = "disconnect") {
                    const o = d === "iq" ? e.pendingIqs.get(s) : e.pendingSmaxStanzas.get(s);
                    if (!o) {
                        t((U || (U = n("Promise"))).reject(r("err")(`[comms] _sendIq unexisting stanza to be cancelled: ${s}`)));
                        return;
                    }
                    e.removeHandler(o, a);
                };
                let p = null;
                if (u > 0) {
                    const _ = setTimeout(m, u * 1000);
                    p = function() {
                        clearTimeout(_);
                    };
                }
                if (l != null) {
                    if (l.aborted) {
                        t((U || (U = n("Promise"))).reject(new (o("WAErrors")).Disconnected));
                        return;
                    } else {
                        const f = function() {
                            m("abort");
                        };
                        l.addEventListener("abort", f);
                        p = function() {
                            l.removeEventListener("abort", f);
                        };
                    }
                }
                const g = {
                    resolve: t,
                    stanza: i,
                    attachedToSocketId: a ? c : j,
                    orderedId: e.$2++,
                    attempt: 0,
                    cleanup: p
                };
                if (d === "iq") {
                    const h = babelHelpers.extends({
                        type: d
                    }, g);
                    e.pendingIqs.set(s, h);
                    e.config.handlers.onSendIq?.(i);
                    e.maybeSendPendingStanza(h);
                } else {
                    const y = babelHelpers.extends({
                        type: d
                    }, g);
                    e.pendingSmaxStanzas.set(s, y);
                    e.maybeSendPendingStanza(y);
                }
            });
        };
        a.sendPing = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!this.socketId) {
                    o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] sendPing when socket dead"
                    ])));
                    return false;
                }
                if (this.activePing && this.activePing.socketId === this.socketId) {
                    o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] sendPing ping still pending"
                    ])));
                    return false;
                }
                if (this.activePing) {
                    this.activePing.handler.resolve();
                }
                const e = o("WASmaxOutPingsClientRequest").makeClientRequest();
                const t = e.attrs.id;
                if (typeof t !== "string") {
                    o("WALogger").ERROR(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                        "[comms] No stanzaId in ping request stanza"
                    ])));
                    return false;
                }
                const n = new (o("WAResolvable")).Resolvable;
                this.activePing = {
                    socketId: this.socketId,
                    stanzaId: t,
                    handler: n
                };
                const r = Date.now();
                this.callStanza(e);
                const a = yield n.promise;
                const i = Date.now();
                if (a) {
                    const l = o("WASmaxInPingsClientResponseServerResponse").parseClientResponseServerResponse(a, e);
                    if (l.success) {
                        const c = i - r;
                        const d = Math.round(c / 2);
                        const m = o("WATimeUtils").castToUnixTime(l.value.t);
                        const p = Math.round((r + d) / 1000 - m);
                        this.config.handlers.onClockSkewUpdate?.(p);
                        return true;
                    }
                }
                return false;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    function Q() {
        return V;
    }
    function X(e, t, n, r = true) {
        if (V != null) {
            return V;
        }
        const o = H(e, t, n);
        V = o;
        if (r) {
            setTimeout(te, 0);
        }
        return o;
    }
    function Y() {
        const e = Ce("stopComms");
        e.stopComms();
        V = null;
    }
    function J() {
        const e = Ce("closeSocketAndPreventRetry");
        e.closeSocketAndPreventRetry();
    }
    function Z() {
        const e = Ce("closeSocketAndPause");
        e.closeSocketAndPause();
    }
    function ee() {
        const e = Ce("closeSocketAndResume");
        e.closeSocketAndResume();
    }
    function te() {
        const e = Ce("openSocketLoop");
        e.openSocketLoop();
    }
    function ne() {
        const e = Ce("maybeResetSocketLoop");
        e.maybeResetSocketLoop();
    }
    function re() {
        const e = Ce("forceResetSocketLoop");
        e.forceResetSocketLoop();
    }
    function oe() {
        const e = Ce("socketAbortController");
        e.forceAbortSocketConnection();
    }
    function ae() {
        let e;
        return !!((e = V) != null && e.isSocketConnected());
    }
    function ie() {
        return V?.getMsSinceLastInboundRx() ?? -1;
    }
    function le() {
        const e = Ce("socketLoopIteration");
        return e.socketLoopIteration();
    }
    function se() {
        const e = Ce("closeSocket");
        e.closeSocket();
    }
    function ue() {
        const e = Ce("onStreamErrorReceived");
        e.onStreamErrorReceived();
    }
    function ce() {
        const e = Ce("waitForConnection");
        e.sendPing();
        return e.waitForNetworkHealth();
    }
    function de(e, t) {
        const n = Ce("castStanza");
        if (n.isSocketConnected()) {
            n.castStanza(e, t);
        } else {
            o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                "Comms has no open socket"
            ])));
        }
    }
    function me(e) {
        const t = Ce("castStanza");
        return t.socketId === e;
    }
    function pe(e, t, n = 0, r, o = "iq") {
        const a = Ce("sendIq");
        return a.sendIq({
            attachToSocket: t,
            iq: e,
            signal: r,
            timeoutSeconds: n,
            type: o
        });
    }
    function _e(e, t) {
        const a = t?.withoutRetry ?? false;
        const i = t?.timeoutSeconds ?? 0;
        const l = t?.signal ?? null;
        return pe(e, a, i, l, "smax");
    }
    function fe() {
        const e = Ce("sendPing");
        return e.sendPing();
    }
    function ge() {
        return Ce("startHandlingRequests").startHandlingRequests();
    }
    function he() {
        if (V) {
            V.cancelDeadSocketTimer();
        }
    }
    function ye() {
        return V != null;
    }
    function Ce(e) {
        if (V) {
            return V;
        }
        throw r("err")(`[comms] ${e} called before startComms`);
    }
    function be(e) {
        if (e.tag === "iq") {
            const t = e.attrs.type;
            if (t === "result" || t === "error") {
                return o("WAWap").decodeAsString(e.attrs.id) || null;
            }
        }
        return null;
    }
    function ve() {
        const e = Ce("getAndIncrementNextOrderedId");
        return e.getAndIncrementNextOrderedId();
    }
    function Se() {
        V = null;
    }
    l.setCommsFactory = G;
    l.toSocketId = z;
    l.DEFAULT_SOCKET_ID = j;
    l.Comms = K;
    l.getComms = Q;
    l.startComms = X;
    l.stopComms = Y;
    l.closeSocketAndPreventRetry = J;
    l.closeSocketAndPause = Z;
    l.closeSocketAndResume = ee;
    l.openSocketLoop = te;
    l.maybeResetSocketLoop = ne;
    l.forceResetSocketLoop = re;
    l.forceAbortSocketConnection = oe;
    l.isSocketConnected = ae;
    l.getMsSinceLastInboundRx = ie;
    l.socketLoopIteration = le;
    l.closeSocket = se;
    l.onStreamErrorReceived = ue;
    l.waitForConnection = ce;
    l.castSmaxStanza = de;
    l.isActiveSocket = me;
    l._sendIq = pe;
    l.sendSmaxStanza = _e;
    l.sendPing = fe;
    l.startHandlingRequests = ge;
    l.cancelDeadSocketTimer = he;
    l.isCommsInitialized = ye;
    l.singletonOrThrowIfUninitialized = Ce;
    l.getAndIncrementNextOrderedId = ve;
    l.resetStateForTests = Se;
}, 98);