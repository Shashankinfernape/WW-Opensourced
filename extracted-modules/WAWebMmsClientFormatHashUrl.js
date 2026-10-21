__d("WAWebMmsClientFormatHashUrl", [
    "WABase64UrlSafe",
    "WAWebMmsMediaTypes",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = {
        audio: "/mms/audio",
        document: "/mms/document",
        gif: "/mms/gif",
        image: "/mms/image",
        ppic: "/pps/photo",
        product: "/mms/image",
        ptt: "/mms/ptt",
        sticker: "/mms/sticker",
        "thumbnail-document": "/mms/thumbnail-document",
        "thumbnail-link": "/mms/thumbnail-link",
        video: "/mms/video",
        "md-app-state": "/mms/md-app-state",
        "md-msg-hist": "/mms/md-msg-hist",
        "product-catalog-image": "/product/image",
        "biz-cover-photo": "/pps/biz-cover-photo",
        "thumbnail-image": "/mms/thumbnail-image",
        "thumbnail-video": "/mms/thumbnail-video",
        [(s = o("WAWebMmsMediaTypes")).MEDIA_TYPES.NEWSLETTER_AUDIO]: "/newsletter/newsletter-audio",
        [s.MEDIA_TYPES.NEWSLETTER_IMAGE]: "/newsletter/newsletter-image",
        [s.MEDIA_TYPES.NEWSLETTER_DOCUMENT]: "/newsletter/newsletter-document",
        [s.MEDIA_TYPES.NEWSLETTER_IMAGE]: "/newsletter/newsletter-image",
        [s.MEDIA_TYPES.NEWSLETTER_GIF]: "/newsletter/newsletter-gif",
        [s.MEDIA_TYPES.NEWSLETTER_PTT]: "/newsletter/newsletter-ptt",
        [s.MEDIA_TYPES.NEWSLETTER_PTV]: "/newsletter/newsletter-ptv",
        [s.MEDIA_TYPES.NEWSLETTER_STICKER]: "/newsletter/newsletter-sticker",
        [s.MEDIA_TYPES.NEWSLETTER_STICKER_PACK]: "/newsletter/newsletter-sticker-pack",
        [s.MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK]: "/newsletter/newsletter-thumbnail-link",
        [s.MEDIA_TYPES.NEWSLETTER_VIDEO]: "/newsletter/newsletter-video",
        [s.MEDIA_TYPES.NATIVE_AD_IMAGE]: "/mms/ads-image",
        [s.MEDIA_TYPES.NATIVE_AD_VIDEO]: "/mms/ads-video",
        [s.MEDIA_TYPES.STICKER_PACK]: "/mms/sticker-pack",
        [s.MEDIA_TYPES.THUMBNAIL_STICKER_PACK]: "/mms/thumbnail-sticker-pack",
        [s.MEDIA_TYPES.MUSIC_ARTWORK]: "/mms/music-artwork",
        [s.MEDIA_TYPES.NEWSLETTER_MUSIC_ARTWORK]: "/mms/newsletter-music-artwork",
        [s.MEDIA_TYPES.GROUP_HISTORY]: "/mms/group-history",
        [s.MEDIA_TYPES.WAFFLE_VIDEO]: "/mms/waffle-video",
        [s.MEDIA_TYPES.WAFFLE_IMAGE]: "/mms/waffle-image",
        [s.MEDIA_TYPES.MAIBA_FILE]: "/wa-ai/maiba-file"
    };
    function c({ encFilehash: t, hostname: n, query: a, type }) {
        const l = r("nullthrows")(u[type]);
        const s = new URL(`https://${n}${l}/${o("WABase64UrlSafe").urlSafeBase64(t)}`);
        const c = {};
        if (a) {
            Object.keys(a).forEach((e)=>{
                if (a[e] != null) {
                    c[e] = a[e];
                }
            });
        }
        let d = new URLSearchParams(c).toString();
        if (d) {
            d = `?${d}`;
        }
        return `https://${s.host}${s.pathname}${d}`;
    }
    l.default = c;
}, 98);