__d("WAUseCaseSecret", [
    "$InternalEnum",
    "WABinary",
    "WACryptoHkdf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        POLL_VOTE: "Poll Vote",
        ENC_REACTION: "Enc Reaction",
        ENC_COMMENT: "Enc Comment",
        REPORT_TOKEN: "Report Token",
        EVENT_RESPONSE: "Event Response",
        EVENT_EDIT_ENCRYPTED: "Event Edit",
        POLL_EDIT_ENCRYPTED: "Poll Edit",
        POLL_ADD_OPTION: "Poll Add Option",
        MESSAGE_EDIT: "Message Edit"
    });
    const s = 32;
    function u({ messageSecret, modificationSender, modificationType, parentMsgOriginalSender, stanzaId }) {
        const l = o("WABinary").Binary.build(stanzaId, parentMsgOriginalSender, modificationSender, modificationType).readBuffer();
        return o("WACryptoHkdf").extractAndExpand(messageSecret instanceof ArrayBuffer ? new Uint8Array(messageSecret) : messageSecret, l, s);
    }
    l.UseCaseSecretModificationType = e;
    l.createUseCaseSecret = u;
}, 98);