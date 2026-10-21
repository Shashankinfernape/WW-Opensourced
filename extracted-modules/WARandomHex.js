__d("WARandomHex", [
    "WACryptoDependencies",
    "WAHex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = new Uint8Array(e);
        o("WACryptoDependencies").getCrypto().getRandomValues(t);
        return o("WAHex").toHex(t);
    }
    l.randomHex = e;
}, 98);