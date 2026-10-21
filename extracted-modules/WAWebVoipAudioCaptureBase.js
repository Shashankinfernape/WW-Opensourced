__d("WAWebVoipAudioCaptureBase", [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebDebounce",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVoipAudioCaptureImplementationFactory",
    "WAWebVoipAudioContextResume",
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipMicStreamBackstop",
    "WAWebVoipMicrophoneHealthPresence",
    "WAWebVoipMicrophoneInputState",
    "WAWebVoipMicrophoneTrackObserver",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipSilentCapture",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
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
    let V;
    let H;
    let G;
    let z;
    let j;
    let K;
    let Q;
    let X;
    let Y;
    let J;
    let Z;
    let ee;
    let te;
    let ne;
    let re;
    let oe;
    let ae;
    let ie;
    let le;
    let se;
    let ue;
    let ce;
    let de;
    let me;
    let pe;
    let _e;
    let fe;
    let ge;
    let he;
    let ye;
    let Ce;
    let be;
    let ve;
    let Se;
    let Re;
    let Le;
    let Ee;
    let ke;
    let Ie;
    let Te;
    let De;
    let xe;
    let $e;
    let Pe;
    let Ne;
    let Me;
    let we;
    let Ae;
    let Fe;
    let Oe;
    let Be;
    let We;
    let qe;
    let Ue;
    let Ve;
    let He;
    let Ge;
    let ze;
    let je;
    let Ke;
    let Qe;
    let Xe;
    let Ye;
    let Je;
    const Ze = 3;
    const et = {
        event: "queued",
        recovery: "recovery"
    };
    const tt = n("$InternalEnum").Mirrored([
        "Uninitialized",
        "Initializing",
        "Ready",
        "Error"
    ]);
    function nt(t) {
        if (t.state === "suspended") {
            t.resume().then(()=>{
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] resumed new AudioContext"
                ])));
            }).catch((e)=>{
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] AudioContext resume failed: ",
                    ""
                ])), e);
            });
        }
    }
    function rt(e) {
        const t = Reflect.get(e, "closed");
        return t === true;
    }
    function ot(audioStream) {
        return (audioStream == null ? undefined : audioStream.getAudioTracks().some((e)=>e.readyState === "live")) === true;
    }
    function at(audioStream) {
        try {
            return ot(audioStream);
        } catch (error) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:micReconciliation] failed to read microphone track state"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-mic-cleanup-track-state-read-fail");
            return true;
        }
    }
    function it(e, t) {
        if (e === "recovery") {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [MicInput] queued device recovery failed"
            ]))).catching(r("getErrorSafe")(t)).tags("non-sad").sendLogs("voip-mic-input-device-recovery-failed");
            return;
        }
        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV:AudioCaptureDeviceChangeHandler] ",
            " device change failed"
        ])), e).catching(r("getErrorSafe")(t)).sendLogs("voip-mic-device-change-failed");
    }
    function lt(e, t) {
        if (e) {
            return "capture-handoff";
        }
        if (t) {
            return "automatic-device-switch";
        }
        return "manual-device-switch";
    }
    const st = (()=>{
        function e(e) {
            this.audioContext = null;
            this.mediaStreamSource = null;
            this.silentSource = null;
            this.audioStream = null;
            this.audioBuffer = null;
            this.captureParams = null;
            this.audioCaptureInitState = tt.Uninitialized;
            this.audioCaptureInitResolvable = null;
            this.implementation = null;
            this.deviceChangeHandler = null;
            this.cancelDeviceChangeHandler = null;
            this.automaticDeviceChangePromise = null;
            this.pendingAutomaticDeviceChange = null;
            this.micRecoveryAttempts = 0;
            this.microphoneTrackObserver = null;
            this.captureGeneration = 0;
            this.hasUnrecoveredTrackEnd = false;
            this.unsubscribeFromHealthExperienceMount = null;
            this.$1 = new (o("WAWebVoipSilentCapture")).AudioAfterSilenceWatch(e);
            this.implementation = o("WAWebVoipAudioCaptureImplementationFactory").createAudioCaptureImplementation();
        }
        const e_prototype = e.prototype;
        e_prototype.$2 = function() {
            if (!(!this.hasUnrecoveredTrackEnd || !this.$3() || this.deviceChangeHandler == null || !o("WAWebVoipMicrophoneHealthPresence").canRecoverMicrophone())) {
                this.hasUnrecoveredTrackEnd = false;
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicInput] recovering a track that ended before the health experience mounted"
                ])));
                this.$4();
            }
        };
        e_prototype.$5 = function() {
            const e = this;
            return function(rmsDbfs) {
                o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
                    type: "level",
                    rmsDbfs
                });
                if (o("WAWebVoipMicrophoneInputState").getMicrophoneInputHasCredibleSignal()) {
                    e.micRecoveryAttempts = 0;
                }
                e.$1.countLevel(rmsDbfs);
            };
        };
        e_prototype.$3 = function() {
            return this.audioCaptureInitState === tt.Ready || this.audioCaptureInitState === tt.Initializing;
        };
        e_prototype.$6 = function() {
            const microphoneTrackObserver = this.microphoneTrackObserver;
            this.microphoneTrackObserver = null;
            try {
                microphoneTrackObserver?.stop();
            } catch (error) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicInput] stopping the track observer failed"
                ]))).catching(r("getErrorSafe")(error));
            }
        };
        e_prototype.$7 = function() {
            if (this.$3()) {
                this.$6();
                o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
                    type: "input-unavailable",
                    reason: "capture-failed"
                });
            }
        };
        e_prototype.$8 = function(t, n, a) {
            let e;
            const i = this;
            if (a === "initial" || a === "manual-device-switch") {
                this.micRecoveryAttempts = 0;
            }
            if (this.$3()) {
                this.$6();
                this.hasUnrecoveredTrackEnd = false;
                if ((e = this.unsubscribeFromHealthExperienceMount) == null) {
                    this.unsubscribeFromHealthExperienceMount = o("WAWebVoipMicrophoneHealthPresence").subscribeToMicrophoneHealthExperienceMount(function() {
                        i.$2();
                    });
                }
                o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
                    type: "capture-started",
                    reason: a
                });
                try {
                    const audioTrack = n.getAudioTracks()[0] ?? null;
                    const d = new (o("WAWebVoipMicrophoneTrackObserver")).WAWebVoipMicrophoneTrackObserver({
                        audioContext: t,
                        audioTrack,
                        onRecovered: function() {
                            o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
                                type: "input-recovered"
                            });
                        },
                        onUnavailable: function(t) {
                            o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [MicInput] microphone unavailable: ",
                                ""
                            ])), t);
                            o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
                                type: "input-unavailable",
                                reason: t
                            });
                            if (t === "track-ended" && i.deviceChangeHandler != null) {
                                if (o("WAWebVoipMicrophoneHealthPresence").canRecoverMicrophone()) {
                                    i.$4();
                                } else {
                                    i.hasUnrecoveredTrackEnd = true;
                                }
                            }
                        }
                    });
                    this.microphoneTrackObserver = d;
                    d.start();
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicInput] monitoring started reason=",
                        " contextState=",
                        " trackState=",
                        " trackMuted=",
                        ""
                    ])), a, t.state, audioTrack?.readyState ?? "missing", String(audioTrack?.muted ?? false));
                } catch (error) {
                    o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicInput] could not observe the microphone track"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-mic-input-monitoring-start-failed");
                }
            }
        };
        e_prototype.$9 = function(t) {
            this.$6();
            this.hasUnrecoveredTrackEnd = false;
            if (t) {
                this.micRecoveryAttempts = 0;
                this.unsubscribeFromHealthExperienceMount?.();
                this.unsubscribeFromHealthExperienceMount = null;
                o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
                    type: "capture-stopped"
                });
            } else {
                o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
                    type: "capture-switching"
                });
            }
        };
        e_prototype.$10 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const captureGeneration = this.captureGeneration;
                const t = yield o("WAWebAudioDeviceManager").selectAudioDevice(undefined, undefined, true);
                if (captureGeneration !== this.captureGeneration) {
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:AudioCaptureDeviceChangeHandler] capture restarted during device selection; dropping the change"
                    ])));
                    return false;
                }
                if (t == null) {
                    o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:AudioCaptureDeviceChangeHandler] Device change detected, newDeviceId is null"
                    ])));
                    return false;
                }
                if (o("WAWebVoipSilentCapture").isLiveOnGrantedMicrophone(this, t)) {
                    return true;
                }
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:AudioCaptureDeviceChangeHandler] Auto-switching to device: ",
                    ""
                ])), t);
                return this.switchDevice(t, undefined, undefined, true);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$11 = function() {
            const e = this;
            const automaticDeviceChangePromise = this.automaticDeviceChangePromise;
            if (automaticDeviceChangePromise != null) {
                this.pendingAutomaticDeviceChange = "event";
                return automaticDeviceChangePromise;
            }
            const n = this.$10();
            this.automaticDeviceChangePromise = n;
            const r = function() {
                if (e.automaticDeviceChangePromise === n) {
                    e.automaticDeviceChangePromise = null;
                    const t = e.pendingAutomaticDeviceChange;
                    e.pendingAutomaticDeviceChange = null;
                    if (!(t == null || e.audioCaptureInitState !== tt.Ready || t === "recovery" && !e.$12())) {
                        o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:AudioCaptureDeviceChangeHandler] re-running ",
                            " device change queued during switch"
                        ])), t);
                        e.$13(et[t]);
                    }
                }
            };
            n.then(r, r);
            return n;
        };
        e_prototype.$13 = function(t) {
            this.$11().catch((e)=>{
                it(t, e);
            });
        };
        e_prototype.$12 = function() {
            if (this.micRecoveryAttempts >= Ze) {
                if (this.micRecoveryAttempts === Ze) {
                    this.micRecoveryAttempts++;
                    o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicInput] recovery exhausted after ",
                        " automatic switches"
                    ])), Ze).tags("non-sad").sendLogs("voip-mic-input-recovery-exhausted");
                }
                return false;
            }
            this.micRecoveryAttempts++;
            return true;
        };
        e_prototype.$4 = function() {
            if (this.automaticDeviceChangePromise != null) {
                let e;
                if ((e = this.pendingAutomaticDeviceChange) == null) {
                    this.pendingAutomaticDeviceChange = "recovery";
                }
                return;
            }
            if (this.$12()) {
                this.$11().then((e)=>{
                    if (!e) {
                        o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [MicInput] device recovery did not switch devices"
                        ])));
                    }
                }, (e)=>{
                    o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicInput] device recovery failed"
                    ]))).catching(r("getErrorSafe")(e)).tags("non-sad").sendLogs("voip-mic-input-device-recovery-failed");
                });
            }
        };
        e_prototype.initCaptureDriver = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ auto_gain_control, bits_per_sample, channels, frames_per_chunk, sample_rate }) {
                o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initCaptureDriver] params: sampleRate=",
                    ", channels=",
                    ", bitsPerSample=",
                    ", framesPerChunk=",
                    ", autoGainControl=",
                    ""
                ])), sample_rate, channels, bits_per_sample, frames_per_chunk, String(auto_gain_control !== false));
                if (this.audioCaptureInitState !== tt.Uninitialized) {
                    o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initCaptureDriver] invalid initialization.\n        State = ",
                        ""
                    ])), this.audioCaptureInitState).sendLogs("voip: invalid initialization state = ${this.audioCaptureInitState}");
                    yield this.cleanup();
                    return;
                }
                this.audioCaptureInitState = tt.Initializing;
                this.audioCaptureInitResolvable = new (o("WAResolvable")).Resolvable;
                const s = {
                    sampleRate: sample_rate,
                    channels,
                    bitsPerSample: bits_per_sample,
                    framesPerChunk: frames_per_chunk,
                    autoGainControl: auto_gain_control !== false
                };
                this.captureParams = s;
                const u = yield o("WAWebVoipSilentCapture").findMicrophone();
                const { missingReason, selectedDeviceId } = u;
                if (!(missingReason != null && this.$14(s, missingReason))) {
                    if (selectedDeviceId == null) {
                        this.audioCaptureInitState = tt.Error;
                        this.audioCaptureInitResolvable?.reject(r("err")("voip: [AV] No audio device selected."));
                        return;
                    }
                    o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initCaptureDriver] selected device: ",
                        ""
                    ])), selectedDeviceId);
                    const p = s;
                    try {
                        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                            const g = yield o("WAWebBackendApi").frontendSendAndReceive("voipAcquireMediaStream", {
                                type: "microphone",
                                selectedDeviceId,
                                params: p
                            });
                            if (g == null) {
                                throw r("err")("Failed to get media stream from getUserMedia");
                            }
                            const h = g.getTracks();
                            const y = h.slice(0, 3);
                            o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV] Initializing audio capture with ",
                                " devices. Kinds: ",
                                ", Labels: ",
                                ", IDs: ",
                                ""
                            ])), h.length, y.map((e)=>e.kind), y.map((e)=>e.label), y.map((e)=>e.getSettings().deviceId));
                            o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:initCaptureDriver] granted mic permission and got audio stream"
                            ])));
                            this.audioContext = o("WAWebVoipSilentCapture").createCaptureAudioContext(p);
                            if (this.audioContext.state === "suspended") {
                                o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:initCaptureDriver] AudioContext suspended - will resume when needed"
                                ])));
                            }
                            try {
                                this.mediaStreamSource = this.audioContext.createMediaStreamSource(g);
                            } catch (error) {
                                o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:initCaptureDriver] Failed to create MediaStreamSource:\n            ",
                                    ""
                                ])), error);
                                throw error;
                            }
                            this.$15(g);
                            if (o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.WORKLET_PRELOAD) && this.implementation?.preloadWorkletModule != null && this.audioContext != null) {
                                this.implementation.preloadWorkletModule(this.audioContext);
                            }
                            this.$16();
                            const C = this.audioContext;
                            if (C != null) {
                                this.$8(C, g, "initial");
                            }
                            this.audioCaptureInitState = tt.Ready;
                            this.audioCaptureInitResolvable?.resolve();
                        } else {
                            o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:initCaptureDriver] getUserMedia not supported"
                            ]))).sendLogs("voip: getUserMedia not supported");
                            this.audioCaptureInitState = tt.Error;
                            this.audioCaptureInitResolvable?.reject(r("err")("getUserMedia not supported"));
                        }
                    } catch (error) {
                        o("WALogger").ERROR(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:initCaptureDriver] error: ",
                            ""
                        ])), error).sendLogs("voip: error in initCaptureDriver");
                        this.audioCaptureInitState = tt.Error;
                        this.audioCaptureInitResolvable?.reject(error);
                        yield this.cleanup();
                    }
                    o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:initCaptureDriver] completed successfully"
                    ])));
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$14 = function(t, n) {
            const e = this;
            if (!o("WAWebVoipDeviceAccessRecoveryGating").isDeviceAccessRecoveryEnabled()) {
                return false;
            }
            try {
                const a = o("WAWebVoipSilentCapture").createSilentCaptureGraph(t, n === "no-device" ? null : function() {
                    e.$13("event");
                });
                const { audioContext, silentSource } = a;
                this.audioContext = audioContext;
                this.silentSource = silentSource;
            } catch (error) {
                o("WALogger").ERROR(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:initCaptureDriver] silent capture failed: ",
                    ""
                ])), error).sendLogs("voip: silent capture failed");
                this.audioCaptureInitState = tt.Error;
                this.audioCaptureInitResolvable?.reject(error);
                return true;
            }
            this.$16();
            this.audioCaptureInitState = tt.Ready;
            this.audioCaptureInitResolvable?.resolve();
            o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:initCaptureDriver] microphone unavailable (",
                "), capturing silence"
            ])), n);
            return true;
        };
        e_prototype.$17 = function() {
            const silentSource = this.silentSource;
            if (silentSource != null) {
                this.silentSource = null;
                o("WAWebVoipSilentCapture").stopSilentSource(silentSource);
            }
        };
        e_prototype.$16 = function() {
            const e = this;
            const n = r("WAWebDebounce")(function() {
                e.$13("event");
            }, 500);
            this.cancelDeviceChangeHandler = n.cancel;
            this.deviceChangeHandler = function() {
                n();
            };
            navigator.mediaDevices?.addEventListener("devicechange", this.deviceChangeHandler);
        };
        e_prototype.$15 = function(t) {
            const audioStream = this.audioStream;
            if (audioStream != null && audioStream !== t && !at(audioStream)) {
                o("WAWebVoipMicStreamBackstop").untrackMicStream(audioStream);
            }
            this.audioStream = t;
            o("WAWebVoipMicStreamBackstop").trackMicStream(t);
        };
        e_prototype.hasLiveAudioTrack = function() {
            try {
                return ot(this.audioStream);
            } catch (error) {
                o("WALogger").WARN(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:hasLiveAudioTrack] failed to read microphone track state"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-mic-readiness-track-state-read-fail");
                return false;
            }
        };
        e_prototype.startCapture = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:startCapture] start audio capture"
                ])));
                const n = e ?? o("WAWebBoolFunc").returnFalse;
                if ((yield this.$18(n)) && !n()) {
                    if (this.audioCaptureInitState !== tt.Ready) {
                        o("WALogger").ERROR(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCapture] invalid initialization.\n        State = ",
                            ""
                        ])), this.audioCaptureInitState).sendLogs("voip: invalid initialization. state = ${this.audioCaptureInitState}");
                        return;
                    }
                    const r = this.mediaStreamSource ?? this.silentSource;
                    if (!this.audioContext || r == null) {
                        o("WALogger").ERROR(B || (B = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCapture] audio context or media stream source is null"
                        ]))).sendLogs("voip: audio context or media stream source is null");
                        return;
                    }
                    const a = this.captureParams;
                    if (!a) {
                        o("WALogger").ERROR(W || (W = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCapture] capture parameters are null"
                        ]))).sendLogs("voip: capture parameters are null");
                        return;
                    }
                    const i = this.audioContext;
                    yield this.$19(i, r, a, n);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$18 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e()) {
                    return false;
                }
                if (this.audioCaptureInitState !== tt.Initializing) {
                    return true;
                }
                try {
                    yield this.audioCaptureInitResolvable?.promise;
                    return !e();
                } catch (error) {
                    if (e()) {
                        o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCapture] cancelled after init error: ",
                            ""
                        ])), error);
                        return false;
                    }
                    o("WALogger").ERROR(U || (U = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] error: ",
                        ""
                    ])), error).sendLogs("voip: error in startCapture: ${error}");
                    return false;
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$19 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
                try {
                    if (e.state === "suspended") {
                        try {
                            yield o("WAWebVoipAudioContextResume").resumeAudioContextLoggingDelays(e, "startCapture");
                            o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:startCapture] AudioContext resumed successfully"
                            ])));
                        } catch (error) {
                            if (r()) {
                                o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:startCapture] cancelled after AudioContext resume error: ",
                                    ""
                                ])), error);
                                return;
                            }
                            o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:startCapture] AudioContext resume failed: ",
                                ""
                            ])), error);
                        }
                        if (r()) {
                            return;
                        }
                    }
                    const a = n.framesPerChunk * n.channels * Float32Array.BYTES_PER_ELEMENT;
                    const audioBuffer = yield o("WAWebAudioUtility").mallocWasmBuffer(a);
                    this.audioBuffer = audioBuffer;
                    if (r()) {
                        yield this.$20(audioBuffer);
                        return;
                    }
                    if (this.implementation != null && (yield this.implementation.startAudioCapture({
                        audioContext: e,
                        mediaStreamSource: t,
                        sampleRate: n.sampleRate,
                        channels: n.channels,
                        framesPerChunk: n.framesPerChunk,
                        audioBuffer,
                        isStartCancelled: r,
                        onInputLevel: this.$5()
                    }), r())) {
                        return;
                    }
                    o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] audio capture started successfully"
                    ])));
                } catch (error) {
                    if (r()) {
                        o("WALogger").LOG(j || (j = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startCapture] cancelled after start error: ",
                            ""
                        ])), error);
                        return;
                    }
                    o("WALogger").ERROR(K || (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:startCapture] error: ",
                        ""
                    ])), error).sendLogs("voip: error in startCapture: ${error}");
                    yield this.cleanup();
                }
            });
            function t(t, n, r, o) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$20 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (this.audioBuffer === e) {
                    this.audioBuffer = null;
                    try {
                        yield o("WAWebAudioUtility").freeWasmBuffer(e);
                        o("WALogger").LOG(Q || (Q = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:stopCapture] freed WASM audio buffer"
                        ])));
                    } catch (error) {
                        o("WALogger").WARN(X || (X = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:stopCapture] error freeing WASM audio buffer: ",
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
        e_prototype.stopCapture = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WALogger").LOG(Y || (Y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: stopCapture"
                ])));
                if (this.audioCaptureInitState !== tt.Ready) {
                    o("WALogger").WARN(J || (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] invalid initialization.\n        State = ",
                        ""
                    ])), this.audioCaptureInitState);
                    if (this.audioCaptureInitState === tt.Initializing) {
                        o("WALogger").LOG(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:stopCapture] waiting for init (up to 5s)"
                        ])));
                        try {
                            const a = 5000;
                            let i = null;
                            yield (Je || (Je = n("Promise"))).race([
                                this.audioCaptureInitResolvable?.promise ?? (Je || (Je = n("Promise"))).resolve(),
                                new Je(function(e, t) {
                                    i = window.setTimeout(function() {
                                        t(r("err")("voip: [AV:stopCapture] timed out waiting for init"));
                                    }, a);
                                })
                            ]).finally(()=>{
                                if (i != null) {
                                    window.clearTimeout(i);
                                }
                            });
                        } catch (error) {
                            o("WALogger").WARN(ee || (ee = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:stopCapture] init wait failed or timed out, proceeding with cleanup: ",
                                ""
                            ])), error);
                        }
                    }
                    o("WALogger").LOG(te || (te = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] proceeding with cleanup"
                    ])));
                }
                return this.cleanup();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.cleanup = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WALogger").LOG(ne || (ne = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: cleanup audio capture"
                ])));
                this.captureGeneration++;
                try {
                    this.$9(true);
                    this.cancelDeviceChangeHandler?.();
                    this.cancelDeviceChangeHandler = null;
                    if (this.deviceChangeHandler != null) {
                        navigator.mediaDevices?.removeEventListener("devicechange", this.deviceChangeHandler);
                        this.deviceChangeHandler = null;
                    }
                    this.automaticDeviceChangePromise = null;
                    this.pendingAutomaticDeviceChange = null;
                    this.$1.stop();
                    this.$17();
                    if (this.implementation != null) {
                        yield this.implementation.stopAudioCapture();
                    }
                    if (this.mediaStreamSource) {
                        this.mediaStreamSource.disconnect();
                        this.mediaStreamSource = null;
                        o("WALogger").LOG(re || (re = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: cleanup disconnected media stream source"
                        ])));
                    }
                    if (this.audioStream) {
                        const n = this.audioStream.getTracks();
                        n.forEach((e)=>{
                            e.stop();
                        });
                        o("WALogger").LOG(oe || (oe = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:stopCapture] stopped ",
                            " tracks. Kinds: ",
                            ""
                        ])), n.length, n.slice(0, 3).map((e)=>e.kind));
                        this.audioStream = null;
                        o("WALogger").LOG(ae || (ae = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:stopCapture] stopped audio stream"
                        ])));
                    }
                    if (this.audioContext) {
                        if (this.audioContext.state !== "closed") {
                            const r = this.audioContext;
                            r.close().catch((e)=>{
                                o("WALogger").LOG(ie || (ie = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:cleanup] AudioContext close error (non-fatal): ",
                                    ""
                                ])), String(e));
                            });
                        }
                        this.audioContext = null;
                    }
                } finally{
                    if (this.audioBuffer != null) {
                        const a = this.audioBuffer;
                        yield this.$20(a);
                    }
                    this.audioCaptureInitState = tt.Uninitialized;
                    o("WALogger").LOG(le || (le = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: cleanup finalized"
                    ])));
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.switchDevice = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, isAutoSwitch, grantedStream) {
                const i = this;
                o("WALogger").LOG(se || (se = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] deviceId: ",
                    ", forceContextRecreation: ",
                    ""
                ])), e.slice(0, 8), String(n ?? false));
                const l = lt(n === true, isAutoSwitch === true);
                if (this.audioCaptureInitState === tt.Initializing) {
                    o("WALogger").ERROR(ue || (ue = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] audio capture is initializing already"
                    ])));
                    return false;
                }
                if (this.silentSource != null && !(yield o("WAWebVoipSilentCapture").isMicrophoneSwitchAllowedWhileSilent(grantedStream))) {
                    return false;
                }
                const captureParams = this.captureParams;
                if (!captureParams) {
                    o("WALogger").ERROR(ce || (ce = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture parameters are null"
                    ])));
                    return false;
                }
                const u = n === true || !document.hasFocus();
                if (o("WAWebUA").UA.isFirefox && t != null && u) {
                    o("WALogger").LOG(de || (de = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] Firefox context recreation needed, will recreate AudioContext in target window context"
                    ])));
                    return this.$21(e, t, t !== window, l, isAutoSwitch);
                }
                const audioContext = this.audioContext;
                if (audioContext == null) {
                    o("WALogger").ERROR(me || (me = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] audio context is null"
                    ])));
                    return false;
                }
                let d = false;
                let m = false;
                const captureGeneration = this.captureGeneration;
                const _ = yield o("WAWebAudioDeviceManager").switchAudioInputDeviceInternal({
                    deviceId: e,
                    captureParams,
                    audioContext,
                    targetWindow: t,
                    isAutoSwitch,
                    grantedStream,
                    onStreamUpdate: function(t) {
                        if (captureGeneration !== i.captureGeneration || i.audioCaptureInitState !== tt.Ready) {
                            o("WALogger").WARN(pe || (pe = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:switchDevice] capture stopped before the replacement stream arrived; releasing it"
                            ])));
                            m = true;
                            i.$22(null, null, t);
                            return;
                        }
                        d = true;
                        i.$9(false);
                        const e = i.silentSource != null;
                        try {
                            if (i.audioStream) {
                                const r = i.audioStream.getTracks();
                                r.forEach((e)=>{
                                    e.stop();
                                });
                                o("WALogger").LOG(_e || (_e = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:switchDevice] stopped ",
                                    " tracks. Kinds: ",
                                    ""
                                ])), r.length, r.slice(0, 3).map((e)=>e.kind));
                            }
                            if (i.mediaStreamSource) {
                                i.mediaStreamSource.disconnect();
                                o("WALogger").LOG(fe || (fe = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [AV:switchDevice] disconnected media stream source"
                                ])));
                            }
                            i.mediaStreamSource = audioContext?.createMediaStreamSource(t) ?? null;
                            i.$15(t);
                            if (i.implementation != null && i.mediaStreamSource != null) {
                                i.implementation.reconnect(i.mediaStreamSource);
                            }
                            i.$17();
                        } catch (error) {
                            i.$22(null, null, t);
                            i.mediaStreamSource = null;
                            i.audioStream = null;
                            throw error;
                        }
                        i.$8(audioContext, t, l);
                        i.$1.watchStream(e);
                        o("WALogger").LOG(ge || (ge = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] created new media stream source"
                        ])));
                    }
                });
                if (m) {
                    return false;
                }
                return this.$23(_, d, e);
            });
            function t(t, n, r, o, a) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$23 = function(t, n, r) {
            if (t) {
                o("WALogger").LOG(he || (he = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] Successfully switched to device: ",
                    ""
                ])), r.slice(0, 8));
                return true;
            }
            o("WALogger").ERROR(ye || (ye = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:switchDevice] Failed to switch to device: ",
                ""
            ])), r.slice(0, 8));
            if (n) {
                this.$7();
            }
            return false;
        };
        e_prototype.$24 = function(t) {
            const e = o("WAWebUA").UA.isFirefox ? t.AudioContext : AudioContext;
            const n = new e({
                latencyHint: "interactive"
            });
            o("WALogger").LOG(Ce || (Ce = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:switchDevice] created AudioContext, sample rate: ",
                "Hz, usedTargetWindowCtor=",
                ""
            ])), n.sampleRate, String(o("WAWebUA").UA.isFirefox));
            return n;
        };
        e_prototype.$25 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ audioContext, deviceId, params, targetWindow }) {
                for(var l = 3, s = [
                    0,
                    100,
                    200
                ], u = 0, c = null, d = function*(l) {
                    u = l;
                    if (l > 0) {
                        yield new (Je || (Je = n("Promise")))(function(e) {
                            return window.setTimeout(e, s[l]);
                        });
                    }
                    c = yield o("WAWebBackendApi").frontendSendAndReceive("voipAcquireMediaStream", {
                        type: "microphone",
                        selectedDeviceId: deviceId,
                        params: babelHelpers.extends({}, params, {
                            sampleRate: audioContext.sampleRate
                        }),
                        targetWindow,
                        suppressErrorPopup: true
                    });
                    if (c != null) {
                        return 1;
                    }
                }, m = 0; m < l && !(yield* d(m)); m++);
                if (u > 0) {
                    o("WALogger").LOG(be || (be = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] completed after ",
                        " retries with delays: ",
                        "ms"
                    ])), u, s.slice(1, u + 1));
                }
                return c;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$26 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                const implementation = this.implementation;
                const audioBuffer = this.audioBuffer;
                if (implementation == null || audioBuffer == null) {
                    throw r("err")("voip: [AV:switchDevice] missing capture implementation or audio buffer");
                }
                yield implementation.startAudioCapture({
                    audioContext: e,
                    mediaStreamSource: t,
                    sampleRate: n.sampleRate,
                    channels: n.channels,
                    framesPerChunk: n.framesPerChunk,
                    audioBuffer,
                    isStartCancelled: o("WAWebBoolFunc").returnFalse,
                    onInputLevel: this.$5()
                });
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$27 = function(t) {
            if (t != null) {
                try {
                    t.disconnect();
                    o("WALogger").LOG(ve || (ve = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] disconnected media stream source"
                    ])));
                } catch (error) {
                    o("WALogger").WARN(Se || (Se = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] media stream source disconnect failed: ",
                        ""
                    ])), error);
                }
            }
        };
        e_prototype.$28 = function(t) {
            if (t != null) {
                let e;
                try {
                    e = t.getTracks();
                } catch (error) {
                    o("WALogger").WARN(Re || (Re = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] audio stream getTracks failed: ",
                        ""
                    ])), error);
                    return;
                }
                e.forEach((e)=>{
                    try {
                        e.stop();
                    } catch (error) {
                        o("WALogger").WARN(Le || (Le = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] audio track stop failed: ",
                            ""
                        ])), error);
                    }
                });
                o("WALogger").LOG(Ee || (Ee = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] attempted to stop ",
                    " audio tracks"
                ])), e.length);
            }
        };
        e_prototype.$29 = function(t, n) {
            if (!(t == null || t.state === "closed")) {
                try {
                    t.close().catch((e)=>{
                        o("WALogger").LOG(ke || (ke = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] ",
                            " AudioContext close failed: ",
                            ""
                        ])), n, String(e));
                    });
                    o("WALogger").LOG(Ie || (Ie = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] initiated ",
                        " AudioContext close for context recreation"
                    ])), n);
                } catch (error) {
                    o("WALogger").WARN(Te || (Te = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] ",
                        " AudioContext close threw: ",
                        ""
                    ])), n, error);
                }
            }
        };
        e_prototype.$22 = function(t, n, audioStream) {
            this.$30({
                audioContext: t,
                audioStream,
                logContext: "replacement",
                mediaStreamSource: n
            });
        };
        e_prototype.$31 = function(t, n) {
            this.$22(t.audioContext, t.mediaStreamSource, t.audioStream);
            if (n) {
                this.$7();
            }
            return false;
        };
        e_prototype.$30 = function({ audioContext, audioStream, logContext, mediaStreamSource }) {
            this.$27(mediaStreamSource);
            this.$28(audioStream);
            if (audioStream != null) {
                if (at(audioStream)) {
                    o("WAWebVoipMicStreamBackstop").trackMicStream(audioStream);
                } else {
                    o("WAWebVoipMicStreamBackstop").untrackMicStream(audioStream);
                }
            }
            this.$29(audioContext, logContext);
        };
        e_prototype.$32 = function() {
            return {
                audioContext: this.audioContext,
                mediaStreamSource: this.mediaStreamSource,
                audioStream: this.audioStream
            };
        };
        e_prototype.$33 = function(t) {
            if (this.audioContext === t.audioContext) {
                this.audioContext = null;
            }
            if (this.mediaStreamSource === t.mediaStreamSource) {
                this.mediaStreamSource = null;
            }
            if (this.audioStream === t.audioStream) {
                this.audioStream = null;
            }
        };
        e_prototype.$34 = function(t, n) {
            if (this.audioCaptureInitState === tt.Ready && n === this.captureGeneration) {
                return true;
            }
            o("WALogger").WARN(De || (De = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:switchDevice] capture state changed during ",
                ", aborting context recreation. State = ",
                ""
            ])), t, this.audioCaptureInitState);
            return false;
        };
        e_prototype.$35 = function() {
            if (this.implementation != null && this.audioBuffer != null) {
                return true;
            }
            o("WALogger").ERROR(xe || (xe = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:switchDevice] missing capture implementation or audio buffer"
            ]))).sendLogs("voip: switchDevice missing capture implementation or audio buffer");
            return false;
        };
        e_prototype.$36 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const implementation = this.implementation;
                if (implementation != null) {
                    yield implementation.stopAudioCapture();
                    o("WALogger").LOG($e || ($e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] stopped audio capture implementation"
                    ])));
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$37 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this.$32();
                this.$9(false);
                yield this.$36();
                this.$17();
                this.$30({
                    audioContext: t.audioContext,
                    audioStream: t.audioStream,
                    logContext: "old",
                    mediaStreamSource: t.mediaStreamSource
                });
                this.$33(t);
                yield new (Je || (Je = n("Promise")))(function(e) {
                    return window.setTimeout(e, 200);
                });
                return e("current capture release");
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$38 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const implementation = this.implementation;
                if (implementation != null) {
                    try {
                        yield implementation.stopAudioCapture();
                    } catch (error) {
                        o("WALogger").WARN(Pe || (Pe = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] stop capture after context recreation abort failed: ",
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
        e_prototype.$39 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a) {
                if (t == null || n == null) {
                    o("WALogger").WARN(Ne || (Ne = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] cannot rollback context recreation; previous capture graph is missing"
                    ])));
                    this.$7();
                    return;
                }
                try {
                    nt(t);
                    yield this.$26(t, n, e);
                    if (a !== this.captureGeneration) {
                        o("WALogger").LOG(Me || (Me = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] capture torn down during rollback; leaving the restored graph to cleanup"
                        ])));
                        yield this.$38();
                        return;
                    }
                    this.audioContext = t;
                    this.mediaStreamSource = n;
                    if (r != null) {
                        this.$15(r);
                        this.$8(t, r, "rollback");
                    } else if (this.$3()) {
                        o("WALogger").WARN(we || (we = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] rolled back without a stream to observe"
                        ])));
                        o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
                            type: "capture-started",
                            reason: "rollback"
                        });
                    }
                    o("WALogger").LOG(Ae || (Ae = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] rolled back to previous capture graph after context recreation failure"
                    ])));
                } catch (error) {
                    o("WALogger").ERROR(Fe || (Fe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] rollback to previous capture graph failed: ",
                        ""
                    ])), error).sendLogs("voip: switchDevice context recreation rollback failed");
                    this.$7();
                }
            });
            function t(t, n, r, o, a) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$21 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a) {
                const i = this;
                o("WALogger").LOG(Oe || (Oe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] Starting context recreation for device: ",
                    ""
                ])), e.slice(0, 8));
                const captureParams = this.captureParams;
                if (!captureParams) {
                    o("WALogger").ERROR(Be || (Be = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] capture parameters are null"
                    ])));
                    return false;
                }
                if (rt(t)) {
                    o("WALogger").LOG(We || (We = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] target window already closed, skipping switch"
                    ])));
                    return false;
                }
                let s = null;
                let u = null;
                let c = null;
                let d = null;
                let m = null;
                let p = null;
                let _ = false;
                let f = false;
                let g = false;
                const captureGeneration = this.captureGeneration;
                const y = function(t) {
                    return i.$34(t, captureGeneration);
                };
                const C = ()=>i.$31({
                        audioContext: s,
                        mediaStreamSource: c,
                        audioStream: u
                    }, g);
                try {
                    s = this.$24(t);
                    if (!this.$35() || !n && (g = true, !(yield this.$37(y)))) {
                        return C();
                    }
                    u = yield this.$25({
                        audioContext: s,
                        deviceId: e,
                        params: captureParams,
                        targetWindow: t
                    });
                    if (!u) {
                        if (n) {
                            o("WALogger").ERROR(qe || (qe = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:switchDevice] failed to acquire new audio stream"
                            ]))).sendLogs("voip: switchDevice context recreation stream acquisition failed");
                        } else {
                            o("WALogger").ERROR(Ue || (Ue = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:switchDevice] failed to reacquire main-window audio stream after releasing popout capture"
                            ]))).sendLogs("voip: switchDevice main reacquisition failed after popout release");
                        }
                        return C();
                    }
                    o("WALogger").LOG(Ve || (Ve = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] acquired new audio stream before stopping current capture"
                    ])));
                    if (!y("stream acquisition") || (c = s.createMediaStreamSource(u), d = this.audioContext, m = this.mediaStreamSource, p = this.audioStream, n && (this.$9(false), g = true, yield this.$36(), _ = true), !y("capture stop"))) {
                        return C();
                    }
                    nt(s);
                    yield this.$26(s, c, captureParams);
                    o("WALogger").LOG(He || (He = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] restarted audio capture implementation"
                    ])));
                    if (!y("replacement capture start")) {
                        yield this.$38();
                        return C();
                    }
                    this.$17();
                    this.audioContext = s;
                    this.mediaStreamSource = c;
                    this.$15(u);
                    f = true;
                    this.$8(s, u, r);
                    o("WALogger").LOG(Ge || (Ge = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] created new media stream source from new stream"
                    ])));
                    if (n) {
                        try {
                            this.$30({
                                audioContext: d,
                                audioStream: p,
                                logContext: "old",
                                mediaStreamSource: m
                            });
                        } catch (error) {
                            o("WALogger").WARN(ze || (ze = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:switchDevice] old capture graph cleanup failed after replacement commit: ",
                                ""
                            ])), error);
                        }
                    }
                    try {
                        if (a !== true) {
                            o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(e);
                        }
                        o("WAWebAudioDeviceManager").AudioDeviceEvents.trigger("deviceSelectionChanged", e);
                    } catch (error) {
                        o("WALogger").WARN(je || (je = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchDevice] device selection update failed after context recreation: ",
                            ""
                        ])), error);
                    }
                    o("WALogger").LOG(Ke || (Ke = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] Successfully switched device with context recreation: ",
                        ""
                    ])), e.slice(0, 8));
                    return true;
                } catch (error) {
                    o("WALogger").ERROR(Qe || (Qe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchDevice] Context recreation failed: ",
                        ""
                    ])), error).sendLogs("voip: switchDevice context recreation failed");
                    if (f) {
                        try {
                            yield this.cleanup();
                        } catch (err) {
                            o("WALogger").ERROR(Xe || (Xe = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:switchDevice] cleanup after context recreation failure also failed: ",
                                ""
                            ])), err).sendLogs("voip: switchDevice context recreation cleanup failed");
                        }
                    } else {
                        if (_) {
                            this.$22(s, c, u);
                            yield this.$39(captureParams, d, m, p, captureGeneration);
                        } else {
                            C();
                        }
                    }
                    return false;
                }
            });
            function t(t, n, r, o, a) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.consumeAudioCaptureMetrics = function() {
            let t;
            return ((t = this.implementation) == null || t.consumeCaptureMetrics == null ? undefined : t.consumeCaptureMetrics()) ?? null;
        };
        e.processCapturedAudioChunks = function(t, n, a, i, l, s) {
            const e = a * i;
            if (e === 0) {
                throw r("err")(`voip: [AV:${s}] Invalid audio configuration: ${`wasmExpectedSamples cannot be 0 (framesPerChunk=${a}, channels=${i})`}`);
            }
            for(var u = t.getDataLength(), c = 0, d = Math.ceil(l / e) + 1; u >= e && c < d;){
                const m = t.read(e);
                if (m.length === e) {
                    o("WAWebAudioUtility").sendAudioToWasm(n, m);
                    c++;
                    u = t.getDataLength();
                } else {
                    break;
                }
            }
            if (c > 2) {
                o("WALogger").WARN(Ye || (Ye = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:",
                    "] processed ",
                    " chunks, remaining buffer: ",
                    ""
                ])), s, c, u);
            }
            return c;
        };
        return e;
    })();
    l.scheduleCallEndMicRelease = o("WAWebVoipMicStreamBackstop").scheduleCallEndMicRelease;
    l.WAWebVoipAudioCaptureBase = st;
}, 98);