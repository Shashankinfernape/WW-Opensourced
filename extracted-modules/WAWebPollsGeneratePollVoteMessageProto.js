__d("WAWebPollsGeneratePollVoteMessageProto", [
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e({ json }) {
        const pollUpdateMessage = {
            pollCreationMessageKey: o("WAWebE2EProtoUtils").encodeKey(json.pollUpdateParentKey),
            vote: json.encPollVote,
            senderTimestampMs: json.senderTimestampMs,
            metadata: json.pollUpdateMessageMetadata
        };
        return {
            pollUpdateMessage
        };
    }
    l.default = e;
}, 98);