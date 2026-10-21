__d("WAWebSettings", [
    "fbt",
    "$InternalEnum",
    "WAWebABProps",
    "WAWebBizToolsGatingUtils",
    "WAWebCTWAGatingUtils",
    "WAWebCurrentUser",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l, s) {
    const e = n("$InternalEnum").Mirrored([
        "Settings",
        "BusinessTools",
        "Wallpaper",
        "RequestAccountInfoSettings",
        "Blocked",
        "Profile",
        "Notifications",
        "TwoFactorUpdateEmail",
        "TwoFactorUpdatePin",
        "TwoFactorRegistration",
        "TwoFactorDisable",
        "MediaAutoDownload",
        "MediaQuality",
        "Security",
        "PrivacyVisibilityEdit",
        "PrivacySettings",
        "DefaultEphemerality",
        "UserEphemerality",
        "DesktopSettings",
        "Help",
        "Bugnub",
        "DownloadLogs",
        "Developer",
        "DeveloperABProps",
        "DeveloperGroupABProps",
        "DeveloperInfraSettings",
        "DeveloperWWWSettings",
        "ScreenLock",
        "DataSharing",
        "DeleteAccount"
    ]);
    function u(t) {
        switch(t){
            case e.BusinessTools:
                return o("WAWebBizToolsGatingUtils").isBizToolsDrawerEnabled();
            case e.DataSharing:
                return o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled() === true;
            case e.PrivacySettings:
                return true;
            case e.Security:
                return true;
            case e.Wallpaper:
                return true;
            case e.MediaAutoDownload:
                return true;
            case e.RequestAccountInfoSettings:
                return true;
            case e.DesktopSettings:
                return false;
            case e.Help:
                return true;
            case e.DeleteAccount:
                return true;
            case e.Bugnub:
                return r("gkx")("9092");
            case e.DownloadLogs:
                return o("WAWebCurrentUser").isEmployee() || o("WAWebABProps").getABPropConfigValue("enable_web_log_download");
            case e.Developer:
            case e.DeveloperABProps:
            case e.DeveloperGroupABProps:
            case e.DeveloperInfraSettings:
            case e.DeveloperWWWSettings:
                return r("gkx")("16539");
            case e.Notifications:
                return true;
            default:
                return false;
        }
    }
    function c(t) {
        switch(t){
            case e.DataSharing:
                {
                    const n = s._("Your customers' activity");
                    return n;
                }
            case e.BusinessTools:
                return s._("Business tools");
            case e.Wallpaper:
                return s._("Chat wallpaper");
            case e.RequestAccountInfoSettings:
                return s._("Request account info");
            case e.Notifications:
                return s._("Notifications");
            case e.MediaAutoDownload:
                return s._("Media auto-download");
            case e.MediaQuality:
                return s._("Media upload quality");
            case e.Security:
                return s._("Security");
            case e.PrivacySettings:
                return s._("Privacy");
            case e.DesktopSettings:
                return s._("Desktop settings");
            case e.Help:
                return s._("Help");
            case e.Bugnub:
                return "Report a bug (internal)";
            case e.DownloadLogs:
                return "Download logs";
            case e.Developer:
                return "Developer";
            case e.DeveloperABProps:
                return "AB Props";
            case e.DeveloperGroupABProps:
                return "Group AB Props";
            case e.DeveloperInfraSettings:
                return "Infra Settings";
            case e.DeveloperWWWSettings:
                return "Canonical";
            case e.DeleteAccount:
                return "Delete Account";
            default:
                throw r("err")("Unsupported setting.");
        }
    }
    l.SettingsSteps = e;
    l.isSettingAvailable = u;
    l.getLabel = c;
}, 226);