__d("WAWebCreateEventResponseMsgData", [
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebEventResponseCollection",
    "WAWebLidMigrationUtils",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebReferentialMsgKey",
    "WAWebViewMode.flow",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e({ eventCreationMsg, responseMsgKey, responseType, sender }) {
        const s = o("WAWebReferentialMsgKey").getReferentialMsgKey(eventCreationMsg);
        const u = o("WATimeUtils").unixTimeMs();
        const c = o("WAWebEventResponseCollection").EventResponseCollection.byParent(s).findFirst(function({ sender: sender_1 }) {
            return r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(sender_1, sender));
        })?.senderTimestampMs;
        return babelHelpers.extends({
            id: responseMsgKey
        }, o("WAWebMsgKeyUtils").msgKeyToTargetInfo(responseMsgKey, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon), {
            parentMsgKey: s,
            ack: o("WAWebAck").ACK.CLOCK,
            t: Math.floor(u / 1000),
            eventResponse: responseType,
            senderTimestampMs: o("WAWebAddOnParseWebMsgInfo").getIncreasingLatestSenderTimestampMs(c),
            read: true,
            type: o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
            kind: o("WAWebMsgType").MsgKind.EventResponseDecrypted,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
        });
    }
    l.createEventResponseMsgData = e;
}, 98);