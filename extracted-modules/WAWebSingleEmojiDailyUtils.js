__d("WAWebSingleEmojiDailyUtils", [
    "$InternalEnum",
    "WAWebDailyAggregatedStatsCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "ANIMATED_EMOJI_SEND",
        "SINGLE_EMOJI_SEND",
        "EMOJI_REPLY"
    ]);
    function s(t) {
        const n = o("WAWebFrontendMsgGetters").getIsSingleEmoji(t);
        if (n != null) {
            const r = o("WAWebFrontendMsgGetters").getIsAnimatedEmoji(t);
            u(r ? e.ANIMATED_EMOJI_SEND : e.SINGLE_EMOJI_SEND);
            if (o("WAWebMsgGetters").getQuotedMsg(t)) {
                u(e.EMOJI_REPLY);
            }
        }
    }
    function u(t) {
        const n = o("WAWebDailyAggregatedStatsCollection").DailyAggregatedStatsCollection.gaddForToday();
        switch(t){
            case e.ANIMATED_EMOJI_SEND:
                n.animatedEmojiSend++;
                break;
            case e.SINGLE_EMOJI_SEND:
                n.singleEmojiSend++;
                break;
            case e.EMOJI_REPLY:
                n.emojiReply++;
                break;
        }
    }
    l.maybeIncrementSingleEmojiDailyStatsCount = s;
}, 98);