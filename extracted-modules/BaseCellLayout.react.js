__d("BaseCellLayout.react", [
    "react",
    "react-compiler-runtime",
    "react-strict-dom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        children: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            flexGrow: "x1iyjqo2",
            $$css: true
        },
        middleContainer: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            width: "xh8yej3",
            $$css: true
        },
        root: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            $$css: true
        }
    };
    function c(e) {
        const d = o("react-compiler-runtime").c(32);
        const { addOnBottom, addOnEnd, addOnStart, addOnTop, children, testid, variant } = e;
        const C = variant.xstyleConfig?.root;
        let b;
        if (d[0] !== C) {
            b = [
                u.root,
                C
            ];
            d[0] = C;
            d[1] = b;
        } else {
            b = d[1];
        }
        let v;
        if (d[2] !== addOnTop || d[3] !== variant.xstyleConfig?.addOnTop) {
            const Component = o("react-strict-dom").html.div;
            v = !!addOnTop && <Component style={variant.xstyleConfig?.addOnTop}>{addOnTop}</Component>;
            d[2] = addOnTop;
            d[3] = variant.xstyleConfig?.addOnTop;
            d[4] = v;
        } else {
            v = d[4];
        }
        const L = variant.xstyleConfig?.horizontalContainer;
        let E;
        if (d[5] !== L) {
            E = [
                u.middleContainer,
                L
            ];
            d[5] = L;
            d[6] = E;
        } else {
            E = d[6];
        }
        let k;
        if (d[7] !== addOnStart || d[8] !== variant.xstyleConfig?.addOnStart) {
            const Component = o("react-strict-dom").html.div;
            k = !!addOnStart && <Component style={variant.xstyleConfig?.addOnStart}>{addOnStart}</Component>;
            d[7] = addOnStart;
            d[8] = variant.xstyleConfig?.addOnStart;
            d[9] = k;
        } else {
            k = d[9];
        }
        const D = variant.xstyleConfig?.children;
        let x;
        if (d[10] !== D) {
            x = [
                u.children,
                D
            ];
            d[10] = D;
            d[11] = x;
        } else {
            x = d[11];
        }
        let $;
        if (d[12] !== children || d[13] !== x) {
            const Component = o("react-strict-dom").html.div;
            $ = <Component style={x}>{children}</Component>;
            d[12] = children;
            d[13] = x;
            d[14] = $;
        } else {
            $ = d[14];
        }
        let P;
        if (d[15] !== addOnEnd || d[16] !== variant.xstyleConfig?.addOnEnd) {
            const Component = o("react-strict-dom").html.div;
            P = !!addOnEnd && <Component style={variant.xstyleConfig?.addOnEnd}>{addOnEnd}</Component>;
            d[15] = addOnEnd;
            d[16] = variant.xstyleConfig?.addOnEnd;
            d[17] = P;
        } else {
            P = d[17];
        }
        let w;
        if (d[18] !== P || d[19] !== E || d[20] !== k || d[21] !== $) {
            const Component = o("react-strict-dom").html.div;
            w = <Component style={E}>{k}{$}{P}</Component>;
            d[18] = P;
            d[19] = E;
            d[20] = k;
            d[21] = $;
            d[22] = w;
        } else {
            w = d[22];
        }
        let A;
        if (d[23] !== addOnBottom || d[24] !== variant.xstyleConfig?.addOnBottom) {
            const Component = o("react-strict-dom").html.div;
            A = !!addOnBottom && <Component style={variant.xstyleConfig?.addOnBottom}>{addOnBottom}</Component>;
            d[23] = addOnBottom;
            d[24] = variant.xstyleConfig?.addOnBottom;
            d[25] = A;
        } else {
            A = d[25];
        }
        let B;
        if (d[26] !== w || d[27] !== A || d[28] !== b || d[29] !== v || d[30] !== testid) {
            const Component = o("react-strict-dom").html.div;
            B = <Component data-testid={undefined} style={b}>{v}{w}{A}</Component>;
            d[26] = w;
            d[27] = A;
            d[28] = b;
            d[29] = v;
            d[30] = testid;
            d[31] = B;
        } else {
            B = d[31];
        }
        return B;
    }
    l.default = c;
}, 98);