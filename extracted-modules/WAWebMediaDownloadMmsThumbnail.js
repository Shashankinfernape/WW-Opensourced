__d("WAWebMediaDownloadMmsThumbnail", [
    "Promise",
    "WAAbortError",
    "WABase64",
    "WALogger",
    "WAWebDownloadManager",
    "WAWebExperienceIdWamFields",
    "WAWebFrontendMsgGetters",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaOpaqueData",
    "WAWebMessagePluginGetThumbnailTypeForMediaMsg",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebSerializeError",
    "WAWebStartMediaDownloadQpl",
    "WAWebThumbnailOutcomeLogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
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
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, isPreload, msg, signal }) {
            const m = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "DownloadMmsFavicon"
            });
            const p = o("WAWebFrontendMsgGetters").getAsUrl(msg.unsafe());
            const _ = p?.faviconMMSMetadata;
            const f = _?.thumbnailSha256;
            if (p == null || _ == null || r("isStringNullOrEmpty")(_.thumbnailDirectPath) || f == null) {
                m.endFail("missing_favicon_download_metadata", {
                    string: {
                        earlyExitReason: "missing_favicon_download_metadata"
                    }
                });
                return;
            }
            if (o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(msg.unsafe()) && (_.thumbnailEncSha256 == null || _.mediaKey == null || _.mediaKeyTimestamp == null)) {
                m.endFail("missing_favicon_crypto_metadata", {
                    string: {
                        earlyExitReason: "missing_favicon_crypto_metadata"
                    }
                });
                return;
            }
            const g = _.thumbnail == null;
            if (!g) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "media.downloadMMSFavicon: skipping"
                ])));
                m.endSuccess({
                    string: {
                        downloadResult: "existing_favicon"
                    }
                });
                return;
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "media.downloadMMSFavicon: start"
            ])));
            try {
                const h = yield o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt({
                    directPath: _.thumbnailDirectPath,
                    encFilehash: _.thumbnailEncSha256,
                    filehash: f,
                    mediaKey: _.mediaKey,
                    mediaKeyTimestamp: _.mediaKeyTimestamp,
                    type: r("nullthrows")(o("WAWebMessagePluginGetThumbnailTypeForMediaMsg").getThumbnailTypeForMediaMsg({
                        msg
                    })),
                    signal: signal || new AbortController().signal,
                    userDownloadAttemptCount: 0,
                    isPreload,
                    chatWid: chat?.id,
                    downloadQpl: m,
                    downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(msg.unsafe()),
                    experienceIds: o("WAWebExperienceIdWamFields").getExperienceIds(msg.unsafe())
                });
                if (h) {
                    m.addPoint("favicon_store_start");
                    const thumbnail = o("WABase64").encodeB64(h);
                    p.faviconMMSMetadata = babelHelpers.extends({}, p.faviconMMSMetadata, {
                        thumbnail
                    });
                    m.addPoint("favicon_store_end");
                    m.endSuccess();
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "media.downloadMMSFavicon: success"
                    ])));
                }
            } catch (error) {
                const C = r("getErrorSafe")(error);
                if (C.name === o("WAAbortError").ABORT_ERROR) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "media.downloadMMSFavicon aborted"
                    ])));
                    m.endFailWithError("download_aborted", "Download aborted");
                    return;
                }
                m.endFailWithError("download_failed", C.message);
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "media.downloadMMSFavicon: error\n",
                    ""
                ], [
                    "media.downloadMMSFavicon: error\\n",
                    ""
                ])), r("WAWebSerializeError")(C)).verbose();
            }
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, isPreload, msg, signal }) {
            const l = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "DownloadMmsThumbnail"
            });
            const { mediaKey, mediaKeyTimestamp, thumbnailDirectPath, thumbnailEncSha256, thumbnailSha256 } = msg;
            if (r("isStringNullOrEmpty")(thumbnailDirectPath) || r("isStringNullOrEmpty")(thumbnailSha256)) {
                l.endFail("missing_thumbnail_download_metadata", {
                    string: {
                        earlyExitReason: "missing_thumbnail_download_metadata"
                    }
                });
                return;
            }
            const h = o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(msg.unsafe());
            if (h && (thumbnailEncSha256 == null || mediaKey == null || mediaKeyTimestamp == null)) {
                l.endFail("missing_thumbnail_crypto_metadata", {
                    string: {
                        earlyExitReason: "missing_thumbnail_crypto_metadata"
                    }
                });
                return;
            }
            if ((msg.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT || msg.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) && o("WAWebMmsMediaTypes").getMsgMediaType(msg) === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT && (msg.thumbnailHeight == null || msg.thumbnailWidth == null)) {
                l.endFail("missing_document_thumbnail_dimensions", {
                    string: {
                        earlyExitReason: "missing_document_thumbnail_dimensions"
                    }
                });
                return;
            }
            const y = o("WAWebFrontendMsgGetters").getAsUrl(msg.unsafe());
            if (y && (y.thumbnailHeight == null || y.thumbnailWidth == null)) {
                l.endFail("missing_link_thumbnail_dimensions", {
                    string: {
                        earlyExitReason: "missing_link_thumbnail_dimensions"
                    }
                });
                return;
            }
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "media.downloadMmsThumbnail: start"
            ])));
            const C = r("WAWebMediaGetDownloadOriginForMsg")(msg.unsafe());
            const b = {
                callsite: "DOWNLOAD_MMS_THUMBNAIL",
                downloadOrigin: o("WAWebThumbnailOutcomeLogger").thumbnailDownloadOriginFromWam(C),
                isEncrypted: h,
                mediaType: o("WAWebThumbnailOutcomeLogger").thumbnailMediaTypeFromMsgType(msg.type, msg.type === o("WAWebMsgType").MSG_TYPE.VIDEO && msg.isGif === true)
            };
            try {
                const v = yield o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt({
                    directPath: thumbnailDirectPath,
                    encFilehash: thumbnailEncSha256,
                    filehash: thumbnailSha256,
                    mediaKey,
                    mediaKeyTimestamp,
                    type: r("nullthrows")(o("WAWebMessagePluginGetThumbnailTypeForMediaMsg").getThumbnailTypeForMediaMsg({
                        msg
                    })),
                    signal: signal || new AbortController().signal,
                    userDownloadAttemptCount: 0,
                    isPreload,
                    chatWid: chat?.id,
                    downloadQpl: l,
                    downloadOrigin: C,
                    experienceIds: o("WAWebExperienceIdWamFields").getExperienceIds(msg.unsafe())
                });
                const S = self.performance.now();
                l.addPoint("thumbnail_consolidation_start");
                if (y) {
                    y.thumbnailHQ = o("WABase64").encodeB64(v);
                } else {
                    const R = r("nullthrows")(msg.mediaObject, "mediaObject cannot be null for thumbnail download");
                    const L = {
                        fullPreviewData: yield r("WAWebMediaOpaqueData").createFromData(v, "image/jpeg")
                    };
                    if (msg.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
                        L.fullPreviewSize = {
                            height: r("nullthrows")(msg.thumbnailHeight),
                            width: r("nullthrows")(msg.thumbnailWidth)
                        };
                    }
                    R.consolidate(L);
                }
                l.addPoint("thumbnail_consolidation_end");
                l.endSuccess();
                o("WAWebThumbnailOutcomeLogger").logThumbnailOutcome({
                    branch: "SERVER_THUMBNAIL",
                    checkPerformed: false,
                    context: b,
                    generationDurationMs: self.performance.now() - S,
                    outcome: "OK"
                });
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "media.downloadMmsThumbnail: success"
                ])));
            } catch (error) {
                const E = r("getErrorSafe")(error);
                if (E.name === o("WAAbortError").ABORT_ERROR) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "media.downloadMmsThumbnail aborted"
                    ])));
                    l.endFailWithError("download_aborted", "Download aborted");
                    return;
                }
                l.endFailWithError("download_failed", E.message);
                o("WAWebThumbnailOutcomeLogger").logThumbnailOutcome({
                    branch: "SERVER_THUMBNAIL",
                    checkPerformed: false,
                    context: b,
                    generationDurationMs: null,
                    outcome: "ERROR"
                });
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "media.downloadMmsThumbnail: error\n",
                    ""
                ], [
                    "media.downloadMmsThumbnail: error\\n",
                    ""
                ])), r("WAWebSerializeError")(E)).verbose();
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield (g || (g = n("Promise"))).all([
                h(e),
                C(e)
            ]);
        });
        return S.apply(this, arguments);
    }
    l.default = v;
}, 98);