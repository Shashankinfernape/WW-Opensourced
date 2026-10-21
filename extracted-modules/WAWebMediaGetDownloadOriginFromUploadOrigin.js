__d("WAWebMediaGetDownloadOriginFromUploadOrigin", [
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamEnumUploadOriginType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e === o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.CHAT_PERSONAL) {
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL;
        }
        if (e === o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.CHANNEL) {
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHANNEL;
        }
        if (e === o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.COMMUNITY) {
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.COMMUNITY;
        }
        if (e === o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.UNKNOWN || e === o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.CHAT_GROUP || e === o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.STATUS_USER || e === o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.PRODUCT_CATALOG || e === o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.STICKER_WEB || e === o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.PAYMENTS_KYC || e === o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.MESSAGE_HISTORY_SYNC || e === o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.BROADCAST || e === o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.MULTI_CHAT || e === o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.INTEROP) {
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_GROUP;
        }
        if (e === o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.WA_BACKUP) {
            return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.WA_BACKUP;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    l.getDownloadOriginFromUploadOrigin = e;
}, 98);