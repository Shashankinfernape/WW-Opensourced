__d("WAWebParsePollNameHashHistory", [
    "WAWebPollNameHashHistoryUtils",
    "WAWebPollsGatingUtils",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (o("WAWebPollsGatingUtils").isPollTCReceivingEnabled()) {
            const n = r("compactMap")(e?.pollNameHashHistory ?? [], function({ editStanzaId: t, pollNameHash: n }) {
                if (n != null) {
                    return {
                        editStanzaId: t ?? o("WAWebPollNameHashHistoryUtils").ORIGINAL_POLL_VERSION_EDIT_STANZA_ID,
                        pollNameHash: new Uint8Array(n)
                    };
                }
                return null;
            });
            if (n.length > 0) {
                return n;
            }
            return void 0;
        }
    }
    l.parsePollNameHashHistoryFromHistorySync = e;
}, 98);