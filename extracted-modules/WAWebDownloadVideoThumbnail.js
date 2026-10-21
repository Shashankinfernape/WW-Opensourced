__d("WAWebDownloadVideoThumbnail", [
    "WALogger",
    "WAPromiseLoop",
    "WAWebDownloadManager",
    "WAWebExperienceIdWamFields",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaLoadErrors",
    "WAWebMediaOpaqueData",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebSerializeError",
    "WAWebStartMediaDownloadQpl",
    "WAWebThumbnailOutcomeLogger",
    "WAWebURLUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = 1;
    const p = 1.5;
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, downloadQpl, isEncrypted, msg }) {
            return yield o("WAPromiseLoop").promiseLoop((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, u) {
                    try {
                        const c = r("WAWebMediaGetDownloadOriginForMsg")(msg.unsafe());
                        const d = Math.max(parseInt(msg.mediaData.duration, 10), 1);
                        const partialVideoOpts = {
                            video: {
                                size: msg.mediaData.size,
                                duration: d
                            },
                            secondsToDownload: u === 0 ? m : p
                        };
                        const f = yield o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt({
                            directPath: msg.directPath,
                            encFilehash: msg.encFilehash,
                            filehash: msg.filehash,
                            mediaKey: msg.mediaKey,
                            mediaKeyTimestamp: msg.mediaKeyTimestamp,
                            type: o("WAWebMsgGetters").getIsNewsletterMsg(msg.unsafe()) ? o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_VIDEO : o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO,
                            signal: new AbortController().signal,
                            userDownloadAttemptCount: 0,
                            partialVideoOpts,
                            isPreload: true,
                            chatWid: chat?.id,
                            downloadQpl,
                            downloadOrigin: c,
                            experienceIds: o("WAWebExperienceIdWamFields").getExperienceIds(msg.unsafe())
                        });
                        const g = new Blob([
                            f
                        ], {
                            type: "video/mp4"
                        });
                        const h = yield o("WAWebImageUtils").generateVideoThumbsAndDuration({
                            file: g,
                            maxDimensions: [
                                o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE
                            ],
                            debugHint: "downloadVideoThumbnail",
                            throwOnBlack: true,
                            logContext: {
                                callsite: "DOWNLOAD_VIDEO_THUMBNAIL",
                                downloadOrigin: o("WAWebThumbnailOutcomeLogger").thumbnailDownloadOriginFromWam(c),
                                isEncrypted,
                                mediaType: o("WAWebThumbnailOutcomeLogger").thumbnailMediaTypeFromMsgType(msg.type)
                            }
                        });
                        const y = h.thumbs;
                        const C = y[0];
                        t(C);
                    } catch (error) {
                        if (chat == null && error instanceof o("WAWebMediaLoadErrors").UnableToPlayVideoError && u === 0) {
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[generateThumbnailFromVideo] retry: UnableToPlayVideoError"
                            ])));
                            downloadQpl.addAnnotations({
                                bool: {
                                    hasRetry: true
                                }
                            });
                            downloadQpl.addPoint("video_thumbnail_retry_start");
                            return;
                        }
                        throw error;
                    }
                });
                return function(e, n, r) {
                    return t.apply(this, arguments);
                };
            })(), undefined);
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, msg }) {
            const a = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "DownloadVideoThumbnail"
            });
            if (!o("WAWebMsgModelPropUtils").isTrusted(msg.unsafe())) {
                a.endFail("untrusted_message", {
                    string: {
                        earlyExitReason: "untrusted_message"
                    }
                });
                return;
            }
            if (chat?.isSuspendedOrTerminated() === true) {
                a.endFail("suspended_or_terminated_chat", {
                    string: {
                        earlyExitReason: "suspended_or_terminated_chat"
                    }
                });
                return;
            }
            const { directPath, encFilehash, filehash } = msg;
            if (!filehash || !directPath) {
                a.endFail("missing_download_path_or_filehash", {
                    string: {
                        earlyExitReason: "missing_download_path_or_filehash"
                    }
                });
                return;
            }
            const p = o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(msg.unsafe());
            if (p && !encFilehash) {
                a.endFail("missing_encrypted_filehash", {
                    string: {
                        earlyExitReason: "missing_encrypted_filehash"
                    }
                });
                return;
            }
            const msg_mediaData = msg.mediaData;
            const { fullHeight, fullPreviewData, fullWidth } = msg_mediaData;
            if (fullPreviewData && fullWidth != null && fullHeight != null) {
                a.endSuccess({
                    string: {
                        downloadResult: "existing_thumbnail"
                    }
                });
                return;
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "media.downloadVideoThumbnail: start"
            ])));
            try {
                a.addPoint("video_thumbnail_generation_start");
                const C = yield _({
                    msg,
                    chat,
                    downloadQpl: a,
                    isEncrypted: p
                });
                a.addPoint("video_thumbnail_generation_end");
                a.addPoint("thumbnail_consolidation_start");
                const b = yield r("WAWebMediaOpaqueData").createFromBase64Jpeg(r("WAWebURLUtils").parseDataURL(C.url).data);
                const v = r("nullthrows")(msg.mediaObject, "mediaObject cannot be null for thumbnail download");
                const S = {
                    fullPreviewData: b,
                    fullWidth: C.fullWidth,
                    fullHeight: C.fullHeight
                };
                v.consolidate(S);
                a.addPoint("thumbnail_consolidation_end");
                a.endSuccess();
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "media.downloadVideoThumbnail: success"
                ])));
            } catch (error) {
                a.endFailWithError("download_failed", r("getErrorSafe")(error).message);
                if (error instanceof o("WAWebImageUtils").BlackVideoThumbnailError) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[downloadVideoThumbnail] black thumb, using blur fallback"
                    ])));
                    return;
                }
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "media.downloadVideoThumbnail: error\n",
                    ""
                ], [
                    "media.downloadVideoThumbnail: error\\n",
                    ""
                ])), r("WAWebSerializeError")(error)).verbose();
            }
        });
        return h.apply(this, arguments);
    }
    l.downloadVideoThumbnail = g;
}, 98);