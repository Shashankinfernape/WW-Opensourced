__d("WAWebPollsRestoreLastSuccessfulVote", [
    "WALogger",
    "WAWebAck",
    "WAWebDBPollsUpsertVotes",
    "WAWebPollsPollVoteCollection",
    "WAWebPollsVotesSchema",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const t_lastSuccessfulSelectedOptionLocalIds = t.lastSuccessfulSelectedOptionLocalIds;
            if (t_lastSuccessfulSelectedOptionLocalIds == null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[Polls] no cached vote, removing failed vote"
                ])));
                const r = o("WAWebPollsVotesSchema").getTable();
                yield r.bulkRemove([
                    [
                        t.parentMsgKey.toString(),
                        t.sender.toString()
                    ]
                ]);
                o("WAWebPollsPollVoteCollection").PollVoteCollection.remove(t);
                return;
            }
            const a = {
                msgKey: t.msgKey,
                parentMsgKey: t.parentMsgKey,
                selectedOptionLocalIds: t_lastSuccessfulSelectedOptionLocalIds,
                senderTimestampMs: t.senderTimestampMs,
                t: t.t,
                sender: t.sender,
                ack: o("WAWebAck").ACK.SENT,
                read: true,
                lastSuccessfulSelectedOptionLocalIds: t_lastSuccessfulSelectedOptionLocalIds
            };
            yield o("WAWebDBPollsUpsertVotes").upsertVotesDb([
                a
            ]);
            o("WAWebPollsPollVoteCollection").PollVoteCollection.remove(t);
            t.selectedOptionLocalIds = t_lastSuccessfulSelectedOptionLocalIds;
            t.ack = o("WAWebAck").ACK.SENT;
            t.isSendFailure = false;
            o("WAWebPollsPollVoteCollection").PollVoteCollection.add(t);
        });
        return u.apply(this, arguments);
    }
    l.restoreLastSuccessfulVote = s;
}, 98);