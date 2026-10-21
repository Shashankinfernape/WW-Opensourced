__d("WAWebContactSearchGatingUtils", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_contact_and_chat_fuzzy_search_distance_threshold");
    }
    function s() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_contact_and_chat_fuzzy_search_timeout_threshold");
    }
    function u() {
        const t = e();
        if (t <= 0) {
            return 1 / 0;
        }
        return Math.ceil(1 / t);
    }
    function c(e) {
        const t = u();
        return e.every((e)=>e.length >= t);
    }
    function d() {
        return o("WAWebABProps").getABPropConfigValue("wa_web_push_name_in_global_search_non_contacts_enabled");
    }
    l.getFuzzySearchDistanceThreshold = e;
    l.getFuzzySearchTimeoutThreshold = s;
    l.canTermsMeetFuzzySearchThreshold = c;
    l.isNonContactPushNameSearchEnabled = d;
}, 98);