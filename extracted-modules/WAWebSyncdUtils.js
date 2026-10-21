__d("WAWebSyncdUtils", [], function(t, n, r, o, a, i) {
    function e(e) {
        const t = l(e);
        return [
            e.remote.toString({
                legacy: true
            }),
            e.id,
            e.fromMe ? "1" : "0",
            t
        ];
    }
    function l(e) {
        let t = "0";
        const e_participant = e.participant;
        if (e_participant && !e.remote.isUser() && !e.fromMe) {
            t = e_participant.toString({
                legacy: true
            });
        }
        return t;
    }
    i.constructMsgKeySegmentsFromMsgKey = e;
    i.extractParticipantForSync = l;
}, 66);