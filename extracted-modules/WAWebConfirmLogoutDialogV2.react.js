__d("WAWebConfirmLogoutDialogV2.react", [
    "fbt",
    "$InternalEnum",
    "WAWebClickableLink.react",
    "WAWebDialogEventLogger",
    "WAWebDrawerManager",
    "WAWebEligibilityLogging",
    "WAWebFbtAppName",
    "WAWebKeyboardTabUtils",
    "WAWebLockScreenResolver",
    "WAWebMsgCollection",
    "WAWebScreenLockDrawerLoadable",
    "WAWebSocketModel",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumDialogNameType",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = n("$InternalEnum")({
        LOGOUT: "logout",
        CANCEL: "cancel",
        APP_LOCK: "app_lock"
    });
    function d() {
        r("WAWebDialogEventLogger")({
            dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
            source: c.APP_LOCK
        });
        o("WDSDialogBridge").closeWDSDialog();
        if (o("WAWebUserPrefsScreenLock").getScreenLockEnabled()) {
            o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow();
        } else {
            const Component = o("WAWebScreenLockDrawerLoadable").ScreenLockDrawerLoadable;
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component onCancel={o("WAWebDrawerManager").closeDrawerLeft}/>, {
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
            });
        }
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(13);
        const e_checkUnsent = e.checkUnsent;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = o("WAWebEligibilityLogging").eligibilityLogger.getValue("wa_web_app_lock_upsell");
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (e_checkUnsent && o("WAWebMsgCollection").MsgCollection.hasUnsentMessages()) {
            let c;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                c = s._("Some of your messages are still sending.");
                t[1] = c;
            } else {
                c = t[1];
            }
            l = c;
        } else if (i) {
            if (o("WAWebUserPrefsScreenLock").getScreenLockEnabled()) {
                let m;
                if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                    const Component = o("WAWebFbtAppName").WAWebAppShortNameWithoutWindows;
                    m = s._("App lock will reset if you log out. Do you want to lock {=m2} instead?", [
                        s._implicitParam("=m2", <Component>{s._("")}</Component>)
                    ]);
                    t[2] = m;
                } else {
                    m = t[2];
                }
                l = m;
            } else {
                let f;
                if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                    const Component = o("WAWebFbtAppName").WAWebAppShortNameWithoutWindows;
                    f = s._("You can lock {=m1} with a password instead so it's easier to access again later.", [
                        s._implicitParam("=m1", <Component>{s._("")}</Component>)
                    ]);
                    t[3] = f;
                } else {
                    f = t[3];
                }
                l = f;
            }
        } else {
            let g;
            if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                g = s._("Are you sure you want to log out?");
                t[4] = g;
            } else {
                g = t[4];
            }
            l = g;
        }
        let h;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WAWebClickableLink.react");
            h = o("WAWebUserPrefsScreenLock").getScreenLockEnabled() || i ? null : s._("You can turn on {=m2} instead.", [
                s._implicitParam("=m2", <Component onClick={d}>{s._("app lock")}</Component>)
            ]);
            t[5] = h;
        } else {
            h = t[5];
        }
        const y = h;
        let C;
        if (t[6] !== l) {
            C = y != null ? s._("{body}{break}{lockScreenLink}", [
                s._param("body", l),
                s._param("break", <br/>),
                s._param("lockScreenLink", y)
            ]) : l;
            t[6] = l;
            t[7] = C;
        } else {
            C = t[7];
        }
        const b = C;
        const v = _;
        const S = p;
        let R;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Log out?");
            t[8] = R;
        } else {
            R = t[8];
        }
        let L;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            L = s._("Log out");
            t[9] = L;
        } else {
            L = t[9];
        }
        let E;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            E = i ? s._("Lock app") : undefined;
            t[10] = E;
        } else {
            E = t[10];
        }
        let k;
        if (t[11] !== b) {
            const Component = r("WDSConfirmDialog.react");
            k = <Component title={R} description={b} confirmLabel={L} destructive onConfirm={v} onDismiss={S} secondaryLabel={E} onSecondary={i ? d : undefined} open/>;
            t[11] = b;
            t[12] = k;
        } else {
            k = t[12];
        }
        return k;
    }
    function p() {
        r("WAWebDialogEventLogger")({
            dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
            source: c.CANCEL
        });
        o("WDSDialogBridge").closeWDSDialog();
    }
    function _() {
        r("WAWebDialogEventLogger")({
            dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
            source: c.LOGOUT
        });
        o("WAWebSocketModel").Socket.logout();
    }
    l.default = m;
}, 226);