__d("WAWebSquircleIcon.react", [
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        icon: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            color: "x17t9dm2",
            backgroundColor: "xfn3atn",
            clipPath: "x1f2iure",
            $$css: true
        },
        disabled: {
            backgroundColor: "x1ailiqk",
            $$css: true
        },
        transparent: {
            color: "xhslqc4",
            backgroundColor: "x1jbjsai",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(10);
        const { children, disabled, size, transparent, xstyle } = t;
        const m = size === undefined ? 48 : size;
        let p;
        if (n[0] !== disabled || n[1] !== transparent || n[2] !== xstyle) {
            p = (e || (e = r("stylex")))(c.icon, transparent === true && c.transparent, disabled === true && c.disabled, xstyle);
            n[0] = disabled;
            n[1] = transparent;
            n[2] = xstyle;
            n[3] = p;
        } else {
            p = n[3];
        }
        let _;
        if (n[4] !== m) {
            _ = {
                height: m,
                width: m
            };
            n[4] = m;
            n[5] = _;
        } else {
            _ = n[5];
        }
        let f;
        if (n[6] !== children || n[7] !== p || n[8] !== _) {
            f = <div className={p} style={_}>{children}</div>;
            n[6] = children;
            n[7] = p;
            n[8] = _;
            n[9] = f;
        } else {
            f = n[9];
        }
        return f;
    }
    l.default = d;
}, 98);