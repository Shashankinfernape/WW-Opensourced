__d("WACrypto", [
    "WAArrayBufferUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = e.slice(-t.byteLength);
        if (o("WAArrayBufferUtils").arrayBuffersEqualUNSAFE(n, t)) {
            return e.slice(0, e.byteLength - t.byteLength);
        }
        return e;
    }
    l.removeEncryptedPadding = e;
}, 98);