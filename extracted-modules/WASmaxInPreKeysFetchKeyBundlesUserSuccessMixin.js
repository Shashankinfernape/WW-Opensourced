__d("WASmaxInPreKeysFetchKeyBundlesUserSuccessMixin", [
    "WAResultOrError",
    "WASmaxInPreKeysDeviceSuccessMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "user");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "t", 0, void 0);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, e, "is_cloud_api", "true");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInPreKeysDeviceSuccessMixin").parseDeviceSuccessMixin(e);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                t: n.value,
                isCloudApi: r.value
            }, a.value));
        }
        return a;
    }
    l.parseFetchKeyBundlesUserSuccessMixin = e;
}, 98);