__d("WAWebCoexV2RepresentedIdentityFromMessage", [
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2RepresentedIdentity"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(e.author, e.metaFrom)) {
            return {
                representedIdentity: s(e, t)
            };
        }
        return null;
    }
    function s(e, t) {
        return o("WAWebCoexV2RepresentedIdentity").getCoexV2RepresentedIdentity({
            author: e.author,
            metaFrom: e.metaFrom,
            peerRecipientLid: e.peerRecipientLid,
            peerRecipientPn: e.peerRecipientPn,
            peerRecipientUsername: e.peerRecipientUsername,
            senderPn: e.senderPn,
            senderUsername: e.username,
            targetChatJid: t?.targetChatJid
        });
    }
    l.maybeResolveCoexV2RepresentedIdentityFromMessage = e;
}, 98);