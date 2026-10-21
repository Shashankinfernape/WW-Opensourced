__d("WAWebBizBroadcastsDeviceCapability", [
    "WAWebBackendApi",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebMobilePlatforms",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = `["${o("WAWebSyncdConst").Actions.DeviceCapabilities}","${o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user}:0@s.whatsapp.net"]`;
            const n = yield o("WAWebSyncdDb").getSyncAction(t);
            if (n?.binarySyncData == null) {
                return null;
            }
            return o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, n.binarySyncData).value?.deviceCapabilities?.businessBroadcast;
        });
        return s.apply(this, arguments);
    }
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield e();
            return !!(t != null && t.importListEnabled);
        });
        return c.apply(this, arguments);
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield e();
            return !!(t != null && t.companionSupportEnabled) && !!(t != null && t.campaignSyncEnabled);
        });
        return m.apply(this, arguments);
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebMobilePlatforms").isSMB()) {
                const t = yield e();
                const n = !!(t != null && t.companionSupportEnabled) && !!(t != null && t.campaignSyncEnabled);
                o("WAWebBizBroadcastDeviceCapabilityCommon").saveBizBroadcastCapabilityToStorage(n);
                o("WAWebBizBroadcastDeviceCapabilityCommon").saveBizBroadcastProCapabilityToStorage(t?.proCompanionSupportEnabled);
                o("WAWebBackendApi").frontendFireAndForget("refreshBizBroadcastProEligibility", {});
                o("WAWebBizBroadcastDeviceCapabilityCommon").saveBizBroadcastRecipientLimitToStorage(t?.recipientLimit);
            }
        });
        return _.apply(this, arguments);
    }
    l.getPrimarySupportsBusinessBroadcastListImport = u;
    l.getPrimarySupportsBusinessBroadcastCompanionAndCampaignSync = d;
    l.bootstrapBizBroadcastPrimaryCapability = p;
}, 98);