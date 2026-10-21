__d("WAWebParseRequestPhoneNumberMessageProto", [
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.requestPhoneNumberMessage;
        if (r != null) {
            const a = r.contextInfo;
            const i = babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.REQUEST_PHONE_NUMBER,
                kind: o("WAWebMsgType").MsgKind.RequestPhoneNumber
            });
            return {
                msgData: i,
                contextInfo: a
            };
        }
    }
    l.default = e;
}, 98);