__d("useWAWebSimilarNewsletters", [
    "WAWebFrontendChatGetters",
    "WAWebFrontendNewsletterMetadataGetters",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "compactMap",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebNewsletterMetadataValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const n = o("react-compiler-runtime").c(8);
        let a;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebFrontendChatGetters").getNewsletterMetadata
            ];
            n[0] = a;
        } else {
            a = n[0];
        }
        const i = o("useWAWebChatValues").useChatValues(e.id, a);
        const l = i[0];
        const c = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(l?.id, [
            o("WAWebFrontendNewsletterMetadataGetters").getSimilarNewsletters
        ], {
            isStrong: true
        }) ?? [
            []
        ];
        const d = c[0];
        let similarNewsletters;
        let p;
        if (n[1] !== d) {
            similarNewsletters = r("compactMap")(d, u);
            p = similarNewsletters.filter(s);
            n[1] = d;
            n[2] = similarNewsletters;
            n[3] = p;
        } else {
            similarNewsletters = n[2];
            p = n[3];
        }
        const similarNewslettersToDisplay = p;
        const hasEnoughNewsletters = similarNewslettersToDisplay.length >= o("WAWebNewsletterGatingUtils").getSimilarNewslettersMinDisplayLimit();
        let g;
        if (n[4] !== similarNewsletters || n[5] !== similarNewslettersToDisplay || n[6] !== hasEnoughNewsletters) {
            g = {
                similarNewsletters,
                similarNewslettersToDisplay,
                hasEnoughNewsletters
            };
            n[4] = similarNewsletters;
            n[5] = similarNewslettersToDisplay;
            n[6] = hasEnoughNewsletters;
            n[7] = g;
        } else {
            g = n[7];
        }
        return g;
    }
    function s({ newsletterMetadata }) {
        return newsletterMetadata?.iAmGuest() ?? false;
    }
    function u(e) {
        return r("WAWebNewsletterCollection").get(e);
    }
    l.useSimilarNewsletters = e;
}, 98);