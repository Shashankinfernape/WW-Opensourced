__d("WAWebProcessRawMedia", [
    "WAWebABProps",
    "WAWebFileUtils",
    "WAWebMediaDataUtils",
    "WAWebMediaFileErrors",
    "WAWebMediaFileTooLargeError",
    "WAWebMediaGatingUtils",
    "WAWebProcessRawMediaLogging",
    "asyncToGeneratorRuntime",
    "cr:10296"
], function(t, n, r, o, a, i, l) {
    const e = 2147483648;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(opaqueData, a) {
            opaqueData.retain();
            try {
                const s = opaqueData.size();
                const u = (n("cr:10296") == null ? undefined : n("cr:10296").isWindowsHybridTranscoderEnabled()) ?? false;
                let c;
                if (a.asDocument === true) {
                    c = o("WAWebFileUtils").FILETYPE.DOCUMENT;
                } else if (a.asSticker === true) {
                    c = o("WAWebFileUtils").FILETYPE.STICKER;
                } else if (a.asStickerPack === true) {
                    c = o("WAWebFileUtils").FILETYPE.STICKER_PACK;
                } else {
                    c = o("WAWebFileUtils").typeFromMimetype(opaqueData.type());
                }
                const d = a.isVcardOverMmsDocument ?? false;
                if (c === "document") {
                    o("WAWebProcessRawMediaLogging").logSendDocumentEvent(a.filename, s);
                }
                const m = o("WAWebMediaGatingUtils").getUploadLimit(c, a.fileOrigin, d);
                if (c === "video" && u && s >= e) {
                    throw new (r("WAWebMediaFileTooLargeError"))(c, e, s);
                }
                if (!u && s > m) {
                    throw new (r("WAWebMediaFileTooLargeError"))(c, m, s);
                }
                if (s <= 0) {
                    throw new (o("WAWebMediaFileErrors")).MediaFileEmpty;
                }
                let gifAttribution;
                if (a.gifAttribution != null) {
                    gifAttribution = a.gifAttribution;
                } else if (a.asGif === true) {
                    gifAttribution = 0;
                }
                let _;
                e: {
                    if (c === "image") {
                        _ = yield o("WAWebMediaDataUtils").processRawImage(opaqueData, {
                            maxDimension: a.maxDimension ?? o("WAWebABProps").getABPropConfigValue("web_image_max_edge"),
                            minDimension: a.minDimension,
                            transparency: a.transparency
                        }, a.fileOrigin);
                        break e;
                    }
                    if (c === "sticker") {
                        _ = yield o("WAWebMediaDataUtils").processRawSticker(opaqueData);
                        break e;
                    }
                    if (c === "video" || c === "audio") {
                        _ = yield o("WAWebMediaDataUtils").processRawAudioVideo({
                            _mimetype: opaqueData.type(),
                            accessibilityLabel: a.accessibilityLabel,
                            asGif: a.asGif,
                            asPtt: !!a.isPtt,
                            gifAttribution,
                            opaqueData,
                            precomputedFields: a.precomputedFields,
                            resetMediaPreview: a.resetMediaPreview,
                            setMediaPreview: a.setMediaPreview,
                            setMimeType: a.setMimeType,
                            setProgressPercentage: a.setProgressPercentage
                        });
                        if (u && c === "video" && _.size != null && _.size > m) {
                            throw new (r("WAWebMediaFileTooLargeError"))(c, m, _.size);
                        }
                        break e;
                    }
                    if (c === "document" || c === "sticker-pack") {
                        _ = yield o("WAWebMediaDataUtils").processRawDocument(opaqueData, a.filename, d, a.documentPageCount, c, a.signal);
                        break e;
                    }
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${c}`);
                }
                return _;
            } finally{
                opaqueData.autorelease();
            }
        });
        return u.apply(this, arguments);
    }
    l.processRawMedia = s;
}, 98);