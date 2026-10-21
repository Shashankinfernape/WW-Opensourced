__d("WAWebShowForwardedNewsletterMessageIndicator", [
    "WAWebNewsletterGatingUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Set([
        "sticker",
        "revoked"
    ]);
    const s = new Set([
        "revoked"
    ]);
    function u(t, n, r) {
        const a = t != null && o("WAWebNewsletterGatingUtils").isStickerForwardedAttributionEnabled() ? s : e;
        return t != null && t.newsletterId != null && !a.has(n) && r();
    }
    l.showForwardedNewsletterMessageIndicator = u;
}, 98);