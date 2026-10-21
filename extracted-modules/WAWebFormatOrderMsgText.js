__d("WAWebFormatOrderMsgText", [
    "WAWebFormatMsgTextUtils"
], function(t, n, r, o, a, i, l) {
    function e({ msg, options }) {
        return o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(msg.message || "", options);
    }
    l.default = e;
}, 98);