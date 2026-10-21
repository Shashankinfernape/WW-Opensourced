__d("WAWebNewsletterBackendAddOnsUtils", [
    "Promise",
    "WAWebCRUDOperationsNewsletterPollsVotes",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebNewsletterMapMsgAndAddOns",
    "WAWebNewsletterMsgEditUtils",
    "WAWebNewsletterPollsUtils",
    "WAWebNewsletterReactionUtils",
    "WAWebSchemaMessage",
    "WAWebStoreMsgs",
    "WAWebdbCRUDOperationsNewsletterReaction",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ forwardsCounts, ids, msgs, pollVotes, questionResponsesCounts, reactionIdsToRemove, reactions, timestamp, viewCounts }) {
            if (reactions.length > 0) {
                yield o("WAWebdbCRUDOperationsNewsletterReaction").createOrUpdateNewsletterReactions(r("compactMap")(reactions, o("WAWebNewsletterReactionUtils").mapReactionDataToDbRecord));
            }
            if (reactionIdsToRemove.length > 0) {
                yield o("WAWebdbCRUDOperationsNewsletterReaction").bulkRemoveNewsletterReactionsForParentMsg(reactionIdsToRemove);
            }
            if (pollVotes.length > 0) {
                yield o("WAWebCRUDOperationsNewsletterPollsVotes").bulkCreateOrUpdateVotes(pollVotes.map(o("WAWebNewsletterPollsUtils").mapNewsletterVoteToDbRecord));
            }
            if (msgs.length > 0) {
                const p = new Map(msgs.map((e)=>[
                        e.id.toString(),
                        e
                    ]));
                const _ = [];
                const f = [];
                const g = [];
                const h = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(msgs.map((e)=>e.id.toString()));
                h.forEach((e)=>{
                    if (e != null) {
                        const t = p.get(e.id);
                        if (t != null && t?.kind === o("WAWebMsgType").MsgKind.RevokedMessage && e.type !== o("WAWebMsgType").MSG_TYPE.REVOKED) {
                            f.push(t);
                            g.push(e);
                        } else if (t?.t != null && t.t > e.t) {
                            _.push(t);
                        }
                    }
                });
                yield o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs(_.map(o("WAWebNewsletterMsgEditUtils").mapMsgToEditProtocolMsgLegacy));
                yield o("WAWebSchemaMessage").getMessageTable().bulkRemove(g.map(({ id })=>id.toString()));
                yield o("WAWebStoreMsgs").storeMsgs(f);
            }
            if (ids.length > 0) {
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    "message"
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                        const r = yield n.bulkGet(ids.map((e)=>e.toString())).then((e)=>e.filter(Boolean));
                        const o = r.map(({ forwardsCount, id, questionResponsesCount, viewCount })=>({
                                id,
                                lastUpdateFromServerTs: timestamp,
                                viewCount: viewCounts?.get(id) ?? viewCount,
                                questionResponsesCount: questionResponsesCounts?.get(id) ?? questionResponsesCount,
                                forwardsCount: forwardsCounts?.get(id) ?? forwardsCount
                            }));
                        return n.bulkCreateOrMerge(o);
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ids, reactionIdsToRemove, reactions, timestamp, viewCounts }) {
            if (ids.length !== 0) {
                yield s({
                    ids,
                    msgs: [],
                    reactions: reactions ?? [],
                    reactionIdsToRemove: reactionIdsToRemove ?? [],
                    pollVotes: [],
                    timestamp,
                    viewCounts,
                    questionResponsesCounts: new Map,
                    forwardsCounts: new Map
                });
            }
        });
        return d.apply(this, arguments);
    }
    function m(t, r, a) {
        return t.reduce((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield e;
                const i = yield o("WAWebNewsletterMapMsgAndAddOns").mapMsgAndAddOns(t, r, a);
                if (i == null) {
                    return n;
                }
                const { forwardsCount, id, msgData, pollVoteData, questionResponsesCount, reactionData, viewCount } = i;
                if (id != null && msgData?.kind !== o("WAWebMsgType").MsgKind.RevokedMessage) {
                    n.ids.push(id);
                }
                if (msgData != null) {
                    n.msgs.push(msgData);
                }
                if (viewCount != null && id != null) {
                    n.viewCounts.set(id.toString(), viewCount);
                }
                if (questionResponsesCount != null && id != null) {
                    n.questionResponsesCounts.set(id.toString(), questionResponsesCount);
                }
                if (forwardsCount != null && id != null) {
                    n.forwardsCounts.set(id.toString(), forwardsCount);
                }
                if (reactionData == null) {
                    if (id != null) {
                        n.reactionIdsToRemove.push(id.toString());
                    }
                } else {
                    n.reactions.push(reactionData);
                }
                if (pollVoteData != null) {
                    n.pollVotes.push(pollVoteData);
                }
                return n;
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        })(), (e || (e = n("Promise"))).resolve({
            ids: [],
            reactions: [],
            reactionIdsToRemove: [],
            msgs: [],
            viewCounts: new Map,
            pollVotes: [],
            questionResponsesCounts: new Map,
            forwardsCounts: new Map
        }));
    }
    l.updateAddOnDbRecords = s;
    l.persistNewsletterStatusInteractions = c;
    l.getMsgsAndAddOnsFromUpdates = m;
}, 98);