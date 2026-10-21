__d("WASmaxInPreKeysDeviceSuccessOrFetchMissingPreKeysErrorMixinGroup", [
    "WAResultOrError",
    "WASmaxInPreKeysDeviceSuccessMixin",
    "WASmaxInPreKeysFetchMissingPreKeysDeviceErrorMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInPreKeysDeviceSuccessMixin").parseDeviceSuccessMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "DeviceSuccess",
                value: t.value
            });
        }
        const n = o("WASmaxInPreKeysFetchMissingPreKeysDeviceErrorMixin").parseFetchMissingPreKeysDeviceErrorMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "FetchMissingPreKeysDeviceError",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "DeviceSuccess",
            "DeviceError"
        ], [
            t,
            n
        ]);
    }
    l.parseDeviceSuccessOrFetchMissingPreKeysErrorMixinGroup = e;
}, 98);