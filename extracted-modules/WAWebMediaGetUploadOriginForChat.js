__d("WAWebMediaGetUploadOriginForChat", [
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebStateUtils",
    "WAWebWamEnumUploadOriginType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (!e) {
            return o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.UNKNOWN;
        }
        const t = o("WAWebStateUtils").unproxy(e);
        if (o("WAWebChatGetters").getIsNewsletter(t)) {
            return o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.CHANNEL;
        }
        if (o("WAWebChatGetters").getIsGroup(t)) {
            if (o("WAWebFrontendChatGetters").getIsCAG(t)) {
                return o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.COMMUNITY;
            }
            return o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.CHAT_GROUP;
        }
        return o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.CHAT_PERSONAL;
    }
    l.default = e;
}, 98);