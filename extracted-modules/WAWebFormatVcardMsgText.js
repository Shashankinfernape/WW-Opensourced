__d("WAWebFormatVcardMsgText", [
    "fbt"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg }) {
        const msg_vcardFormattedName = msg.vcardFormattedName;
        if (msg_vcardFormattedName != null && msg_vcardFormattedName.length) {
            return msg_vcardFormattedName;
        }
        return s._("Contact");
    }
    l.default = e;
}, 226);