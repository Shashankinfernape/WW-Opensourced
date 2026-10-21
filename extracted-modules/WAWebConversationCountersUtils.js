__d("WAWebConversationCountersUtils", [], function(t, n, r, o, a, i) {
    function e({ depth, lastMessageFromMe, repeat }, lastMessageFromMe_1, n) {
        if (lastMessageFromMe == null) {
            return {
                depth,
                repeat: 0,
                lastMessageFromMe: lastMessageFromMe_1
            };
        }
        if (lastMessageFromMe_1 !== lastMessageFromMe) {
            return {
                depth: lastMessageFromMe_1 === n ? depth + 1 : depth,
                repeat: 0,
                lastMessageFromMe: lastMessageFromMe_1
            };
        }
        return {
            depth,
            repeat: repeat + 1,
            lastMessageFromMe: lastMessageFromMe_1
        };
    }
    i.nextConversationCounters = e;
}, 66);