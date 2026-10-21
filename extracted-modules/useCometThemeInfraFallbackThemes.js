__d("useCometThemeInfraFallbackThemes", [
    "CometThemeInfraFallbackConfig",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    const u = {
        auto: null,
        dark: null,
        light: null
    };
    function c() {
        return r("CometThemeInfraFallbackConfig").fallbackThemes;
    }
    function d() {
        return u;
    }
    function m() {
        return useSyncExternalStore(r("CometThemeInfraFallbackConfig").subscribe, c, d);
    }
    l.default = m;
}, 98);