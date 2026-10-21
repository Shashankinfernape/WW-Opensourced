__d("WAWebFormatListMsgText", [
    "WAWebFormatMsgTextUtils"
], function(t, n, r, o, a, i, l) {
    function e({ msg, options }) {
        const i = [
            msg.list?.title,
            msg.list?.description,
            msg.footer
        ].filter(Boolean).join("\n");
        return o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(i, options);
    }
    l.default = e;
}, 98);