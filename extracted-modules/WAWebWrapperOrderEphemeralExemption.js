__d("WAWebWrapperOrderEphemeralExemption", [
    "fbt",
    "WAWebChatEphemerality",
    "WAWebMsgGetters",
    "WAWebOrderEphemeralExemptionUtil",
    "WAWebOrderGatingUtils"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t) {
        if (!o("WAWebChatEphemerality").isEphemeralSettingOn(e) || o("WAWebMsgGetters").getIsEphemeral(t)) {
            return false;
        }
        const n = t.safe();
        const { interactiveType, nativeFlowName } = t;
        return o("WAWebOrderGatingUtils").inOrderMessagesEphemeralExceptionEnabled() && o("WAWebOrderEphemeralExemptionUtil").isMessageTypeExemptedFromDisappearing(n.type, interactiveType, nativeFlowName);
    }
    function u() {
        if (o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled()) {
            return s._("Disappearing messages are turned on in this chat. This charge request will not disappear because it contains purchase information.");
        }
        return s._("Disappearing messages are turned on in this chat. This order will not disappear because it contains purchase information.");
    }
    function c() {
        return s._("Learn more");
    }
    l.isMessageExemptedFromDisappearing = e;
    l.getOrderEphemeralExemptionInfoString = u;
    l.getLearnMorerderEphemeralExemptionButtonString = c;
}, 226);