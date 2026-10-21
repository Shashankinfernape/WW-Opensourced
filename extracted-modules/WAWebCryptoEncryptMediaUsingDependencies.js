__d("WAWebCryptoEncryptMediaUsingDependencies", [
    "Promise",
    "WAArrayBuffersConcat",
    "WACryptoAesCbc",
    "WALogger",
    "WAPromiseProps",
    "WATypedArraysConcat",
    "WAWebCommonTaskScheduler",
    "WAWebCryptoCalculateFirstFrameSidecar",
    "WAWebCryptoCalculateStreamingSidecar",
    "WAWebCryptoCreateMediaKeys",
    "WAWebMediaFileErrors",
    "WAWebMmsMediaTypes",
    "WAWebServerPropConstants",
    "WAWebWebpParseWebp",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = 10;
    function m(e) {
        return e > o("WAWebServerPropConstants").DEFAULT_MAX_FILE_SIZE_BYTES;
    }
    function p({ ivCiphertext: t, macKey: r, signature: a }) {
        const i = o("WAArrayBuffersConcat").concatArrayBuffers(t, a);
        return {
            sidecar: o("WAWebCryptoCalculateStreamingSidecar").calculateStreamingSidecar(i, r),
            firstFrameSidecar: (c || (c = n("Promise"))).resolve()
        };
    }
    function _({ ivCiphertext: t, macKey: a, plaintext: i, signature: l }) {
        const s = o("WAWebWebpParseWebp").parseWebp(i);
        const u = s.firstFrameLength;
        return {
            sidecar: (c || (c = n("Promise"))).resolve(),
            firstFrameSidecar: u != null ? r("WAWebCryptoCalculateFirstFrameSidecar")(u, o("WAArrayBuffersConcat").concatArrayBuffers(t, l), a) : (c || (c = n("Promise"))).resolve()
        };
    }
    const f = new Map([
        [
            o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO,
            p
        ],
        [
            o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO,
            p
        ],
        [
            o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER,
            _
        ]
    ]);
    function g(e, t, n, r) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a, i) {
            let s;
            const { encKey: u, iv: p, macKey: _ } = a;
            const g = m(e.byteLength) ? yield o("WACryptoAesCbc").aesCbcEncryptWithChunking({
                encKey: u,
                plaintext: e,
                optionalIv: p,
                delayInBetween: true,
                yieldFn: function() {
                    return r("WAWebCommonTaskScheduler").yield();
                }
            }) : yield o("WACryptoAesCbc").aesCbcEncrypt(u, e, p);
            const h = yield i.computeHmac({
                macKey: _,
                data: g,
                length: d,
                plaintextByteLength: e.byteLength
            });
            const { data: y, hmac: C, macKey: b } = h;
            const v = ((s = f.get(t)) == null ? void 0 : s({
                plaintext: e,
                ivCiphertext: y,
                signature: C,
                macKey: b
            })) ?? {};
            const S = v.sidecar;
            const R = S === void 0 ? (c || (c = n("Promise"))).resolve() : S;
            const L = v.firstFrameSidecar;
            const E = L === void 0 ? (c || (c = n("Promise"))).resolve() : L;
            const k = new Uint8Array(y).subarray(p.byteLength);
            const I = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                k,
                new Uint8Array(C)
            ]).buffer;
            const T = i.computeFilehash({
                ciphertextHmac: I,
                plaintextByteLength: e.byteLength
            });
            const D = yield o("WAPromiseProps").promiseProps({
                filehash: T,
                sidecar: R,
                firstFrameSidecar: E
            });
            return {
                ciphertextHmac: D.filehash.ciphertextHmac,
                hash: D.filehash.hash,
                sidecar: D.sidecar,
                firstFrameSidecar: D.firstFrameSidecar
            };
        });
        return h.apply(this, arguments);
    }
    function y(t) {
        return function({ mediaKey: a, plaintext: l, type }) {
            return new (c || (c = n("Promise")))(function(n, i) {
                const c = {
                    mediaKey: a.slice(0, 10),
                    type
                };
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptMedia: start"
                ])));
                if (!type) {
                    throw new (o("WAWebMediaFileErrors")).MediaEncryptionError('encryptMedia: missing "type"');
                }
                if (!a) {
                    throw new (o("WAWebMediaFileErrors")).MediaEncryptionError('encryptMedia: missing "mediaKey"');
                }
                r("WAWebCryptoCreateMediaKeys")(type, a).then((e)=>g(l, type, e, t)).then((e)=>{
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "encryptMedia: success"
                    ])));
                    n(e);
                }).catch((e)=>{
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "encryptMedia: error"
                    ])));
                    throw e instanceof o("WAWebMediaFileErrors").MediaEncryptionError ? e : new (o("WAWebMediaFileErrors")).MediaEncryptionError(`encryption error: ${String(e)}; stack: ${r("getErrorSafe")(e).stack}`);
                }).catch(i);
            });
        };
    }
    l.createEncryptMediaUsingDependencies = y;
}, 98);