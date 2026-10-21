__d("WAWebLinkDeviceAutoLogoutIFrame.react", [
    "WAWebAutoLogoutGating",
    "react",
    "react-compiler-runtime",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    const c = 30 * 1000;
    function d(e) {
        const t = o("react-compiler-runtime").c(8);
        const { autoLogoutEnabled, onTimeout, visible } = e;
        const i = e_useState(false);
        const l = i[0];
        const d = i[1];
        const m = o("useWAWebTimeout").useTimeout(onTimeout, c);
        const p = m[0];
        const _ = m[1];
        if (!o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() && autoLogoutEnabled) {
            if (!l) {
                p();
            }
            let f;
            if (t[0] !== _) {
                f = function() {
                    _();
                    d(true);
                };
                t[0] = _;
                t[1] = f;
            } else {
                f = t[1];
            }
            const onLoad = f;
            let h;
            if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                h = o("WAWebAutoLogoutGating").getAutoLogoutIframeUrl();
                t[2] = h;
            } else {
                h = t[2];
            }
            const display = visible ? "block" : "none";
            let C;
            if (t[3] !== display) {
                C = {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 10000,
                    display
                };
                t[3] = display;
                t[4] = C;
            } else {
                C = t[4];
            }
            let b;
            if (t[5] !== onLoad || t[6] !== C) {
                b = <iframe data-testid="link-device-auto-logout-iframe" src={h} title="autologout" onLoad={onLoad} credentialless style={C}/>;
                t[5] = onLoad;
                t[6] = C;
                t[7] = b;
            } else {
                b = t[7];
            }
            return b;
        }
        if (l) {
            d(false);
        }
        _();
        return null;
    }
    l.default = d;
}, 98);