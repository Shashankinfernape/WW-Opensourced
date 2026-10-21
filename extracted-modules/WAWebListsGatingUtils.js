__d("WAWebListsGatingUtils", [
    "WAWebABProps",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebMobilePlatforms").isSMB() && o("WAWebABProps").getABPropConfigValue("lists_chat_list_row_pill_enabled");
    }
    function s() {
        if (o("WAWebMobilePlatforms").isSMB()) {
            return o("WAWebABProps").getABPropConfigValue("lists_smb_web_m2_enabled2");
        }
        return o("WAWebABProps").getABPropConfigValue("wa_web_lists_m2_enabled");
    }
    function u() {
        if (o("WAWebMobilePlatforms").isSMB()) {
            return true;
        }
        return s();
    }
    l.isListsChatListRowPillEnabled = e;
    l.isListsM2Enabled = s;
    l.isLabelReorderEnabled = u;
}, 98);