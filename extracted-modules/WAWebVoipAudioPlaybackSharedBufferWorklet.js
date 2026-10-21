__d("WAWebVoipAudioPlaybackSharedBufferWorklet", [
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebMediaPermissionsUtils",
    "WAWebODS",
    "WAWebUA",
    "WAWebVoipBrowserMuteDetector",
    "WAWebVoipBrowserMuteState",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipSharedBufferPlaybackProcessorConfig",
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
    const F = 8192;
    const O = 16000;
    const B = 8;
    const W = 7;
    const q = 200;
    const U = 10;
    const V = 2;
    const H = 30;
    const G = r("err")("Audio playback start cancelled");
    function z() {
        return o("WAWebABProps").getABPropConfigValue("web_voip_audio_playback_use_media_element_output");
    }
    function j(e) {
        if (e()) {
            throw G;
        }
    }
    function K(error, isStartCancelled) {
        return error === G || isStartCancelled();
    }
    function Q(e) {
        const t = e;
        if (typeof t.setSinkId === "function") {
            return t;
        }
        return null;
    }
    function X(playbackOutputRoute) {
        switch(playbackOutputRoute){
            case "direct_audio_context":
                return "AV:SharedBuffer:Playback:AudioContext";
            case "media_element":
                return "AV:SharedBuffer:Playback:AudioElement";
            case "none":
                return "AV:SharedBuffer:Playback:NotConnected";
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${playbackOutputRoute}`);
                })();
        }
    }
    function Y(e, t) {
        const n = Math.ceil(e * W / 100);
        if (t <= 0) {
            return n;
        }
        const r = Math.ceil(n / t) * t;
        const o = e > t ? e - t : e;
        return Math.min(r, o);
    }
    function J(e, t, n) {
        return (e - t + n) % n;
    }
    function Z(playbackAudioContext, playbackSampleRate, n) {
        const r = n * 1000 / playbackSampleRate;
        const o = typeof playbackAudioContext.baseLatency === "number" ? playbackAudioContext.baseLatency * 1000 : 0;
        const a = typeof playbackAudioContext.outputLatency === "number" ? playbackAudioContext.outputLatency * 1000 : 0;
        let i = null;
        const l = playbackAudioContext.getOutputTimestamp();
        if (l != null) {
            const { contextTime, performanceTime } = l;
            if (typeof contextTime === "number" && typeof performanceTime === "number") {
                const c = Math.max(0, self.performance.now() - performanceTime);
                const d = contextTime + c / 1000;
                i = Math.max(0, (playbackAudioContext.currentTime - d) * 1000);
            }
        }
        const m = i ?? (o > 0 && a > 0 ? o + a : Math.max(o, a));
        return {
            estimatedOutputLagMs: r + m
        };
    }
    const ee = (()=>{
        function t() {
            const t = this;
            this.audioWorkletNode = null;
            this.playbackAudioContext = null;
            this.playbackAudioElement = null;
            this.playbackMediaStreamDestination = null;
            this.playbackOutputSink = null;
            this.playbackOutputRoute = "none";
            this.isMediaElementOutputForced = false;
            this.playbackSampleRate = 0;
            this.ringBufferPtr = null;
            this.hasLoggedOutputLagEstimationFailure = false;
            this.isProcessorReady = false;
            this.processorReadyResolvable = null;
            this.workletPreloadPromise = null;
            this.isWorkletPreloaded = false;
            this.$3 = 0;
            this.$4 = 0;
            this.$5 = 0;
            this.$6 = 0;
            this.$7 = 0;
            this.$8 = 0;
            this.$9 = 0;
            this.$10 = null;
            this.$11 = 0;
            this.$12 = new (o("WAWebVoipBrowserMuteDetector")).WAWebVoipBrowserMuteDetector;
            this.$13 = null;
            this.$14 = null;
            this.$15 = false;
            this.$16 = false;
            this.$17 = null;
            this.preloadWorkletModule = function(n) {
                const module_url = r("WAWebVoipSharedBufferPlaybackProcessorConfig").module_url;
                if (module_url === "") {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Missing worklet module url, skipping preload"
                    ])));
                    return;
                }
                const i = n.audioWorklet.addModule(module_url).then(()=>{
                    t.isWorkletPreloaded = true;
                    t.workletPreloadPromise = null;
                }).catch((e)=>{
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Worklet preload failed, will load during start: ",
                        ""
                    ])), e);
                    t.isWorkletPreloaded = false;
                    t.workletPreloadPromise = null;
                });
                t.workletPreloadPromise = i;
            };
            this.switchOutputDevice = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                    const { playbackOutputRoute, playbackOutputSink } = t;
                    const i = X(playbackOutputRoute);
                    const l = yield o("WAWebAudioDeviceManager").switchAudioOutputSinkIdInternal(e, playbackOutputSink, i, n);
                    if (playbackOutputSink != null && (t.playbackOutputSink !== playbackOutputSink || t.playbackOutputRoute !== playbackOutputRoute)) {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [",
                            "] output route changed during device switch"
                        ])), i);
                        return false;
                    }
                    return l;
                });
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            })();
            this.consumePlaybackMetrics = function() {
                if (t.$5 === 0) {
                    return null;
                }
                const e = t.playbackSampleRate > 0 ? t.playbackSampleRate : O;
                const n = t.$3 / t.$5;
                const webAudioRbFillMaxPct = Math.round(t.$4 / F * 100);
                const webAudioCtxOutputLatencyAvgMs = t.$9 > 0 ? Math.round(t.$7 / t.$9) : null;
                const webAudioCtxOutputLatencyMaxMs = t.$9 > 0 ? t.$8 : null;
                const i = {
                    webAudioRbDelayAvgMs: Math.round(n / e * 1000),
                    webAudioRbDelayMaxMs: Math.round(t.$4 / e * 1000),
                    webAudioRbFillMaxPct,
                    webAudioUnderrunTotal: t.$6,
                    webAudioCtxOutputLatencyAvgMs,
                    webAudioCtxOutputLatencyMaxMs
                };
                t.$3 = 0;
                t.$4 = 0;
                t.$5 = 0;
                t.$6 = 0;
                t.$7 = 0;
                t.$8 = 0;
                t.$9 = 0;
                return i;
            };
        }
        const t_prototype = t.prototype;
        t_prototype.$18 = function({ consecutiveUnderruns, availableData, bufferSize }) {
            if (typeof consecutiveUnderruns === "number" && consecutiveUnderruns > 0) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] Consecutive underruns: ",
                    ", available: ",
                    "/",
                    ""
                ])), consecutiveUnderruns, String(availableData), String(bufferSize));
                if (consecutiveUnderruns > this.$6) {
                    this.$6 = consecutiveUnderruns;
                }
            }
            if (typeof availableData === "number") {
                this.$3 += availableData;
                this.$5++;
                if (availableData > this.$4) {
                    this.$4 = availableData;
                }
                const a = this.playbackAudioContext;
                let i = null;
                if (a != null && typeof a.outputLatency === "number") {
                    const l = Math.round(a.outputLatency * 1000);
                    i = l;
                    this.$7 += l;
                    this.$9++;
                    if (l > this.$8) {
                        this.$8 = l;
                    }
                    this.$19(a, l);
                    this.$20(a, l);
                }
                const s = this.playbackSampleRate > 0 ? this.playbackSampleRate : O;
                const u = Math.round(availableData / s * 1000);
                const d = Math.round(availableData / F * 100);
            }
        };
        t_prototype.$19 = function(t, n) {
            const $10 = this.$10;
            if (!($10 != null && Math.abs(n - $10) < V) && !(this.$11 >= H)) {
                this.$11++;
                this.$10 = n;
                const r = typeof t.baseLatency === "number" ? Math.round(t.baseLatency * 1000) : null;
                const a = $10 == null ? "n/a" : `${$10}ms`;
                const i = this.$11 === H ? ", further changes suppressed" : "";
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] outputLatency changed: ",
                    " -> ",
                    "ms, baseLatencyMs=",
                    ", state=",
                    ", route=",
                    "",
                    ""
                ])), a, n, String(r), t.state, this.playbackOutputRoute, i);
            }
        };
        t_prototype.$20 = function(t, outputLatencyMs) {
            if (!(o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari || typeof t.baseLatency !== "number")) {
                if (this.$13 !== true) {
                    this.$21();
                    return;
                }
                this.$22();
                const baseLatencyMs = t.baseLatency * 1000;
                const a = this.$12.observe({
                    outputLatencyMs,
                    baseLatencyMs
                });
                this.$23();
                if (a != null) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] browser mute ",
                        ": outputLatency=",
                        "ms, floor=",
                        "ms, route=",
                        ""
                    ])), a, outputLatencyMs, Math.round(o("WAWebVoipBrowserMuteDetector").getBrowserMuteFloorMs(baseLatencyMs)), this.playbackOutputRoute);
                    if (a === "suspected") {
                        this.$24();
                    } else {
                        r("WAWebODS").incr("web.call.audio_playback.browser_mute_cleared");
                    }
                    o("WAWebVoipBrowserMuteState").reportBrowserMuteSuspected(a === "suspected");
                }
            }
        };
        t_prototype.$22 = function() {
            if (!(this.$12.getSampleCount() > 0 || !o("WAWebVoipBrowserMuteState").wasLastPlaybackBrowserMuted())) {
                this.$12.expectMute();
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] browser mute expected: the last playback stayed at the floor"
                ])));
                r("WAWebODS").incr("web.call.audio_playback.browser_mute_carryover_session");
            }
        };
        t_prototype.$23 = function() {
            if (!(this.$15 || !this.$12.hasEnoughSamplesToDetect())) {
                this.$15 = true;
                r("WAWebODS").incr("web.call.audio_playback.browser_mute_eligible");
            }
        };
        t_prototype.$24 = function() {
            r("WAWebODS").incr("web.call.audio_playback.browser_mute_suspected");
            if (this.$12.isMuteExpected()) {
                r("WAWebODS").incr("web.call.audio_playback.browser_mute_carryover_suspected");
            }
            if (!this.$16) {
                this.$16 = true;
                r("WAWebODS").incr("web.call.audio_playback.browser_mute_suspected_session");
            }
        };
        t_prototype.$21 = function() {
            const e = this;
            if (this.$14 == null) {
                this.$14 = o("WAWebMediaPermissionsUtils").watchMediaPermissionState("microphone", function(t) {
                    return e.$25(t);
                });
            }
        };
        t_prototype.$25 = function(t) {
            const e = t === "granted";
            if (e !== this.$13) {
                this.$13 = e;
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] browser mute detection ",
                    ": microphone permission ",
                    ""
                ])), e ? "on" : "off", t);
            }
        };
        t_prototype.startAudioPlayback = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = this;
                const { audioContext, channels, framesPerChunk, isStartCancelled, sampleRate } = e;
                if (!isStartCancelled()) {
                    const c = ++t.$1;
                    this.playbackAudioContext = audioContext;
                    this.playbackSampleRate = sampleRate;
                    this.hasLoggedOutputLagEstimationFailure = false;
                    let d = false;
                    try {
                        const m = o("WAWebAudioUtility").getCachedWasmModule();
                        if (m == null) {
                            throw r("err")("voip: [AV:SharedBuffer:Playback] WASM module not initialized");
                        }
                        const p = F;
                        const _ = p * Float32Array.BYTES_PER_ELEMENT + B;
                        this.ringBufferPtr = yield o("WAWebAudioUtility").mallocWasmBuffer(_);
                        j(isStartCancelled);
                        const C = this.ringBufferPtr;
                        if (C == null) {
                            throw r("err")("voip: [AV:SharedBuffer:Playback] Failed to allocate ring buffer");
                        }
                        const b = m.GROWABLE_HEAP_U8();
                        b.fill(0, C, C + _);
                        yield this.$26(audioContext, isStartCancelled);
                        j(isStartCancelled);
                        const v = new AudioWorkletNode(audioContext, "voip-shared-buffer-playback-processor", {
                            numberOfInputs: 0,
                            numberOfOutputs: 1,
                            outputChannelCount: [
                                channels
                            ]
                        });
                        this.audioWorkletNode = v;
                        v.port.onmessage = function({ data }) {
                            if (!(typeof data !== "object" || data == null)) {
                                const r = data.type;
                                if (r === "ready") {
                                    n.isProcessorReady = true;
                                    n.processorReadyResolvable?.resolve();
                                    n.processorReadyResolvable = null;
                                } else {
                                    if (r !== "sharedBufferReady") {
                                        if (r === "diagnostics") {
                                            n.$18(data);
                                        }
                                    }
                                }
                            }
                        };
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:SharedBuffer:Playback] waiting for processor ready"
                        ])));
                        yield this.waitForProcessorReady();
                        j(isStartCancelled);
                        const S = m.GROWABLE_HEAP_F32();
                        const R = S.buffer;
                        v.port.postMessage({
                            type: "initSharedBuffer",
                            heapBuffer: R,
                            heapBufferOffset: C,
                            bufferSize: p
                        });
                        yield this.connectOutputRoute(audioContext, isStartCancelled);
                        j(isStartCancelled);
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:SharedBuffer:Playback] starting writer thread"
                        ])));
                        const L = m.startAudioWriterThread(C, p, framesPerChunk);
                        if (!L) {
                            throw r("err")("voip: [AV:SharedBuffer:Playback] Failed to start audio writer thread");
                        }
                        t.$2 = c;
                        this.$17 = c;
                        const E = new Uint32Array(m.GROWABLE_HEAP_U8().buffer, C, 2);
                        yield this.waitForStartupPrebufferIfNeeded(E, p, framesPerChunk, isStartCancelled);
                        j(isStartCancelled);
                        yield this.$27(v, isStartCancelled);
                        j(isStartCancelled);
                        o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:SharedBuffer:Playback] Audio playback started successfully"
                        ])));
                    } catch (error) {
                        if (K(error, isStartCancelled) || (o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:SharedBuffer:Playback] Failed to start playback: ",
                            ""
                        ])), error), d = true, yield this.stopAudioPlayback(c), isStartCancelled())) {
                            return;
                        }
                        throw r("err")("voip: [AV:SharedBuffer:Playback] Failed to start playback");
                    } finally{
                        if (isStartCancelled() && !d) {
                            yield this.stopAudioPlayback(c);
                        }
                    }
                }
            });
            function a(t) {
                return e.apply(this, arguments);
            }
            return a;
        })();
        t_prototype.$26 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                if (this.workletPreloadPromise != null) {
                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] awaiting worklet preload"
                    ])));
                    yield this.workletPreloadPromise;
                    j(t);
                }
                if (!this.isWorkletPreloaded) {
                    o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] loading worklet module (contextState=",
                        ")"
                    ])), e.state);
                    const n = r("WAWebVoipSharedBufferPlaybackProcessorConfig").module_url;
                    if (n === "") {
                        throw r("err")("voip: [AV:SharedBuffer:Playback] Missing worklet module url");
                    }
                    yield e.audioWorklet.addModule(n);
                    j(t);
                    o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Worklet processor module loaded"
                    ])));
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$27 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const playbackAudioElement = this.playbackAudioElement;
                if (playbackAudioElement != null) {
                    try {
                        yield playbackAudioElement.play();
                        r("WAWebODS").incr("web.call.audio_playback.media_element.play_ok");
                        o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:SharedBuffer:Playback] Audio element playback activated, volume=",
                            ", muted=",
                            ", paused=",
                            ", readyState=",
                            ""
                        ])), playbackAudioElement.volume, String(playbackAudioElement.muted), String(playbackAudioElement.paused), playbackAudioElement.readyState);
                    } catch (error) {
                        r("WAWebODS").incr("web.call.audio_playback.media_element.play_failed");
                        o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:SharedBuffer:Playback] Audio element play failed: ",
                            ""
                        ])), error);
                        j(t);
                        const a = yield this.$28(t);
                        if (a) {
                            r("WAWebODS").incr("web.call.audio_playback.media_element.play_failed_fallback_direct");
                        }
                    }
                    j(t);
                }
                e.port.postMessage({
                    type: "start"
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$28 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(isStartCancelled) {
                const playbackAudioContext = this.playbackAudioContext;
                const audioWorkletNode = this.audioWorkletNode;
                const r = playbackAudioContext != null ? Q(playbackAudioContext) : null;
                if (playbackAudioContext == null || audioWorkletNode == null || r == null) {
                    o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] media element play rejected and no direct AudioContext route is available"
                    ])));
                    return false;
                }
                this.$29(audioWorkletNode);
                const a = yield this.$30({
                    audioContext: playbackAudioContext,
                    audioContextOutputSink: r,
                    audioWorkletNode,
                    isStartCancelled
                });
                if (a) {
                    o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] media element play rejected, fell back to direct AudioContext output"
                    ])));
                }
                return a;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$29 = function(t) {
            const playbackAudioElement = this.playbackAudioElement;
            if (playbackAudioElement != null) {
                playbackAudioElement.pause();
                playbackAudioElement.srcObject = null;
                this.playbackAudioElement = null;
            }
            const playbackMediaStreamDestination = this.playbackMediaStreamDestination;
            if (playbackMediaStreamDestination != null) {
                t.disconnect();
                playbackMediaStreamDestination.disconnect();
                this.playbackMediaStreamDestination = null;
            }
            this.playbackOutputSink = null;
            this.playbackOutputRoute = "none";
            this.isMediaElementOutputForced = false;
        };
        t_prototype.$30 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ audioContext, audioContextOutputSink, audioWorkletNode, isStartCancelled }) {
                const i = yield o("WAWebAudioDeviceManager").applyPreferredAudioOutputSink(audioContextOutputSink, "AV:SharedBuffer:Playback:AudioContext");
                if (isStartCancelled()) {
                    return false;
                }
                audioWorkletNode.connect(audioContext.destination);
                this.playbackOutputSink = audioContextOutputSink;
                this.playbackOutputRoute = "direct_audio_context";
                o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] connected worklet directly to AudioContext.destination, setSinkIdApplied=",
                    ""
                ])), String(i));
                return true;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.waitForProcessorReady = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this;
                const t = 5000;
                if (!this.isProcessorReady) {
                    this.processorReadyResolvable = new (o("WAResolvable")).Resolvable;
                    const n = window.setTimeout(function() {
                        if (e.processorReadyResolvable != null) {
                            e.processorReadyResolvable.reject(r("err")("voip: [AV:SharedBuffer:Playback] Processor failed to become ready within 5s"));
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
        t_prototype.connectOutputRoute = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = Q(e);
                const audioWorkletNode = this.audioWorkletNode;
                const a = z();
                const i = typeof e.baseLatency === "number" ? Math.round(e.baseLatency * 1000) : null;
                const l = typeof e.outputLatency === "number" ? Math.round(e.outputLatency * 1000) : null;
                o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] selecting output route: forceMediaElement=",
                    ", audioContextSetSinkId=",
                    ", requestedSampleRate=",
                    ", actualSampleRate=",
                    ", state=",
                    ", baseLatencyMs=",
                    ", outputLatencyMs=",
                    ""
                ])), String(a), String(n != null), this.playbackSampleRate, e.sampleRate, e.state, String(i), String(l));
                if (!a && n != null && audioWorkletNode != null) {
                    yield this.$30({
                        audioContext: e,
                        audioContextOutputSink: n,
                        audioWorkletNode,
                        isStartCancelled: t
                    });
                    return;
                }
                this.isMediaElementOutputForced = a && n != null;
                this.playbackMediaStreamDestination = e.createMediaStreamDestination();
                if (this.audioWorkletNode != null) {
                    this.audioWorkletNode.connect(this.playbackMediaStreamDestination);
                }
                this.playbackAudioElement = o("WAWebVoipCallAudioUnlock").createCallPlaybackElement();
                if (this.playbackMediaStreamDestination != null) {
                    this.playbackAudioElement.srcObject = this.playbackMediaStreamDestination.stream;
                }
                const playbackAudioElement = this.playbackAudioElement;
                let u = false;
                if (playbackAudioElement != null) {
                    u = yield o("WAWebAudioDeviceManager").applyPreferredAudioOutputSink(playbackAudioElement, "AV:SharedBuffer:Playback:AudioElement");
                    if (t()) {
                        return;
                    }
                    this.playbackOutputSink = playbackAudioElement;
                    this.playbackOutputRoute = "media_element";
                }
                o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] connected worklet through MediaStreamDestination audio element, setSinkIdApplied=",
                    ""
                ])), String(u));
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.waitForStartupPrebufferIfNeeded = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
                if (this.playbackOutputRoute === "direct_audio_context") {
                    o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Skipping startup pre-buffer for direct AudioContext output route"
                    ])));
                    return;
                }
                if (this.isMediaElementOutputForced) {
                    o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Skipping startup pre-buffer for forced media element output route"
                    ])));
                    return;
                }
                yield this.waitForPrebuffer(e, t, n, r);
            });
            function t(t, n, r, o) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.waitForPrebuffer = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
                const a = Y(t, n);
                const i = self.performance.now();
                let l = 0;
                while(true){
                    if (r()) {
                        return;
                    }
                    const s = Atomics.load(e, 0);
                    const u = Atomics.load(e, 1);
                    l = J(s, u, t);
                    if (l >= a) {
                        break;
                    }
                    const c = self.performance.now() - i;
                    if (c >= q) {
                        break;
                    }
                    const d = Math.min(U, Math.max(0, q - c));
                    yield o("WAPromiseDelays").delayMs(d);
                    if (r()) {
                        return;
                    }
                }
                const m = self.performance.now() - i;
                o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] Pre-buffer wait complete: reason=",
                    ", buffered=",
                    " samples, target=",
                    " samples, elapsed=",
                    "ms"
                ])), l >= a ? "target_reached" : "timeout", l, a, Math.round(m));
            });
            function t(t, n, r, o) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.stopAudioPlayback = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                try {
                    const n = e ?? this.$17;
                    const r = n == null ? t.$2 == null : t.$2 === n;
                    const a = o("WAWebAudioUtility").getCachedWasmModule();
                    if (r && a != null) {
                        try {
                            if (a.isAudioWriterThreadRunning()) {
                                a.stopAudioWriterThread();
                            }
                            if (t.$2 === n) {
                                t.$2 = null;
                            }
                            if (this.$17 === n) {
                                this.$17 = null;
                            }
                        } catch (error) {
                            o("WALogger").WARN(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:SharedBuffer:Playback] Error stopping writer thread: ",
                                ""
                            ])), error);
                        }
                    }
                    if (this.audioWorkletNode != null) {
                        this.audioWorkletNode.port.postMessage({
                            type: "stop"
                        });
                    }
                    if (this.playbackAudioElement != null) {
                        const i = this.playbackAudioElement;
                        i.pause();
                        i.srcObject = null;
                        this.playbackAudioElement = null;
                    }
                    if (this.audioWorkletNode != null) {
                        this.audioWorkletNode.disconnect();
                        this.audioWorkletNode = null;
                    }
                    if (this.playbackMediaStreamDestination != null) {
                        this.playbackMediaStreamDestination.disconnect();
                        this.playbackMediaStreamDestination = null;
                    }
                    const l = this.ringBufferPtr;
                    if (l != null) {
                        this.ringBufferPtr = null;
                        try {
                            yield o("WAWebAudioUtility").freeWasmBuffer(l);
                        } catch (error) {
                            o("WALogger").WARN(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:SharedBuffer:Playback] Error freeing ring buffer: ",
                                ""
                            ])), error);
                        }
                    }
                    this.isProcessorReady = false;
                    this.processorReadyResolvable = null;
                    this.isWorkletPreloaded = false;
                    this.playbackOutputSink = null;
                    this.playbackOutputRoute = "none";
                    this.isMediaElementOutputForced = false;
                    this.playbackAudioContext = null;
                    this.playbackSampleRate = 0;
                    this.hasLoggedOutputLagEstimationFailure = false;
                    this.workletPreloadPromise = null;
                    this.$3 = 0;
                    this.$4 = 0;
                    this.$5 = 0;
                    this.$6 = 0;
                    this.$7 = 0;
                    this.$8 = 0;
                    this.$9 = 0;
                    this.$10 = null;
                    this.$11 = 0;
                } catch (error) {
                    o("WALogger").ERROR(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Cleanup error: ",
                        ""
                    ])), error);
                } finally{
                    this.$31();
                }
            });
            function r(t) {
                return e.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.$31 = function() {
            this.$14?.();
            this.$14 = null;
            this.$13 = null;
            this.$15 = false;
            this.$16 = false;
            const t = this.$12.getFloorSampleCount();
            if (t > 0) {
                o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:SharedBuffer:Playback] browser mute floor seconds this session: ",
                    ""
                ])), t);
            }
            if (this.$12.isSuspected()) {
                o("WAWebVoipBrowserMuteState").reportBrowserMuteSuspected(false);
            }
            const n = this.$12.getMuteEvidence();
            if (n !== "inconclusive") {
                o("WAWebVoipBrowserMuteState").recordPlaybackBrowserMuted(n === "muted");
            }
            this.$12.reset();
        };
        t_prototype.getAudioElement = function() {
            return this.playbackAudioElement;
        };
        t_prototype.getEstimatedOutputLagSamples = function() {
            const playbackAudioContext = this.playbackAudioContext;
            const ringBufferPtr = this.ringBufferPtr;
            const playbackSampleRate = this.playbackSampleRate;
            if (playbackAudioContext == null || ringBufferPtr == null || playbackSampleRate <= 0) {
                return 0;
            }
            const r = o("WAWebAudioUtility").getCachedWasmModule();
            if (r == null) {
                return 0;
            }
            try {
                const a = new Uint32Array(r.GROWABLE_HEAP_U8().buffer, ringBufferPtr, 2);
                const i = Atomics.load(a, 0);
                const l = Atomics.load(a, 1);
                const s = J(i, l, F);
                const u = Z(playbackAudioContext, playbackSampleRate, s);
                return Math.max(0, Math.round(u.estimatedOutputLagMs * playbackSampleRate / 1000));
            } catch (error) {
                if (!this.hasLoggedOutputLagEstimationFailure) {
                    this.hasLoggedOutputLagEstimationFailure = true;
                    o("WALogger").WARN(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:SharedBuffer:Playback] Failed to estimate output lag: ",
                        ""
                    ])), error);
                }
                return 0;
            }
        };
        return t;
    })();
    ee.$1 = 0;
    ee.$2 = null;
    l.WAWebVoipAudioPlaybackSharedBufferWorklet = ee;
}, 98);