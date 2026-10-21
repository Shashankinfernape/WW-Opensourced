__d("WASmaxInStatusDeliverStatusEncSettingMixin", [
    "WAResultOrError",
    "WASmaxInStatusDeliverEnums",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrStringEnum(n.value, "status_setting", o("WASmaxInStatusDeliverEnums").ENUM_ALLOWLIST_CLOSEFRIENDS_CONTACTS_CUSTOMLIST_DENYLIST);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                metaStatusSetting: r.value
            });
        }
        return r;
    }
    l.parseStatusEncSettingMixin = e;
}, 98);