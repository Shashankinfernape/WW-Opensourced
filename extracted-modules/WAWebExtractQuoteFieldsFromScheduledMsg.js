__d("WAWebExtractQuoteFieldsFromScheduledMsg", [
    "WAWebDecodeJid",
    "WAWebGetScheduledMsgContextInfo",
    "WAWebLidMigrationUtils",
    "WAWebQuotedMessageProtoUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WAWebGetScheduledMsgContextInfo").getScheduledMsgContextInfo(e);
        if (n == null) {
            return {};
        }
        const r = {};
        const a = n.quotedMessage;
        if (a != null && a.reactionMessage == null) {
            r.quotedMsg = o("WAWebQuotedMessageProtoUtils").parseQuotedMessage({
                quotedMsg: a,
                msgContext: "relay",
                isCarouselCardReply: false,
                contextInfo: n,
                targetMessageKey: t
            });
        }
        const i = t.remote.isGroup();
        if (n.stanzaId != null) {
            r.quotedStanzaID = n.stanzaId;
        }
        const l = s(n.participant);
        if (l != null) {
            if (i && t.participant != null) {
                const u = o("WAWebLidMigrationUtils").toCommonAddressingMode(l, t.participant);
                const c = u[0];
                r.quotedParticipant = c ?? l;
            } else {
                r.quotedParticipant = l;
            }
        }
        const d = s(n.remoteJid);
        if (d != null && i) {
            r.quotedRemoteJid = d;
        }
        if (n.groupSubject != null) {
            r.quotedGroupSubject = n.groupSubject;
        }
        const m = s(n.parentGroupJid);
        if (m != null) {
            r.quotedParentGroupJid = m;
        }
        if (n.quotedType != null) {
            r.quotedType = n.quotedType;
        }
        return r;
    }
    function s(e) {
        const t = o("WAWebDecodeJid").decodeJid(e);
        if (typeof t === "string") {
            return null;
        }
        return t;
    }
    l.extractQuoteFieldsFromScheduledMsg = e;
}, 98);