__d("WAWebVoipStartCallPermissions", [
    "Promise",
    "WALogger",
    "WAWebCallCollection",
    "WAWebCoreActionsODS",
    "WAWebModalManager",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipBrowserPermissionButtonGating",
    "WAWebVoipDevicePermissionDialogLoader.react",
    "WAWebVoipEventConstants",
    "WAWebVoipJoinWithoutCamera",
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
    const f = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL);
    const g = {
        closeModal: o("WAWebModalManager").closeModalManager,
        openModal: function(t, n) {
            return o("WAWebModalManager").ModalManager.open(t, n);
        }
    };
    function h() {
        return y().catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [start call] the permission dialog preload failed"
            ]))).catching(r("getErrorSafe")(t));
        });
    }
    function y() {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebVoipBrowserPermissionButtonGating").hasBrowserPermissionButton("microphone")) {
                const e = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(false);
                const t = e.micPermission;
                if (t !== "granted") {
                    o("WAWebVoipDevicePermissionDialogLoader.react").preloadDevicePermissionDialog();
                }
            }
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = yield E(e);
            const checksCamera = e && !(r?.cameraPermission === "denied" && o("WAWebVoipBrowserPermissionButtonGating").isBrowserPermissionButtonEnabled("microphone"));
            const i = r?.micPermission === "denied";
            let l = null;
            let s = null;
            const u = yield o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(checksCamera, null, t, {
                shouldOpenFailureGuide: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        l = e === "denied" ? yield k(checksCamera) : null;
                        if (l?.type === "microphone") {
                            o("WAWebCoreActionsODS").logCallStartMicrophoneRefused(i ? "blocked_before" : "at_prompt");
                            s = yield o("WAWebVoipDevicePermissionDialogLoader.react").loadDevicePermissionDialog();
                        }
                        return s == null && l?.type !== "camera" && !t.aborted;
                    });
                    function r(t) {
                        return e.apply(this, arguments);
                    }
                    return r;
                })()
            });
            if (u) {
                if (e && !checksCamera) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [start call] camera blocked, starting the video call with the camera off"
                    ])));
                    return P("blocked");
                }
                return {
                    cameraOff: null
                };
            }
            const c = l;
            if (t.aborted || c == null) {
                return null;
            }
            if (c.type === "camera") {
                return D(c.reason, t);
            }
            if (s == null || !(yield $(s, c.isBlocked, t))) {
                return null;
            }
            return R({
                asksCamera: checksCamera && i,
                checksCamera,
                isVideo: e,
                signal: t
            });
        });
        return v.apply(this, arguments);
    }
    function S(e, { cameraOff }) {
        o("WAWebVoipJoinWithoutCamera").setStartWithoutCamera(e, cameraOff != null);
        if (cameraOff != null) {
            o("WAWebCoreActionsODS").logCallOutgoingVideoCameraOff(cameraOff);
        }
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ asksCamera, checksCamera, isVideo, signal }) {
            const s = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(checksCamera);
            const s_cameraPermission = s.cameraPermission;
            const c = checksCamera && (s_cameraPermission === "granted" || s_cameraPermission === "prompt" && asksCamera);
            let d = null;
            const p = yield o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(c, null, signal, {
                shouldOpenFailureGuide: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        if (e !== "denied") {
                            return true;
                        }
                        const t = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(c);
                        if (t.micPermission !== "granted") {
                            return false;
                        }
                        if (c) {
                            d = T(t);
                            return false;
                        }
                        return true;
                    });
                    function t(t) {
                        return e.apply(this, arguments);
                    }
                    return t;
                })()
            });
            if (p) {
                if (isVideo && !c) {
                    return P(checksCamera ? "refused" : "blocked");
                }
                if (r("WAWebCallCollection").activeCall != null) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [start call] another call came in during the recheck, not starting"
                    ])));
                    return null;
                }
                return {
                    cameraOff: null
                };
            }
            const _ = d;
            if (_ != null && !signal.aborted) {
                return D(_, signal);
            }
            return null;
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        if (o("WAWebVoipBrowserPermissionButtonGating").hasBrowserPermissionButton("microphone")) {
            return o("WAWebVoipAcquireMediaStream").queryPermissionStatus(e);
        }
        return (_ || (_ = n("Promise"))).resolve(null);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebVoipBrowserPermissionButtonGating").hasBrowserPermissionButton("microphone")) {
                return null;
            }
            const t = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(e);
            if (t.micPermission === "granted" && !e || !o("WAWebVoipBrowserPermissionButtonGating").isBrowserPermissionButtonEnabled("microphone")) {
                return null;
            }
            if (t.micPermission !== "granted") {
                return {
                    isBlocked: t.micPermission === "denied",
                    type: "microphone"
                };
            }
            return {
                reason: T(t),
                type: "camera"
            };
        });
        return I.apply(this, arguments);
    }
    function T(e) {
        if (e.cameraPermission === "granted") {
            return "blocked_by_system";
        }
        return "refused";
    }
    function D(e, t) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [start call] camera ",
                ", starting the video call with the camera off"
            ])), e);
            if (yield o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(false, null, t)) {
                return P(e);
            }
            return null;
        });
        return x.apply(this, arguments);
    }
    function $(e, isBlocked, a) {
        if (r("WAWebCallCollection").activeCall != null) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [start call] another call came in before the microphone permission button"
            ])));
            return (_ || (_ = n("Promise"))).resolve(false);
        }
        return new (_ || (_ = n("Promise")))(function(i) {
            const l = new AbortController;
            let s = null;
            const c = function() {
                (_ || (_ = n("Promise"))).resolve().then(()=>s?.(false, "closed"));
            };
            const d = (t)=>{
                s?.(false, t);
                l.abort();
            };
            const m = function() {
                return d("cancelled with the call");
            };
            const p = function() {
                if (r("WAWebCallCollection").activeCall != null) {
                    d("another call came in");
                }
            };
            s = function(t, n) {
                s = null;
                o("WAWebModalManager").ModalManager.off("open_modal", c);
                o("WAWebModalManager").ModalManager.off("close_modal", c);
                r("WAWebCallCollection").off(f, p);
                a.removeEventListener("abort", m);
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [start call] microphone permission button ",
                    ""
                ])), n);
                i(t);
            };
            o("WAWebVoipDevicePermissionDialogLoader.react").openDevicePermissionDialog(g, e, {
                action: "start",
                cancelSignal: l.signal,
                isBlocked,
                onAllowed: function() {
                    return s?.(true, "allowed");
                },
                onDismissed: function() {
                    return s?.(false, "dismissed");
                }
            });
            o("WAWebModalManager").ModalManager.on("open_modal", c);
            o("WAWebModalManager").ModalManager.on("close_modal", c);
            r("WAWebCallCollection").on(f, p);
            a.addEventListener("abort", m);
        });
    }
    function P(cameraOff) {
        if (r("WAWebCallCollection").activeCall != null) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [start call] another call came in, not starting with the camera off"
            ])));
            return null;
        }
        return {
            cameraOff
        };
    }
    l.preloadStartCallPermissionDialog = h;
    l.checkStartCallPermissions = b;
    l.markCallStart = S;
}, 98);