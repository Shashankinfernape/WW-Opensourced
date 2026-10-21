__d("WAWebUploadManagerBase", [
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WAMemoizeConcurrent",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebCryptoRandomMediaKey",
    "WAWebFileUtils",
    "WAWebMediaDebugString",
    "WAWebMmsClientErrors",
    "WAWebMmsMediaTypes",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b = 0;
    function v() {
        return `${b++}`;
    }
    function S({ mediaKey: t, mediaKeyTimestamp: n }) {
        if (t != null && n != null) {
            return {
                mediaKey: t,
                mediaKeyTimestamp: n
            };
        }
        const o = r("WAWebCryptoRandomMediaKey")();
        const { key: a, timestamp: i } = o;
        return {
            mediaKey: a,
            mediaKeyTimestamp: i
        };
    }
    function R(e, t) {
        if (e !== o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT) {
            return false;
        }
        const n = o("WAWebABProps").getABPropConfigValue("web_streaming_document_encrypt_min_bytes");
        return n > 0 && t.size >= n;
    }
    const L = (()=>{
        function t(t) {
            const a = this;
            this.$1 = r("WAMemoizeConcurrent")(function(e) {
                return e.token;
            }, (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    const { encFilehash: n, type: i } = t;
                    const l = {
                        encFilehash: n,
                        type: i
                    };
                    const d = o("WAWebMediaDebugString").getDebugString(n);
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "uploadManager.checkIfAlreadyUploaded: [",
                        "] start"
                    ])), d);
                    try {
                        const m = yield a.deps.mmsClient.checkIfUploadExists(t).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMmsClientErrors").MediaNotFoundError, o("WAWebNullFunc").returnNull));
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "uploadManager.checkIfAlreadyUploaded: [",
                            "] success"
                        ])), d);
                        return m;
                    } catch (e) {
                        if (r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR) {
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "uploadManager.checkIfAlreadyUploaded: [",
                                "] canceled"
                            ])), d);
                        } else {
                            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "uploadManager.checkIfAlreadyUploaded: [",
                                "] error"
                            ])), d);
                        }
                        throw e;
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })());
            this.memoizedUpload = r("WAMemoizeConcurrent")(function(e) {
                return e.token;
            }, (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const { ciphertextHmac: n, encFilehash: r, generateThumbnailOnServer: o, mediaId: i, onFinalize: l, onProgress: s, onStreamUploadStart: u, onUploadAttemptError: c, onUploadAttemptSuccess: d, onUploadHostFound: m, onUploadSuccess: p, signal: _, type: f } = e;
                    const g = yield a.deps.mmsClient.upload({
                        ciphertextHmac: n,
                        encFilehash: r,
                        type: f,
                        signal: _,
                        onUploadHostFound: m,
                        onUploadAttemptSuccess: d,
                        onUploadAttemptError: c,
                        onProgress: s,
                        byteOffset: e.byteOffset ?? 0,
                        onFinalize: l,
                        onStreamUploadStart: u,
                        mediaId: i,
                        token: e.token,
                        generateThumbnailOnServer: o
                    });
                    p();
                    return g;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            this.getExistingOrUpload = r("WAMemoizeConcurrent")(function(e) {
                return e.token;
            }, (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const { ciphertextHmac: t, encFilehash: n, generateThumbnailOnServer: i, mediaId: l, onCheckExistingError: s, onCheckExistingSuccess: u, onFinalize: c, onProgress: f, onStreamUploadStart: g, onUploadAttemptError: h, onUploadAttemptSuccess: y, onUploadHostFound: C, onUploadSuccess: b, signal: v, type: S } = e;
                    const R = {
                        encFilehash: n,
                        type: S
                    };
                    const L = o("WAWebMediaDebugString").getDebugString(n);
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "uploadManager._getExistingOrUpload: [",
                        "] start"
                    ])), L);
                    try {
                        const E = yield a.$1({
                            encFilehash: n,
                            type: S,
                            signal: v,
                            mediaId: l,
                            token: e.token,
                            generateThumbnailOnServer: i
                        }).catch((e)=>{
                            s(r("getErrorSafe")(e));
                            throw e;
                        }).then((r)=>{
                            if (r?.complete === true) {
                                u();
                                return {
                                    directPath: r.directPath,
                                    handle: r.handle,
                                    url: r.url
                                };
                            }
                            return a.memoizedUpload({
                                ciphertextHmac: t,
                                encFilehash: n,
                                type: S,
                                signal: v,
                                onUploadHostFound: C,
                                onUploadAttemptSuccess: y,
                                onUploadAttemptError: h,
                                onUploadSuccess: b,
                                onCheckExistingSuccess: u,
                                onCheckExistingError: s,
                                onProgress: f,
                                onFinalize: c,
                                onStreamUploadStart: g,
                                byteOffset: r?.resume,
                                mediaId: l,
                                token: e.token,
                                generateThumbnailOnServer: i
                            });
                        });
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "uploadManager._getExistingOrUpload: [",
                            "] success"
                        ])), L);
                        return E;
                    } catch (e) {
                        if (r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR) {
                            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "uploadManager._getExistingOrUpload: [",
                                "] canceled"
                            ])), L);
                        } else {
                            o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "uploadManager._getExistingOrUpload: [",
                                "] error"
                            ])), L);
                        }
                        throw e;
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            this.deps = t;
        }
        const a = t.prototype;
        a.encryptAndUpload = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const a = this;
                const { blob: i, forwardedFromWeb: l, onFinalize: s, onProgress: u, signal: c, type: d } = e;
                const m = {
                    type: d
                };
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "uploadManager.encryptAndUpload: start"
                ])));
                e.uploadQpl.addPoint("upload_start");
                const { handleArrayBufferCreated: p, handleCheckExistingError: _, handleCheckExistingSuccess: b, handleEncryptionStart: v, handleEncryptionSuccess: L, handleStreamUploadStart: k, handleUploadAttemptError: I, handleUploadAttemptSuccess: T, handleUploadError: D, handleUploadHostFound: x, handleUploadProgress: $, handleUploadSuccess: P, mediaId: N } = t;
                const M = function(t, n) {
                    u?.(t, n);
                    const e = n + t.loaded;
                    $(e);
                };
                try {
                    const w = S(e);
                    let A;
                    if (i instanceof Blob && R(d, i)) {
                        const F = i;
                        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            p(F.size);
                            v();
                            a.deps.appTracker.start(o("WAWebAppTracker").AppTrackerType.MediaProcessing);
                            try {
                                return yield a.deps.encryptMediaFromBlob({
                                    type: d,
                                    blob: F,
                                    mediaKey: w.mediaKey
                                });
                            } finally{
                                a.deps.appTracker.stop(o("WAWebAppTracker").AppTrackerType.MediaProcessing);
                            }
                        })();
                    } else {
                        A = (C || (C = n("Promise"))).resolve(i).then((e)=>{
                            if (e instanceof Blob) {
                                return o("WAWebFileUtils").blobToArrayBuffer(e);
                            }
                            return e;
                        }).then((e)=>{
                            p(e.byteLength);
                            v();
                            a.deps.appTracker.start(o("WAWebAppTracker").AppTrackerType.MediaProcessing);
                            return a.deps.encryptMedia({
                                type: d,
                                plaintext: e,
                                mediaKey: w.mediaKey
                            }).finally(()=>{
                                a.deps.appTracker.stop(o("WAWebAppTracker").AppTrackerType.MediaProcessing);
                            });
                        });
                    }
                    const O = A.then(({ ciphertextHmac: r, firstFrameSidecar: o, hash: i, sidecar: u })=>{
                        L();
                        const m = e.mediaKey ? a.getExistingOrUpload : a.memoizedUpload;
                        return m({
                            ciphertextHmac: r,
                            encFilehash: i,
                            type: d,
                            signal: c,
                            onCheckExistingSuccess: b,
                            onCheckExistingError: _,
                            onUploadHostFound: x,
                            onUploadAttemptSuccess: T,
                            onUploadAttemptError: I,
                            onUploadSuccess: P,
                            onProgress: M,
                            onFinalize: s,
                            onStreamUploadStart: k,
                            mediaId: N,
                            token: e.token ?? i
                        }).then((e)=>({
                                directPath: l ? E(e.directPath) : e.directPath,
                                encFilehash: i,
                                mediaKey: w.mediaKey,
                                mediaKeyTimestamp: w.mediaKeyTimestamp,
                                sidecar: u,
                                firstFrameSidecar: o,
                                url: e.url,
                                handle: e.handle
                            }));
                    });
                    const B = yield O;
                    o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "uploadManager.encryptAndUpload: success"
                    ])));
                    e.uploadQpl.addPoint("upload_end");
                    e.uploadQpl.endSuccess();
                    return B;
                } catch (t) {
                    if (r("getErrorSafe")(t).name === o("WAAbortError").ABORT_ERROR) {
                        o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "uploadManager.encryptAndUpload: canceled"
                        ])));
                        e.uploadQpl.endFailWithError("upload_canceled", "aborted");
                    } else {
                        o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "uploadManager.encryptAndUpload: error"
                        ])));
                        e.uploadQpl.endFailWithError("upload_failed", r("getErrorSafe")(t).message);
                    }
                    D(r("getErrorSafe")(t));
                    throw t;
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    function E(e) {
        const t = e.split("?");
        const n = t[0];
        const r = t[1];
        const a = new URLSearchParams(r);
        const i = o("WATimeUtils").unixTime();
        a.set("_nc_hot", String(i));
        return `${n}?${a.toString()}`;
    }
    l.getNextUploadId = v;
    l.shouldStreamEncrypt = R;
    l.UploadManagerBase = L;
}, 98);