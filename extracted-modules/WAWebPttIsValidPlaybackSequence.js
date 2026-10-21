__d("WAWebPttIsValidPlaybackSequence", [
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l) {
    function e({ currentMsg, nextMsg, playedBefore }) {
        if (o("WAWebFrontendMsgGetters").getAsPttLike(nextMsg.unsafe()) == null) {
            return false;
        }
        if (!o("WAWebMsgGetters").getIsSentByMe(nextMsg.unsafe()) || o("WAWebMsgGetters").getIsSentByMe(currentMsg.unsafe())) {
            return true;
        }
        return !!playedBefore;
    }
    l.isValidPlaybackSequence = e;
}, 98);