__d("WAWebDeviceCapabilitiesBootstrap", [
    "WALogger",
    "WAWebABProps",
    "WAWebBizBroadcastsDeviceCapability",
    "WAWebDeviceCapabilitiesSync",
    "WAWebDeviceCapabilitiesV2Sync",
    "WAWebNewsletterChatsMigrationForwarder",
    "WAWebPrimaryDeviceCapabilities",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebUserPrefsDeviceCapabilities",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u = false;
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!u) {
                u = true;
                const t = {
                    chatLockSupportLevel: o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$ChatLockSupportLevel.FULL,
                    aiThread: {
                        supportLevel: o("WAWebABProps").getABPropConfigValue("ai_chat_thread_capability_enabled") ? o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.INFRA : o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.NONE
                    }
                };
                const n = o("WAWebUserPrefsDeviceCapabilities").mergeDeviceCapabilitiesToStorage(t, "self");
                yield o("WAWebBizBroadcastsDeviceCapability").bootstrapBizBroadcastPrimaryCapability();
                yield m();
                yield r("WAWebDeviceCapabilitiesSync").sendMutation(n);
                if (o("WAWebABProps").getABPropConfigValue("device_capabilities_v2_sync_enabled")) {
                    try {
                        yield r("WAWebDeviceCapabilitiesV2Sync").sendMutation(n);
                    } catch (error) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[bootstrapDeviceCapabilities] v2 dual-write failed; v1 record is unaffected"
                        ]))).catching(r("getErrorSafe")(error));
                    }
                }
            }
        });
        return d.apply(this, arguments);
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebPrimaryDeviceCapabilities").getPrimaryDeviceCapabilities();
            if (e == null) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrapPrimaryDeviceCapabilities] primary caps null"
                ])));
                return;
            }
            const t = o("WAWebUserPrefsDeviceCapabilities").mapProtobufToAllDeviceCapabilities(e);
            o("WAWebUserPrefsDeviceCapabilities").mergeDeviceCapabilitiesToStorage(t, "primary");
            yield o("WAWebNewsletterChatsMigrationForwarder").forwardPrimaryNewsletterChatsMigration(e);
        });
        return p.apply(this, arguments);
    }
    l.bootstrapDeviceCapabilities = c;
}, 98);