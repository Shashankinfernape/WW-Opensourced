__d("WASignalPQKeys", [
    "WAKemModule",
    "WASignalPQTypes",
    "WASignalSignatures",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e < 0 || e >= o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER) {
                throw r("err")(`PQ: invalid prekey ID ${e}, must be in [0, ${o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER})`);
            }
            const n = yield o("WAKemModule").generateKeyPair();
            const a = yield o("WASignalSignatures").signMsg(t, n.publicKey);
            return {
                id: e,
                keyPair: n,
                signature: new Uint8Array(a),
                timestamp: Date.now()
            };
        });
        return s.apply(this, arguments);
    }
    function u(e, t, n, r) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r, a) {
            const i = [];
            for(let l = 0; l < n; l++){
                yield a?.();
                const s = (t + l) % o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER;
                const u = yield e(s, r);
                i.push(u);
            }
            return i;
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e < 0 || e >= o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER) {
                throw r("err")(`PQ: invalid last resort key ID ${e}, must be in [0, ${o("WASignalPQTypes").PQ_PRE_KEY_NON_INCLUSIVE_UPPER_BORDER})`);
            }
            const n = yield o("WAKemModule").generateKeyPair();
            const a = yield o("WASignalSignatures").signMsg(t, n.publicKey);
            return {
                id: e,
                keyPair: n,
                signature: new Uint8Array(a),
                timestamp: Date.now()
            };
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return {
            id: e.id,
            publicKey: e.keyPair.publicKey,
            signature: e.signature
        };
    }
    l.generateKyberPreKey = e;
    l.generateKyberPreKeys = u;
    l.generateKyberLastResortKey = d;
    l.serializeKyberPreKeyForUpload = p;
}, 98);