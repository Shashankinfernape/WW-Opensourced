__d("WASmaxInPreKeysFetchMissingPreKeysUserSuccessMixin", [
    "WAResultOrError",
    "WASmaxInPreKeysDeviceSuccessOrFetchMissingPreKeysErrorMixinGroup",
    "WASmaxInPreKeysEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "device");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "id", 0, 99);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "t", 0, undefined);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, e, "is_cloud_api", "true");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInPreKeysDeviceSuccessOrFetchMissingPreKeysErrorMixinGroup").parseDeviceSuccessOrFetchMissingPreKeysErrorMixinGroup(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                id: n.value,
                t: r.value,
                isCloudApi: a.value,
                deviceSuccessOrFetchMissingPreKeysErrorMixinGroup: i.value
            });
        }
        return i;
    }
    function s(t) {
        const n = o("WASmaxParseUtils").assertTag(t, "user");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseJid").attrJidEnum(t, "jid", o("WASmaxInPreKeysEnums").USERJID_USERJID);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").mapChildrenWithTag(t, "device", 1, 100, e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                jid: r.value,
                device: a.value
            });
        }
        return a;
    }
    l.parseFetchMissingPreKeysUserSuccessDevice = e;
    l.parseFetchMissingPreKeysUserSuccessMixin = s;
}, 98);