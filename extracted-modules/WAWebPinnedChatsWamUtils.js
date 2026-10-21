__d("WAWebPinnedChatsWamUtils", [
    "WAWebAuraGating",
    "WAWebPinnedChatsMaxAlertWamEvent",
    "WAWebWamEnumPinnedChatsPremiumStatusType",
    "WAWebWamEnumPremiumStatusType"
], function(t, n, r, o, a, i, l) {
    function e() {
        if (r("WAWebAuraGating").isPinnedChatsBenefitActive()) {
            return o("WAWebWamEnumPinnedChatsPremiumStatusType").PINNED_CHATS_PREMIUM_STATUS_TYPE.ACTIVE;
        }
        if (r("WAWebAuraGating").isPinnedChatsEnabled()) {
            return o("WAWebWamEnumPinnedChatsPremiumStatusType").PINNED_CHATS_PREMIUM_STATUS_TYPE.ENABLED;
        }
        return o("WAWebWamEnumPinnedChatsPremiumStatusType").PINNED_CHATS_PREMIUM_STATUS_TYPE.DISABLED;
    }
    function s() {
        const premiumStatus = (()=>{
            if (r("WAWebAuraGating").isPinnedChatsBenefitActive()) {
                return o("WAWebWamEnumPremiumStatusType").PREMIUM_STATUS_TYPE.ACTIVE;
            }
            if (r("WAWebAuraGating").isPinnedChatsEnabled()) {
                return o("WAWebWamEnumPremiumStatusType").PREMIUM_STATUS_TYPE.ENABLED;
            }
            return o("WAWebWamEnumPremiumStatusType").PREMIUM_STATUS_TYPE.DISABLED;
        })();
        new (o("WAWebPinnedChatsMaxAlertWamEvent")).PinnedChatsMaxAlertWamEvent({
            premiumStatus
        }).commit();
    }
    l.getPinnedChatsPremiumStatus = e;
    l.logPinnedChatsMaxAlert = s;
}, 98);