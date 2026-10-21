__d("WAWebMediaStickers", [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebDownloadManager",
    "WAWebGetUserMediaErrors",
    "WAWebMediaEntry",
    "WAWebMediaMmsV4Download",
    "WAWebMediaPrep",
    "WAWebMediaStorage",
    "WAWebMediaTypes",
    "WAWebMmsMediaTypes",
    "WAWebRecentStickerCollectionMd",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = 125;
    function _(stickerX) {
        const t = {};
        o("WAWebMediaTypes").MAPPED_STICKER_PROPS.forEach((n)=>{
            const r = stickerX[n];
            const a = o("WAWebMediaTypes").MSG_TO_MEDIA[n];
            t[a] = r;
        });
        return t;
    }
    function f(stickerX) {
        if (!stickerX.filehash) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Unexpected sticker with no filehash"
            ]))).sendLogs("sticker-filehash-error");
            return;
        }
        const n = o("WAWebMediaStorage").getOrCreateMediaObject(stickerX.filehash);
        o("WAWebMediaStorage").associateMediaWithSticker(n, stickerX);
        return n;
    }
    function g({ isIcon, mediaObject, mediaType, stickerX }) {
        const l = _(stickerX);
        stickerX.mediaData.set(l);
        if (mediaObject) {
            stickerX.mediaObject = mediaObject;
            const { deprecatedMms3Url, encFilehash } = stickerX;
            if (!r("gkx")("26258") && (encFilehash == null || encFilehash === "") && deprecatedMms3Url) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "sticker ",
                    " encFileHash missing, has mms3Url"
                ])), isIcon ? "pack icon" : "").sendLogs(`sticker-${isIcon ? "icon-" : ""}missing-upload-hash-but-url-exists`);
            }
            if ((encFilehash || deprecatedMms3Url) && !mediaObject.entries.has({
                encFilehash,
                deprecatedMms3Url
            })) {
                const d = mediaObject.entries.addEntry({
                    deprecatedMms3Url,
                    mediaKey: stickerX.mediaKey,
                    mediaKeyTimestamp: stickerX.mediaKeyTimestamp,
                    encFilehash,
                    type: mediaType,
                    directPath: stickerX.directPath,
                    debugHint: "setMediaObjectValues"
                });
                if (d && mediaObject.downloadStage === o("WAWebMediaTypes").DownloadStage.ERROR_MISSING) {
                    l.downloadStage = o("WAWebMediaTypes").DownloadStage.INIT;
                }
            }
            mediaObject.consolidate(l);
        }
    }
    function h(stickerX) {
        g({
            isIcon: false,
            mediaObject: stickerX.mediaObject || f(stickerX),
            mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER,
            stickerX
        });
    }
    function y(e) {
        const e_mediaObject = e.mediaObject;
        if (e_mediaObject) {
            o("WAWebMediaStorage").disassociateMediaFromSticker(e_mediaObject, e);
        }
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ shouldThrow = true, sticker, type }) {
            if (sticker.isPlaceholder === true || sticker.isCreateButton === true) {
                sticker.mediaData.mediaStage = o("WAWebMediaTypes").MediaDataStage.PREPARING;
                return (m || (m = n("Promise"))).resolve();
            }
            const sticker_mediaObject = sticker.mediaObject;
            if (!sticker_mediaObject) {
                return (m || (m = n("Promise"))).reject(r("err")("media-fault: downloadStickerOrStickerPackIcon sticker/stickerPack without mediaObject"));
            }
            const u = type === "STICKER" ? o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.STICKER_PANEL_STICKER : o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.STICKER_PANEL_ICON;
            let c = false;
            yield sticker_mediaObject.getPendingProcess("fromDisk").then(()=>{
                if (!sticker.filehash || !sticker.mediaKey || sticker.encFilehash == null || sticker.encFilehash === "") {
                    c = true;
                    return o("WAWebDownloadManager").downloadManager.rmr({
                        mediaObject: sticker_mediaObject,
                        signal: new AbortController().signal,
                        rmrReason: u
                    });
                }
            }).then(()=>o("WAWebMediaMmsV4Download").downloadMedia({
                    mimetype: sticker.mimetype,
                    mediaObject: sticker.mediaObject,
                    downloadEvenIfExpensive: true,
                    mediaType: o("WAWebMmsMediaTypes").msgToMediaType({
                        type: sticker.type,
                        isGif: false,
                        isNewsletter: false
                    }),
                    rmrReason: u,
                    downloadOrigin: o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.STICKER_PICKER,
                    shouldThrow
                })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").RMRNotSupportedOnNewsletterMessagesError, function(e) {
                if (e.mediaType !== o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Unexpected RMR error for media type ",
                        ""
                    ])), e.mediaType).sendLogs("failed-to-download-sticker-rmr");
                    throw e;
                }
            }));
            const p = sticker_mediaObject.entries.getDownloadEntry(true);
            if (c && p instanceof o("WAWebMediaEntry").EncryptedMediaEntry) {
                o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.updateStickerMediaData(sticker.filehash, p);
            }
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "Prepping sticker"
        ])));
        const e_mediaObject = e.mediaObject;
        const a = e.mediaData.toJSON();
        a.fullWidth = p;
        a.fullHeight = p;
        if (e_mediaObject) {
            return new (r("WAWebMediaPrep"))(a.type, (m || (m = n("Promise"))).resolve(a));
        }
        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "id: ",
            ""
        ])), e.id).sendLogs("media-fault: prepSticker sticker without mediaObject");
        return new (r("WAWebMediaPrep"))(a.type, (m || (m = n("Promise"))).reject(r("err")("non initialized media")));
    }
    l.registerSticker = h;
    l.deregisterSticker = y;
    l.downloadStickerOrStickerPackIcon = C;
    l.prepSticker = v;
}, 98);