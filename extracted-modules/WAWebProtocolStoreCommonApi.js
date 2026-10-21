__d("WAWebProtocolStoreCommonApi", [
    "WAWebSignalCommonUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e instanceof ArrayBuffer) {
            return o("WAWebSignalCommonUtils").bufferToStr(e);
        }
        return e;
    }
    l.stringifyIdentityKey = e;
}, 98);