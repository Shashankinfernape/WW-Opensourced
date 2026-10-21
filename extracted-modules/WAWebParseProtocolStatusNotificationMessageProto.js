__d("WAWebParseProtocolStatusNotificationMessageProto", [
    "WAWebMsgType",
    "WAWebViewMode.flow"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n, msgContext: r }) {
        const { associatedChildMessage: a, statusNotificationMessage: i } = n;
        if (!((a == null || a?.message == null) && i == null)) {
            let l = i;
            if (a != null && a.message != null && i == null) {
                l = a.message?.statusNotificationMessage;
            }
            if (l != null) {
                return {
                    msgData: babelHelpers.extends({}, t, {
                        type: o("WAWebMsgType").MSG_TYPE.STATUS_NOTIFICATION,
                        kind: o("WAWebMsgType").MsgKind.Unknown,
                        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
                        futureproofSubtype: "status_notification_message"
                    }),
                    contextInfo: null
                };
            }
        }
    }
    l.default = e;
}, 98);