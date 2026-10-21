__d("WAWebHandlePrivacySettingsNotification", [
    "WAWebBackendApi"
], function(t, n, r, o, a, i, l) {
    function e(smbDataSharingSettingValue, smbDataSharingSettingVersion) {
        o("WAWebBackendApi").frontendFireAndForget("smbDataSharingSettingUpdate", {
            smbDataSharingSettingValue,
            smbDataSharingSettingVersion
        });
    }
    l.handleSmbDataSharingSettingNotification = e;
}, 98);