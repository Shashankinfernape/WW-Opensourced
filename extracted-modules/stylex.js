__d("stylex", [
    "CometStyleXSheet",
    "ExecutionEnvironment",
    "gkx",
    "stylex-inject",
    "stylex-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    if (!r("gkx")("21107") && !(s || (s = r("ExecutionEnvironment"))).isInWorker) {
        o("CometStyleXSheet").rootStyleSheet.injectTheme();
    }
    function u(e) {
        for(var t = e.reverse(), n = {}; t.length;){
            const r = t.pop();
            if (Array.isArray(r)) {
                for(let o = r.length - 1; o >= 0; o--){
                    t.push(r[o]);
                }
                continue;
            }
            const a = r;
            if (a != null && typeof a === "object") {
                for(const i in a){
                    const l = a[i];
                    if (typeof l === "string") {
                        n[i] = l;
                    } else if (typeof l === "object") {
                        n[i] = n[i] ?? {};
                        Object.assign(n[i], l);
                    }
                }
            }
        }
        return n;
    }
    function c(...t) {
        return u(t);
    }
    function d(...n) {
        return (e || (e = o("stylex-runtime"))).legacyMerge(n);
    }
    d.compose = c;
    d.create = (e || (e = o("stylex-runtime"))).legacyMerge.create;
    d.firstThatWorks = e.legacyMerge.firstThatWorks;
    d.inject = r("stylex-inject");
    d.keyframes = e.legacyMerge.keyframes;
    d.props = e.legacyMerge.props;
    d.defineConsts = e.legacyMerge.defineConsts;
    d.defineVars = e.legacyMerge.defineVars;
    d.createTheme = e.legacyMerge.createTheme;
    d.viewTransitionClass = e.legacyMerge.viewTransitionClass;
    d.positionTry = e.legacyMerge.positionTry;
    d.types = e.legacyMerge.types;
    d.when = e.legacyMerge.when;
    d.defaultMarker = e.legacyMerge.defaultMarker;
    d.defineMarker = e.legacyMerge.defineMarker;
    d.unstable_conditional = e.legacyMerge.unstable_conditional;
    d.unstable_defineVarsNested = e.legacyMerge.unstable_defineVarsNested;
    d.unstable_defineConstsNested = e.legacyMerge.unstable_defineConstsNested;
    d.unstable_createThemeNested = e.legacyMerge.unstable_createThemeNested;
    l.default = d;
}, 102);