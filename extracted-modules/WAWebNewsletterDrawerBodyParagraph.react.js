__d("WAWebNewsletterDrawerBodyParagraph.react", [
    "WAWebText.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        paragraph: {
            flexGrow: "x1iyjqo2",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(15);
        const { description, icon, title } = t;
        let s;
        let d;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            s = {
                className: "x78zum5 xh8yej3 xcxhlts x1fqp7bg"
            };
            d = {
                className: "xvy4d1p xxk0z11"
            };
            n[0] = s;
            n[1] = d;
        } else {
            s = n[0];
            d = n[1];
        }
        let m;
        if (n[2] !== icon) {
            m = <div {...babelHelpers.extends({}, d, {
                children: icon
            })}/>;
            n[2] = icon;
            n[3] = m;
        } else {
            m = n[3];
        }
        let p;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            p = (e || (e = r("stylex"))).props([
                c.paragraph,
                o("WDSMargins.stylex").wdsMargins.marginHor16
            ]);
            n[4] = p;
        } else {
            p = n[4];
        }
        let _;
        if (n[5] !== title) {
            const Component = o("WAWebText.react").WAWebTextTitle;
            _ = <Component as="p" weight="normal" color="primary">{title}</Component>;
            n[5] = title;
            n[6] = _;
        } else {
            _ = n[6];
        }
        let f;
        if (n[7] !== description) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            f = <Component as="p" xstyle={o("WDSMargins.stylex").wdsMargins.marginTop8}>{description}</Component>;
            n[7] = description;
            n[8] = f;
        } else {
            f = n[8];
        }
        let g;
        if (n[9] !== _ || n[10] !== f) {
            g = <div {...babelHelpers.extends({}, p, {
                children: [
                    _,
                    f
                ]
            })}/>;
            n[9] = _;
            n[10] = f;
            n[11] = g;
        } else {
            g = n[11];
        }
        let h;
        if (n[12] !== m || n[13] !== g) {
            h = <div {...babelHelpers.extends({}, s, {
                children: [
                    m,
                    g
                ]
            })}/>;
            n[12] = m;
            n[13] = g;
            n[14] = h;
        } else {
            h = n[14];
        }
        return h;
    }
    l.default = d;
}, 98);