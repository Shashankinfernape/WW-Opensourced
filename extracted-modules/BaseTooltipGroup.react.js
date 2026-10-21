__d("BaseTooltipGroup.react", [
    "BaseAnchorPositioningUtils",
    "BaseTooltipTargetWrapper.react",
    "FBLogger",
    "react",
    "react-compiler-runtime",
    "useBaseAnchorElement",
    "useDelayedState",
    "useStable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "disabled",
        "hideDelayMs",
        "showDelayMs",
        "children",
        "forceInlineDisplay",
        "onVisibilityChange",
        "persistAfterClick"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback: d, useContext: m, useId: p, useMemo: _, useRef: f, useState: g } = c;
    const h = u.createContext(null);
    function y(e) {
        const t = o("react-compiler-runtime").c(9);
        const { children: n, tooltipImpl: a } = e;
        const i = r("useDelayedState")(false);
        const l = i[0];
        const s = i[1];
        const c = g(null);
        const d = c[0];
        const m = c[1];
        const _ = p();
        let f;
        if (t[0] !== d || t[1] !== l || t[2] !== s || t[3] !== _ || t[4] !== a) {
            f = {
                activeContentKey: d,
                isVisible: l,
                onHide: function(t, n) {
                    s(false, t, n);
                },
                onShow: function(t, n, r) {
                    m(t);
                    s(true, n, r);
                },
                tooltipIdentifier: _,
                tooltipImpl: a
            };
            t[0] = d;
            t[1] = l;
            t[2] = s;
            t[3] = _;
            t[4] = a;
            t[5] = f;
        } else {
            f = t[5];
        }
        const y = f;
        let C;
        if (t[6] !== n || t[7] !== y) {
            C = <h.Provider value={y}>{n}</h.Provider>;
            t[6] = n;
            t[7] = y;
            t[8] = C;
        } else {
            C = t[8];
        }
        return C;
    }
    let C = 0;
    const b = {};
    function v() {
        return `tooltip-${C++}`;
    }
    function S(t) {
        const a = o("react-compiler-runtime").c(46);
        let i;
        let l;
        let s;
        let c;
        let d;
        let p;
        let _;
        let g;
        if (a[0] !== t) {
            _ = t.disabled;
            s = t.hideDelayMs;
            p = t.showDelayMs;
            i = t.children;
            l = t.forceInlineDisplay;
            c = t.onVisibilityChange;
            d = t.persistAfterClick;
            g = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = i;
            a[2] = l;
            a[3] = s;
            a[4] = c;
            a[5] = d;
            a[6] = p;
            a[7] = _;
            a[8] = g;
        } else {
            i = a[1];
            l = a[2];
            s = a[3];
            c = a[4];
            d = a[5];
            p = a[6];
            _ = a[7];
            g = a[8];
        }
        const y = _ === void 0 ? false : _;
        const C = r("useStable")(v);
        const S = f(null);
        const R = m(h) ?? b;
        const L = r("useBaseAnchorElement")();
        const E = L[0];
        const k = L[1];
        const I = L[2];
        const { activeContentKey: T, isVisible: D, onHide: x, onShow: $, tooltipIdentifier: P, tooltipImpl: N } = R;
        const M = D === void 0 ? false : D;
        let w;
        if (a[9] !== C || a[10] !== y || a[11] !== $ || a[12] !== c || a[13] !== p) {
            w = function() {
                if (!y && $) {
                    $(C, p, c);
                }
            };
            a[9] = C;
            a[10] = y;
            a[11] = $;
            a[12] = c;
            a[13] = p;
            a[14] = w;
        } else {
            w = a[14];
        }
        const A = w;
        let F;
        if (a[15] !== s || a[16] !== x || a[17] !== c) {
            F = function() {
                if (x) {
                    x(s, c);
                }
            };
            a[15] = s;
            a[16] = x;
            a[17] = c;
            a[18] = F;
        } else {
            F = a[18];
        }
        const O = F;
        if (R == null) {
            r("FBLogger")("comet_ui").mustfix("BaseTooltipGroup: Cannot render a BaseTooltipGroupChild component outside of a BaseTooltipGroup component.");
        }
        let B;
        if (a[19] === Symbol.for("react.memo_cache_sentinel")) {
            B = o("BaseAnchorPositioningUtils").passesAnchorPositionExperiment();
            a[19] = B;
        } else {
            B = a[19];
        }
        const W = B;
        let q;
        if (a[20] !== I || a[21] !== k) {
            q = W ? {
                ref: I,
                xstyle: k
            } : {
                ref: S
            };
            a[20] = I;
            a[21] = k;
            a[22] = q;
        } else {
            q = a[22];
        }
        const U = q;
        let V;
        if (a[23] !== E || a[24] !== I || a[25] !== g) {
            V = W ? babelHelpers.extends({
                anchorPosName: E,
                anchorPosRef: I
            }, g) : g;
            a[23] = E;
            a[24] = I;
            a[25] = g;
            a[26] = V;
        } else {
            V = a[26];
        }
        const H = V;
        const G = M && T === C ? P : void 0;
        let z;
        if (a[27] !== i || a[28] !== P) {
            z = typeof i === "function" ? i(P) : i;
            a[27] = i;
            a[28] = P;
            a[29] = z;
        } else {
            z = a[29];
        }
        let j;
        if (a[30] !== N || a[31] !== T || a[32] !== C || a[33] !== M || a[34] !== H || a[35] !== P) {
            j = N != null && C === T && <N {...babelHelpers.extends({}, H, {
                contentKey: C,
                contextRef: S,
                id: M ? P : void 0,
                isVisible: M
            })}/>;
            a[30] = N;
            a[31] = T;
            a[32] = C;
            a[33] = M;
            a[34] = H;
            a[35] = P;
            a[36] = j;
        } else {
            j = a[36];
        }
        let K;
        if (a[37] !== l || a[38] !== O || a[39] !== A || a[40] !== d || a[41] !== U || a[42] !== j || a[43] !== G || a[44] !== z) {
            K = u.jsxs(r("BaseTooltipTargetWrapper.react"), babelHelpers.extends({}, U, {
                forceInlineDisplay: l,
                onHide: O,
                onShow: A,
                persistAfterClick: d,
                tooltipIdentifier: G,
                children: [
                    z,
                    j
                ]
            }));
            a[37] = l;
            a[38] = O;
            a[39] = A;
            a[40] = d;
            a[41] = U;
            a[42] = j;
            a[43] = G;
            a[44] = z;
            a[45] = K;
        } else {
            K = a[45];
        }
        return K;
    }
    l.Context = h;
    l.Container = y;
    l.Child = S;
}, 98);