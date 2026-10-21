__d("WAWebVoipUiPopoutWindowPortalContainer.react", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebBoolFunc",
    "WAWebCallCollection",
    "WAWebMsgGetters",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVelocityBackgroundTimer",
    "WAWebVoipActivityTracker",
    "WAWebVoipFocusTracker",
    "WAWebVoipGatingUtils",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipStackInterface",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipUiPopoutWindowLoadable",
    "WAWebVoipUiPopoutWindowPortalHelpers",
    "WAWebVoipVideoStateUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebStableCallback",
    "useWAWebTimeout",
    "useWAWebVoipCallCleanupOnUnload"
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
    const P = $ || ($ = o("react"));
    const N = $;
    const { useMemo, useRef, useState } = N;
    const F = "wa-web-voip-popover-portal";
    const O = 15000;
    const B = 5000;
    function W(popoutWindow) {
        if (!(!o("WAWebVoipGatingUtils").doesPopoutEndMainWindowScreenShare() || r("WAWebCallCollection").activeCall?.isSelfScreenSharing() !== true || o("WAWebVoipUiPopoutWindowPortalHelpers").wasStreamAcquiredInWindow("desktop", popoutWindow))) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: popout open: stopping main-window screen share"
            ])));
            const i = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                    if (e?.type === "web") {
                        yield e.stopScreenShare();
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            i().catch((e)=>{
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: popout open: failed to stop screen share"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("voip-popout-open-stop-screen-share-failed");
            });
        }
    }
    function QComponent() {
        r("useWAWebVoipCallCleanupOnUnload")();
        const e = o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_3");
        const tRef = useRef(null);
        const a = useState(null);
        const popoutWindow = a[0];
        const l = a[1];
        const s = useState(null);
        const $ = s[0];
        const N = s[1];
        const q = useState(null);
        const V = q[0];
        const H = q[1];
        const G = r("useWAWebStableCallback")(function() {
            const e = o("WAWebVoipPopoutWindowState").getPopoutWindow();
            if (e) {
                const t = e.document.visibilityState;
                o("WAWebVoipActivityTracker").trackUiActivity(t === "hidden" ? o("WAWebVoipActivityTracker").VoipUiActivity.TAB_VISIBILITY_HIDDEN : o("WAWebVoipActivityTracker").VoipUiActivity.TAB_VISIBILITY_VISIBLE);
                o("WAWebVelocityBackgroundTimer").toggleSmoothBackgroundAnimations(t === "visible");
                o("WAWebVoipUiPopoutWindowPortalHelpers").emitPopoutWindowVisibilityChanged(t);
            }
        });
        const zRef = useRef(null);
        const jRef = useRef(null);
        const KRef = useRef(null);
        const QRef = useRef(false);
        const XRef = useRef(false);
        const Y = r("useWAWebStableCallback")(function() {
            if (zRef.current != null) {
                window.clearInterval(zRef.current);
                zRef.current = null;
            }
        });
        const J = r("useWAWebStableCallback")(function() {
            if (jRef.current != null) {
                jRef.current();
                jRef.current = null;
            }
        });
        const Z = o("useWAWebTimeout").useManualTimeout(function() {
            Y();
            J();
            const n = o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow();
            o("WAWebVoipPopoutWindowState").setIsCallActiveInPopoutWindow(false);
            o("WAWebVoipPopoutWindowState").setPopoutWindow(null);
            if (n && r("WAWebCallCollection").lastActiveCall != null && r("WAWebCallCollection").lastActiveCall.shouldShowPostCallSurvey === true && r("WAWebCallCollection").lastActiveCall.postCallSurveyInteracted !== true) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: popout close: clearing stale post-call survey state"
                ])));
                r("WAWebCallCollection").lastActiveCall.shouldShowPostCallSurvey = false;
            }
            if (n) {
                o("WAWebVoipUiPopoutWindowPortalHelpers").emitPopoutWindowVisibilityChanged("hidden");
            }
            o("WAWebVelocityBackgroundTimer").toggleSmoothBackgroundAnimations(false);
            const a = e ? tRef.current : popoutWindow;
            a?.removeEventListener("visibilitychange", G);
            a?.close();
            tRef.current = null;
            o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("setPopoutWindowProps", {
                callLogMsg: null,
                popoutWindow: null
            });
        });
        const ee = Z[0];
        o("useWAWebListener").useListener(o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter, "setPopoutWindowProps", function({ callLogMsg, popoutWindow }) {
            o("WAWebVoipPopoutWindowState").resetPopoutUiReady();
            if (callLogMsg != null) {
                QRef.current = false;
            }
            const v = o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow();
            H(callLogMsg);
            tRef.current = popoutWindow;
            l(e ? null : popoutWindow);
            if (callLogMsg != null && !v) {
                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_MOVE_TO_POPOUT);
            } else if (callLogMsg == null && v) {
                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_MOVE_FROM_POPOUT);
            }
            o("WAWebVoipPopoutWindowState").setIsCallActiveInPopoutWindow(callLogMsg != null);
            o("WAWebVoipFocusTracker").notifyWindowModeChanged(callLogMsg != null ? "popout" : "main");
            o("WAWebVoipPopoutWindowState").setPopoutWindow(callLogMsg != null ? popoutWindow : null);
            o("WAWebVelocityBackgroundTimer").toggleSmoothBackgroundAnimations(callLogMsg != null);
            o("WAWebVoipPopoutWindowState").getPopoutWindow()?.addEventListener("visibilitychange", G);
            if (callLogMsg == null) {
                o("WAWebVoipUiPopoutWindowPortalHelpers").clearActiveStreams();
                Y();
                J();
            }
            if (callLogMsg != null && o("WAWebUA").UA.isSafari && popoutWindow != null) {
                Y();
                zRef.current = window.setInterval(function() {
                    try {
                        if (popoutWindow.closed) {
                            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: Safari popout close polling: detected window closed"
                            ])));
                            Y();
                            o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", {
                                callEnded: false
                            });
                        }
                    } catch (error) {
                        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: Safari popout poll: window inaccessible: ",
                            ""
                        ])), String(error));
                        Y();
                        o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", {
                            callEnded: false
                        });
                    }
                }, o("WAWebVoipUiPopoutWindowPortalHelpers").SAFARI_POPOUT_CLOSE_POLL_INTERVAL_MS);
            }
            if (callLogMsg != null && popoutWindow != null) {
                W(popoutWindow);
                const R = r("WAWebCallCollection").activeCall;
                const L = R?.id ?? o("WAWebMsgGetters").getCallId(callLogMsg);
                const E = o("WAWebVoipVideoStateUtils").isVideoEnabled(R?.selfVideoState);
                const k = o("WAWebVoipGatingUtils").isPopoutReuseCaptureEnabled();
                XRef.current = k;
                if (k && R != null && E) {
                    let I = false;
                    const T = ()=>{
                        if (!(I || o("WAWebVoipPopoutWindowState").getPopoutWindow() !== popoutWindow || !o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow())) {
                            I = true;
                            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: popout open: camera reuse-repump into popout"
                            ])));
                            o("WAWebVoipUiPopoutWindowPortalHelpers").reacquireCameraReusingStreamForPopout(L);
                        }
                    };
                    if (o("WAWebVoipPopoutWindowState").getIsPopoutUiReady()) {
                        T();
                    } else {
                        const D = [];
                        const x = function() {
                            D.forEach((e)=>e());
                            D.length = 0;
                            if (jRef.current === x) {
                                jRef.current = null;
                            }
                        };
                        const $ = function() {
                            x();
                            T();
                        };
                        o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on("popoutUiReady", $);
                        D.push(function() {
                            o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.off("popoutUiReady", $);
                        });
                        const P = window.setTimeout(function() {
                            x();
                            T();
                        }, o("WAWebVoipUiPopoutWindowPortalHelpers").STREAM_REACQUISITION_TIMEOUT_MS);
                        D.push(function() {
                            window.clearTimeout(P);
                        });
                        jRef.current?.();
                        jRef.current = x;
                    }
                }
                if (!k) {
                    const M = o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice() ?? o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
                    const w = ()=>{
                        if (o("WAWebVoipPopoutWindowState").getPopoutWindow() !== popoutWindow || !o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow()) {
                            return null;
                        }
                        const activeCall = r("WAWebCallCollection").activeCall;
                        if (activeCall == null || activeCall !== R && (L == null || activeCall.id !== L)) {
                            return null;
                        }
                        return {
                            currentDeviceId: o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice() ?? o("WAWebUserPrefsVoip").getSelectedAudioInputDevice(),
                            isVideoEnabled: o("WAWebVoipVideoStateUtils").isVideoEnabled(activeCall.selfVideoState)
                        };
                    };
                    const A = ()=>{
                        const e = w();
                        if (e == null || !e.isVideoEnabled && e.currentDeviceId == null) {
                            return null;
                        }
                        return e;
                    };
                    if (R != null && (E || M != null)) {
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: popout open: setting up stream re-acquisition"
                        ])));
                        const F = (()=>{
                            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                                const e = o("WAWebVoipPopoutWindowState").beginCameraStreamReacquisition();
                                const t = window.setTimeout(function() {
                                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: popout open: reacquisition guard fired, clearing"
                                    ])));
                                    e();
                                }, O);
                                try {
                                    let n = A();
                                    if (n == null) {
                                        return;
                                    }
                                    const a = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                                    n = A();
                                    if (n == null || a == null || a.type !== "web" || (yield o("WAWebVoipUiPopoutWindowPortalHelpers").primeSafariMediaPermissions({
                                        needsAudio: n.currentDeviceId != null,
                                        needsVideo: n.isVideoEnabled,
                                        targetWindow: popoutWindow
                                    }), n = A(), n == null)) {
                                        return;
                                    }
                                    if (n.isVideoEnabled) {
                                        const i = {
                                            popoutWindow,
                                            promise: o("WAWebVoipUiPopoutWindowPortalHelpers").reacquireCameraInTargetWindow(popoutWindow, L)
                                        };
                                        KRef.current = i;
                                        try {
                                            yield i.promise;
                                        } finally{
                                            if (KRef.current === i) {
                                                KRef.current = null;
                                            }
                                        }
                                    }
                                    n = A();
                                    if (n == null) {
                                        return;
                                    }
                                    if (n.currentDeviceId != null) {
                                        o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("requestAudioReacquisition", {
                                            deviceId: n.currentDeviceId,
                                            targetWindow: popoutWindow
                                        });
                                    }
                                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: popout open: stream re-acquisition initiated"
                                    ])));
                                } catch (error) {
                                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: popout open: stream re-acquisition failed"
                                    ]))).catching(r("getErrorSafe")(error));
                                } finally{
                                    window.clearTimeout(t);
                                    e();
                                }
                            });
                            return function() {
                                return e.apply(this, arguments);
                            };
                        })();
                        let B = false;
                        let q = false;
                        let U = !o("WAWebUA").UA.isSafari || o("WAWebVoipPopoutWindowState").getIsPopoutUiReady();
                        const V = [];
                        const Z = function() {
                            V.forEach((e)=>{
                                e();
                            });
                            V.length = 0;
                            if (jRef.current === Z) {
                                jRef.current = null;
                            }
                        };
                        const ee = (t)=>{
                            if (!B) {
                                let e = false;
                                let n = q;
                                let a = false;
                                let i;
                                try {
                                    const l = popoutWindow.document;
                                    e = l.visibilityState === "visible" && !l.hidden;
                                    n = n || l.hasFocus();
                                    a = l.documentElement != null && l.body != null;
                                    if (o("WAWebUA").UA.isSafari) {
                                        i = popoutWindow.location.origin === window.location.origin;
                                    } else {
                                        i = true;
                                    }
                                } catch (error) {
                                    o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: popout: unable to check window state"
                                    ]))).catching(r("getErrorSafe")(error));
                                    return;
                                }
                                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                                    "voip: [Popout] ready_check reason=",
                                    " shell=",
                                    " visible=",
                                    " focused=",
                                    " ui_ready=",
                                    " origin_match=",
                                    ""
                                ])), t, String(a), String(e), String(n), String(U), String(i));
                                if (!(!a || !e || !n || !U || !i)) {
                                    const s = A();
                                    if (s == null) {
                                        B = true;
                                        Z();
                                        return;
                                    }
                                    B = true;
                                    Z();
                                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [Popout] reacquisition_triggered reason=",
                                        ""
                                    ])), t);
                                    F();
                                }
                            }
                        };
                        const te = function() {
                            ee("load");
                        };
                        popoutWindow.addEventListener("load", te);
                        V.push(function() {
                            popoutWindow.removeEventListener("load", te);
                        });
                        const ne = function() {
                            q = true;
                            ee("focus");
                        };
                        popoutWindow.addEventListener("focus", ne);
                        V.push(function() {
                            popoutWindow.removeEventListener("focus", ne);
                        });
                        const re = function() {
                            ee("visibilitychange");
                        };
                        try {
                            popoutWindow.document.addEventListener("visibilitychange", re);
                            V.push(function() {
                                try {
                                    popoutWindow.document.removeEventListener("visibilitychange", re);
                                } catch (e) {}
                            });
                        } catch (e) {}
                        const oe = function() {
                            U = true;
                            ee("ui_ready");
                        };
                        o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on("popoutUiReady", oe);
                        V.push(function() {
                            o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.off("popoutUiReady", oe);
                        });
                        const ae = window.setInterval(function() {
                            ee("poll");
                        }, o("WAWebVoipUiPopoutWindowPortalHelpers").STREAM_REACQUISITION_POLL_INTERVAL_MS);
                        V.push(function() {
                            window.clearInterval(ae);
                        });
                        const ie = window.setTimeout(function() {
                            let e = "unknown";
                            try {
                                const t = popoutWindow.document;
                                e = `shell=${String(t.documentElement != null && t.body != null)} visible=${t.visibilityState} focused=${String(t.hasFocus())} ready=${t.readyState}`;
                            } catch (t) {
                                e = "inaccessible";
                            }
                            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [Popout] reacquisition_timeout ",
                                ""
                            ])), e);
                            U = true;
                            o("WAWebVoipPopoutWindowState").markPopoutUiReady();
                            ee("timeout");
                            Z();
                        }, o("WAWebVoipUiPopoutWindowPortalHelpers").STREAM_REACQUISITION_TIMEOUT_MS);
                        V.push(function() {
                            window.clearTimeout(ie);
                        });
                        jRef.current = Z;
                        ee("initial");
                        try {
                            if (!popoutWindow.document.hasFocus()) {
                                popoutWindow.focus();
                            }
                        } catch (e) {}
                    }
                }
            }
        });
        o("useWAWebListener").useListener(o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter, "popoutUiReady", function() {
            const e = o("WAWebVoipPopoutWindowState").getPopoutWindow();
            if (!(e == null || !o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow())) {
                try {
                    const t = new e.Function("\n          if (!window._openerCheckActive) {\n            window._openerCheckActive = true;\n            var id = setInterval(function() {\n              if (!window.opener || window.opener.closed) {\n                clearInterval(id);\n                window._openerCheckActive = false;\n                window.close();\n              }\n            }, 1000);\n          }\n        ");
                    t();
                } catch (e) {}
            }
        });
        o("useWAWebListener").useListener(o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter, "closePopoutWindow", function({ callEnded, surveyInteracted }) {
            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: popout close: closePopoutWindow fired callEnded=",
                " closeInProgress=",
                " reuseMode=",
                " hasPopoutEl=",
                ""
            ])), String(callEnded), String(QRef.current), String(XRef.current), String(popoutWindow != null));
            if (callEnded) {
                o("WAWebVoipPopoutWindowState").resetCameraStreamReacquisitions();
            }
            if (QRef.current) {
                o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: popout close: skipped — close already in progress"
                ])));
                return;
            }
            const u = o("WAWebVoipPopoutWindowState").getPopoutWindow() ?? popoutWindow;
            if (!callEnded && popoutWindow != null && !popoutWindow.closed) {
                try {
                    popoutWindow.open("#", o("WAWebVoipPopoutWindowState").MAIN_WINDOW_NAME)?.focus();
                } catch (e) {}
            }
            QRef.current = true;
            if (!callEnded) {
                o("WAWebVoipPopoutWindowState").setIsCallActiveInPopoutWindow(false);
            }
            const activeCall = r("WAWebCallCollection").activeCall;
            const m = (V != null ? o("WAWebMsgGetters").getCallId(V) : null) ?? activeCall?.id;
            const p = ()=>{
                if (o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow()) {
                    return null;
                }
                const activeCall_1 = r("WAWebCallCollection").activeCall;
                if (activeCall_1 == null || m != null && activeCall_1.id !== m || m == null && activeCall_1 !== activeCall) {
                    return null;
                }
                return {
                    currentDeviceId: o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice() ?? o("WAWebUserPrefsVoip").getSelectedAudioInputDevice()
                };
            };
            const _ = o("WAWebVoipUiPopoutWindowPortalHelpers").getStreamsFromPopout();
            const KRef_current = KRef.current;
            const g = KRef_current != null && (u == null || KRef_current.popoutWindow === u) ? KRef_current : null;
            if (!callEnded && (_.length > 0 || g != null)) {
                const h = _.some((e)=>e.type === "desktop");
                if (h) {
                    const y = (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            const e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                            if (e?.type === "web") {
                                yield e.stopScreenShare();
                            }
                        });
                        return function() {
                            return e.apply(this, arguments);
                        };
                    })();
                    y();
                }
                if ((_.some((e)=>e.type === "camera") || g != null) && !XRef.current) {
                    const C = o("WAWebVoipPopoutWindowState").beginCameraStreamReacquisition();
                    const b = ()=>window.setTimeout(function() {
                            o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: popout close: reacquisition flag guard fired, clearing"
                            ])));
                            C();
                        }, O);
                    let $ = b();
                    const P = (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            try {
                                window.clearTimeout($);
                                $ = b();
                                if (g != null) {
                                    let e = null;
                                    const t = yield (x || (x = n("Promise"))).race([
                                        g.promise.then(o("WAWebBoolFunc").returnTrue, (e)=>true),
                                        new x(function(t) {
                                            e = window.setTimeout(function() {
                                                return t(false);
                                            }, B);
                                        })
                                    ]);
                                    if (e != null) {
                                        window.clearTimeout(e);
                                    }
                                    if (!t) {
                                        o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                                            "voip: popout close: pending camera re-acquisition wait timed out"
                                        ])));
                                    }
                                    window.clearTimeout($);
                                    $ = b();
                                }
                                const r = p();
                                if (r == null) {
                                    return;
                                }
                                const a = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                                const i = p();
                                if (i == null) {
                                    return;
                                }
                                if (a != null && a.type === "web") {
                                    o("WAWebVoipPopoutWindowState").setPopoutWindow(null);
                                    yield o("WAWebVoipUiPopoutWindowPortalHelpers").reacquireCameraInTargetWindow(window, m);
                                }
                            } catch (e) {} finally{
                                window.clearTimeout($);
                                C();
                            }
                        });
                        return function() {
                            return e.apply(this, arguments);
                        };
                    })();
                    if (document.hasFocus()) {
                        P();
                    } else {
                        const N = 10000;
                        const M = function() {
                            window.clearTimeout(w);
                            window.removeEventListener("focus", M);
                            P();
                        };
                        var w = window.setTimeout(function() {
                            window.removeEventListener("focus", M);
                            o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: popout close: video focus timeout, attempting stream swap"
                            ])));
                            P();
                        }, N);
                        window.addEventListener("focus", M);
                        window.focus();
                    }
                }
            }
            if (!callEnded && XRef.current) {
                const A = o("WAWebVoipPopoutWindowState").beginCameraStreamReacquisition();
                const F = window.setTimeout(function() {
                    A();
                }, O);
                const W = (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        try {
                            if (p() == null) {
                                return;
                            }
                            o("WAWebVoipPopoutWindowState").setPopoutWindow(null);
                            o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: popout close: reuse swap-back to main"
                            ])));
                            yield o("WAWebVoipUiPopoutWindowPortalHelpers").reacquireCameraInTargetWindow(window, m);
                        } catch (error) {
                            o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: popout close: reuse swap-back failed"
                            ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-popout-reuse-swap-back-failed");
                        } finally{
                            window.clearTimeout(F);
                            A();
                        }
                    });
                    return function() {
                        return e.apply(this, arguments);
                    };
                })();
                W();
            }
            if (!callEnded && !XRef.current) {
                const q = p();
                if (q?.currentDeviceId != null) {
                    o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: popout close: setting up audio re-acquisition"
                    ])));
                    const U = ()=>{
                        const e = p();
                        if (e != null && e.currentDeviceId != null) {
                            o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("requestAudioReacquisition", {
                                deviceId: e.currentDeviceId,
                                targetWindow: window
                            });
                        }
                    };
                    if (document.hasFocus()) {
                        U();
                    } else {
                        const H = 10000;
                        const G = function() {
                            window.clearTimeout(z);
                            window.removeEventListener("focus", G);
                            o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: popout close: main window focused, re-acquiring audio"
                            ])));
                            U();
                        };
                        var z = window.setTimeout(function() {
                            window.removeEventListener("focus", G);
                        }, H);
                        window.addEventListener("focus", G);
                        window.focus();
                    }
                }
            }
            const j = callEnded && !surveyInteracted;
            ee(j ? o("WAWebVoipUiPopoutWindowPortalHelpers").POPOUT_WINDOW_CALL_END_CLOSE_DELAY_MS : 0);
        });
        const te = e ? null : $;
        const windowEl = e ? null : popoutWindow;
        const re = useMemo(function() {
            return {
                isContextInPopoutWindow: true,
                popoverPortalEl: te?.getElementById(F),
                documentEl: te,
                windowEl,
                isDocPip: false
            };
        }, [
            te,
            windowEl
        ]);
        if (V) {
            if (e) {
                return <UComponent callLogMsg={V}/>;
            }
            const Component = o("WAWebVoipUiPopoutWindowLoadable").WAWebVoipUiPopoutWindowLoadable;
            const Component_1 = r("WAWebVoipUiPopoutWindowContext").Provider;
            return <Component_1 value={re}><Component callLogMsg={V} popoutWindow={popoutWindow} onWindowReady={function(t) {
                return N(t.document);
            }}/></Component_1>;
        }
        return null;
    }
    QComponent.displayName = `${QComponent.name} [from ${i.id}]`;
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(13);
        const e_callLogMsg = e.callLogMsg;
        const a = useState(V);
        const i = a[0];
        const l = useState(null);
        const s = l[0];
        const u = l[1];
        let popoverPortalEl;
        if (t[0] !== s) {
            popoverPortalEl = s?.getElementById(F);
            t[0] = s;
            t[1] = popoverPortalEl;
        } else {
            popoverPortalEl = t[1];
        }
        let d;
        if (t[2] !== s || t[3] !== i || t[4] !== popoverPortalEl) {
            d = {
                isContextInPopoutWindow: true,
                popoverPortalEl,
                documentEl: s,
                windowEl: i,
                isDocPip: false
            };
            t[2] = s;
            t[3] = i;
            t[4] = popoverPortalEl;
            t[5] = d;
        } else {
            d = t[5];
        }
        const m = d;
        let onWindowReady;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            onWindowReady = function(t) {
                return u(t.document);
            };
            t[6] = onWindowReady;
        } else {
            onWindowReady = t[6];
        }
        let _;
        if (t[7] !== e_callLogMsg || t[8] !== i) {
            const Component = o("WAWebVoipUiPopoutWindowLoadable").WAWebVoipUiPopoutWindowLoadable;
            _ = <Component callLogMsg={e_callLogMsg} popoutWindow={i} onWindowReady={onWindowReady}/>;
            t[7] = e_callLogMsg;
            t[8] = i;
            t[9] = _;
        } else {
            _ = t[9];
        }
        let f;
        if (t[10] !== m || t[11] !== _) {
            const Component = r("WAWebVoipUiPopoutWindowContext").Provider;
            f = <Component value={m}>{_}</Component>;
            t[10] = m;
            t[11] = _;
            t[12] = f;
        } else {
            f = t[12];
        }
        return f;
    }
    function V() {
        return o("WAWebVoipPopoutWindowState").getPopoutWindow();
    }
    l.VOIP_POPOUT_POPOVER_PORTAL_ID = F;
    l.MAIN_WINDOW_NAME = o("WAWebVoipPopoutWindowState").MAIN_WINDOW_NAME;
    l.WAWebVoipUiPopoutWindowEventEmitter = o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter;
    l.getIsCallActiveInPopoutWindow = o("WAWebVoipPopoutWindowState").getIsCallActiveInPopoutWindow;
    l.getIsPopoutWindowActiveAndVisible = o("WAWebVoipPopoutWindowState").getIsPopoutWindowActiveAndVisible;
    l.getIsPopoutUiReady = o("WAWebVoipPopoutWindowState").getIsPopoutUiReady;
    l.getIsPopoutWindowOpening = o("WAWebVoipPopoutWindowState").getIsPopoutWindowOpening;
    l.getPopoutWindow = o("WAWebVoipPopoutWindowState").getPopoutWindow;
    l.isPopoutWindowAlive = o("WAWebVoipPopoutWindowState").isPopoutWindowAlive;
    l.setIsPopoutWindowOpening = o("WAWebVoipPopoutWindowState").setIsPopoutWindowOpening;
    l.setMediaStream = o("WAWebVoipUiPopoutWindowPortalHelpers").setMediaStream;
    l.WAWebVoipUiPopoutWindowPortalContainer = QComponent;
}, 98);