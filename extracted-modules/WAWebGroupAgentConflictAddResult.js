__d("WAWebGroupAgentConflictAddResult", [
    "fbt",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebInitializeBotContact"
], function(t, n, r, o, a, i, l, s) {
    const e = "432";
    function u(e) {
        return e.filter(({ code, userWid })=>c(code, userWid)).map(({ userWid })=>userWid);
    }
    function c(t, n) {
        return t === e && n.isBot();
    }
    function d(e) {
        const t = [].concat(e).sort(p).map(_).find((e)=>e != null);
        if (t == null) {
            return m(e.length);
        }
        return s._("Can't add {agentName}. This group has an AI agent that can't be in the same group.", [
            s._param("agentName", t)
        ]);
    }
    function m(e) {
        return s._("_j{\"*\":\"Couldn't add {count} members.\",\"_1\":\"Couldn't add 1 member.\"}", [
            s._plural(e, "count")
        ]);
    }
    function p(e, t) {
        const n = e.toString();
        const r = t.toString();
        if (n === r) {
            return 0;
        }
        if (n < r) {
            return -1;
        }
        return 1;
    }
    function _(e) {
        const t = o("WAWebContactCollection").ContactCollection.get(e);
        if (t == null) {
            return null;
        }
        const n = o("WAWebContactGetters").getName(t);
        if (n != null && n !== "" && n !== o("WAWebInitializeBotContact").getBotPlaceholderName()) {
            return n;
        }
        const r = o("WAWebContactGetters").getNotifyName(t);
        if (r != null && r !== "") {
            return r;
        }
        return null;
    }
    l.getAgentConflictRejectedWids = u;
    l.isAgentConflictRejection = c;
    l.formatAgentConflictRefusal = d;
    l.formatGenericAgentAddRefusal = m;
}, 226);