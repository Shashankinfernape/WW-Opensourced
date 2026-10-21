__d("WAWebBizShowOrderEphemeralSystemAction", [
    "WAWebDBChatEphemeralExemptionData",
    "WAWebDBEphemeralDisplayedExemptions",
    "WAWebOrderEphemeralExemptionUtil",
    "WAWebOrderGatingUtils",
    "WAWebOrderSystemMsg"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (!o("WAWebOrderGatingUtils").inOrderMessagesEphemeralExceptionEnabled()) {
            return null;
        }
        const n = e.safe();
        const { interactiveType, nativeFlowName } = e;
        if (!o("WAWebOrderEphemeralExemptionUtil").isMessageTypeExemptedFromDisappearing(n.type, interactiveType, nativeFlowName)) {
            return null;
        }
        const i = {
            id: t.id.toString(),
            ephemeralDuration: t.ephemeralDuration,
            ephemeralDisplayedExemptions: t.ephemeralDisplayedExemptions
        };
        if (o("WAWebOrderEphemeralExemptionUtil").shouldShowOrderExemptionSystemMessage(i)) {
            t.ephemeralDisplayedExemptions = o("WAWebDBEphemeralDisplayedExemptions").EphemeralExemptionType.ORDERS_AND_PAYMENTS;
            o("WAWebDBChatEphemeralExemptionData").persistsEphemeralDisplayedExemptions(t.id, t.ephemeralDuration, o("WAWebDBEphemeralDisplayedExemptions").EphemeralExemptionType.ORDERS_AND_PAYMENTS);
            return o("WAWebOrderSystemMsg").getOrderEphemeralExemptionSystemMsg(t.id);
        }
        if (o("WAWebOrderEphemeralExemptionUtil").shouldUnsetChatEphemeralDisplayedExemption(i)) {
            t.ephemeralDisplayedExemptions = o("WAWebDBEphemeralDisplayedExemptions").EphemeralExemptionType.UNSET;
            o("WAWebDBChatEphemeralExemptionData").persistsEphemeralDisplayedExemptions(t.id, t.ephemeralDuration, o("WAWebDBEphemeralDisplayedExemptions").EphemeralExemptionType.UNSET);
        }
        return null;
    }
    l.getMaybeSystemMsgForOrderEphemeralExemption = e;
}, 98);