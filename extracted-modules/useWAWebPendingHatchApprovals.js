__d("useWAWebPendingHatchApprovals", [
    "WAWebHatchApprovalManager",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    function useU() {
        return useSyncExternalStore(c, d);
    }
    function c(e) {
        return r("WAWebHatchApprovalManager").subscribe(e);
    }
    function d() {
        return r("WAWebHatchApprovalManager").getPendingApprovals();
    }
    l.default = useU;
}, 98);