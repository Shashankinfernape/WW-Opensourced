__d("WAMediaCrypto", [
    "Promise",
    "WABinary",
    "WACryptoAesCbc",
    "WACryptoDependencies",
    "WACryptoHkdf",
    "WACryptoHmac",
    "WACryptoSha256",
    "WACryptoUtils",
    "WACustomError",
    "WAHashUtils",
    "WAMediaCryptoSidecar",
    "WAMediaHkdfInfo",
    "WATagsLogger",
    "WATypedArraysConcat",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = o("WATagsLogger").TAGS([
        "WAMediaCrypto"
    ]);
    const d = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "HmacValidationError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const m = new Uint8Array([
        2,
        2
    ]);
    function p(e, t) {
        return o("WACryptoHkdf").extractAndExpand(new Uint8Array(e), t, 112).then((e)=>({
                iv: new Uint8Array(e, 0, 16),
                cipherKey: new Uint8Array(e, 16, 32),
                hmacKey: new Uint8Array(e, 48, 32),
                refKey: new Uint8Array(e, 80, 32)
            }));
    }
    function _(e, t) {
        const n = o("WAMediaHkdfInfo").getMediaHkdfInfo(t);
        return p(e, n);
    }
    function f(e) {
        const t = o("WAMediaHkdfInfo").getPreviewMediaHkdfInfo();
        return p(e, t);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Map;
            const r = yield f(e);
            t.set("preview", r);
            const o = [
                "document",
                "image",
                "video",
                "audio",
                "md-app-state",
                "md-msg-hist"
            ];
            yield (u || (u = n("Promise"))).all(o.map((n)=>_(e, n).then((e)=>{
                    t.set(n, e);
                })));
            return t;
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        switch(e){
            case "image":
            case "video":
                return e;
            default:
                return null;
        }
    }
    const C = 16;
    const b = 16;
    const v = 10;
    const S = 64 * 1024;
    function R(e, t, n, r, o) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a, i) {
            const l = new (o("WABinary")).Binary;
            l.ensureCapacity(b + a.byteLength + C + v);
            l.writeByteArray(t);
            const s = new (o("WACryptoAesCbc")).AesCbcStream(l, "encrypt", e, t);
            let c = 0;
            for(let d = c + S; d < a.byteLength;){
                const m = a.slice(c, d);
                yield s.append(new Uint8Array(m));
                c = d;
                d += S;
            }
            const p = yield a.slice(c);
            yield s.finalize(new Uint8Array(p));
            const ivCiphertext = l.peek(function(e) {
                return e.readByteArrayView();
            });
            const f = yield o("WACryptoHmac").encodeKeySha256(r);
            const g = yield o("WACryptoHmac").sign(f, ivCiphertext);
            l.writeByteArray(new Uint8Array(g, 0, v));
            const ivCiphertextHmac = l.readByteArrayView();
            const ciphertext = ivCiphertextHmac.subarray(b);
            const R = yield (u || (u = n("Promise"))).all([
                o("WACryptoDependencies").getCrypto().subtle.digest("SHA-256", ciphertext),
                o("WAMediaCryptoSidecar").shouldHaveStreamingSidecar(i) ? o("WAMediaCryptoSidecar").calculateStreamingSidecar(f, ivCiphertextHmac) : undefined
            ]);
            const ciphertextHash = R[0];
            const sidecar = R[1];
            return {
                ciphertext,
                ciphertextHash,
                sidecar,
                ivCiphertext,
                ivCiphertextHmac
            };
        });
        return L.apply(this, arguments);
    }
    function E(e, t, n) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = yield o("WACryptoHmac").encodeKeySha256(e);
            const a = o("WABinary").Binary.build(t, n).readByteArrayView();
            return o("WACryptoHmac").sign(r, a);
        });
        return k.apply(this, arguments);
    }
    function I(e, t, n, r, o) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a) {
            if (!(a.length >= 10 && a.length <= 32)) {
                throw new d(`Bad hmac size ${a.length}`);
            }
            const i = o("WABinary").Binary.build(t, n).readByteArrayView();
            const l = yield o("WACryptoHmac").hmacSha256(r, i).then((e)=>new Uint8Array(e));
            const s = l.slice(0, a.length);
            if (!N(s, a)) {
                throw new d("hmacAndDecrypt hmac mismatch");
            }
            const u = yield o("WACryptoAesCbc").aesCbcDecrypt(e, t, n);
            const c = yield o("WACryptoDependencies").getCrypto().subtle.digest("SHA-256", u);
            return {
                plaintextHash: o("WAHashUtils").toPlaintextHash(c),
                plaintext: u
            };
        });
        return T.apply(this, arguments);
    }
    function D(e, t, n, r, a) {
        if (!(a.length >= 10 && a.length <= 32)) {
            throw new d(`Bad hmac size ${a.length}`);
        }
        const i = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
            t,
            n
        ]);
        return o("WACryptoHmac").hmacSha256(r, i, a.length).then((e)=>new Uint8Array(e)).then((e)=>{
            if (!o("WACryptoUtils").uint8ArraysEqual(e, a)) {
                throw new d("hmacAndDecrypt hmac mismatch");
            }
        }).then(()=>{
            const e = n.byteLength % C === v;
            if (e === true) {
                return n.subarray(0, -10);
            }
            return n;
        }).then((n)=>x(e, t, n));
    }
    function x(e, t, n) {
        const nextIv = n.subarray(-C);
        return o("WACryptoAesCbc").aesCbcEncrypt(e, m, nextIv).then((e)=>e.slice(b)).then((e)=>o("WABinary").Binary.build(n, e).readByteArrayView()).then((n)=>o("WACryptoAesCbc").aesCbcDecrypt(e, t, n)).then((e)=>new Uint8Array(e, 0, e.byteLength - m.byteLength)).then((plaintext)=>({
                plaintext,
                nextIv
            }));
    }
    function $(e, t, n, r, o, a) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a, i, l, u) {
            if (l > u.scanLengths.length) {
                c.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptPartialChunks targetScan greater length of scanLength array"
                ])));
            }
            const d = Math.min(l, u.scanLengths.length);
            if (d < 1) {
                c.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Unable to decrypt partial due to invalid target scan"
                ])));
                throw r("err")("Unable to decrypt partial due to invalid target scan");
            }
            const m = new (o("WABinary")).Binary;
            const p = [];
            for(let _ = 0; _ < d; _++){
                p.push(new Uint8Array(u.sidecar, _ * 10, 10));
            }
            let f = 0;
            let g = n;
            let h = 0;
            for(let y = 0; y < d; y++){
                const C = u.alignedScanLengths[y];
                const b = f + C;
                const v = a.subarray(f, b);
                const S = yield D(t, g, v, i, p[y]);
                const { nextIv, plaintext } = S;
                m.write(plaintext);
                f += C;
                g = nextIv;
                h += u.scanLengths[y];
            }
            const E = m.readBuffer(h);
            const k = yield o("WACryptoSha256").sha256(E);
            return {
                plaintextHash: o("WAHashUtils").toPlaintextHash(k),
                plaintext: E
            };
        });
        return P.apply(this, arguments);
    }
    function N(e, t) {
        if (e.length !== t.length) {
            return false;
        }
        let n = 1;
        for(let r = e.length, o = 0; o < r; o++){
            n &= e[o] === t[o] ? 1 : 0;
        }
        return n !== 0;
    }
    l.HmacValidationError = d;
    l.DEFAULT_PADDING = m;
    l.computeMediaKeys = _;
    l.computeMediaKeysForPreview = f;
    l.deprecated_getAllCommonComputedMediaKeys = g;
    l.convertServerMediaTypeToPreviewMediaType = y;
    l.CBC_BLOCK_SIZE = C;
    l.IV_LENGTH = b;
    l.HMAC_LENGTH = v;
    l.encryptAndHmac = R;
    l.hmacCiphertext = E;
    l.hmacAndDecrypt = I;
    l.hmacAndDecryptPartial = D;
    l.decryptPartialChunks = $;
}, 98);