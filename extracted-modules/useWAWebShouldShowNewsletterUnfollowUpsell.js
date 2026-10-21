__d("useWAWebShouldShowNewsletterUnfollowUpsell", [
    "WAWebCommonNewsletterEnums",
    "WAWebFrontendChatGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterWamoSubUtils",
    "react-compiler-runtime",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(3);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                o("WAWebFrontendChatGetters").getNewsletterMetadata
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        const r = o("useWAWebChatValues").useChatValues(e.id, n);
        const a = r[0];
        let i;
        if (t[1] !== a) {
            i = o("WAWebNewsletterWamoSubUtils").iHavePaidSubscription(a) && o("WAWebNewsletterGatingUtils").isWamoSubConsumerExperienceEnabled();
            t[1] = a;
            t[2] = i;
        } else {
            i = t[2];
        }
        const s = a?.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber && !i;
        return s;
    }
    l.useShouldShowNewsletterUnfollowUpsell = e;
}, 98);