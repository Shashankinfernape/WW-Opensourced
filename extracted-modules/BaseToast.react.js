__d("BaseToast.react", [
    "BaseInlinePressable.react",
    "BaseToastContentWrapper.react",
    "BaseView.react",
    "XPlatReactFocusRegion.react",
    "basePushToast",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useId, useMemo } = u;
    const m = {
        item: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            paddingBottom: "x19yoh24",
            paddingInlineStart: "xa6w9w1",
            paddingInlineEnd: "x7jv1k3",
            paddingLeft: null,
            paddingRight: null,
            paddingTop: "x6enp1t",
            $$css: true
        },
        itemText: {
            flexGrow: "x1iyjqo2",
            $$css: true
        },
        link: {
            wordBreak: "xdnwjd9",
            $$css: true
        },
        root: {
            alignItems: "x6s0dn4",
            backgroundColor: "x1wkzo03",
            borderTopColor: "xlnzwam",
            borderInlineEndColor: "xuc4ihs",
            borderBottomColor: "xm9qwu6",
            borderInlineStartColor: "x38i1re",
            borderStartStartRadius: "x1ghonvh",
            borderStartEndRadius: "x1c2sbsd",
            borderEndEndRadius: "x8tb1rc",
            borderEndStartRadius: "x609f4j",
            borderTopStyle: "xhf2mca",
            borderInlineEndStyle: "xaau5u0",
            borderBottomStyle: "x13y0ya8",
            borderInlineStartStyle: "xv6865q",
            borderTopWidth: "xmqxc35",
            borderInlineEndWidth: "x1a32di2",
            borderBottomWidth: "x21fg80",
            borderInlineStartWidth: "xyi7q43",
            boxShadow: "xi1c1fh",
            display: "x78zum5",
            flexShrink: "x2lah0s",
            maxWidth: "x1cs6qxi",
            minWidth: "x1hqenl9",
            paddingTop: "x192rfv7",
            paddingBottom: "x13jxccy",
            paddingInlineStart: "x1rcnc7e",
            paddingInlineEnd: "x1e7pf15",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        rootDense: {
            minWidth: "xktpd3l",
            $$css: true
        },
        rootFullWidth: {
            width: "xh8yej3",
            $$css: true
        },
        toastContentDefaultLayout: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            flexGrow: "x1iyjqo2",
            $$css: true
        },
        toastContentVerticalLayout: {
            alignItems: "x1cy8zhl",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            flexGrow: "x1iyjqo2",
            $$css: true
        }
    };
    function p(e) {
        const u = o("react-compiler-runtime").c(53);
        const { action, addOnStart, canBeAutofocused, closeButton, density, linkWrapper, message, offsetStyles, onDismiss, size, testid, themeConfigOverride, toastRef, useInvertedDisplayMode, useVerticalLayout, variant } = e;
        const D = canBeAutofocused === undefined ? true : canBeAutofocused;
        const x = size === undefined ? "full-width" : size;
        const useInvertedDisplayMode_1 = useInvertedDisplayMode === undefined ? true : useInvertedDisplayMode;
        const P = useVerticalLayout === undefined ? false : useVerticalLayout;
        const toastMessageId = useId();
        let M;
        e: {
            if (action != null) {
                let w;
                if (u[0] === Symbol.for("react.memo_cache_sentinel")) {
                    w = {};
                    u[0] = w;
                } else {
                    w = u[0];
                }
                M = w;
                break e;
            }
            let A;
            if (u[1] === Symbol.for("react.memo_cache_sentinel")) {
                A = {
                    "aria-atomic": true,
                    role: "alert"
                };
                u[1] = A;
            } else {
                A = u[1];
            }
            M = A;
        }
        const F = M;
        let O;
        if (u[2] !== action || u[3] !== onDismiss || u[4] !== variant?.xstyleConfig?.item) {
            const Component = r("BaseInlinePressable.react");
            const Component_1 = r("BaseView.react");
            O = action != null ? <Component_1 xstyle={[
                m.item,
                variant?.xstyleConfig?.item
            ]}>{action.element ?? (action.labelRenderer && <Component onPress={function(t) {
                onDismiss();
                action.onPress(t);
            }} testid={undefined} xstyle={m.link}>{action.labelRenderer(action.label)}</Component>)}</Component_1> : null;
            u[2] = action;
            u[3] = onDismiss;
            u[4] = variant?.xstyleConfig?.item;
            u[5] = O;
        } else {
            O = u[5];
        }
        const q = O;
        let U;
        if (u[6] !== addOnStart || u[7] !== variant?.xstyleConfig?.item) {
            const Component = r("BaseView.react");
            U = addOnStart != null && <Component xstyle={[
                m.item,
                variant?.xstyleConfig?.item
            ]}>{addOnStart}</Component>;
            u[6] = addOnStart;
            u[7] = variant?.xstyleConfig?.item;
            u[8] = U;
        } else {
            U = u[8];
        }
        const G = x === "full-width" && m.rootFullWidth;
        const z = density === "dense" && m.rootDense;
        const j = P ? m.toastContentVerticalLayout : m.toastContentDefaultLayout;
        let K;
        if (u[9] !== j || u[10] !== G || u[11] !== z) {
            K = [
                G,
                z,
                j
            ];
            u[9] = j;
            u[10] = G;
            u[11] = z;
            u[12] = K;
        } else {
            K = u[12];
        }
        const Q = variant?.xstyleConfig?.item;
        let X;
        if (u[13] !== Q) {
            X = [
                m.item,
                m.itemText,
                Q
            ];
            u[13] = Q;
            u[14] = X;
        } else {
            X = u[14];
        }
        let Y;
        if (u[15] !== message || u[16] !== toastMessageId) {
            Y = message({
                toastMessageId
            });
            u[15] = message;
            u[16] = toastMessageId;
            u[17] = Y;
        } else {
            Y = u[17];
        }
        let J;
        if (u[18] !== F || u[19] !== X || u[20] !== Y) {
            J = s.jsx(r("BaseView.react"), babelHelpers.extends({
                xstyle: X
            }, F, {
                children: Y
            }));
            u[18] = F;
            u[19] = X;
            u[20] = Y;
            u[21] = J;
        } else {
            J = u[21];
        }
        let Z;
        if (u[22] !== q || u[23] !== D) {
            const Component = r("XPlatReactFocusRegion.react");
            Z = q != null && (o("basePushToast").passesNewToastAPIGK() ? q : <Component autoFocusQuery={D ? o("focusScopeQueries").tabbableScopeQuery : _}>{q}</Component>);
            u[22] = q;
            u[23] = D;
            u[24] = Z;
        } else {
            Z = u[24];
        }
        let ee;
        if (u[25] !== K || u[26] !== J || u[27] !== Z) {
            const Component = r("BaseView.react");
            ee = <Component xstyle={K}>{J}{Z}</Component>;
            u[25] = K;
            u[26] = J;
            u[27] = Z;
            u[28] = ee;
        } else {
            ee = u[28];
        }
        let te;
        if (u[29] !== closeButton || u[30] !== variant?.xstyleConfig?.item) {
            const Component = r("BaseView.react");
            te = !!closeButton && <Component xstyle={[
                m.item,
                variant?.xstyleConfig?.item
            ]}>{closeButton}</Component>;
            u[29] = closeButton;
            u[30] = variant?.xstyleConfig?.item;
            u[31] = te;
        } else {
            te = u[31];
        }
        let oe;
        if (u[32] !== ee || u[33] !== te || u[34] !== U) {
            oe = <>{U}{ee}{te}</>;
            u[32] = ee;
            u[33] = te;
            u[34] = U;
            u[35] = oe;
        } else {
            oe = u[35];
        }
        let ae = oe;
        let ie;
        if (u[36] !== linkWrapper || u[37] !== ae) {
            ie = linkWrapper != null ? linkWrapper(ae) : ae;
            u[36] = linkWrapper;
            u[37] = ae;
            u[38] = ie;
        } else {
            ie = u[38];
        }
        ae = ie;
        const ariaLabelledBy = action != null && o("basePushToast").passesNewToastAPIGK ? toastMessageId : undefined;
        const se = o("basePushToast").passesNewToastAPIGK() && (action != null || closeButton) ? "dialog" : undefined;
        const ue = x === "full-width" && m.rootFullWidth;
        const ce = density === "dense" && m.rootDense;
        const de = variant?.xstyleConfig?.container;
        let me;
        if (u[39] !== offsetStyles || u[40] !== ue || u[41] !== ce || u[42] !== de) {
            me = [
                m.root,
                ue,
                ce,
                offsetStyles,
                de
            ];
            u[39] = offsetStyles;
            u[40] = ue;
            u[41] = ce;
            u[42] = de;
            u[43] = me;
        } else {
            me = u[43];
        }
        let pe;
        if (u[44] !== ariaLabelledBy || u[45] !== se || u[46] !== me || u[47] !== testid || u[48] !== themeConfigOverride || u[49] !== ae || u[50] !== toastRef || u[51] !== useInvertedDisplayMode_1) {
            const Component = r("BaseToastContentWrapper.react");
            pe = <Component ariaLabelledBy={ariaLabelledBy} ref={toastRef} role={se} testid={undefined} themeConfig={themeConfigOverride} useInvertedDisplayMode={useInvertedDisplayMode_1} xstyle={me}>{ae}</Component>;
            u[44] = ariaLabelledBy;
            u[45] = se;
            u[46] = me;
            u[47] = testid;
            u[48] = themeConfigOverride;
            u[49] = ae;
            u[50] = toastRef;
            u[51] = useInvertedDisplayMode_1;
            u[52] = pe;
        } else {
            pe = u[52];
        }
        return pe;
    }
    function _() {
        return false;
    }
    l.default = p;
}, 98);