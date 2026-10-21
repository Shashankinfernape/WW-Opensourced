__d("WAWebIndividualNewChatMessageCappingLimitGatingUtils", [
    "WAWebABProps",
    "WAWebMobilePlatforms",
    "WAWebSubscriptionCollection"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebABProps").getABPropConfigValue("wa_individual_new_chat_thread_capping_limit");
    }
    function s() {
        return o("WAWebABProps").getABPropConfigValue("wa_individual_new_chat_msg_latest_rampup_date");
    }
    function u() {
        return o("WAWebABProps").getABPropConfigValue("wa_nct_capping_kill_switch_enabled") === true;
    }
    function c() {
        if (u() || o("WAWebMobilePlatforms").isSMB() && d()) {
            return false;
        }
        return e() > 0;
    }
    function d() {
        const e = o("WAWebSubscriptionCollection").SubscriptionCollection.at(0);
        if (e == null) {
            return false;
        }
        const t = e.newMessageCappingEnabled;
        if (t === true) {
            return false;
        }
        const n = e?.creationTime != null && e.creationTime < s();
        return n;
    }
    l.isCappingKillSwitched = u;
    l.isIndividualNewChatMessageCappingEnabled = c;
}, 98);