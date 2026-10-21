__d("BaseButtonV3.react", [
    "BaseButtonInternal.react",
    "BaseCellLayout.react",
    "BaseLinkInternal.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "addOnEnd",
        "addOnStart",
        "children",
        "focusable",
        "ref",
        "sizeVariant",
        "testid",
        "variant"
    ];
    const s = [
        "aria-disabled",
        "aria-expanded",
        "aria-haspopup",
        "aria-pressed",
        "dataTab",
        "disabled",
        "download",
        "focused",
        "hovered",
        "href",
        "pressed",
        "referrerPolicy",
        "rel",
        "role",
        "selected",
        "target"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = {
        button: {
            position: "x1n2onr6",
            $$css: true
        },
        link: {
            color: "x1heor9g",
            display: "x1rg5ohu",
            outline: "x1a2a7pz",
            position: "x1n2onr6",
            textDecoration: "x1hl2dhg x1lku1pv",
            $$css: true
        }
    };
    function m(t) {
        const v = o("react-compiler-runtime").c(88);
        let S;
        let R;
        let L;
        let E;
        let k;
        let I;
        let T;
        let D;
        let x;
        if (v[0] !== t) {
            S = t.addOnEnd;
            R = t.addOnStart;
            L = t.children;
            T = t.focusable;
            k = t.ref;
            I = t.sizeVariant;
            D = t.testid;
            x = t.variant;
            E = babelHelpers.objectWithoutPropertiesLoose(t, e);
            v[0] = t;
            v[1] = S;
            v[2] = R;
            v[3] = L;
            v[4] = E;
            v[5] = k;
            v[6] = I;
            v[7] = T;
            v[8] = D;
            v[9] = x;
        } else {
            S = v[1];
            R = v[2];
            L = v[3];
            E = v[4];
            k = v[5];
            I = v[6];
            T = v[7];
            D = v[8];
            x = v[9];
        }
        const $ = T === undefined ? true : T;
        let P;
        let N;
        let M;
        let w;
        let dataTab;
        let F;
        let O;
        let B;
        let W;
        let q;
        let U;
        let V;
        let H;
        let G;
        let z;
        let j;
        let K;
        if (v[10] !== E) {
            const Q = E;
            P = Q["aria-disabled"];
            N = Q["aria-expanded"];
            M = Q["aria-haspopup"];
            w = Q["aria-pressed"];
            dataTab = Q.dataTab;
            F = Q.disabled;
            O = Q.download;
            B = Q.focused;
            W = Q.hovered;
            q = Q.href;
            U = Q.pressed;
            V = Q.referrerPolicy;
            H = Q.rel;
            z = Q.role;
            j = Q.selected;
            K = Q.target;
            G = babelHelpers.objectWithoutPropertiesLoose(Q, s);
            v[10] = E;
            v[11] = P;
            v[12] = N;
            v[13] = M;
            v[14] = w;
            v[15] = dataTab;
            v[16] = F;
            v[17] = O;
            v[18] = B;
            v[19] = W;
            v[20] = q;
            v[21] = U;
            v[22] = V;
            v[23] = H;
            v[24] = G;
            v[25] = z;
            v[26] = j;
            v[27] = K;
        } else {
            P = v[11];
            N = v[12];
            M = v[13];
            w = v[14];
            dataTab = v[15];
            F = v[16];
            O = v[17];
            B = v[18];
            W = v[19];
            q = v[20];
            U = v[21];
            V = v[22];
            H = v[23];
            G = v[24];
            z = v[25];
            j = v[26];
            K = v[27];
        }
        const X = $ !== true || F === true ? -1 : 0;
        const Y = I?.xstyleConfig.item;
        const J = I?.xstyleConfig.addOnEnd;
        let Z;
        if (v[28] !== Y || v[29] !== J || v[30] !== x.xstyleConfig.addOnEnd) {
            Z = [
                x.xstyleConfig.addOnEnd,
                Y,
                J
            ];
            v[28] = Y;
            v[29] = J;
            v[30] = x.xstyleConfig.addOnEnd;
            v[31] = Z;
        } else {
            Z = v[31];
        }
        const ee = I?.xstyleConfig.item;
        const te = I?.xstyleConfig.addOnStart;
        let ne;
        if (v[32] !== ee || v[33] !== te || v[34] !== x.xstyleConfig.addOnStart) {
            ne = [
                x.xstyleConfig.addOnStart,
                ee,
                te
            ];
            v[32] = ee;
            v[33] = te;
            v[34] = x.xstyleConfig.addOnStart;
            v[35] = ne;
        } else {
            ne = v[35];
        }
        const re = I?.xstyleConfig.item;
        const oe = I?.xstyleConfig.children;
        let ae;
        if (v[36] !== re || v[37] !== oe) {
            ae = [
                re,
                oe
            ];
            v[36] = re;
            v[37] = oe;
            v[38] = ae;
        } else {
            ae = v[38];
        }
        const horizontalContainer = I?.xstyleConfig.horizontalContainer;
        let le;
        if (v[39] !== ae || v[40] !== horizontalContainer || v[41] !== Z || v[42] !== ne) {
            le = {
                xstyleConfig: {
                    addOnEnd: Z,
                    addOnStart: ne,
                    children: ae,
                    horizontalContainer
                }
            };
            v[39] = ae;
            v[40] = horizontalContainer;
            v[41] = Z;
            v[42] = ne;
            v[43] = le;
        } else {
            le = v[43];
        }
        const variant = le;
        const ue = x.xstyleConfig?.pressable;
        const ce = I?.xstyleConfig.width;
        const de = I?.xstyleConfig.content;
        const me = !!F && x.xstyleConfig?.pressableDisabled;
        let pe;
        if (v[44] !== B || v[45] !== x.xstyleConfig.pressableFocused) {
            pe = !!B && [
                x.xstyleConfig?.pressableFocused
            ];
            v[44] = B;
            v[45] = x.xstyleConfig.pressableFocused;
            v[46] = pe;
        } else {
            pe = v[46];
        }
        let fe;
        if (v[47] !== W || v[48] !== I?.xstyleConfig || v[49] !== x.xstyleConfig.pressableHovered) {
            fe = !!W && [
                I?.xstyleConfig.hovered,
                x.xstyleConfig?.pressableHovered
            ];
            v[47] = W;
            v[48] = I?.xstyleConfig;
            v[49] = x.xstyleConfig.pressableHovered;
            v[50] = fe;
        } else {
            fe = v[50];
        }
        let Ce;
        if (v[51] !== U || v[52] !== I?.xstyleConfig || v[53] !== x.xstyleConfig.pressablePressed) {
            Ce = !!U && [
                x.xstyleConfig?.pressablePressed,
                I?.xstyleConfig.pressed
            ];
            v[51] = U;
            v[52] = I?.xstyleConfig;
            v[53] = x.xstyleConfig.pressablePressed;
            v[54] = Ce;
        } else {
            Ce = v[54];
        }
        const Re = !!j && x.xstyleConfig?.pressableSelected;
        let Le;
        if (v[55] !== ue || v[56] !== ce || v[57] !== de || v[58] !== me || v[59] !== pe || v[60] !== fe || v[61] !== Ce || v[62] !== Re) {
            Le = [
                ue,
                ce,
                de,
                me,
                pe,
                fe,
                Ce,
                Re
            ];
            v[55] = ue;
            v[56] = ce;
            v[57] = de;
            v[58] = me;
            v[59] = pe;
            v[60] = fe;
            v[61] = Ce;
            v[62] = Re;
            v[63] = Le;
        } else {
            Le = v[63];
        }
        const Ee = Le;
        let ke;
        if (v[64] !== S || v[65] !== R || v[66] !== variant || v[67] !== L) {
            const Component = r("BaseCellLayout.react");
            ke = <Component addOnEnd={S} addOnStart={R} variant={variant}>{L}</Component>;
            v[64] = S;
            v[65] = R;
            v[66] = variant;
            v[67] = L;
            v[68] = ke;
        } else {
            ke = v[68];
        }
        const Ie = ke;
        let Te;
        if (v[69] !== P || v[70] !== N || v[71] !== M || v[72] !== w || v[73] !== X || v[74] !== Ie || v[75] !== dataTab || v[76] !== F || v[77] !== O || v[78] !== q || v[79] !== k || v[80] !== V || v[81] !== H || v[82] !== G || v[83] !== z || v[84] !== Ee || v[85] !== K || v[86] !== D) {
            Te = q == null || q != null && F === true ? c.jsx(r("BaseButtonInternal.react"), babelHelpers.extends({}, G, {
                "aria-disabled": P ?? F,
                "aria-expanded": N,
                "aria-haspopup": M,
                "aria-pressed": w,
                disabled: F,
                ref: k,
                role: z,
                style: [
                    d.button,
                    Ee
                ],
                tabIndex: X,
                testid: undefined,
                children: Ie
            })) : c.jsx(r("BaseLinkInternal.react"), babelHelpers.extends({}, G, {
                dataTab,
                download: O,
                href: q,
                ref: k,
                referrerPolicy: V,
                rel: H,
                style: [
                    d.link,
                    Ee
                ],
                tabIndex: X,
                target: K,
                testid: undefined,
                children: Ie
            }));
            v[69] = P;
            v[70] = N;
            v[71] = M;
            v[72] = w;
            v[73] = X;
            v[74] = Ie;
            v[75] = dataTab;
            v[76] = F;
            v[77] = O;
            v[78] = q;
            v[79] = k;
            v[80] = V;
            v[81] = H;
            v[82] = G;
            v[83] = z;
            v[84] = Ee;
            v[85] = K;
            v[86] = D;
            v[87] = Te;
        } else {
            Te = v[87];
        }
        return Te;
    }
    l.default = m;
}, 98);