__d("WAWebPollNameHashHistoryUtils", [], function(t, n, r, o, a, i) {
    const e = "";
    function l(e) {
        return (e.pollNameHashHistory?.length ?? 0) > 0;
    }
    function s(e, t) {
        return e.pollNameHashHistory?.find(function(e) {
            return e.editStanzaId === t;
        })?.pollNameHash;
    }
    function u(e, editStanzaId, pollNameHash) {
        return [].concat(e ?? [], [
            {
                editStanzaId,
                pollNameHash
            }
        ]);
    }
    i.ORIGINAL_POLL_VERSION_EDIT_STANZA_ID = e;
    i.hasPollNameHashHistory = l;
    i.getPollNameHashFor = s;
    i.appendPollNameHash = u;
}, 66);