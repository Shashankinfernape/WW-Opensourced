__d("WAWebPollOptionHashUtils", [
    "WABase64",
    "WAHex",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return e;
    }
    function s(e) {
        return self.crypto.subtle.digest("SHA-256", new TextEncoder().encode(e));
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield s(e);
            return o("WAHex").toLowerCaseHex(new Uint8Array(t));
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return o("WAHex").toHex(e);
    }
    function m(e) {
        return o("WAHex").toHex(new Uint8Array(o("WABase64").decodeB64(e))).toUpperCase();
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield u(e);
            const r = n.concat(t);
            return u(r);
        });
        return _.apply(this, arguments);
    }
    l.createOptionHashHexFromString = e;
    l.getHashBufferForString = s;
    l.getHashHexForString = u;
    l.bufferToHex = d;
    l.base64ToHex = m;
    l.generatePollOptionHash = p;
}, 98);