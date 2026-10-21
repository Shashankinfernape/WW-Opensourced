__d("WAWebFormatListResponseMsgText", [
    "WAWebFormatMsgTextUtils"
], function(t, n, r, o, a, i, l) {
    function e({ msg, options }) {
        const i = `${msg.listResponse?.title || ""} ${msg.listResponse?.description || ""}`;
        return o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(i, options);
    }
    l.default = e;
}, 98);