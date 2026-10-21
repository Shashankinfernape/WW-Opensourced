__d("WAWebMediaMmsV4Upload", [
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WAIsMediaKeyReusable",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAThrottle",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCreateMediaUploadMetrics",
    "WAWebCryptoMediaTypeInfo",
    "WAWebDownloadManagerErrors",
    "WAWebEnvironment",
    "WAWebFileUtils",
    "WAWebHDMediaUtils",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDataUtils",
    "WAWebMediaEntry",
    "WAWebMediaGatingUtils",
    "WAWebMediaGetDownloadOriginFromUploadOrigin",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaLoad",
    "WAWebMediaLoadErrors",
    "WAWebMediaMmsV4Download",
    "WAWebMediaOpaqueData",
    "WAWebMediaStore",
    "WAWebMediaStoreLruImpl",
    "WAWebMediaTypes",
    "WAWebMmsClientErrors",
    "WAWebMmsConst",
    "WAWebMmsMediaTypes",
    "WAWebStartMediaUploadQpl",
    "WAWebUploadManager",
    "WAWebUploadManagerBase",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "justknobx"
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
    const b = new WeakMap;
    function v(e, t) {
        e.getUploadPromises().forEach((e)=>{
            if (e != null) {
                const n = b.get(e);
                if (n != null) {
                    b.delete(e);
                    n(t);
                }
            }
        });
    }
    const S = {
        SUCCESS: "success",
        CANCELLATION: "cancellation",
        ERROR: "error",
        TIMEOUT: "timeout"
    };
    function R(type, mediaType) {
        const n = L(type);
        return n != null && n === L(mediaType);
    }
    function L(t) {
        try {
            return o("WAWebCryptoMediaTypeInfo").getMediaTypeInfo(t);
        } catch (error) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[media-upload] no media key type for ",
                ""
            ])), t).catching(r("getErrorSafe")(error)).sendLogs("upload-media-key-type-unknown");
            return null;
        }
    }
    function E(e, t, n) {
        const r = e.getUploadEntry(t);
        if (!(r instanceof o("WAWebMediaEntry").EncryptedMediaEntry)) {
            return r;
        }
        const a = L(n);
        if (a == null || L(r.type) === a) {
            return r;
        }
        const i = e.getUploadEntryMatching(t, function(e) {
            return e instanceof o("WAWebMediaEntry").EncryptedMediaEntry && k(e) && e.validateForDownloads() && L(e.type) === a;
        });
        if (i == null || !o("WAWebABProps").getABPropConfigValue("web_media_fast_forward_match_key_type_entry_enabled")) {
            return r;
        }
        return i;
    }
    function k(e) {
        return e.directPath != null && o("WATimeUtils").happenedWithin(o("WATimeUtils").castToUnixTime(e.mediaKeyTimestamp), o("WAIsMediaKeyReusable").MMS_MEDIA_KEY_TTL);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ blob, canEnableFastForward = true, earlyUpload, fileOrigin, forwardedFromWeb, isViewOnce, mediaKeyInfo, mediaObject, mediaType, plaintext, signal, uploadEntry, uploadOrigin }) {
            const uploadQpl = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
                entryPoint: "MediaUpload",
                mediaType,
                byteLength: blob.size
            });
            if (uploadEntry instanceof o("WAWebMediaEntry").EncryptedMediaEntry && uploadEntry?.canReuseMediaKey() && canEnableFastForward && (R(uploadEntry.type, mediaType) || !o("WAWebABProps").getABPropConfigValue("wa_web_media_fast_forward_same_key_type_enabled"))) {
                uploadQpl.addAnnotations({
                    string: {
                        media_entry_dedupe_result: "fast-forward"
                    }
                });
                r("WAWebCreateMediaUploadMetrics")({
                    type: mediaType,
                    uploadOrigin,
                    fileOrigin,
                    userUploadAttemptCount: 0,
                    forwardedFromWeb,
                    isViewOnce,
                    uploadQpl
                }).handleCheckExistingSuccess();
                uploadQpl.endSuccess();
                return uploadEntry;
            }
            let b;
            try {
                b = yield earlyUpload;
            } catch (error) {
                uploadQpl.endFailWithError("early_upload_failed", error instanceof Error ? error.message : String(error));
                throw error;
            }
            if (b != null) {
                uploadQpl.addPoint("early_upload_success");
                uploadQpl.endSuccess();
                return mediaObject.entries.addEntry({
                    deprecatedMms3Url: b.url,
                    mediaKey: b.mediaKey,
                    mediaKeyTimestamp: b.mediaKeyTimestamp,
                    encFilehash: b.encFilehash,
                    type: mediaType,
                    sidecar: b.sidecar,
                    directPath: b.directPath,
                    firstFrameSidecar: b.firstFrameSidecar,
                    debugHint: "upload"
                });
            }
            const onFinalize = function() {
                mediaObject.consolidate({
                    uploadStage: o("WAWebMediaTypes").UploadStage.FINALIZING
                });
            };
            const S = o("WAThrottle").throttle(function(e, t) {
                const loadedSize = e.loaded + t;
                if (Number.isFinite(loadedSize)) {
                    mediaObject.consolidate({
                        loadedSize
                    });
                }
            }, o("WAWebMmsConst").FILE_PROGRESS_THROTTLE_WAIT_MS);
            const mediaKey_1 = mediaKeyInfo ? mediaKeyInfo.key : uploadEntry?.getMediaKey();
            const mediaKeyTimestamp_1 = mediaKeyInfo ? mediaKeyInfo.timestamp : uploadEntry?.getMediaKeyTimestamp();
            const k = yield r("WAWebUploadManager").encryptAndUpload({
                blob: plaintext ?? blob,
                mediaKey: mediaKey_1,
                mediaKeyTimestamp: mediaKeyTimestamp_1,
                type: mediaType,
                signal,
                userUploadAttemptCount: mediaObject.userUploadAttemptCount,
                forwardedFromWeb,
                uploadOrigin,
                fileOrigin,
                onProgress: S,
                onFinalize,
                isViewOnce,
                isHdPhoto: mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE && o("WAWebHDMediaUtils").isHdPhoto(mediaObject.contentInfo.fullHeight ?? 0, mediaObject.contentInfo.fullWidth ?? 0),
                uploadQpl
            });
            const { directPath, encFilehash, firstFrameSidecar, mediaKey, mediaKeyTimestamp, sidecar, url } = k;
            return mediaObject.entries.addEntry({
                deprecatedMms3Url: url,
                mediaKey,
                mediaKeyTimestamp,
                encFilehash,
                type: mediaType,
                sidecar,
                directPath,
                firstFrameSidecar,
                debugHint: "upload"
            });
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ blob, calculateToken, fileOrigin, isViewOnce, mediaObject, mediaType, plaintext, signal, uploadOrigin }) {
            const m = plaintext ?? (yield o("WAWebFileUtils").blobToArrayBuffer(blob));
            const p = yield o("WAMediaCalculateFilehash").calculateFilehash(m);
            const _ = yield r("WAWebUploadManager").unencryptedUpload({
                file: m,
                isViewOnce,
                signal,
                type: mediaType,
                uploadOrigin,
                fileOrigin,
                hash: p,
                token: yield calculateToken?.(p),
                generateThumbnailOnServer: o("WAWebMediaGatingUtils").isThumbnailGenerationOnServerEnabledForMediaType(mediaType)
            });
            return mediaObject.entries.addUnencryptedEntry({
                directPath: _.directPath,
                debugHint: "upload",
                filehash: p,
                type: mediaType,
                handle: _.handle,
                metadataUrl: _.metadataUrl,
                dashManifestUrl: _.dashManifestUrl,
                thumbnailDirectPath: _.thumbnailDirectPath,
                thumbnailSha256: _.thumbnailSha256,
                fbid: _.fbid
            });
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return N(e, I);
    }
    function P(e) {
        return N(e, D);
    }
    function N({ calculateToken, canEnableFastForward = true, earlyUpload, fileOrigin, forwardedFromWeb, isViewOnce, mediaKeyInfo, mediaObject, mediaType, mimetype, uploadEntry, uploadOrigin }, t) {
        let I = mediaKeyInfo;
        const T = mediaObject.getUploadPromise(mediaType);
        if (T) {
            return T;
        }
        const D = new AbortController;
        const D_signal = D.signal;
        let $ = null;
        var P = (C || (C = n("Promise"))).resolve().then(()=>{
            mediaObject.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING
            });
        }).then(()=>A({
                mediaObject,
                mimetype,
                mediaType,
                abortSignal: D_signal,
                uploadOrigin
            })).then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = yield O(mediaObject.filehash, mediaType, e);
                let i;
                if (canEnableFastForward) {
                    i = uploadEntry !== undefined ? uploadEntry : E(mediaObject.entries, o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMediaType(mediaType), mediaType);
                }
                if (i instanceof o("WAWebMediaEntry").EncryptedMediaEntry && I && i.mediaKey !== I.key) {
                    const m = I;
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "mediaKey mismatch, type: ",
                        ""
                    ])), mediaType).sendLogs(`media-keys-not-the-same-${mediaType}`);
                    const h = !mediaObject.entries.entries.some((e)=>e.getMediaKey() === m.key);
                    const C = i.mediaKey?.length;
                    const b = m.key?.length;
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[_uploadMediaAndManageErrors] isNew=",
                        " keyLen=",
                        "/",
                        ""
                    ])), h, C, b);
                    if (mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER) {
                        I = null;
                    } else {
                        throw r("err")("uploadEntry.mediaKey and mediaKeyInfo.mediaKey should be the same");
                    }
                }
                const S = yield t({
                    blob: e,
                    plaintext: n,
                    canEnableFastForward,
                    forwardedFromWeb,
                    mediaKeyInfo: I,
                    mediaObject,
                    mediaType,
                    signal: D_signal,
                    uploadEntry: i,
                    uploadOrigin,
                    fileOrigin,
                    isViewOnce,
                    earlyUpload,
                    calculateToken
                });
                if (!S) {
                    throw r("err")("could not create media entry");
                }
                if ((mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT || mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO) && !o("WAWebMediaDataUtils").canPlayOgg()) {
                    if (o("WAWebMediaDataUtils").shouldUseMediaCache(mediaType)) {
                        const R = mediaObject.filehash;
                        if (R != null && R !== "" && mediaObject.mediaBlob) {
                            const T = yield o("WAWebMediaLoad").transcode(mediaObject.mediaBlob.formData());
                            o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(R, T);
                        }
                    } else {
                        if (mediaObject.mediaBlob) {
                            yield o("WAWebMediaDataUtils").attachBlobAndGatherAndSetMetadata(mediaObject, mediaObject.mediaBlob);
                        }
                    }
                }
                yield W(mediaObject.filehash, mediaType, n ?? e);
                if (n != null) {
                    yield U(mediaObject, n);
                }
                return S;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })()).then((mediaEntry)=>{
            if (D_signal.aborted) {
                throw new (o("WAAbortError")).AbortError;
            }
            mediaObject.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADED
            });
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "MediaAlgo.uploadMedia: success"
            ])));
            return {
                kind: S.SUCCESS,
                mediaEntry
            };
        }).catch((e)=>{
            const t = r("getErrorSafe")(e);
            if (t.name === o("WAAbortError").ABORT_ERROR) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaAlgo.uploadMedia: canceled"
                ])));
                w(mediaType, $);
            } else {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaAlgo.uploadMedia"
                ]))).catching(t);
            }
            throw e;
        }).finally(()=>{
            mediaObject.clearUploadPromise(mediaType, P);
        }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMediaLoadErrors").FileNotReadableError, function() {
            mediaObject.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.ERROR_FILE_NOT_READABLE
            });
            return {
                kind: S.ERROR
            };
        })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebDownloadManagerErrors").MediaNotOnPhone, function() {
            mediaObject.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.ERROR_MISSING
            });
            return {
                kind: S.ERROR
            };
        })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMmsClientErrors").MediaTooLargeError, function() {
            mediaObject.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.ERROR_TOO_LARGE
            });
            return {
                kind: S.ERROR
            };
        })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMmsClientErrors").MMSForbiddenError, function() {
            mediaObject.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.ERROR_FORBIDDEN
            });
            return {
                kind: S.ERROR
            };
        })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMmsClientErrors").MMSThrottleError, function() {
            mediaObject.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.ERROR_THROTTLED
            });
            return {
                kind: S.ERROR
            };
        })).catch((e)=>{
            mediaObject.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.NEED_UPLOAD
            });
            if (r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR) {
                return {
                    kind: S.CANCELLATION
                };
            }
            return {
                kind: S.ERROR
            };
        });
        b.set(P, function(e) {
            $ = e;
            D.abort();
        });
        mediaObject.setUploadPromise(P, mediaType);
        return P;
    }
    const M = {
        user: "media-upload-cancel-origin-user",
        media_object_delete: "media-upload-cancel-origin-media_object_delete",
        download_error: "media-upload-cancel-origin-download_error",
        thumbnail: "media-upload-cancel-origin-thumbnail",
        unknown: "media-upload-cancel-origin-unknown"
    };
    function w(mediaType, t) {
        if (o("WAWebABProps").getABPropConfigValue("web_media_fast_forward_match_key_type_entry_enabled")) {
            const n = t ?? "unknown";
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[media-upload] upload cancelled, origin: ",
                ", type: ",
                ""
            ])), n, mediaType).sendLogs(M[n], {
                sampling: 0.1
            });
        }
    }
    function A(e) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ abortSignal, chatWid, mediaObject, mediaType, mimetype, uploadOrigin }) {
            const c = G(mediaObject);
            if (c) {
                return c;
            }
            const d = mediaObject.filehash ?? "none";
            const length = mediaObject.entries.entries.length;
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "getOrDownloadBlob: no blob fh=",
                " type=",
                " msgs=",
                " entries=",
                " dlStage=",
                ""
            ])), d, mediaType, mediaObject.msgs.length, length, mediaObject.downloadStage);
            yield o("WAWebMediaMmsV4Download").downloadMedia({
                mimetype,
                mediaObject,
                downloadEvenIfExpensive: true,
                mediaType,
                signal: abortSignal,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.UPLOAD,
                downloadOrigin: o("WAWebMediaGetDownloadOriginFromUploadOrigin").getDownloadOriginFromUploadOrigin(uploadOrigin),
                mode: "manual",
                chatWid
            });
            if (mediaObject.downloadStage === o("WAWebMediaTypes").DownloadStage.ERROR_MISSING) {
                throw new (o("WAWebDownloadManagerErrors")).MediaNotOnPhone;
            }
            const p = G(mediaObject);
            if (p) {
                return p;
            }
            throw r("err")("can't upload media w/out mediaBlob after download");
        });
        return F.apply(this, arguments);
    }
    function O(e, t, n) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (!H(e, t) || n.size > r("WAWebMediaStoreLruImpl").SINGLE_ITEM_SIZE_LIMIT_IN_BYTES || o("WAWebUploadManagerBase").shouldStreamEncrypt(t, n)) {
                return null;
            }
            try {
                return yield o("WAWebFileUtils").blobToArrayBuffer(n);
            } catch (e) {
                return null;
            }
        });
        return B.apply(this, arguments);
    }
    function W(e, t, n) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = n instanceof ArrayBuffer ? n.byteLength : n.size;
            if (!(e == null || !H(e, t) || a > r("WAWebMediaStoreLruImpl").SINGLE_ITEM_SIZE_LIMIT_IN_BYTES)) {
                let i;
                try {
                    i = n instanceof ArrayBuffer ? n : yield o("WAWebFileUtils").blobToArrayBuffer(n);
                } catch (error) {
                    o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[media-upload] sent media no longer readable to file for reuse"
                    ]))).catching(r("getErrorSafe")(error));
                    return;
                }
                try {
                    yield o("WAWebMediaStore").LruMediaStore.put(e, i);
                } catch (error) {
                    if (error instanceof DOMException) {
                        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[media-upload] browser refused to file the sent media for reuse: ",
                            ""
                        ])), error.name);
                        return;
                    }
                    o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[media-upload] could not file the sent media for reuse"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("upload-lru-store-write-failed");
                }
            }
        });
        return q.apply(this, arguments);
    }
    function U(e, t) {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = e.mediaBlob;
                if (n == null || !(n.forceToBlob() instanceof File)) {
                    return;
                }
                const a = yield r("WAWebMediaOpaqueData").createFromData(t, n.type());
                e.consolidate({
                    mediaBlob: a
                });
                const i = e.filehash;
                if (i != null && o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(i) instanceof File) {
                    o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.replace(i, a.forceToBlob());
                }
                a.autorelease();
            } catch (error) {
                o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-upload] could not keep the sent media in memory"
                ]))).catching(r("getErrorSafe")(error));
            }
        });
        return V.apply(this, arguments);
    }
    function H(e, t) {
        if (e == null) {
            return false;
        }
        return o("WAWebMediaDataUtils").shouldUseLruMediaStore(t) && r("justknobx")._("2918") || r("WAWebEnvironment").isWindows;
    }
    function G(e) {
        const e_mediaBlob = e.mediaBlob;
        if (e_mediaBlob) {
            return e_mediaBlob.formData();
        }
        if (!(e.filehash == null || e.filehash === "")) {
            return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(e.filehash);
        }
    }
    l.cancelUploadMedia = v;
    l.UploadMediaResultKind = S;
    l.getUploadEntryForMediaType = E;
    l.uploadMedia = $;
    l.uploadUnencryptedMedia = P;
    l.getOrDownloadBlob = A;
    l.getBlobFromMediaObject = G;
}, 98);