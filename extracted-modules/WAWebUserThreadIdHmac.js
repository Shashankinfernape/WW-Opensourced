__d("WAWebUserThreadIdHmac", [
    "WABase64",
    "WACryptoHmac",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = new TextEncoder;
    function s(t) {
        return e.encode(t).buffer;
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield d(e);
            const r = s(t);
            const a = yield o("WACryptoHmac").hmacSha256(n, r);
            return o("WABase64").encodeB64(a);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = s(e);
            return self.crypto.subtle.digest("SHA-256", t);
        });
        return m.apply(this, arguments);
    }
    l.generateUserThreadIDHMAC = u;
}, 98);