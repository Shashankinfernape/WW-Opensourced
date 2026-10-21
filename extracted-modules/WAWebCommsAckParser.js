__d("WAWebCommsAckParser", [
    "WAJids",
    "WAWebWidToJid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAJids").extractJidFromJidWithType(o("WAWebWidToJid").widToJidWithType(e.from));
        const participant = e.participant == null ? undefined : o("WAWebWidToJid").widToDeviceJid(e.participant);
        const recipient = e.recipient == null ? undefined : o("WAWebWidToJid").widToUserJid(e.recipient);
        return babelHelpers.extends({}, e, {
            from: t,
            participant,
            recipient
        });
    }
    l.toCoreAckTemplate = e;
}, 98);