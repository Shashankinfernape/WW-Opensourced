__d("WAWebVoipAudioCaptureAndPlayback", [
    "WALogger",
    "WAPromiseDelays",
    "WAResolvable",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebAudioUtility",
    "WAWebBoolFunc",
    "WAWebUA",
    "WAWebVoipAudioCaptureBase",
    "WAWebVoipAudioContextResume",
    "WAWebVoipAudioPlaybackBase",
    "WAWebVoipAudioPlaybackState",
    "WAWebVoipAvDriverInitQpl",
    "WAWebVoipOperationQueue",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipSilentCapture",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isWAWebFeatureDetectionAndroidTablet"
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
    let B = null;
    let W = 0;
    function q() {
        W++;
        return W;
    }
    let U = null;
    let V = false;
    let H = 0;
    let G = new (o("WAResolvable")).Resolvable;
    function z() {
        V = false;
        H++;
        G = new (o("WAResolvable")).Resolvable;
        return H;
    }
    function j(e, t = H) {
        if (t === H) {
            V = e;
            G.resolve(e);
        }
    }
    function K() {
        G.resolve(false);
        return z();
    }
    function Q(e) {
        if (e === H) {
            G.resolve(false);
            z();
        }
    }
    function X() {
        return U?.getEstimatedOutputLagSamples() ?? 0;
    }
    function Y(e) {
        return J.apply(this, arguments);
    }
    function J() {
        J = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (V) {
                return true;
            }
            return yield o("WAPromiseDelays").withTimeout(G.promise, e, o("WAWebBoolFunc").returnFalse);
        });
        return J.apply(this, arguments);
    }
    const Z = 15000;
    const ee = new (o("WAWebVoipOperationQueue")).WAWebVoipOperationQueue("AudioCapture");
    const te = new (o("WAWebVoipOperationQueue")).WAWebVoipOperationQueue("AudioPlayback");
    let ne = false;
    function re() {
        return o("WAWebABProps").getABPropConfigValue("enable_web_voip_audio_driver_lifetime_fix") === true;
    }
    function oe(e) {
        return ae.apply(this, arguments);
    }
    function ae() {
        ae = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ deviceId, targetWindow }) {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] requestAudioReacquisition: ",
                ""
            ])), deviceId);
            try {
                const r = yield Ge(deviceId, targetWindow, true, true);
                if (r) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] audio re-acquisition completed"
                    ])));
                } else {
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] audio re-acquisition failed"
                    ])));
                }
            } catch (error) {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] audio re-acquisition error: ",
                    ""
                ])), error).sendLogs("voip: audio re-acquisition failed");
            }
        });
        return ae.apply(this, arguments);
    }
    function ie() {
        if (!ne) {
            o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on("requestAudioReacquisition", oe);
            ne = true;
        }
    }
    function le() {
        const r = B?.captureParams;
        return {
            sampleRate: r?.sampleRate ?? 16000,
            framesPerChunk: r?.framesPerChunk ?? 320
        };
    }
    function se() {
        return B?.hasLiveAudioTrack() === true;
    }
    function ue() {
        return B?.silentSource != null;
    }
    function ce(e) {
        return de.apply(this, arguments);
    }
    function de() {
        de = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.device_type !== o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio) {
                const t = re();
                const r = t ? q() : W;
                ie();
                ee.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (!(t && r !== W)) {
                        if (B == null) {
                            B = new (o("WAWebVoipAudioCaptureBase")).WAWebVoipAudioCaptureBase(ke);
                        }
                        const n = B;
                        Ne = null;
                        const a = o("WAWebVoipAvDriverInitQpl").startVoipAvDriverInitQpl();
                        o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(a, o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint.CAPTURE_DRIVER_INIT_START);
                        try {
                            yield n.initCaptureDriver(e);
                            o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(a, o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint.CAPTURE_DRIVER_INIT_END);
                            o("WAWebVoipAvDriverInitQpl").endVoipAvDriverInitQplSuccess(a);
                        } catch (error) {
                            o("WAWebVoipAvDriverInitQpl").endVoipAvDriverInitQplFail(a, "capture_init_failed");
                            throw error;
                        }
                    }
                }), "initCaptureDriver");
            }
        });
        return de.apply(this, arguments);
    }
    function me(e) {
        return pe.apply(this, arguments);
    }
    function pe() {
        pe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e?.device_type !== o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio) {
                const t = re();
                const r = W;
                ee.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (!(t && r !== W)) {
                        if (B == null) {
                            o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [AV:startCaptureJS] capture instance is null. Call initCaptureDriverJS first."
                            ]))).sendLogs("voip: capture instance is null");
                            return;
                        }
                        yield B.startCapture(t ? function() {
                            return r !== W;
                        } : undefined);
                        if (!(t && r !== W)) {
                            const n = U?.playbackAudioContext;
                            if (n != null && n.state === "suspended") {
                                try {
                                    yield o("WAWebVoipAudioContextResume").resumeAudioContextLoggingDelays(n, "startCaptureJS");
                                    if (t && r !== W) {
                                        return;
                                    }
                                    he(n);
                                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [AV:startCaptureJS] Also resumed playback AudioContext"
                                    ])));
                                } catch (error) {
                                    if (t && r !== W) {
                                        return;
                                    }
                                    o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [AV:startCaptureJS] Failed to resume playback AudioContext: ",
                                        ""
                                    ])), error);
                                }
                            } else {
                                if (n != null && n.state === "running" && ge()) {
                                    ye(n);
                                }
                            }
                        }
                    }
                }), "startCapture");
            }
        });
        return pe.apply(this, arguments);
    }
    const _e = 2000;
    const fe = new WeakSet;
    function ge() {
        return o("WAWebUA").UA.isBlink && o("isWAWebFeatureDetectionAndroidTablet").isWAWebFeatureDetectionAndroidOS() && o("WAWebABProps").getABPropConfigValue("web_voip_playback_restart_after_mic_mode") === 1;
    }
    function he(e) {
        if (se()) {
            fe.add(e);
        }
    }
    function ye(e) {
        te.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (Ce(e) && (yield be(e))) {
                fe.add(e);
            }
        }), "restartPlaybackOutput");
    }
    function Ce(e) {
        const t = U;
        return t != null && t.playbackAudioContext === e && t.getAudioElement() == null && e.state === "running" && !fe.has(e) && se();
    }
    function be(e) {
        return ve.apply(this, arguments);
    }
    function ve() {
        ve = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (yield Se(e.suspend(), "suspend")) {
                if (yield Se(e.resume(), "resume")) {
                    o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:restartPlaybackOutput] recreated playback output after microphone start"
                    ])));
                    return true;
                }
                if (U?.playbackAudioContext !== e) {
                    return false;
                }
                if (yield Se(e.resume(), "resume")) {
                    o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:restartPlaybackOutput] playback output resumed on the second attempt"
                    ])));
                    return true;
                }
                Le(e);
                o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:restartPlaybackOutput] playback output did not resume, state=",
                    ""
                ])), e.state).sendLogs("voip: playback output restart did not resume");
                return false;
            }
            Le(e);
            o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:restartPlaybackOutput] playback output did not suspend, state=",
                ""
            ])), e.state).sendLogs("voip: playback output restart did not suspend");
            return false;
        });
        return ve.apply(this, arguments);
    }
    function Se(e, t) {
        return Re.apply(this, arguments);
    }
    function Re() {
        Re = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                return yield o("WAPromiseDelays").withTimeout(e.then(o("WAWebBoolFunc").returnTrue), _e, function() {
                    o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:restartPlaybackOutput] playback output ",
                        " timed out"
                    ])), t);
                    return false;
                });
            } catch (error) {
                o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:restartPlaybackOutput] playback output ",
                    " failed: ",
                    ""
                ])), t, error);
                return false;
            }
        });
        return Re.apply(this, arguments);
    }
    function Le(t) {
        t.resume().catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:restartPlaybackOutput] background resume failed: ",
                ""
            ])), t);
        });
    }
    const Ee = 300;
    function ke() {
        if (o("WAWebUA").UA.isWebkit) {
            te.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = U?.getAudioElement();
                if (!(t == null || t.paused || !De(t) || !xe())) {
                    t.pause();
                    if ((yield $e(t)) || (yield $e(t))) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:restartPlaybackElement] restarted call audio once the microphone delivered audio"
                        ])));
                        return;
                    }
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:restartPlaybackElement] call audio did not resume"
                    ]))).sendLogs("voip-playback-element-restart-did-not-resume");
                    Te(t);
                }
            }), "restartPlaybackElement");
        }
    }
    let Ie = null;
    function Te(e) {
        Ie?.();
        const e_ownerDocument = e.ownerDocument;
        const n = function() {
            Ie?.();
            if (e.paused) {
                e.play().catch((e)=>{
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:restartPlaybackElement] play on the next gesture failed: ",
                        ""
                    ])), e);
                });
            }
        };
        e_ownerDocument.addEventListener("pointerdown", n, true);
        e_ownerDocument.addEventListener("keydown", n, true);
        Ie = function() {
            e_ownerDocument.removeEventListener("pointerdown", n, true);
            e_ownerDocument.removeEventListener("keydown", n, true);
            Ie = null;
        };
    }
    function De(e) {
        return e.sinkId == null || e.sinkId === "" || e.sinkId === "default";
    }
    function xe() {
        const t = B?.audioStream?.getAudioTracks()[0];
        return t instanceof MediaStreamTrack && t.readyState === "live" && !t.muted;
    }
    function $e(e) {
        return Pe.apply(this, arguments);
    }
    function Pe() {
        Pe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAPromiseDelays").delayMs(Ee);
            try {
                return yield o("WAPromiseDelays").withTimeout(e.play().then(o("WAWebBoolFunc").returnTrue), _e, function() {
                    return !e.paused;
                });
            } catch (error) {
                o("WALogger").WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:restartPlaybackElement] play failed: ",
                    ""
                ])), error);
                return false;
            }
        });
        return Pe.apply(this, arguments);
    }
    var Ne = null;
    function Me() {
        if (B != null) {
            return B.consumeAudioCaptureMetrics();
        }
        const e = Ne;
        Ne = null;
        return e;
    }
    function we(e) {
        return Ae.apply(this, arguments);
    }
    function Ae() {
        Ae = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e?.device_type !== o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio) {
                if (re()) {
                    q();
                }
                ee.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = B;
                    if (e == null) {
                        o("WALogger").WARN(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:stopCaptureJS] capture instance is null, nothing to stop."
                        ])));
                        return;
                    }
                    Ne = e.consumeAudioCaptureMetrics();
                    yield e.stopCapture();
                    B = null;
                }), "stopCapture");
            }
        });
        return Ae.apply(this, arguments);
    }
    function Fe(e) {
        return Oe.apply(this, arguments);
    }
    function Oe() {
        Oe = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = K();
            te.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (t === H) {
                    if (U == null) {
                        U = new (o("WAWebVoipAudioPlaybackBase")).WAWebVoipAudioPlaybackBase;
                    }
                    const n = U;
                    qe = null;
                    const r = o("WAWebVoipAvDriverInitQpl").startVoipAvDriverInitQpl();
                    o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(r, o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint.PLAYBACK_DRIVER_INIT_START);
                    try {
                        yield n.initPlaybackDriver(e);
                        o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(r, o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint.PLAYBACK_DRIVER_INIT_END);
                        o("WAWebVoipAvDriverInitQpl").endVoipAvDriverInitQplSuccess(r);
                    } catch (error) {
                        o("WAWebVoipAvDriverInitQpl").endVoipAvDriverInitQplFail(r, "playback_init_failed");
                        throw error;
                    }
                    if (t === H) {
                        o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(e.sample_rate);
                    }
                }
            }), "initPlaybackDriver");
        });
        return Oe.apply(this, arguments);
    }
    function Be() {
        return We.apply(this, arguments);
    }
    function We() {
        We = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = re();
            const t = H;
            te.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (t === H) {
                    if (U == null) {
                        j(false, t);
                        o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:startPlaybackJS] playback instance is null. Call initPlaybackDriverJS first."
                        ]))).sendLogs("voip: playback instance is null");
                        return;
                    }
                    try {
                        yield U.startPlayback(e ? function() {
                            return t !== H;
                        } : undefined);
                        j(true, t);
                    } catch (error) {
                        j(false, t);
                        throw error;
                    }
                }
            }), "startPlayback");
        });
        return We.apply(this, arguments);
    }
    var qe = null;
    function Ue() {
        if (U != null) {
            return U.consumeAudioPlaybackMetrics();
        }
        const e = qe;
        qe = null;
        return e;
    }
    function Ve() {
        return He.apply(this, arguments);
    }
    function He() {
        He = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = re();
            const t = e ? null : H;
            if (e) {
                K();
            }
            te.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = U;
                if (e == null) {
                    if (t != null) {
                        Q(t);
                    }
                    o("WALogger").WARN(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop."
                    ])));
                    return;
                }
                qe = e.consumeAudioPlaybackMetrics();
                try {
                    yield e.stopPlayback();
                } finally{
                    if (t != null) {
                        Q(t);
                    }
                    U = null;
                    o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(null);
                    Ie?.();
                }
            }), "stopPlayback");
        });
        return He.apply(this, arguments);
    }
    function Ge(e, t, n, r) {
        return ze.apply(this, arguments);
    }
    function ze() {
        ze = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a) {
            const i = new (o("WAResolvable")).Resolvable;
            ee.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    const n = B;
                    if (n == null) {
                        o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchAudioDevice] capture instance is null."
                        ])));
                        i.resolve(false);
                        return;
                    }
                    if (je(n, e, r, a)) {
                        i.resolve(true);
                        return;
                    }
                    const l = yield n.switchDevice(e, t, r, a);
                    i.resolve(l);
                } catch (error) {
                    o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchAudioInputDevice] failed: ",
                        ""
                    ])), error).sendLogs("voip: switchAudioInputDevice failed");
                    i.resolve(false);
                }
            }), "switchInputDevice");
            return i.promise;
        });
        return ze.apply(this, arguments);
    }
    function je(e, t, n, r) {
        return r === true && n !== true && o("WAWebVoipSilentCapture").isLiveOnGrantedMicrophone(e, t);
    }
    function Ke(e) {
        return Qe.apply(this, arguments);
    }
    function Qe() {
        Qe = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isRecoveryCurrent, targetWindow }) {
            const i = B;
            if (i == null) {
                o("WALogger").WARN($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:reacquireAudioInputDevice] current capture is unavailable"
                ])));
                return false;
            }
            const l = new (o("WAResolvable")).Resolvable;
            ee.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    if (B !== i || !isRecoveryCurrent()) {
                        l.resolve(false);
                        return;
                    }
                    if (yield Xe(i)) {
                        l.resolve(B === i && isRecoveryCurrent());
                        return;
                    }
                    const e = o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice();
                    if (e == null) {
                        o("WALogger").WARN(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:reacquireAudioInputDevice] current device is unavailable"
                        ])));
                        l.resolve(false);
                        return;
                    }
                    const n = yield o("WAPromiseDelays").withTimeout(i.switchDevice(e, targetWindow, undefined, true), Z, o("WAWebBoolFunc").returnFalse);
                    l.resolve(B === i && isRecoveryCurrent() && n);
                } catch (error) {
                    o("WALogger").ERROR(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:reacquireAudioInputDevice] failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-mic-reacquire-failed");
                    l.resolve(false);
                }
            }), "reacquireInputDevice");
            return l.promise;
        });
        return Qe.apply(this, arguments);
    }
    function Xe(e) {
        return Ye.apply(this, arguments);
    }
    function Ye() {
        Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const e_automaticDeviceChangePromise = e.automaticDeviceChangePromise;
            if (e_automaticDeviceChangePromise == null || (yield e_automaticDeviceChangePromise.catch(o("WAWebBoolFunc").returnFalse), !e.hasLiveAudioTrack())) {
                return false;
            }
            o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:reacquireAudioInputDevice] an automatic switch already provided a live microphone"
            ])));
            return true;
        });
        return Ye.apply(this, arguments);
    }
    function Je(e, t) {
        const n = e.then((e)=>{
            if (e == null) {
                return false;
            }
            return Ze(e, t);
        }).catch(o("WAWebBoolFunc").returnFalse);
        o("WAWebVoipSilentCapture").holdSilenceSwitchesUntil(n, t);
        n.then((e)=>{
            if (!e && t()) {
                o("WAWebVoipSilentCapture").retrySwitchFromSilence(B?.silentSource);
            }
        });
        return n;
    }
    function Ze(e, t) {
        const a = new (o("WAResolvable")).Resolvable;
        ee.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let n = false;
            try {
                n = yield et(e, t);
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:adoptMicrophoneStream] failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-adopt-granted-microphone-failed");
            }
            if (!n) {
                e.getTracks().forEach((e)=>{
                    e.stop();
                });
            }
            a.resolve(n);
        }), "adoptMicrophoneStream");
        return a.promise;
    }
    function et(e, t) {
        return tt.apply(this, arguments);
    }
    function tt() {
        tt = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = B;
            const a = e.getAudioTracks()[0]?.getSettings().deviceId;
            if (r?.silentSource == null || a == null || !t()) {
                o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:adoptMicrophoneStream] capture isn't waiting for a microphone, releasing the granted one"
                ])));
                return false;
            }
            o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:adoptMicrophoneStream] adopting the granted microphone ",
                ""
            ])), a.slice(0, 8));
            o("WAWebVoipSilentCapture").markGrantedMicrophoneStream(e, a);
            return r.switchDevice(a, undefined, undefined, true, e);
        });
        return tt.apply(this, arguments);
    }
    function nt(e) {
        return rt.apply(this, arguments);
    }
    function rt() {
        rt = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new (o("WAResolvable")).Resolvable;
            te.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    if (U == null) {
                        o("WALogger").WARN(F || (F = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:switchAudioOutputDevice] playback instance is null, saving preference only"
                        ])));
                        o("WAWebAudioDeviceManager").saveAudioOutputDevicePreference(e, "AV:switchAudioOutputDevice");
                        t.resolve(false);
                        return;
                    }
                    const n = yield U.switchOutputDevice(e);
                    t.resolve(n);
                } catch (error) {
                    o("WALogger").ERROR(O || (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchAudioOutputDevice] failed: ",
                        ""
                    ])), error).sendLogs("voip: switchAudioOutputDevice failed");
                    t.resolve(false);
                }
            }), "switchOutputDevice");
            return t.promise;
        });
        return rt.apply(this, arguments);
    }
    l.getPlaybackSampleRate = o("WAWebVoipAudioPlaybackState").getPlaybackSampleRate;
    l.getEstimatedPlaybackOutputLagSamples = X;
    l.waitForPlaybackStart = Y;
    l.getCaptureParams = le;
    l.isCurrentAudioInputTrackLive = se;
    l.isCurrentAudioInputSilent = ue;
    l.initCaptureDriverJS = ce;
    l.startCaptureJS = me;
    l.consumeAudioCaptureMetrics = Me;
    l.stopCaptureJS = we;
    l.initPlaybackDriverJS = Fe;
    l.startPlaybackJS = Be;
    l.consumeAudioPlaybackMetrics = Ue;
    l.stopPlaybackJS = Ve;
    l.switchAudioInputDevice = Ge;
    l.reacquireCurrentAudioInputDevice = Ke;
    l.adoptGrantedMicrophoneStream = Je;
    l.switchAudioOutputDevice = nt;
}, 98);