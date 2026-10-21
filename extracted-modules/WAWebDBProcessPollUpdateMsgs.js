__d("WAWebDBProcessPollUpdateMsgs", [
    "Promise",
    "WALogger",
    "WAWebApplyPollVoteTCValidation",
    "WAWebBackendApi",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebDBPollsGetParentMessages",
    "WAWebDBPollsUpsertVotes",
    "WAWebDBStoreMessageOrphans",
    "WAWebDBUpdateLastAddOnPreviewChat",
    "WAWebLastAddOnDBSerialization",
    "WAWebPollsExtractVotes",
    "WAWebShouldUpdateLastAddOnPreview",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.length === 0) {
                return [];
            }
            const r = yield o("WAWebDBPollsGetParentMessages").getParentMessages(t);
            const { orphans, pollUpdateMsgsToParentMsgs } = r;
            for (const [u, c] of pollUpdateMsgsToParentMsgs.entries()){
                if (c.pollInvalidated === true) {
                    pollUpdateMsgsToParentMsgs.delete(u);
                }
            }
            for (const [p, _] of pollUpdateMsgsToParentMsgs.entries()){
                const f = _.pollEndTime;
                if (f != null && p.t != null && p.t * 1000 > f) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "poll-update-past-end-time/dropped"
                    ])));
                    pollUpdateMsgsToParentMsgs.delete(p);
                }
            }
            const g = yield (s || (s = n("Promise"))).all([
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (orphans.length !== 0) {
                        yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(orphans, function(e) {
                            return e.pollUpdateParentKey;
                        });
                        const e = orphans.map((e)=>e.id.toString());
                        yield o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed(e);
                    }
                })(),
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (pollUpdateMsgsToParentMsgs.size !== 0) {
                        const e = yield o("WAWebPollsExtractVotes").extractVotes(pollUpdateMsgsToParentMsgs);
                        const t = yield d(e, pollUpdateMsgsToParentMsgs);
                        if (t.length !== 0) {
                            const votes = yield o("WAWebDBPollsUpsertVotes").upsertVotesDb(t);
                            yield o("WAWebBackendApi").frontendSendAndReceive("upsertVotesModelCollection", {
                                votes,
                                votesToRemove: null,
                                restoredFromDb: false
                            });
                            const r = votes.map((e)=>e.msgKey.toString());
                            yield o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed(r);
                            const a = new Map;
                            for (const l of pollUpdateMsgsToParentMsgs.values()){
                                a.set(l.id.toString(), l.pollHideVoterNames);
                            }
                            const s = yield o("WAWebShouldUpdateLastAddOnPreview").filterChatsWithAddOnPreviewUpdates(votes.map((e)=>o("WAWebLastAddOnDBSerialization").lastAddOnPreviewCandidateFromVoteData(e, a.get(e.parentMsgKey.toString()))));
                            if (s.size > 0) {
                                yield o("WAWebDBUpdateLastAddOnPreviewChat").updateDatabaseForLastAddOnPreview(s);
                                o("WAWebBackendApi").frontendFireAndForget("updateChatLastAddOnPreview", {
                                    chatMap: s
                                });
                            }
                            return votes;
                        }
                    }
                })()
            ]);
            const h = g[1];
            return h ?? [];
        });
        return c.apply(this, arguments);
    }
    function d(e, pollUpdateMsgsToParentMsgs) {
        const n = new Map;
        for (const [a, parentMsg] of pollUpdateMsgsToParentMsgs){
            n.set(a.id.toString(), {
                pollUpdateMsg: a,
                parentMsg
            });
        }
        return o("WAWebApplyPollVoteTCValidation").applyPollVoteTCValidation(e.map((vote)=>{
            const o = n.get(vote.msgKey.toString());
            return {
                vote,
                parentMsg: o?.parentMsg ?? {},
                voteMetadata: o?.pollUpdateMsg.pollUpdateMessageMetadata,
                parentMsgKey: o?.parentMsg.id ?? vote.parentMsgKey,
                voteMsgKey: vote.msgKey,
                sender: vote.sender,
                senderTimestampMs: vote.senderTimestampMs,
                selectedOptionLocalIds: vote.selectedOptionLocalIds
            };
        }), "live-vote");
    }
    l.processPollUpdateMsgs = u;
}, 98);