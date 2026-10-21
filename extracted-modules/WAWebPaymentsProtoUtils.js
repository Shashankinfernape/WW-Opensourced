__d("WAWebPaymentsProtoUtils", [
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.paymentNoteMsg != null) {
            const t = {
                stanzaId: e.quotedStanzaID,
                mentionedJid: e.mentionedJidList && e.mentionedJidList.map(o("WAWebE2EProtoUtils").encodeJid),
                isForwarded: e.isForwarded,
                forwardingScore: e.forwardingScore,
                groupMentions: [],
                statusAttributions: [],
                experienceIds: []
            };
            const n = o("WAWebE2EProtoUtils").encodeJid(e.quotedParticipant);
            if (n != null) {
                t.participant = n;
            }
            if (e.quotedMsg) {
                const r = o("WAWebE2EProtoGenerator").getProtobufMessage(e.quotedMsg, undefined, undefined, undefined, "quoted");
                t.quotedMessage = o("WAWebE2EProtoUtils").getMutableMessageProtobuf(r);
            }
            return o("WAWebE2EProtoGenerator").getProtobufMessage(Object.assign(e.paymentNoteMsg, {
                _isPaymentNoteMsg: true
            }), undefined, t);
        }
    }
    l.generatePaymentsNoteMessage = e;
}, 98);