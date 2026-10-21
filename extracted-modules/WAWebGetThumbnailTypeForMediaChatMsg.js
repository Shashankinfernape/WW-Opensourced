__d("WAWebGetThumbnailTypeForMediaChatMsg", [
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l) {
    function e({ msg }) {
        const n = o("WAWebMsgGetters").getIsNewsletterMsg(msg.unsafe());
        if (n) {
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK;
        }
        return o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK;
    }
    l.default = e;
}, 98);