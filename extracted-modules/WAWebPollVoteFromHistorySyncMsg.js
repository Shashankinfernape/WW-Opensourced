__d("WAWebPollVoteFromHistorySyncMsg", [
    "WAWebPollsParseWebMsgInfoPollUpdates",
    "WAWebPollsVoteDataUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebPollsParseWebMsgInfoPollUpdates").parseWebMsgInfoPollUpdates(e);
            return t.map(({ pollUpdateMessageMetadata: t, voteData: n })=>babelHelpers.extends({}, o("WAWebPollsVoteDataUtils").voteDataToPollVoteMsgData(n), {
                    pollUpdateMessageMetadata: t
                }));
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);