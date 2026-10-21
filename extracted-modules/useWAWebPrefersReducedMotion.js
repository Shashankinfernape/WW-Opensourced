__d("useWAWebPrefersReducedMotion", [
    "WAWebA11yUtils",
    "WAWebNoop",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    const u = "(prefers-reduced-motion: reduce)";
    function c() {
        return useSyncExternalStore(d, o("WAWebA11yUtils").getPrefersReducedMotion);
    }
    function d(e) {
        const t = window.matchMedia(u);
        if (typeof t.addEventListener !== "function") {
            return r("WAWebNoop");
        }
        t.addEventListener("change", e);
        return function() {
            return t.removeEventListener("change", e);
        };
    }
    l.default = c;
}, 98);