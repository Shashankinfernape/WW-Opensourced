__d("WAWebMessagePlaceholder.react", [
    "WAWebMessageSpacerText.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        marginTop3: {
            marginTop: "x7r5mf7",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(12);
        const { Icon, children, hasCaption, msgKey, theme } = t;
        let m;
        if (n[0] !== children || n[1] !== hasCaption || n[2] !== msgKey || n[3] !== theme) {
            const Component = r("WAWebMessageSpacerText.react");
            m = hasCaption ? children : <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props([
                c.marginTop3,
                o("WDSMargins.stylex").wdsMargins.marginBottom2,
                theme === "small-icon" && o("WDSMargins.stylex").wdsMargins.marginTop0
            ]), {
                children: <Component msgKey={msgKey} theme="placeholder">{children}</Component>
            })}/>;
            n[0] = children;
            n[1] = hasCaption;
            n[2] = msgKey;
            n[3] = theme;
            n[4] = m;
        } else {
            m = n[4];
        }
        const p = m;
        let _;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            _ = {
                className: "x78zum5 x1q0g3np x1cy8zhl x6ikm8r x10wlt62 x1wl59ut x1k4tb9n xd4r4e8 x1vvkbs"
            };
            n[5] = _;
        } else {
            _ = n[5];
        }
        let f;
        if (n[6] !== Icon || n[7] !== theme) {
            f = Icon != null ? <div {...babelHelpers.extends({}, {
                0: {
                    className: "x1okw0bk xhslqc4 xf6vk7d"
                },
                1: {
                    className: "x1okw0bk xhslqc4 xf6vk7d x1ok221b"
                }
            }[(theme === "status-icon") << 0], {
                children: Icon
            })}/> : null;
            n[6] = Icon;
            n[7] = theme;
            n[8] = f;
        } else {
            f = n[8];
        }
        let g;
        if (n[9] !== p || n[10] !== f) {
            g = <div {...babelHelpers.extends({}, _, {
                children: [
                    f,
                    p
                ]
            })}/>;
            n[9] = p;
            n[10] = f;
            n[11] = g;
        } else {
            g = n[11];
        }
        return g;
    }
    l.default = d;
}, 98);