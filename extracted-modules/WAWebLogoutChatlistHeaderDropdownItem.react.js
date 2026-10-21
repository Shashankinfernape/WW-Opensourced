__d("WAWebLogoutChatlistHeaderDropdownItem.react", [
    "fbt",
    "WAWebABProps",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebConfirmLogoutDialogV2.react",
    "WAWebConfirmLogoutModal.react",
    "WAWebForceFlushWamBuffers",
    "WAWebModalManager",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSDialogBridge",
    "WDSIconIcLogout.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(1);
        const t = d;
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const a = s._("Log out");
            const Component = r("WDSMenuItem.react");
            n = <Component Icon={r("WDSIconIcLogout.react")} title={a} onPress={t} testid="mi-logout menu-item" destructive/>;
            e[0] = n;
        } else {
            n = e[0];
        }
        return n;
    }
    function d(e) {
        e?.stopPropagation();
        o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.LOG_OUT);
        o("WAWebForceFlushWamBuffers").forceFlushAllWamAndQplBuffers();
        if (o("WAWebABProps").getABPropConfigValue("wds_web_dialog")) {
            o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebConfirmLogoutDialogV2.react"), {
                checkUnsent: true
            }));
        } else {
            o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebConfirmLogoutModal.react"), {
                checkUnsent: true
            }));
        }
    }
    l.default = c;
}, 226);