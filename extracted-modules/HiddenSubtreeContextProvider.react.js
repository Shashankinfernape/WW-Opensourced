__d("HiddenSubtreeContextProvider.react", [
    "HiddenSubtreeContext",
    "HiddenSubtreePassiveContext",
    "react",
    "react-compiler-runtime",
    "removeFromArray"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef } = u;
    function g(e, t) {
        return e.backgrounded === t.backgrounded && e.hidden === t.hidden && e.visibleForAnimation === t.visibleForAnimation;
    }
    function h(e, t) {
        const n = e.backgrounded || t.backgrounded;
        const hidden = e.hidden || t.hidden;
        const visibleForAnimation = e.visibleForAnimation || t.visibleForAnimation;
        return {
            backgrounded: n,
            hidden,
            hiddenOrBackgrounded: n || hidden,
            hiddenOrBackgrounded_FIXME: n || hidden,
            visibleForAnimation
        };
    }
    function YComponent(e) {
        const t = o("react-compiler-runtime").c(38);
        const { children, ignoreParent, isBackgrounded, isHidden, isVisibleForAnimation } = e;
        const c = isBackgrounded === undefined ? false : isBackgrounded;
        const visibleForAnimation = isVisibleForAnimation === undefined ? false : isVisibleForAnimation;
        const y = useContext(r("HiddenSubtreeContext"));
        const C = useContext(r("HiddenSubtreePassiveContext"));
        const b = c || isHidden;
        const v = c || isHidden;
        let S;
        if (t[0] !== c || t[1] !== isHidden || t[2] !== visibleForAnimation || t[3] !== b || t[4] !== v) {
            S = {
                backgrounded: c,
                hidden: isHidden,
                hiddenOrBackgrounded: b,
                hiddenOrBackgrounded_FIXME: v,
                visibleForAnimation
            };
            t[0] = c;
            t[1] = isHidden;
            t[2] = visibleForAnimation;
            t[3] = b;
            t[4] = v;
            t[5] = S;
        } else {
            S = t[5];
        }
        const R = S;
        const LRef = useRef(R);
        const ERef = useRef(null);
        let k;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            k = [];
            t[6] = k;
        } else {
            k = t[6];
        }
        const IRef = useRef(k);
        let T;
        if (t[7] !== ignoreParent || t[8] !== C) {
            T = function() {
                const e = ignoreParent === true ? LRef.current : h(LRef.current, C.getCurrentState());
                if (ERef.current == null || !g(e, ERef.current)) {
                    ERef.current = e;
                    const t = Array.from(IRef.current);
                    t.forEach((t)=>{
                        t(e);
                    });
                }
            };
            t[7] = ignoreParent;
            t[8] = C;
            t[9] = T;
        } else {
            T = t[9];
        }
        const D = T;
        let x;
        let $;
        if (t[10] !== R || t[11] !== D) {
            x = function() {
                LRef.current = R;
                D();
            };
            $ = [
                R,
                D
            ];
            t[10] = R;
            t[11] = D;
            t[12] = x;
            t[13] = $;
        } else {
            x = t[12];
            $ = t[13];
        }
        useLayoutEffect(x, $);
        let P;
        let N;
        if (t[14] !== ignoreParent || t[15] !== D || t[16] !== C) {
            P = function() {
                if (ignoreParent !== true) {
                    const e = C.subscribeToChanges(D);
                    return function() {
                        return e.remove();
                    };
                }
            };
            N = [
                ignoreParent,
                D,
                C
            ];
            t[14] = ignoreParent;
            t[15] = D;
            t[16] = C;
            t[17] = P;
            t[18] = N;
        } else {
            P = t[17];
            N = t[18];
        }
        useEffect(P, N);
        let M;
        if (t[19] !== ignoreParent || t[20] !== C) {
            M = {
                getCurrentState: function() {
                    if (ignoreParent === true) {
                        return LRef.current;
                    }
                    return h(LRef.current, C.getCurrentState());
                },
                subscribeToChanges: function(t) {
                    const IRef_current = IRef.current;
                    IRef_current.push(t);
                    return {
                        remove: function() {
                            r("removeFromArray")(IRef_current, t);
                        }
                    };
                }
            };
            t[19] = ignoreParent;
            t[20] = C;
            t[21] = M;
        } else {
            M = t[21];
        }
        const w = M;
        let A;
        if (t[22] !== ignoreParent || t[23] !== R || t[24] !== y) {
            A = ignoreParent === true ? R : h(R, y);
            t[22] = ignoreParent;
            t[23] = R;
            t[24] = y;
            t[25] = A;
        } else {
            A = t[25];
        }
        const F = A;
        const O = F.backgrounded || F.hidden;
        const B = F.backgrounded || F.hidden;
        let W;
        if (t[26] !== F.backgrounded || t[27] !== F.hidden || t[28] !== F.visibleForAnimation || t[29] !== O || t[30] !== B) {
            W = {
                backgrounded: F.backgrounded,
                hidden: F.hidden,
                hiddenOrBackgrounded: O,
                hiddenOrBackgrounded_FIXME: B,
                visibleForAnimation: F.visibleForAnimation
            };
            t[26] = F.backgrounded;
            t[27] = F.hidden;
            t[28] = F.visibleForAnimation;
            t[29] = O;
            t[30] = B;
            t[31] = W;
        } else {
            W = t[31];
        }
        const q = W;
        let U;
        if (t[32] !== children || t[33] !== w) {
            const Component = r("HiddenSubtreePassiveContext").Provider;
            U = <Component value={w}>{children}</Component>;
            t[32] = children;
            t[33] = w;
            t[34] = U;
        } else {
            U = t[34];
        }
        let V;
        if (t[35] !== q || t[36] !== U) {
            const Component = r("HiddenSubtreeContext").Provider;
            V = <Component value={q}>{U}</Component>;
            t[35] = q;
            t[36] = U;
            t[37] = V;
        } else {
            V = t[37];
        }
        return V;
    }
    l.default = YComponent;
}, 98);