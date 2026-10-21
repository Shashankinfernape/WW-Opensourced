__d("WAWebPrimaryDeviceCapabilities", [
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 0;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const n = `["${o("WAWebSyncdConst").Actions.DeviceCapabilities}","${o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user}:${e}@s.whatsapp.net"]`;
            const r = yield o("WAWebSyncdDb").getSyncAction(n);
            if (r?.binarySyncData == null) {
                return null;
            }
            const a = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, r.binarySyncData).value?.deviceCapabilities;
            return a;
        });
        return u.apply(this, arguments);
    }
    l.getPrimaryDeviceCapabilities = s;
}, 98);