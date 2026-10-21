__d("WAWebSubscribePushManagerActionUtils", [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackgroundSyncReporter",
    "WAWebFbtCommon",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebPushNotificationsGatingUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsNotifications",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumOnboardSources",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    function c() {
        let e = o("WAWebMuteCollection").MuteCollection.getGlobalOfflineNotifications();
        e = f(e);
        return e;
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = o("WAWebUserPrefsScreenLock").getScreenLockEnabled();
            const r = e && window.Notification?.permission === o("WAWebNotificationConstants").PERMISSION_ALLOWED && o("WAWebPushNotificationsGatingUtils").canEnableOfflineNotifications() && !n;
            return r;
        });
        return m.apply(this, arguments);
    }
    function p() {
        _();
        return (u || (u = n("Promise"))).resolve();
    }
    function _() {
        const t = r("WAWebFbtCommon")("WhatsApp");
        const n = s._("Syncing messages in the background");
        const a = s._("Syncing messages complete");
        let i;
        if (o("WAWebPushNotificationsGatingUtils").canSupportNotificationActions()) {
            i = s._("Go to app");
        }
        const l = "{name}";
        const u = s._("Incoming voice call from {name}", [
            s._param("name", l)
        ]);
        const c = s._("Incoming video call from {name}", [
            s._param("name", l)
        ]);
        const d = s._("Incoming group voice call from {name}", [
            s._param("name", l)
        ]);
        const m = s._("Incoming group video call from {name}", [
            s._param("name", l)
        ]);
        const p = s._("Open WhatsApp Web to answer this call.");
        const _ = s._("Unknown");
        return o("WAWebUserPrefsGeneral").setOfflineNotificationContent({
            notificationTitle: t.toString(),
            notificationText: n.toString(),
            notificationSyncCompleteText: a.toString(),
            notificationSettingActionText: i?.toString(),
            callNotification1on1AudioTitle: u.toString(),
            callNotification1on1VideoTitle: c.toString(),
            callNotificationGroupAudioTitle: d.toString(),
            callNotificationGroupVideoTitle: m.toString(),
            callNotificationBody: p.toString(),
            callNotificationUnknownCaller: _.toString()
        });
    }
    function f(t) {
        if (!t && window.Notification?.permission === o("WAWebNotificationConstants").PERMISSION_ALLOWED && o("WAWebMuteCollection").MuteCollection.getGlobalNotifications() && o("WAWebUserPrefsNotifications").getOfflineNotificationsEnabledOnce() !== true && o("WAWebABProps").getABPropConfigValue("web_background_sync_v2")) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] Enable background sync for users once"
            ])));
            o("WAWebUserPrefsNotifications").setOfflineNotificationsEnabledOnce();
            o("WAWebMuteCollection").MuteCollection.setGlobalOfflineNotifications(true);
            o("WAWebBackgroundSyncReporter").logBackgroundSyncAdoptionEvent({
                offboardSource: null,
                onboardSource: o("WAWebWamEnumOnboardSources").ONBOARD_SOURCES.AUTO_ENABLE
            });
            return true;
        }
        return t;
    }
    l.isOfflineNotificationsEnabled = c;
    l.shouldSubscribePushManager = d;
    l.updateOfflineNotificationL10nStrings = p;
    l.updateOfflineNotificationL10nStringsForOfflineResume = _;
}, 226);