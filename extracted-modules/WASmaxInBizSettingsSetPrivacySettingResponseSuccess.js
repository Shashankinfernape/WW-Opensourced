__d("WASmaxInBizSettingsSetPrivacySettingResponseSuccess", [
    "WAResultOrError",
    "WASmaxInBizSettingsIQResultResponseMixin",
    "WASmaxInBizSettingsSmbDataSharingSettingMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInBizSettingsSmbDataSharingSettingMixin").parseSmbDataSharingSettingMixin(r.value);
        const i = o("WASmaxInBizSettingsIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                privacySmbDataSharingSettingMixin: a.success ? a.value : null
            }, i.value));
        }
        return i;
    }
    l.parseSetPrivacySettingResponseSuccess = e;
}, 98);