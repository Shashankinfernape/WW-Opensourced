__d("WAWebWidFromSignalAddress", [
    "WAJids",
    "WAWebSignalCommonUtils",
    "WAWebWid",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebSignalCommonUtils").getSignalLikeAddressName(e);
        if (r("WAWebWid").isStringLid(t) || r("WAWebWid").isHosted(t) || r("WAWebWid").isFbidBot(t)) {
            return o("WAWebWidFactory").createWid(t);
        }
        return o("WAWebWidFactory").createWid(o("WAJids").toPhoneUserJid(t));
    }
    l.widFromSignalAddress = e;
}, 98);