__d("WAWebWhatsAppAppIcon.react", [
    "WAWebWaLogoIcon.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = 0.65;
    const d = {
        container: {
            alignItems: "x6s0dn4",
            backgroundColor: "xyp3urf",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            display: "x78zum5",
            flexShrink: "x2lah0s",
            justifyContent: "xl56j7k",
            $$css: true
        },
        glyph: {
            color: "x17t9dm2",
            $$css: true
        },
        size: function(t) {
            return [
                {
                    height: t != null ? "x16ye13r" : t,
                    width: t != null ? "x5lhr3w" : t,
                    $$css: true
                },
                {
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        }
    };
    function MComponent(t) {
        const n = o("react-compiler-runtime").c(10);
        const { size, xstyle } = t;
        let l;
        if (n[0] !== size) {
            l = Math.round(size * c);
            n[0] = size;
            n[1] = l;
        } else {
            l = n[1];
        }
        const s = l;
        let m;
        if (n[2] !== size || n[3] !== xstyle) {
            m = (e || (e = r("stylex"))).props(d.container, d.size(size), xstyle);
            n[2] = size;
            n[3] = xstyle;
            n[4] = m;
        } else {
            m = n[4];
        }
        let children;
        if (n[5] !== s) {
            children = u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
                width: s,
                height: s,
                xstyle: d.glyph
            });
            n[5] = s;
            n[6] = children;
        } else {
            children = n[6];
        }
        let _;
        if (n[7] !== m || n[8] !== children) {
            _ = <span {...babelHelpers.extends({
                "data-testid": "wa-square-icon"
            }, m, {
                children
            })}/>;
            n[7] = m;
            n[8] = children;
            n[9] = _;
        } else {
            _ = n[9];
        }
        return _;
    }
    l.default = MComponent;
}, 98);