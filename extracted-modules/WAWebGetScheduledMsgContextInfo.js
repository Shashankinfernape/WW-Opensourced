__d("WAWebGetScheduledMsgContextInfo", [], function(t, n, r, o, a, i) {
    function e(e) {
        return e.extendedTextMessage?.contextInfo ?? e.imageMessage?.contextInfo ?? e.videoMessage?.contextInfo;
    }
    i.getScheduledMsgContextInfo = e;
}, 66);