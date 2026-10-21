__d("useWAWebSimilarNewslettersConversationBanner", [
    "WAWebFrontendChatGetters",
    "WAWebFrontendNewsletterMetadataGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebWamEnumChannelEventSurface",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebNewsletterMetadataValues",
    "useWAWebSimilarNewsletters"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const n = o("react-compiler-runtime").c(4);
        const r = o("useWAWebSimilarNewsletters").useSimilarNewsletters(e);
        const r_hasEnoughNewsletters = r.hasEnoughNewsletters;
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebFrontendChatGetters").getNewsletterMetadata
            ];
            n[0] = i;
        } else {
            i = n[0];
        }
        const l = o("useWAWebChatValues").useChatValues(e.id, i);
        const s = l[0];
        const u = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(s?.id, [
            o("WAWebFrontendNewsletterMetadataGetters").getRecentlyFollowedFrom
        ], {
            isStrong: true
        }) ?? [
            null
        ];
        const c = u[0];
        const d = c === o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD;
        let m;
        if (n[1] !== d || n[2] !== r_hasEnoughNewsletters) {
            m = r_hasEnoughNewsletters && d && o("WAWebNewsletterGatingUtils").isSimilarNewsletterInThreadEnabled();
            n[1] = d;
            n[2] = r_hasEnoughNewsletters;
            n[3] = m;
        } else {
            m = n[3];
        }
        return m;
    }
    l.useSimilarNewslettersConversationBanner = e;
}, 98);