__d("WAWebStickerMsgDisplayClass", [
    "WAWebFrontendMsgGetters"
], function(t, n, r, o, a, i, l) {
    function e({ msg }) {
        if (o("WAWebFrontendMsgGetters").getIsTransparentMsg(msg)) {
            return "messageTransparent";
        }
        return "messageSticker";
    }
    l.default = e;
}, 98);