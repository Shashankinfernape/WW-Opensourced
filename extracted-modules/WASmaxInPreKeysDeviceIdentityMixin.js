__d("WASmaxInPreKeysDeviceIdentityMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "device-identity");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytes(t.value);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                deviceIdentityElementValue: n.value
            });
        }
        return n;
    }
    l.parseDeviceIdentityMixin = e;
}, 98);