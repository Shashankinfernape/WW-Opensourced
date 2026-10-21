__d("WAWebMuteUtils", [
    "WAWebGroupMetadataCollection",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataGetters",
    "WAWebUserPrefsMeUser",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        let t = false;
        if (o("WAWebUserPrefsMeUser").isMeAccount(e.id)) {
            return false;
        }
        if (r("WAWebWid").isGroup(e.id)) {
            const n = r("WAWebGroupMetadataCollection").get(e.id);
            if (n) {
                t = n.participants.iAmMember();
            }
        }
        if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && r("WAWebWid").isNewsletter(e.id)) {
            const a = r("WAWebNewsletterMetadataCollection").get(e.id);
            if (a != null) {
                t = o("WAWebNewsletterMetadataGetters").getCanBeMuted(a);
            }
        }
        return t || r("WAWebWid").isUser(e.id) || r("WAWebWid").isBroadcast(e.id);
    }
    l.canMute = e;
}, 98);