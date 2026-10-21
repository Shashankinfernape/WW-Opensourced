__d("HeroHoldLoggingBoundary.react", [
    "HeroHoldLoggingBoundaryRegistry",
    "HeroInteractionContext",
    "HeroPlaceholderUtils",
    "react",
    "react-compiler-runtime",
    "useStable"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useContext, useLayoutEffect, useMemo } = u;
    function HeroHoldLoggingBoundary({ children }) {
        return children;
    }
    HeroHoldLoggingBoundary.displayName = "HeroHoldLoggingBoundary";
    function Component(e) {
        const t = o("react-compiler-runtime").c(19);
        const { children, name } = e;
        const i = useContext(o("HeroInteractionContext").Context);
        const l = r("useStable")(o("HeroPlaceholderUtils").getSimpleUUID);
        let u;
        let m;
        if (t[0] !== l) {
            u = function() {
                o("HeroHoldLoggingBoundaryRegistry").addBoundary(l);
                return function() {
                    o("HeroHoldLoggingBoundaryRegistry").removeBoundary(l);
                };
            };
            m = [
                l
            ];
            t[0] = l;
            t[1] = u;
            t[2] = m;
        } else {
            u = t[1];
            m = t[2];
        }
        useLayoutEffect(u, m);
        let _;
        let f;
        if (t[3] !== name || t[4] !== l) {
            _ = function() {
                o("HeroHoldLoggingBoundaryRegistry").updateBoundaryName(l, name);
            };
            f = [
                name,
                l
            ];
            t[3] = name;
            t[4] = l;
            t[5] = _;
            t[6] = f;
        } else {
            _ = t[5];
            f = t[6];
        }
        useLayoutEffect(_, f);
        let unhold;
        if (t[7] !== i || t[8] !== l) {
            unhold = function(t, n) {
                o("HeroHoldLoggingBoundaryRegistry").addHoldID(l, n);
                i.unhold(t, n);
            };
            t[7] = i;
            t[8] = l;
            t[9] = unhold;
        } else {
            unhold = t[9];
        }
        let h;
        if (t[10] !== i || t[11] !== unhold) {
            h = babelHelpers.extends({}, i, {
                unhold
            });
            t[10] = i;
            t[11] = unhold;
            t[12] = h;
        } else {
            h = t[12];
        }
        const y = h;
        let C;
        if (t[13] !== children || t[14] !== l) {
            C = <HeroHoldLoggingBoundary placeholderUUID={l}>{children}</HeroHoldLoggingBoundary>;
            t[13] = children;
            t[14] = l;
            t[15] = C;
        } else {
            C = t[15];
        }
        let b;
        if (t[16] !== y || t[17] !== C) {
            const Component = o("HeroInteractionContext").Context;
            b = <Component value={y}>{C}</Component>;
            t[16] = y;
            t[17] = C;
            t[18] = b;
        } else {
            b = t[18];
        }
        return b;
    }
    l.default = Component;
}, 98);