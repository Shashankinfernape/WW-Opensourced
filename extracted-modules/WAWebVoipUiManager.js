__d("WAWebVoipUiManager", [
    "WALogger",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebCallCollection",
    "WAWebCallEndTone",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebFullscreenDetection",
    "WAWebGuidePopup.react",
    "WAWebModalManager",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNoop",
    "WAWebPipController",
    "WAWebPwaDocumentMetadataUtils",
    "WAWebReleaseToEventLoop",
    "WAWebTimeSpentLoggingExternal",
    "WAWebUA",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallEmoji",
    "WAWebVoipCallStateUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipQplHelpers",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWindowConstants",
    "WAWebWamEnumTsExternalEventSource",
    "fbs",
    "getErrorSafe",
    "react"
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
    const A = w || (w = o("react"));
    const F = 3000;
    const O = 3000;
    const B = 5000;
    let W = false;
    let q = null;
    let U = null;
    let V = null;
    let H = null;
    let G = null;
    let z = false;
    function j() {
        if (!W) {
            let e;
            r("WAWebCallCollection").on((e = o("WAWebVoipEventConstants")).getChangeEvent(e.VoipCallCollectionEvents.ACTIVE_CALL), te);
            r("WAWebCallCollection").on(e.getChangeEvent(e.VoipCallCollectionEvents.END_CALL_TONE), o("WAWebCallEndTone").playCallEndTone);
            W = true;
        }
    }
    function K() {
        let e;
        r("WAWebCallCollection").off((e = o("WAWebVoipEventConstants")).getChangeEvent(e.VoipCallCollectionEvents.ACTIVE_CALL), te);
        r("WAWebCallCollection").off(e.getChangeEvent(e.VoipCallCollectionEvents.END_CALL_TONE), o("WAWebCallEndTone").playCallEndTone);
        W = false;
    }
    function Q() {
        G?.();
        G = null;
    }
    function X(e, t) {
        if (o("WAWebUA").UA.hasEmoji && o("WAWebABProps").getABPropConfigValue("wa_web_calling_incoming_call_tab_indicator_enabled")) {
            return `${o("WAWebVoipCallEmoji").getCallEmoji(t, false)} ${e}`;
        }
        return e;
    }
    function Y() {
        if (z) {
            return false;
        }
        z = true;
        return true;
    }
    function J() {
        q?.();
        q = o("WAWebTimeSpentLoggingExternal").beginTsExternalEvent(o("WAWebWamEnumTsExternalEventSource").TS_EXTERNAL_EVENT_SOURCE.CALL);
    }
    function Z(activeCall, t) {
        if (activeCall.msg != null) {
            t();
            return r("WAWebNoop");
        }
        const n = function() {
            if (activeCall.msg != null) {
                activeCall.off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.MSG), n);
                t();
            }
        };
        activeCall.on(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.MSG), n);
        return function() {
            activeCall.off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.MSG), n);
        };
    }
    function ee(e) {
        if (e != null) {
            return o("WAWebVoipWaCallEnums").CallState.getName(e);
        }
        return "unknown";
    }
    function te() {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall != null && !o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
            K();
            return;
        }
        if (activeCall == null) {
            o("WAWebVoipQplHelpers").endVoipUiLifecycleQplSuccess();
            G?.();
            G = null;
            z = false;
            U?.();
            U = null;
            V?.();
            V = null;
            q?.();
            q = null;
            r("WAWebCallCollection").setPendingCallLink(null);
            r("WAWebCallCollection").setPendingOutgoingCall(null);
            const i = r("WAWebCallCollection").lastActiveCall;
            const l = i?.shouldShowPostCallSurvey === true;
            if (l) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call ended, keeping windows for survey"
                ])));
                K();
                return;
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Active call ended, closing windows"
            ])));
            const surveyInteracted = r("WAWebCallCollection").lastActiveCall?.postCallSurveyInteracted ?? false;
            const y = i?.msg != null ? o("WAWebFrontendMsgGetters").getChat(i.msg) : null;
            const C = y != null ? o("WAWebMuteCollection").MuteCollection.get(y.id) : null;
            const b = i != null && i.isGroup === true && i.wasEverConnected !== true && i.outgoing !== true && C != null && o("WAWebMuteGetters").getIsCallMuted(C);
            _e({
                callEnded: true,
                surveyInteracted,
                delayPiP: !b
            });
        } else {
            if (H != null) {
                window.clearTimeout(H);
                H = null;
                if (r("WAWebCallCollection").pendingOutgoingCall == null) {
                    r("WAWebPipController").closePiP();
                }
                K();
            }
            r("WAWebCallCollection").lastActiveCall = activeCall;
            if (activeCall.isCallLink !== true && r("WAWebCallCollection").pendingCallLink != null) {
                r("WAWebCallCollection").setPendingCallLink(null);
            }
            const v = activeCall.isInCallLinkPreview();
            if (v) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call link preview, opening PiP (no msg)"
                ])));
                r("WAWebPipController").openVoipUiPiPForCallLink();
                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_LAUNCHED);
                j();
                return;
            }
            const S = activeCall.isInCallLinkLobby();
            if (S) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call link lobby, keeping PiP open"
                ])));
                r("WAWebPipController").openVoipUiPiPForCallLink();
                j();
                return;
            }
            if (activeCall.isCallLink && activeCall.callLinkState != null) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call link in active state, keeping existing PiP"
                ])));
                if (o("WAWebVoipGatingUtils").isGuestViewer()) {
                    o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter.trigger("setDocPipProps", {
                        callLogMsg: null,
                        isArmed: true
                    });
                } else {
                    if (V != null) {
                        V();
                    }
                    V = Z(activeCall, ()=>{
                        V = null;
                        if (r("WAWebCallCollection").activeCall === activeCall) {
                            o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter.trigger("setDocPipProps", {
                                callLogMsg: activeCall.msg
                            });
                        }
                    });
                }
                j();
                return;
            }
            if (activeCall.offerReceivedWhileOffline) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] skipping PiP for offline-flushed call"
                ])));
                j();
                return;
            }
            if (activeCall.msg) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Active call changed, opening PiP window"
                ])));
                const R = activeCall.msg;
                const is_incoming = !activeCall.outgoing;
                const E = activeCall.getState();
                o("WAWebVoipQplHelpers").startVoipUiLifecycleQpl({
                    bool: {
                        is_incoming
                    },
                    string: {
                        initial_call_state: ee(E)
                    }
                });
                const k = ()=>{
                    o("WAWebReleaseToEventLoop").releaseToEventLoop().then(()=>{
                        let e;
                        (e = o("WAWebVoipActivityTracker")).trackUiActivity(e.VoipUiActivity.VOIP_WINDOW_MOUNTING);
                        r("WAWebPipController").openVoipUiPiP(R);
                        e.trackUiActivity(e.VoipUiActivity.VOIP_WINDOW_LAUNCHED);
                        o("WAWebVoipQplHelpers").voipUiLifecycleQplAddPoint(o("WAWebVoipQplHelpers").VoipUiLifecycleQplPoint.PIP_OPENED);
                        r("WAWebCallCollection").setPendingOutgoingCall(null);
                        o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter.trigger("setDocPipProps", {
                            callLogMsg: R
                        });
                        if (activeCall.outgoing === true && !o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow() && (o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() || activeCall.isVideo === true && o("WAWebABProps").getABPropConfigValue("web_calling_auto_popout_video"))) {
                            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip][hybrid+] outgoing auto-popout: hybridPlusGate=",
                                " isVideo=",
                                ""
                            ])), String(o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()), String(activeCall.isVideo === true));
                            const centered = o("WAWebVoipGatingUtils").isWinHybridPlusEnabled();
                            o("WAWebReleaseToEventLoop").releaseToEventLoop().then(()=>{
                                me({
                                    centered
                                });
                            });
                        }
                    });
                };
                const I = is_incoming && !o("WAWebVoipCallStateUtils").isCallActive(E) && (o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() || !o("WAWebMuteCollection").MuteCollection.getGlobalCallNotifications());
                if (is_incoming) {
                    if (o("WAWebVoipCallStateUtils").isCallActive(E)) {
                        G?.();
                        G = null;
                        J();
                    } else {
                        z = false;
                        de(E);
                        const D = activeCall.peerJid;
                        const x = D != null ? o("WAWebContactCollection").ContactCollection.get(D) : null;
                        const $ = x != null ? o("WAWebFrontendContactGetters").getDisplayName(x) : "";
                        const P = activeCall.isVideo ?? false;
                        const N = P ? r("fbs")._("Incoming video call from {caller_name}", [
                            r("fbs")._param("caller_name", $)
                        ]) : r("fbs")._("Incoming voice call from {caller_name}", [
                            r("fbs")._param("caller_name", $)
                        ]);
                        G?.();
                        G = o("WAWebPwaDocumentMetadataUtils").startDocumentTitleFlash(X(N.toString(), P));
                        U?.();
                        let M = false;
                        const w = ()=>{
                            const e = o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() && o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow();
                            if (!(M || e || !(I || z))) {
                                M = true;
                                k();
                            }
                        };
                        let A = false;
                        const F = ()=>{
                            if (!A) {
                                A = true;
                                ce();
                            }
                        };
                        const O = function() {
                            const e = activeCall.getState();
                            if (o("WAWebVoipCallStateUtils").isCallConnecting(e)) {
                                G?.();
                                G = null;
                                F();
                                w();
                                return;
                            }
                            if (o("WAWebVoipCallStateUtils").isCallActive(e)) {
                                if (G != null) {
                                    G();
                                }
                                G = null;
                                J();
                                F();
                                w();
                                if (U != null) {
                                    U();
                                }
                                U = null;
                            }
                        };
                        activeCall.on(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), O);
                        U = function() {
                            activeCall.off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), O);
                        };
                    }
                } else {
                    J();
                }
                if (!I) {
                    k();
                }
            } else {
                const B = Date.now();
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call changed, msg not ready, waiting for PiP"
                ])));
                const W = function() {
                    const e = Date.now() - B;
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] msg became ready after ",
                        "ms, proceeding to open PiP"
                    ])), e);
                    activeCall.off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.MSG), W);
                    te();
                };
                activeCall.on(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.MSG), W);
            }
            j();
        }
    }
    const ne = 48;
    const re = 16;
    const oe = 4 / 3;
    const ae = {
        left: 200,
        top: 200
    };
    const ie = 640;
    function le(e, t = false) {
        const n = o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth();
        const r = t ? Math.max(ie, o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH_WITH_SIDEBAR) : ie;
        const a = Math.max(r, n);
        const i = a / e;
        const l = Math.round(i + ne + re);
        return {
            width: Math.max(a, o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH),
            height: Math.max(l, o("WAWebVoipWindowConstants").MIN_WINDOW_HEIGHT)
        };
    }
    function se(popoutWindow) {
        popoutWindow.document.write("<!DOCTYPE html><html><head></head><body></body></html>");
        popoutWindow.document.close();
    }
    const ue = "voip_call_connected";
    function ce() {
        if (!(!o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() || !o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow())) {
            const t = window.chrome?.webview;
            if (t == null) {
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip][hybrid+] skipping connect notify: chrome.webview unavailable"
                ])));
                return;
            }
            try {
                t.postMessage(ue);
                o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip][hybrid+] posted ",
                    " to native host"
                ])), ue);
            } catch (error) {
                o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip][hybrid+] failed to notify native host of connect: ",
                    ""
                ])), String(error));
            }
        }
    }
    function de(e) {
        if (!(!o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() || !o("WAWebVoipCallStateUtils").isCallIncoming(e) || o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow() || o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsPopoutWindowOpening())) {
            o("WAWebReleaseToEventLoop").releaseToEventLoop().then(()=>{
                me();
            }).catch((e)=>{
                o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] failed to open Hybrid+ incoming ring pop-out"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("voip-hybrid-plus-ring-popout-open-fail");
            });
        }
    }
    function me(e) {
        let t;
        if (o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow() || o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsPopoutWindowOpening()) {
            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] openPopout skipped: popout already active or opening"
            ])));
            return;
        }
        const activeCall = r("WAWebCallCollection").activeCall;
        const a = activeCall?.msg;
        if (!a) {
            o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] openPopout called without active call msg"
            ])));
            return;
        }
        const i = le(oe, activeCall?.isGroup === true);
        const { height, width } = i;
        const u = babelHelpers.extends({
            width,
            height
        }, ae);
        if (o("WAWebFullscreenDetection").isFullscreen()) {
            o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] openPopout in fullscreen — may open tab not popup"
            ])));
        }
        window.name = o("WAWebVoipUiPopoutWindowPortalContainer.react").MAIN_WINDOW_NAME;
        o("WAWebVoipUiPopoutWindowPortalContainer.react").setIsPopoutWindowOpening(true);
        var c = window.setTimeout(function() {
            c = null;
            o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] Popout opening guard fired, clearing stale state"
            ])));
            o("WAWebVoipUiPopoutWindowPortalContainer.react").setIsPopoutWindowOpening(false);
        }, B);
        const d = ()=>{
            if (c != null) {
                window.clearTimeout(c);
                c = null;
            }
            o("WAWebVoipUiPopoutWindowPortalContainer.react").setIsPopoutWindowOpening(false);
        };
        const m = !!((t = navigator.serviceWorker) != null && t.controller);
        let p = "";
        if (o("WAWebVoipCallStateUtils").isCallIncoming(activeCall?.getState())) {
            p = "?incoming_ring=1";
        } else if (e?.centered === true) {
            p = "?center=1";
        }
        const _ = m ? `${window.location.origin}/call/popout${p}` : window.location.hostname;
        o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
            "[voip] Opening popout window. SW enabled: ",
            ", popoutQuery: ",
            ", url: ",
            ""
        ])), String(m), p || "(none)", _);
        o("WAWebAppTracker").AppTracker.mark(o("WAWebAppTracker").AppTrackerType.VoipUiWindowCreate);
        let f = null;
        try {
            f = window.open(_, "", Object.keys(u).map((e)=>`${e}=${u[e]}`).join(","));
        } catch (error) {
            d();
            o("WALogger").WARN(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open: ",
                ""
            ])), String(error));
        }
        if (!f) {
            d();
            o("WALogger").WARN(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open"
            ])));
            o("WAWebModalManager").ModalManager.open(A.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                messaging: o("WAWebGuidePopup.react").Messaging.POPUPS_BLOCKED,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP
            }));
            return;
        }
        const popoutWindow = f;
        o("WAWebVoipQplHelpers").voipUiLifecycleQplAddPoint(o("WAWebVoipQplHelpers").VoipUiLifecycleQplPoint.POPOUT_OPENED);
        const h = ()=>{
            o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] Popout document is ready, triggering React portal"
            ])));
            try {
                o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter.trigger("setPopoutWindowProps", {
                    callLogMsg: a,
                    popoutWindow
                });
            } finally{
                d();
            }
        };
        if (!m) {
            o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] SW disabled/gated, using manual doc bootstrap"
            ])));
            se(popoutWindow);
            h();
            return;
        }
        let y = null;
        let C = null;
        let b = false;
        const w = ()=>{
            if (y != null) {
                window.clearTimeout(y);
                y = null;
            }
            if (C != null) {
                window.clearInterval(C);
                C = null;
            }
            window.removeEventListener("message", F);
            if (popoutWindow.closed) {
                d();
            } else if (!b) {
                b = true;
                h();
            }
        };
        var F = function(t) {
            if (!(t.origin !== window.location.origin || typeof t.data !== "string")) {
                if (t.data.startsWith("voipPopoutReady")) {
                    let e = "<unreadable>";
                    try {
                        e = popoutWindow.location.href;
                    } catch (error) {
                        e = `<cross-origin: ${String(error)}>`;
                    }
                    const n = String(t.source === popoutWindow);
                    const r = String(popoutWindow.closed);
                    o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] popout msg: data=",
                        " origin=",
                        " srcMatch=",
                        " closed=",
                        " href=",
                        ""
                    ])), t.data, t.origin, n, r, e);
                }
                if (t.source === popoutWindow && t.data === "voipPopoutReady") {
                    o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] Received voipPopoutReady from Service Worker"
                    ])));
                    w();
                }
            }
        };
        window.addEventListener("message", F);
        y = window.setTimeout(function() {
            o("WALogger").WARN(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] SW ready timeout, firing fallback"
            ])));
            if (!popoutWindow.closed) {
                let e = null;
                try {
                    e = popoutWindow.location.href;
                } catch (e) {}
                if (e === "about:blank" || e === "") {
                    o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] timeout fallback: bootstrap about:blank doc"
                    ])));
                    se(popoutWindow);
                }
            }
            w();
        }, O);
        C = window.setInterval(function() {
            if (popoutWindow.closed) {
                o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] Popout window closed before loading finished"
                ])));
                w();
            }
        }, 500);
    }
    function pe(e) {
        o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", e);
    }
    function _e({ callEnded, delayPiP = false, surveyInteracted = false }) {
        if (delayPiP) {
            const s = o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow() ? 0 : F;
            H = window.setTimeout(function() {
                H = null;
                r("WAWebPipController").closePiP();
                K();
            }, s);
        } else {
            r("WAWebPipController").closePiP();
        }
        pe({
            callEnded,
            surveyInteracted
        });
        o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter.trigger("closeDocPip", {
            surveyInteracted
        });
    }
    l.setupVoipActiveCallChangeListener = j;
    l.stopIncomingCallTitleFlash = Q;
    l.markIncomingMiniPlayerDismissed = Y;
    l.openVoipUiPopoutWindow = me;
    l.closeVoipUiPopoutWindow = pe;
    l.closeAllVoipWindows = _e;
}, 226);