__d("WAWebMmsMediaTypes", [
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStickerMimeUtils",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = Object.freeze({
        AUDIO: "audio",
        DOCUMENT: "document",
        GIF: "gif",
        IMAGE: "image",
        NATIVE_FLOW: "native_flow",
        PPIC: "ppic",
        PRODUCT: "product",
        PTT: "ptt",
        STICKER: "sticker",
        VIDEO: "video",
        PTV: "ptv",
        TEMPLATE: "template",
        THUMBNAIL_DOCUMENT: "thumbnail-document",
        THUMBNAIL_IMAGE: "thumbnail-image",
        THUMBNAIL_VIDEO: "thumbnail-video",
        THUMBNAIL_LINK: "thumbnail-link",
        HISTORY_SYNC: "md-msg-hist",
        MD_APP_STATE: "md-app-state",
        PRODUCT_CATALOG_IMAGE: "product-catalog-image",
        PAYMENT_BG_IMAGE: "payment-bg-image",
        BIZ_COVER_PHOTO: "biz-cover-photo",
        PREVIEW: "preview",
        NEWSLETTER_MUSIC_ARTWORK: "newsletter-music-artwork",
        NEWSLETTER_AUDIO: "newsletter-audio",
        NEWSLETTER_DOCUMENT: "newsletter-document",
        NEWSLETTER_IMAGE: "newsletter-image",
        NEWSLETTER_GIF: "newsletter-gif",
        NEWSLETTER_PTT: "newsletter-ptt",
        NEWSLETTER_PTV: "newsletter-ptv",
        NEWSLETTER_STICKER: "newsletter-sticker",
        NEWSLETTER_THUMBNAIL_LINK: "newsletter-thumbnail-link",
        NEWSLETTER_VIDEO: "newsletter-video",
        NATIVE_AD_IMAGE: "ads-image",
        NATIVE_AD_VIDEO: "ads-video",
        STICKER_PACK: "sticker-pack",
        THUMBNAIL_STICKER_PACK: "thumbnail-sticker-pack",
        MUSIC_ARTWORK: "music-artwork",
        GROUP_HISTORY: "group-history",
        NEWSLETTER_STICKER_PACK: "newsletter-sticker-pack",
        WAFFLE_IMAGE: "waffle-image",
        WAFFLE_VIDEO: "waffle-video",
        MAIBA_FILE: "maiba-file"
    });
    const s = Object.values(e);
    function u(t) {
        let n;
        if (t == null) {
            n = e.DOCUMENT;
        } else if (t in e) {
            n = e[t];
        } else {
            throw r("err")(`castToV4: unexpected mmsv3 type ${t}`);
        }
        return n;
    }
    function c({ interactiveHeader, isAdsMedia, isGif, isNewsletter, type }) {
        switch(type){
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
                if (isNewsletter) {
                    return e.NEWSLETTER_IMAGE;
                }
                if (isAdsMedia === true) {
                    return e.NATIVE_AD_IMAGE;
                }
                return e.IMAGE;
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
                if (isNewsletter) {
                    if (isGif === true) {
                        return e.NEWSLETTER_GIF;
                    }
                    return e.NEWSLETTER_VIDEO;
                }
                if (isAdsMedia === true) {
                    return e.NATIVE_AD_VIDEO;
                }
                if (isGif === true) {
                    return e.GIF;
                }
                return e.VIDEO;
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
                if (isNewsletter) {
                    return e.NEWSLETTER_AUDIO;
                }
                return e.AUDIO;
            case o("WAWebMsgType").MSG_TYPE.PTT:
                if (isNewsletter) {
                    return e.NEWSLETTER_PTT;
                }
                return e.PTT;
            case o("WAWebMsgType").MSG_TYPE.PTV:
                if (isNewsletter) {
                    return e.NEWSLETTER_PTV;
                }
                return e.PTV;
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                return e.DOCUMENT;
            case o("WAWebMsgType").MSG_TYPE.STICKER_PACK:
                if (isNewsletter) {
                    return e.NEWSLETTER_STICKER_PACK;
                }
                return e.STICKER_PACK;
            case o("WAWebMsgType").MSG_TYPE.STICKER:
                if (isNewsletter) {
                    return e.NEWSLETTER_STICKER;
                }
                return e.STICKER;
            case o("WAWebMsgType").MSG_TYPE.PRODUCT:
                return e.PRODUCT;
            case o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW:
                return e.NATIVE_FLOW;
            case o("WAWebMsgType").MSG_TYPE.INTERACTIVE:
                {
                    if (interactiveHeader?.mediaType != null) {
                        if (interactiveHeader.mediaType === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.DOCUMENT) {
                            return e.DOCUMENT;
                        }
                        if (interactiveHeader.mediaType === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.VIDEO) {
                            return e.VIDEO;
                        }
                        if (interactiveHeader.mediaType === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.IMAGE) {
                            return e.IMAGE;
                        }
                        if (interactiveHeader.mediaType === o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.PRODUCT) {
                            return e.PRODUCT;
                        }
                        return (()=>{
                            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${interactiveHeader.mediaType}`);
                        })();
                    }
                    break;
                }
            case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
                return e.GROUP_HISTORY;
        }
        throw r("err")(`msg is not a media msg: ${type}, isGif=${String(isGif)}`);
    }
    function d(e) {
        return c({
            type: e.type,
            interactiveHeader: e.interactiveHeader,
            isGif: e.type === o("WAWebMsgType").MSG_TYPE.VIDEO ? e.isGif : false,
            isNewsletter: o("WAWebMsgGetters").getIsNewsletterMsg(e),
            isAdsMedia: e.isAdsMedia
        });
    }
    function m(t) {
        if (t === e.IMAGE || t === e.PPIC || t === e.PRODUCT || t === e.PRODUCT_CATALOG_IMAGE || t === e.PAYMENT_BG_IMAGE || t === e.BIZ_COVER_PHOTO || t === e.NATIVE_AD_IMAGE || t === e.NEWSLETTER_IMAGE || t === e.MUSIC_ARTWORK || t === e.NEWSLETTER_MUSIC_ARTWORK) {
            return "image";
        }
        if (t === e.VIDEO || t === e.PTV || t === e.NATIVE_AD_VIDEO || t === e.NEWSLETTER_VIDEO || t === e.NEWSLETTER_PTV) {
            return "video";
        }
        if (t === e.GIF || t === e.NEWSLETTER_GIF) {
            return "gif";
        }
        if (t === e.PTT || t === e.NEWSLETTER_PTT) {
            return "audio";
        }
        if (t === e.STICKER_PACK || t === e.NEWSLETTER_STICKER_PACK) {
            return "sticker-pack";
        }
        return "document";
    }
    function p(t) {
        if (t === e.IMAGE || t === e.NEWSLETTER_IMAGE || t === e.NATIVE_AD_IMAGE) {
            return o("WAWebMsgType").MSG_TYPE.IMAGE;
        }
        if (t === e.STICKER || t === e.NEWSLETTER_STICKER) {
            return o("WAWebMsgType").MSG_TYPE.STICKER;
        }
        if (t === e.VIDEO || t === e.NEWSLETTER_VIDEO || t === e.NATIVE_AD_VIDEO || t === e.GIF || t === e.NEWSLETTER_GIF) {
            return o("WAWebMsgType").MSG_TYPE.VIDEO;
        }
        if (t === e.AUDIO || t === e.NEWSLETTER_AUDIO) {
            return o("WAWebMsgType").MSG_TYPE.AUDIO;
        }
        if (t === e.PTT || t === e.NEWSLETTER_PTT) {
            return o("WAWebMsgType").MSG_TYPE.PTT;
        }
        if (t === e.PTV || t === e.NEWSLETTER_PTV) {
            return o("WAWebMsgType").MSG_TYPE.PTV;
        }
        return null;
    }
    const _ = "audio/ogg; codecs=opus";
    const f = "audio/mp4";
    const g = "audio/mpeg";
    const h = "audio/aac";
    const y = "audio/amr";
    const C = "image/jpeg";
    const b = "image/png";
    const v = "image/webp";
    const S = "video/mp4";
    const R = "video/3gpp";
    function L(e) {
        let n;
        const r = {
            [(n = o("WAWebMsgType")).MSG_TYPE.IMAGE]: new Set([
                C,
                b,
                v
            ]),
            [n.MSG_TYPE.STICKER]: o("WAWebStickerMimeUtils").getValidStickerMimeTypes(),
            [n.MSG_TYPE.VIDEO]: new Set([
                S,
                R
            ]),
            [n.MSG_TYPE.AUDIO]: new Set([
                _,
                f,
                g,
                h,
                y
            ]),
            [n.MSG_TYPE.PTT]: new Set([
                _,
                f,
                g,
                h,
                y
            ]),
            [n.MSG_TYPE.PTV]: new Set([
                S,
                R
            ])
        };
        if (e != null) {
            return r[e];
        }
        return null;
    }
    l.MEDIA_TYPES = e;
    l.MEDIA_TYPE_VALUES = s;
    l.castToV4 = u;
    l.msgToMediaType = c;
    l.getMsgMediaType = d;
    l.mediaTypeToKaleidoscopeMediaType = m;
    l.mediaTypeToMsgTypeSupportedByAllowlist = p;
    l.getValidMimeTypes = L;
}, 98);