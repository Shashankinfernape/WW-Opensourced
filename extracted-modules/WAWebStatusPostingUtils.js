__d("WAWebStatusPostingUtils", [
    "fbt",
    "WAWebUserPrefsStatusType"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        let t = 0;
        switch(e.setting){
            case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact:
                return s._("My contacts");
            case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList:
                t = e.allowList.length || 0;
                return s._("_j{\"*\":\"{allow-contacts} contacts included\",\"_1\":\"1 contact included\"}", [
                    s._plural(t, "allow-contacts")
                ]);
            case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList:
                t = e.denyList.length || 0;
                return s._("_j{\"*\":\"{count} contacts excluded\",\"_1\":\"1 contact excluded\"}", [
                    s._plural(t, "count")
                ]);
        }
    }
    l.formatStatusSetting = e;
}, 226);