__d("WAWebCoexV2SupportedMsgTypes", [], function(t, n, r, o, a, i) {
    const e = [
        "viewOnceMessage",
        "viewOnceMessageV2",
        "viewOnceMessageV2Extension",
        "liveLocationMessage",
        "sendPaymentMessage",
        "requestPaymentMessage",
        "declinePaymentRequestMessage",
        "cancelPaymentRequestMessage",
        "paymentInviteMessage",
        "paymentReminderMessage",
        "splitPaymentMessage",
        "splitPaymentUpdateMessage",
        "callLogMesssage",
        "bcallMessage",
        "scheduledCallCreationMessage",
        "scheduledCallEditMessage"
    ];
    function l(t) {
        const u = t.deviceSentMessage?.message ?? t.ephemeralMessage?.message;
        if (u != null) {
            return l(u);
        }
        if (t.locationMessage?.isLive === true || t.eventMessage?.isScheduleCall === true || t.protocolMessage?.botFeedbackMessage != null) {
            return false;
        }
        return !e.some((e)=>t[e] != null);
    }
    i.isCoexV2SupportedProtobuf = l;
}, 66);