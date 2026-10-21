__d("WAWebCryptoDecryptMedia", [
    "WACryptoAesCbc",
    "WACryptoHmac",
    "WACryptoUtils",
    "WACustomError",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAPromiseTimeout",
    "WATypedArraysCast",
    "WATypedArraysConcat",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebBackendWorkerClient",
    "WAWebCommonTaskScheduler",
    "WAWebMediaFileErrors",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const truncateLength = 10;
    const _ = 3000;
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ciphertextHmac, debugString, expectedPlaintextHash, mediaKeys }) {
            const d = o("WAWebABProps").getABPropConfigValue("web_anr_async_media_decryption_enabled");
            yield r("WAWebCommonTaskScheduler").yield();
            const m = {
                mediaKeys
            };
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "decryptMedia: [",
                "] start"
            ])), debugString);
            if (ciphertextHmac.byteLength < truncateLength) {
                throw new (o("WAWebMediaFileErrors")).MediaDecryptionError(`ciphertext too short: ${ciphertextHmac.byteLength}`);
            }
            const { encKey, iv, macKey } = mediaKeys;
            const y = o("WATypedArraysCast").castTypedArrays(Uint8Array, ciphertextHmac);
            try {
                const b = o("WAWebABProps").getABPropConfigValue("web_media_compute_in_worker_enabled");
                const S = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                    new Uint8Array(iv),
                    y.subarray(0, 0 - truncateLength)
                ]);
                return yield (b ? v({
                    macKey,
                    data: S,
                    truncateLength
                }) : o("WACryptoHmac").hmacSha256(macKey, S, truncateLength)).then((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const t = y.buffer.slice(0 - truncateLength);
                        if (!o("WACryptoUtils").arrayBuffersEqual(e, t)) {
                            throw new (o("WAWebMediaFileErrors")).MediaDecryptionError(`decryptMedia: ${o("WAWebMediaFileErrors").HMAC_MISMATCH_ERROR}`);
                        }
                        if (d) {
                            yield r("WAWebCommonTaskScheduler").yield();
                        }
                        const n = y.subarray(0, 0 - truncateLength);
                        if (b) {
                            return h({
                                encKey,
                                iv,
                                ciphertext: n
                            });
                        }
                        return C({
                            encKey,
                            iv,
                            ciphertext: n
                        });
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()).then((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        if (expectedPlaintextHash == null) {
                            return e;
                        }
                        if (d) {
                            yield r("WAWebCommonTaskScheduler").yield();
                        }
                        const t = b ? yield R(e) : yield o("WAMediaCalculateFilehash").calculateFilehash(e);
                        if (t !== expectedPlaintextHash) {
                            throw new (o("WAWebMediaFileErrors")).MediaDecryptionError(`decryptMedia: ${o("WAWebMediaFileErrors").PLAINTEXT_HASH_MISMATCH_ERROR}`);
                        }
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "decryptMedia: [",
                            "] success"
                        ])), debugString);
                        return e;
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptMedia: [",
                    "] error"
                ])), debugString);
                if (error instanceof o("WAWebMediaFileErrors").MediaDecryptionError) {
                    throw error;
                }
                const L = r("getErrorSafe")(error);
                throw new (o("WAWebMediaFileErrors")).MediaDecryptionError(`decryption error: ${String(L)}; stack: ${L.stack}`);
            }
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ciphertext, encKey, iv }) {
            const a = yield o("WAPromiseTimeout").promiseTimeout(o("WAWebBackendWorkerClient").getBackendWorkerBridge(), _, "[media][crypto] backend worker bridge timed out").catch((e)=>{
                if (e instanceof o("WACustomError").TimeoutError) {
                    return null;
                }
                throw e;
            });
            if (a == null) {
                const isABPropsReady = o("WAWebABPropsCache").isABPropConfigsReady();
                const isBridgeReady = o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady();
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[media][crypto] worker bridge timeout, fallback to main ",
                    ""
                ])), {
                    isABPropsReady,
                    isBridgeReady
                });
                return C({
                    encKey,
                    iv,
                    ciphertext
                });
            }
            return a.sendAndReceive("crypto", "aesCbcDecrypt", {
                encKey,
                iv,
                ciphertext
            }, false, undefined, undefined, [
                ciphertext.buffer
            ]);
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ciphertext, encKey, iv }) {
            return o("WACryptoAesCbc").aesCbcDecrypt(encKey, iv, ciphertext);
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ data, macKey, truncateLength }) {
            const a = yield o("WAPromiseTimeout").promiseTimeout(o("WAWebBackendWorkerClient").getBackendWorkerBridge(), _, "[media][crypto] backend worker bridge timed out (hmac)").catch((e)=>{
                if (e instanceof o("WACustomError").TimeoutError) {
                    return null;
                }
                throw e;
            });
            if (a == null) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[media][crypto] bridge timeout (hmac), main fallback"
                ])));
                return o("WACryptoHmac").hmacSha256(macKey, data, truncateLength);
            }
            return a.sendAndReceive("crypto", "hmacSha256", {
                macKey,
                data,
                truncateLength
            }, false, undefined, undefined, [
                data.buffer
            ]);
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAPromiseTimeout").promiseTimeout(o("WAWebBackendWorkerClient").getBackendWorkerBridge(), _, "[media][crypto] backend worker bridge timed out (filehash)").catch((e)=>{
                if (e instanceof o("WACustomError").TimeoutError) {
                    return null;
                }
                throw e;
            });
            if (t == null) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[media][crypto] bridge timeout (filehash), main fallback"
                ])));
                return o("WAMediaCalculateFilehash").calculateFilehash(e);
            }
            return t.sendAndReceive("crypto", "sha256Base64", {
                data: e
            });
        });
        return L.apply(this, arguments);
    }
    l.default = f;
}, 98);