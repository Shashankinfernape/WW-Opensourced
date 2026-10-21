__d("WAWebListsChatlistHeaderDropdownItem.react", [
    "fbt",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebDrawerManager",
    "WAWebLabelFlowLoadable",
    "WAWebMobilePlatforms",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSIconIcSwitchAccount.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(1);
        if (!o("WAWebMobilePlatforms").isSMB()) {
            return null;
        }
        const t = d;
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSMenuItem.react");
            n = <Component testid="mi-lists menu-item" Icon={r("WDSIconIcSwitchAccount.react")} onPress={t} title={s._("Lists")}/>;
            e[0] = n;
        } else {
            n = e[0];
        }
        return n;
    }
    function d(e) {
        e?.stopPropagation();
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
            isInitialStep: true,
            entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
        }));
        o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.LABELS);
    }
    l.default = c;
}, 226);