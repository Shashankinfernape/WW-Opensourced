__d("WAWebShapeContainer.react", [
    "WAWebFlexBox.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "align",
        "justify",
        "size",
        "transparent",
        "xstyle"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = {
        shape: {
            width: "xh8yej3",
            height: "x5yr21d",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        transparent: {
            backgroundColor: "xjbqb8w",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(18);
        let r;
        let a;
        let i;
        let l;
        let s;
        let d;
        if (n[0] !== t) {
            i = t.align;
            l = t.justify;
            a = t.size;
            s = t.transparent;
            d = t.xstyle;
            r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
            n[3] = i;
            n[4] = l;
            n[5] = s;
            n[6] = d;
        } else {
            r = n[1];
            a = n[2];
            i = n[3];
            l = n[4];
            s = n[5];
            d = n[6];
        }
        const m = i === undefined ? "center" : i;
        const justify = l === undefined ? "center" : l;
        const _ = s === true && c.transparent;
        let f;
        if (n[7] !== _ || n[8] !== d) {
            f = [
                c.shape,
                d,
                _
            ];
            n[7] = _;
            n[8] = d;
            n[9] = f;
        } else {
            f = n[9];
        }
        let g;
        if (n[10] !== a) {
            g = {
                width: a,
                height: a
            };
            n[10] = a;
            n[11] = g;
        } else {
            g = n[11];
        }
        let h;
        if (n[12] !== m || n[13] !== justify || n[14] !== r || n[15] !== f || n[16] !== g) {
            h = u.jsx(o("WAWebFlexBox.react").FlexRow, babelHelpers.extends({
                justify,
                align: m,
                xstyle: f,
                style: g
            }, r));
            n[12] = m;
            n[13] = justify;
            n[14] = r;
            n[15] = f;
            n[16] = g;
            n[17] = h;
        } else {
            h = n[17];
        }
        return h;
    }
    l.default = d;
}, 98);