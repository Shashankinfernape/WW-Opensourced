__d("WAWebSvgComponentBase", [
    "Locale",
    "err",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    const e = [
        "children"
    ];
    const s = [
        "aria-hidden",
        "aria-label",
        "containerRef",
        "directional",
        "displayInline",
        "name",
        "overrideDirection",
        "xstyle"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        reverse: {
            display: "x1lliihq",
            transform: "xpk2tj9",
            $$css: true
        },
        inline: {
            display: "x1rg5ohu",
            verticalAlign: "x16dsc37",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(26);
        let a;
        let i;
        if (n[0] !== t) {
            a = t.children;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        if (a == null) {
            throw r("err")("Cannot use BaseSvgSpan without SVG children");
        }
        let l;
        let c;
        let p;
        let _;
        let f;
        let g;
        let h;
        let y;
        let C;
        if (n[3] !== i) {
            const b = i;
            f = b["aria-hidden"];
            l = b["aria-label"];
            c = b.containerRef;
            p = b.directional;
            _ = b.displayInline;
            g = b.name;
            y = b.overrideDirection;
            C = b.xstyle;
            h = babelHelpers.objectWithoutPropertiesLoose(b, s);
            n[3] = i;
            n[4] = l;
            n[5] = c;
            n[6] = p;
            n[7] = _;
            n[8] = f;
            n[9] = g;
            n[10] = h;
            n[11] = y;
            n[12] = C;
        } else {
            l = n[4];
            c = n[5];
            p = n[6];
            _ = n[7];
            f = n[8];
            g = n[9];
            h = n[10];
            y = n[11];
            C = n[12];
        }
        let v;
        if (n[13] !== p || n[14] !== _ || n[15] !== y || n[16] !== C) {
            let S;
            if (y != null) {
                S = y === "rtl";
            } else {
                S = p === true ? o("Locale").isRTL() : false;
            }
            v = (u || (u = r("stylex"))).props(S && m.reverse, _ === true && m.inline, C);
            n[13] = p;
            n[14] = _;
            n[15] = y;
            n[16] = C;
            n[17] = v;
        } else {
            v = n[17];
        }
        const R = v;
        const L = f === false ? false : l == null;
        let E;
        if (n[18] !== L || n[19] !== l || n[20] !== a || n[21] !== c || n[22] !== g || n[23] !== h || n[24] !== R) {
            E = <span {...babelHelpers.extends({
                "data-testid": g,
                "aria-hidden": L,
                "aria-label": l,
                ref: c,
                "data-icon": g
            }, R, h, {
                children: a
            })}/>;
            n[18] = L;
            n[19] = l;
            n[20] = a;
            n[21] = c;
            n[22] = g;
            n[23] = h;
            n[24] = R;
            n[25] = E;
        } else {
            E = n[25];
        }
        return E;
    }
    l.BaseSvgSpan = p;
}, 98);