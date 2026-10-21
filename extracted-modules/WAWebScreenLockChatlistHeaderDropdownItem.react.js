__d("WAWebScreenLockChatlistHeaderDropdownItem.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebConfirmPopup.react",
    "WAWebDrawerManager",
    "WAWebFbtCommon",
    "WAWebKeyboardTabUtils",
    "WAWebLockScreenResolver",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebSettingsConst",
    "WAWebSettingsFlowLoadable",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSIconIcLock.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(3);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = o("WAWebUserPrefsScreenLock").getScreenLockEnabled();
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            a = function(t) {
                t?.stopPropagation();
                o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.APP_LOCK);
                if (!n) {
                    const Component = o("WAWebSettingsFlowLoadable").SettingsFlowLoadable;
                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                        descriptorType: "settings",
                        initialStep: o("WAWebSettingsConst").SettingsSteps.ScreenLock
                    } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft} initialStep={o("WAWebSettingsConst").SettingsSteps.ScreenLock}/>, {
                        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                    });
                    return;
                }
                const e = o("WAWebMsgCollection").MsgCollection.hasUnsentMessages();
                if (e) {
                    const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                    o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
                        surface: "unknown",
                        viewName: "screen-lock"
                    }} title={s._("Lock app?")} onOK={d} okText={s._("Lock")} onCancel={o("WAWebModalManager").closeModalManager} cancelText={r("WAWebFbtCommon")("Cancel")}>{s._("Some of your messages are still sending.")}</Component>);
                } else {
                    o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow();
                }
            };
            e[1] = a;
        } else {
            a = e[1];
        }
        const i = a;
        let l;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            const c = n ? s._("Lock app") : s._("App lock");
            const Component = r("WDSMenuItem.react");
            l = <Component title={c} onPress={i} testid="mi-screen-lock menu-item" Icon={r("WDSIconIcLock.react")}/>;
            e[2] = l;
        } else {
            l = e[2];
        }
        return l;
    }
    function d() {
        o("WAWebLockScreenResolver").lockScreenAndTriggerUnlockFlow();
    }
    l.default = c;
}, 226);