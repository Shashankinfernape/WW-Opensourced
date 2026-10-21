__d("WAWebTextUtils.react", [
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        container: {
            display: "x1rg5ohu",
            $$css: true
        },
        bold: {
            fontWeight: "x117nqv4",
            $$css: true
        },
        italic: {
            fontStyle: "x1k4tb9n",
            $$css: true
        },
        alignCenter: {
            textAlign: "x2b8uid",
            $$css: true
        },
        alignEnd: {
            textAlign: "xp4054r",
            $$css: true
        },
        alignStart: {
            textAlign: "x1yc453h",
            $$css: true
        }
    };
    function D2Component(t) {
        const n = o("react-compiler-runtime").c(7);
        const { align, bold, children, italic } = t;
        let d;
        e: switch(align){
            case "center":
                {
                    d = c.alignCenter;
                    break e;
                }
            case "end":
                {
                    d = c.alignEnd;
                    break e;
                }
            case "start":
                d = c.alignStart;
        }
        const m = bold === true && c.bold;
        const p = italic === true && c.italic;
        let _;
        if (n[0] !== d || n[1] !== m || n[2] !== p) {
            const f = [
                c.container,
                m,
                p,
                d
            ];
            _ = (e || (e = r("stylex"))).props(f);
            n[0] = d;
            n[1] = m;
            n[2] = p;
            n[3] = _;
        } else {
            _ = n[3];
        }
        let g;
        if (n[4] !== children || n[5] !== _) {
            g = <span {...babelHelpers.extends({}, _, {
                children
            })}/>;
            n[4] = children;
            n[5] = _;
            n[6] = g;
        } else {
            g = n[6];
        }
        return g;
    }
    function MComponent(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_children = e.children;
        let r;
        if (t[0] !== e_children) {
            r = <D2Component bold>{e_children}</D2Component>;
            t[0] = e_children;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(3);
        const { align, children } = e;
        let a;
        if (t[0] !== align || t[1] !== children) {
            a = <D2Component align={align}>{children}</D2Component>;
            t[0] = align;
            t[1] = children;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    l.Bold = MComponent;
    l.TextAlign = p;
}, 98);