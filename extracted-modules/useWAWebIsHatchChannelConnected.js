__d("useWAWebIsHatchChannelConnected", [
    "WAWebHatchLinkedStatusManager",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    function useU() {
        return useSyncExternalStore(c, d);
    }
    function c(e) {
        return r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(e);
    }
    function d() {
        return !r("WAWebHatchLinkedStatusManager").isUnlinked();
    }
    l.default = useU;
}, 98);