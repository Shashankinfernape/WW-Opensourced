__d("WAWebMediaGatingUtils", [
    "WAWebABProps",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebHatchGating",
    "WAWebMediaAutoDownloadQuality.flow",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebServerPropConstants",
    "WAWebStateUtils",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        if (o("WAWebBotUtils").isHatchBot(t)) {
            return o("WAWebHatchGating").getHatchMediaUploadCountLimit();
        }
        const r = o("WAWebBotUtils").isBusinessAssistantBot(t);
        if (o("WAWebBotUtils").isMetaAiBot(t) || r) {
            const a = f(n);
            if (a != null) {
                return a;
            }
            if (r) {
                return o("WAWebBotGating").getMetaAiImageSendLimit();
            }
        }
        if (t.isNewsletter() && !o("WAWebNewsletterGatingUtils").isNewsletterMediaAlbumUploadEnabled() && !o("WAWebNewsletterGatingUtils").isNewsletterAlbumsV2SenderEnabled()) {
            return 1;
        }
        const i = o("WAWebABProps").getABPropConfigValue("media_picker_select_limit");
        if (e <= i) {
            return i;
        }
        return o("WAWebABProps").getABPropConfigValue("media_picker_select_limit_new");
    }
    function s(e) {
        return o("WAWebBotUtils").isMetaAiBot(e) || o("WAWebBotUtils").isHatchBot(e);
    }
    function u(e, t) {
        if (o("WAWebBotUtils").isHatchBot(e)) {
            return o("WAWebHatchGating").getHatchMediaUploadCountLimit() > 1;
        }
        if (o("WAWebBotUtils").isMetaAiBot(e) || o("WAWebBotUtils").isBusinessAssistantBot(e)) {
            return g(t);
        }
        if (e.isNewsletter()) {
            if (t === "document") {
                return true;
            }
            return o("WAWebNewsletterGatingUtils").isNewsletterMediaAlbumUploadEnabled() || o("WAWebNewsletterGatingUtils").isNewsletterAlbumsV2SenderEnabled();
        }
        return true;
    }
    function c() {
        return o("WAWebABProps").getABPropConfigValue("album_v2_sender_enabled");
    }
    function d() {
        return o("WAWebABProps").getABPropConfigValue("web_sticky_hd_photo_setting_enabled");
    }
    function m(e) {
        return e * 1024 * 1024;
    }
    function p(e, t, n) {
        if (t === o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_PHOTO_LIBRARY) {
            return m(o("WAWebABProps").getABPropConfigValue("default_status_media_limit_mb"));
        }
        if (e === "audio") {
            return m(o("WAWebABProps").getABPropConfigValue("default_audio_limit_mb"));
        }
        if (e === "document" || e === "sticker-pack") {
            if (n === true) {
                return o("WAWebServerPropConstants").VCARD_MAX_SIZE_KB * 1024;
            }
            return o("WAWebServerPropConstants").MAX_FILE_SIZE_BYTES;
        }
        if (e === "video") {
            return m(o("WAWebABProps").getABPropConfigValue("default_video_limit_mb"));
        }
        if (e === "image" || e === "sticker") {
            return m(o("WAWebABProps").getABPropConfigValue("default_media_limit_mb"));
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function _(e) {
        if (o("WAWebChatGetters").getIsNewsletter(o("WAWebStateUtils").unproxy(e))) {
            const t = new Set([
                o("WAWebMsgType").MSG_TYPE.IMAGE,
                o("WAWebMsgType").MSG_TYPE.VIDEO,
                o("WAWebMsgType").MSG_TYPE.STICKER
            ]);
            if (o("WAWebNewsletterGatingUtils").isNewsletterAudioFileSendingEnabled()) {
                t.add(o("WAWebMsgType").MSG_TYPE.AUDIO);
            }
            return t;
        }
        if (o("WAWebChatGetters").getIsBroadcast(o("WAWebStateUtils").unproxy(e))) {
            return new Set([
                o("WAWebMsgType").MSG_TYPE.IMAGE,
                o("WAWebMsgType").MSG_TYPE.VIDEO
            ]);
        }
        if (o("WAWebBotUtils").isBusinessAssistantBot(e.id)) {
            const n = new Set;
            if (o("WAWebBotGating").isBusinessAssistantImageInputEnabled()) {
                n.add(o("WAWebMsgType").MSG_TYPE.IMAGE);
            }
            return n;
        }
        if (o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(e))) {
            return h();
        }
        if (o("WAWebChatGetters").getIsBotChannel(o("WAWebStateUtils").unproxy(e))) {
            const r = new Set([
                o("WAWebMsgType").MSG_TYPE.DOCUMENT,
                o("WAWebMsgType").MSG_TYPE.IMAGE
            ]);
            if (!o("WAWebBotUtils").isHatchBot(e.id) || o("WAWebHatchGating").isHatchVideoUploadEnabled()) {
                r.add(o("WAWebMsgType").MSG_TYPE.VIDEO);
            }
            r.add(o("WAWebMsgType").MSG_TYPE.VCARD);
            r.add(o("WAWebMsgType").MSG_TYPE.MULTI_VCARD);
            return r;
        }
        return o("WAWebMsgType").ALL_MSG_TYPES_SET;
    }
    function f(e) {
        switch(e){
            case "document":
                return o("WAWebBotGating").getMetaAiFileUploadCountLimit();
            case "image":
                return o("WAWebBotGating").getMetaAiImageSendLimit();
            case "video":
                return 1;
            default:
                return null;
        }
    }
    function g(e) {
        const t = f(e);
        return t != null && t > 1;
    }
    function h() {
        const e = new Set;
        if (o("WAWebBotGating").isMetaAiImageInputEnabled()) {
            e.add(o("WAWebMsgType").MSG_TYPE.IMAGE);
        }
        if (o("WAWebBotGating").isMetaAiVideoInputEnabled()) {
            e.add(o("WAWebMsgType").MSG_TYPE.VIDEO);
        }
        if (o("WAWebBotGating").isMetaAiDocUploadEnabled()) {
            e.add(o("WAWebMsgType").MSG_TYPE.DOCUMENT);
        }
        return e;
    }
    function y() {
        return typeof self.BigInt === "function";
    }
    function C(e) {
        const t = e.type.startsWith("video/");
        return t && y();
    }
    function b(e) {
        const t = o("WAWebMmsMediaTypes").msgToMediaType({
            type: e.type,
            isGif: e.isGif,
            interactiveHeader: e.interactiveHeader,
            isNewsletter: r("WAWebWid").isNewsletter(e.to)
        });
        return v(t);
    }
    function v(e) {
        switch(e){
            case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE:
            case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_VIDEO:
                return true;
            default:
                return false;
        }
    }
    function S() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_show_hd_photo");
    }
    function R() {
        return S() && o("WAWebABProps").getABPropConfigValue("wa_web_send_hd_photo");
    }
    function L() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_show_hd_video");
    }
    function E() {
        return o("WAWebABProps").getABPropConfigValue("media_quality_auto_download_settings_enabled") && L();
    }
    function k() {
        const e = o("WAWebUserPrefsGeneral").resolveAutoDownloadMediaQuality();
        if (e === o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality.AUTO && !E()) {
            return o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality.STANDARD;
        }
        return e;
    }
    function I() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_hq_image_thumbnail_in_chat_scans");
    }
    l.getMaxNumberSelectableMedia = e;
    l.hasBotMediaSelectionLimit = s;
    l.supportsMultipleUploads = u;
    l.isAlbumV2SenderEnabled = c;
    l.isStickyHQPhotoSettingEnabled = d;
    l.getUploadLimit = p;
    l.getSupportedMediaTypesForChat = _;
    l.getMetaAiMaxNumberSelectableMedia = f;
    l.metaAiSupportsMultipleUploads = g;
    l.getSupportedMediaTypesForMetaAiChat = h;
    l.shouldUseWasmMediaWorkerForFile = C;
    l.isThumbnailGenerationForMsgOnServerEnabled = b;
    l.isThumbnailGenerationOnServerEnabledForMediaType = v;
    l.isHdImageDualUploadConsumptionEnabled = S;
    l.isHdImageDualUploadSendEnabled = R;
    l.isHdVideoDualUploadConsumptionEnabled = L;
    l.isMediaAutoDownloadQualityAutoEnabled = E;
    l.resolveEffectiveAutoDownloadMediaQuality = k;
    l.getHQImageThumbnailInChatScans = I;
}, 98);