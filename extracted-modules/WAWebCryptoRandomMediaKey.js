__d("WAWebCryptoRandomMediaKey", [
    "WABase64",
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = new Uint8Array(32);
        self.crypto.getRandomValues(e);
        return {
            key: o("WABase64").encodeB64(e),
            timestamp: o("WATimeUtils").unixTime()
        };
    }
    l.default = e;
}, 98);