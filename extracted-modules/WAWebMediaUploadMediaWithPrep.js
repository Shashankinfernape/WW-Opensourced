__d("WAWebMediaUploadMediaWithPrep", [
    "invariant",
    "Promise",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebCryptoRandomMediaKey",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaEntry",
    "WAWebMediaGatingShouldClearUploadedBlobs",
    "WAWebMediaInMemoryKeyCache",
    "WAWebMediaMmsV4Upload",
    "WAWebMediaPrepHelpers",
    "WAWebMediaUploadMmsThumbnail",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebNullFunc",
    "WAWebURLUtils",
    "WAWebWamEnumUploadOriginType",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            let _;
            const t_mediaObject = t.mediaObject;
            if (!t_mediaObject) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!"
                ]))).sendLogs("media-fault: incorrect media object for created msg");
            }
            if (!t_mediaObject) {
                s(0, 56330);
            }
            const g = o("WAWebMmsMediaTypes").getMsgMediaType(t);
            let h;
            const y = a.canEnableFastForward ?? true;
            if (y === true) {
                h = o("WAWebMediaMmsV4Upload").getUploadEntryForMediaType(t_mediaObject.entries, a.isMediaCryptoExpectedForChat === true, g);
            }
            const C = h instanceof o("WAWebMediaEntry").EncryptedMediaEntry ? {
                key: h.mediaKey,
                timestamp: h.mediaKeyTimestamp
            } : r("WAWebCryptoRandomMediaKey")();
            const f_contentInfo = t_mediaObject.contentInfo;
            let b_fullPreviewData = f_contentInfo.fullPreviewData;
            let b_fullPreviewSize = f_contentInfo.fullPreviewSize;
            const R = t.safe();
            const L = o("WAWebMediaPrepHelpers").shouldUploadThumbnail(R);
            const E = o("WAWebABProps").getABPropConfigValue("wa_web_enable_status_hq_thumbnail");
            let k = false;
            let I = false;
            if (E) {
                k = (!b_fullPreviewData || b_fullPreviewData.size() > o("WAWebMediaConstants").MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES) && L;
                I = R.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK && L;
            } else {
                k = !b_fullPreviewData && L;
                I = L;
            }
            const T = !b_fullPreviewSize && L;
            let t_body = t.body;
            if ((k || T || I) && t_mediaObject.contentInfo.preview) {
                try {
                    const x = yield o("WAWebImageUtils").base64ImageToCanvas(t_mediaObject.contentInfo.preview.url());
                    const $ = k ? o("WAWebABProps").getABPropConfigValue("web_pdf_thumbnail_size_in_bytes") : o("WAWebMediaConstants").MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES;
                    const P = yield o("WAWebCanvasUtils").generateMicroThumb(x, $, {
                        mimetype: "image/jpeg",
                        maxAttempts: 10
                    });
                    b_fullPreviewData = t_mediaObject.contentInfo.preview;
                    b_fullPreviewSize = {
                        width: P.width,
                        height: P.height
                    };
                    t_body = r("WAWebURLUtils").parseDataURL(P.dataUrl).data;
                } catch (error) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[media] microthumb generation failed, skipping: ",
                        ""
                    ])), error).sendLogs("media-microthumb-generation-failed");
                }
            }
            const N = b_fullPreviewData && b_fullPreviewSize && L;
            const thumbnail = b_fullPreviewData && N === true ? b_fullPreviewData : null;
            const w = (i)=>{
                if (thumbnail != null) {
                    return r("WAWebMediaUploadMmsThumbnail")({
                        thumbnail,
                        mediaKeyInfo: i,
                        mediaType: r("nullthrows")(o("WAWebMediaPrepHelpers").getMediaTypeForThumbnails(R)),
                        uploadOrigin: a.uploadOriginForChat ?? o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.UNKNOWN,
                        fileOrigin: a.fileOrigin,
                        forwardedFromWeb: !!t.forwardedFromWeb,
                        isViewOnce: !!t.isViewOnce
                    });
                }
                return (m || (m = n("Promise"))).resolve(null);
            };
            const A = w(C);
            const F = {
                mimetype: t.mimetype,
                canEnableFastForward: a.canEnableFastForward,
                mediaObject: t_mediaObject,
                mediaType: g,
                forwardedFromWeb: !!t.forwardedFromWeb,
                uploadOrigin: a.uploadOriginForChat ?? o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.UNKNOWN,
                fileOrigin: a.fileOrigin,
                isViewOnce: !!t.isViewOnce,
                earlyUpload: a.earlyUpload
            };
            const O = a.isMediaCryptoExpectedForChat === true ? o("WAWebMediaMmsV4Upload").uploadMedia(babelHelpers.extends({}, F, {
                mediaKeyInfo: C,
                uploadEntry: h
            })) : o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia(babelHelpers.extends({}, F, {
                calculateToken: o("WAMediaCalculateFilehash").getRandomFilehash
            }));
            const f_filehash = t_mediaObject.filehash;
            if (f_filehash != null) {
                o("WAWebMediaInMemoryKeyCache").MediaKeyCache.put(f_filehash, C);
            }
            const W = yield (m || (m = n("Promise"))).all([
                O,
                A
            ]);
            const mediaResult = W[0];
            const U = W[1];
            let uploadThumbnailResult = U;
            if (r("WAWebMediaGatingShouldClearUploadedBlobs")(g)) {
                t_mediaObject.clearBlob({
                    reset: true
                });
            }
            const q_mediaEntry = mediaResult.mediaEntry;
            if (!q_mediaEntry) {
                return {
                    mediaResult,
                    mmsThumbnailData: null,
                    body: t_body,
                    fbid: null
                };
            }
            if (f_filehash != null) {
                o("WAWebMediaInMemoryKeyCache").MediaKeyCache.delete(f_filehash);
            }
            let uploadEncryptedThumbnail = N;
            if (thumbnail != null && q_mediaEntry instanceof o("WAWebMediaEntry").EncryptedMediaEntry && q_mediaEntry.getMediaKey() !== C.key && o("WAWebABProps").getABPropConfigValue("wa_web_media_thumbnail_key_match_enabled")) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[media] media key of the upload differs from the thumbnail's, uploading the thumbnail again, type: ",
                    ""
                ])), g).sendLogs("media-thumbnail-key-mismatch");
                const z = yield w({
                    key: q_mediaEntry.getMediaKey(),
                    timestamp: q_mediaEntry.getMediaKeyTimestamp()
                }).catch(o("WAWebNullFunc").returnNull);
                if (z?.kind === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS) {
                    uploadThumbnailResult = z;
                } else {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[media] thumbnail re-upload failed, sending without it, type: ",
                        ""
                    ])), g).sendLogs("media-thumbnail-key-mismatch-reupload-failed");
                    uploadEncryptedThumbnail = false;
                }
            }
            const mmsThumbnailData = o("WAWebMediaPrepHelpers").maybeGetThumbnailData({
                uploadThumbnailResult,
                mediaResultEntry: q_mediaEntry,
                uploadEncryptedThumbnail,
                mediaObject: t_mediaObject,
                fullPreviewSize: b_fullPreviewSize,
                mediaType: g
            }) ?? {};
            const K = q_mediaEntry instanceof o("WAWebMediaEntry").UnencryptedMediaEntry && (_ = q_mediaEntry.fbid) != null ? _ : null;
            return {
                mediaResult,
                mmsThumbnailData,
                body: t_body,
                fbid: K
            };
        });
        return _.apply(this, arguments);
    }
    l.uploadMediaWithPrep = p;
}, 98);