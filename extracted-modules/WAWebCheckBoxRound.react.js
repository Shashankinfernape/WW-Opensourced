__d("WAWebCheckBoxRound.react", [
    "WAWebCheckCircleCropViewBox",
    "WAWebFocusTracer",
    "WAWebVelocityTransitionGroup",
    "WDSFocusStateStyles",
    "WDSIconIcCheckCircleFilled.react",
    "WDSIconIcRadioButtonChecked.react",
    "WDSIconIcRadioButtonUnchecked.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebIsKeyboardUser"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useEffect, useRef, useState } = c;
    const f = {
        container: {
            position: "x1n2onr6",
            display: "x1rg5ohu",
            width: "xw4jnvo",
            height: "x1qx5ct2",
            verticalAlign: "xxymvpz",
            cursor: "x1ypdohk",
            transform: "x916qxe",
            $$css: true
        },
        disabledContainer: {
            cursor: "xt0e3qv",
            opacity: "xbyyjgo",
            $$css: true
        },
        roundIcon: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            width: "xh8yej3",
            height: "x5yr21d",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            $$css: true
        },
        checkedSvgStyle: {
            color: "x1v5yvga",
            $$css: true
        },
        disabledCheckedSvgStyle: {
            color: "x18cpw0e",
            $$css: true
        },
        uncheckedSvgStyle: {
            fillOpacity: "xrmlzy3",
            transitionDuration: "x1g2r6go",
            transitionProperty: "x18sm2im",
            transitionTimingFunction: "xwji4o3",
            $$css: true
        },
        uncheckedSvgHoverStyle: {
            fillOpacity: "xlyfr8p",
            $$css: true
        },
        iconPathFillWhite: {
            color: "x17t9dm2",
            $$css: true
        },
        iconPathFillSecondary: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function g(t) {
        const n = o("react-compiler-runtime").c(37);
        const { ariaLabel, checked, disabled, hover, onClick, radio, systemUncheckedColor, testid } = t;
        const yRef = useRef(null);
        const CRef = useRef(true);
        const b = useState(false);
        const v = b[0];
        const S = b[1];
        let R;
        let L;
        if (n[0] !== checked) {
            R = function() {
                if (CRef.current === false && checked === true) {
                    r("WAWebFocusTracer").focus(yRef.current);
                }
                CRef.current = false;
            };
            L = [
                checked
            ];
            n[0] = checked;
            n[1] = R;
            n[2] = L;
        } else {
            R = n[1];
            L = n[2];
        }
        useEffect(R, L);
        let E;
        if (n[3] !== disabled || n[4] !== onClick) {
            E = function(t) {
                if (disabled !== true) {
                    if (t) {
                        t.stopPropagation();
                    }
                    onClick();
                }
            };
            n[3] = disabled;
            n[4] = onClick;
            n[5] = E;
        } else {
            E = n[5];
        }
        const k = E;
        const I = checked ? "checked" : "unchecked";
        let T;
        if (n[6] !== checked || n[7] !== disabled || n[8] !== v || n[9] !== systemUncheckedColor) {
            T = checked ? [
                f.checkedSvgStyle,
                disabled === true && f.disabledCheckedSvgStyle
            ] : [
                f.uncheckedSvgStyle,
                systemUncheckedColor === true ? f.iconPathFillSecondary : f.iconPathFillWhite,
                v && systemUncheckedColor !== true && f.uncheckedSvgHoverStyle
            ];
            n[6] = checked;
            n[7] = disabled;
            n[8] = v;
            n[9] = systemUncheckedColor;
            n[10] = T;
        } else {
            T = n[10];
        }
        const D = T;
        let x;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            x = function() {
                return S(true);
            };
            n[11] = x;
        } else {
            x = n[11];
        }
        const $ = x;
        let P;
        if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
            P = function() {
                return S(false);
            };
            n[12] = P;
        } else {
            P = n[12];
        }
        const N = P;
        const M = r("useWAWebIsKeyboardUser")();
        const M_isKeyboardUser = M.isKeyboardUser;
        let A;
        if (checked && radio !== true) {
            let F;
            if (n[13] !== D) {
                F = u.jsx(r("WDSIconIcCheckCircleFilled.react"), {
                    iconXstyle: D,
                    height: 20,
                    width: 20,
                    viewBox: o("WAWebCheckCircleCropViewBox").CHECK_CIRCLE_FILLED_CROP_VIEWBOX,
                    testid: "checkbox-round-checked"
                });
                n[13] = D;
                n[14] = F;
            } else {
                F = n[14];
            }
            A = F;
        } else if (!checked && hover) {
            let O;
            if (n[15] !== D) {
                O = u.jsx(r("WDSIconIcRadioButtonUnchecked.react"), {
                    iconXstyle: D,
                    height: 20,
                    width: 20,
                    testid: "checkbox-round-unchecked"
                });
                n[15] = D;
                n[16] = O;
            } else {
                O = n[16];
            }
            A = O;
        } else if (checked) {
            let B;
            if (n[17] !== D) {
                B = u.jsx(r("WDSIconIcRadioButtonChecked.react"), {
                    iconXstyle: D,
                    height: 20,
                    width: 20,
                    testid: "checkbox-round-radio-checked"
                });
                n[17] = D;
                n[18] = B;
            } else {
                B = n[18];
            }
            A = B;
        } else {
            let W;
            if (n[19] !== D) {
                W = u.jsx(r("WDSIconIcRadioButtonUnchecked.react"), {
                    iconXstyle: D,
                    height: 20,
                    width: 20,
                    testid: "checkbox-round-passive"
                });
                n[19] = D;
                n[20] = W;
            } else {
                W = n[20];
            }
            A = W;
        }
        const q = disabled === true && f.disabledContainer;
        let U;
        if (n[21] !== q) {
            U = [
                f.container,
                q
            ];
            n[21] = q;
            n[22] = U;
        } else {
            U = n[22];
        }
        const V = radio === true ? "radio" : "checkbox";
        let H;
        if (n[23] !== M_isKeyboardUser) {
            H = (e || (e = r("stylex"))).props(f.roundIcon, M_isKeyboardUser && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus);
            n[23] = M_isKeyboardUser;
            n[24] = H;
        } else {
            H = n[24];
        }
        const G = ariaLabel || "";
        let z;
        if (n[25] !== checked || n[26] !== k || n[27] !== A || n[28] !== I || n[29] !== H || n[30] !== G || n[31] !== V || n[32] !== testid) {
            z = <button {...babelHelpers.extends({
                ref: yRef,
                role: V
            }, H, {
                "aria-checked": checked,
                "aria-label": G,
                key: I,
                onClick: k,
                onMouseEnter: $,
                onFocus: $,
                onMouseLeave: N,
                onBlur: N,
                "data-testid": testid
            })}>{A}</button>;
            n[25] = checked;
            n[26] = k;
            n[27] = A;
            n[28] = I;
            n[29] = H;
            n[30] = G;
            n[31] = V;
            n[32] = testid;
            n[33] = z;
        } else {
            z = n[33];
        }
        let j;
        if (n[34] !== z || n[35] !== U) {
            const Component = r("WAWebVelocityTransitionGroup");
            j = <Component xstyle={U} transitionName="pop">{z}</Component>;
            n[34] = z;
            n[35] = U;
            n[36] = j;
        } else {
            j = n[36];
        }
        return j;
    }
    l.default = g;
}, 98);