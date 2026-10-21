__d("WAWebSectionHeader.react", [
    "WAWebStylesEnv",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        container: {
            boxSizing: "x9f619",
            height: "x1cccnhj",
            paddingTop: "x9orja2",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x1995gp2",
            paddingInlineStart: "xzm8p2n",
            $$css: true
        },
        uppercase: {
            textTransform: "xtvhhri",
            $$css: true
        },
        transparent: {
            backgroundColor: "xjbqb8w",
            $$css: true
        },
        fontAliasing: {
            WebkitFontSmoothing: "xvmahel",
            MozOsxFontSmoothing: "xlh3980",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(10);
        const { header, isTransparent, testid, uppercase, xstyle } = t;
        const m = isTransparent === undefined ? false : isTransparent;
        const p = uppercase === undefined ? false : uppercase;
        const _ = testid ?? "section-header";
        let f;
        if (n[0] !== m || n[1] !== p || n[2] !== xstyle) {
            f = (e || (e = r("stylex"))).props(c.container, p && c.uppercase, m && c.transparent, o("WAWebStylesEnv").isOSMac && c.fontAliasing, xstyle);
            n[0] = m;
            n[1] = p;
            n[2] = xstyle;
            n[3] = f;
        } else {
            f = n[3];
        }
        let g;
        if (n[4] !== header) {
            const Component = r("WDSText.react");
            g = <Component type="Body2" colorName="contentDeemphasized">{header}</Component>;
            n[4] = header;
            n[5] = g;
        } else {
            g = n[5];
        }
        let h;
        if (n[6] !== _ || n[7] !== f || n[8] !== g) {
            h = <div {...babelHelpers.extends({
                "data-testid": _
            }, f, {
                children: g
            })}/>;
            n[6] = _;
            n[7] = f;
            n[8] = g;
            n[9] = h;
        } else {
            h = n[9];
        }
        return h;
    }
    l.default = d;
}, 98);