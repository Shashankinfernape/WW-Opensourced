__d("useWAWebNewsletterNotificationSettingsBanner", [
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebNux",
    "react-compiler-runtime",
    "useWAWebNewsletterMetadataValues",
    "useWAWebNux"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        let t;
        const a = o("react-compiler-runtime").c(6);
        (t = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(e.newsletterMetadata?.id, [
            o("WAWebNewsletterMetadataGetters").getMembershipType
        ], {
            isStrong: true
        })) != null;
        const i = r("useWAWebNux")(o("WAWebNux").NUX.NEWSLETTER_ADMIN_NOTIFICATION_SETTINGS_BANNER);
        const l = i[0];
        const s = i[2];
        let u;
        if (a[0] !== e.newsletterMetadata || a[1] !== l) {
            u = (e.newsletterMetadata?.iAmAdminOrOwner() ?? false) && l && o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminNotificationsEnabled(e.newsletterMetadata);
            a[0] = e.newsletterMetadata;
            a[1] = l;
            a[2] = u;
        } else {
            u = a[2];
        }
        let m;
        if (a[3] !== s || a[4] !== u) {
            m = [
                u,
                s
            ];
            a[3] = s;
            a[4] = u;
            a[5] = m;
        } else {
            m = a[5];
        }
        return m;
    }
    l.useNewsletterNotificationSettingsBanner = e;
}, 98);