__d("WAWebPollsDbUtils", [
    "invariant",
    "WAWebPollOptionHashUtils",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        if (e == null) {
            return undefined;
        }
        return e.slice().sort((e, t)=>e.localId - t.localId).map(({ addOptionMsgKey, hash, localId, name }, t)=>{
            if (localId !== t) {
                s(0, 59784);
            }
            if (hash != null) {
                return {
                    name,
                    hash,
                    addOptionMsgKey
                };
            }
            return {
                name,
                addOptionMsgKey
            };
        });
    }
    function u(e) {
        const n = e?.pollVotes ?? [];
        const r = n == null ? undefined : n.slice().sort((e, t)=>e.option.localId - t.option.localId).map(({ option, optionVoteCount }, t)=>{
            if (option.localId !== t) {
                s(0, 59784);
            }
            return {
                option: {
                    name: option.name
                },
                optionVoteCount
            };
        });
        return {
            pollVotes: r
        };
    }
    function c(e) {
        return e?.map(function({ addOptionMsgKey, hash, name }, t) {
            if (hash == null) {
                return {
                    name: r("nullthrows")(name),
                    localId: t,
                    addOptionMsgKey
                };
            }
            return {
                name: r("nullthrows")(name),
                localId: t,
                hash: o("WAWebPollOptionHashUtils").createOptionHashHexFromString(hash),
                addOptionMsgKey
            };
        });
    }
    function d(e) {
        const n = e?.pollVotes ?? [];
        const o = n?.map(function({ option, optionVoteCount }, t) {
            return {
                option: {
                    name: r("nullthrows")(option?.name),
                    localId: t
                },
                optionVoteCount: r("nullthrows")(optionVoteCount)
            };
        });
        return {
            pollVotes: o
        };
    }
    l.compressPollOptions = e;
    l.compressPollVotesSnapshot = u;
    l.expandPollOptions = c;
    l.expandPollVotesSnapshot = d;
}, 98);