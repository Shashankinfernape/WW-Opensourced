__d("WAWebParseProtocolSenderRevokeMessageProto", [
    "WAWebAck",
    "WAWebProtocolRevokeMessageUtils"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, editAttr: n, messageProtobuf: r, msgContext: a, msgMeta: i }) {
        if (n === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE) {
            return o("WAWebProtocolRevokeMessageUtils").parseProtocolRevokeMessageProto({
                messageProtobuf: r,
                baseMessage: t,
                editAttr: n,
                msgContext: a,
                msgMeta: i
            });
        }
    }
    l.default = e;
}, 98);