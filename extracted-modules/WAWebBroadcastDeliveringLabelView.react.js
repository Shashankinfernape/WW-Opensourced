__d("WAWebBroadcastDeliveringLabelView.react", [
    "fbt",
    "WAWebBroadcastStatusLabel.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(3);
        const { isDelivering, light } = e;
        if (!isDelivering) {
            return null;
        }
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Delivering…");
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = i;
        let c;
        if (t[1] !== light) {
            c = u.jsx(r("WAWebBroadcastStatusLabel.react"), {
                label: l,
                light
            });
            t[1] = light;
            t[2] = c;
        } else {
            c = t[2];
        }
        return c;
    }
    l.default = c;
}, 226);