__d("WAWebInMemoryLottieStickerCache", [
    "WAWebABProps",
    "WAWebLruCacheMap",
    "WAWebMediaMmsV4Download",
    "WAWebStickerErrorWamEvent",
    "WAWebStickerMimeUtils",
    "WAWebStickerPremiumStatus",
    "WAWebWamEnumStickerErrorType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = 5000;
    const s = new (o("WAWebLruCacheMap")).LruCacheMap({
        sizeLimit: e
    });
    const u = new (o("WAWebLruCacheMap")).LruCacheMap({
        sizeLimit: e
    });
    function c(e, t, n) {
        return (o("WAWebABProps").getABPropConfigValue("enable_advanced_sticker_testing") || n === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM) && t === o("WAWebStickerMimeUtils").WhatsAppLottieStickerMimeType && s.has(e) && u.has(e);
    }
    function d(e) {
        const t = [
            "v",
            "ip",
            "op",
            "layers",
            "fr",
            "w",
            "h"
        ];
        return t.every((t)=>Object.prototype.hasOwnProperty.call(e, t));
    }
    const m = new (o("WAWebLruCacheMap")).LruCacheMap({
        sizeLimit: e
    });
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = s.has(e);
            const r = u.has(e) || m.has(e);
            if (!(n && r)) {
                const a = yield o("WAWebMediaMmsV4Download").extractBothLottieJSON(t, e);
                const { primary, secondary } = a;
                let c = n;
                if (primary != null && !n) {
                    try {
                        const p = JSON.parse(primary);
                        if (d(p)) {
                            s.set(e, p);
                            c = true;
                        }
                    } catch (e) {
                        new (o("WAWebStickerErrorWamEvent")).StickerErrorWamEvent({
                            stickerErrorType: o("WAWebWamEnumStickerErrorType").STICKER_ERROR_TYPE.RECEIVER_VALIDATION
                        }).commit();
                    }
                }
                if (c) {
                    if (secondary != null) {
                        try {
                            const _ = JSON.parse(secondary);
                            if (d(_)) {
                                u.set(e, _);
                            }
                        } catch (e) {}
                    } else {
                        if (primary != null) {
                            m.set(e, true);
                        }
                    }
                }
            }
        });
        return _.apply(this, arguments);
    }
    l.InMemoryLottieStickerCache = s;
    l.InMemorySecondaryLottieStickerCache = u;
    l.canShowSecondaryAnimation = c;
    l.extractAndSetBothLottieJSONInMemoryCache = p;
}, 98);