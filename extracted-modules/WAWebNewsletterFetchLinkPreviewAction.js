__d("WAWebNewsletterFetchLinkPreviewAction", [
    "WALogger",
    "WAWebGenMinimalLinkPreviewChatAction",
    "WAWebLinkPreviewCache",
    "WAWebLinkPreviewUtils",
    "WAWebMexFetchPlaintextLinkPreviewJob",
    "WAWebMmsMediaTypes",
    "WAWebProtobufsE2E.pb",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                const r = o("WAWebLinkPreviewCache").getNewsletterPreviewCache();
                const a = yield o("WAWebMexFetchPlaintextLinkPreviewJob").mexFetchPlaintextLinkPreview(t.url);
                if (a == null) {
                    return o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview(t, o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.NONE);
                }
                const i = yield o("WAWebLinkPreviewUtils").getThumbnailDetails({
                    chatWid: n?.id,
                    mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK,
                    thumbnail: a.thumbData,
                    hqThumbnailParams: a.hqThumbnail
                });
                const l = o("WAWebLinkPreviewUtils").genLinkPreview({
                    url: t.url,
                    linkDetails: {
                        title: a?.title,
                        description: a?.description,
                        richPreviewType: o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.NONE,
                        doNotPlayInline: true,
                        isLoading: false
                    },
                    linkThumbnail: i
                });
                if (i.thumbnailHQ != null) {
                    r.set(t.url, l);
                }
                return l;
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] while trying to fetch newsletter link preview ",
                    ""
                ])), error);
            }
        });
        return u.apply(this, arguments);
    }
    l.fetchPlaintextLinkPreviewAction = s;
}, 98);