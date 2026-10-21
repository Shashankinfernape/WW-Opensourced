__d("useWAWebVoipCallCleanupOnUnload", [
    "Promise",
    "WALogger",
    "WAWebABPropsCache",
    "WAWebCallCollection",
    "WAWebVoipActivityTracker",
    "WAWebVoipBootInitDecision",
    "WAWebVoipCallStateUtils",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
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
    const useEffect = (h || (h = o("react"))).useEffect;
    function useC(t = true) {
        useEffect(function() {
            if (!(!t || typeof window === "undefined")) {
                let n = true;
                const a = ()=>{
                    o("WAWebVoipStackInterface").getVoipStackInterface().catch((t)=>{
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip:cleanup] voip stack interface prefetch failed: ",
                            ""
                        ])), String(t));
                    });
                };
                const i = function() {
                    if (n) {
                        try {
                            if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) {
                                return;
                            }
                            if (o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled()) {
                                o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(function() {
                                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: [deferred-boot] cleanup_prefetch decision=deferred reason=wait_for_stack_construction"
                                    ])));
                                });
                                return;
                            }
                        } catch (error) {
                            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip:cleanup] boot prefetch gate read failed; preserving eager stack prefetch: ",
                                ""
                            ])), String(error));
                        }
                        a();
                    }
                };
                if (o("WAWebABPropsCache").isABPropConfigsReady()) {
                    i();
                } else {
                    o("WAWebABPropsCache").waitForABPropConfigsReady().then(i, (e)=>{
                        if (n) {
                            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip:cleanup] AB prop readiness failed; preserving eager stack prefetch: ",
                                ""
                            ])), String(e));
                            a();
                        }
                    });
                }
                let l = null;
                let m = null;
                const p = ()=>{
                    if (l != null) {
                        self.clearTimeout(l);
                        l = null;
                    }
                };
                const _ = function() {
                    p();
                    m?.();
                    m = null;
                };
                const f = ()=>{
                    p();
                    m = null;
                };
                const g = function() {
                    _();
                    if (r("WAWebCallCollection").activeCall != null) {
                        m = o("WAWebVoipActivityTracker").trackUiActivityTemporarily(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_CLOSE_ATTEMPT);
                        l = self.setTimeout(_, 0);
                    }
                };
                const h = function() {
                    f();
                    const activeCall = r("WAWebCallCollection").activeCall;
                    if (activeCall != null) {
                        o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_CLOSE_ATTEMPT);
                    }
                    v();
                    if (activeCall != null && !o("WAWebVoipCallStateUtils").isCallIncoming(activeCall.getState())) {
                        const t = o("WAWebVoipStackInterface").getCachedVoipStackInterface();
                        if (t != null) {
                            b(t);
                            return;
                        }
                        o("WAWebVoipStackInterface").getVoipStackInterface().then((e)=>{
                            if (e != null) {
                                b(e);
                            }
                        }).catch((e)=>{
                            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip:cleanup] endCall on unload retry failed to load voip stack interface: ",
                                ""
                            ])), String(e));
                        });
                    }
                };
                window.addEventListener("beforeunload", g);
                window.addEventListener("pagehide", h);
                return function() {
                    n = false;
                    window.removeEventListener("beforeunload", g);
                    window.removeEventListener("pagehide", h);
                    _();
                };
            }
        }, [
            t
        ]);
    }
    function b(e) {
        if (e.type === "web") {
            try {
                const t = e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Self, true);
                (g || (g = n("Promise"))).resolve(t).catch((e)=>{
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:cleanup] endCall on unload rejected: ",
                        ""
                    ])), String(e));
                });
            } catch (error) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:cleanup] endCall on unload threw: ",
                    ""
                ])), String(error));
            }
        }
    }
    function v() {
        if (o("WAWebVoipPopoutWindowState").isPopoutWindowAlive()) {
            const e = o("WAWebVoipPopoutWindowState").getPopoutWindow();
            if (e != null) {
                try {
                    e.close();
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:cleanup] popoutWindow.close() called"
                    ])));
                } catch (error) {
                    o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:cleanup] popoutWindow.close() failed: ",
                        ""
                    ])), String(error));
                }
            }
        }
    }
    l.default = useC;
}, 98);