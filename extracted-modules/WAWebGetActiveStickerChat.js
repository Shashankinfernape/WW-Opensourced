__d("WAWebGetActiveStickerChat", [
    "WAWebChatCollection",
    "WAWebNewsletterCollection"
], function(t, n, r, o, a, i, l) {
    function e() {
        return r("WAWebNewsletterCollection").getActive() ?? o("WAWebChatCollection").ChatCollection.getActive();
    }
    l.default = e;
}, 98);