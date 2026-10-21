__d("WAWebVoipAudioPlaybackBase", [
    "$InternalEnum",
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebBoolFunc",
    "WAWebDebounce",
    "WAWebUA",
    "WAWebVoipAudioContextResume",
    "WAWebVoipAudioPlaybackScriptProcessor",
    "WAWebVoipAudioPlaybackSharedBufferWorklet",
    "WAWebVoipAudioPlaybackWorklet",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipPerfOptimizations",
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
    let E;
    let k;
    let I;
    let T;
    const D = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error"
    ]);
    const x = n("$InternalEnum")({
        DEFAULT: 0,
        SCRIPT_PROCESSOR: 1,
        AUDIO_WORKLET: 2,
        SHARED_BUFFER_WORKLET: 3
    });
    const $ = (()=>{
        function t() {
            this.playbackAudioContext = null;
            this.playbackBuffer = null;
            this.playbackParams = null;
            this.audioPlaybackInitState = D.Uninitialized;
            this.audioPlaybackInitResolvable = null;
            this.implementation = null;
            this.deviceChangeHandler = null;
            const n = o("WAWebABProps").getABPropConfigValue("web_voip_audio_playback_impl");
            let r = x.cast(n) ?? x.DEFAULT;
            if (o("WAWebUA").UA.isFirefox) {
                r = x.SCRIPT_PROCESSOR;
            }
            e: {
                if (r === x.SCRIPT_PROCESSOR) {
                    this.implementation = new (o("WAWebVoipAudioPlaybackScriptProcessor")).WAWebVoipAudioPlaybackScriptProcessor;
                    break e;
                }
                if (r === x.AUDIO_WORKLET) {
                    this.implementation = new (o("WAWebVoipAudioPlaybackWorklet")).WAWebVoipAudioPlaybackWorklet;
                    break e;
                }
                if (r === x.SHARED_BUFFER_WORKLET) {
                    this.implementation = new (o("WAWebVoipAudioPlaybackSharedBufferWorklet")).WAWebVoipAudioPlaybackSharedBufferWorklet;
                    break e;
                }
                {
                    this.implementation = new (o("WAWebVoipAudioPlaybackSharedBufferWorklet")).WAWebVoipAudioPlaybackSharedBufferWorklet;
                    break e;
                }
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:AudioPlayback] using implementation: ",
                ""
            ])), o("WAWebUA").UA.isFirefox ? "script-processor (Firefox override)" : n ?? "default");
        }
        const t_prototype = t.prototype;
        t_prototype.initPlaybackDriver = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const { bits_per_sample, channels, frames_per_chunk, sample_rate } = e;
                if (this.audioPlaybackInitState !== D.Uninitialized) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initPlaybackDriver] invalid initialization. state = ",
                        ""
                    ])), this.audioPlaybackInitState).sendLogs("voip: invalid playback initialization. state = ${this.audioPlaybackInitState}");
                    yield this.cleanup();
                    return;
                }
                this.audioPlaybackInitState = D.Initializing;
                this.audioPlaybackInitResolvable = new (o("WAResolvable")).Resolvable;
                this.playbackParams = {
                    sampleRate: sample_rate,
                    channels,
                    bitsPerSample: bits_per_sample,
                    framesPerChunk: frames_per_chunk
                };
                const playbackParams = this.playbackParams;
                try {
                    this.playbackAudioContext = P(playbackParams.sampleRate);
                    if (o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.WORKLET_PRELOAD) && this.implementation?.preloadWorkletModule != null && this.playbackAudioContext != null && this.playbackAudioContext.state !== "suspended") {
                        this.implementation.preloadWorkletModule(this.playbackAudioContext);
                    }
                    const h = (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            try {
                                const e = o("WAWebAudioDeviceManager").getCurrentSelectedAudioOutputDevice();
                                const n = yield o("WAWebAudioDeviceManager").selectAudioOutputDevice();
                                if (n != null && n !== e) {
                                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [AV:AudioOutputHandleDeviceChange] Auto-switching output to device: ",
                                        ""
                                    ])), n);
                                    yield t.switchOutputDevice(n, true);
                                } else if (n == null) {
                                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [AV:AudioOutputHandleDeviceChange] Output device change detected but new deviceId is null"
                                    ])));
                                }
                            } catch (error) {
                                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:AudioOutputHandleDeviceChange] Output device change handler error: ",
                                    ""
                                ])), error);
                            }
                        });
                        return function() {
                            return e.apply(this, arguments);
                        };
                    })();
                    this.deviceChangeHandler = r("WAWebDebounce")(h, 500);
                    if (navigator.mediaDevices) {
                        navigator.mediaDevices.addEventListener("devicechange", this.deviceChangeHandler);
                    }
                    this.audioPlaybackInitState = D.Ready;
                    this.audioPlaybackInitResolvable?.resolve();
                } catch (error) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initPlaybackDriver] error: ",
                        ""
                    ])), error);
                    this.audioPlaybackInitState = D.Error;
                    this.audioPlaybackInitResolvable?.reject(error);
                    yield this.cleanup();
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.startPlayback = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = e ?? o("WAWebBoolFunc").returnFalse;
                if ((yield this.$1(t)) && !t()) {
                    if (this.audioPlaybackInitState !== D.Ready) {
                        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startPlayback] invalid initialization. state = ",
                            ""
                        ])), this.audioPlaybackInitState).sendLogs("voip: startPlayback invalid initialization. state = ${this.audioPlaybackInitState}");
                        return;
                    }
                    if (!this.playbackAudioContext) {
                        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startPlayback] audio context is null"
                        ]))).sendLogs("voip: startPlayback audio context is null");
                        return;
                    }
                    const n = this.playbackParams;
                    if (!n) {
                        o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startPlayback] playback parameters are null"
                        ]))).sendLogs("voip: startPlayback playback parameters are null");
                        return;
                    }
                    const r = this.playbackAudioContext;
                    yield this.$2(r, n, t);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e()) {
                    return false;
                }
                if (this.audioPlaybackInitState !== D.Initializing) {
                    return true;
                }
                try {
                    yield this.audioPlaybackInitResolvable?.promise;
                    return !e();
                } catch (error) {
                    if (!e()) {
                        o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startPlayback] error: ",
                            ""
                        ])), error).sendLogs("voip: startPlayback error: ${error}");
                    }
                    return false;
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                try {
                    if (e.state === "suspended") {
                        o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startPlayback] resuming suspended AudioContext"
                        ])));
                        yield o("WAWebVoipAudioContextResume").resumeAudioContextLoggingDelays(e, "startPlayback");
                        if (n()) {
                            return;
                        }
                        o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startPlayback] AudioContext resumed successfully"
                        ])));
                    }
                    const r = t.framesPerChunk * 4;
                    const playbackBuffer = yield o("WAWebAudioUtility").mallocWasmBuffer(r);
                    this.playbackBuffer = playbackBuffer;
                    if (n()) {
                        yield this.$3(playbackBuffer);
                        return;
                    }
                    if (this.implementation != null && (yield this.implementation.startAudioPlayback({
                        audioContext: e,
                        sampleRate: t.sampleRate,
                        channels: t.channels,
                        framesPerChunk: t.framesPerChunk,
                        playbackBuffer,
                        isStartCancelled: n
                    }), n())) {
                        return;
                    }
                } catch (error) {
                    if (n()) {
                        return;
                    }
                    o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startPlayback] failed to start audio playback: ",
                        ""
                    ])), error);
                    if (e.state !== "suspended") {
                        throw error;
                    }
                }
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$3 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (this.playbackBuffer === e) {
                    this.playbackBuffer = null;
                    try {
                        yield o("WAWebAudioUtility").freeWasmBuffer(e);
                    } catch (error) {
                        o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:stopPlayback] error freeing WASM playback buffer: ",
                            ""
                        ])), error);
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.stopPlayback = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.audioPlaybackInitState !== D.Ready) {
                    o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopPlayback] invalid initialization. state = ",
                        ""
                    ])), this.audioPlaybackInitState);
                }
                try {
                    yield this.cleanup();
                } catch (error) {
                    o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopPlayback] error: ",
                        ""
                    ])), error);
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.cleanup = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    if (this.deviceChangeHandler != null) {
                        navigator.mediaDevices?.removeEventListener("devicechange", this.deviceChangeHandler);
                        this.deviceChangeHandler = null;
                    }
                    if (this.implementation != null) {
                        yield this.implementation.stopAudioPlayback();
                    }
                    if (this.playbackAudioContext) {
                        if (this.playbackAudioContext.state !== "closed") {
                            this.playbackAudioContext.close().then(()=>{}).catch((e)=>{
                                o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:cleanup] playback AudioContext close error (non-fatal): ",
                                    ""
                                ])), String(e));
                            });
                        }
                        this.playbackAudioContext = null;
                    }
                } finally{
                    if (this.playbackBuffer != null) {
                        const t = this.playbackBuffer;
                        yield this.$3(t);
                    }
                    this.audioPlaybackInitState = D.Uninitialized;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getAudioElement = function() {
            if (this.implementation != null) {
                return this.implementation.getAudioElement();
            }
            return null;
        };
        t_prototype.getEstimatedOutputLagSamples = function() {
            return this.implementation?.getEstimatedOutputLagSamples() ?? 0;
        };
        t_prototype.switchOutputDevice = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchOutputDevice] switchOutputDevice called with deviceId: ",
                    ""
                ])), e);
                if (this.audioPlaybackInitState !== D.Ready) {
                    o("WALogger").WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchOutputDevice] playback not ready",
                        ""
                    ])), t === true ? "" : ", saving preference");
                    if (t !== true) {
                        o("WAWebAudioDeviceManager").saveAudioOutputDevicePreference(e, "AV:switchOutputDevice");
                    }
                    return false;
                }
                const implementation = this.implementation;
                if (implementation == null) {
                    o("WALogger").WARN(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchOutputDevice] playback implementation not initialized",
                        ""
                    ])), t === true ? "" : ", saving preference");
                    if (t !== true) {
                        o("WAWebAudioDeviceManager").saveAudioOutputDevicePreference(e, "AV:switchOutputDevice");
                    }
                    return false;
                }
                const r = implementation.switchOutputDevice != null ? yield implementation.switchOutputDevice(e, t) : yield o("WAWebAudioDeviceManager").switchAudioOutputDeviceInternal(e, implementation.getAudioElement(), t);
                if (r) {
                    o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchOutputDevice] Successfully switched output to device: ",
                        ""
                    ])), e);
                } else {
                    o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchOutputDevice] Failed to switch output to device: ",
                        ""
                    ])), e);
                }
                return r;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.consumeAudioPlaybackMetrics = function() {
            let t;
            const r = ((t = this.implementation) == null || t.consumePlaybackMetrics == null ? undefined : t.consumePlaybackMetrics()) ?? null;
            if (r == null) {
                return null;
            }
            const playbackAudioContext = this.playbackAudioContext;
            const webAudioCtxBaseLatencyMs = playbackAudioContext != null && typeof playbackAudioContext.baseLatency === "number" ? Math.round(playbackAudioContext.baseLatency * 1000) : null;
            return babelHelpers.extends({}, r, {
                webAudioCtxBaseLatencyMs,
                webAudioPlatformDelayMs: r.webAudioRbDelayAvgMs + (webAudioCtxBaseLatencyMs ?? 0) + (r.webAudioCtxOutputLatencyAvgMs ?? 0)
            });
        };
        return t;
    })();
    function P(sampleRate) {
        return o("WAWebVoipCallAudioUnlock").takeUnlockedAudioContext("playback", sampleRate) ?? new AudioContext({
            sampleRate,
            latencyHint: "interactive"
        });
    }
    l.WAWebVoipAudioPlaybackBase = $;
}, 98);