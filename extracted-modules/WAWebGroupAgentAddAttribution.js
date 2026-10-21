__d("WAWebGroupAgentAddAttribution", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = n("$InternalEnum")({
        MEMBER: "muse_agent_member",
        OWNER: "muse_agent_owner"
    });
    function l(t) {
        if (t == null) {
            return null;
        }
        return e.cast(t);
    }
    i.GroupAgentAddAttribution = e;
    i.groupAgentAddAttributionFromBody = l;
}, 66);