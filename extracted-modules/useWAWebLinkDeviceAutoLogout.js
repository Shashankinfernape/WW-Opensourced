__d("useWAWebLinkDeviceAutoLogout", [
    "CometPlaceholder.react",
    "Promise",
    "SecurePostMessage",
    "WALogger",
    "WAWebAutoLogoutGating",
    "deferredLoadComponent",
    "gkx",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback: m, useEffect: p, useState: _ } = d;
    const f = r("requireDeferred")("WAWebBackendEventBus").__setRef("useWAWebLinkDeviceAutoLogout");
    const g = r("requireDeferred")("WAWebConfirmPopup.react").__setRef("useWAWebLinkDeviceAutoLogout");
    const h = r("requireDeferred")("WAWebLinkDeviceAutoLogoutIFrame.react").__setRef("useWAWebLinkDeviceAutoLogout");
    const y = r("requireDeferred")("WAWebLinkDeviceQplHelpLinkEvent").__setRef("useWAWebLinkDeviceAutoLogout");
    const C = r("requireDeferred")("WAWebModalManager").__setRef("useWAWebLinkDeviceAutoLogout");
    const b = r("requireDeferred")("WAWebQrDeviceLinkingQpl").__setRef("useWAWebLinkDeviceAutoLogout");
    const V2 = r("deferredLoadComponent")(h);
    function S() {
        const t = o("react-compiler-runtime").c(18);
        const a = _(D);
        const i = a[0];
        const l = a[1];
        const u = _(false);
        const d = u[0];
        const m = u[1];
        const S = _(T);
        const x = S[0];
        const $ = S[1];
        let P;
        let N;
        if (t[0] !== x) {
            P = function() {
                if (!x) {
                    const e = h.onReady(function() {
                        $(true);
                    });
                    return function() {
                        return e.remove();
                    };
                }
            };
            N = [
                x
            ];
            t[0] = x;
            t[1] = P;
            t[2] = N;
        } else {
            P = t[1];
            N = t[2];
        }
        p(P, N);
        let M;
        if (t[3] !== i) {
            M = function() {
                if (o("WAWebAutoLogoutGating").isAutoLogoutEnabled()) {
                    if (r("gkx")("26259")) {
                        (s || (s = n("Promise"))).all([
                            C.load(),
                            g.load()
                        ]).then(I);
                        return;
                    }
                    y.onReady(k);
                    if (i && o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()) {
                        r("SecurePostMessage").sendMessageForCurrentOrigin(self.parent, "AUTO_LOGOUT_DISABLED");
                        b.onReady(E);
                        return;
                    }
                    const e = !i;
                    b.onReady(function(t) {
                        t.companionDeviceLinkingScreenQpl.stayLoggedInToggleClicked(e);
                    });
                    l(e);
                    if (!e) {
                        f.onReady(L);
                    }
                }
            };
            t[3] = i;
            t[4] = M;
        } else {
            M = t[4];
        }
        const w = M;
        let A;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            A = function(t) {
                if (!(!o("WAWebAutoLogoutGating").isAutoLogoutEnabled() && o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()) && t.origin === window.location.origin) {
                    e: switch(t.data){
                        case "QR_CODE_LOADED_FOR_AUTO_LOGOUT":
                            {
                                m(true);
                                break e;
                            }
                        case "AUTO_LOGOUT_DISABLED":
                            m(false);
                            l(false);
                            f.onReady(R);
                    }
                }
            };
            t[5] = A;
        } else {
            A = t[5];
        }
        const F = A;
        let O;
        if (t[6] !== i || t[7] !== w) {
            O = function() {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[auto-logout] iframe timeout"
                ])));
                if (i) {
                    w();
                }
            };
            t[6] = i;
            t[7] = w;
            t[8] = O;
        } else {
            O = t[8];
        }
        const B = O;
        o("useWAWebListener").useListener(o("WAWebAutoLogoutGating").isAutoLogoutEnabled() ? window : null, "message", F);
        let W;
        if (t[9] !== i || t[10] !== d || t[11] !== B) {
            const Component = r("CometPlaceholder.react");
            W = <Component fallback={null} name="WAWebLinkDeviceAutoLogoutIFrame"><V2 autoLogoutEnabled={i} visible={d} onTimeout={B}/></Component>;
            t[9] = i;
            t[10] = d;
            t[11] = B;
            t[12] = W;
        } else {
            W = t[12];
        }
        const q = W;
        const U = x ? w : null;
        let V;
        if (t[13] !== i || t[14] !== q || t[15] !== d || t[16] !== U) {
            V = {
                autoLogoutEnabled: i,
                handleAutoLogoutToggle: U,
                autoLogoutIframe: q,
                autoLogoutIframeLoaded: d
            };
            t[13] = i;
            t[14] = q;
            t[15] = d;
            t[16] = U;
            t[17] = V;
        } else {
            V = t[17];
        }
        return V;
    }
    function R(e) {
        e.BackendEventBus.triggerRefreshQR();
    }
    function L(e) {
        e.BackendEventBus.triggerRefreshQR();
    }
    function E(e) {
        e.companionDeviceLinkingScreenQpl.stayLoggedInToggleClicked(false);
    }
    function k(e) {
        e.WAWebLinkDeviceQplHelpLinkEvent(e.WebcPairingScreenLinkType.STAY_LOGGED_IN);
    }
    function I([t, n]) {
        const r = t.ModalManager;
        const O = n.ConfirmPopup;
        r.open(<O onOK={function() {
            return r.close();
        }}>Auto logout is not supported in intern. Please use the prod or debug app.</O>);
    }
    function T() {
        return h.getModuleIfRequireable() != null;
    }
    function D() {
        return !!(o("WAWebAutoLogoutGating").isAutoLogoutEnabled() && o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe());
    }
    l.default = S;
}, 98);