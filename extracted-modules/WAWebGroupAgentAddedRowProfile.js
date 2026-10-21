__d("WAWebGroupAgentAddedRowProfile", [
    "WAWebGroupAgentProfileRouting"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        if (e !== "add" || t == null || t.length !== 1) {
            return null;
        }
        const agentWid = t[0];
        const destination = o("WAWebGroupAgentProfileRouting").getGroupAgentProfileDestination(agentWid, n);
        if (destination == null) {
            return null;
        }
        return {
            agentWid,
            destination
        };
    }
    l.getAddedGroupAgentProfile = e;
}, 98);