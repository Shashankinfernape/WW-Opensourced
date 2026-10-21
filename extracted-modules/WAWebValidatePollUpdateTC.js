__d("WAWebValidatePollUpdateTC", [
    "WACryptoUtils",
    "WAWebPollNameHashHistoryUtils"
], function(t, n, r, o, a, i, l) {
    function e({ parentMsg, voteMetadata }) {
        if (!o("WAWebPollNameHashHistoryUtils").hasPollNameHashHistory(parentMsg) || voteMetadata == null) {
            return {
                kind: "pass"
            };
        }
        const a = voteMetadata.lastEditStanzaId ?? o("WAWebPollNameHashHistoryUtils").ORIGINAL_POLL_VERSION_EDIT_STANZA_ID;
        const i = o("WAWebPollNameHashHistoryUtils").getPollNameHashFor(parentMsg, a);
        if (i == null) {
            return {
                kind: "park",
                dependencyId: a
            };
        }
        if (o("WACryptoUtils").uint8ArraysEqual(i, voteMetadata.pollNameHash)) {
            return {
                kind: "pass"
            };
        }
        return {
            kind: "mismatch"
        };
    }
    l.validatePollUpdateTC = e;
}, 98);