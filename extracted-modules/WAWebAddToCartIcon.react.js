__d("WAWebAddToCartIcon.react", [
    "fbt",
    "WDSButton.react",
    "WDSIconIcAddShoppingCart.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        addToCartIcon: {
            color: "xhslqc4",
            ":hover_color": "x12ln5q2",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(8);
        const { colorXStyle, onClick } = e;
        let i;
        if (t[0] !== colorXStyle) {
            i = {
                xstyle: [
                    c.addToCartIcon,
                    colorXStyle
                ]
            };
            t[0] = colorXStyle;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        if (onClick != null) {
            let d;
            if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                d = s._("Add to cart");
                t[2] = d;
            } else {
                d = t[2];
            }
            let m;
            if (t[3] !== onClick || t[4] !== l) {
                m = u.jsx(r("WDSButton.react"), babelHelpers.extends({}, l, {
                    Icon: r("WDSIconIcAddShoppingCart.react"),
                    "aria-label": d,
                    onPress: onClick,
                    variant: "borderless"
                }));
                t[3] = onClick;
                t[4] = l;
                t[5] = m;
            } else {
                m = t[5];
            }
            return m;
        }
        let p;
        if (t[6] !== l) {
            p = u.jsx(r("WDSIconIcAddShoppingCart.react"), babelHelpers.extends({}, l));
            t[6] = l;
            t[7] = p;
        } else {
            p = t[7];
        }
        return p;
    }
    l.default = d;
}, 226);