__d("WAWebLinkDevicePhoneNumberCodeCells.react", [
    "WAWebFlex.react",
    "WDSMargins.stylex",
    "WDSThemes",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        paddingBlock13: {
            paddingTop: "x1d0ri9u",
            paddingBottom: "x1ug4tga",
            $$css: true
        }
    };
    const c = {
        codeCellWrapper: {
            display: "x78zum5",
            width: "x10h3iyq",
            backgroundColor: "x12peec7",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xjy2p9t",
            borderInlineEndColor: "x1fx38ez",
            borderBottomColor: "x1btvpib",
            borderInlineStartColor: "x1mpe3fn",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(26);
        const { "aria-details": n, code: r } = e;
        let a;
        let i;
        let l;
        let u;
        let c;
        let d;
        let _;
        let f;
        let g;
        let h;
        if (t[0] !== n || t[1] !== r) {
            const y = String(r).split("");
            const C = y.slice(0, 4);
            const b = y.slice(4);
            f = n;
            g = "link-with-phone-number-code-cells";
            h = y.join(",");
            a = o("WAWebFlex.react").FlexRow;
            i = "center";
            l = "center";
            u = o("WDSThemes").WDSLightTheme;
            c = C.map(p);
            if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
                d = <span className="x2b8uid xk50ysn x579bpy x1pha01r xyqdw3p x1im30kd xg8j3zb x1djpfga" aria-hidden="true">-</span>;
                t[12] = d;
            } else {
                d = t[12];
            }
            _ = b.map(m);
            t[0] = n;
            t[1] = r;
            t[2] = a;
            t[3] = i;
            t[4] = l;
            t[5] = u;
            t[6] = c;
            t[7] = d;
            t[8] = _;
            t[9] = f;
            t[10] = g;
            t[11] = h;
        } else {
            a = t[2];
            i = t[3];
            l = t[4];
            u = t[5];
            c = t[6];
            d = t[7];
            _ = t[8];
            f = t[9];
            g = t[10];
            h = t[11];
        }
        let v;
        if (t[13] !== a || t[14] !== i || t[15] !== l || t[16] !== u || t[17] !== c || t[18] !== d || t[19] !== _) {
            v = s.jsxs(a, {
                align: i,
                justify: l,
                xstyle: u,
                children: [
                    c,
                    d,
                    _
                ]
            });
            t[13] = a;
            t[14] = i;
            t[15] = l;
            t[16] = u;
            t[17] = c;
            t[18] = d;
            t[19] = _;
            t[20] = v;
        } else {
            v = t[20];
        }
        let S;
        if (t[21] !== v || t[22] !== f || t[23] !== g || t[24] !== h) {
            S = <div aria-details={f} data-testid={g} data-link-code={h}>{v}</div>;
            t[21] = v;
            t[22] = f;
            t[23] = g;
            t[24] = h;
            t[25] = S;
        } else {
            S = t[25];
        }
        return S;
    }
    function m(e, t) {
        return <_ key={`${t + 4}:${e}`} content={e}/>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p(e, t) {
        return <_ key={`${t}:${e}`} content={e}/>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(e) {
        const t = o("react-compiler-runtime").c(4);
        const n = e.content;
        let r;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                c.codeCellWrapper,
                o("WDSMargins.stylex").wdsMargins.marginHor4,
                u.paddingBlock13
            ];
            a = {
                className: "x2b8uid xk50ysn x1aueamr x1jzgpr8 x1pha01r"
            };
            t[0] = r;
            t[1] = a;
        } else {
            r = t[0];
            a = t[1];
        }
        let i;
        if (t[2] !== n) {
            const Component = o("WAWebFlex.react").FlexRow;
            i = <Component align="center" justify="center" xstyle={r}><span {...babelHelpers.extends({}, a, {
                children: n
            })}/></Component>;
            t[2] = n;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    l.default = d;
}, 98);