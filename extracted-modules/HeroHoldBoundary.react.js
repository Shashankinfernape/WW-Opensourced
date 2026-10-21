__d("HeroHoldBoundary.react", [
    "HeroHoldLoggingBoundary.react",
    "HeroHoldTrigger.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(7);
        const { children, description, hold, name } = e;
        let u;
        if (t[0] !== description || t[1] !== hold) {
            u = s.jsx(r("HeroHoldTrigger.react"), {
                description,
                hold
            });
            t[0] = description;
            t[1] = hold;
            t[2] = u;
        } else {
            u = t[2];
        }
        let c;
        if (t[3] !== children || t[4] !== name || t[5] !== u) {
            const Component = r("HeroHoldLoggingBoundary.react");
            c = <Component name={name}>{u}{children}</Component>;
            t[3] = children;
            t[4] = name;
            t[5] = u;
            t[6] = c;
        } else {
            c = t[6];
        }
        return c;
    }
    l.default = UComponent;
}, 98);