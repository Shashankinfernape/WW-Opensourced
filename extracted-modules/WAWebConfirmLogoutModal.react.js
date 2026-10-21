__d("WAWebConfirmLogoutModal.react", [
    "fbt",
    "$InternalEnum",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebDialogEventLogger",
    "WAWebDrawerManager",
    "WAWebEligibilityLogging",
    "WAWebFbtAppName",
    "WAWebKeyboardTabUtils",
    "WAWebLockScreenResolver",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebScreenLockDrawerLoadable",
    "WAWebSocketModel",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumDialogNameType",
    "WDSText.react",
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
    const d = function() {
        r("WAWebDialogEventLogger")({
            dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
            source: c.APP_LOCK
        });
        o("WAWebModalManager").ModalManager.close();
        if (o("WAWebUserPrefsScreenLock").getScreenLockEnabled()) {
            o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow();
        } else {
            const Component = o("WAWebScreenLockDrawerLoadable").ScreenLockDrawerLoadable;
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component onCancel={function() {
                o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
            }}/>, {
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
            });
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(16);
        const e_checkUnsent = e.checkUnsent;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = o("WAWebEligibilityLogging").eligibilityLogger.getValue("wa_web_app_lock_upsell");
            t[0] = a;
        } else {
            a = t[0];
        }
        const splitLayout = a;
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
        } else if (splitLayout) {
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
            h = o("WAWebUserPrefsScreenLock").getScreenLockEnabled() || splitLayout ? null : s._("You can turn on {=m2} instead.", [
                s._implicitParam("=m2", <Component onClick={d}>{s._("app lock")}</Component>)
            ]);
            t[5] = h;
        } else {
            h = t[5];
        }
        const y = h;
        let C;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            C = splitLayout ? {
                text: s._("Lock app"),
                onClick: d
            } : null;
            t[6] = C;
        } else {
            C = t[6];
        }
        const b = C;
        let v;
        let S;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            v = {
                surface: "unknown",
                viewName: "confirm-logout"
            };
            S = s._("Log out?");
            t[7] = v;
            t[8] = S;
        } else {
            v = t[7];
            S = t[8];
        }
        let R;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Log out");
            t[9] = R;
        } else {
            R = t[9];
        }
        let L;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            L = s._("Cancel");
            t[10] = L;
        } else {
            L = t[10];
        }
        let E;
        if (t[11] !== l) {
            const Component = r("WDSText.react");
            E = splitLayout ? <Component type="Body1" colorName="contentDeemphasized">{l}</Component> : l;
            t[11] = l;
            t[12] = E;
        } else {
            E = t[12];
        }
        let k;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            k = <br/>;
            t[13] = k;
        } else {
            k = t[13];
        }
        let I;
        if (t[14] !== E) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            I = <Component tsNavigationData={v} title={S} onOK={_} okText={R} okButtonType="solid-warning" onCancel={p} cancelText={L} extraButtonProps={b} splitLayout={splitLayout}>{E}{k}{y}</Component>;
            t[14] = E;
            t[15] = I;
        } else {
            I = t[15];
        }
        return I;
    }
    function p() {
        r("WAWebDialogEventLogger")({
            dialogName: o("WAWebWamEnumDialogNameType").DIALOG_NAME_TYPE.LOGOUT,
            source: c.CANCEL
        });
        o("WAWebModalManager").ModalManager.close();
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