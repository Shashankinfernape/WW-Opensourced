__d("WAWebNewsletterReactionUtils", [
    "WATimeUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return {
            serverTimestamp: e.reactionCountMapTs ?? o("WATimeUtils").unixTime(),
            emojiCountMap: e.reactionCountMap ?? new Map,
            parentMsgKey: e.id.toString()
        };
    }
    function s({ emojiCountMap, parentMsgKey, serverTimestamp }) {
        if (!(serverTimestamp == null || emojiCountMap == null)) {
            return {
                serverTimestamp,
                emojiCountMap,
                parentMsgKey: parentMsgKey.toString()
            };
        }
    }
    l.mapFrontendReactionToBackend = e;
    l.mapReactionDataToDbRecord = s;
}, 98);