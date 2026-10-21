__d("WAWebPill.react", [
    "WAWebFlex.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "children",
        "pillText"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = {
        pill: {
            boxSizing: "x9f619",
            height: "x17rw0jw",
            fontSize: "x190qgfh",
            fontWeight: "x1xlr1w8",
            borderStartStartRadius: "x1g83kfv",
            borderStartEndRadius: "x3qq2k7",
            borderEndEndRadius: "x2x8art",
            borderEndStartRadius: "x1qor8vf",
            $$css: true
        },
        gray: {
            color: "x1pse0pq",
            backgroundColor: "x1518k6t",
            $$css: true
        },
        green: {
            color: "x1pse0pq",
            backgroundColor: "xfn3atn",
            $$css: true
        },
        yellow: {
            color: "x1pse0pq",
            backgroundColor: "x1vl1d71",
            $$css: true
        },
        blue: {
            color: "x1pse0pq",
            backgroundColor: "xp8wkbn",
            $$css: true
        }
    };
    function D1Component(e) {
        const t = o("react-compiler-runtime").c(6);
        const { children, color, inline } = e;
        const i = color === undefined ? "gray" : color;
        const l = i ? c[i] : null;
        const s = inline === true ? o("WDSMargins.stylex").wdsMargins.marginStart8 : null;
        let d;
        if (t[0] !== l || t[1] !== s) {
            d = [
                c.pill,
                l,
                o("WDSPaddings.stylex").wdsPaddings.paddingVer4,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
                o("WDSMargins.stylex").wdsMargins.marginVerAuto,
                s
            ];
            t[0] = l;
            t[1] = s;
            t[2] = d;
        } else {
            d = t[2];
        }
        let m;
        if (t[3] !== children || t[4] !== d) {
            const Component = o("WAWebFlex.react").FlexRow;
            m = <Component align="center" xstyle={d}>{children}</Component>;
            t[3] = children;
            t[4] = d;
            t[5] = m;
        } else {
            m = t[5];
        }
        return m;
    }
    function MComponent(t) {
        const n = o("react-compiler-runtime").c(11);
        let r;
        let a;
        let i;
        if (n[0] !== t) {
            r = t.children;
            i = t.pillText;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
            n[3] = i;
        } else {
            r = n[1];
            a = n[2];
            i = n[3];
        }
        const inline = r != null || a.inline;
        let s;
        if (n[4] !== a || n[5] !== i || n[6] !== inline) {
            s = <D1Component {...babelHelpers.extends({}, a, {
                inline,
                children: i
            })}/>;
            n[4] = a;
            n[5] = i;
            n[6] = inline;
            n[7] = s;
        } else {
            s = n[7];
        }
        let c;
        if (n[8] !== r || n[9] !== s) {
            const Component = o("WAWebFlex.react").FlexRow;
            c = <Component align="center">{r}{s}</Component>;
            n[8] = r;
            n[9] = s;
            n[10] = c;
        } else {
            c = n[10];
        }
        return c;
    }
    l.Pill = D1Component;
    l.LabelPill = MComponent;
}, 98);