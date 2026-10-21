__d("WAWebDBMessageRangeIndex", [
    "$InternalEnum",
    "WAWebOrderPreservingHex"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        IncomingChatMessage: "1",
        Outgoing: "2",
        SystemMessage: "3"
    });
    function s(t, n, r, a) {
        let i;
        if (r) {
            i = e.SystemMessage;
        } else if (n) {
            i = e.IncomingChatMessage;
        } else {
            i = e.Outgoing;
        }
        return `${t}_${i}_${a != null ? o("WAWebOrderPreservingHex").orderPreservingHex(a) : ""}`;
    }
    l.MessagePropertyType = e;
    l.craftMessageRangeIndex = s;
}, 98);