__d("WAWebCryptoDecryptPartialMedia", [
    "Promise",
    "WALogger",
    "WATypedArraysConcat",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = 16;
    const p = 10;
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ciphertext: t, iv: n, mediaKeys: r }) {
            const a = r.encKey;
            const i = {
                name: "AES-CBC",
                iv: n
            };
            try {
                const l = yield self.crypto.subtle.importKey("raw", new Uint8Array(a), "AES-CBC", false, [
                    "decrypt"
                ]).catch((e)=>{
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptPartialMedia:decrypt importKey error: ",
                        ""
                    ])), String(e));
                    throw e;
                });
                return self.crypto.subtle.decrypt(i, l, t);
            } catch (e) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptPartialMedia:decrypt decrypt error: ",
                    ""
                ])), String(e));
                throw e;
            }
        });
        return f.apply(this, arguments);
    }
    const g = (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ciphertext: n, mediaKeys: r }) {
            const a = r.encKey;
            const i = n instanceof Uint8Array ? n : new Uint8Array(n);
            const l = {
                name: "AES-CBC",
                iv: i.slice(0 - m)
            };
            try {
                const u = yield self.crypto.subtle.importKey("raw", new Uint8Array(a), "AES-CBC", false, [
                    "encrypt"
                ]).catch((t)=>{
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptPartialMedia:getEncryptedPadding importKey error: ",
                        ""
                    ])), String(t));
                });
                const c = new Uint8Array([]);
                return self.crypto.subtle.encrypt(l, u, c);
            } catch (e) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptPartialMedia:getEncryptedPadding encrypt error: ",
                    ""
                ])), String(e));
                return;
            }
        });
        return function(n) {
            return t.apply(this, arguments);
        };
    })();
    function h({ ciphertext: t, mediaKeys: r, serverRangeStart: a }) {
        let i = t instanceof Uint8Array ? t : new Uint8Array(t);
        const l = a === 0;
        const s = i.byteLength % m === 0;
        const u = !s;
        let c;
        if (l) {
            c = new Uint8Array(r.iv);
        } else {
            c = i.slice(0, m);
            i = i.slice(m);
        }
        if (u) {
            i = i.slice(0, i.byteLength - p);
        }
        if (s) {
            return g({
                ciphertext: i,
                mediaKeys: r
            }).then((e)=>{
                i = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                    i,
                    new Uint8Array(e)
                ]);
                return {
                    ciphertext: i,
                    iv: c
                };
            });
        }
        return (d || (d = n("Promise"))).resolve({
            ciphertext: i,
            iv: c
        });
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ciphertext: t, mediaKeys: n }) {
            const r = yield h({
                serverRangeStart: 0,
                ciphertext: t,
                mediaKeys: n
            });
            const { ciphertext: o, iv: a } = r;
            return _({
                ciphertext: o,
                iv: a,
                mediaKeys: n
            });
        });
        return C.apply(this, arguments);
    }
    l.BLOCK_SIZE = m;
    l.HMAC_SIZE = p;
    l.decrypt = _;
    l.cleanupCiphertextAndIv = h;
    l.decryptPartialMedia = y;
}, 98);