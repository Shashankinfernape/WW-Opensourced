__d("useCurrentDisplayMode", [
    "BaseThemeDisplayModeContext",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useContext = (e || (e = o("react"))).useContext;
    const u = "light";
    function useC() {
        return useContext(r("BaseThemeDisplayModeContext")) ?? u;
    }
    l.default = useC;
}, 98);