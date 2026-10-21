__d("WAWebMediaMmsV4Download", [
    "WAAbortError",
    "WABlobToArrayBuffer",
    "WACustomError",
    "WAFilteredCatch",
    "WALogger",
    "WARaceSignal",
    "WAThrottle",
    "WAWebABProps",
    "WAWebCryptoImageStreamer",
    "WAWebDownloadManager",
    "WAWebDownloadManagerErrors",
    "WAWebEnvironment",
    "WAWebFileUtils",
    "WAWebHttpErrors",
    "WAWebInMemoryLottieStickerCache",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDataUtils",
    "WAWebMediaEntry",
    "WAWebMediaFileErrors",
    "WAWebMediaGatherAndSetMetadataNoOpaque",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaLoad",
    "WAWebMediaLoadErrors",
    "WAWebMediaOpaqueData",
    "WAWebMediaSetSuspiciousContent",
    "WAWebMediaTypes",
    "WAWebMimeTypes",
    "WAWebMmsClientErrors",
    "WAWebMmsConst",
    "WAWebMmsMediaTypes",
    "WAWebODS",
    "WAWebStartMediaDownloadQpl",
    "WAWebStickerErrorWamEvent",
    "WAWebStickerLatencyWamEvent",
    "WAWebStickerMimeUtils",
    "WAWebStickerUtils",
    "WAWebVcardParsingUtils",
    "WAWebWamEnumStickerErrorType",
    "WAWebWamEnumStickerLatencyAction",
    "WAWebWebcProgressiveImageWamEvent",
    "asyncToGeneratorRuntime",
    "err",
    "fflate",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "justknobx",
    "nullthrows"
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
    const k = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "NoEntryAfterRMR";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const I = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "MissingEncFilehash";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const T = {
        THUMBNAIL: 1,
        LOW: 2,
        MID: 3,
        FULL: 4
    };
    const D = new WeakMap;
    function x(e) {
        e.getDownloadPromises().forEach((e)=>{
            if (e != null) {
                const n = D.get(e)?.abort;
                if (n != null) {
                    D.delete(e);
                    n();
                }
            }
        });
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatWid, downloadOrigin, mediaBlob, mediaObject, mediaType, mimetype, rmrReason }) {
            if (!mediaObject.mediaBlob) {
                const u = yield N({
                    downloadOrigin,
                    mediaBlob,
                    mediaObject,
                    mediaType,
                    mimetype
                });
                if (!(!u || mediaObject.mediaBlob)) {
                    yield o("WAWebMediaDataUtils").attachBlobAndGatherAndSetMetadata(mediaObject, mediaBlob);
                    yield F({
                        mimetype,
                        mediaObject,
                        downloadEvenIfExpensive: false,
                        mediaType,
                        rmrReason,
                        downloadOrigin,
                        chatWid
                    });
                }
            }
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ downloadOrigin, mediaBlob, mediaObject, mediaType, mimetype }) {
            const u = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "ManuallySetMedia"
            });
            try {
                yield o("WAWebDownloadManager").screenDecryptedMedia({
                    input: yield o("WABlobToArrayBuffer").blobToArrayBuffer(mediaBlob.forceToBlob()),
                    type: mediaType,
                    mimetype,
                    downloadOrigin,
                    downloadQpl: u,
                    onSuspiciousContent: function(t) {
                        return o("WAWebMediaSetSuspiciousContent").setSuspiciousContentOnMediaObject(mediaObject, t);
                    }
                });
                u.endSuccess();
                return true;
            } catch (error) {
                const c = r("getErrorSafe")(error);
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-download] manually set media rejected: ",
                    " type=",
                    ""
                ])), c.name, mediaType).tags("media", "security");
                B(u, c);
                return false;
            }
        });
        return M.apply(this, arguments);
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { downloadQpl, mimetype } = e;
            const i = o("WAThrottle").throttle(function(t) {
                e.mediaObject.consolidate({
                    loadedSize: t.loaded
                });
            }, o("WAWebMmsConst").FILE_PROGRESS_THROTTLE_WAIT_MS);
            const l = yield o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt({
                shouldSequenceDownload: e.shouldSequenceDownload,
                directPath: e.directPath,
                encFilehash: e.encFilehash,
                filehash: e.objFilehash,
                isFinalRmrRetry: e.isFinalRmrRetry,
                mediaKey: e.mediaKey,
                mediaKeyTimestamp: e.mediaKeyTimestamp,
                signal: e.signal,
                staticUrl: e.staticUrl,
                type: e.mediaType,
                mimetype,
                onDecryptStart: function() {
                    e.mediaObject.consolidate({
                        downloadStage: o("WAWebMediaTypes").DownloadStage.PROCESSING
                    });
                },
                onProgress: i,
                onSuspiciousContent: function(n) {
                    return o("WAWebMediaSetSuspiciousContent").setSuspiciousContentOnMediaObject(e.mediaObject, n);
                },
                userDownloadAttemptCount: e.mediaObject.userDownloadAttemptCount,
                downloadOrigin: e.downloadOrigin,
                mode: e.mode,
                progressiveJpegOpts: X({
                    scanLengths: e.scanLengths,
                    scansSidecar: e.scansSidecar,
                    mimetype,
                    mediaObject: e.mediaObject,
                    signal: e.signal
                }),
                isViewOnce: e.isViewOnce,
                imageDimensions: e.mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE ? {
                    fileHeight: e.mediaObject.contentInfo.fullHeight ?? 0,
                    fileWidth: e.mediaObject.contentInfo.fullWidth ?? 0
                } : undefined,
                chatWid: e.chatWid,
                downloadQpl,
                experienceIds: e.experienceIds
            });
            const s = mimetype != null && mimetype !== "" ? mimetype : o("WAWebMimeTypes").getMediaMimeType(e.mediaType, new Uint8Array(l));
            return new Blob([
                l
            ], {
                type: s
            });
        });
        return A.apply(this, arguments);
    }
    function F(e) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatWid, downloadEvenIfExpensive, downloadOrigin, downloadQplContext, experienceIds, isAutoDownload, isFinalRmrRetry, isVcardOverMmsDocument, isViewOnce, mediaObject, mediaType, mimetype, mode, rmrData, rmrReason, shouldSequenceDownload = false, shouldThrow, signal }) {
            const G = shouldThrow === true;
            const z = downloadQplContext ?? {
                qpl: o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                    entryPoint: "MediaDownload"
                }),
                rmrRetryCount: 0
            };
            const { qpl, rmrRetryCount } = z;
            if (rmrRetryCount > 0) {
                qpl.addAnnotations({
                    bool: {
                        hasRetry: true
                    }
                });
            }
            if (mediaObject == null) {
                qpl.endFail("missing_media_object", {
                    string: {
                        earlyExitReason: "missing_media_object"
                    }
                });
                return;
            }
            const mediaObject_filehash = mediaObject.filehash;
            if (r("isStringNullOrEmpty")(mediaObject_filehash)) {
                qpl.endFail("missing_filehash", {
                    string: {
                        earlyExitReason: "missing_filehash"
                    }
                });
                return;
            }
            if (mediaObject.downloadStage === o("WAWebMediaTypes").DownloadStage.ERROR_MISSING) {
                qpl.endFail("error_missing_download_stage", {
                    string: {
                        earlyExitReason: "error_missing_download_stage"
                    }
                });
                return;
            }
            const shouldStoreInMemory = isAutoDownload !== true || r("WAWebEnvironment").isWindows;
            const Y = mediaObject.getDownloadPromise(mediaType);
            if (Y) {
                qpl.addPoint("existing_download_promise");
                const J = D.get(Y);
                if (J && shouldStoreInMemory) {
                    J.shouldStoreInMemory = true;
                }
                return Y.then(()=>{
                    if (mediaObject.downloadStage === o("WAWebMediaTypes").DownloadStage.RESOLVED) {
                        qpl.endSuccess({
                            string: {
                                downloadResult: "existing_download_promise"
                            }
                        });
                    } else {
                        qpl.endFail("existing_download_not_resolved", {
                            string: {
                                downloadResult: "existing_download_promise",
                                downloadStage: String(mediaObject.downloadStage)
                            }
                        });
                    }
                }, (e)=>{
                    B(qpl, e);
                    throw e;
                });
            }
            const mediaObject_mediaBlob = mediaObject.mediaBlob;
            if (mediaObject_mediaBlob) {
                qpl.addPoint("legacy_media_blob_validation_start");
                const isValid = yield mediaObject_mediaBlob.validate().catch((e)=>{
                    B(qpl, e);
                    throw e;
                });
                qpl.addPoint("legacy_media_blob_validation_end", {
                    bool: {
                        isValid
                    }
                });
                if (isValid) {
                    mediaObject.consolidate({
                        downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED
                    });
                    qpl.endSuccess({
                        string: {
                            downloadResult: "legacy_media_blob_hit"
                        }
                    });
                    return;
                }
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-download] blob invalid, clearing fh=",
                    " msgs=",
                    ""
                ])), mediaObject_filehash ?? "none", mediaObject.msgs.length);
                mediaObject.clearBlob();
                mediaObject.consolidate({
                    downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE
                });
                mediaObject.notifyMsgsAsync();
                qpl.endFail("invalid_legacy_media_blob", {
                    string: {
                        earlyExitReason: "invalid_legacy_media_blob"
                    }
                });
                return;
            }
            const re = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(mediaObject_filehash);
            qpl.addPoint(re == null ? "in_memory_media_blob_cache_miss" : "in_memory_media_blob_cache_hit");
            let oe;
            let ae;
            const ie = new AbortController;
            const le = {
                abort: function() {
                    ie.abort();
                },
                shouldStoreInMemory
            };
            return r("WARaceSignal")([
                ie.signal,
                signal
            ].filter(Boolean), function(e) {
                let l;
                const s = (()=>{
                    const l = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        if (re) {
                            ae = re;
                        } else {
                            oe = mediaObject.entries.getDownloadEntry(o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMediaType(mediaType));
                            qpl.addPoint("download_entry_lookup", {
                                bool: {
                                    found: oe != null
                                }
                            });
                            if (!oe) {
                                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "[media-download] no blob/cache/entry fh=",
                                    " msgs=",
                                    " exp=",
                                    " rmr=",
                                    ""
                                ])), mediaObject_filehash ?? "none", mediaObject.msgs.length, downloadEvenIfExpensive, rmrReason);
                                if (downloadEvenIfExpensive && o("WAWebMediaCryptoEligibilityUtils").isRmrSupportedForMediaType(mediaType)) {
                                    qpl.addPoint("missing_entry_rmr_start");
                                    yield o("WAWebDownloadManager").downloadManager.rmr({
                                        mediaObject,
                                        signal: e,
                                        rmrReason,
                                        rmrData
                                    });
                                    qpl.addPoint("missing_entry_rmr_end");
                                    oe = mediaObject.entries.getDownloadEntry(o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMediaType(mediaType));
                                    if (!oe) {
                                        if (mediaType !== o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER) {
                                            throw new k;
                                        }
                                        qpl.endFail("sticker_entry_missing_after_rmr", {
                                            string: {
                                                earlyExitReason: "sticker_entry_missing_after_rmr"
                                            }
                                        });
                                        return;
                                    }
                                } else {
                                    if (!o("WAWebMediaCryptoEligibilityUtils").isRmrSupportedForMediaType(mediaType)) {
                                        throw new (o("WAWebDownloadManagerErrors")).MediaNotOnPhone;
                                    }
                                    mediaObject.consolidate({
                                        downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE
                                    });
                                    qpl.endFail("download_entry_missing", {
                                        string: {
                                            earlyExitReason: "download_entry_missing"
                                        }
                                    });
                                    return;
                                }
                            }
                            mediaObject.consolidate({
                                downloadStage: o("WAWebMediaTypes").DownloadStage.FETCHING
                            });
                            oe = r("nullthrows")(oe);
                            const m = oe;
                            const { directPath, scanLengths, scansSidecar, staticUrl } = m;
                            if (oe instanceof o("WAWebMediaEntry").EncryptedMediaEntry && oe.getEncfilehash() == null && r("isStringNullOrEmpty")(directPath) && r("isStringNullOrEmpty")(staticUrl)) {
                                oe?.markWhetherOnServer(false);
                                throw new I;
                            }
                            if (r("justknobx")._("533")) {
                                if (mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE && mimetype?.toLowerCase()?.includes("svg")) {
                                    throw r("err")("Newsletter svg mimetype is not supported");
                                }
                            }
                            const C = yield w({
                                directPath,
                                encFilehash: oe?.getEncfilehash(),
                                objFilehash: mediaObject_filehash,
                                isFinalRmrRetry,
                                mediaKey: oe?.getMediaKey(),
                                mediaKeyTimestamp: oe?.getMediaKeyTimestamp(),
                                signal: e,
                                staticUrl,
                                mediaType,
                                mediaObject,
                                downloadOrigin,
                                mode,
                                scanLengths,
                                mimetype,
                                scansSidecar,
                                isViewOnce,
                                chatWid,
                                shouldSequenceDownload,
                                experienceIds,
                                downloadQpl: qpl
                            });
                            if (Z(mediaType)) {
                                ae = yield o("WAWebMediaLoad").transcode(C);
                            } else {
                                ae = C;
                            }
                        }
                        if (ae.type === o("WAWebStickerMimeUtils").WhatsAppLottieStickerMimeType) {
                            yield o("WAWebInMemoryLottieStickerCache").extractAndSetBothLottieJSONInMemoryCache(mediaObject_filehash, ae);
                            mediaObject.consolidate({
                                isLottie: true
                            });
                        }
                        if (ae.type === "text/vcard" && isVcardOverMmsDocument === true) {
                            try {
                                const b = yield o("WAWebFileUtils").blobToText(ae);
                                if (b) {
                                    const parsedVcards = o("WAWebVcardParsingUtils").parseMultiVcard(b);
                                    if (parsedVcards.length > 0) {
                                        mediaObject.consolidate({
                                            parsedVcards
                                        });
                                    } else {
                                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                            "Assertion failed!"
                                        ]))).tags("non-sad").sendLogs("vcard_over_mms:Failed to parse vcard over mms contents");
                                    }
                                }
                            } catch (error) {
                                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                    "Failed to retrieve blob text contents"
                                ]))).catching(r("getErrorSafe")(error)).tags("non-sad").sendLogs("vcard_over_mms:blobToText failed with error");
                            }
                        }
                        if (o("WAWebMediaDataUtils").shouldUseMediaCache(mediaType) && o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.canFitFile(ae.size)) {
                            if (le.shouldStoreInMemory) {
                                o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(mediaObject_filehash, ae);
                                yield o("WAWebMediaGatherAndSetMetadataNoOpaque").gatherAndSetMetadataNoOpaque(mediaObject, ae);
                            }
                        } else {
                            const S = yield r("WAWebMediaOpaqueData").createFromData(ae, ae.type);
                            yield o("WAWebMediaDataUtils").attachBlobAndGatherAndSetMetadata(mediaObject, S);
                        }
                        mediaObject.consolidate({
                            downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED
                        });
                        mediaObject.clearDownloadPromise(mediaType);
                        return mediaObject.resolveWhenConsolidated();
                    });
                    return function() {
                        return l.apply(this, arguments);
                    };
                })();
                const q = s().catch((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        if (oe == null || !ee({
                            downloadEvenIfExpensive,
                            error: e,
                            isFinalRmrRetry,
                            mediaType,
                            mode
                        })) {
                            throw e;
                        }
                        o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[media-download] hash mismatch, requesting re-upload, type: ",
                            ""
                        ])), mediaType);
                        oe.markWhetherOnServer(false);
                        qpl.addPoint("hash_mismatch_rmr_start");
                        yield o("WAWebDownloadManager").downloadManager.rmr({
                            mediaObject,
                            signal: new AbortController().signal,
                            rmrReason,
                            rmrData
                        });
                        qpl.addPoint("hash_mismatch_rmr_end");
                        mediaObject.clearDownloadPromise(mediaType);
                        return F({
                            mimetype,
                            mediaObject,
                            downloadEvenIfExpensive: false,
                            mediaType,
                            rmrReason,
                            rmrData,
                            downloadOrigin,
                            isFinalRmrRetry: true,
                            isVcardOverMmsDocument,
                            mode,
                            isAutoDownload,
                            chatWid,
                            experienceIds,
                            downloadQplContext: {
                                qpl,
                                rmrRetryCount: rmrRetryCount + 1
                            }
                        });
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()).catch((l = o("WAFilteredCatch")).filteredCatch(o("WAWebMmsClientErrors").MediaNotFoundError, (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        if (!oe || (oe.markWhetherOnServer(false), !downloadEvenIfExpensive)) {
                            throw e;
                        }
                        qpl.addPoint("media_not_found_rmr_start");
                        yield o("WAWebDownloadManager").downloadManager.rmr({
                            mediaObject,
                            signal: new AbortController().signal,
                            rmrReason,
                            rmrData
                        });
                        qpl.addPoint("media_not_found_rmr_end");
                        mediaObject.clearDownloadPromise(mediaType);
                        return F({
                            mimetype,
                            mediaObject,
                            downloadEvenIfExpensive: false,
                            mediaType,
                            rmrReason,
                            rmrData,
                            downloadOrigin,
                            isFinalRmrRetry: true,
                            isVcardOverMmsDocument,
                            mode,
                            isAutoDownload,
                            chatWid,
                            experienceIds,
                            downloadQplContext: {
                                qpl,
                                rmrRetryCount: rmrRetryCount + 1
                            }
                        });
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })())).catch(l.filteredCatch(o("WAWebMediaLoadErrors").MediaUnsupportedError, function(e) {
                    B(qpl, e);
                    mediaObject.consolidate({
                        downloadStage: o("WAWebMediaTypes").DownloadStage.ERROR_UNSUPPORTED
                    });
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "downloadMedia: media unsupported error: ",
                        ", ",
                        ", ",
                        ""
                    ])), e.name, e.message, mimetype || "");
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!"
                    ]))).catching(e).tags("non-sad").sendLogs("downloadMedia: media unsupported error:");
                    if (G) {
                        throw e;
                    }
                })).catch(l.filteredCatch(o("WAWebDownloadManagerErrors").MediaNotOnPhone, function(e) {
                    B(qpl, e);
                    mediaObject.consolidate({
                        downloadStage: o("WAWebMediaTypes").DownloadStage.ERROR_MISSING
                    });
                    if (G) {
                        throw e;
                    }
                })).catch(l.filteredCatch([
                    k,
                    I
                ], function(e) {
                    B(qpl, e);
                    mediaObject.consolidate({
                        downloadStage: o("WAWebMediaTypes").DownloadStage.ERROR_MISSING
                    });
                    if (!(e === k && mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER) && (o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "Unexpected download error: ",
                        ""
                    ])), e.name), o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!"
                    ]))).tags("non-sad").sendLogs(`unexpected download error: ${e.name}`), G)) {
                        throw e;
                    }
                })).catch(l.filteredCatch([
                    o("WAWebMediaFileErrors").MediaDecryptionError,
                    o("WAWebMediaFileErrors").MediaHashMismatch
                ], function(e) {
                    B(qpl, e);
                    const mediaObject_progressiveStage = mediaObject.progressiveStage;
                    ie.abort();
                    mediaObject.consolidate({
                        downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                        progressiveStage: null
                    });
                    mediaObject.notifyMsgsAsync();
                    mediaObject.delete("download_error");
                    o("WAWebCryptoImageStreamer").deleteFromInMemoryMediaBlobCache(mediaObject_filehash, mediaObject_progressiveStage);
                    if (G) {
                        throw e;
                    }
                })).catch(l.filteredCatch([
                    o("WAWebHttpErrors").MmsDownloadFilehashMismatchError
                ], function(e) {
                    B(qpl, e);
                    const mediaObject_progressiveStage = mediaObject.progressiveStage;
                    ie.abort();
                    mediaObject.hashMismatchRetryCount++;
                    const n = 10;
                    const r = mediaObject.hashMismatchRetryCount >= n;
                    mediaObject.consolidate({
                        downloadStage: r ? o("WAWebMediaTypes").DownloadStage.ERROR_MISSING : o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                        progressiveStage: null
                    });
                    mediaObject.notifyMsgsAsync();
                    mediaObject.delete("download_error");
                    o("WAWebCryptoImageStreamer").deleteFromInMemoryMediaBlobCache(mediaObject_filehash, mediaObject_progressiveStage);
                    if (G) {
                        throw e;
                    }
                })).catch((e)=>{
                    B(qpl, e);
                    mediaObject.consolidate({
                        downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE
                    });
                    if (e instanceof o("WAWebMediaLoadErrors").MediaLoadError) {
                        o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                            "downloadMedia: media unsupported error: ",
                            ", ",
                            ", ",
                            ""
                        ])), e.name, e.message, mimetype || "");
                        o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!"
                        ]))).catching(e).tags("non-sad").sendLogs("downloadMedia: media load error:", {
                            sampling: 0
                        });
                        if (G) {
                            throw e;
                        }
                        return;
                    }
                    if (e instanceof o("WAWebMediaLoadErrors").TranscodeBlobTooLargeError) {
                        o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                            "downloadMedia: error: ",
                            ", ",
                            ""
                        ])), e.message, mimetype || "");
                        o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!"
                        ]))).catching(e).tags("non-sad").sendLogs("downloadMedia: transcode blob too large", {
                            sampling: 0
                        });
                        if (G) {
                            throw e;
                        }
                        return;
                    }
                    if (e instanceof o("WAWebMediaLoadErrors").UnableToPlayVideoError) {
                        o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                            "downloadMedia: error: ",
                            ", ",
                            ""
                        ])), e.message, mimetype || "");
                        o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!"
                        ]))).catching(e).tags("non-sad").sendLogs("downloadMedia: unable to play video", {
                            sampling: 0
                        });
                        if (G) {
                            throw e;
                        }
                        return;
                    }
                    if (e.name === o("WAAbortError").ABORT_ERROR) {
                        if (G) {
                            throw e;
                        }
                        return;
                    }
                    o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                        "downloadMedia: error"
                    ])));
                    if (G) {
                        throw e;
                    }
                }).then(()=>{
                    if (qpl.isActive()) {
                        qpl.endSuccess();
                    }
                }).finally(()=>{
                    mediaObject.clearDownloadPromise(mediaType);
                });
                D.set(q, le);
                mediaObject.setDownloadPromise(q, mediaType);
                return q;
            }).catch((e)=>{
                B(qpl, e);
                throw e;
            });
        });
        return O.apply(this, arguments);
    }
    function B(e, t) {
        if (e.isActive()) {
            const n = r("getErrorSafe")(t);
            if (n.name === o("WAAbortError").ABORT_ERROR) {
                e.endCancel(undefined, {
                    string: {
                        earlyExitReason: "aborted"
                    }
                });
                return;
            }
            e.endFailWithError("download_failed", n.message);
        }
    }
    function W(e) {
        return U(e, /animation\/animation.json$/);
    }
    function q(e) {
        return U(e, /animation\/animation_secondary.json$/);
    }
    function U(e, t) {
        const n = Object.keys(e).find((e)=>t.test(e));
        if (n != null) {
            return e[n];
        }
    }
    function V(e) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WABlobToArrayBuffer").blobToArrayBuffer(e);
            const n = new Uint8Array(t);
            return o("fflate").unzipSync(n);
        });
        return H.apply(this, arguments);
    }
    function G(e, t) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = new (o("WAWebStickerLatencyWamEvent")).StickerLatencyWamEvent({
                    size: e.size,
                    stickerLatencyAction: o("WAWebWamEnumStickerLatencyAction").STICKER_LATENCY_ACTION.DECOMPRESSION
                });
                const a = self.performance.now();
                const i = yield V(e);
                const l = W(i);
                if (!l) {
                    throw r("err")("animationContents missing");
                }
                const primary = new TextDecoder("utf-8").decode(l);
                const u = yield o("WAWebStickerUtils").isLottieStickerFirstParty(i, primary);
                if (!u) {
                    if (r("WAWebODS") != null) {
                        r("WAWebODS").incr("web.stickers.lottie_sticker_not_first_party");
                    }
                    throw r("err")("Primary Lottie animation failed first-party verification");
                }
                n.stickerLatencyTtAction = Math.ceil(self.performance.now() - a);
                n.commit();
                let secondary = null;
                try {
                    const d = q(i);
                    if (d) {
                        const m = new TextDecoder("utf-8").decode(d);
                        const p = yield o("WAWebStickerUtils").isSecondaryLottieStickerFirstParty(i, m);
                        if (p) {
                            secondary = m;
                        }
                    }
                } catch (e) {}
                return {
                    primary,
                    secondary
                };
            } catch (error) {
                new (o("WAWebStickerErrorWamEvent")).StickerErrorWamEvent({
                    stickerErrorType: o("WAWebWamEnumStickerErrorType").STICKER_ERROR_TYPE.DECOMPRESSION
                }).commit();
                o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to extract Lottie Sticker zip file"
                ]))).catching(r("getErrorSafe")(error)).tags("non-sad").sendLogs("lottie_sticker:Failed to extract Lottie Sticker zip file");
                return {
                    primary: null,
                    secondary: null
                };
            }
        });
        return z.apply(this, arguments);
    }
    function j(e) {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ mediaObject, mediaType, mimetype }) {
            const mediaObject_filehash = mediaObject.filehash;
            if (!r("isStringNullOrEmpty")(mediaObject_filehash) && mediaObject.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT && !(yield Y(mediaObject))) {
                const l = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(mediaObject_filehash);
                const s = new AbortController;
                if (l) {
                    if (mediaObject.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT) {
                        mediaObject.consolidate({
                            downloadStage: o("WAWebMediaTypes").DownloadStage.EXISTS
                        });
                    }
                    return;
                }
                const u = mediaObject.entries.getDownloadEntry(o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMediaType(mediaType));
                if (!u) {
                    if (mediaObject.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT) {
                        mediaObject.consolidate({
                            downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE
                        });
                    }
                    return;
                }
                if (!(u instanceof o("WAWebMediaEntry").UnencryptedMediaEntry)) {
                    const encFilehash = u.getEncfilehash();
                    if (r("isStringNullOrEmpty")(encFilehash) && r("isStringNullOrEmpty")(u.directPath) && r("isStringNullOrEmpty")(u.staticUrl)) {
                        u.markWhetherOnServer(false);
                        if (mediaObject.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT) {
                            mediaObject.consolidate({
                                downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE
                            });
                        }
                        return;
                    }
                    try {
                        if (r("isStringNullOrEmpty")(u.staticUrl) && !r("isStringNullOrEmpty")(encFilehash)) {
                            yield o("WAWebDownloadManager").downloadManager.checkExistence({
                                directPath: u.directPath,
                                encFilehash,
                                signal: s.signal,
                                type: mediaType
                            });
                        }
                        if (mediaObject.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT) {
                            mediaObject.consolidate({
                                downloadStage: o("WAWebMediaTypes").DownloadStage.EXISTS
                            });
                        }
                    } catch (error) {
                        if (mediaObject.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT) {
                            mediaObject.consolidate({
                                downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE
                            });
                        }
                        const d = r("getErrorSafe")(error);
                        o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                            "checkExistence: error"
                        ])));
                    }
                }
            }
        });
        return K.apply(this, arguments);
    }
    function Q(scanLengths, scansSidecar) {
        return !!(scanLengths && scansSidecar && scanLengths.length >= 2 && scanLengths.length * 10 === scansSidecar.byteLength);
    }
    function X({ mediaObject, mimetype, scanLengths, scansSidecar, signal }) {
        if (!Q(scanLengths, scansSidecar)) {
            return null;
        }
        const s = new (o("WAWebWebcProgressiveImageWamEvent")).WebcProgressiveImageWamEvent({
            webcFirstRenderScans: 0
        });
        return {
            mimetype,
            scansSidecar: r("nullthrows")(scansSidecar),
            scanLengths: r("nullthrows")(scanLengths),
            onProgressiveUpdate: function(progressiveStage) {
                if (!signal.aborted) {
                    if (mediaObject.downloadStage !== o("WAWebMediaTypes").DownloadStage.RESOLVED) {
                        mediaObject.consolidate({
                            downloadStage: o("WAWebMediaTypes").DownloadStage.PROGRESSIVE_READY,
                            progressiveStage
                        });
                        if (!s.webcFirstRenderScans) {
                            s.webcFirstRenderScans = progressiveStage;
                            s.markWebcFirstRenderT();
                        }
                        if (progressiveStage >= T.MID && !s.webcMidQualityT) {
                            s.markWebcMidQualityT();
                        }
                        if (progressiveStage === T.FULL && !s.webcFullQualityT) {
                            s.markWebcFullQualityT();
                            s.commit();
                        }
                    }
                }
            }
        };
    }
    function Y(e) {
        return J.apply(this, arguments);
    }
    function J() {
        J = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!e.mediaBlob) {
                return false;
            }
            const t = yield e.mediaBlob.validate();
            if (t) {
                e.consolidate({
                    downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED
                });
                return true;
            }
            e.clearBlob();
            e.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE
            });
            e.notifyMsgsAsync();
            return false;
        });
        return J.apply(this, arguments);
    }
    function Z(mediaType) {
        return mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT || mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTT || mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO || mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO;
    }
    function ee({ downloadEvenIfExpensive, error, isFinalRmrRetry, mediaType, mode }) {
        return downloadEvenIfExpensive && mode === "manual" && isFinalRmrRetry !== true && o("WAWebMediaCryptoEligibilityUtils").isRmrSupportedForMediaType(mediaType) && te(error) && o("WAWebABProps").getABPropConfigValue("wa_web_media_download_rmr_on_hash_mismatch_enabled");
    }
    function te(error) {
        if (error instanceof o("WAWebHttpErrors").MmsDownloadFilehashMismatchError || error instanceof o("WAWebMediaFileErrors").MediaHashMismatch) {
            return true;
        }
        return error instanceof o("WAWebMediaFileErrors").MediaDecryptionError && (error.message.includes(o("WAWebMediaFileErrors").HMAC_MISMATCH_ERROR) || error.message.includes(o("WAWebMediaFileErrors").PLAINTEXT_HASH_MISMATCH_ERROR));
    }
    l.NoEntryAfterRMR = k;
    l.MissingEncFilehash = I;
    l.cancelDownloadMedia = x;
    l.manuallySetMedia = $;
    l.downloadMedia = F;
    l.getContentsOfLottieJSONFile = W;
    l.extractBothLottieJSON = G;
    l.checkExistence = j;
}, 98);