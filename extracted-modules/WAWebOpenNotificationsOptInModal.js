__d("WAWebOpenNotificationsOptInModal", [
    "$InternalEnum",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebDialogEventLogger",
    "WAWebModalManager",
    "WAWebNotificationsModalVariant",
    "WAWebNotificationsOptInModalController",
    "WAWebNotificationsOptInModalLoadable",
    "WAWebUserPrefsNotifications",
    "WAWebWamEnumDialogNameType",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = n("$InternalEnum")({
        OPTED_IN: "opted_in",
        DECLINED: "declined"
    });
    function c() {
        o("WAWebUserPrefsNotifications").setWebNotificationsBBStatus({
            isDismissed: true,
            lastDismissTime: o("WATimeUtils").unixTime()
        });
    }
    function d(e, copy, n) {
        const dialogName = copy === o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.PostLoad || copy === o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.MissedMessages ? o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.NOTIFICATION_MESSAGE_OPT_IN : copy === o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.MissedCall ? o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.NOTIFICATION_CALL_OPT_IN : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${copy}`);
        })();
        const Component = o("WAWebNotificationsOptInModalLoadable").NotificationsOptInModalLoadable;
        o("WAWebModalManager").ModalManager.open(<Component copy={copy} missedCount={n?.missedCount} onAllow={function() {
            r("WAWebDialogEventLogger")({
                dialogName,
                source: u.OPTED_IN
            });
            if (!(n == null || n.onModalResolved == null)) {
                n.onModalResolved();
            }
            o("WAWebNotificationsOptInModalController").requestNotificationsPermission(e, {
                showGuidePopup: o("WAWebABProps").getABPropConfigValue("wa_web_browser_notifications_popup_guide"),
                onPermissionResult: n?.onPermissionResult
            });
        }} onDismiss={function() {
            r("WAWebDialogEventLogger")({
                dialogName,
                source: u.DECLINED
            });
            if (!(n == null || n.onModalResolved == null)) {
                n.onModalResolved();
            }
            c();
        }}/>);
    }
    l.openNotificationsOptInModal = d;
}, 98);