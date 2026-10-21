__d("WAWebMetaAIBannerSessionTracker", [
    "WAWebSessionStorage"
], function(t, n, r, o, a, i, l) {
    const e = "wa_web_meta_ai_banner_session";
    function s(t) {
        try {
            if (r("WAWebSessionStorage") != null) {
                const n = r("WAWebSessionStorage").getItem(e);
                let o = {
                    dismissedBanners: []
                };
                if (n != null && n !== "") {
                    o = JSON.parse(n);
                }
                if (!o.dismissedBanners.includes(t)) {
                    o.dismissedBanners.push(t);
                    r("WAWebSessionStorage").setItem(e, JSON.stringify(o));
                }
            }
        } catch (e) {}
    }
    const u = {
        META_AI_CTA_BANNER: "MetaAICTABanner"
    };
    l.markMetaAIBannerDismissed = s;
    l.MetaAIBannerTypes = u;
}, 98);