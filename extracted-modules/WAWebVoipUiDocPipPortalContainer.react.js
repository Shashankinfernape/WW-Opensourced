__d("WAWebVoipUiDocPipPortalContainer.react", [
    "WALogger",
    "WAWebCallCollection",
    "WAWebEventEmitter",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallEnterPipModeCountStore",
    "WAWebVoipCallStateUtils",
    "WAWebVoipFocusTracker",
    "WAWebVoipGatingUtils",
    "WAWebVoipLobbyUtils",
    "WAWebVoipScreenSharePickerState",
    "WAWebVoipStackInterface",
    "WAWebVoipUiDocPipLoadable",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipUiPopoutWindowPortalHelpers",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebListener",
    "useWAWebTimeout"
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
    const C = y || (y = o("react"));
    const b = y;
    const { useEffect, useState } = b;
    const R = "wa-web-voip-docpip-popover-portal";
    const L = 3000;
    let E = false;
    function k() {
        return E;
    }
    function I() {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall == null) {
            return false;
        }
        const t = activeCall.getState();
        return o("WAWebVoipCallStateUtils").isCallIncoming(t) || o("WAWebVoipLobbyUtils").isLobbyApplicableForCallState(activeCall.isGroup === true, t) || activeCall.isInCallLinkPreview();
    }
    const T = new (r("WAWebEventEmitter"));
    function D(t) {
        try {
            if ("mediaSession" in navigator) {
                navigator.mediaSession.setActionHandler("enterpictureinpicture", t);
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DocPiP] enterpictureinpicture handler ",
                    ""
                ])), t != null ? "registered" : "unregistered");
            } else {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DocPiP] mediaSession not available, cannot register enterpictureinpicture handler"
                ])));
            }
        } catch (e) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DocPiP] enterpictureinpicture action not supported by browser"
            ])));
        }
    }
    function x(e) {
        if (!(r("WAWebCallCollection").activeCall?.isSelfScreenSharing() !== true || !o("WAWebVoipUiPopoutWindowPortalHelpers").wasStreamAcquiredInWindow("desktop", e))) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DocPiP] window closed while sharing, stopping screen share"
            ])));
            const a = (()=>{
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
            a().catch((e)=>{
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DocPiP] stopping screen share on close failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("doc-pip-stop-screen-share-failed");
            });
        }
    }
    function $(e) {
        if (E !== e) {
            E = e;
            T.trigger("docPipOpenStateChanged");
            o("WAWebVoipFocusTracker").notifyWindowModeChanged(e ? "pip" : "main");
        }
    }
    function P() {
        const e = useState(null);
        const t = e[0];
        const n = e[1];
        const r = useState(false);
        const a = r[0];
        const i = r[1];
        const l = useState(null);
        const s = l[0];
        const u = l[1];
        const c = useState(false);
        const d = c[0];
        const y = c[1];
        const b = o("WAWebVoipGatingUtils").isDocPipEnabled() && (t != null || d);
        const R = o("useWAWebTimeout").useManualTimeout(function() {
            i(false);
            n(null);
            y(false);
            $(false);
            if (s) {
                s.close();
            }
        });
        const E = R[0];
        const k = R[1];
        o("useWAWebListener").useListener(T, "setDocPipProps", function({ callLogMsg, isArmed }) {
            if (callLogMsg != null || isArmed === true) {
                k();
            }
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DocPiP] setDocPipProps: callLogMsg=",
                ", isArmed=",
                ""
            ])), callLogMsg != null, isArmed === true);
            n(callLogMsg);
            y(isArmed === true);
        });
        o("useWAWebListener").useListener(T, "closeDocPip", function({ surveyInteracted }) {
            E(surveyInteracted !== true ? L : 0);
        });
        o("useWAWebListener").useListener(T, "reopenDocPip", function() {
            const e = o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow();
            const t = I();
            if (b && !e && !t) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DocPiP] reopenDocPip: opening doc-pip"
                ])));
                i(true);
                $(true);
                o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_MOVE_TO_DOC_PIP);
            } else {
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DocPiP] reopenDocPip: skipped (active=",
                    ", popout=",
                    ", suppressed=",
                    ")"
                ])), b, e, t);
            }
        });
        o("useWAWebListener").useListener(T, "docPipOpenFailed", function() {
            o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DocPiP] docPipOpenFailed"
            ]))).sendLogs("doc-pip-open-failed");
            i(false);
            $(false);
        });
        o("useWAWebListener").useListener(o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter, "popoutWindowVisibilityChanged", function(e) {
            const t = o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsPopoutWindowActiveAndVisible();
            if (t && s) {
                s.close();
            }
        });
        useEffect(function() {
            if (!b) {
                D(null);
                return;
            }
            D(function() {
                const e = o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow();
                const t = o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsPopoutWindowOpening();
                if (e || t) {
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [DocPiP] enterpictureinpicture fired but blocked (popoutActive=",
                        ", popoutOpening=",
                        ")"
                    ])), e, t);
                    return;
                }
                o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DocPiP] enterpictureinpicture fired, triggering reopenDocPip"
                ])));
                T.trigger("reopenDocPip");
            });
            return function() {
                D(null);
            };
        }, [
            b
        ]);
        const onWindowReady = function(t) {
            o("WAWebVoipCallEnterPipModeCountStore").recordCallEnterPipMode();
            u(t);
        };
        useEffect(function() {
            if (s) {
                const e = function() {
                    x(s);
                    i(false);
                    u(null);
                    $(false);
                    o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_MOVE_FROM_DOC_PIP);
                };
                const t = function() {
                    if (document.visibilityState === "visible") {
                        if (!o("WAWebVoipScreenSharePickerState").getIsScreenSharePickerOpen()) {
                            window.setTimeout(function() {
                                return s.close();
                            }, 0);
                        }
                    }
                };
                s.addEventListener("pagehide", e);
                document.addEventListener("visibilitychange", t);
                return function() {
                    s.removeEventListener("pagehide", e);
                    document.removeEventListener("visibilitychange", t);
                };
            }
        }, [
            s
        ]);
        if (!b || !a) {
            return null;
        }
        const Component = o("WAWebVoipUiDocPipLoadable").WAWebVoipUiDocPipLoadable;
        return <Component callLogMsg={t} onWindowReady={onWindowReady}/>;
    }
    P.displayName = `${P.name} [from ${i.id}]`;
    l.VOIP_DOCPIP_POPOVER_PORTAL_ID = R;
    l.getIsDocPipWindowOpen = k;
    l.WAWebVoipUiDocPipEventEmitter = T;
    l.WAWebVoipUiDocPipPortalContainer = P;
}, 98);