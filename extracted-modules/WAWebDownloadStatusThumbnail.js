__d("WAWebDownloadStatusThumbnail", [
    "WAWebDownloadProgressiveJpegThumbnail",
    "WAWebDownloadVideoThumbnail",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    const e = 1;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isPreload, msg, signal }) {
            const { encFilehash, thumbnailDirectPath, thumbnailEncSha256, thumbnailSha256 } = msg;
            const scanCount = e;
            if (msg.type === o("WAWebMsgType").MSG_TYPE.IMAGE && msg.scanLengths && msg.scansSidecar && (encFilehash || !o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(msg.unsafe()))) {
                yield o("WAWebDownloadProgressiveJpegThumbnail").downloadProgressiveJpegThumbnail({
                    msg,
                    signal,
                    isPreload,
                    scanCount
                });
                return;
            } else if (msg.type === o("WAWebMsgType").MSG_TYPE.VIDEO && msg.isGif !== true && !o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(msg.unsafe())) {
                yield o("WAWebDownloadVideoThumbnail").downloadVideoThumbnail({
                    msg
                });
                return;
            }
            if (!r("isStringNullOrEmpty")(thumbnailSha256) && !r("isStringNullOrEmpty")(thumbnailDirectPath) && (!r("isStringNullOrEmpty")(thumbnailEncSha256) || o("WAWebMsgGetters").getIsNewsletterMsg(msg.unsafe()) && !o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(msg.unsafe()))) {
                yield r("WAWebMediaDownloadMmsThumbnail")({
                    msg,
                    signal,
                    isPreload,
                    chat: null
                });
                return;
            }
        });
        return u.apply(this, arguments);
    }
    l.downloadStatusThumbnail = s;
}, 98);