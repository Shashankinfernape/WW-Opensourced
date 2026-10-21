__d("WAWebVideoUtils", [
    "WAWebBotUtils",
    "WAWebFeatureDetectionSwSupport",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaOpaqueData",
    "WAWebMsgGetters",
    "WAWebPipVideoStreaming"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, { mediaBlob }) {
        const a = !!mediaBlob;
        const i = s(e);
        if ((a || !i) && mediaBlob instanceof r("WAWebMediaOpaqueData")) {
            return mediaBlob.url();
        }
        if (i) {
            return `${o("WAWebPipVideoStreaming").VIDEO_STREAM_URL}?key=${e.id.toString()}`;
        }
    }
    function s(e) {
        return u(e, r("WAWebFeatureDetectionSwSupport").getStreamingSupported());
    }
    function u(e, t) {
        const e_mediaData = e.mediaData;
        return e_mediaData != null && e_mediaData.isStreamable(t) && c(e);
    }
    function c(e) {
        const t = o("WAWebMsgGetters").getSender(e);
        const n = t != null && o("WAWebBotUtils").isAnyMetaAiBot(t);
        return !n && o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(e);
    }
    l.getVideoUrl = e;
    l.isMsgStreamable = s;
    l.isMsgStreamableWithSupport = u;
    l.canMsgStream = c;
}, 98);