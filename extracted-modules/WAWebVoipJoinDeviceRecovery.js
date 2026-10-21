__d("WAWebVoipJoinDeviceRecovery", [
    "Promise",
    "WALogger",
    "WAWebCallCollection",
    "WAWebCoreActionsODS",
    "WAWebEnvironment",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipBlockedMicrophoneJoinState",
    "WAWebVoipBrowserPermissionButtonGating",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipCallStateUtils",
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipDevicePermissionDialogLoader.react",
    "WAWebVoipDevicePermissionRequest",
    "WAWebVoipMicrophoneInputState",
    "WAWebVoipMicrophoneRefusalState",
    "WAWebVoipRecoveryJoinLog",
    "WAWebVoipStackInterface",
    "WAWebVoipWaCallEnums",
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
    let h;
    let y;
    let C;
    const b = 10000;
    const v = 30000;
    const S = {
        join: null,
        offersPermissionButton: false
    };
    function R(e, t) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t == null || !A(t.getState()) || r("WAWebEnvironment").isWindows) {
                return S;
            }
            o("WAWebVoipBlockedMicrophoneJoinState").discardBlockedMicrophoneJoin(t.id);
            const n = {
                camera: e.camera,
                microphone: e.microphone && !t.selfMicMuted
            };
            const a = yield I(n);
            D(a);
            if (!a.isRecoveryNeeded || !o("WAWebVoipDeviceAccessRecoveryGating").isDeviceAccessRecoveryEnabled()) {
                return S;
            }
            const offersPermissionButton = M((n.microphone || o("WAWebVoipBlockedMicrophoneJoinState").isMutedForBlockedMicrophone(t.id)) && a.isMicrophoneBlocked);
            const l = {
                join: null,
                offersPermissionButton
            };
            P(a);
            if (x(a) || !$(a)) {
                return l;
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI: joining without waiting for devices, microphone off=",
                ", camera off=",
                ""
            ])), String(a.isMicrophoneOff), String(a.isCameraOff));
            const join = w(t, {
                acceptMuted: a.isMicrophoneOff,
                acceptWithoutCamera: a.isCameraOff || a.neverAsked.microphone,
                afterAccept: offersPermissionButton ? r("WAWebNoop") : F(a, n, t)
            }, {
                isAfterGuide: false,
                offersPermissionButton
            });
            return babelHelpers.extends({}, l, {
                join
            });
        });
        return L.apply(this, arguments);
    }
    function E(e, t, n, r) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, i) {
            if (t == null || !A(t.getState())) {
                return null;
            }
            const l = yield (C || (C = n("Promise"))).all([
                o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("microphone"),
                e.camera ? o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("camera") : "unknown"
            ]);
            const s = l[0];
            const u = l[1];
            const offersPermissionButton = i && s === "denied";
            const p = N(s);
            if (p == null) {
                return null;
            }
            o("WAWebVoipCallAudioUnlock").holdUnlockedCallAudio();
            if (a) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: microphone unavailable before joining (",
                    "), joining muted, waits for the guide=",
                    ""
                ])), s, String(p));
            } else {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: microphone refused before joining (",
                    "), joining muted, waits for the guide=",
                    ""
                ])), s, String(p));
            }
            if (!a && e.microphone && !t.selfMicMuted) {
                o("WAWebVoipMicrophoneRefusalState").reportMicrophoneRefused(t.id);
            }
            const _ = {
                acceptMuted: true,
                acceptWithoutCamera: u !== "granted",
                afterAccept: r("WAWebNoop")
            };
            return babelHelpers.extends({}, w(t, _, {
                isAfterGuide: p,
                offersPermissionButton
            }), {
                waitsForGuideClick: p
            });
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield (C || (C = n("Promise"))).all([
                o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("microphone"),
                e.camera ? o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("camera") : "unknown"
            ]);
            const r = t[0];
            const a = t[1];
            const neverAsked = {
                camera: a === "prompt",
                microphone: e.microphone && r === "prompt"
            };
            const isMicrophoneOff = r === "denied" || r === "prompt";
            return {
                isCameraOff: a !== "granted",
                isMicrophoneBlocked: r === "denied",
                isMicrophoneNeverAsked: r === "prompt",
                isMicrophoneOff,
                isRecoveryNeeded: isMicrophoneOff || neverAsked.camera,
                neverAsked
            };
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        if (e.isMicrophoneOff && o("WAWebVoipBrowserPermissionButtonGating").hasBrowserPermissionButton("microphone")) {
            o("WAWebVoipDevicePermissionDialogLoader.react").preloadDevicePermissionDialog();
        }
    }
    function x(e) {
        return o("WAWebUA").UA.isWebkit && e.isMicrophoneNeverAsked;
    }
    function $(e) {
        return !e.isMicrophoneOff || o("WAWebVoipCallAudioUnlock").canStartCallAudio();
    }
    function P(e) {
        if (o("WAWebUA").UA.isWebkit && e.isMicrophoneOff) {
            o("WAWebVoipCallAudioUnlock").unlockCallAudio();
        }
    }
    function N(e) {
        if (e !== "denied" && e !== "prompt" || !o("WAWebVoipDeviceAccessRecoveryGating").isDeviceAccessRecoveryEnabled()) {
            return null;
        }
        return !o("WAWebVoipCallAudioUnlock").canStartCallAudio();
    }
    function M(e) {
        return e && o("WAWebVoipBrowserPermissionButtonGating").isBrowserPermissionButtonEnabled("microphone");
    }
    function w(e, t, { isAfterGuide, offersPermissionButton }) {
        return babelHelpers.extends({}, t, {
            afterAccept: function() {
                o("WAWebVoipRecoveryJoinLog").recordRecoveryJoin(e, {
                    isAfterGuide,
                    isCameraOff: t.acceptWithoutCamera,
                    isMicrophoneOff: t.acceptMuted
                });
                if (offersPermissionButton) {
                    o("WAWebVoipBlockedMicrophoneJoinState").recordBlockedMicrophoneJoin(e.id);
                    o("WAWebCoreActionsODS").logCallBlockedMicJoin("recorded");
                }
                t.afterAccept();
            }
        });
    }
    function A(e) {
        return o("WAWebVoipCallStateUtils").isCallIncoming(e) || e === o("WAWebVoipWaCallEnums").CallState.Rejoining;
    }
    function F(t, n, a) {
        const t_neverAsked = t.neverAsked;
        if (!t_neverAsked.camera && !t_neverAsked.microphone) {
            return r("WAWebNoop");
        }
        const l = t.isMicrophoneOff ? o("WAWebVoipDevicePermissionRequest").requestVoipDevicePermissions(t_neverAsked) : null;
        if (l != null) {
            o("WAWebVoipAudioCaptureAndPlayback").adoptGrantedMicrophoneStream(l.then(({ microphoneStream })=>microphoneStream), function() {
                return r("WAWebCallCollection").activeCall === a;
            });
        }
        return function() {
            const u = z(l?.then(function(e) {
                O(t, a, e);
                B(t, a, e);
                return e.granted;
            }) ?? j(t_neverAsked, a));
            u.then((e)=>{
                if (e == null) {
                    return undefined;
                }
                return Q(t, n, a, e);
            }).catch((t)=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: turning on devices allowed after joining failed"
                ]))).catching(r("getErrorSafe")(t));
            });
        };
    }
    function O(e, t, { isRefused }) {
        if (e.neverAsked.microphone && isRefused && r("WAWebCallCollection").activeCall === t) {
            o("WAWebVoipMicrophoneRefusalState").reportMicrophoneRefused(t.id);
        }
    }
    function B(e, t, n) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, { isRefused }) {
            if (!(!e.neverAsked.microphone || !isRefused)) {
                const i = yield o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("microphone");
                if (!(i !== "denied" || r("WAWebCallCollection").activeCall !== t || !o("WAWebVoipBrowserPermissionButtonGating").isBrowserPermissionButtonEnabled("microphone"))) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: UI: microphone blocked at the prompt after joining, offering the permission button"
                    ])));
                    o("WAWebVoipBlockedMicrophoneJoinState").recordBlockedMicrophoneJoin(t.id);
                    o("WAWebCoreActionsODS").logCallBlockedMicJoin("blocked_at_prompt");
                }
            }
        });
        return W.apply(this, arguments);
    }
    function q(e) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!(o("WAWebVoipBlockedMicrophoneJoinState").getBlockedMicrophoneJoinCallId() === e.id || !G(e))) {
                const t = yield o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("microphone");
                if (!(t !== "denied" || r("WAWebCallCollection").activeCall !== e || !o("WAWebVoipBrowserPermissionButtonGating").isBrowserPermissionButtonEnabled("microphone"))) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: UI: microphone blocked at the unmute prompt, offering the permission button"
                    ])));
                    o("WAWebVoipBlockedMicrophoneJoinState").recordBlockedMicrophoneJoin(e.id);
                    o("WAWebCoreActionsODS").logCallBlockedMicJoin("blocked_at_unmute");
                }
            }
        });
        return U.apply(this, arguments);
    }
    function V(e) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebVoipBrowserPermissionButtonGating").hasBrowserPermissionButton("microphone")) {
                return null;
            }
            const t = yield o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("microphone");
            if (t !== "granted" || !o("WAWebVoipBrowserPermissionButtonGating").isBrowserPermissionButtonEnabled("microphone") || !o("WAWebVoipDeviceAccessRecoveryGating").canAllowBlockedDeviceDuringCall()) {
                return null;
            }
            return function() {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: microphone allowed while the call rang, unmuting after joining"
                ])));
                o("WAWebVoipBlockedMicrophoneJoinState").recordBlockedMicrophoneJoin(e.id);
                o("WAWebCoreActionsODS").logCallBlockedMicJoin("allowed_while_ringing");
            };
        });
        return H.apply(this, arguments);
    }
    function G(e) {
        return o("WAWebVoipBlockedMicrophoneJoinState").isMutedForBlockedMicrophone(e.id) || o("WAWebVoipRecoveryJoinLog").getRecoveryJoin(e)?.isMicrophoneOff === true;
    }
    function z(e) {
        const t = Date.now();
        return e.then((e)=>{
            const n = Date.now() - t;
            if (e == null || n <= v) {
                return e;
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI: devices allowed ",
                "ms after joining, leaving them off"
            ])), n);
            return null;
        });
    }
    function j(e, t) {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield re();
            if (!n || r("WAWebCallCollection").activeCall !== t) {
                return null;
            }
            const a = yield o("WAWebVoipDevicePermissionRequest").requestVoipDevicePermissions(e);
            const a_granted = a.granted;
            return a_granted;
        });
        return K.apply(this, arguments);
    }
    function Q(e, t, n, r) {
        return X.apply(this, arguments);
    }
    function X() {
        X = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            const o = yield Y(t, r);
            const a = t.microphone && e.isMicrophoneOff && o.microphone && (yield re());
            if (o.camera) {
                yield Z(n);
            }
            if (a) {
                yield te(n);
            }
        });
        return X.apply(this, arguments);
    }
    function Y(e, t) {
        return J.apply(this, arguments);
    }
    function J() {
        J = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = yield (C || (C = n("Promise"))).all([
                o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("microphone"),
                e.camera ? o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict("camera") : "unknown"
            ]);
            const a = r[0];
            const i = r[1];
            return {
                camera: t.camera || i === "granted",
                microphone: t.microphone || a === "granted"
            };
        });
        return J.apply(this, arguments);
    }
    function Z(e) {
        return ee.apply(this, arguments);
    }
    function ee() {
        ee = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (!(t?.type !== "web" || r("WAWebCallCollection").activeCall !== e)) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: camera allowed after joining, turning video on"
                ])));
                const n = yield t.setCallVideoMute(false);
                if (n !== 0) {
                    o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: UI: turning video on after joining failed with status: ",
                        ""
                    ])), n);
                }
            }
        });
        return ee.apply(this, arguments);
    }
    function te(e) {
        return ne.apply(this, arguments);
    }
    function ne() {
        ne = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (!(t?.type !== "web" || r("WAWebCallCollection").activeCall !== e)) {
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: microphone allowed and live after joining, unmuting"
                ])));
                const n = yield t.setCallMute(false);
                if (n !== 0) {
                    o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: UI: unmuting after joining failed with status: ",
                        ""
                    ])), n);
                }
            }
        });
        return ne.apply(this, arguments);
    }
    function re() {
        return new (C || (C = n("Promise")))(function(e) {
            if (o("WAWebVoipMicrophoneInputState").getMicrophoneInputStatus() === "active") {
                e(true);
                return;
            }
            let t = r("WAWebNoop");
            const n = window.setTimeout(function() {
                t();
                e(false);
            }, b);
            t = o("WAWebVoipMicrophoneInputState").subscribeToMicrophoneInput(function() {
                if (o("WAWebVoipMicrophoneInputState").getMicrophoneInputStatus() === "active") {
                    window.clearTimeout(n);
                    t();
                    e(true);
                }
            });
        });
    }
    l.getDeviceRecoveryJoin = R;
    l.getRefusedPromptJoin = E;
    l.offerPermissionButtonAfterUnmuteBlock = q;
    l.getAllowedWhileRingingRecorder = V;
}, 98);