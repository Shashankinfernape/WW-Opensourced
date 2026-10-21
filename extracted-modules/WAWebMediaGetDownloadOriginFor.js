__d("WAWebMediaGetDownloadOriginFor", [
    "WAWebFrontendChatGetters",
    "WAWebWamEnumDownloadOriginType"
], function(t, n, r, o, a, i, l) {
    function e({ chat, isGroupMsg, isNewsletterMsg, isProduct, isStatus }) {
        if (isProduct) {
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.PRODUCT_CATALOG;
        }
        if (isStatus) {
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.STATUS_USER;
        }
        if (isGroupMsg) {
            if (chat != null && o("WAWebFrontendChatGetters").getIsCAG(chat)) {
                return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.COMMUNITY;
            }
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_GROUP;
        }
        if (isNewsletterMsg) {
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHANNEL;
        }
        return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL;
    }
    l.default = e;
}, 98);