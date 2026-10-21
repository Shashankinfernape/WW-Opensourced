__d("WAWebDownloadManager", [
    "Promise",
    "WAAsyncCache",
    "WAConcurrentPriorityPromiseQueue",
    "WALogger",
    "WAMemoizeConcurrent",
    "WAResultOrError",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebBackendErrors",
    "WAWebCreateMediaDownloadMetrics",
    "WAWebCryptoCreateMediaKeys",
    "WAWebCryptoDecryptMedia",
    "WAWebCryptoDecryptMediaV2",
    "WAWebCryptoDecryptPartialMedia",
    "WAWebCryptoImageStreamer",
    "WAWebDownloadAndDecryptCache",
    "WAWebDownloadManagerErrors",
    "WAWebFrontendMsgGetters",
    "WAWebGetMediaDownloadByterange",
    "WAWebGetUserMediaErrors",
    "WAWebKaleidoscopeWasmFeatureSupport",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDebugString",
    "WAWebMediaFileErrors",
    "WAWebMediaGatingUtils",
    "WAWebMediaLoadErrors",
    "WAWebMediaObject",
    "WAWebMediaTypes",
    "WAWebMediaWorkerProxy",
    "WAWebMmsClient",
    "WAWebMmsClientErrors",
    "WAWebMmsMediaTypes",
    "WAWebNetworkType",
    "WAWebSerializeError",
    "WAWebSuspiciousContent",
    "WAWebValidateMediaFilehash",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamMsgUtils",
    "WAWebWebcMediaRmrWamEvent",
    "asyncToGeneratorRuntime",
    "err",
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
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    const I = {
        PRELOAD_MMS_MEDIA: 1,
        PRELOAD_MMS_THUMBNAIL: 2
    };
    function T(type) {
        switch(type){
            case o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_DOCUMENT:
                return I.PRELOAD_MMS_THUMBNAIL;
            case o("WAWebMmsMediaTypes").MEDIA_TYPES.HISTORY_SYNC:
            case o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO:
            default:
                return I.PRELOAD_MMS_MEDIA;
        }
    }
    const D = function() {
        const e = this;
        this.preloader = new (r("WAConcurrentPriorityPromiseQueue"))(10, {
            thumbnail: 4,
            histSyncChunk: 3
        });
        this.loadSequence = new (r("WAConcurrentPriorityPromiseQueue"))(50, {
            thumbnail: 5
        }, 0);
        this.$1 = o("WAAsyncCache").asyncCache(function(e) {
            return o("WAWebDownloadAndDecryptCache").getLRUStoreKey(e);
        }, new (o("WAWebDownloadAndDecryptCache")).DownloadAndDecryptCache, function(t) {
            const { downloadOrigin, downloadQpl, partialVideoOpts } = t;
            const rawMimeType = t.mimetype ?? "application/octet-stream";
            const s = o("WAWebABProps").getABPropConfigValue("web_use_kaleidoscope_media_check_enabled");
            const u = function() {
                downloadQpl.addPoint("download_and_decrypt_start");
                return x(t).then((e)=>{
                    downloadQpl.addPoint("download_and_decrypt_end", {
                        int: {
                            byteLength: e.byteLength
                        }
                    });
                    if (G({
                        downloadOrigin,
                        partialVideoOpts
                    })) {
                        return W({
                            input: e,
                            type: t.type,
                            rawMimeType,
                            downloadQpl,
                            ksClassifyEnabled: s,
                            failClosed: false,
                            onSuspiciousContent: t.onSuspiciousContent
                        });
                    }
                    return e;
                });
            };
            const c = {
                priority: -T(t.type),
                group: t.type === o("WAWebMmsMediaTypes").MEDIA_TYPES.HISTORY_SYNC ? "histSyncChunk" : "thumbnail",
                signal: t.signal
            };
            if (t.isPreload === true) {
                return e.preloader.enqueue(u, c);
            }
            if (t.shouldSequenceDownload === true) {
                return e.loadSequence.enqueue(u, babelHelpers.extends({}, c, {
                    group: "thumbnail"
                }));
            }
            return u();
        });
        this.downloadAndMaybeDecrypt = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const { downloadOrigin, downloadQpl, partialVideoOpts, type } = t;
                const s = t.mimetype ?? "application/octet-stream";
                const u = o("WAWebABProps").getABPropConfigValue("web_use_kaleidoscope_media_check_enabled");
                downloadQpl.addAnnotations({
                    bool: {
                        ksClassifyEnabled: u,
                        isPartialVideo: partialVideoOpts != null
                    },
                    string: {
                        mediaType: type,
                        rawMimeType: s,
                        downloadOrigin: downloadOrigin == null ? "unknown" : downloadOrigin.toString()
                    },
                    int: {
                        activeDownloadCount: e.preloader.getRunningTasksCount() + e.loadSequence.getRunningTasksCount()
                    }
                });
                if (G({
                    downloadOrigin,
                    partialVideoOpts
                })) {
                    H(type, s);
                }
                return e.$1(t);
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
        this.rmr = r("WAMemoizeConcurrent")(function(e) {
            return e.mediaObject.filehash || "";
        }, N);
        this.checkExistence = r("WAMemoizeConcurrent")(function(e) {
            const n = e.encFilehash ?? e.directPath;
            if (n == null) {
                throw r("err")("checkExistence requires encFilehash or directPath");
            }
            return n;
        }, w);
    };
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { chatWid, directPath, downloadOrigin, downloadQpl, encFilehash, experienceIds, filehash, imageDimensions, isViewOnce, mediaKey, mediaKeyTimestamp, mode, onDecryptStart, onProgress, partialVideoOpts, progressiveJpegOpts, staticUrl, type, userDownloadAttemptCount } = e;
            const $ = o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMediaType(type);
            if (mediaKey == null && $) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[DownloadManager] expected media key for media type ",
                    ""
                ])), type).tags("media").sendLogs(`missing-media-key-for-media-type-${type}`);
                throw new (o("WAWebMediaFileErrors")).MediaDecryptionError(`decryptMedia: missing key for type ${type}`);
            }
            if (encFilehash == null && $) {
                if (type !== o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT) {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[DownloadManager] expected encFilehash for media type ",
                        ""
                    ])), type).tags("media").sendLogs(`missing-encfilehash-for-media-type-${type}`);
                    throw new (o("WAWebMediaFileErrors")).MediaDecryptionError(`decryptMedia: missing encFilehash for type ${type}`);
                }
                if (staticUrl == null && directPath == null) {
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[DownloadManager] product media missing encFilehash and directPath/staticUrl"
                    ]))).tags("media").sendLogs("missing-encfilehash-and-path-for-product");
                    throw new (o("WAWebMediaFileErrors")).MediaDecryptionError(`decryptMedia: missing encFilehash and directPath/staticUrl for type ${type}`);
                }
            }
            const P = progressiveJpegOpts?.scanCount;
            const N = progressiveJpegOpts != null && (progressiveJpegOpts.scanCount == null || progressiveJpegOpts.scanCount === progressiveJpegOpts.scanLengths.length);
            const scanCount = N ? null : P;
            const w = yield o("WAWebCreateMediaDownloadMetrics").createMediaDownloadMetrics({
                directPath,
                downloadOrigin,
                type,
                userDownloadAttemptCount,
                isViewOnce,
                downloadMode: mode,
                isPrefetch: progressiveJpegOpts != null && !N,
                imageDimensions,
                chatWid,
                mediaKeyTimestamp,
                experienceIds
            });
            const { handleDownloadAndDecryptSuccess, handleDownloadAttemptError, handleDownloadAttemptSuccess, handleDownloadError, handleDownloadHostFound, handleDownloadSuccess, markDecryptionEnd, markDecryptionStart, markNetworkT, startNetworkT } = w;
            const j = e.signal || new AbortController().signal;
            const debugString = o("WAWebMediaDebugString").getDebugString(filehash);
            const Q = {
                directPath,
                encFilehash,
                staticUrl,
                type
            };
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "downloadManager.download: [",
                "] start"
            ])), debugString);
            try {
                let X = F({
                    progressiveJpegOpts,
                    filehash,
                    debugString,
                    scanCount
                });
                const onDownloadAttemptError = function(t) {
                    handleDownloadAttemptError(t);
                    if (X != null) {
                        X = F({
                            progressiveJpegOpts,
                            filehash,
                            debugString,
                            scanCount
                        });
                    }
                };
                const byteRange = r("WAWebGetMediaDownloadByterange")({
                    partialVideoOpts,
                    progressiveJpegOpts,
                    scanCount
                });
                const onData = scanCount == null && progressiveJpegOpts ? function(e, t) {
                    X?.handleProgress(e.total, t);
                } : null;
                const ee = $ && mediaKey != null ? r("WAWebCryptoCreateMediaKeys")(type, mediaKey).then((e)=>{
                    X?.setCryptoKeys(e);
                    return e;
                }) : (k || (k = n("Promise"))).resolve(null);
                const te = yield (k || (k = n("Promise"))).all([
                    ee,
                    n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        startNetworkT();
                        try {
                            return yield r("WAWebMmsClient").download({
                                directPath,
                                filehash: $ ? encFilehash : filehash,
                                staticUrl,
                                type,
                                signal: j,
                                mode,
                                byteRange,
                                onData,
                                onDownloadHostFound: handleDownloadHostFound,
                                onDownloadAttemptSuccess: handleDownloadAttemptSuccess,
                                onDownloadAttemptError,
                                debugString,
                                onProgress
                            });
                        } finally{
                            markNetworkT();
                        }
                    })()
                ]);
                const mediaKeys = te[0];
                const re = te[1];
                handleDownloadSuccess(re.byteLength);
                let oe = re;
                if (mediaKeys != null) {
                    onDecryptStart?.();
                    markDecryptionStart();
                    downloadQpl.addPoint("decrypt_start", {
                        int: {
                            dataSize: re.byteLength
                        }
                    });
                    o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.MediaProcessing);
                    try {
                        if (scanCount != null && byteRange != null) {
                            const ie = byteRange.end - byteRange.start + 1;
                            const le = yield X?.handleProgress(ie, re);
                            if (le == null) {
                                throw new (o("WAWebMediaFileErrors")).MediaDecryptionError(`Partial PJPEG decryption returned no data (encryptedFileSize=${ie}, scanCount=${scanCount})`);
                            }
                            oe = le;
                        } else if (partialVideoOpts) {
                            oe = yield o("WAWebCryptoDecryptPartialMedia").decryptPartialMedia({
                                mediaKeys,
                                ciphertext: re
                            });
                        } else {
                            const se = o("WAWebABProps").getABPropConfigValue("web_media_compute_in_worker_enabled") === true;
                            downloadQpl.addAnnotations({
                                string: {
                                    decrypt_path: se ? "v2" : "v1"
                                }
                            });
                            if (se) {
                                oe = yield r("WAWebCryptoDecryptMediaV2")({
                                    mediaKeys,
                                    ciphertextHmac: re,
                                    downloadQpl,
                                    expectedPlaintextHash: filehash,
                                    debugString
                                });
                            } else {
                                oe = yield r("WAWebCryptoDecryptMedia")({
                                    mediaKeys,
                                    ciphertextHmac: re,
                                    expectedPlaintextHash: filehash,
                                    debugString
                                });
                            }
                        }
                    } finally{
                        o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.MediaProcessing);
                    }
                    downloadQpl.addPoint("decrypt_end");
                    markDecryptionEnd();
                } else {
                    const ue = partialVideoOpts == null && scanCount == null;
                    if (ue) {
                        const ce = yield o("WAWebValidateMediaFilehash").validateFileash(oe, filehash);
                        if (!ce) {
                            throw new (o("WAWebMediaFileErrors")).MediaHashMismatch;
                        }
                    }
                }
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "downloadManager.download: [",
                    "] success"
                ])), debugString);
                handleDownloadAndDecryptSuccess();
                return oe;
            } catch (error) {
                if (error instanceof o("WAWebMmsClientErrors").MediaNotFoundError) {
                    handleDownloadError(error, !!e.isFinalRmrRetry);
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "downloadManager.download: [",
                        "] expected error\n",
                        ""
                    ], [
                        "downloadManager.download: [",
                        "] expected error\\n",
                        ""
                    ])), debugString, r("WAWebSerializeError")(error)).verbose();
                } else {
                    handleDownloadError(r("getErrorSafe")(error), true);
                    o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "downloadManager.download: [",
                        "] error\n",
                        ""
                    ], [
                        "downloadManager.download: [",
                        "] error\\n",
                        ""
                    ])), debugString, r("WAWebSerializeError")(error)).verbose();
                }
                throw error;
            }
        });
        return $.apply(this, arguments);
    }
    var P = 60000;
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const e_mediaObject = e.mediaObject;
            const n = o("WAWebMediaDebugString").getDebugString(e_mediaObject.filehash);
            const a = {
                filehash: e_mediaObject.filehash,
                type: e_mediaObject.type
            };
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "downloadManager.rmr: [",
                "] start"
            ])), n);
            e_mediaObject.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.REUPLOADING
            });
            const i = self.performance.now();
            const l = new (o("WAWebWebcMediaRmrWamEvent")).WebcMediaRmrWamEvent(babelHelpers.extends({}, e.rmrData, {
                webcRmrReason: e.rmrReason
            }));
            const s = o("WAWebNetworkType").getEffectiveNetworkType();
            if (s != null) {
                l.webcBrowserNetworkType = s;
            }
            if (e_mediaObject.type) {
                l.messageMediaType = o("WAWebMediaObject").webMediaTypeToWamMediaType(e_mediaObject.type);
            }
            if (e_mediaObject.size != null) {
                l.webcMediaSize = e_mediaObject.size;
            }
            function onMsgSelect(e) {
                const t = o("WAWebFrontendMsgGetters").getMaybeChat(e);
                if (l.webcChatType == null && t) {
                    l.webcChatType = t.getWebcChatType();
                }
                if (l.webcMessageT == null) {
                    l.webcMessageT = e.t;
                }
                l.messageMediaType = o("WAWebWamMsgUtils").getWamMediaType(e);
            }
            let c = null;
            try {
                const d = e_mediaObject.rmr({
                    onMsgSelect
                });
                c = window.setTimeout(function() {
                    o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                        "downloadManager.rmr: [",
                        "] RMR still pending after ",
                        "ms, type ",
                        ""
                    ])), n, P, String(e_mediaObject.type)).tags("non-sad").sendLogs("media-rmr-slow");
                }, P);
                const m = yield d;
                l.webcRmrStatusCode = m;
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "downloadManager.rmr: [",
                    "] status ",
                    ""
                ])), n, m);
                if (m === 404) {
                    throw new (o("WAWebDownloadManagerErrors")).MediaNotOnPhone;
                }
                if (m !== 200) {
                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(m);
                }
            } catch (error) {
                l.webcMediaRmrError = true;
                if (error instanceof o("WAWebGetUserMediaErrors").RMRNotSupportedOnNewsletterMessagesError) {
                    if (error.mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER || error.mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER_PACK) {
                        e_mediaObject.consolidate({
                            downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED
                        });
                    } else {
                        o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                            "downloadManager.rmr: [",
                            "] error RMRNotSupportedOnNewsletterMessagesError",
                            "\n",
                            ""
                        ], [
                            "downloadManager.rmr: [",
                            "] error RMRNotSupportedOnNewsletterMessagesError",
                            "\\n",
                            ""
                        ])), n, error.message, error.stack).verbose();
                    }
                    throw error;
                }
                if (error instanceof o("WAWebDownloadManagerErrors").MediaNotOnPhone) {
                    o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "downloadManager.rmr: [",
                        "] error MediaNotOnPhone\n",
                        ""
                    ], [
                        "downloadManager.rmr: [",
                        "] error MediaNotOnPhone\\n",
                        ""
                    ])), n, r("WAWebSerializeError")(error)).verbose();
                    throw error;
                }
                const p = r("getErrorSafe")(error);
                o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "downloadManager.rmr: [",
                    "] error ",
                    "\n",
                    ""
                ], [
                    "downloadManager.rmr: [",
                    "] error ",
                    "\\n",
                    ""
                ])), n, p.message, p.stack).verbose();
                throw new (o("WAWebMediaLoadErrors")).MediaNeedsReupload;
            } finally{
                if (c != null) {
                    window.clearTimeout(c);
                }
                l.webcMediaRmrT = Math.ceil(self.performance.now() - i);
                l.commit();
            }
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ directPath, encFilehash, signal, type }) {
            yield r("WAWebMmsClient").checkExistence({
                directPath,
                encFilehash,
                type,
                signal: signal || new AbortController().signal
            });
        });
        return A.apply(this, arguments);
    }
    function F({ debugString, filehash, progressiveJpegOpts, scanCount }) {
        if (progressiveJpegOpts == null) {
            return null;
        }
        const i = scanCount == null || o("WAWebMediaGatingUtils").getHQImageThumbnailInChatScans() === 0 ? null : scanCount;
        const l = i == null ? progressiveJpegOpts.scanLengths : progressiveJpegOpts.scanLengths.slice(0, i);
        const s = i == null ? progressiveJpegOpts.scansSidecar : progressiveJpegOpts.scansSidecar.slice(0, i * o("WAWebCryptoDecryptPartialMedia").HMAC_SIZE);
        return new (o("WAWebCryptoImageStreamer")).ImageStreamer({
            scanLengths: l,
            scansSidecar: s,
            mimetype: progressiveJpegOpts.mimetype,
            filehash,
            debugString,
            onProgressiveUpdate: progressiveJpegOpts.onProgressiveUpdate
        });
    }
    function O(e) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ downloadOrigin, downloadQpl, input, mimetype, onSuspiciousContent, type }) {
            if (!G({
                downloadOrigin,
                partialVideoOpts: null
            })) {
                return input;
            }
            const s = mimetype ?? "application/octet-stream";
            H(type, s);
            return W({
                input,
                type,
                rawMimeType: s,
                downloadQpl,
                ksClassifyEnabled: o("WAWebABProps").getABPropConfigValue("web_use_kaleidoscope_media_check_enabled"),
                failClosed: true,
                onSuspiciousContent
            });
        });
        return B.apply(this, arguments);
    }
    function W(e) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ downloadQpl, failClosed, input, ksClassifyEnabled, onSuspiciousContent, rawMimeType, type }) {
            if (!ksClassifyEnabled || !(yield o("WAWebKaleidoscopeWasmFeatureSupport").checkKaleidoscopeWasmFeatureSupport())) {
                return input;
            }
            downloadQpl.addPoint("kaleidoscope_classify_start");
            const c = yield o("WAWebMediaWorkerProxy").kaleidoscopeClassifyInWorker({
                mediaType: o("WAWebMmsMediaTypes").mediaTypeToKaleidoscopeMediaType(type),
                rawMimeType,
                input,
                eventFlow: downloadQpl
            }).catch((e)=>({
                    transferredBuffer: input,
                    result: o("WAResultOrError").makeError({
                        errorName: "worker-connection-runtime-error",
                        errorMessage: r("getErrorSafe")(e).message
                    })
                }));
            const c_result = c.result;
            if (c_result.success) {
                const m = c_result.value;
                const { mimetype, score } = m;
                downloadQpl.addPoint("kaleidoscope_classify_end", {
                    string: {
                        ksMimeType: mimetype
                    },
                    int: {
                        ksScore: score
                    }
                });
                const f = U({
                    ksScore: score,
                    ksMimeType: mimetype,
                    rawMimeType,
                    mediaType: type
                });
                if (f === o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES) {
                    throw new (o("WAWebMediaFileErrors")).InvalidMediaFileType(`Kaleidoscope dangerous score ${score} for media type ${type}`, type, rawMimeType);
                }
                onSuspiciousContent?.(f);
            } else {
                o("WALogger").WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                    "kaleidoscopeClassifiyInWorker failed. errorName: ",
                    ", errorMessage: ",
                    ""
                ])), c_result.error.errorName, c_result.error.errorMessage);
                downloadQpl.addPoint(c_result.error.errorName, {
                    string: {
                        ksFailReason: c_result.error.errorMessage ?? c_result.error.errorName
                    }
                });
                downloadQpl.addPoint("kaleidoscope_classify_fail");
                if (failClosed) {
                    throw r("err")(`kaleidoscope classify failed: ${c_result.error.errorName}`);
                }
                if (V(type)) {
                    downloadQpl.addPoint("kaleidoscope_classify_fail_warned");
                    if (onSuspiciousContent != null) {
                        onSuspiciousContent(o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES_KEEP);
                    }
                }
            }
            return c.transferredBuffer;
        });
        return q.apply(this, arguments);
    }
    function U({ ksMimeType, ksScore, mediaType, rawMimeType }) {
        if (ksScore >= 90) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[DownloadManager] Kaleidoscope dangerous score ",
                " for media type ",
                " (detected ",
                ", declared ",
                ")"
            ])), ksScore, mediaType, ksMimeType, rawMimeType).tags("media", "security");
            return o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES;
        }
        if (ksScore >= 80) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[DownloadManager] Kaleidoscope suspicious score ",
                " for media type ",
                " (detected ",
                ", declared ",
                ")"
            ])), ksScore, mediaType, ksMimeType, rawMimeType);
            return o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES_KEEP;
        }
        return o("WAWebSuspiciousContent").WAWebSuspiciousContent.NO;
    }
    function V(type) {
        return (type === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT || type === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_DOCUMENT) && o("WAWebABProps").getABPropConfigValue("document_format_verification_enabled") && o("WAWebABProps").getABPropConfigValue("document_format_verification_enforcement_enabled");
    }
    function H(type, t) {
        const n = o("WAWebMmsMediaTypes").mediaTypeToMsgTypeSupportedByAllowlist(type);
        let r = false;
        if (n != null) {
            const a = o("WAWebMmsMediaTypes").getValidMimeTypes(n);
            if (a == null) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[DownloadManager] no mime type allowlist for msg type ",
                    " (media type ",
                    ")"
                ])), n, type).tags("media").sendLogs(`no-mimetype-allowlist-for-msg-type-${n}`);
                r = true;
            } else if (!a.has(t)) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[DownloadManager] unexpected mimetype ",
                    " for media type ",
                    ""
                ])), t, type).tags("media", "security").sendLogs(`unexpected-mimetype-for-media-type-${type}`);
                r = true;
            }
        } else {
            if (t.toLowerCase() === "image/svg+xml") {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[DownloadManager] blocked SVG mimetype for media type ",
                    ""
                ])), type).tags("media", "security").sendLogs("blocked-svg-mimetype");
                r = true;
            }
        }
        if (r) {
            throw new (o("WAWebMediaFileErrors")).InvalidMediaFileType(`Unexpected mimetype ${t} for media type ${type}`, type, t);
        }
    }
    function G({ downloadOrigin, partialVideoOpts }) {
        switch(downloadOrigin){
            case o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.PROFILE_PICTURE:
            case o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.STATUS_ADS:
            case o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.PRODUCT_CATALOG:
            case o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.MESSAGE_HISTORY_SYNC:
            case o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.GDPR:
                return false;
        }
        return partialVideoOpts == null;
    }
    const z = new D;
    l.screenDecryptedMedia = O;
    l.enforceKaleidoscopeScore = U;
    l.downloadManager = z;
}, 98);