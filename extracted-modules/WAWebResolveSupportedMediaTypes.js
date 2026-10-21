__d("WAWebResolveSupportedMediaTypes", [
    "WAWebBot3pMediaGating",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebMediaGatingUtils",
    "WAWebResolveBotProfile"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s(e) ?? o("WAWebMediaGatingUtils").getSupportedMediaTypesForChat(e);
    }
    function s(e) {
        const t = c(e);
        if (t == null) {
            return null;
        }
        return o("WAWebBot3pMediaGating").getBot3pSupportedMediaTypes(t);
    }
    function u(e) {
        const t = s(e);
        return t != null && t.size > 0;
    }
    function c(e) {
        return o("WAWebBot3pMediaGating").getBot3pMediaSupportMode(o("WAWebResolveBotProfile").resolveBotSupportInput(e.id), o("WAWebBotPrimaryFeaturesFrontend").getBotPrimaryFeatures());
    }
    function d(e, t, n) {
        return o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(e, t, n);
    }
    function m(e, t) {
        return o("WAWebMediaGatingUtils").supportsMultipleUploads(e, t);
    }
    l.resolveSupportedMediaTypesForChat = e;
    l.resolveBot3pSupportedMediaTypes = s;
    l.isBot3pMediaInputEnabled = u;
    l.resolveBot3pMediaMode = c;
    l.resolveMaxNumberSelectableMedia = d;
    l.resolveSupportsMultipleUploads = m;
}, 98);