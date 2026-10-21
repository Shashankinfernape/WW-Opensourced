__d("WAWebCryptoImageStreamer", [
    "Promise",
    "WAAlignChunkLengthsToMultipleOfAesBlockSize",
    "WAArrayBufferUtils",
    "WAArrayBuffersConcat",
    "WACrypto",
    "WACryptoAesCbc",
    "WACryptoHmac",
    "WACryptoUtils",
    "WACustomError",
    "WALogger",
    "WATypedArraysConcat",
    "WAWebIdentityFunction",
    "WAWebMediaInMemoryBlobCache",
    "WAWebPromiseQueue",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
    "sumBy"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, `Chunk ${t} does not match sidecar`) || this;
            n.name = "ChunkValidationError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const g = 10;
    const h = 16;
    const y = new Uint8Array([
        2,
        2
    ]);
    const C = new Uint8Array([
        255,
        217
    ]);
    const b = (()=>{
        function t(e) {
            this._alignedScanLengths = [];
            this._increasingScanLengths = [];
            this._lastDecryptedChunk = 0;
            this._promiseQueue = new (o("WAWebPromiseQueue")).PromiseQueue;
            this._downloadedBytes = new ArrayBuffer(0);
            const { cryptoKeys, debugString, filehash, mimetype, onProgressiveUpdate, scanLengths, scansSidecar } = e;
            this._cryptoKeys = cryptoKeys;
            this._scanLengths = scanLengths;
            this._scansSideCar = scansSidecar;
            this._filehash = filehash;
            this._mimetype = mimetype;
            this._nextChunkIV = this._cryptoKeys?.iv;
            this._decryptedChunks = new Array(scanLengths.length);
            this._onProgressiveUpdate = onProgressiveUpdate;
            this._debugString = debugString;
        }
        const t_prototype = t.prototype;
        t_prototype.setCryptoKeys = function(t) {
            this._cryptoKeys = t;
            this._nextChunkIV = t.iv;
        };
        t_prototype._validateSidecar = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                if (t === 0) {
                    this._nextChunkIV = n.iv;
                }
                const n_macKey = n.macKey;
                const i = this._scansSideCar.slice(t * g, t * g + g);
                const l = r("nullthrows")(this._nextChunkIV);
                this._nextChunkIV = e.slice(0 - h);
                const s = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                    new Uint8Array(l),
                    new Uint8Array(e)
                ]);
                const u = yield o("WACryptoHmac").hmacSha256(n_macKey, s, g);
                if (!o("WACryptoUtils").arrayBuffersEqual(u, i)) {
                    throw new f(t);
                }
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype._cleanupCipherTextAndIV = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chunkIndex, cipherText, cryptoKeys }) {
                let a = cipherText;
                const i = chunkIndex === 0;
                const l = a.byteLength % h === 0;
                const s = !l;
                let u;
                if (i) {
                    u = cryptoKeys.iv;
                } else {
                    const c = this._increasingScanLengths[chunkIndex - 1];
                    u = this._downloadedBytes.slice(c - h, c);
                }
                if (s) {
                    a = a.slice(0, a.byteLength - g);
                }
                if (l) {
                    const d = yield v(a, cryptoKeys);
                    return {
                        cipherText: o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                            new Uint8Array(a),
                            new Uint8Array(d)
                        ]),
                        iv: u
                    };
                }
                return {
                    cipherText: a,
                    iv: u
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype._getLastFullyLoadedChunkIndex = function(t) {
            let e = 0;
            for(let n = 0; n < this._alignedScanLengths.length; n++){
                e += this._alignedScanLengths[n];
                if (t < e) {
                    return n;
                }
            }
            return this._alignedScanLengths.length;
        };
        t_prototype._handleChunk = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, chunkIndex, cryptoKeys) {
                yield this._validateSidecar(t, chunkIndex, cryptoKeys);
                const a = yield this._cleanupCipherTextAndIV({
                    chunkIndex,
                    cipherText: t,
                    cryptoKeys
                });
                const { cipherText, iv } = a;
                const s = yield o("WACryptoAesCbc").aesCbcDecrypt(cryptoKeys.encKey, iv, cipherText);
                const u = yield o("WACrypto").removeEncryptedPadding(s, y.buffer);
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "ImageStreamer: [",
                    "] Successfully decrypted chunk ",
                    " of ",
                    " total"
                ])), this._debugString, chunkIndex + 1, this._scanLengths.length);
                return u;
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype._generateBlobFromFullyLoadedChunks = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const a = yield (_ || (_ = n("Promise"))).all(this._decryptedChunks.slice(0, e));
                const i = r("sumBy")(this._scanLengths.slice(0, e), o("WAWebIdentityFunction").identityFunction);
                const l = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, a.map((e)=>new Uint8Array(e))).slice(0, i);
                const u = o("WACryptoUtils").arrayBuffersEqual(C.buffer, l.slice(-C.length).buffer) ? l : o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                    l,
                    C
                ]);
                const c = [
                    u
                ];
                const d = this._mimetype != null ? new Blob(c, {
                    type: this._mimetype
                }) : new Blob(c);
                const m = R(this._filehash, e);
                o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(m, d);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[ImageStreamer] progressive img ",
                    "/",
                    " chunks"
                ])), e, this._scanLengths.length);
                this._onProgressiveUpdate?.(e);
                this._lastDecryptedChunk = e;
                return u.buffer;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype._decryptFullyLoadedChunks = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
                for(let o = 0; o < t; o++){
                    if (!this._decryptedChunks[o]) {
                        const a = o === 0 ? 0 : this._increasingScanLengths[o - 1];
                        const i = e.slice(a, a + this._alignedScanLengths[o]);
                        yield (_ || (_ = n("Promise"))).all(this._decryptedChunks);
                        if (!this._decryptedChunks[o]) {
                            this._decryptedChunks[o] = this._handleChunk(i, o, r);
                        }
                    }
                }
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.handleProgress = function(t, a) {
            const e = this;
            return this._promiseQueue.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!e._alignedScanLengths.length) {
                    e._alignedScanLengths = o("WAAlignChunkLengthsToMultipleOfAesBlockSize").alignChunkLengthsToMultipleOfAesBlockSize(e._scanLengths, t);
                    for(let n = 0; n < e._alignedScanLengths.length; n++){
                        const _alignedScanLength = e._alignedScanLengths[n];
                        const l = n === 0 ? _alignedScanLength : e._increasingScanLengths[n - 1] + _alignedScanLength;
                        e._increasingScanLengths.push(l);
                    }
                }
                const s = typeof a === "string" ? a.length : a.byteLength + e._downloadedBytes.byteLength;
                const _ = e._getLastFullyLoadedChunkIndex(s);
                const e__cryptoKeys = e._cryptoKeys;
                if (_ <= e._lastDecryptedChunk || e__cryptoKeys == null) {
                    e._downloadedBytes = o("WAArrayBuffersConcat").concatArrayBuffers(e._downloadedBytes, typeof a === "string" ? yield o("WAArrayBufferUtils").largeStringToArrayBuffer(a.slice(e._downloadedBytes.byteLength)) : a);
                    return null;
                }
                try {
                    const h = typeof a === "string" ? yield o("WAArrayBufferUtils").largeStringToArrayBuffer(a.slice(e._downloadedBytes.byteLength)) : a;
                    e._downloadedBytes = o("WAArrayBuffersConcat").concatArrayBuffers(e._downloadedBytes, h);
                    yield e._decryptFullyLoadedChunks(e._downloadedBytes, _, e__cryptoKeys);
                    return yield e._generateBlobFromFullyLoadedChunks(_);
                } catch (error) {
                    const y = r("getErrorSafe")(error);
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "ImageStreamer:handleProgress error: ",
                        ""
                    ])), y.message).catching(y);
                    const C = `${y.message}, [${e._debugString}]${`scanLengths length: ${e._scanLengths.length}, scansSidecar byteLength: ${e._scansSideCar.byteLength}.`}`;
                    if (error instanceof f) {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "ImageStreamer:chunk validation error: ",
                            ""
                        ])), C);
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "ImageStreamer:chunk validation error"
                        ]))).tags("non-sad").sendLogs("ImageStreamer:chunk validation error", {
                            sampling: 0.01
                        });
                    } else {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "ImageStreamer:handleProgress error: ",
                            ""
                        ])), C);
                        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "ImageStreamer:handleProgress error"
                        ]))).sendLogs("ImageStreamer:handleProgress error");
                    }
                }
            }));
        };
        return t;
    })();
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { encKey }) {
            const r = yield o("WACryptoAesCbc").aesCbcEncrypt(encKey, y, new Uint8Array(e.slice(0 - h)));
            return r.slice(0 - h);
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        return `${e}-progressive-${t}`;
    }
    function L(e, t) {
        if (t != null && Number.isInteger(t)) {
            for(let n = t; n > 0;){
                o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.delete(R(e, n));
                n--;
            }
        }
        o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.delete(e);
    }
    l.EOI_TAG = C;
    l.ImageStreamer = b;
    l.getProgressiveMediaCacheKey = R;
    l.deleteFromInMemoryMediaBlobCache = L;
}, 98);