__d("useCometThemeInfraThemesWithPageFallback", [
    "CometThemeInfraBaseThemeContext.react",
    "react",
    "useCometThemeInfraFallbackThemes"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useContext = (e || (e = o("react"))).useContext;
    function useU() {
        const e = useContext(r("CometThemeInfraBaseThemeContext.react"));
        const t = r("useCometThemeInfraFallbackThemes")();
        if (e.auto != null) {
            return e;
        }
        return t;
    }
    l.default = useU;
}, 98);