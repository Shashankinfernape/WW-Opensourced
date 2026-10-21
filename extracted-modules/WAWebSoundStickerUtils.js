__d("WAWebSoundStickerUtils", [
    "WABase64",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebSoundStickerGating",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = 32;
    function s(e) {
        return e != null && e.type === o("WAWebMsgType").MSG_TYPE.STICKER && e.stickerAudio != null;
    }
    function u(e) {
        return e != null && o("WAWebMmsMediaTypes").getValidMimeTypes(o("WAWebMsgType").MSG_TYPE.PTT)?.has(e) === true;
    }
    function c(e) {
        return !s(e) || o("WAWebSoundStickerGating").isSoundStickerCreationEnabled();
    }
    function d(e, t) {
        if (!(e == null || !p(t) || !_(e) || !o("WAWebSoundStickerGating").isSoundStickerCreationEnabled())) {
            return e;
        }
    }
    function m(e, t) {
        return d(e, t) != null;
    }
    function p(e) {
        return e != null && !r("WAWebWid").isNewsletter(e) && !r("WAWebWid").isStatus(e) && !e.isBot() && !e.isHosted();
    }
    function _({ deprecatedMms3Url, directPath, mediaKey, mimetype, size }) {
        return mediaKey != null && o("WABase64").decodeB64(mediaKey).byteLength === e && (directPath != null || deprecatedMms3Url != null) && size > 0 && u(mimetype);
    }
    function f(e) {
        const t = e?.stickerAudio;
        if (t?.filehash == null) {
            return false;
        }
        return (e == null ? undefined : e.id.remote.isNewsletter()) === true || t.mediaKey != null && t.encFilehash != null;
    }
    l.isSoundStickerMsg = s;
    l.isSoundStickerAudioMimetype = u;
    l.canFavoriteStickerMsg = c;
    l.getSendableStickerAudio = d;
    l.canSendStickerAudio = m;
    l.isCompleteStickerAudio = _;
    l.isSoundStickerPlayable = f;
}, 98);