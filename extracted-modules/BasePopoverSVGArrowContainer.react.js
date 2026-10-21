__d("BasePopoverSVGArrowContainer.react", [
    "BaseContextualLayerContextSizeContext",
    "BaseContextualLayerLayerAdjustmentContext",
    "BaseContextualLayerOrientationContext",
    "BasePopoverDownEdgeArrow.svg.react",
    "BasePopoverDownInsetArrow.svg.react",
    "BasePopoverReflowSheetContext",
    "BasePopoverRightEdgeArrow.svg.react",
    "BasePopoverRightInsetArrow.svg.react",
    "Locale",
    "react",
    "react-compiler-runtime",
    "stylex",
    "testID"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "arrowHorizontalPositionOffset",
        "arrowVerticalPositionOffset",
        "downEdgeArrowSvg",
        "downInsetArrowSvg",
        "ref",
        "rightEdgeArrowSvg",
        "rightInsetArrowSvg",
        "arrowAlignment",
        "arrowFill",
        "children",
        "testid",
        "xstyle"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useContext, useMemo } = d;
    const _ = 3;
    const f = o("Locale").isRTL();
    const g = 25;
    const h = {
        arrow: {
            filter: "xem7dle",
            position: "x10l6tqk",
            $$css: true
        },
        container: {
            position: "x1n2onr6",
            $$css: true
        }
    };
    const y = {
        above: {
            marginBottom: "x1fqp7bg",
            $$css: true
        },
        below: {
            marginTop: "xcxhlts",
            $$css: true
        },
        end: {
            marginInlineStart: "xx6jrq6",
            $$css: true
        },
        start: {
            marginInlineEnd: "xjx09e3",
            $$css: true
        }
    };
    const C = {
        above: {
            top: "x11k2h6o",
            $$css: true
        },
        below: {
            bottom: "xng853d",
            $$css: true
        },
        end: {
            insetInlineEnd: "xzn28fx",
            left: null,
            right: null,
            $$css: true
        },
        start: {
            insetInlineStart: "x1exbynx",
            left: null,
            right: null,
            $$css: true
        }
    };
    const b = {
        end: {
            insetInlineEnd: "xetw22u",
            left: null,
            right: null,
            $$css: true
        },
        middle: {
            insetInlineStart: "x211tc3",
            left: null,
            right: null,
            $$css: true
        },
        start: {
            insetInlineStart: "x1a6xf5x",
            left: null,
            right: null,
            $$css: true
        }
    };
    const v = {
        end: {
            bottom: "x1ey2m1c",
            $$css: true
        },
        middle: {
            top: "x18g6o9x",
            $$css: true
        },
        start: {
            top: "x13vifvy",
            $$css: true
        }
    };
    function S(e, popoverAlign, n) {
        const r = n - _;
        if (e) {
            if (f && popoverAlign === "start" || !f && popoverAlign === "end") {
                return r * -1;
            }
            return r;
        }
        if (popoverAlign === "end" || popoverAlign === "middle") {
            return r * -1;
        }
        return r;
    }
    function R({ arrowAlignment, contextSize, layerAdjustment, popoverAlign, popoverPosition }) {
        let i = layerAdjustment !== 0 && popoverAlign !== "middle" ? -layerAdjustment : 0;
        const l = popoverPosition === "below" || popoverPosition === "above";
        if (arrowAlignment !== "edge" && contextSize != null) {
            const s = l ? contextSize.width : contextSize.height;
            const u = s > 0 ? s / 2 : 0;
            if (u !== 0) {
                i += S(l, popoverAlign, popoverAlign === "middle" ? g / 2 : u);
            }
        }
        if (i === 0) {
            return {};
        }
        return {
            transform: l ? `translateX(${i}px)` : `translateY(${i}px)`
        };
    }
    function L(position, align, n, r, o, a) {
        if (position === "above" || position === "below") {
            if (align === "middle") {
                return o;
            }
            return a;
        }
        if (align === "middle") {
            return n;
        }
        return r;
    }
    function E(t) {
        const a = o("react-compiler-runtime").c(51);
        let i;
        let l;
        let u;
        let d;
        let p;
        let _;
        let g;
        let S;
        let E;
        let k;
        let I;
        let T;
        if (a[0] !== t) {
            const { arrowHorizontalPositionOffset, arrowVerticalPositionOffset, downEdgeArrowSvg, downInsetArrowSvg, ref, rightEdgeArrowSvg, rightInsetArrowSvg, arrowAlignment, arrowFill, children, testid, xstyle } = t;
            const q = babelHelpers.objectWithoutPropertiesLoose(t, e);
            d = arrowHorizontalPositionOffset;
            p = arrowVerticalPositionOffset;
            _ = downEdgeArrowSvg;
            g = downInsetArrowSvg;
            u = ref;
            S = rightEdgeArrowSvg;
            E = rightInsetArrowSvg;
            k = arrowAlignment;
            i = children;
            I = testid;
            T = xstyle;
            l = q;
            a[0] = t;
            a[1] = i;
            a[2] = l;
            a[3] = u;
            a[4] = d;
            a[5] = p;
            a[6] = _;
            a[7] = g;
            a[8] = S;
            a[9] = E;
            a[10] = k;
            a[11] = I;
            a[12] = T;
        } else {
            i = a[1];
            l = a[2];
            u = a[3];
            d = a[4];
            p = a[5];
            _ = a[6];
            g = a[7];
            S = a[8];
            E = a[9];
            k = a[10];
            I = a[11];
            T = a[12];
        }
        const U = _ === undefined ? r("BasePopoverDownEdgeArrow.svg.react") : _;
        const V = g === undefined ? r("BasePopoverDownInsetArrow.svg.react") : g;
        const H = S === undefined ? r("BasePopoverRightEdgeArrow.svg.react") : S;
        const G = E === undefined ? r("BasePopoverRightInsetArrow.svg.react") : E;
        const z = k === undefined ? "center" : k;
        const j = useContext(r("BaseContextualLayerOrientationContext"));
        const { align, position } = j;
        const contextSize = useContext(r("BaseContextualLayerContextSizeContext"));
        let Y;
        if (a[13] !== align || a[14] !== U || a[15] !== V || a[16] !== position || a[17] !== H || a[18] !== G) {
            Y = L(position, align, G, H, V, U);
            a[13] = align;
            a[14] = U;
            a[15] = V;
            a[16] = position;
            a[17] = H;
            a[18] = G;
            a[19] = Y;
        } else {
            Y = a[19];
        }
        const J = Y;
        const layerAdjustment = useContext(r("BaseContextualLayerLayerAdjustmentContext")) ?? 0;
        const ee = f ? "start" : "end";
        const te = f ? "end" : "start";
        const ne = align === "end" && !f || align === "start" && f;
        const re = align === "middle" ? -layerAdjustment : 0;
        let oe = 1;
        let ae = 1;
        let ie = 0;
        let le = 0;
        e: switch(position){
            case "above":
                {
                    ie = 0 + re;
                    if (ne) {
                        oe = -1;
                    }
                    break e;
                }
            case "below":
                {
                    ie = 0 + re;
                    ae = -1;
                    if (ne) {
                        oe = -1;
                    }
                    break e;
                }
            case te:
                {
                    le = 0 + re;
                    if (align === "start") {
                        ae = -1;
                    }
                    break e;
                }
            case ee:
                le = 0 + re;
                oe = -1;
                if (align === "start") {
                    ae = -1;
                }
        }
        const se = `scale(${oe}, ${ae}) translate(${ie}px, ${le}px)`;
        let arrowStyle_1;
        if (a[20] !== se) {
            arrowStyle_1 = {
                transform: se
            };
            a[20] = se;
            a[21] = arrowStyle_1;
        } else {
            arrowStyle_1 = a[21];
        }
        let containerStyle_1;
        if (a[22] !== align || a[23] !== z || a[24] !== contextSize || a[25] !== layerAdjustment || a[26] !== position) {
            containerStyle_1 = R({
                arrowAlignment: z,
                contextSize,
                layerAdjustment,
                popoverAlign: align,
                popoverPosition: position
            });
            a[22] = align;
            a[23] = z;
            a[24] = contextSize;
            a[25] = layerAdjustment;
            a[26] = position;
            a[27] = containerStyle_1;
        } else {
            containerStyle_1 = a[27];
        }
        let de;
        if (a[28] !== arrowStyle_1 || a[29] !== containerStyle_1) {
            de = {
                arrowStyle: arrowStyle_1,
                containerStyle: containerStyle_1
            };
            a[28] = arrowStyle_1;
            a[29] = containerStyle_1;
            a[30] = de;
        } else {
            de = a[30];
        }
        const me = de;
        const { arrowStyle, containerStyle } = me;
        const fe = useContext(r("BasePopoverReflowSheetContext"));
        const fe_isReflowSheet = fe.isReflowSheet;
        let he;
        if (a[31] !== position || a[32] !== T) {
            he = (s || (s = r("stylex")))(h.container, y[position], T);
            a[31] = position;
            a[32] = T;
            a[33] = he;
        } else {
            he = a[33];
        }
        const ye = fe_isReflowSheet ? null : containerStyle;
        let Ce;
        if (a[34] !== I) {
            Ce = r("testID")(I);
            a[34] = I;
            a[35] = Ce;
        } else {
            Ce = a[35];
        }
        let be;
        if (a[36] !== align || a[37] !== position) {
            be = (s || (s = r("stylex")))(h.arrow, C[position], (position === "start" || position === "end") && align !== "stretch" && v[align], (position === "above" || position === "below") && align !== "stretch" && b[align]);
            a[36] = align;
            a[37] = position;
            a[38] = be;
        } else {
            be = a[38];
        }
        let ve;
        if (a[39] !== J || a[40] !== arrowStyle || a[41] !== be) {
            ve = <J className={be} fill="var(--card-background)" style={arrowStyle}/>;
            a[39] = J;
            a[40] = arrowStyle;
            a[41] = be;
            a[42] = ve;
        } else {
            ve = a[42];
        }
        let Se;
        if (a[43] !== i || a[44] !== l || a[45] !== u || a[46] !== he || a[47] !== ye || a[48] !== Ce || a[49] !== ve) {
            Se = <div {...babelHelpers.extends({}, l, {
                className: he,
                ref: u,
                style: ye
            }, Ce, {
                children: [
                    i,
                    ve
                ]
            })}/>;
            a[43] = i;
            a[44] = l;
            a[45] = u;
            a[46] = he;
            a[47] = ye;
            a[48] = Ce;
            a[49] = ve;
            a[50] = Se;
        } else {
            Se = a[50];
        }
        return Se;
    }
    l.default = E;
}, 98);