__d("useVisibility", [
    "intersectionObserverEntryIsIntersecting",
    "react",
    "react-compiler-runtime",
    "useIntersectionObserver"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useState } = s;
    const d = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    function useM(e) {
        const t = o("react-compiler-runtime").c(13);
        let n;
        if (t[0] !== e) {
            n = e === undefined ? {} : e;
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const a = n;
        const { onHidden, onVisible, onVisibilityChange, root, rootMargin, threshold } = a;
        const _ = root === undefined ? null : root;
        const f = rootMargin === undefined ? d : rootMargin;
        const g = threshold === undefined ? 0 : threshold;
        const h = useState(false);
        const y = h[0];
        const C = h[1];
        let b;
        if (t[2] !== onHidden || t[3] !== onVisibilityChange || t[4] !== onVisible) {
            b = function(t) {
                const e = r("intersectionObserverEntryIsIntersecting")(t);
                if (e) {
                    if (onVisible != null) {
                        onVisible();
                    }
                } else if (onHidden != null) {
                    onHidden();
                }
                onVisibilityChange?.(e);
                C(e);
            };
            t[2] = onHidden;
            t[3] = onVisibilityChange;
            t[4] = onVisible;
            t[5] = b;
        } else {
            b = t[5];
        }
        const v = b;
        let S;
        if (t[6] !== _ || t[7] !== f || t[8] !== g) {
            S = {
                root: _,
                rootMargin: f,
                threshold: g
            };
            t[6] = _;
            t[7] = f;
            t[8] = g;
            t[9] = S;
        } else {
            S = t[9];
        }
        const R = r("useIntersectionObserver")(v, S);
        let L;
        if (t[10] !== y || t[11] !== R) {
            L = [
                R,
                y
            ];
            t[10] = y;
            t[11] = R;
            t[12] = L;
        } else {
            L = t[12];
        }
        return L;
    }
    l.default = useM;
}, 98);