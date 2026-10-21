__d("WAWebGetThumbnailTypeForMediaImageMsg", [
    "WAWebMmsMediaTypes"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebMmsMediaTypes").getMsgMediaType(e.msg);
        if (t === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE) {
            return o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE;
        }
        return o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_IMAGE;
    }
    l.default = e;
}, 98);