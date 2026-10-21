__d("WAWebDomSanitize", [
    "dompurify"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return r("dompurify").sanitize(e, {
            ALLOWED_TAGS: [
                "b",
                "i",
                "a",
                "#text"
            ],
            ALLOWED_ATTR: [
                "href",
                "target",
                "class"
            ],
            KEEP_CONTENT: false
        });
    }
    function s(e) {
        return r("dompurify").sanitize(e, {
            ALLOWED_TAGS: [
                "b",
                "i",
                "#text"
            ],
            KEEP_CONTENT: false
        });
    }
    function u(e) {
        return r("dompurify").sanitize(e, {
            ALLOWED_TAGS: [],
            KEEP_CONTENT: false
        }) !== e;
    }
    function c(e) {
        const USE_PROFILES = {
            svg: true,
            svgFilters: true
        };
        return r("dompurify").sanitize(e, {
            USE_PROFILES
        });
    }
    l.sanitizeNoticeText = e;
    l.sanitizeQuickPromotionText = s;
    l.doesQuickPromotionTextHaveTags = u;
    l.sanitizeNoticeSVG = c;
}, 98);