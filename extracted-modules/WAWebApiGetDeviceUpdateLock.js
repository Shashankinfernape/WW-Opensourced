__d("WAWebApiGetDeviceUpdateLock", [
    "WAWebModelStorageUtils"
], function(t, n, r, o, a, i, l) {
    function e({ callback, hasAdvAccountTypeChange = false, hasNewNotification, shouldUpdateSyncdMissingKeyDevices = false }) {
        let s = [
            "participant",
            "device-list"
        ];
        if (hasNewNotification) {
            s = [].concat(s, [
                "message",
                "message-association"
            ]);
        }
        if (shouldUpdateSyncdMissingKeyDevices) {
            s = [].concat(s, [
                "missing-keys"
            ]);
        }
        if (hasAdvAccountTypeChange) {
            s = [].concat(s, [
                "contact"
            ]);
        }
        return o("WAWebModelStorageUtils").getStorage().lock(s, function() {
            return callback();
        });
    }
    l.getDeviceUpdateLock = e;
}, 98);