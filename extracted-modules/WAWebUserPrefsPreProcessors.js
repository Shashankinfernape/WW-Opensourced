__d("WAWebUserPrefsPreProcessors", [
    "WABase64"
], function(t, n, r, o, a, i, l) {
    const e = {
        WANoiseInfo: s,
        WARoutingInfo: u
    };
    function s({ certificateChainBuffer: t, recoveryToken: n, staticKeyPair: r }) {
        const { privKey: a, pubKey: i } = r;
        return {
            privKey: o("WABase64").encodeB64(a),
            pubKey: o("WABase64").encodeB64(i),
            recoveryToken: o("WABase64").encodeB64(n),
            certificateChainBuffer: t != null ? o("WABase64").encodeB64(t) : void 0
        };
    }
    function u({ domain: t, edgeRouting: n }) {
        const r = {
            domain: t,
            edgeRouting: n ? o("WABase64").encodeB64(n) : null
        };
        return r;
    }
    function c(t, n) {
        let r = n;
        const o = e[t];
        if (o != null) {
            r = o(n);
        }
        return r;
    }
    l.preProcessUserPref = c;
}, 98);