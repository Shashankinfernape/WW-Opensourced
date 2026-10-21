__d("WAWebPtvMsgDisplayClass", [
    "WAWebClassnames",
    "WAWebDisplayType"
], function(t, n, r, o, a, i, l) {
    function e({ displayType }) {
        return o("WAWebClassnames").classnamesConvertMeToStylexPlease("messageChat", "ptvMessage", o("WAWebDisplayType").isWideDisplay(displayType) ? "ptvAnnouncement" : null);
    }
    l.default = e;
}, 98);