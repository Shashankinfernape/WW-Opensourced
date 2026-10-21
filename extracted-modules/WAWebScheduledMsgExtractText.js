__d("WAWebScheduledMsgExtractText", [], function(t, n, r, o, a, i) {
    function e(e) {
        if (typeof e.conversation === "string") {
            return e.conversation;
        }
        const n = e.extendedTextMessage?.text;
        if (typeof n === "string") {
            return n;
        }
        return null;
    }
    i.extractScheduledMsgText = e;
}, 66);