__d("WAWebVoipDtlsCertCacheMode", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = n("$InternalEnum")({
        OFF: 0,
        RECONNECT_ONLY: 1,
        ALL: 2,
        ALL_WITH_PREWARM: 3
    });
    function l(t) {
        return e.cast(t) ?? e.OFF;
    }
    function s(t, n) {
        if (t === e.OFF) {
            return false;
        }
        if (t === e.RECONNECT_ONLY) {
            return n === "same_path_reconnect" || n === "ice_restart";
        }
        if (t === e.ALL || t === e.ALL_WITH_PREWARM) {
            return true;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        })();
    }
    function u(t) {
        if (t === e.OFF || t === e.RECONNECT_ONLY) {
            return false;
        }
        if (t === e.ALL || t === e.ALL_WITH_PREWARM) {
            return true;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        })();
    }
    function c(t) {
        return t === e.ALL_WITH_PREWARM;
    }
    i.DtlsCertCacheMode = e;
    i.dtlsCertCacheModeFromInt = l;
    i.isCertReuseEnabledForPath = s;
    i.canGenerateSharedCert = u;
    i.isCertPrewarmEnabled = c;
}, 66);