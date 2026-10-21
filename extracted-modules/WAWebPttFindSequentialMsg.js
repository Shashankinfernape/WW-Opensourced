__d("WAWebPttFindSequentialMsg", [
    "WAArrayFindNext",
    "WAWebAck",
    "WAWebFrontendMsgGetters",
    "WAWebPttIsValidPlaybackSequence"
], function(t, n, r, o, a, i, l) {
    function e(currentMsg) {
        const currentMsg_id = currentMsg.id;
        const n = r("WAArrayFindNext")(o("WAWebFrontendMsgGetters").getChat(currentMsg.unsafe()).msgs.toArray(), function(e) {
            return currentMsg_id.equals(e.id);
        });
        if (!n) {
            return null;
        }
        const nextMsg = o("WAWebFrontendMsgGetters").getAsAudio(n) || o("WAWebFrontendMsgGetters").getAsPtt(n);
        if (nextMsg && o("WAWebPttIsValidPlaybackSequence").isValidPlaybackSequence({
            currentMsg,
            nextMsg,
            playedBefore: currentMsg.ack === o("WAWebAck").ACK.PLAYED
        })) {
            return nextMsg;
        }
        return null;
    }
    function s(e, t) {
        const n = r("WAArrayFindNext")(o("WAWebFrontendMsgGetters").getChatByMsgKey(e, t).msgs.toArray(), function(t) {
            return e.equals(t.id);
        });
        if (n) {
            return o("WAWebFrontendMsgGetters").getAsPtv(n);
        }
        return null;
    }
    l.findSequentialMsg = e;
    l.findSequentialPtv = s;
}, 98);