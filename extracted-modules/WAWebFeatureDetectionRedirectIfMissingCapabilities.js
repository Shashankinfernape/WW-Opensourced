__d("WAWebFeatureDetectionRedirectIfMissingCapabilities", [
    "WAPromiseProps",
    "WAWebBuildConstants",
    "WAWebFeatureDetectionCryptoSupport",
    "WAWebLocalStorage",
    "WAWebSessionStorage"
], function(t, n, r, o, a, i, l) {
    const e = `${o("WAWebBuildConstants").DYN_ORIGIN}browsers.html`;
    const s = {
        getRandomValues: !!self.crypto.getRandomValues,
        subtleCrypto: !!(self.crypto && (self.crypto.subtle || self.crypto.webkitSubtle)),
        localstorage: !!r("WAWebLocalStorage"),
        sessionstorage: !!r("WAWebSessionStorage"),
        url: !!self.URL,
        websocket: !!self.WebSocket,
        worker: !!self.Worker
    };
    function u() {
        if (c(s)) {
            return true;
        }
        o("WAPromiseProps").promiseProps({
            cryptoSha256: o("WAWebFeatureDetectionCryptoSupport").supportsHmacSha256(),
            cryptoAesCbc: o("WAWebFeatureDetectionCryptoSupport").supportsAesCbc()
        }).then(c);
        return false;
    }
    function c(t) {
        const n = [];
        for(const r in t){
            if (!t[r]) {
                n.push(r);
            }
        }
        if (n.length > 0) {
            const o = `${e}?missing=${n.join(",")}`;
            if (window.location.replace) {
                window.location.replace(o);
            } else {
                window.location.href = o;
            }
            return true;
        }
        return false;
    }
    l.default = u;
}, 98);