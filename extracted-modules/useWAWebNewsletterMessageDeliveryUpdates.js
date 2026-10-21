__d("useWAWebNewsletterMessageDeliveryUpdates", [
    "WAWebFrontendChatGetters",
    "WAWebNewsletterMetadataGetters",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebNewsletterMetadataValues"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        let t;
        const n = o("react-compiler-runtime").c(4);
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
        (t = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(l?.id, [
            o("WAWebNewsletterMetadataGetters").getMembershipType
        ], {
            isStrong: true
        })) != null;
        const s = l?.messageDeliveryUpdates;
        let u;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                "add",
                "remove",
                "reset",
                "change"
            ];
            n[1] = u;
        } else {
            u = n[1];
        }
        let c;
        if (n[2] !== s) {
            c = function() {
                return s?.toArray();
            };
            n[2] = s;
            n[3] = c;
        } else {
            c = n[3];
        }
        const d = r("useWAWebEventTargetValue")(s, u, c);
        return d;
    }
    l.useNewsletterMessageDeliveryUpdates = e;
}, 98);