__d("WAWebBizAiSettingsSyncDeviceCapabilityCommon", [
    "WAWebUserPrefsDeviceCapabilities"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebUserPrefsDeviceCapabilities").getPrimaryDeviceCapabilitiesFromLocalStorage().bizAiSettingsSync?.handoffRemovalTimingEnabled === true;
    }
    l.getPrimarySupportsBizAiSettingsSync = e;
}, 98);