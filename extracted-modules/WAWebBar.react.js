__d("WAWebBar.react", [
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        barContainer: {
            width: "xh8yej3",
            height: "xdk7pt",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        bar: {
            height: "x5yr21d",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            transitionProperty: "xx99ppg",
            transitionDuration: "x1d8287x",
            $$css: true
        },
        marginTop4: {
            marginTop: "xav9cv8",
            $$css: true
        }
    };
    function DComponent(t) {
        const n = o("react-compiler-runtime").c(13);
        const { barXStyle, containerXStyle, percentage, ref } = t;
        const d = `${percentage * 100}%`;
        let m;
        if (n[0] !== containerXStyle) {
            m = (e || (e = r("stylex"))).props(c.barContainer, c.marginTop4, containerXStyle);
            n[0] = containerXStyle;
            n[1] = m;
        } else {
            m = n[1];
        }
        let p;
        if (n[2] !== barXStyle) {
            p = (e || (e = r("stylex")))(c.bar, barXStyle);
            n[2] = barXStyle;
            n[3] = p;
        } else {
            p = n[3];
        }
        let _;
        if (n[4] !== d) {
            _ = {
                width: d
            };
            n[4] = d;
            n[5] = _;
        } else {
            _ = n[5];
        }
        let f;
        if (n[6] !== p || n[7] !== _) {
            f = <div className={p} style={_}/>;
            n[6] = p;
            n[7] = _;
            n[8] = f;
        } else {
            f = n[8];
        }
        let g;
        if (n[9] !== ref || n[10] !== m || n[11] !== f) {
            g = <div {...babelHelpers.extends({
                ref
            }, m, {
                children: f
            })}/>;
            n[9] = ref;
            n[10] = m;
            n[11] = f;
            n[12] = g;
        } else {
            g = n[12];
        }
        return g;
    }
    l.default = DComponent;
}, 98);