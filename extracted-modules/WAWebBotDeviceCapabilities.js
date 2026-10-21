__d("WAWebBotDeviceCapabilities", [
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield u();
            return e === o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.INFRA || e === o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.FULL;
        });
        return s.apply(this, arguments);
    }
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const n = `["${o("WAWebSyncdConst").Actions.DeviceCapabilities}","${o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user}:0@s.whatsapp.net"]`;
            const r = yield o("WAWebSyncdDb").getSyncAction(n);
            if (r?.binarySyncData == null) {
                return o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.NONE;
            }
            const a = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, r.binarySyncData).value?.deviceCapabilities?.aiThread?.supportLevel ?? o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.NONE;
            return a;
        });
        return c.apply(this, arguments);
    }
    l.primaryHasAiThreadSupport = e;
}, 98);