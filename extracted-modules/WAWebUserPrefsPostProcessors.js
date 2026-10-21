__d("WAWebUserPrefsPostProcessors", [
    "WABase64"
], function(t, n, r, o, a, i, l) {
    const e = {
        WANoiseInfo: s,
        WARoutingInfo: u
    };
    function s({ certificateChainBuffer: t, privKey: n, pubKey: r, recoveryToken: a }) {
        const i = {
            recoveryToken: o("WABase64").decodeB64(a),
            staticKeyPair: {
                pubKey: o("WABase64").decodeB64(r),
                privKey: o("WABase64").decodeB64(n)
            },
            certificateChainBuffer: t != null ? o("WABase64").decodeB64(t) : void 0
        };
        return i;
    }
    function u({ domain: t, edgeRouting: n }) {
        const r = {
            domain: t,
            edgeRouting: n != null ? o("WABase64").decodeB64(n) : null
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
    l.postProcessUserPref = c;
}, 98);