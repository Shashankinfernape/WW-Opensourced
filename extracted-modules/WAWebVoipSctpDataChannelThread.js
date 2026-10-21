__d("WAWebVoipSctpDataChannelThread", [
    "Promise",
    "WALogger",
    "WAWebAudioUtility",
    "WAWebBackendApi",
    "WorkerMessagePort",
    "asyncToGeneratorRuntime"
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
    const E = 262144;
    const k = 8;
    const I = (()=>{
        function r(t) {
            this.$4 = false;
            this.$5 = null;
            this.$1 = t;
            const n = t.startJsWorkerThread();
            const r = t.getJsWorkerPThreadId(n);
            this.$2 = n;
            this.$3 = r;
            this.worker = o("WorkerMessagePort").CastWorkerMessagePort(t.PThread.pthreads[r]);
            this.$4 = true;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] WASM pthread created, threadId: ",
                ""
            ])), r);
        }
        r.create = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Creating pthread for DC I/O"
                ])));
                const e = yield o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
                const t = new r(e);
                const n = yield t.initRingBuffer();
                if (!n) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] Ring buffer init failed, using main thread"
                    ])));
                }
                return t;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        const r_prototype = r.prototype;
        r_prototype.transferChannel = function({ channel, connectionId, ip, port }) {
            if (!this.$4) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Cannot transfer channel - thread not active"
                ])));
                return false;
            }
            try {
                this.worker.postMessage({
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "transferDataChannel",
                    channel,
                    connectionId,
                    ip,
                    port
                }, [
                    channel
                ]);
                return true;
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Failed to transfer channel ",
                    ": ",
                    ""
                ])), connectionId, error);
                return false;
            }
        };
        r_prototype.sendPacket = function(t, n) {
            if (!this.$4) {
                return false;
            }
            try {
                this.worker.postMessage({
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "sendPacket",
                    connectionId: t,
                    data: n
                }, [
                    n
                ]);
                return true;
            } catch (error) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Failed to send packet on ",
                    ": ",
                    ""
                ])), t, error);
                return false;
            }
        };
        r_prototype.closeChannel = function(t) {
            if (this.$4) {
                this.worker.postMessage({
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "closeDataChannel",
                    connectionId: t
                });
            }
        };
        r_prototype.isActive = function() {
            return this.$4;
        };
        r_prototype.getVoipWasm = function() {
            return this.$1;
        };
        r_prototype.ping = function() {
            if (!this.$4) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Cannot ping - thread not active"
                ])));
                return;
            }
            this.worker.postMessage({
                type: "cmd",
                cmd: "jsWorkerCmd",
                jsWorkerCmd: "ping",
                timestamp: Date.now()
            });
        };
        r_prototype.setRemoveRelayPortOverride = function(t) {
            if (this.$4) {
                this.worker.postMessage({
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "setRemoveRelayPortOverride",
                    enabled: t
                });
            }
        };
        r_prototype.setSctpTimeoutMs = function(t) {
            if (this.$4) {
                this.worker.postMessage({
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "setSctpTimeoutMs",
                    ms: t
                });
            }
        };
        r_prototype.setRelayParkedTxIdleMs = function(t) {
            if (this.$4) {
                this.worker.postMessage({
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "setRelayParkedTxIdleMs",
                    ms: t
                });
            }
        };
        r_prototype.updateIceRtt = function(rttMs, relayIp, relayPort) {
            if (this.$4) {
                this.worker.postMessage({
                    type: "cmd",
                    cmd: "jsWorkerCmd",
                    jsWorkerCmd: "updateIceRtt",
                    rttMs,
                    relayIp,
                    relayPort
                });
            }
        };
        r_prototype.joinThread = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                for(var e = 50, r = 0; r < e; r++){
                    const a = this.$1.tryJoinJsWorkerThread(this.$2);
                    if (a === 0) {
                        return true;
                    }
                    yield new (L || (L = n("Promise")))(function(e) {
                        t.setTimeout(function() {
                            e();
                        }, 100);
                    });
                }
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] joinThread max retries (",
                    "), stuck"
                ])), e);
                this.$4 = false;
                return false;
            });
            function r() {
                return e.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.initRingBuffer = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!this.$4) {
                    o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] Cannot init ring buffer - thread not active"
                    ])));
                    return false;
                }
                const e = this.$1;
                const dataSize = E;
                const n = dataSize + k;
                try {
                    const r = yield o("WAWebAudioUtility").mallocWasmBuffer(n);
                    if (r == null || r === 0) {
                        o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [DCThread] Failed to allocate ring buffer"
                        ])));
                        return false;
                    }
                    const a = e.GROWABLE_HEAP_U8();
                    a.fill(0, r, r + n);
                    const i = e.initSctpRingBuffer(r, dataSize);
                    if (i) {
                        this.$5 = r;
                        this.worker.postMessage({
                            type: "cmd",
                            cmd: "jsWorkerCmd",
                            jsWorkerCmd: "initRingBuffer",
                            heapBuffer: a.buffer,
                            heapBufferOffset: r,
                            dataSize
                        });
                        return true;
                    }
                    o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] C++ initSctpRingBuffer failed"
                    ])));
                    yield o("WAWebAudioUtility").freeWasmBuffer(r);
                    return false;
                } catch (error) {
                    o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] Ring buffer init failed: ",
                        ""
                    ])), error);
                    if (this.$5 != null) {
                        this.shutdownRingBuffer();
                        yield this.freeRingBufferMemory();
                    }
                    return false;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.shutdownRingBuffer = function() {
            const e = this.$5;
            if (e != null) {
                try {
                    this.$1.shutdownSctpRingBuffer();
                } catch (error) {
                    o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] shutdownSctpRingBuffer error: ",
                        ""
                    ])), error);
                }
                if (this.$4) {
                    this.worker.postMessage({
                        type: "cmd",
                        cmd: "jsWorkerCmd",
                        jsWorkerCmd: "shutdownRingBuffer"
                    });
                }
            }
        };
        r_prototype.freeRingBufferMemory = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this.$5;
                if (e != null) {
                    this.$5 = null;
                    try {
                        yield o("WAWebAudioUtility").freeWasmBuffer(e);
                    } catch (error) {
                        o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [DCThread] Ring buffer free error: ",
                            ""
                        ])), error);
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.shutdown = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.$4) {
                    o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] Shutting down pthread"
                    ])));
                    this.shutdownRingBuffer();
                    this.$4 = false;
                    this.worker.postMessage({
                        type: "cmd",
                        cmd: "jsWorkerCmd",
                        jsWorkerCmd: "shutdown"
                    });
                    const e = yield this.joinThread();
                    if (e) {
                        yield this.freeRingBufferMemory();
                    } else {
                        o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [DCThread] Skip ring buffer free - join timed out"
                        ])));
                    }
                    o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DCThread] Pthread shutdown complete"
                    ])));
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return r;
    })();
    l.default = I;
}, 98);