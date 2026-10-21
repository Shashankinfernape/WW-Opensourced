__d("WAWebNotificationsOptInModalController", [
    "WAWebGuidePopup.react",
    "WAWebModalManager",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSubscribePushManagerAction",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e, t) {
        let r;
        const a = window.Notification?.permission;
        const i = (r = t?.showGuidePopup) == null || r ? c(e) : null;
        window.Notification.requestPermission(function(n) {
            let r;
            const l = a === o("WAWebNotificationConstants").PERMISSION_DENIED && o("WAWebPushNotificationsGatingUtils").canShowNotificationsBanner(a, e);
            i?.({
                close: !l
            });
            if (!(t == null || t.onPermissionResult == null)) {
                t.onPermissionResult(n);
            }
            if (n === o("WAWebNotificationConstants").PERMISSION_ALLOWED && ((r = t?.enableInAppSettingsOnGrant) == null || r)) {
                d();
            }
        });
    }
    function c(enableNewBannerLogic) {
        let t;
        const Component = (t = o("WAWebGuidePopup.react")).GuidePopup;
        const n = <Component messaging={t.Messaging.NOTIFICATIONS} onConfirm={t.guideConfirm} onCancel={t.notificationGuideLearnMore} type={t.GuidePopupType.GUIDE_ALLOW} enableNewBannerLogic={enableNewBannerLogic} featureSurface={t.FeatureSurface.NOTIFICATION}/>;
        let r = n;
        function a() {
            r = null;
            o("WAWebModalManager").ModalManager.off("open_modal", i);
            o("WAWebModalManager").ModalManager.off("close_modal", a);
        }
        function i(e) {
            if (e !== r) {
                a();
            }
        }
        o("WAWebModalManager").ModalManager.on("open_modal", i);
        o("WAWebModalManager").ModalManager.on("close_modal", a);
        o("WAWebModalManager").ModalManager.open(n);
        return function({ close }) {
            const n = r != null;
            a();
            if (n && close) {
                o("WAWebModalManager").ModalManager.close();
            }
        };
    }
    function d() {
        const e = o("WAWebMuteCollection").MuteCollection.getGlobalNotifications();
        if (!e) {
            o("WAWebMuteCollection").MuteCollection.setAllNotificationsAndReactions(true);
        }
        if (o("WAWebPushNotificationsGatingUtils").canEnableOfflineNotifications()) {
            const t = o("WAWebMuteCollection").MuteCollection.getGlobalOfflineNotifications();
            if (!t) {
                o("WAWebSubscribePushManagerAction").handleOfflineNotifications(true);
                o("WAWebMuteCollection").MuteCollection.setGlobalOfflineNotifications(true);
            }
        }
    }
    l.requestNotificationsPermission = u;
    l.openOwnedGuidePopup = c;
}, 98);