__d("CometHeroInteractionImpl.react", [
    "hero-tracing",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "htmlAttributes",
        "pageletAriaProps",
        "ref",
        "xstyle"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    function CometHeroInteraction(t) {
        const i = o("react-compiler-runtime").c(17);
        let l;
        let u;
        let d;
        let m;
        let p;
        if (i[0] !== t) {
            l = t.htmlAttributes;
            d = t.pageletAriaProps;
            m = t.ref;
            p = t.xstyle;
            u = babelHelpers.objectWithoutPropertiesLoose(t, e);
            i[0] = t;
            i[1] = l;
            i[2] = u;
            i[3] = d;
            i[4] = m;
            i[5] = p;
        } else {
            l = i[1];
            u = i[2];
            d = i[3];
            m = i[4];
            p = i[5];
        }
        let _;
        if (i[6] !== p) {
            _ = (s || (s = r("stylex")))(p);
            i[6] = p;
            i[7] = _;
        } else {
            _ = i[7];
        }
        const f = l?.onMouseLeave;
        const g = l?.style;
        let h;
        if (i[8] !== d || i[9] !== _ || i[10] !== f || i[11] !== g) {
            h = babelHelpers.extends({}, d, {
                className: _,
                onMouseLeave: f,
                style: g
            });
            i[8] = d;
            i[9] = _;
            i[10] = f;
            i[11] = g;
            i[12] = h;
        } else {
            h = i[12];
        }
        let y;
        if (i[13] !== u || i[14] !== m || i[15] !== h) {
            y = c.jsx(o("hero-tracing").HeroInteraction, babelHelpers.extends({
                htmlAttributes: h,
                ref: m
            }, u));
            i[13] = u;
            i[14] = m;
            i[15] = h;
            i[16] = y;
        } else {
            y = i[16];
        }
        return y;
    }
    CometHeroInteraction.displayName = "CometHeroInteraction";
    l.default = CometHeroInteraction;
}, 98);