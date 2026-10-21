__d("WAWebFormatCiphertextMsgText", [
    "fbt",
    "WAWebAcp2PlaceholderStrings",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg }) {
        const n = o("WAWebMsgGetters").getSubtype(msg);
        switch(n){
            case "fanout":
                return s._("Waiting for this message. Check your phone.");
            case "bot_unavailable_fanout":
            case "hosted_unavailable_fanout":
                return s._("This message can't be displayed here. Please open WhatsApp on your phone to view the message.");
            case "view_once_unavailable_fanout":
                return s._("Message");
            case "acp_unavailable_fanout":
                return o("WAWebAcp2PlaceholderStrings").getAcp2PlaceholderText();
            default:
                return s._("Waiting for this message. This may take a while.");
        }
    }
    l.default = e;
}, 226);