__d("WAWebBizVPVTrackableMessageComponent.react", [
    "WAWebBizVPVDebugOverlay.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizMessageVPVLogger",
    "useWAWebVPVOverlayEnabled"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    function c(e) {
        const t = o("react-compiler-runtime").c(13);
        const { component, visibilityData } = e;
        const i = e_useState(false);
        const visible = i[0];
        const onVisibilityChange = i[1];
        let d;
        if (t[0] !== visibilityData) {
            d = babelHelpers.extends({}, visibilityData, {
                onVisibilityChange
            });
            t[0] = visibilityData;
            t[1] = d;
        } else {
            d = t[1];
        }
        const m = r("useWAWebBizMessageVPVLogger")(d);
        const p = m[0];
        const _ = r("useWAWebVPVOverlayEnabled")();
        let f;
        if (t[2] !== _) {
            f = _ ? {
                position: "relative"
            } : undefined;
            t[2] = _;
            t[3] = f;
        } else {
            f = t[3];
        }
        let g;
        if (t[4] !== visible || t[5] !== _ || t[6] !== visibilityData) {
            g = _ ? s.jsx(r("WAWebBizVPVDebugOverlay.react"), {
                visible,
                visibilityData
            }) : null;
            t[4] = visible;
            t[5] = _;
            t[6] = visibilityData;
            t[7] = g;
        } else {
            g = t[7];
        }
        let h;
        if (t[8] !== component || t[9] !== f || t[10] !== g || t[11] !== p) {
            h = <div ref={p} style={f}>{g}{component}</div>;
            t[8] = component;
            t[9] = f;
            t[10] = g;
            t[11] = p;
            t[12] = h;
        } else {
            h = t[12];
        }
        return h;
    }
    l.default = c;
}, 98);