__d("WAWebMediaPrepHelpers", [
    "invariant",
    "WALogger",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebMediaGatingUtils",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebSendMsgResultAction",
    "WAWebStateUtils",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamEnumMessageSendResultType",
    "err"
], function(t, n, r, o, a, i, l, s) {
    let e;
    function u(e, t) {
        if (t.type === "product") {
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.PRODUCT_CATALOG;
        }
        const n = o("WAWebStateUtils").unproxy(e);
        if (o("WAWebChatGetters").getIsGroup(n)) {
            if (o("WAWebFrontendChatGetters").getIsCAG(n)) {
                return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.COMMUNITY;
            }
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_GROUP;
        }
        if (o("WAWebChatGetters").getIsNewsletter(n)) {
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHANNEL;
        }
        return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL;
    }
    function c(e) {
        const t = o("WAWebMmsMediaTypes").getMsgMediaType(e);
        return t === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT;
    }
    const d = [
        o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO,
        o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE
    ];
    function m(e) {
        const t = o("WAWebMmsMediaTypes").getMsgMediaType(e);
        return d.includes(t);
    }
    function p(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
            return c(e);
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
            return true;
        }
        if (o("WAWebMsgGetters").getIsStatus(e.unsafe())) {
            return m(e);
        }
        return false;
    }
    function _(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_DOCUMENT;
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_IMAGE;
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_VIDEO;
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_STICKER_PACK;
        }
        return s(false, "getMediaTypeForThumbnails: attempt to create thumbnail for unsupported media type");
    }
    function f({ fullPreviewSize, mediaObject, mediaResultEntry, mediaType, uploadEncryptedThumbnail, uploadThumbnailResult }) {
        const thumbnailResultEntry = uploadThumbnailResult?.mediaEntry;
        if (uploadEncryptedThumbnail === true) {
            if (thumbnailResultEntry && uploadThumbnailResult && fullPreviewSize) {
                return {
                    thumbnailDirectPath: thumbnailResultEntry.directPath,
                    thumbnailSha256: uploadThumbnailResult.filehash,
                    thumbnailEncSha256: thumbnailResultEntry.encFilehash,
                    thumbnailHeight: fullPreviewSize.height,
                    thumbnailWidth: fullPreviewSize.width
                };
            }
            const d = {
                thumbnailResultEntry,
                uploadThumbnailResult,
                fullPreviewSize
            };
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "upload failed: thumbnail data incomplete\nDebug info:",
                ""
            ], [
                "upload failed: thumbnail data incomplete\\nDebug info:",
                ""
            ])), JSON.stringify(d)).sendLogs("mms-thumbnail-data-incomplete");
            throw r("err")("upload failed: thumbnail data incomplete");
        }
        const mediaObject_contentInfo = mediaObject.contentInfo;
        const { fullHeight, fullWidth } = mediaObject_contentInfo;
        if (mediaResultEntry.getThumbnailDirectPath() != null && mediaResultEntry.getThumbnailSha256() != null && fullWidth != null && fullHeight != null && o("WAWebMediaGatingUtils").isThumbnailGenerationOnServerEnabledForMediaType(mediaType)) {
            return {
                thumbnailDirectPath: mediaResultEntry.getThumbnailDirectPath(),
                thumbnailSha256: mediaResultEntry.getThumbnailSha256(),
                thumbnailHeight: fullHeight,
                thumbnailWidth: fullWidth
            };
        }
    }
    function g(e) {
        e.wamMessageSendReporter?.postFailure({
            result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD,
            isTerminal: true
        });
        return o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UPLOAD;
    }
    l.getDownloadOriginForChat = u;
    l.shouldUploadThumbnail = p;
    l.getMediaTypeForThumbnails = _;
    l.maybeGetThumbnailData = f;
    l.errorUpload = g;
}, 98);