__d("WAWebPollMsgDisplayClass", [
    "WAWebClassnames",
    "WAWebDisplayType"
], function(t, n, r, o, a, i, l) {
    function e({ displayType }) {
        return o("WAWebClassnames").classnamesConvertMeToStylexPlease("messageChat", o("WAWebDisplayType").isWideDisplay(displayType) ? "pollAnnouncement" : "pollMessage");
    }
    l.default = e;
}, 98);