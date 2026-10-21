__d("WAACSTokenUtils", [
    "WABinary",
    "WACryptoDependencies",
    "WACryptoPrimitives",
    "WAWamPrivateStatsToken"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        const token = new Uint8Array(32);
        o("WACryptoDependencies").getCrypto().getRandomValues(token);
        const blindingFactor = new Uint8Array(32);
        o("WACryptoDependencies").getCrypto().getRandomValues(blindingFactor);
        const blindedToken = o("WAWamPrivateStatsToken").blindToken(token, blindingFactor);
        return {
            blindedToken,
            blindingFactor,
            token
        };
    }
    function s({ token, unblindedSignedToken }) {
        const r = o("WABinary").Binary.build(token, unblindedSignedToken);
        return o("WACryptoPrimitives").hash(r.readByteArrayView());
    }
    l.getBlindedToken = e;
    l.getSharedSecret = s;
}, 98);