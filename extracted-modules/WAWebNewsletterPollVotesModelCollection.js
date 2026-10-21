__d("WAWebNewsletterPollVotesModelCollection", [
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebCRUDOperationsNewsletterMyVotes",
    "WAWebCRUDOperationsNewsletterPollsVotes",
    "WAWebGetUserMediaErrors",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebNewsletterPollVotesModel",
    "WAWebPollsCreateOptionLocalIdMap",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...i_1) {
            let t;
            t = e.call(this, ...i_1) || this;
            t.findImpl = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = e.toString();
                    const n = yield o("WAWebCRUDOperationsNewsletterPollsVotes").getVote(t);
                    const a = yield o("WAWebMsgCollection").MsgCollection.hydrateOrGetMessages([
                        t
                    ]);
                    const i = a[0];
                    if (i == null) {
                        throw new (o("WAWebGetUserMediaErrors")).NotFoundError("No votes found");
                    }
                    const l = i.id.remote.toJid();
                    const { pollOptions, serverId } = i;
                    const c = serverId != null ? yield o("WAWebCRUDOperationsNewsletterMyVotes").getMyVote(l, serverId) : null;
                    if (pollOptions == null) {
                        throw new (o("WAWebGetUserMediaErrors")).NotFoundError("No pollOptions found");
                    }
                    if (n == null && c == null) {
                        throw new (o("WAWebGetUserMediaErrors")).NotFoundError("No polls to display");
                    }
                    const d = {
                        id: r("WAWebMsgKey").fromString(t),
                        pollVotesCountMap: new Map
                    };
                    const m = yield o("WAWebPollsCreateOptionLocalIdMap").createOptionLocalIdMap(pollOptions);
                    if (n != null) {
                        d.pollVotesCountMap = new Map(Array.from(n.votesMap.entries(), function([t, n]) {
                            return [
                                m.getLocalIdForHexHash(t),
                                n
                            ];
                        }));
                        d.pollVotesCountMapTs = o("WATimeUtils").castToUnixTime(n.serverTimestamp);
                    }
                    if (c != null) {
                        d.myVote = new Set(c.votes.map((e)=>m.getLocalIdForHexHash(e)));
                        const p = d.pollVotesCountMap;
                        d.myVote.forEach((e)=>{
                            if (p != null && !p.has(e)) {
                                p.set(e, 1);
                            }
                        });
                        d.myVoteTs = o("WATimeUtils").castToMillisTime(c.serverTimestampMs);
                        d.ack = c.ack;
                    }
                    return d;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebNewsletterPollVotesModel").NewsletterPollVotes;
    function s({ msgKey, parentMsgKey, selectedOptionLocalIds, timestamp }) {
        const a = u.gadd({
            id: parentMsgKey
        });
        a.updateMyVote(selectedOptionLocalIds, timestamp, msgKey);
        return a;
    }
    var u = new e;
    l.updateOrCreatePollVote = s;
    l.NewsletterPollVotesModelCollection = u;
}, 98);