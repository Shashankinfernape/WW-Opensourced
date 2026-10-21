__d("WAWebPollVoteAddonTCValidation", [
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebApplyPollVoteTCValidation",
    "WAWebPollsVoteDataUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!e.some((e)=>e.pollUpdateMessageMetadata != null)) {
                return e;
            }
            const n = yield u(e, t);
            return o("WAWebApplyPollVoteTCValidation").applyPollVoteTCValidation(e.map((e)=>{
                const r = d(n, e);
                const a = o("WAWebPollsVoteDataUtils").pollVoteMsgDataToVoteData(e);
                return {
                    vote: e,
                    parentMsg: r ?? {},
                    voteMetadata: e.pollUpdateMessageMetadata,
                    parentMsgKey: r?.id ?? a.parentMsgKey,
                    voteMsgKey: a.msgKey,
                    sender: a.sender,
                    senderTimestampMs: a.senderTimestampMs,
                    selectedOptionLocalIds: a.selectedOptionLocalIds
                };
            }), t.processMode === o("WAWebAddonConstants").AddonProcessMode.HistorySync ? "history-sync-vote" : "live-vote");
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { parents: n, processMode: r }) {
            if (r !== o("WAWebAddonConstants").AddonProcessMode.HistorySync) {
                return n;
            }
            const a = yield o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(e, r);
            const i = a[0];
            return o("WAWebAddonSelectUtils").createAddonParentSelector(i);
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        try {
            return e.getForAddon(t);
        } catch (e) {
            if (e instanceof o("WAWebAddonInfraError").AddonInfraError) {
                return null;
            }
            throw e;
        }
    }
    l.validateAddonPollVotes = e;
    l.getPollVoteParentsForProcessMode = u;
}, 98);