__d("WAWebBox.react", [
    "WAWebFlexStyles",
    "WAWebStructureStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebHandlerProps"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "disabled"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        ellipsis: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            whiteSpace: "xuxw1ft",
            textOverflow: "xlyipyv",
            $$css: true
        },
        nowrap: {
            whiteSpace: "xuxw1ft",
            $$css: true
        },
        wrap: {
            whiteSpace: "x126k92a",
            $$css: true
        },
        initial: {
            whiteSpace: "xti2ec1",
            $$css: true
        }
    };
    function p(e) {
        return {
            "aria-label": e.ariaLabel,
            "aria-pressed": e.ariaPressed,
            "aria-checked": e.ariaChecked
        };
    }
    function _(t) {
        const n = o("react-compiler-runtime").c(26);
        const a = t.ref;
        const i = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const { as: l, children: c, dir: _, labelFor: f, style: g, testid: h, textWrap: y, title: C, xstyle: b } = i;
        const V = l === void 0 ? "div" : l;
        const S = o("WAWebFlexStyles").getFlexStyles(i);
        const R = o("WAWebStructureStyles").getStructureStyles(i);
        const L = p(i);
        const E = o("useWAWebHandlerProps").useHandlerProps(i);
        const k = E.disabled;
        const I = babelHelpers.objectWithoutPropertiesLoose(E, s);
        const T = (u || (u = r("stylex")))([
            S.xstyle,
            R,
            y != null && m[y],
            b
        ]);
        let D;
        if (n[0] !== S.inline || n[1] !== g) {
            D = babelHelpers.extends({}, g, S.inline);
            n[0] = S.inline;
            n[1] = g;
            n[2] = D;
        } else {
            D = n[2];
        }
        let x;
        if (n[3] !== L || n[4] !== _ || n[5] !== I || n[6] !== T || n[7] !== D || n[8] !== h || n[9] !== C) {
            x = babelHelpers.extends({
                className: T,
                style: D,
                dir: _,
                title: C,
                "data-testid": h
            }, L, I);
            n[3] = L;
            n[4] = _;
            n[5] = I;
            n[6] = T;
            n[7] = D;
            n[8] = h;
            n[9] = C;
            n[10] = x;
        } else {
            x = n[10];
        }
        const $ = x;
        if (V === "label") {
            let P;
            if (n[11] !== c || n[12] !== $ || n[13] !== f || n[14] !== a) {
                P = <label {...babelHelpers.extends({
                    ref: a,
                    htmlFor: f
                }, $, {
                    children: c
                })}/>;
                n[11] = c;
                n[12] = $;
                n[13] = f;
                n[14] = a;
                n[15] = P;
            } else {
                P = n[15];
            }
            return P;
        }
        if (V === "fieldset") {
            let N;
            if (n[16] !== c || n[17] !== k || n[18] !== $ || n[19] !== a) {
                N = <fieldset {...babelHelpers.extends({
                    ref: a,
                    disabled: k
                }, $, {
                    children: c
                })}/>;
                n[16] = c;
                n[17] = k;
                n[18] = $;
                n[19] = a;
                n[20] = N;
            } else {
                N = n[20];
            }
            return N;
        }
        let M;
        if (n[21] !== V || n[22] !== c || n[23] !== $ || n[24] !== a) {
            M = <V {...babelHelpers.extends({
                ref: a
            }, $, {
                children: c
            })}/>;
            n[21] = V;
            n[22] = c;
            n[23] = $;
            n[24] = a;
            n[25] = M;
        } else {
            M = n[25];
        }
        return M;
    }
    l.default = _;
}, 98);