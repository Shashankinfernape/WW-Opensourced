__d("useWAWebHatchConnector", [
    "WAWebHatchConnectorsSnapshot",
    "WAWebHatchLinkedStatusManager",
    "react",
    "react-compiler-runtime",
    "useWAWebIsHatchChannelConnected"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    function useU(e) {
        const t = o("react-compiler-runtime").c(2);
        const n = r("useWAWebIsHatchChannelConnected")();
        let a;
        if (t[0] !== e) {
            a = function() {
                return d(e);
            };
            t[0] = e;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = useSyncExternalStore(c, a);
        if (n) {
            return i;
        }
        return null;
    }
    function c(e) {
        const t = r("WAWebHatchConnectorsSnapshot").subscribe(e);
        const n = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(e);
        return function() {
            t();
            n();
        };
    }
    function d(e) {
        if ((r("WAWebHatchLinkedStatusManager").getLinkedStatus()?.channelFbid ?? null) !== r("WAWebHatchConnectorsSnapshot").getChannelFbid()) {
            return null;
        }
        return r("WAWebHatchConnectorsSnapshot").getSnapshot()?.find(function(t) {
            return t.id === e;
        }) ?? null;
    }
    l.default = useU;
}, 98);