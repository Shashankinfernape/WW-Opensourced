__d("WAWebGetSearchMatchFromMsg", [
    "WAWebFuzzySearch",
    "WAWebMsgType",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (t.length === 0) {
            return null;
        }
        switch(e.type){
            case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
                return s(e, t);
            case o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT:
                return u(e, t);
            default:
                throw r("err")(`Unimplemented getMatchedPropertyFromMsg for msg type: ${e.type}`);
        }
    }
    function s(e, t) {
        return c(r("nullthrows")(e.pollName), e.pollOptions ?? [], t);
    }
    function u(e, t) {
        const o = e.pollVotesSnapshot.pollVotes ?? [];
        const a = o.map((e)=>e.option);
        return c(r("nullthrows")(e.pollName), a, t);
    }
    function c(e, t, n) {
        const r = n.join(" ").toLowerCase();
        const a = o("WAWebFuzzySearch").fuzzyMatches(r, e.toLowerCase());
        if (a.length > 0) {
            return e;
        }
        const i = t == null ? undefined : t.map((e)=>e.name).find((e)=>o("WAWebFuzzySearch").fuzzyMatches(r, e.toLowerCase()).length > 0);
        return i ?? e;
    }
    l.getSearchMatchFromMsg = e;
}, 98);