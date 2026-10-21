__d("WAWebFormatRevokedMsgText", [
    "WAWebFormatRevokedMsg",
    "WAWebFrontendMsgGetters",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e({ msg }) {
        const n = o("WAWebFrontendMsgGetters").getAsRevoked(msg);
        return o("WAWebFormatRevokedMsg").formatRevokedMsg(r("nullthrows")(n)).toString();
    }
    l.default = e;
}, 98);