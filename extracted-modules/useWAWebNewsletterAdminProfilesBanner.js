__d("useWAWebNewsletterAdminProfilesBanner", [
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
            o("WAWebNewsletterMetadataGetters").getMembershipType,
            o("WAWebNewsletterMetadataGetters").getCapabilities
        ], {
            isStrong: true
        })) != null;
        const i = r("useWAWebNux")(o("WAWebNux").NUX.NEWSLETTER_ADMIN_PROFILES_BANNER);
        const l = i[0];
        const s = i[2];
        let u;
        if (a[0] !== e.newsletterMetadata || a[1] !== l) {
            u = l && o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminProfilesUpsellBannerEnabled(e.newsletterMetadata);
            a[0] = e.newsletterMetadata;
            a[1] = l;
            a[2] = u;
        } else {
            u = a[2];
        }
        let c;
        if (a[3] !== s || a[4] !== u) {
            c = [
                u,
                s
            ];
            a[3] = s;
            a[4] = u;
            a[5] = c;
        } else {
            c = a[5];
        }
        return c;
    }
    l.useNewsletterAdminProfilesBanner = e;
}, 98);