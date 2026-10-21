__d("WAWebLinkPreviewUtils", [
    "WABase64",
    "WALogger",
    "WAWebDownloadManager",
    "WAWebStartMediaDownloadQpl",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(chatWid) {
        if (chatWid == null) {
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL;
        }
        if (r("WAWebWid").isNewsletter(chatWid)) {
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHANNEL;
        }
        if (r("WAWebWid").isGroup(chatWid)) {
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_GROUP;
        }
        if (r("WAWebWid").isBroadcast(chatWid)) {
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.BROADCAST;
        }
        return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL;
    }
    function m({ linkDetails, linkThumbnail, paymentLinkDetails, url }) {
        const a = linkThumbnail ?? {
            thumbnail: undefined
        };
        return {
            url,
            data: babelHelpers.extends({
                matchedText: url
            }, linkDetails, a, paymentLinkDetails)
        };
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatWid, encryptionParams, hqThumbnailParams, mediaType, thumbnail }) {
            const p = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "LinkPreviewDownload"
            });
            const _ = hqThumbnailParams ?? {};
            const { directPath, thumbHash } = _;
            const h = {
                thumbnail
            };
            if (thumbHash == null) {
                p.endFail("missing_thumbnail_hash", {
                    string: {
                        earlyExitReason: "missing_thumbnail_hash"
                    }
                });
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: malformed HQ preview"
                ])));
                return h;
            }
            if (directPath == null || directPath === "") {
                p.endFail("missing_direct_path", {
                    string: {
                        earlyExitReason: "missing_direct_path"
                    }
                });
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: malformed HQ preview"
                ])));
                return h;
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: found HQ preview"
            ])));
            try {
                const y = encryptionParams ?? {
                    encFilehash: null
                };
                const C = yield o("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt(babelHelpers.extends({
                    directPath,
                    filehash: thumbHash,
                    type: mediaType,
                    signal: new AbortController().signal,
                    userDownloadAttemptCount: 0,
                    chatWid,
                    downloadQpl: p,
                    downloadOrigin: d(chatWid)
                }, y));
                p.addPoint("thumbnail_encode_start");
                const thumbnailHQ = o("WABase64").encodeB64(C);
                p.addPoint("thumbnail_encode_end");
                const { thumbHeight, thumbWidth } = _;
                const R = {
                    thumbnail,
                    thumbnailDirectPath: directPath,
                    thumbnailSha256: thumbHash,
                    thumbnailHQ,
                    thumbnailHeight: thumbnailHQ != null ? thumbHeight : undefined,
                    thumbnailWidth: thumbnailHQ != null ? thumbWidth : undefined,
                    thumbnailEncSha256: y.encFilehash,
                    mediaKeyTimestamp: y.mediaKeyTimestamp,
                    mediaKey: y.mediaKey
                };
                p.endSuccess();
                return R;
            } catch (error) {
                p.endFailWithError("download_failed", r("getErrorSafe")(error).message);
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    " Failed to download HQ link preview ",
                    ""
                ])), error);
                return h;
            }
        });
        return _.apply(this, arguments);
    }
    l.genLinkPreview = m;
    l.getThumbnailDetails = p;
}, 98);