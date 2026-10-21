__d("WAWebVoipRecoverMicrophone", [
    "Promise",
    "WALogger",
    "WAWebAudioDeviceManager",
    "WAWebCallCollection",
    "WAWebCoreActionsODS",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipDevicePermissionRequest",
    "WAWebVoipMicrophoneRefusalState",
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
    function h(e) {
        if (!o("WAWebUA").UA.isWebkit || !o("WAWebVoipAudioCaptureAndPlayback").isCurrentAudioInputSilent()) {
            return null;
        }
        const t = E(e);
        if (t == null) {
            return null;
        }
        return k(t);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isCallCurrent, microphoneRequest, onPermissionPrompt, targetWindow }) {
            if (!isCallCurrent()) {
                return W("stale_call", "stale_call");
            }
            const i = o("WAWebVoipAudioCaptureAndPlayback").isCurrentAudioInputSilent();
            const initialPermissionState = yield O(isCallCurrent, targetWindow?.navigator, "permission query");
            if (initialPermissionState == null) {
                return W("stale_call", "stale_call");
            }
            const s = b(initialPermissionState);
            if (s != null) {
                return s;
            }
            const u = yield v({
                initialPermissionState,
                isCallCurrent,
                microphoneRequest,
                onPermissionPrompt,
                targetWindow
            });
            return u ?? (i && o("WAWebVoipAudioCaptureAndPlayback").isCurrentAudioInputTrackLive() ? W("ready", "reacquired") : N(isCallCurrent, targetWindow));
        });
        return C.apply(this, arguments);
    }
    function b(initialPermissionState) {
        if (initialPermissionState === "denied") {
            return W("permission_denied", "permission_denied");
        }
        if (initialPermissionState !== "prompt" && o("WAWebVoipAudioCaptureAndPlayback").isCurrentAudioInputTrackLive()) {
            return W("ready", "already_ready");
        }
        return null;
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ initialPermissionState, isCallCurrent, microphoneRequest, onPermissionPrompt, targetWindow }) {
            if (initialPermissionState !== "granted" || microphoneRequest != null) {
                if (initialPermissionState !== "granted") {
                    if (onPermissionPrompt != null) {
                        onPermissionPrompt();
                    }
                }
                const d = yield R(targetWindow, isCallCurrent, microphoneRequest);
                if (!isCallCurrent()) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicRecovery] active call changed during permission preflight"
                    ])));
                    return W("stale_call", "stale_call");
                }
                if (d !== "granted") {
                    const m = yield w(isCallCurrent, targetWindow?.navigator, d === "permission_denied", microphoneRequest != null);
                    return q(m, "preflight_failed");
                }
            }
            const p = yield o("WAWebAudioDeviceManager").selectAudioDevice(targetWindow, true);
            if (!isCallCurrent()) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicRecovery] active call changed during device selection"
                ])));
                return W("stale_call", "stale_call");
            }
            if (p == null) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicRecovery] no microphone available after permission preflight"
                ])));
                const _ = yield w(isCallCurrent, targetWindow?.navigator);
                return q(_, "preflight_failed");
            }
            const f = yield O(isCallCurrent, targetWindow?.navigator, "post-preflight permission query");
            if (f == null) {
                return W("stale_call", "stale_call");
            }
            if (f === "denied") {
                return W("permission_denied", "permission_denied");
            }
            if (f === "prompt") {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicRecovery] microphone permission remains prompt after preflight"
                ])));
                return W("recovery_failed", "preflight_failed");
            }
            return null;
        });
        return S.apply(this, arguments);
    }
    function R(e, t, n) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = n?.take() ?? E(e);
            if (a == null) {
                return "failed";
            }
            const i = self.performance.now();
            try {
                const l = yield a;
                yield D(l, t);
                T(t, false);
                return "granted";
            } catch (error) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicRecovery] microphone request failed after ",
                    "ms: ",
                    ""
                ])), Math.round(self.performance.now() - i), P(error) ?? "unknown error");
                if ($(error)) {
                    return "permission_denied";
                }
                return "failed";
            }
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        const r = e?.navigator?.mediaDevices ?? navigator.mediaDevices;
        if (r?.getUserMedia == null) {
            return null;
        }
        return r.getUserMedia({
            audio: o("WAWebVoipDevicePermissionRequest").getMicrophoneConstraints()
        });
    }
    function k(e) {
        e.catch(r("WAWebNoop"));
        let t = false;
        return {
            release: function() {
                if (!t) {
                    e.then(I, r("WAWebNoop"));
                }
            },
            take: function() {
                t = true;
                return e;
            }
        };
    }
    function I(e) {
        e.getTracks().forEach((e)=>e.stop());
    }
    function T(e, t) {
        const a = r("WAWebCallCollection").activeCall?.id;
        if (!(a == null || !e())) {
            if (t) {
                o("WAWebVoipMicrophoneRefusalState").reportMicrophoneRefused(a);
            } else {
                o("WAWebVoipMicrophoneRefusalState").clearMicrophoneRefused(a);
            }
        }
    }
    function D(e, t) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (o("WAWebVoipAudioCaptureAndPlayback").isCurrentAudioInputSilent()) {
                yield o("WAWebVoipAudioCaptureAndPlayback").adoptGrantedMicrophoneStream((g || (g = n("Promise"))).resolve(e), t);
                return;
            }
            I(e);
        });
        return x.apply(this, arguments);
    }
    function $(error) {
        const t = P(error);
        return t === "NotAllowedError" || t === "PermissionDeniedError";
    }
    function P(e) {
        if (e == null || typeof e !== "object" || !("name" in e)) {
            return null;
        }
        return String(e.name);
    }
    function N(e, t) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebVoipAudioCaptureAndPlayback").reacquireCurrentAudioInputDevice({
                isRecoveryCurrent: e,
                targetWindow: t
            });
            if (!e()) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicRecovery] active call changed during microphone reacquisition"
                ])));
                return W("stale_call", "stale_call");
            }
            if (!n) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicRecovery] microphone reacquisition failed"
                ])));
                const r = yield w(e, t?.navigator);
                return q(r, "reacquire_failed");
            }
            return W("ready", "reacquired");
        });
        return M.apply(this, arguments);
    }
    function w(e, t, n, r) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = false, r = false) {
            const a = yield O(e, t, "failure classification");
            if (a == null) {
                return "stale_call";
            }
            if (n && a === "prompt") {
                T(e, true);
            }
            const i = F(a, n, r);
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [MicRecovery] microphone recovery failed: ",
                " (permission ",
                ", refused ",
                ", in tap ",
                ")"
            ])), i, a, String(n), String(r));
            return i;
        });
        return A.apply(this, arguments);
    }
    function F(e, t, n) {
        if (e === "denied" || t && (e === "unknown" || !n && o("WAWebVoipDeviceAccessRecoveryGating").isRefusalKeptUntilReload())) {
            return "permission_denied";
        }
        return "recovery_failed";
    }
    function O(e, t, n) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = yield o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("microphone", t);
            if (e()) {
                return r;
            }
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [MicRecovery] active call changed during ",
                ""
            ])), n);
            return null;
        });
        return B.apply(this, arguments);
    }
    function W(e, t) {
        o("WAWebCoreActionsODS").logCallMicUnmutePreparationOutcome(t);
        return e;
    }
    function q(e, t) {
        switch(e){
            case "permission_denied":
                return W(e, "permission_denied");
            case "stale_call":
                return W(e, "stale_call");
            case "recovery_failed":
                return W(e, t);
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    l.startMicrophoneRequestInGesture = h;
    l.prepareMicrophoneForUnmute = y;
}, 98);