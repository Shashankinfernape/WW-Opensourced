__d("WAWebOutgoingMessageTone", [
    "WAWebNoop",
    "WAWebUserPrefsNotifications",
    "bx"
], function(t, n, r, o, a, i, l) {
    const e = new window.Audio(r("bx").getURL(r("bx")("9562")));
    function s() {
        if (o("WAWebUserPrefsNotifications").getOutgoingMessageSound()) {
            e.play().catch(r("WAWebNoop"));
        }
    }
    l.playOutgoingMessageTone = s;
}, 98);