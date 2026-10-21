__d("WAWebFormatBizContentPlaceholderMsgText", [
    "fbt",
    "WAWebBizContentPlaceholderMsgData.flow"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg }) {
        const msg_bizContentPlaceholderType = msg.bizContentPlaceholderType;
        if (msg_bizContentPlaceholderType == null) {
            return s._("Message");
        }
        switch(msg_bizContentPlaceholderType){
            case o("WAWebBizContentPlaceholderMsgData.flow").BizContentPlaceholderType.MASK_LINKED_DEVICES:
                return s._("You received a one-time passcode. For added security, you can only see it on your primary device for WhatsApp.");
        }
        return s._("This message can't be displayed here. Please open WhatsApp on your phone to view the message.");
    }
    l.default = e;
}, 226);