__d("WAWebListIcon.react", [
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = 12;
    const d = {
        circle: {
            display: "x1rg5ohu",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            flexShrink: "x2lah0s",
            $$css: true
        },
        defaultColor: {
            backgroundColor: "x1518k6t",
            $$css: true
        }
    };
    function MComponent(t) {
        const n = o("react-compiler-runtime").c(12);
        const { color, size, xstyle } = t;
        const s = size === undefined ? c : size;
        const m = color != null;
        let p;
        if (n[0] !== m || n[1] !== xstyle) {
            p = (e || (e = r("stylex"))).props(d.circle, !m && d.defaultColor, xstyle);
            n[0] = m;
            n[1] = xstyle;
            n[2] = p;
        } else {
            p = n[2];
        }
        let _;
        if (n[3] !== color || n[4] !== m) {
            _ = m ? {
                backgroundColor: color
            } : {};
            n[3] = color;
            n[4] = m;
            n[5] = _;
        } else {
            _ = n[5];
        }
        let f;
        if (n[6] !== s || n[7] !== _) {
            f = babelHelpers.extends({}, _, {
                width: s,
                height: s
            });
            n[6] = s;
            n[7] = _;
            n[8] = f;
        } else {
            f = n[8];
        }
        let g;
        if (n[9] !== p || n[10] !== f) {
            g = <span {...babelHelpers.extends({
                "data-testid": "list-icon"
            }, p, {
                style: f
            })}/>;
            n[9] = p;
            n[10] = f;
            n[11] = g;
        } else {
            g = n[11];
        }
        return g;
    }
    l.default = MComponent;
}, 98);