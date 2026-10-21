__d("WAWebPreProcessOrderEphemeralExemption", [
    "WAWebDBChatEphemeralExemptionData",
    "WAWebDBEphemeralDisplayedExemptions",
    "WAWebOrderEphemeralExemptionUtil",
    "WAWebOrderGatingUtils",
    "WAWebOrderSystemMsg",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebOrderGatingUtils").inOrderMessagesEphemeralExceptionEnabled()) {
                return e;
            }
            const r = e.findIndex(({ interactiveType: t, nativeFlowName: n, type })=>o("WAWebOrderEphemeralExemptionUtil").isMessageTypeExemptedFromDisappearing(type, t, n));
            if (r === -1 || e.at(r)?.id?.remote == null) {
                return e;
            }
            const a = e.at(r)?.id?.remote;
            if (a == null) {
                return e;
            }
            const i = yield o("WAWebDBChatEphemeralExemptionData").getChatEphemeralExemptionDataFromChat(a);
            if (i != null && o("WAWebOrderEphemeralExemptionUtil").shouldShowOrderExemptionSystemMessage(i)) {
                o("WAWebDBChatEphemeralExemptionData").persistsEphemeralDisplayedExemptions(a, i.ephemeralDuration ?? 0, o("WAWebDBEphemeralDisplayedExemptions").EphemeralExemptionType.ORDERS_AND_PAYMENTS);
                const s = e.slice(0, r);
                const u = o("WAWebOrderSystemMsg").getOrderEphemeralExemptionSystemMsg(a);
                const c = e.slice(r, e.length);
                return [].concat(s, [
                    u
                ], c);
            } else if (i != null && o("WAWebOrderEphemeralExemptionUtil").shouldUnsetChatEphemeralDisplayedExemption(i)) {
                o("WAWebDBChatEphemeralExemptionData").persistsEphemeralDisplayedExemptions(a, i.ephemeralDuration ?? 0, o("WAWebDBEphemeralDisplayedExemptions").EphemeralExemptionType.UNSET);
            }
            return e;
        });
        return s.apply(this, arguments);
    }
    l.preProcessOrderEphemeralExemption = e;
}, 98);