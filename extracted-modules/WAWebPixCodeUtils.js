__d("WAWebPixCodeUtils", [
    "WACrc16",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "0014br.gov.bcb.pix01";
    const s = "000201";
    const u = "26";
    const c = "52040000";
    const d = "5303986";
    const m = "5802BR";
    const p = "59";
    const _ = "6001";
    const f = "54";
    const g = "62";
    const h = "05";
    const y = "070503***";
    const C = "6304";
    const b = 4;
    const v = 25;
    function S({ merchantName, pixKey, referenceId, transactionAmount }) {
        const l = e + R(pixKey);
        const g = E(merchantName);
        const h = g.substring(0, v);
        const y = s.concat(u, R(l), c, d, m, p, R(h), _, "*", f, R(transactionAmount), k(referenceId));
        return y.concat(o("WACrc16").crc16(y).toString(16).padStart(b, "0").toUpperCase());
    }
    function R(e) {
        if (L(e)) {
            return "";
        }
        return e.length.toString().padStart(2, "0") + e;
    }
    function L(e) {
        return e == null || e.trim().length === 0;
    }
    function E(merchantName) {
        return merchantName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    function k(referenceId) {
        return g.concat(L(referenceId) ? y : R(h.concat(R(r("nullthrows")(referenceId)))), C);
    }
    l.getPixStaticCode = S;
}, 98);