__d("WAWebRevoke", [
    "WAWebMsgKey",
    "WAWebRevokeMsgConstants",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e({ originalKey, revokeKey }) {
        return new (r("WAWebMsgKey"))({
            fromMe: originalKey.fromMe,
            id: revokeKey.id,
            remote: originalKey.remote,
            participant: originalKey.participant
        });
    }
    function s({ revokedMsgKey, revokedMsgTimestamp, revokeTimestamp }) {
        const i = r("WAWebWid").isNewsletter(revokedMsgKey.remote) ? o("WAWebRevokeMsgConstants").NEWSLETTER_REVOKE_WINDOW : o("WAWebRevokeMsgConstants").REVOKE_WINDOW;
        const l = i + o("WAWebRevokeMsgConstants").REVOKE_WINDOW_RECEIVER_MARGIN;
        return revokeTimestamp - revokedMsgTimestamp <= l;
    }
    l.getMsgKeyAfterRevoke = e;
    l.isWithinRevokeWindow = s;
}, 98);