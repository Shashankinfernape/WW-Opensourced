__d("WAWebNewsletterChatHeaderSubtitle.react", [
    "WAWebChatSubtitleText.react",
    "WAWebCommonNewsletterStrings",
    "WAWebNewsletterMetadataGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebNewsletterMetadataValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const n = o("react-compiler-runtime").c(5);
        const { location, newsletterMetadata } = e;
        const l = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(newsletterMetadata?.id, [
            o("WAWebNewsletterMetadataGetters").getSize
        ], {
            isStrong: true
        }) ?? [
            null
        ];
        const u = l[0];
        if (u == null) {
            return null;
        }
        let c;
        if (n[0] !== u) {
            c = o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(u);
            n[0] = u;
            n[1] = c;
        } else {
            c = n[1];
        }
        const d = c;
        const location_1 = location ?? "title";
        let p;
        if (n[2] !== location_1 || n[3] !== d) {
            p = s.jsx(r("WAWebChatSubtitleText.react"), {
                text: d,
                location: location_1,
                ariaLabel: d
            });
            n[2] = location_1;
            n[3] = d;
            n[4] = p;
        } else {
            p = n[4];
        }
        return p;
    }
    l.default = u;
}, 98);