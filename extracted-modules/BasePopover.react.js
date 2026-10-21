__d("BasePopover.react", [
    "dangerouslyCoerceAriaLabelPlaceholder",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
    "testID"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref",
        "aria-describedby",
        "aria-label",
        "aria-labelledby",
        "arrowAlignment",
        "arrowFill",
        "arrowImpl",
        "id",
        "role",
        "testid",
        "xstyle"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = {
        root: {
            position: "x1n2onr6",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(41);
        let a;
        let i;
        let l;
        let s;
        let arrowFill;
        let m;
        let p;
        let _;
        let f;
        let g;
        let h;
        let y;
        if (n[0] !== t) {
            _ = t.ref;
            i = t["aria-describedby"];
            l = t["aria-label"];
            s = t["aria-labelledby"];
            f = t.arrowAlignment;
            arrowFill = t.arrowFill;
            a = t.arrowImpl;
            m = t.id;
            g = t.role;
            h = t.testid;
            y = t.xstyle;
            p = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
            n[3] = l;
            n[4] = s;
            n[5] = arrowFill;
            n[6] = m;
            n[7] = p;
            n[8] = _;
            n[9] = f;
            n[10] = g;
            n[11] = h;
            n[12] = y;
        } else {
            a = n[1];
            i = n[2];
            l = n[3];
            s = n[4];
            arrowFill = n[5];
            m = n[6];
            p = n[7];
            _ = n[8];
            f = n[9];
            g = n[10];
            h = n[11];
            y = n[12];
        }
        const C = f === undefined ? "center" : f;
        const b = g === undefined ? "dialog" : g;
        if (a) {
            let v;
            if (n[13] !== a || n[14] !== i || n[15] !== l || n[16] !== s || n[17] !== C || n[18] !== arrowFill || n[19] !== m || n[20] !== p || n[21] !== _ || n[22] !== b || n[23] !== h || n[24] !== y) {
                v = u.jsx(a, babelHelpers.extends({
                    "aria-describedby": i,
                    "aria-label": l,
                    "aria-labelledby": s,
                    arrowAlignment: C,
                    arrowFill,
                    id: m,
                    ref: _,
                    role: b,
                    testid: undefined,
                    xstyle: y
                }, p));
                n[13] = a;
                n[14] = i;
                n[15] = l;
                n[16] = s;
                n[17] = C;
                n[18] = arrowFill;
                n[19] = m;
                n[20] = p;
                n[21] = _;
                n[22] = b;
                n[23] = h;
                n[24] = y;
                n[25] = v;
            } else {
                v = n[25];
            }
            return v;
        }
        let S;
        if (n[26] !== l) {
            S = r("dangerouslyCoerceAriaLabelPlaceholder")(l);
            n[26] = l;
            n[27] = S;
        } else {
            S = n[27];
        }
        let R;
        if (n[28] !== y) {
            R = [
                c.root,
                y
            ];
            n[28] = y;
            n[29] = R;
        } else {
            R = n[29];
        }
        let L;
        if (n[30] !== h) {
            L = r("testID")(h);
            n[30] = h;
            n[31] = L;
        } else {
            L = n[31];
        }
        let E;
        if (n[32] !== s || n[33] !== m || n[34] !== p || n[35] !== _ || n[36] !== b || n[37] !== S || n[38] !== R || n[39] !== L) {
            E = u.jsx(o("react-strict-dom").html.div, babelHelpers.extends({
                "aria-label": S,
                "aria-labelledby": s,
                id: m,
                ref: _,
                role: b,
                style: R
            }, L, p));
            n[32] = s;
            n[33] = m;
            n[34] = p;
            n[35] = _;
            n[36] = b;
            n[37] = S;
            n[38] = R;
            n[39] = L;
            n[40] = E;
        } else {
            E = n[40];
        }
        return E;
    }
    l.default = d;
}, 98);