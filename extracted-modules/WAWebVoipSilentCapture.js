__d("WAWebVoipSilentCapture", [
    "Promise",
    "WALogger",
    "WAWebAudioDeviceManager",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipMicrophoneLevelAccumulator",
    "asyncToGeneratorRuntime",
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
    const h = 0.00007629627368999298;
    const y = new Set([
        "default",
        "communications"
    ]);
    const C = 2;
    const b = new WeakMap;
    const v = new WeakMap;
    let S = null;
    const R = new WeakMap;
    function L() {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield (g || (g = n("Promise"))).all([
                o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("microphone"),
                o("WAWebAudioDeviceManager").selectAudioDevice()
            ]);
            const t = e[0];
            const r = e[1];
            return {
                missingReason: O() ? "hand-off" : k(t, r),
                selectedDeviceId: r
            };
        });
        return E.apply(this, arguments);
    }
    function k(e, t) {
        if (e === "denied" || e === "prompt") {
            return e;
        }
        if (t == null) {
            return "no-device";
        }
        return null;
    }
    function I(t) {
        if (o("WAWebUA").UA.isFirefox) {
            const r = new AudioContext({
                latencyHint: "interactive"
            });
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:initCaptureDriver] Firefox detected; system sample rate:\n      ",
                "Hz, VoIP expects ",
                "Hz"
            ])), r.sampleRate, t.sampleRate);
            return r;
        }
        return o("WAWebVoipCallAudioUnlock").takeUnlockedAudioContext("capture", t.sampleRate) ?? new AudioContext({
            sampleRate: t.sampleRate,
            latencyHint: "interactive"
        });
    }
    function T(e, t) {
        const n = I(e);
        try {
            const silentSource = n.createConstantSource();
            silentSource.offset.value = h;
            silentSource.start();
            if (t != null) {
                v.set(silentSource, t);
                b.set(silentSource, o("WAWebMediaPermissionsUtils").watchMediaPermissionState("microphone", function(e) {
                    if (e === "granted") {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV] microphone allowed while capturing silence"
                        ])));
                        t();
                    }
                }));
            }
            return {
                audioContext: n,
                silentSource
            };
        } catch (error) {
            n.close().catch(r("WAWebNoop"));
            throw error;
        }
    }
    function D(e) {
        let t;
        if ((t = b.get(e)) != null) {
            t();
        }
        b.delete(e);
        try {
            e.disconnect();
            e.stop();
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] stopped capturing silence"
            ])));
        } catch (error) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] stopping the silent capture source failed"
            ]))).catching(r("getErrorSafe")(error));
        }
    }
    function x(e) {
        if (e != null) {
            let t;
            if ((t = v.get(e)) != null) {
                t();
            }
        }
    }
    function $(e, t) {
        R.set(e, t);
    }
    function P(e, t) {
        const e_audioStream = e.audioStream;
        const r = e_audioStream != null && !y.has(t) && R.get(e_audioStream) === t && e.hasLiveAudioTrack();
        if (r) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] already live on the granted microphone ",
                ", not switching"
            ])), t.slice(0, 8));
        }
        return r;
    }
    function N(handOff, isCallCurrent) {
        const n = {
            handOff,
            isCallCurrent
        };
        S = n;
        const r = function() {
            if (S === n) {
                S = null;
            }
        };
        handOff.then(r, r);
    }
    function M() {
        S = null;
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e != null) {
                return true;
            }
            if (O()) {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] skipped while capturing silence, a granted microphone is being handed over"
                ])));
                return false;
            }
            const t = yield o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("microphone");
            if (t === "denied" || t === "prompt") {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchDevice] skipped while capturing silence, microphone permission ",
                    ""
                ])), t);
                return false;
            }
            return true;
        });
        return A.apply(this, arguments);
    }
    class F {
        constructor(e){
            this.$2 = null;
            this.$1 = e;
        }
        watchStream(t) {
            if (t || this.$2 != null) {
                this.$2 = 0;
            }
        }
        stop() {
            this.$2 = null;
        }
        countLevel(t) {
            const e = this.$2;
            if (e != null) {
                const n = t > o("WAWebVoipMicrophoneLevelAccumulator").SILENCE_RMS_DBFS ? e + 1 : 0;
                if (n < C) {
                    this.$2 = n;
                    return;
                }
                this.$2 = null;
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] microphone delivering audio after silence"
                ])));
                try {
                    this.$1?.();
                } catch (error) {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] handling microphone audio after silence failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-mic-audio-after-silence-failed");
                }
            }
        }
    }
    function O() {
        return S?.isCallCurrent() === true;
    }
    l.findMicrophone = L;
    l.getMissingMicrophoneReason = k;
    l.createCaptureAudioContext = I;
    l.createSilentCaptureGraph = T;
    l.stopSilentSource = D;
    l.retrySwitchFromSilence = x;
    l.markGrantedMicrophoneStream = $;
    l.isLiveOnGrantedMicrophone = P;
    l.holdSilenceSwitchesUntil = N;
    l.releaseSilenceSwitchHoldForTesting = M;
    l.isMicrophoneSwitchAllowedWhileSilent = w;
    l.AudioAfterSilenceWatch = F;
}, 98);