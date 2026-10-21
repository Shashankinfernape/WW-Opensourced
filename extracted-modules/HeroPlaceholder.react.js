__d("HeroPlaceholder.react", [
    "HeroFallbackTracker.react",
    "HeroInteractionContext",
    "HeroInteractionIDContext",
    "HeroPlaceholderUtils",
    "react",
    "react-compiler-runtime",
    "useStable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useContext, useLayoutEffect, useRef } = u;
    const _ = ({ children })=>children;
    function FComponent(e) {
        const t = o("react-compiler-runtime").c(2);
        const n = e.cb;
        const rRef = useRef(false);
        let a;
        if (t[0] !== n) {
            a = function() {
                if (!rRef.current) {
                    n();
                    rRef.current = true;
                }
            };
            t[0] = n;
            t[1] = a;
        } else {
            a = t[1];
        }
        useLayoutEffect(a);
        return null;
    }
    function HeroPlaceholder(e) {
        const n = o("react-compiler-runtime").c(37);
        const { children, fallback, name, unstable_avoidThisFallback, unstable_defer, unstable_onSuspense } = e;
        const g = useContext(o("HeroInteractionContext").Context);
        const h = useContext(r("HeroInteractionIDContext"));
        const y = r("useStable")(o("HeroPlaceholderUtils").getSimpleUUID);
        const uuid = e.placeholderUUID ?? y;
        const b = r("useStable")(o("HeroPlaceholderUtils").getSimpleUUID);
        const vRef = useRef(false);
        const S = children;
        let R;
        if (n[3] !== g || n[4] !== h || n[5] !== name || n[6] !== uuid || n[7] !== unstable_onSuspense) {
            R = function(t) {
                if (h != null) {
                    g.suspenseCallback(h, uuid, g.pageletStack, t, name ?? "Unnamed Suspense");
                }
                if (unstable_onSuspense) {
                    const n = o("HeroPlaceholderUtils").createThenableDescription(t) ?? "";
                    unstable_onSuspense(n, name ?? "Unnamed Suspense");
                }
            };
            n[3] = g;
            n[4] = h;
            n[5] = name;
            n[6] = uuid;
            n[7] = unstable_onSuspense;
            n[8] = R;
        } else {
            R = n[8];
        }
        const suspenseCallback = R;
        let E;
        let k;
        if (n[9] !== g || n[10] !== h || n[11] !== name || n[12] !== b) {
            E = function() {
                if (vRef.current === false && h != null && h != null) {
                    g.hold(h, g.pageletStack, "Hydration", b, name);
                    return function() {
                        return g.unhold(h, b);
                    };
                }
            };
            k = [
                g,
                h,
                name,
                b
            ];
            n[9] = g;
            n[10] = h;
            n[11] = name;
            n[12] = b;
            n[13] = E;
            n[14] = k;
        } else {
            E = n[13];
            k = n[14];
        }
        useLayoutEffect(E, k);
        let I;
        if (n[15] !== g || n[16] !== h || n[17] !== b) {
            I = function() {
                vRef.current = true;
                if (h != null) {
                    g.unhold(h, b);
                }
            };
            n[15] = g;
            n[16] = h;
            n[17] = b;
            n[18] = I;
        } else {
            I = n[18];
        }
        const cb = I;
        let D;
        if (n[19] !== cb) {
            D = <FComponent cb={cb}/>;
            n[19] = cb;
            n[20] = D;
        } else {
            D = n[20];
        }
        let x;
        if (n[21] !== uuid) {
            x = s.jsx(r("HeroFallbackTracker.react"), {
                uuid
            });
            n[21] = uuid;
            n[22] = x;
        } else {
            x = n[22];
        }
        let fallback_1;
        if (n[23] !== fallback || n[24] !== D || n[25] !== x) {
            fallback_1 = <>{fallback}{D}{x}</>;
            n[23] = fallback;
            n[24] = D;
            n[25] = x;
            n[26] = fallback_1;
        } else {
            fallback_1 = n[26];
        }
        let P;
        if (n[27] !== cb) {
            P = <FComponent cb={cb}/>;
            n[27] = cb;
            n[28] = P;
        } else {
            P = n[28];
        }
        let N;
        if (n[29] !== name || n[30] !== suspenseCallback || n[31] !== fallback_1 || n[32] !== P || n[33] !== unstable_avoidThisFallback || n[34] !== unstable_defer || n[35] !== S) {
            N = <s.Suspense defer={unstable_defer} fallback={fallback_1} name={name} suspenseCallback={suspenseCallback} unstable_avoidThisFallback={unstable_avoidThisFallback}>{P}{S}</s.Suspense>;
            n[29] = name;
            n[30] = suspenseCallback;
            n[31] = fallback_1;
            n[32] = P;
            n[33] = unstable_avoidThisFallback;
            n[34] = unstable_defer;
            n[35] = S;
            n[36] = N;
        } else {
            N = n[36];
        }
        return N;
    }
    HeroPlaceholder.displayName = "HeroPlaceholder";
    l.default = HeroPlaceholder;
}, 98);