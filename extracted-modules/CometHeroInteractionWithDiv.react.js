__d("CometHeroInteractionWithDiv.react", [
    "CometHeroInteractionImpl.react",
    "cr:35630",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    function CComponent(t) {
        const a = o("react-compiler-runtime").c(12);
        const { ref, children, hidden, htmlAttributes, pageletAriaProps, xstyle } = t;
        let p;
        if (a[0] !== xstyle) {
            p = (e || (e = r("stylex")))(xstyle);
            a[0] = xstyle;
            a[1] = p;
        } else {
            p = a[1];
        }
        const _ = htmlAttributes?.onMouseLeave;
        const f = htmlAttributes?.style;
        let g;
        if (a[2] !== pageletAriaProps || a[3] !== p || a[4] !== _ || a[5] !== f) {
            g = babelHelpers.extends({
                className: p,
                onMouseLeave: _,
                style: f
            }, pageletAriaProps);
            a[2] = pageletAriaProps;
            a[3] = p;
            a[4] = _;
            a[5] = f;
            a[6] = g;
        } else {
            g = a[6];
        }
        const h = hidden === true ? "hidden" : "visible";
        let y;
        if (a[7] !== children || a[8] !== ref || a[9] !== g || a[10] !== h) {
            const Component = n("cr:35630");
            y = <Component htmlAttributes={g} mode={h} ref={ref}>{children}</Component>;
            a[7] = children;
            a[8] = ref;
            a[9] = g;
            a[10] = h;
            a[11] = y;
        } else {
            y = a[11];
        }
        return y;
    }
    const d = r("CometHeroInteractionImpl.react") != null ? r("CometHeroInteractionImpl.react") : CComponent;
    l.default = d;
}, 98);