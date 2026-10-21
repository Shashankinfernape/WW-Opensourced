__d("BaseTextInputV2.react", [
    "BaseFocusRing.react",
    "FocusWithinHandler.react",
    "Locale",
    "react",
    "react-compiler-runtime",
    "react-strict-dom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "addOnBottom",
        "addOnEnd",
        "addOnStart",
        "autoCapitalize",
        "autoComplete",
        "autoFocus",
        "content",
        "dir",
        "disabled",
        "focusRingVisibleXStyle",
        "focusRingXStyle",
        "id",
        "inputMode",
        "labelPosition",
        "labelTestId",
        "maxLength",
        "minLength",
        "name",
        "onBlur",
        "onChange",
        "onClick",
        "onFocus",
        "onPaste",
        "onSubmitEditing",
        "onValueChange",
        "placeholder",
        "readOnly",
        "ref",
        "required",
        "role",
        "suppressFocusRing",
        "testid",
        "type",
        "validationState",
        "value",
        "variant",
        "variantColor",
        "label"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useId, useState } = c;
    const p = o("Locale").isRTL();
    const _ = {
        container: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            $$css: true
        },
        content: {
            flexGrow: "x1iyjqo2",
            $$css: true
        }
    };
    function f(t) {
        const a = o("react-compiler-runtime").c(122);
        let i;
        let l;
        let s;
        let c;
        let autoCapitalize_1;
        let autoComplete_1;
        let autoFocus_1;
        let C;
        let b;
        let v;
        let focusVisibleXStyle;
        let R;
        let L;
        let inputMode_1;
        let k;
        let I;
        let T;
        let minLength_1;
        let x;
        let $;
        let P;
        let N;
        let M;
        let onPaste_1;
        let A;
        let F;
        let readOnly_1;
        let B;
        let required_1;
        let q;
        let U;
        let V;
        let H;
        let G;
        let z;
        let j;
        let K;
        if (a[0] !== t) {
            const { addOnBottom, addOnEnd, addOnStart, autoCapitalize, autoComplete, autoFocus, content, dir, disabled, focusRingVisibleXStyle, focusRingXStyle, id, inputMode, labelPosition, labelTestId, maxLength, minLength, name, onBlur, onChange, onClick, onFocus, onPaste, onSubmitEditing, onValueChange, placeholder, readOnly, ref, required, role, suppressFocusRing, testid, type, validationState, value, variant, variantColor, label } = t;
            const Ne = babelHelpers.objectWithoutPropertiesLoose(t, e);
            i = addOnBottom;
            l = addOnEnd;
            s = addOnStart;
            autoCapitalize_1 = autoCapitalize;
            autoComplete_1 = autoComplete;
            autoFocus_1 = autoFocus;
            C = content;
            b = dir;
            v = disabled;
            focusVisibleXStyle = focusRingVisibleXStyle;
            R = focusRingXStyle;
            L = id;
            inputMode_1 = inputMode;
            q = labelPosition;
            I = labelTestId;
            T = maxLength;
            minLength_1 = minLength;
            x = name;
            $ = onBlur;
            P = onChange;
            N = onClick;
            M = onFocus;
            onPaste_1 = onPaste;
            A = onValueChange;
            F = placeholder;
            readOnly_1 = readOnly;
            B = ref;
            required_1 = required;
            U = role;
            V = suppressFocusRing;
            z = testid;
            H = type;
            G = value;
            j = variant;
            K = variantColor;
            k = label;
            c = Ne;
            a[0] = t;
            a[1] = i;
            a[2] = l;
            a[3] = s;
            a[4] = c;
            a[5] = autoCapitalize_1;
            a[6] = autoComplete_1;
            a[7] = autoFocus_1;
            a[8] = C;
            a[9] = b;
            a[10] = v;
            a[11] = focusVisibleXStyle;
            a[12] = R;
            a[13] = L;
            a[14] = inputMode_1;
            a[15] = k;
            a[16] = I;
            a[17] = T;
            a[18] = minLength_1;
            a[19] = x;
            a[20] = $;
            a[21] = P;
            a[22] = N;
            a[23] = M;
            a[24] = onPaste_1;
            a[25] = A;
            a[26] = F;
            a[27] = readOnly_1;
            a[28] = B;
            a[29] = required_1;
            a[30] = q;
            a[31] = U;
            a[32] = V;
            a[33] = H;
            a[34] = G;
            a[35] = z;
            a[36] = j;
            a[37] = K;
        } else {
            i = a[1];
            l = a[2];
            s = a[3];
            c = a[4];
            autoCapitalize_1 = a[5];
            autoComplete_1 = a[6];
            autoFocus_1 = a[7];
            C = a[8];
            b = a[9];
            v = a[10];
            focusVisibleXStyle = a[11];
            R = a[12];
            L = a[13];
            inputMode_1 = a[14];
            k = a[15];
            I = a[16];
            T = a[17];
            minLength_1 = a[18];
            x = a[19];
            $ = a[20];
            P = a[21];
            N = a[22];
            M = a[23];
            onPaste_1 = a[24];
            A = a[25];
            F = a[26];
            readOnly_1 = a[27];
            B = a[28];
            required_1 = a[29];
            q = a[30];
            U = a[31];
            V = a[32];
            H = a[33];
            G = a[34];
            z = a[35];
            j = a[36];
            K = a[37];
        }
        const Me = q === undefined ? "inside" : q;
        const we = U === undefined ? "textbox" : U;
        const Ae = V === undefined ? false : V;
        const Fe = H === undefined ? "text" : H;
        const Oe = G === undefined ? "" : G;
        const j_xstyleConfig = j.xstyleConfig;
        let qe;
        if (a[38] !== K) {
            qe = K ?? {
                xstyleConfig: undefined
            };
            a[38] = K;
            a[39] = qe;
        } else {
            qe = a[39];
        }
        const qe_xstyleConfig = qe.xstyleConfig;
        const He = useId();
        const Ge = useState(false);
        const ze = Ge[0];
        const je = Ge[1];
        const Ke = useState(false);
        const Qe = Ke[0];
        const Xe = Ke[1];
        let Ye;
        if (a[40] !== P || a[41] !== A) {
            Ye = function(t) {
                if (P) {
                    P(t);
                }
                if (A) {
                    A(t.target.value);
                }
            };
            a[40] = P;
            a[41] = A;
            a[42] = Ye;
        } else {
            Ye = a[42];
        }
        const Je = Ye;
        let Ze;
        if (a[43] !== $) {
            Ze = function(t) {
                je(false);
                if ($) {
                    $(t);
                }
            };
            a[43] = $;
            a[44] = Ze;
        } else {
            Ze = a[44];
        }
        const et = Ze;
        let tt;
        if (a[45] !== M) {
            tt = function(t) {
                je(true);
                if (M) {
                    M(t);
                }
            };
            a[45] = M;
            a[46] = tt;
        } else {
            tt = a[46];
        }
        const nt = tt;
        let rt;
        if (a[47] !== qe_xstyleConfig?.label || a[48] !== qe_xstyleConfig?.labelDisabled || a[49] !== qe_xstyleConfig?.labelFilled || a[50] !== qe_xstyleConfig?.labelFocused || a[51] !== qe_xstyleConfig?.labelHovered || a[52] !== v || a[53] !== ze || a[54] !== Qe || a[55] !== L || a[56] !== He || a[57] !== k || a[58] !== I || a[59] !== Oe || a[60] !== j_xstyleConfig.label || a[61] !== j_xstyleConfig.labelDisabled || a[62] !== j_xstyleConfig.labelFilled || a[63] !== j_xstyleConfig.labelFocused || a[64] !== j_xstyleConfig.labelHovered) {
            const Component = o("react-strict-dom").html.label;
            rt = !!k && <Component data-testid={undefined} for={L ?? He} style={[
                [
                    j_xstyleConfig.label,
                    qe_xstyleConfig?.label
                ],
                !!v && [
                    j_xstyleConfig.labelDisabled,
                    qe_xstyleConfig?.labelDisabled
                ],
                ze && [
                    j_xstyleConfig.labelFocused,
                    qe_xstyleConfig?.labelFocused
                ],
                !!Oe && [
                    j_xstyleConfig.labelFilled,
                    qe_xstyleConfig?.labelFilled
                ],
                Qe && [
                    j_xstyleConfig.labelHovered,
                    qe_xstyleConfig?.labelHovered
                ]
            ]}>{k}</Component>;
            a[47] = qe_xstyleConfig?.label;
            a[48] = qe_xstyleConfig?.labelDisabled;
            a[49] = qe_xstyleConfig?.labelFilled;
            a[50] = qe_xstyleConfig?.labelFocused;
            a[51] = qe_xstyleConfig?.labelHovered;
            a[52] = v;
            a[53] = ze;
            a[54] = Qe;
            a[55] = L;
            a[56] = He;
            a[57] = k;
            a[58] = I;
            a[59] = Oe;
            a[60] = j_xstyleConfig.label;
            a[61] = j_xstyleConfig.labelDisabled;
            a[62] = j_xstyleConfig.labelFilled;
            a[63] = j_xstyleConfig.labelFocused;
            a[64] = j_xstyleConfig.labelHovered;
            a[65] = rt;
        } else {
            rt = a[65];
        }
        const ot = rt;
        const at = !Oe && (Me === "inside" && ze || Me === "outside" || k == null) ? F : undefined;
        let it;
        if (a[66] !== i || a[67] !== l || a[68] !== s || a[69] !== c || a[70] !== autoCapitalize_1 || a[71] !== autoComplete_1 || a[72] !== autoFocus_1 || a[73] !== qe_xstyleConfig?.container || a[74] !== qe_xstyleConfig?.containerDisabled || a[75] !== qe_xstyleConfig?.containerFocused || a[76] !== qe_xstyleConfig?.inputDisabled || a[77] !== qe_xstyleConfig?.inputFilled || a[78] !== qe_xstyleConfig?.inputFocused || a[79] !== C || a[80] !== b || a[81] !== v || a[82] !== ze || a[83] !== L || a[84] !== He || a[85] !== inputMode_1 || a[86] !== ot || a[87] !== Me || a[88] !== T || a[89] !== minLength_1 || a[90] !== x || a[91] !== et || a[92] !== Je || a[93] !== N || a[94] !== nt || a[95] !== onPaste_1 || a[96] !== at || a[97] !== readOnly_1 || a[98] !== B || a[99] !== required_1 || a[100] !== we || a[101] !== z || a[102] !== Fe || a[103] !== Oe || a[104] !== j.xstyleConfig?.root || a[105] !== j_xstyleConfig.addOnBottom || a[106] !== j_xstyleConfig.addOnEnd || a[107] !== j_xstyleConfig.addOnStart || a[108] !== j_xstyleConfig.container || a[109] !== j_xstyleConfig.containerDisabled || a[110] !== j_xstyleConfig.containerFocused || a[111] !== j_xstyleConfig.content || a[112] !== j_xstyleConfig.input || a[113] !== j_xstyleConfig.inputDisabled || a[114] !== j_xstyleConfig.inputFilled || a[115] !== j_xstyleConfig.inputFocused) {
            it = function(t) {
                const Component = r("FocusWithinHandler.react");
                const Component_1 = o("react-strict-dom").html.div;
                return <Component_1 style={j.xstyleConfig?.root}>{Me === "outside" && ot}<Component>{function(focusWithin) {
                    const Component = o("react-strict-dom").html.div;
                    const Component_1 = o("react-strict-dom").html.div;
                    return <Component_1 onMouseEnter={function() {
                        return Xe(true);
                    }} onMouseLeave={function() {
                        return Xe(false);
                    }} style={[
                        ze && t,
                        _.container,
                        [
                            j_xstyleConfig.container,
                            qe_xstyleConfig?.container
                        ],
                        !!v && [
                            j_xstyleConfig.containerDisabled,
                            qe_xstyleConfig?.containerDisabled
                        ],
                        ze && [
                            j_xstyleConfig.containerFocused,
                            qe_xstyleConfig?.containerFocused
                        ]
                    ]}>{s != null && <G2Component focusWithin={focusWithin} focused={ze} xstyle={j_xstyleConfig.addOnStart}>{s}</G2Component>}<Component style={[
                        _.content,
                        j_xstyleConfig.content
                    ]}>{Me === "inside" && ot}{u.jsx(o("react-strict-dom").html.input, babelHelpers.extends({
                        role: we
                    }, c, {
                        "aria-disabled": v,
                        autoCapitalize: autoCapitalize_1,
                        autoComplete: autoComplete_1,
                        autoFocus: autoFocus_1,
                        "data-testid": undefined,
                        dir: b ?? (p ? "rtl" : "ltr"),
                        disabled: v,
                        id: L ?? He,
                        inputMode: inputMode_1,
                        maxLength: T,
                        minLength: minLength_1,
                        name: x,
                        onBlur: et,
                        onChange: Je,
                        onClick: N,
                        onFocus: nt,
                        onPaste: onPaste_1,
                        placeholder: at,
                        readOnly: readOnly_1,
                        ref: B,
                        required: required_1,
                        style: [
                            [
                                j_xstyleConfig.input,
                                qe_xstyleConfig?.container
                            ],
                            !!v && [
                                j_xstyleConfig.inputDisabled,
                                qe_xstyleConfig?.inputDisabled
                            ],
                            ze && [
                                j_xstyleConfig.inputFocused,
                                qe_xstyleConfig?.inputFocused
                            ],
                            !!Oe && [
                                j_xstyleConfig.inputFilled,
                                qe_xstyleConfig?.inputFilled
                            ]
                        ],
                        type: Fe,
                        value: Oe
                    }))}{C != null && <G2Component focusWithin={focusWithin} focused={ze}>{C}</G2Component>}</Component>{l != null && <G2Component focusWithin={focusWithin} focused={ze} xstyle={j_xstyleConfig.addOnEnd}>{l}</G2Component>}</Component_1>;
                }}</Component>{i != null && <G2Component focused={ze} xstyle={j_xstyleConfig.addOnBottom}>{i}</G2Component>}</Component_1>;
            };
            a[66] = i;
            a[67] = l;
            a[68] = s;
            a[69] = c;
            a[70] = autoCapitalize_1;
            a[71] = autoComplete_1;
            a[72] = autoFocus_1;
            a[73] = qe_xstyleConfig?.container;
            a[74] = qe_xstyleConfig?.containerDisabled;
            a[75] = qe_xstyleConfig?.containerFocused;
            a[76] = qe_xstyleConfig?.inputDisabled;
            a[77] = qe_xstyleConfig?.inputFilled;
            a[78] = qe_xstyleConfig?.inputFocused;
            a[79] = C;
            a[80] = b;
            a[81] = v;
            a[82] = ze;
            a[83] = L;
            a[84] = He;
            a[85] = inputMode_1;
            a[86] = ot;
            a[87] = Me;
            a[88] = T;
            a[89] = minLength_1;
            a[90] = x;
            a[91] = et;
            a[92] = Je;
            a[93] = N;
            a[94] = nt;
            a[95] = onPaste_1;
            a[96] = at;
            a[97] = readOnly_1;
            a[98] = B;
            a[99] = required_1;
            a[100] = we;
            a[101] = z;
            a[102] = Fe;
            a[103] = Oe;
            a[104] = j.xstyleConfig?.root;
            a[105] = j_xstyleConfig.addOnBottom;
            a[106] = j_xstyleConfig.addOnEnd;
            a[107] = j_xstyleConfig.addOnStart;
            a[108] = j_xstyleConfig.container;
            a[109] = j_xstyleConfig.containerDisabled;
            a[110] = j_xstyleConfig.containerFocused;
            a[111] = j_xstyleConfig.content;
            a[112] = j_xstyleConfig.input;
            a[113] = j_xstyleConfig.inputDisabled;
            a[114] = j_xstyleConfig.inputFilled;
            a[115] = j_xstyleConfig.inputFocused;
            a[116] = it;
        } else {
            it = a[116];
        }
        let st;
        if (a[117] !== focusVisibleXStyle || a[118] !== R || a[119] !== Ae || a[120] !== it) {
            const Component = r("BaseFocusRing.react");
            st = <Component focusVisibleXStyle={focusVisibleXStyle} suppressFocusRing={Ae} xstyle={R}>{it}</Component>;
            a[117] = focusVisibleXStyle;
            a[118] = R;
            a[119] = Ae;
            a[120] = it;
            a[121] = st;
        } else {
            st = a[121];
        }
        return st;
    }
    function G2Component(e) {
        const t = o("react-compiler-runtime").c(7);
        const { children, focused, focusWithin, xstyle } = e;
        const focusWithin_1 = focusWithin === undefined ? false : focusWithin;
        let s;
        if (t[0] !== children || t[1] !== focusWithin_1 || t[2] !== focused) {
            s = typeof children === "function" ? children({
                focusWithin: focusWithin_1,
                state: {
                    focused
                }
            }) : children;
            t[0] = children;
            t[1] = focusWithin_1;
            t[2] = focused;
            t[3] = s;
        } else {
            s = t[3];
        }
        const c = s;
        let d;
        if (t[4] !== c || t[5] !== xstyle) {
            const Component = o("react-strict-dom").html.div;
            d = c != null ? <Component style={xstyle}>{c}</Component> : null;
            t[4] = c;
            t[5] = xstyle;
            t[6] = d;
        } else {
            d = t[6];
        }
        return d;
    }
    l.default = f;
}, 98);