__d("WAWebReactionsGenerateReactionMessageProto", [
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        return {
            reactionMessage: {
                key: o("WAWebE2EProtoUtils").encodeKey(json.reactionParentKey),
                text: json.reactionText,
                senderTimestampMs: json.reactionTimestamp
            }
        };
    }
    l.default = e;
}, 98);