__d("WAWebVoipAudioCaptureSharedBufferWorklet", [
    "WALogger",
    "WAResolvable",
    "WAWebAudioUtility",
    "WAWebVoipMicrophoneInputState",
    "WAWebVoipMicrophoneLevelReporter",
    "WAWebVoipSharedBufferCaptureProcessorConfig",
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
    function C(t, n) {
        const t_type = t.type;
        if (t_type !== "sharedBufferReady") {
            if (t_type === "resamplingConfigured") {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:",
                    "] resample ",
                    "->",
                    "Hz r=",
                    ""
                ])), n, String(t.inputRate), String(t.targetRate), String(t.ratio));
            } else if (t_type === "overrunEnded") {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:",
                    "] overrun end ",
                    " dropped ",
                    "ms"
                ])), n, String(t.droppedFrames), String(t.durationMs));
            } else if (t_type === "diagnostics") {
                const a = t.overrunCount;
                if (typeof a === "number" && a > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:",
                        "] Overruns: ",
                        ", available: ",
                        "/",
                        ""
                    ])), n, a, String(t.availableSpace), String(t.bufferSize));
                }
                const i = t.fillMs;
                if (typeof i === "number") {
                    const l = typeof t.audioWorkletTime === "number" ? t.audioWorkletTime.toFixed(2) : "n/a";
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:capture-skew] ",
                        " sab fill=",
                        "ms (",
                        "/",
                        " samples) totalFramesWritten=",
                        " workletTime=",
                        "s"
                    ])), n, i.toFixed(1), String(t.bufferedSamples), String(t.bufferSize), String(t.totalFramesWritten), l);
                }
            } else {
                return false;
            }
        }
        return true;
    }
    const b = 8192;
    const v = 8;
    const S = r("err")("Audio capture start cancelled");
    function R(e) {
        if (e()) {
            throw S;
        }
    }
    function L(error, isStartCancelled) {
        return error === S || isStartCancelled();
    }
    const E = (()=>{
        function e() {
            const e = this;
            this.audioWorkletNode = null;
            this.ringBufferPtr = null;
            this.isProcessorReady = false;
            this.processorReadyResolvable = null;
            this.mediaStreamSource = null;
            this.workletPreloadPromise = null;
            this.isWorkletPreloaded = false;
            this.$3 = null;
            this.$4 = null;
            this.$5 = 0;
            this.$6 = 0;
            this.$7 = 0;
            this.$8 = 0;
            this.consumeCaptureMetrics = function() {
                if (e.$8 === 0 && e.$5 === 0) {
                    return null;
                }
                const t = e.$8 > 0;
                const n = {
                    webAudioCaptureOverrunCount: e.$5,
                    webAudioCaptureSabFillAvgMs: t ? Math.round(e.$6 / e.$8) : null,
                    webAudioCaptureSabFillMaxMs: t ? Math.round(e.$7) : null
                };
                e.$5 = 0;
                e.$6 = 0;
                e.$7 = 0;
                e.$8 = 0;
                return n;
            };
            this.preloadWorkletModule = function(t) {
                const module_url = r("WAWebVoipSharedBufferCaptureProcessorConfig").module_url;
                if (module_url === "") {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Capture] Missing worklet module url, skipping preload"
                    ])));
                    return;
                }
                const a = t.audioWorklet.addModule(module_url).then(()=>{
                    e.isWorkletPreloaded = true;
                    e.workletPreloadPromise = null;
                }).catch((t)=>{
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Capture] Worklet preload failed, will load during start: ",
                        ""
                    ])), t);
                    e.isWorkletPreloaded = false;
                    e.workletPreloadPromise = null;
                });
                e.workletPreloadPromise = a;
            };
        }
        const e_prototype = e.prototype;
        e_prototype.$9 = function(t) {
            if (t.type === "overrunEnded") {
                const e = t.droppedFrames;
                if (typeof e === "number" && e > 0) {
                    this.$5 += e;
                }
                return;
            }
            if (t.type === "diagnostics") {
                const n = t.fillMs;
                if (!(typeof n !== "number" || !Number.isFinite(n))) {
                    this.$6 += n;
                    this.$8++;
                    if (n > this.$7) {
                        this.$7 = n;
                    }
                }
            }
        };
        e_prototype.startAudioCapture = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                const { audioContext, framesPerChunk, isStartCancelled, mediaStreamSource } = t;
                if (!isStartCancelled()) {
                    const u = t.onInputLevel;
                    this.$4 = u != null ? new (o("WAWebVoipMicrophoneLevelReporter")).WAWebVoipMicrophoneLevelReporter(u, "SharedBuffer:Capture") : null;
                    const c = ++e.$1;
                    let d = false;
                    try {
                        const m = o("WAWebAudioUtility").getCachedWasmModule();
                        if (m == null) {
                            throw r("err")("voip: [AV:SharedBuffer:Capture] WASM module not initialized");
                        }
                        const f = b;
                        const g = f * Float32Array.BYTES_PER_ELEMENT + v;
                        this.ringBufferPtr = yield o("WAWebAudioUtility").mallocWasmBuffer(g);
                        R(isStartCancelled);
                        const h = this.ringBufferPtr;
                        if (h == null) {
                            throw r("err")("voip: [AV:SharedBuffer:Capture] Failed to allocate ring buffer");
                        }
                        const y = m.GROWABLE_HEAP_U8();
                        y.fill(0, h, h + g);
                        yield this.$10(audioContext, isStartCancelled);
                        R(isStartCancelled);
                        const S = new AudioWorkletNode(audioContext, "voip-shared-buffer-capture-processor", {
                            numberOfInputs: 1,
                            numberOfOutputs: 0
                        });
                        this.audioWorkletNode = S;
                        S.port.onmessage = function({ data }) {
                            if (!(typeof data !== "object" || data == null)) {
                                if (data.type === "ready") {
                                    n.isProcessorReady = true;
                                    n.processorReadyResolvable?.resolve();
                                    n.processorReadyResolvable = null;
                                } else if (data.type === "level") {
                                    const o = data.rmsDbfs;
                                    if (typeof o === "number" && Number.isFinite(o)) {
                                        n.$4?.forward(o);
                                    }
                                } else {
                                    n.$9(data);
                                    C(data, "Capture");
                                }
                            }
                        };
                        yield this.waitForProcessorReady();
                        R(isStartCancelled);
                        const E = m.GROWABLE_HEAP_F32();
                        const k = E.buffer;
                        S.port.postMessage({
                            type: "initSharedBuffer",
                            heapBuffer: k,
                            heapBufferOffset: h,
                            bufferSize: f,
                            targetSampleRate: t.sampleRate,
                            reportInputLevel: this.$4 != null,
                            levelReportIntervalMs: o("WAWebVoipMicrophoneInputState").LEVEL_REPORT_INTERVAL_MS
                        });
                        this.mediaStreamSource = mediaStreamSource;
                        mediaStreamSource.connect(S);
                        R(isStartCancelled);
                        const I = window.performance.now();
                        const T = m.startAudioReaderThread(h, f, framesPerChunk);
                        const D = window.performance.now() - I;
                        if (!T) {
                            throw r("err")("voip: [AV:SharedBuffer:Capture] Failed to start audio reader thread");
                        }
                        e.$2 = c;
                        this.$3 = c;
                        S.port.postMessage({
                            type: "start"
                        });
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:SharedBuffer:Capture] capture started, [AV:capture-skew] startAudioReaderThread took ",
                            "ms"
                        ])), D.toFixed(1));
                    } catch (error) {
                        if (L(error, isStartCancelled) || (o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:SharedBuffer:Capture] Failed to start capture: ",
                            ""
                        ])), error), d = true, yield this.stopAudioCapture(c), isStartCancelled())) {
                            return;
                        }
                        throw r("err")("voip: [AV:SharedBuffer:Capture] Failed to start capture");
                    } finally{
                        if (isStartCancelled() && !d) {
                            yield this.stopAudioCapture(c);
                        }
                    }
                }
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        e_prototype.$10 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                if (this.workletPreloadPromise != null) {
                    yield this.workletPreloadPromise;
                    R(t);
                }
                if (!this.isWorkletPreloaded) {
                    const n = r("WAWebVoipSharedBufferCaptureProcessorConfig").module_url;
                    if (n === "") {
                        throw r("err")("voip: [AV:SharedBuffer:Capture] Missing worklet module url");
                    }
                    yield e.audioWorklet.addModule(n);
                    R(t);
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.waitForProcessorReady = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                const t = 5000;
                if (!this.isProcessorReady) {
                    this.processorReadyResolvable = new (o("WAResolvable")).Resolvable;
                    const n = window.setTimeout(function() {
                        if (e.processorReadyResolvable != null) {
                            e.processorReadyResolvable.reject(r("err")("voip: [AV:SharedBuffer:Capture] Processor failed to become ready within 5s"));
                            e.processorReadyResolvable = null;
                        }
                    }, t);
                    try {
                        yield this.processorReadyResolvable?.promise;
                    } finally{
                        window.clearTimeout(n);
                    }
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.stopAudioCapture = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                try {
                    const n = t ?? this.$3;
                    const r = n == null ? e.$2 == null : e.$2 === n;
                    const a = o("WAWebAudioUtility").getCachedWasmModule();
                    if (r && a != null) {
                        try {
                            if (a.isAudioReaderThreadRunning()) {
                                a.stopAudioReaderThread();
                            }
                            if (e.$2 === n) {
                                e.$2 = null;
                            }
                            if (this.$3 === n) {
                                this.$3 = null;
                            }
                        } catch (error) {
                            o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:SharedBuffer:Capture] reader stop err: ",
                                ""
                            ])), error);
                        }
                    }
                    if (this.audioWorkletNode != null) {
                        this.audioWorkletNode.port.postMessage({
                            type: "stop"
                        });
                    }
                    if (this.mediaStreamSource != null) {
                        try {
                            this.mediaStreamSource.disconnect();
                        } catch (e) {}
                        this.mediaStreamSource = null;
                    }
                    if (this.audioWorkletNode != null) {
                        this.audioWorkletNode.disconnect();
                        this.audioWorkletNode = null;
                    }
                    const i = this.ringBufferPtr;
                    if (i != null) {
                        this.ringBufferPtr = null;
                        try {
                            yield o("WAWebAudioUtility").freeWasmBuffer(i);
                        } catch (error) {
                            o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:SharedBuffer:Capture] Error freeing ring buffer: ",
                                ""
                            ])), error);
                        }
                    }
                    this.isProcessorReady = false;
                    this.processorReadyResolvable = null;
                    this.isWorkletPreloaded = false;
                    this.workletPreloadPromise = null;
                    this.$4 = null;
                } catch (error) {
                    o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Capture] Cleanup error: ",
                        ""
                    ])), error);
                }
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        e_prototype.reconnect = function(t) {
            if (this.mediaStreamSource != null) {
                try {
                    this.mediaStreamSource.disconnect();
                } catch (e) {}
            }
            this.mediaStreamSource = t;
            if (this.audioWorkletNode != null) {
                t.connect(this.audioWorkletNode);
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Capture] Reconnected to new stream"
                ])));
            }
        };
        return e;
    })();
    E.$1 = 0;
    E.$2 = null;
    l.handleSharedBufferWorkletDiagnostics = C;
    l.WAWebVoipAudioCaptureSharedBufferWorklet = E;
}, 98);