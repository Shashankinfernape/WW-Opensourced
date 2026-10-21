__d("WAWebCryptoEncryptMediaFromBlob", [
    "Promise",
    "WACryptoAesCbc",
    "WACryptoSha256HmacBuilder",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAMediaCrypto",
    "WATypedArraysCast",
    "WAWebCryptoCreateMediaKeys",
    "WAWebFileUtils",
    "WAWebMediaFileErrors",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = 16777216;
    function m({ blob, mediaKey, type }) {
        return new (c || (c = n("Promise")))(function(t, n) {
            const c = {
                mediaKey: mediaKey.slice(0, 10),
                type
            };
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptMediaFromBlob: start"
            ])));
            if (!type) {
                throw new (o("WAWebMediaFileErrors")).MediaEncryptionError('encryptMediaFromBlob: missing "type"');
            }
            if (!mediaKey) {
                throw new (o("WAWebMediaFileErrors")).MediaEncryptionError('encryptMediaFromBlob: missing "mediaKey"');
            }
            r("WAWebCryptoCreateMediaKeys")(type, mediaKey).then((e)=>p(blob, e)).then((e)=>{
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptMediaFromBlob: success"
                ])));
                t(e);
            }).catch((e)=>{
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptMediaFromBlob: error"
                ])));
                throw e instanceof o("WAWebMediaFileErrors").MediaEncryptionError ? e : new (o("WAWebMediaFileErrors")).MediaEncryptionError(`encryption error: ${String(e)}; stack: ${r("getErrorSafe")(e).stack}`);
            }).catch(n);
        });
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { encKey, iv, macKey }) {
            let n;
            const l = yield (n = o("WACryptoAesCbc")).importRawKey(encKey);
            const s = n.getIv(iv);
            const e_size = e.size;
            const c = e_size + (n.AES_CBC_BLOCK_SIZE - e_size % n.AES_CBC_BLOCK_SIZE);
            const m = new Uint8Array(c + o("WAMediaCrypto").HMAC_LENGTH);
            for(let p = Math.max(1, Math.ceil(e_size / d)), _ = 0, f = s, g = 0; g < p; g++){
                const h = g === p - 1;
                const y = g * d;
                const C = Math.min(y + d, e_size);
                const b = yield o("WAWebFileUtils").blobToArrayBuffer(e.slice(y, C));
                const v = new Uint8Array(b);
                const S = yield o("WACryptoAesCbc").aesCbcEncryptChunk(h, v, f, l);
                const { encryptedChunk, nextIv } = S;
                m.set(encryptedChunk, _);
                _ += encryptedChunk.byteLength;
                f = nextIv;
            }
            const E = new (o("WACryptoSha256HmacBuilder")).Sha256HMacBuilder(o("WATypedArraysCast").castTypedArrays(Uint8Array, macKey)).update(s).update(m.subarray(0, c)).finish().subarray(0, o("WAMediaCrypto").HMAC_LENGTH);
            m.set(E, c);
            const hash = yield o("WAMediaCalculateFilehash").calculateFilehash(m);
            return {
                ciphertextHmac: m.buffer,
                hash,
                sidecar: undefined,
                firstFrameSidecar: undefined
            };
        });
        return _.apply(this, arguments);
    }
    l.default = m;
}, 98);