__d("HeroInteractionContextPassthrough.react", [
    "HeroCurrentInteractionForLoggingContext",
    "HeroInteractionContext",
    "HeroInteractionIDContext",
    "RelayProfilerContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_use = e.use;
    const c = {
        current: null
    };
    const d = {
        consumeBootload: function() {},
        retainQuery: function() {},
        wrapPrepareQueryResource: function(t) {
            return t();
        }
    };
    function HeroInteractionContextPassthrough(e) {
        const t = o("react-compiler-runtime").c(12);
        const { children, clear } = e;
        const i = clear === undefined ? true : clear;
        const l = i ? o("HeroInteractionContext").DEFAULT_CONTEXT_VALUE : e_use(o("HeroInteractionContext").Context);
        const m = i ? c : e_use(r("HeroCurrentInteractionForLoggingContext"));
        const p = i ? null : e_use(r("HeroInteractionIDContext"));
        const _ = i ? d : e_use(r("RelayProfilerContext"));
        let f;
        if (t[0] !== children || t[1] !== _) {
            const Component = r("RelayProfilerContext").Provider;
            f = <Component value={_}>{children}</Component>;
            t[0] = children;
            t[1] = _;
            t[2] = f;
        } else {
            f = t[2];
        }
        let g;
        if (t[3] !== p || t[4] !== f) {
            const Component = r("HeroInteractionIDContext").Provider;
            g = <Component value={p}>{f}</Component>;
            t[3] = p;
            t[4] = f;
            t[5] = g;
        } else {
            g = t[5];
        }
        let h;
        if (t[6] !== m || t[7] !== g) {
            const Component = r("HeroCurrentInteractionForLoggingContext").Provider;
            h = <Component value={m}>{g}</Component>;
            t[6] = m;
            t[7] = g;
            t[8] = h;
        } else {
            h = t[8];
        }
        let y;
        if (t[9] !== l || t[10] !== h) {
            const Component = o("HeroInteractionContext").Context.Provider;
            y = <Component value={l}>{h}</Component>;
            t[9] = l;
            t[10] = h;
            t[11] = y;
        } else {
            y = t[11];
        }
        return y;
    }
    HeroInteractionContextPassthrough.displayName = "HeroInteractionContextPassthrough";
    l.default = HeroInteractionContextPassthrough;
}, 98);