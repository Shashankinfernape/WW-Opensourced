__d("WAWebDownloadProgressiveJpegThumbnail", [
    "WAAbortError",
    "WALogger",
    "WAWebDownloadManager",
    "WAWebExperienceIdWamFields",
    "WAWebHttpErrors",
    "WAWebMediaFileErrors",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaOpaqueData",
    "WAWebMmsClientErrors",
    "WAWebMmsMediaTypes",
    "WAWebSerializeError",
    "WAWebStartMediaDownloadQpl",
    "WAWebThumbnailOutcomeLogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, isPreload, msg, scanCount = 1, signal }) {
            const _ = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "DownloadProgressiveJpegThumbnail"
            });
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "media.downloadProgressiveJpegThumbnail: start"
            ])));
            const f = r("WAWebMediaGetDownloadOriginForMsg")(msg.unsafe());
            const g = {
                callsite: "DOWNLOAD_PROGRESSIVE_JPEG_THUMBNAIL",
                downloadOrigin: o("WAWebThumbnailOutcomeLogger").thumbnailDownloadOriginFromWam(f),
                mediaType: o("WAWebThumbnailOutcomeLogger").thumbnailMediaTypeFromMsgType(msg.type)
            };
            try {
                let h;
                const y = (h = r("nullthrows"))(msg.scanLengths);
                const C = h(msg.scansSidecar);
                const b = h(msg.mediaObject);
                const filehash = h(b.filehash);
                const { directPath, encFilehash } = msg;
                const L = yield o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt({
                    directPath,
                    encFilehash,
                    filehash,
                    mediaKey: msg.mediaKey,
                    mediaKeyTimestamp: msg.mediaKeyTimestamp,
                    mimetype: "image/jpeg",
                    type: o("WAWebMmsMediaTypes").getMsgMediaType(msg),
                    signal: signal || new AbortController().signal,
                    userDownloadAttemptCount: 0,
                    progressiveJpegOpts: {
                        mimetype: "image/jpeg",
                        scansSidecar: C,
                        scanLengths: y,
                        scanCount
                    },
                    isPreload,
                    chatWid: chat?.id,
                    downloadQpl: _,
                    downloadOrigin: f,
                    experienceIds: o("WAWebExperienceIdWamFields").getExperienceIds(msg.unsafe())
                });
                const E = self.performance.now();
                _.addPoint("thumbnail_consolidation_start");
                b.consolidate({
                    fullPreviewData: yield r("WAWebMediaOpaqueData").createFromData(L, "image/jpeg")
                });
                _.addPoint("thumbnail_consolidation_end");
                _.endSuccess();
                o("WAWebThumbnailOutcomeLogger").logThumbnailOutcome({
                    branch: "SERVER_THUMBNAIL",
                    checkPerformed: false,
                    context: g,
                    generationDurationMs: self.performance.now() - E,
                    outcome: "OK"
                });
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "media.downloadProgressiveJpegThumbnail: success"
                ])));
            } catch (error) {
                if (r("getErrorSafe")(error).name === o("WAAbortError").ABORT_ERROR) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "media.downloadProgressiveJpegThumbnail aborted"
                    ])));
                    _.endFailWithError("download_aborted", "Download aborted");
                    return;
                }
                _.endFailWithError("download_failed", r("getErrorSafe")(error).message);
                o("WAWebThumbnailOutcomeLogger").logThumbnailOutcome({
                    branch: "SERVER_THUMBNAIL",
                    checkPerformed: false,
                    context: g,
                    generationDurationMs: null,
                    outcome: "ERROR"
                });
                if (error instanceof o("WAWebHttpErrors").HttpNetworkError || error instanceof o("WAWebMmsClientErrors").MediaNotFoundError || error instanceof o("WAWebMediaFileErrors").MediaDecryptionError) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "media.downloadProgressiveJpegThumbnail: expected error\n",
                        ""
                    ], [
                        "media.downloadProgressiveJpegThumbnail: expected error\\n",
                        ""
                    ])), r("WAWebSerializeError")(error)).verbose();
                } else {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "media.downloadProgressiveJpegThumbnail: error\n",
                        ""
                    ], [
                        "media.downloadProgressiveJpegThumbnail: error\\n",
                        ""
                    ])), r("WAWebSerializeError")(error)).sendLogs("download-pjpeg-thumbnail-failed");
                }
            }
        });
        return p.apply(this, arguments);
    }
    l.downloadProgressiveJpegThumbnail = m;
}, 98);