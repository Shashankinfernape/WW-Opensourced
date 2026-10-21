__d("WAWebAuraBenefitProvider", [
    "WAWebAuraBenefitTypes",
    "WAWebPinChatLimits"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (e === o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS && t) {
            return o("WAWebPinChatLimits").MAX_PINNED_CHATS_PREMIUM;
        }
        return null;
    }
    l.auraBenefitLimit = e;
}, 98);