__d("WACryptoAesGcm", [
    "WABinary",
    "WACryptoDependencies",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, o) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a = 16) {
            const i = {
                name: "AES-GCM",
                iv: m(t),
                tagLength: a * 8
            };
            if (r != null) {
                i.additionalData = m(r);
            }
            return o("WACryptoDependencies").getCrypto().subtle.encrypt(i, (yield d(e)), n);
        });
        return s.apply(this, arguments);
    }
    function u(e, t, n, r, o) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a = 16) {
            const i = {
                name: "AES-GCM",
                iv: m(t),
                tagLength: a * 8
            };
            if (r != null) {
                i.additionalData = m(r);
            }
            return o("WACryptoDependencies").getCrypto().subtle.decrypt(i, (yield d(e)), n);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return o("WACryptoDependencies").getCrypto().subtle.importKey("raw", e, "AES-GCM", false, [
            "encrypt",
            "decrypt"
        ]);
    }
    function m(e) {
        if (e instanceof Uint8Array) {
            return e;
        }
        if (typeof e === "string") {
            const t = new (o("WABinary")).Binary;
            t.writeString(e);
            return t.readByteArrayView();
        }
        return new Uint8Array(e);
    }
    l.gcmEncrypt = e;
    l.gcmDecrypt = u;
}, 98);