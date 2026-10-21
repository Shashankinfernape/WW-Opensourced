__d("WAWebAvatarSpinner.react", [
    "fbt",
    "WAWebClassnames",
    "WAWebSpinner.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        container: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "xh8yej3",
            height: "x5yr21d",
            backgroundColor: "x1honnu5",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(13);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { className, size, xstyle } = l;
        const f = size === undefined ? 50 : size;
        let g;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("Loading photo");
            n[3] = g;
        } else {
            g = n[3];
        }
        let h;
        if (n[4] !== className || n[5] !== xstyle) {
            h = o("WAWebClassnames").classnamesConvertMeToStylexPlease((u || (u = r("stylex")))(m.container, xstyle), className);
            n[4] = className;
            n[5] = xstyle;
            n[6] = h;
        } else {
            h = n[6];
        }
        let y;
        if (n[7] !== f) {
            y = d.jsx(o("WAWebSpinner.react").Spinner, {
                size: f,
                stroke: 3,
                color: "solidwhite"
            });
            n[7] = f;
            n[8] = y;
        } else {
            y = n[8];
        }
        let C;
        if (n[9] !== i || n[10] !== h || n[11] !== y) {
            C = <div aria-label={g} ref={i} className={h}>{y}</div>;
            n[9] = i;
            n[10] = h;
            n[11] = y;
            n[12] = C;
        } else {
            C = n[12];
        }
        return C;
    }
    l.default = p;
}, 226);