__d("CometOfflineTracing", [
    "NetworkStatus"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "sessionOfflineStatusCount";
    let s = 0;
    let u = false;
    function c() {
        if (!u) {
            u = true;
            r("NetworkStatus").onChange(function({ online }) {
                if (!online) {
                    s++;
                }
            });
        }
    }
    function d() {
        return s;
    }
    l.OFFLINE_NETWORK_STATUS_ANNOTATION = e;
    l.initialize = c;
    l.getOfflineCount = d;
}, 98);