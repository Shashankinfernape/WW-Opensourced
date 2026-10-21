__d("WAWebParseVcardMessageProto", [
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.contactMessage;
        if (r != null) {
            const { contextInfo: a, displayName: i, vcard: l } = r;
            const s = babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.VCARD,
                kind: o("WAWebMsgType").MsgKind.Vcard,
                body: l,
                vcardFormattedName: i
            });
            return {
                msgData: s,
                contextInfo: a
            };
        }
    }
    l.default = e;
}, 98);