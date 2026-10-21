__d("WAWebRoundShape.react", [
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        iconRefreshed: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "x100vrsf",
            height: "x1vqgdyp",
            color: "x1pse0pq",
            background: "xe5due1",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
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
        },
        compact: {
            width: "x100vrsf",
            height: "x1vqgdyp",
            $$css: true
        },
        groupModal: {
            width: "x15jighw",
            height: "x112a4uq",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(8);
        const { children, disabled, theme, transparent, xstyle } = t;
        let m;
        if (n[0] !== disabled || n[1] !== theme || n[2] !== transparent || n[3] !== xstyle) {
            m = (e || (e = r("stylex"))).props(c.iconRefreshed, transparent === true && c.transparent || theme === "compact" && c.compact || theme === "group-modal" && c.groupModal, disabled === true && c.disabled, xstyle);
            n[0] = disabled;
            n[1] = theme;
            n[2] = transparent;
            n[3] = xstyle;
            n[4] = m;
        } else {
            m = n[4];
        }
        let p;
        if (n[5] !== children || n[6] !== m) {
            p = <div {...babelHelpers.extends({}, m, {
                children
            })}/>;
            n[5] = children;
            n[6] = m;
            n[7] = p;
        } else {
            p = n[7];
        }
        return p;
    }
    l.default = d;
}, 98);