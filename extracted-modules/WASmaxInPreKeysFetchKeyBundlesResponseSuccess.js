__d("WASmaxInPreKeysFetchKeyBundlesResponseSuccess", [
    "WAResultOrError",
    "WASmaxInPreKeysEnums",
    "WASmaxInPreKeysIQResultResponseMixin",
    "WASmaxInPreKeysResponsePaddingMixin",
    "WASmaxInPreKeysUserFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "user");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrJidEnum(e, "jid", o("WASmaxInPreKeysEnums").DEVICEJID_DEVICEJID_INTEROPDEVICEJID_INTEROPDEVICEJID);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInPreKeysUserFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup").parseUserFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                jid: n.value,
                userFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup: r.value
            });
        }
        return r;
    }
    function s(t, n) {
        const r = o("WASmaxParseUtils").assertTag(t, "iq");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(t, "list");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInPreKeysIQResultResponseMixin").parseIQResultResponseMixin(t, n);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxInPreKeysResponsePaddingMixin").parseResponsePaddingMixin(t);
        const s = o("WASmaxParseUtils").mapChildrenWithTag(a.value, "user", 0, 100000, e);
        if (s.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, i.value, {
                responsePaddingMixin: l.success ? l.value : null,
                listUser: s.value
            }));
        }
        return s;
    }
    l.parseFetchKeyBundlesResponseSuccessListUser = e;
    l.parseFetchKeyBundlesResponseSuccess = s;
}, 98);