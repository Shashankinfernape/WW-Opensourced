__d("WAWebGeneratePollResultSnapshotMessageProto", [
    "WAWebPollCreationUtils",
    "WAWebProtobufsE2E.pb"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ contextInfo, json, msgContext }) {
        const json_pollName = json.pollName;
        if (msgContext === "quoted") {
            return {
                pollResultSnapshotMessage: {
                    name: json_pollName,
                    pollVotes: [],
                    contextInfo
                }
            };
        }
        const pollType = o("WAWebPollCreationUtils").getPollTypeAsE2EValue(json.pollType);
        const json_pollVotesSnapshot = json.pollVotesSnapshot;
        const pollVotes = json_pollVotesSnapshot.pollVotes.map(({ option, optionVoteCount })=>({
                optionName: option.name,
                optionVoteCount: pollType === o("WAWebProtobufsE2E.pb").Message$PollType.QUIZ ? 0 : optionVoteCount
            }));
        const pollResultSnapshotMessage = {
            name: json_pollName,
            pollVotes,
            contextInfo
        };
        if (pollType === o("WAWebProtobufsE2E.pb").Message$PollType.QUIZ) {
            return {
                pollResultSnapshotMessageV3: babelHelpers.extends({}, pollResultSnapshotMessage, {
                    pollType
                })
            };
        }
        return {
            pollResultSnapshotMessage
        };
    }
    l.default = e;
}, 98);