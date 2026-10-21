__d("WAWebPollsDbSerialization", [
    "WAWebMsgKey",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = {
            msgKey: e.msgKey.toString(),
            parentMsgKey: e.parentMsgKey.toString(),
            selectedOptionLocalIds: new Uint8Array(e.selectedOptionLocalIds).buffer,
            senderTimestampMs: e.senderTimestampMs,
            sender: e.sender.toString(),
            read: e.read
        };
        if (e.t != null) {
            t.t = e.t;
        }
        if (e.ack != null) {
            t.ack = e.ack;
        }
        if (e.lastSuccessfulSelectedOptionLocalIds != null) {
            t.lastSuccessfulSelectedOptionLocalIds = new Uint8Array(e.lastSuccessfulSelectedOptionLocalIds).buffer;
        }
        return t;
    }
    function s(e) {
        return {
            msgKey: r("WAWebMsgKey").fromString(e.msgKey),
            parentMsgKey: r("WAWebMsgKey").fromString(e.parentMsgKey),
            selectedOptionLocalIds: Array.from(new Uint8Array(e.selectedOptionLocalIds)),
            senderTimestampMs: e.senderTimestampMs,
            t: e.t,
            sender: o("WAWebWidFactory").createUserWidOrThrow(e.sender),
            ack: e.ack,
            read: e.read ?? true,
            lastSuccessfulSelectedOptionLocalIds: e.lastSuccessfulSelectedOptionLocalIds != null ? Array.from(new Uint8Array(e.lastSuccessfulSelectedOptionLocalIds)) : undefined
        };
    }
    l.dbRowFromVote = e;
    l.voteFromDbRow = s;
}, 98);