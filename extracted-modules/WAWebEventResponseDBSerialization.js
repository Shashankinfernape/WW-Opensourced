__d("WAWebEventResponseDBSerialization", [
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.cast(new Uint8Array(e)[0]);
        if (t == null) {
            throw r("err")("Value contained in array buffer is not a valid event response");
        }
        return t;
    }
    function s(eventResponse) {
        const t = new ArrayBuffer(1);
        const n = new Uint8Array(t);
        n[0] = eventResponse;
        return n.buffer;
    }
    function u(e) {
        const t = r("nullthrows")(o("WAWebMsgGetters").getSender(e));
        return {
            msgKey: e.id.toString(),
            parentMsgKey: e.parentMsgKey.toString(),
            eventResponse: s(e.eventResponse),
            senderTimestampMs: e.senderTimestampMs,
            sender: t.toString(),
            t: e.t,
            ack: e.ack,
            read: o("WAWebUserPrefsMeUser").isMeAccount(t) || e.read
        };
    }
    function c(t) {
        const a = r("WAWebMsgKey").from(t.msgKey);
        return babelHelpers.extends({
            id: a
        }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(a, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), {
            type: o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
            kind: o("WAWebMsgType").MsgKind.EventResponseDecrypted,
            ack: t.ack,
            t: t.t,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            eventResponse: e(t.eventResponse),
            parentMsgKey: r("WAWebMsgKey").from(t.parentMsgKey),
            senderTimestampMs: t.senderTimestampMs,
            read: t.read ?? false
        });
    }
    l.decodeEventResponseFromDBRow = e;
    l.dbRowFromEventResponseMessage = u;
    l.eventResponseMessageFromDBRow = c;
}, 98);