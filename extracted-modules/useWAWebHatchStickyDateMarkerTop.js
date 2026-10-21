__d("useWAWebHatchStickyDateMarkerTop", [
    "WAWebHatchAgentStatusManager",
    "WAWebHatchFrontendGating",
    "WAWebHatchThemedHeaderLoadable",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    function u(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = function() {
                return d(e);
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return useSyncExternalStore(c, n);
    }
    function c(e) {
        return r("WAWebHatchAgentStatusManager").subscribeToStatusText(function() {
            return e();
        });
    }
    function d(e) {
        if (o("WAWebHatchFrontendGating").isHatchThemeEnabled(e)) {
            return o("WAWebHatchThemedHeaderLoadable").getHatchThemedStickyDateTop(r("WAWebHatchAgentStatusManager").getAgentStatus() != null);
        }
        return null;
    }
    l.default = u;
}, 98);