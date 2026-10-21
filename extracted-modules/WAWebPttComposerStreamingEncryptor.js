__d("WAWebPttComposerStreamingEncryptor", [
    "Promise",
    "WACryptoAesCbc",
    "WACryptoHmac",
    "WAMediaCalculateFilehash",
    "WAMediaCrypto",
    "WATypedArraysConcat",
    "WAWebCryptoCreateMediaKeys",
    "WAWebMmsMediaTypes",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (()=>{
        function t({ encKey, mediaKeys, onChunkEncrypted, onEncryptionCompleted }) {
            this.$6 = (e || (e = n("Promise"))).resolve();
            this.$3 = mediaKeys;
            this.$4 = encKey;
            this.$5 = o("WACryptoAesCbc").getIv(this.$3.iv);
            this.$2 = [
                this.$5
            ];
            this.$1 = new Uint8Array([]);
            this.$8 = onChunkEncrypted;
            this.$9 = onEncryptionCompleted;
            this.$7 = false;
        }
        const t_prototype = t.prototype;
        t_prototype.getMediaKeys = function() {
            return this.$3;
        };
        t_prototype.encryptChunk = function(t, a) {
            const e = this;
            if (this.$7) {
                throw r("err")("Encryption was already finalized");
            }
            if (a) {
                this.$7 = true;
            }
            const i = this.$10(t, a);
            if (i != null) {
                this.$6 = this.$6.then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const t = yield o("WACryptoAesCbc").aesCbcEncryptChunk(a, i, e.$5, e.$4);
                    e.$8?.(t.encryptedChunk);
                    yield e.$11(t, a);
                }));
            }
        };
        t_prototype.$11 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                this.$2.push(e.encryptedChunk);
                this.$5 = e.nextIv;
                if (t) {
                    const r = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, this.$2, o("WAMediaCrypto").HMAC_LENGTH);
                    const a = this.$2[0].byteLength;
                    const i = r.byteLength - o("WAMediaCrypto").HMAC_LENGTH;
                    const l = r.subarray(0, i);
                    const s = yield o("WACryptoHmac").hmacSha256(this.$3.macKey, l, o("WAMediaCrypto").HMAC_LENGTH);
                    r.set(new Uint8Array(s), i);
                    const u = r.subarray(a);
                    const c = yield o("WAMediaCalculateFilehash").calculateFilehash(u);
                    yield this.$9?.(s, c);
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$10 = function(t, n) {
            this.$1 = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                this.$1,
                t
            ]);
            if (this.$1.length >= o("WACryptoAesCbc").AES_CBC_BLOCK_SIZE || n) {
                const e = n ? this.$1.length : Math.floor(this.$1.length - this.$1.length % o("WACryptoAesCbc").AES_CBC_BLOCK_SIZE);
                const r = this.$1.slice(0, e);
                r.subarray();
                const a = new Uint8Array(this.$1.length - e);
                a.set(this.$1.slice(e, this.$1.length));
                this.$1 = a;
                return r;
            }
        };
        return t;
    })();
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const mediaKeys = yield r("WAWebCryptoCreateMediaKeys")(o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT, e.mediaKey);
            const encKey = yield o("WACryptoAesCbc").importRawKey(mediaKeys.encKey);
            return new s({
                mediaKeys,
                encKey,
                onChunkEncrypted: e.onChunkEncrypted,
                onEncryptionCompleted: e.onEncryptionCompleted
            });
        });
        return c.apply(this, arguments);
    }
    l.StreamingEncryptor = s;
    l.createStreamingEncryptor = u;
}, 98);