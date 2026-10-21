__d("WAWebCellMenuItem.react", [
    "WAWebCellV2.react",
    "WAWebMenuItem.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "border",
        "children",
        "colorScheme",
        "detailLeft",
        "detailRight",
        "disabled",
        "forceActive",
        "isRefresh",
        "middleContainerXStyle",
        "onMouseDown",
        "onMouseEnter",
        "onMouseLeave",
        "optionId",
        "primary",
        "primaryRight",
        "secondary",
        "secondaryRight",
        "showFocusOutline",
        "size",
        "textWrap"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useState } = d;
    function _(t) {
        const n = o("react-compiler-runtime").c(62);
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
        let l;
        let u;
        let detailLeft;
        let detailRight;
        let f;
        let g;
        let isRefresh;
        let y;
        let C;
        let b;
        let v;
        let optionId;
        let R;
        let primaryRight;
        let E;
        let k;
        let I;
        let T;
        let secondaryRight;
        let x;
        let $;
        if (n[3] !== a) {
            const P = a;
            E = P.border;
            u = P.children;
            k = P.colorScheme;
            detailLeft = P.detailLeft;
            detailRight = P.detailRight;
            f = P.disabled;
            g = P.forceActive;
            isRefresh = P.isRefresh;
            C = P.middleContainerXStyle;
            l = P.onMouseDown;
            b = P.onMouseEnter;
            v = P.onMouseLeave;
            optionId = P.optionId;
            R = P.primary;
            primaryRight = P.primaryRight;
            T = P.secondary;
            secondaryRight = P.secondaryRight;
            x = P.showFocusOutline;
            I = P.size;
            $ = P.textWrap;
            y = babelHelpers.objectWithoutPropertiesLoose(P, s);
            n[3] = a;
            n[4] = l;
            n[5] = u;
            n[6] = detailLeft;
            n[7] = detailRight;
            n[8] = f;
            n[9] = g;
            n[10] = isRefresh;
            n[11] = y;
            n[12] = C;
            n[13] = b;
            n[14] = v;
            n[15] = optionId;
            n[16] = R;
            n[17] = primaryRight;
            n[18] = E;
            n[19] = k;
            n[20] = I;
            n[21] = T;
            n[22] = secondaryRight;
            n[23] = x;
            n[24] = $;
        } else {
            l = n[4];
            u = n[5];
            detailLeft = n[6];
            detailRight = n[7];
            f = n[8];
            g = n[9];
            isRefresh = n[10];
            y = n[11];
            C = n[12];
            b = n[13];
            v = n[14];
            optionId = n[15];
            R = n[16];
            primaryRight = n[17];
            E = n[18];
            k = n[19];
            I = n[20];
            T = n[21];
            secondaryRight = n[22];
            x = n[23];
            $ = n[24];
        }
        const N = x === undefined ? true : x;
        const M = $ === undefined ? "ellipsis" : $;
        const w = useState(false);
        const A = w[0];
        const F = w[1];
        const O = o("WAWebMenuItem.react").useMenuItem(optionId);
        const { border, colorScheme, isActive, material, size } = O;
        let H;
        let G;
        if (n[25] !== A) {
            H = function() {
                if (A) {
                    const e = function() {
                        return F(false);
                    };
                    document.addEventListener("mouseup", e);
                    return function() {
                        return document.removeEventListener("mouseup", e);
                    };
                }
            };
            G = [
                A
            ];
            n[25] = A;
            n[26] = H;
            n[27] = G;
        } else {
            H = n[26];
            G = n[27];
        }
        useEffect(H, G);
        const colorScheme_1 = k ?? colorScheme;
        let primary;
        if (R != null) {
            const K = M === "ellipsis" ? 1 : null;
            let Q;
            if (n[28] !== R || n[29] !== K) {
                const Component = r("WDSText.react");
                Q = <Component type="Body1" colorName="contentDefault" maxLines={K}>{R}</Component>;
                n[28] = R;
                n[29] = K;
                n[30] = Q;
            } else {
                Q = n[30];
            }
            primary = Q;
        }
        let X;
        if (T != null) {
            const Y = M === "ellipsis" ? 1 : null;
            let J;
            if (n[31] !== T || n[32] !== Y) {
                const Component = r("WDSText.react");
                J = <Component type="Body2" colorName="contentDeemphasized" maxLines={Y}>{T}</Component>;
                n[31] = T;
                n[32] = Y;
                n[33] = J;
            } else {
                J = n[33];
            }
            X = J;
        }
        let Z;
        if (n[34] !== l) {
            Z = function() {
                F(true);
                l?.();
            };
            n[34] = l;
            n[35] = Z;
        } else {
            Z = n[35];
        }
        const ee = Z;
        const isFocusedViaKeyboard = N && isActive && !A;
        const ne = I ?? size;
        const re = g === true || isActive;
        const border_1 = E || border;
        let ae;
        if (n[36] !== detailLeft || n[37] !== detailRight || n[38] !== f || n[39] !== colorScheme_1 || n[40] !== isFocusedViaKeyboard || n[41] !== isRefresh || n[42] !== material || n[43] !== C || n[44] !== b || n[45] !== v || n[46] !== primary || n[47] !== primaryRight || n[48] !== X || n[49] !== secondaryRight || n[50] !== ne || n[51] !== re || n[52] !== border_1) {
            const Component = r("WAWebCellV2.react");
            ae = <Component middleContainerXStyle={C} onMouseEnter={b} onMouseLeave={v} size={ne} colorScheme={colorScheme_1} material={material} disabled={f} primary={primary} primaryRight={primaryRight} secondary={X} secondaryRight={secondaryRight} detailLeft={detailLeft} detailRight={detailRight} active={re} tabIndex={-1} border={border_1} isRefresh={isRefresh} isFocusedViaKeyboard={isFocusedViaKeyboard}/>;
            n[36] = detailLeft;
            n[37] = detailRight;
            n[38] = f;
            n[39] = colorScheme_1;
            n[40] = isFocusedViaKeyboard;
            n[41] = isRefresh;
            n[42] = material;
            n[43] = C;
            n[44] = b;
            n[45] = v;
            n[46] = primary;
            n[47] = primaryRight;
            n[48] = X;
            n[49] = secondaryRight;
            n[50] = ne;
            n[51] = re;
            n[52] = border_1;
            n[53] = ae;
        } else {
            ae = n[53];
        }
        let ie;
        if (n[54] !== u || n[55] !== f || n[56] !== ee || n[57] !== y || n[58] !== optionId || n[59] !== i || n[60] !== ae) {
            ie = c.jsxs(o("WAWebMenuItem.react").WAWebMenuItem, babelHelpers.extends({
                optionId,
                type: "action"
            }, y, {
                onMouseDown: ee,
                disabled: f,
                ref: i,
                children: [
                    ae,
                    u
                ]
            }));
            n[54] = u;
            n[55] = f;
            n[56] = ee;
            n[57] = y;
            n[58] = optionId;
            n[59] = i;
            n[60] = ae;
            n[61] = ie;
        } else {
            ie = n[61];
        }
        return ie;
    }
    l.CellV2MenuItem = _;
}, 98);