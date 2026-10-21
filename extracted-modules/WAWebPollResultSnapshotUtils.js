__d("WAWebPollResultSnapshotUtils", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        isVotedForByMe: false,
        isCurrentLeader: false,
        percentageOfAll: 0,
        percentageOfMostVotedForOption: 0,
        votes: [],
        mode: "pollResultSnapshot",
        count: 0
    };
    function l(t) {
        const n = new Map;
        let r = 0;
        let o = 0;
        t.forEach(({ option, optionVoteCount })=>{
            n.set(option, babelHelpers.extends({}, e, {
                count: optionVoteCount
            }));
            r = Math.max(r, optionVoteCount);
            o += optionVoteCount;
        });
        for (const a of n.values()){
            a.percentageOfMostVotedForOption = r === 0 ? 0 : a.count / r;
            a.percentageOfAll = o === 0 ? 0 : a.count / o;
            a.isCurrentLeader = r > 0 && a.count === r;
        }
        return n;
    }
    i.aggegateVoteSnapshot = l;
}, 66);