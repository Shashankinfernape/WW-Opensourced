__d("WAWebBackgroundSyncReporter", [
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumPushNotificationInteractions",
    "WAWebWamEnumWebNotificationSettingType",
    "WAWebWebcBackgroundSyncAdoptionWamEvent",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let pushNotificationInteraction = null;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const r = yield o("WAWebUserPrefsGeneral").getOfflineNotificationEngagement();
            const a = (r?.totalNotifShown ?? 0) > 0;
            const i = (r?.totalNotifTapToOpen ?? 0) > 0;
            if (i) {
                pushNotificationInteraction = o("WAWebWamEnumPushNotificationInteractions").PUSH_NOTIFICATION_INTERACTIONS.CLICKED;
            } else if (a) {
                pushNotificationInteraction = o("WAWebWamEnumPushNotificationInteractions").PUSH_NOTIFICATION_INTERACTIONS.SHOWN;
            }
        });
        return u.apply(this, arguments);
    }
    function c({ offboardSource, onboardSource }) {
        let UNKNOWN = o("WAWebWamEnumWebNotificationSettingType").WEB_NOTIFICATION_SETTING_TYPE.UNKNOWN;
        if (window.Notification?.permission === "granted") {
            UNKNOWN = o("WAWebWamEnumWebNotificationSettingType").WEB_NOTIFICATION_SETTING_TYPE.ALLOWED;
        } else if (window.Notification?.permission === "denied") {
            UNKNOWN = o("WAWebWamEnumWebNotificationSettingType").WEB_NOTIFICATION_SETTING_TYPE.BLOCKED;
        }
        const s = new (o("WAWebWebcBackgroundSyncAdoptionWamEvent")).WebcBackgroundSyncAdoptionWamEvent;
        s.set({
            offboardSource,
            onboardSource,
            pushNotificationInteraction,
            webOsNotificationSetting: UNKNOWN
        });
        s.commit();
    }
    l.setPushNotificationInteractionStatus = s;
    l.logBackgroundSyncAdoptionEvent = c;
}, 98);