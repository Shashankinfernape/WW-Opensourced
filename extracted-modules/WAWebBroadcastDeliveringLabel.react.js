__d("WAWebBroadcastDeliveringLabel.react", [
    "WAWebBroadcastDeliveringLabelView.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastIsDelivering"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(3);
        const { light, msgKey } = e;
        const isDelivering = r("useWAWebBizBroadcastIsDelivering")(msgKey);
        let l;
        if (t[0] !== isDelivering || t[1] !== light) {
            l = s.jsx(r("WAWebBroadcastDeliveringLabelView.react"), {
                isDelivering,
                light
            });
            t[0] = isDelivering;
            t[1] = light;
            t[2] = l;
        } else {
            l = t[2];
        }
        return l;
    }
    l.default = u;
}, 98);