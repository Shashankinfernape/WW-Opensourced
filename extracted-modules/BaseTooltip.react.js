__d("BaseTooltip.react", [
    "BaseAnchorPositioningUtils",
    "BaseTooltipGroup.react",
    "BaseTooltipTargetWrapper.react",
    "cr:20266",
    "react",
    "useDelayedState"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "delayTooltipMs",
        "hideDelayMs",
        "disabled",
        "tooltipImpl",
        "children",
        "forceInlineDisplay",
        "onVisibilityChange",
        "persistAfterClick",
        "shouldShowCarat"
    ];
    const s = [
        "tooltipImpl",
        "delayTooltipMs",
        "hideDelayMs"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback: m, useContext: p, useEffect: _, useId: f, useRef: g } = d;
    const h = 50;
    const y = 300;
    function C(t) {
        "use no forget";
        const i = t.delayTooltipMs;
        const l = i === void 0 ? y : i;
        const s = t.hideDelayMs;
        const u = s === void 0 ? h : s;
        const d = t.disabled;
        const p = d === void 0 ? false : d;
        const { tooltipImpl: C, children: b, forceInlineDisplay: v, onVisibilityChange: S, persistAfterClick: R, shouldShowCarat: L } = t;
        const E = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const k = r("useDelayedState")(false);
        const I = k[0];
        const T = k[1];
        const D = I && !p;
        const x = g(null);
        const $ = n("cr:20266")();
        let P;
        let N;
        let M;
        if ($ != null) {
            P = $[0];
            N = $[1];
            M = $[2];
        }
        const w = o("BaseAnchorPositioningUtils").passesAnchorPositionExperiment();
        const A = w ? {
            anchorPosName: P,
            anchorPosRef: M
        } : {};
        const F = f();
        const O = E.id ?? F;
        const B = m(function() {
            if (!p) {
                T(true, l);
            }
        }, [
            l,
            p,
            T
        ]);
        const W = m(function() {
            T(false, u);
        }, [
            u,
            T
        ]);
        const q = g(D);
        _(function() {
            if (q.current !== D) {
                q.current = D;
                if (S != null) {
                    S(D);
                }
            }
        }, [
            D,
            S
        ]);
        const U = w ? {
            ref: M,
            xstyle: N
        } : {
            ref: x
        };
        _(function() {
            if (P == null && w) {
                T(false);
            }
        }, [
            P,
            T,
            w
        ]);
        const V = <C {...babelHelpers.extends({}, A, E, {
            contentKey: null,
            contextRef: x,
            id: O,
            isVisible: D,
            shouldShowCarat: L
        })}/>;
        return c.jsxs(r("BaseTooltipTargetWrapper.react"), babelHelpers.extends({}, U, {
            forceInlineDisplay: v,
            onHide: W,
            onShow: B,
            persistAfterClick: R,
            tooltipIdentifier: D ? O : void 0,
            children: [
                typeof b === "function" ? b(O) : b,
                V
            ]
        }));
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b(e) {
        "use no forget";
        const t = p(o("BaseTooltipGroup.react").Context);
        if (t != null) {
            const { tooltipImpl: n, delayTooltipMs: r } = e;
            const a = r === void 0 ? y : r;
            const i = e.hideDelayMs;
            const l = i === void 0 ? h : i;
            const u = babelHelpers.objectWithoutPropertiesLoose(e, s);
            return c.jsx(o("BaseTooltipGroup.react").Child, babelHelpers.extends({}, u, {
                hideDelayMs: l,
                showDelayMs: a
            }));
        }
        return <C {...babelHelpers.extends({}, e)}/>;
    }
    b.displayName = `${b.name} [from ${i.id}]`;
    l.default = b;
}, 98);