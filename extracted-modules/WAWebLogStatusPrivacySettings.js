__d("WAWebLogStatusPrivacySettings", [
    "WAWebStatusPrivacySettingsWamEvent",
    "WAWebUserPrefsStatusType",
    "WAWebWamEnumSetting",
    "WAWebWamEnumStatusPrivacySettingsAction",
    "WAWebWamEnumStatusPrivacySettingsView",
    "WAWebWamEnumStatusPrivacySurface"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        new (o("WAWebStatusPrivacySettingsWamEvent")).StatusPrivacySettingsWamEvent({
            statusPrivacySettingsAction: e.statusPrivacySettingsAction,
            statusPrivacySettingsView: o("WAWebWamEnumStatusPrivacySettingsView").STATUS_PRIVACY_SETTINGS_VIEW.SETTINGS_BOTTOM_SHEET,
            statusPrivacySurface: e.statusPrivacySurface,
            setting: e.setting != null ? s(e.setting) : undefined,
            previousSetting: e.previousSetting != null ? s(e.previousSetting) : undefined,
            selectedListSize: e.selectedListSize,
            allowResharing: e.allowResharing
        }).commit();
    }
    function s(e) {
        if (e === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact) {
            return o("WAWebWamEnumSetting").SETTING.ALL_CONTACTS;
        }
        if (e === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList) {
            return o("WAWebWamEnumSetting").SETTING.ALL_CONTACTS_EXCEPT;
        }
        if (e === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList) {
            return o("WAWebWamEnumSetting").SETTING.ONLY_SHARE_WITH_CONTACTS;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    l.STATUS_PRIVACY_SETTINGS_ACTION = o("WAWebWamEnumStatusPrivacySettingsAction").STATUS_PRIVACY_SETTINGS_ACTION;
    l.STATUS_PRIVACY_SURFACE = o("WAWebWamEnumStatusPrivacySurface").STATUS_PRIVACY_SURFACE;
    l.logStatusPrivacySettingsEvent = e;
}, 98);