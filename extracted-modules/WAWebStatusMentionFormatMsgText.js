__d("WAWebStatusMentionFormatMsgText", [
    "fbt",
    "WAWebContactCollection",
    "WAWebStatusGatingUtils",
    "WAWebStatusMentionFutureproofMsgText"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg }) {
        if (!o("WAWebStatusGatingUtils").isStatusMentionMessageEnabled()) {
            return r("WAWebStatusMentionFutureproofMsgText")({
                msg
            });
        }
        const n = msg.safe();
        const fromMe = n.id.fromMe;
        const i = n.subtype === "status_group_mention_message";
        if (i) {
            if (fromMe) {
                return s._("\u0040 You mentioned this group.");
            }
            return s._("\u0040 This group was mentioned.");
        }
        if (fromMe) {
            const l = o("WAWebContactCollection").ContactCollection.get(n.id.remote);
            const u = l?.name || l?.pushname || "";
            return s._("\u0040 You mentioned {name}", [
                s._param("name", u)
            ]);
        }
        return s._("\u0040 You were mentioned.");
    }
    l.default = e;
}, 226);