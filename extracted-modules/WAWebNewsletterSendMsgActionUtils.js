__d("WAWebNewsletterSendMsgActionUtils", [
    "WAWebFrontendMsgGetters",
    "WAWebMediaConstants",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaOpaqueData",
    "WAWebMediaUploadMmsThumbnail",
    "WAWebMmsMediaTypes",
    "WAWebMsgModelFromData",
    "WAWebMsgModelUtils",
    "WAWebNewsletterErrors",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebMsgModelUtils").notRefiningTypeIsUrl(e)) {
                return u(e);
            }
            return e;
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebFrontendMsgGetters").getAsUrl(o("WAWebMsgModelFromData").msgModelFromMsgData(e));
            if (t == null) {
                return e;
            }
            const t_thumbnailHQ = t.thumbnailHQ;
            if (t_thumbnailHQ == null) {
                return e;
            }
            const a = yield r("WAWebMediaUploadMmsThumbnail")({
                thumbnail: yield r("WAWebMediaOpaqueData").createFromBase64Jpeg(t_thumbnailHQ),
                mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK,
                uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(o("WAWebFrontendMsgGetters").getChat(t.unsafe())),
                fileOrigin: null,
                forwardedFromWeb: true,
                timeout: o("WAWebMediaConstants").MMS_THUMBNAIL_UPLOAD_TIMEOUT,
                isViewOnce: false
            });
            const { filehash, mediaEntry } = a;
            return babelHelpers.extends({}, e, {
                thumbnailDirectPath: mediaEntry?.directPath,
                thumbnailSha256: filehash,
                thumbnailEncSha256: undefined,
                mediaKey: undefined,
                mediaKeyTimestamp: undefined
            });
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        if (e.quotedParticipant != null && e.quotedParticipant !== t.id) {
            throw new (o("WAWebNewsletterErrors")).UnexpectedNewsletterQuotedParticipantMismatchError;
        }
    }
    l.prepMsgDataForForward = e;
    l.validateMsgDataForMsgSend = d;
}, 98);