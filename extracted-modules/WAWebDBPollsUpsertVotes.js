__d("WAWebDBPollsUpsertVotes", [
    "WAWebAck",
    "WAWebApiContact",
    "WAWebMaxPerGroup",
    "WAWebModelStorageUtils",
    "WAWebPollsDbSerialization",
    "WAWebPollsGetVoteKey",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebMaxPerGroup").maxPerGroup(e, function(e) {
            return e.senderTimestampMs;
        }, o("WAWebPollsGetVoteKey").getVoteKey);
        return o("WAWebModelStorageUtils").getStorage().lock([
            "poll-votes"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const r = yield n.anyOf([
                    "parentMsgKey",
                    "sender"
                ], s(t));
                const a = new Map;
                for (const i of r){
                    a.set(o("WAWebPollsGetVoteKey").getVoteKey(i), i);
                }
                const l = [];
                const u = [];
                const c = [];
                for (const d of t){
                    const p = a.get(o("WAWebPollsGetVoteKey").getVoteKey(d));
                    if (p != null) {
                        if (p.senderTimestampMs > d.senderTimestampMs) {
                            l.push(o("WAWebPollsDbSerialization").voteFromDbRow(p));
                            continue;
                        }
                        if (String(d.sender) !== String(p.sender)) {
                            c.push(p);
                        }
                    }
                    const _ = d.selectedOptionLocalIds.length === 0;
                    const f = p?.read ?? false;
                    const g = !_ && f && d.read !== f ? babelHelpers.extends({}, d, {
                        read: true
                    }) : d;
                    let lastSuccessfulSelectedOptionLocalIds = g.lastSuccessfulSelectedOptionLocalIds;
                    if (p != null) {
                        if (p.ack != null && p.ack >= o("WAWebAck").ACK.SENT) {
                            lastSuccessfulSelectedOptionLocalIds = Array.from(new Uint8Array(p.selectedOptionLocalIds));
                        } else if (p.lastSuccessfulSelectedOptionLocalIds != null) {
                            lastSuccessfulSelectedOptionLocalIds = Array.from(new Uint8Array(p.lastSuccessfulSelectedOptionLocalIds));
                        }
                    }
                    const y = lastSuccessfulSelectedOptionLocalIds !== g.lastSuccessfulSelectedOptionLocalIds ? babelHelpers.extends({}, g, {
                        lastSuccessfulSelectedOptionLocalIds
                    }) : g;
                    l.push(y);
                    u.push(o("WAWebPollsDbSerialization").dbRowFromVote(y));
                }
                if (c.length > 0) {
                    yield n.bulkRemove(u.map((e)=>[
                            e.parentMsgKey,
                            e.sender
                        ]));
                }
                if (u.length > 0) {
                    yield n.bulkCreateOrReplace(u);
                }
                return l;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function s(e) {
        const t = [];
        for (const n of e){
            const { parentMsgKey, sender } = n;
            t.push([
                parentMsgKey.toString(),
                sender.toString()
            ]);
            const i = o("WAWebApiContact").getAlternateUserWid(sender);
            if (i != null) {
                t.push([
                    parentMsgKey.toString(),
                    i.toString()
                ]);
            }
        }
        return t;
    }
    l.upsertVotesDb = e;
}, 98);