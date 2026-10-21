__d("WAWebNewsletterFaqUrl", [
    "WAWebFaqUrl",
    "WAWebNewsletterGatingUtils"
], function(t, n, r, o, a, i, l) {
    function e() {
        if (o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled()) {
            return o("WAWebFaqUrl").getNewsletterPrivacyMultiAdminFaqUrl();
        }
        return o("WAWebFaqUrl").getNewsletterPrivacyLegacyFaqUrl();
    }
    function s() {
        return o("WAWebFaqUrl").getNewsletterQuestionResponsePrivacyBannerFAQUrl();
    }
    l.getNewsletterPrivacyFaqUrl = e;
    l.getNewsletterQuestionResponsePrivacyFaqUrl = s;
}, 98);