__d("BaseCheckbox.react", [
    "BaseFocusRing.react",
    "BaseInput.react",
    "BaseView.react",
    "Locale",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "children",
        "ref",
        "variant",
        "xstyle",
        "indeterminate",
        "suppressFocusRing",
        "testid"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useLayoutEffect, useRef, useState } = d;
    const f = o("Locale").isRTL();
    const g = {
        checkbox: {
            cursor: "x1ypdohk",
            height: "x5yr21d",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            opacity: "x1w3u9th",
            outline: "x1a2a7pz",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            position: "x10l6tqk",
            top: "x13vifvy",
            width: "xh8yej3",
            $$css: true
        },
        icon: {
            paddingTop: "x1nn3v0j",
            paddingInlineEnd: "x14vy60q",
            paddingBottom: "x1120s5i",
            paddingInlineStart: "xyiysdx",
            $$css: true
        },
        inlineFlex: {
            display: "x3nfvp2",
            $$css: true
        },
        labelRTL: {
            transformOrigin: "x1h1bmdg",
            $$css: true
        },
        wrapper: {
            position: "x1n2onr6",
            $$css: true
        }
    };
    function HComponent(t) {
        const i = o("react-compiler-runtime").c(35);
        let l;
        let u;
        let d;
        let h;
        let y;
        let C;
        let b;
        if (i[0] !== t) {
            const { children, ref, variant, xstyle, indeterminate, suppressFocusRing, testid } = t;
            const T = babelHelpers.objectWithoutPropertiesLoose(t, e);
            l = children;
            d = ref;
            C = variant;
            b = xstyle;
            h = indeterminate;
            y = testid;
            u = T;
            i[0] = t;
            i[1] = l;
            i[2] = u;
            i[3] = d;
            i[4] = h;
            i[5] = y;
            i[6] = C;
            i[7] = b;
        } else {
            l = i[1];
            u = i[2];
            d = i[3];
            h = i[4];
            y = i[5];
            C = i[6];
            b = i[7];
        }
        const D = h === undefined ? false : h;
        const xRef = useRef(null);
        const $ = useState(false);
        const P = $[0];
        const onFocusVisibleChange = $[1];
        const M = u.checked ?? false;
        const w = u.disabled ?? false;
        let A;
        let F;
        if (i[8] !== D) {
            A = function() {
                if (xRef.current != null) {
                    xRef.current.indeterminate = D;
                }
            };
            F = [
                D
            ];
            i[8] = D;
            i[9] = A;
            i[10] = F;
        } else {
            A = i[9];
            F = i[10];
        }
        useLayoutEffect(A, F);
        const O = r("useMergeRefs")(d, xRef);
        let B;
        if (i[11] !== M || i[12] !== w || i[13] !== P || i[14] !== C) {
            B = function(t) {
                if (C == null) {
                    return null;
                }
                const L = M ? C.iconChecked : C.iconUnchecked;
                return <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props([
                    g.inlineFlex,
                    C?.xstyleConfig.iconWrapper,
                    M && C?.xstyleConfig.iconCheckedWrapper,
                    P && C?.xstyleConfig.iconFocusedWrapper,
                    w && C?.xstyleConfig.iconDisabledWrapper,
                    w && M && C?.xstyleConfig.iconDisabledCheckedWrapper
                ]), {
                    suppressHydrationWarning: true,
                    children: <div {...babelHelpers.extends({}, s.props([
                        t,
                        g.icon,
                        C.xstyleConfig.icon
                    ]), {
                        suppressHydrationWarning: true,
                        children: L != null && <L height="100%" width="100%"/>
                    })}/>
                })}/>;
            };
            i[11] = M;
            i[12] = w;
            i[13] = P;
            i[14] = C;
            i[15] = B;
        } else {
            B = i[15];
        }
        const W = B;
        let q;
        if (i[16] !== M || i[17] !== l || i[18] !== w || i[19] !== W || i[20] !== D || i[21] !== O || i[22] !== u || i[23] !== y || i[24] !== C || i[25] !== b) {
            q = function(t) {
                const Component = r("BaseView.react");
                return <Component role="none" testid={undefined} xstyle={[
                    g.wrapper,
                    C != null ? C?.xstyleConfig.checkboxWrapper : t,
                    b
                ]}>{W(t)}{C != null ? <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props([
                    g.inlineFlex,
                    C?.xstyleConfig.labelWrapper
                ]), {
                    children: l
                })}/> : l}{c.jsx(r("BaseInput.react"), babelHelpers.extends({}, u, {
                    "aria-checked": D ? "mixed" : M ?? false,
                    ref: O,
                    type: "checkbox",
                    xstyle: [
                        g.checkbox,
                        C?.xstyleConfig.checkbox,
                        w && C?.xstyleConfig.checkboxDisabled
                    ]
                }))}</Component>;
            };
            i[16] = M;
            i[17] = l;
            i[18] = w;
            i[19] = W;
            i[20] = D;
            i[21] = O;
            i[22] = u;
            i[23] = y;
            i[24] = C;
            i[25] = b;
            i[26] = q;
        } else {
            q = i[26];
        }
        const U = q;
        const focusRingPosition = C != null ? "inset" : undefined;
        let H;
        if (i[27] !== U || i[28] !== w || i[29] !== u.id || i[30] !== C) {
            H = function(t) {
                return <>{C != null ? <label {...babelHelpers.extends({}, (s || (s = r("stylex"))).props([
                    f && g.labelRTL,
                    C?.xstyleConfig.label,
                    w === true && C?.xstyleConfig.labelDisabled
                ]), {
                    htmlFor: u.id,
                    suppressHydrationWarning: true,
                    children: U(t)
                })}/> : U(t)}</>;
            };
            i[27] = U;
            i[28] = w;
            i[29] = u.id;
            i[30] = C;
            i[31] = H;
        } else {
            H = i[31];
        }
        let G;
        if (i[32] !== focusRingPosition || i[33] !== H) {
            const Component = r("BaseFocusRing.react");
            G = <Component focusRingPosition={focusRingPosition} onFocusVisibleChange={onFocusVisibleChange}>{H}</Component>;
            i[32] = focusRingPosition;
            i[33] = H;
            i[34] = G;
        } else {
            G = i[34];
        }
        return G;
    }
    l.default = HComponent;
}, 98);