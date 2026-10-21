__d("WASmaxInBizSettingsSmbDataSharingSettingMixin", [
    "WASmaxInBizSettingsSmbDataSharingSettingValueMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "privacy");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "smb_data_sharing_with_meta_consent");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInBizSettingsSmbDataSharingSettingValueMixin").parseSmbDataSharingSettingValueMixin(n.value);
        r.success;
        return r;
    }
    l.parseSmbDataSharingSettingMixin = e;
}, 98);