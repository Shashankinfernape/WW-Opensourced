__d("WAWebTag.react", [
    "$InternalEnum",
    "WAWebL10N",
    "WDSFontTokenStyles",
    "WDSIconIcCheck.react",
    "WDSIconIcClose.react",
    "WDSIconIcGradeFilled.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        marker: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            paddingTop: "x1gxa6cn",
            paddingBottom: "xa0aww2",
            paddingInlineStart: "x12w63v0",
            paddingInlineEnd: "x1nzty39",
            $$css: true
        },
        primary: {
            backgroundColor: "x1abdmlv",
            color: "xk4n5i7",
            $$css: true
        },
        secondary: {
            backgroundColor: "x4wrhlh",
            color: "x14ug900",
            $$css: true
        },
        error: {
            backgroundColor: "xrkjzwr",
            color: "x30a034",
            $$css: true
        },
        square: {
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            $$css: true
        },
        round: {
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            minWidth: "xdhweic",
            $$css: true
        },
        pill: {
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            $$css: true
        },
        iconStar: {
            transform: "x6ll9c4",
            $$css: true
        },
        iconStartRTL: {
            transform: "x3c4gkl",
            $$css: true
        }
    };
    const d = n("$InternalEnum").Mirrored([
        "Primary",
        "PrimaryPill",
        "Secondary",
        "Error"
    ]);
    const m = n("$InternalEnum").Mirrored([
        "STAR",
        "CHECK",
        "CLOSE"
    ]);
    const p = [
        d.Primary,
        d.PrimaryPill
    ];
    function _(t) {
        const n = o("react-compiler-runtime").c(11);
        const { children, icon, round, testid, theme, xstyle } = t;
        const g = round === undefined ? false : round;
        const h = theme === undefined ? d.Primary : theme;
        let y;
        if (n[0] !== g || n[1] !== h || n[2] !== xstyle) {
            y = (e || (e = r("stylex"))).props(c.marker, o("WDSFontTokenStyles").WDSFontTokenStyles.Body3Emphasized, p.includes(h) && c.primary, h === d.Secondary && c.secondary, h === d.PrimaryPill && c.pill, h === d.Error && c.error, g ? c.round : c.square, xstyle);
            n[0] = g;
            n[1] = h;
            n[2] = xstyle;
            n[3] = y;
        } else {
            y = n[3];
        }
        let C;
        if (n[4] !== icon) {
            C = <F1 name={icon}/>;
            n[4] = icon;
            n[5] = C;
        } else {
            C = n[5];
        }
        let b;
        if (n[6] !== children || n[7] !== y || n[8] !== C || n[9] !== testid) {
            b = <div {...babelHelpers.extends({}, y, {
                "data-testid": testid,
                children: [
                    children,
                    C
                ]
            })}/>;
            n[6] = children;
            n[7] = y;
            n[8] = C;
            n[9] = testid;
            n[10] = b;
        } else {
            b = n[10];
        }
        return b;
    }
    function F1(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_name = e.name;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                width: 12,
                height: 12,
                xstyle: r("WAWebL10N").isRTL() ? c.iconStartRTL : c.iconStar
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (t[1] !== e_name) {
            l = e_name === m.STAR ? u.jsx(r("WDSIconIcGradeFilled.react"), babelHelpers.extends({}, i)) : e_name === m.CHECK ? u.jsx(r("WDSIconIcCheck.react"), babelHelpers.extends({}, i)) : e_name === m.CLOSE ? u.jsx(r("WDSIconIcClose.react"), babelHelpers.extends({}, i)) : e_name == null ? null : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e_name}`);
            })();
            t[1] = e_name;
            t[2] = l;
        } else {
            l = t[2];
        }
        return l;
    }
    l.TagTheme = d;
    l.TagIconName = m;
    l.Tag = _;
}, 98);