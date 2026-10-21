__d("WAWebCoexV2RetryAuthorization", [
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebApiMessageInfoStore",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) || !o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled()) {
                return null;
            }
            const n = yield o("WAWebApiCoexV2RelayReceiptStore").getUndeliveredCoexV2Lids(t);
            if (n.length > 0) {
                return o("WAWebApiMessageInfoStore").RetryEligibilityResult.ELIGIBLE;
            }
            return o("WAWebApiMessageInfoStore").RetryEligibilityResult.INELIGIBLE_ALREADY_DELIVERED;
        });
        return s.apply(this, arguments);
    }
    l.getCoexV2RelayRetryEligibility = e;
}, 98);