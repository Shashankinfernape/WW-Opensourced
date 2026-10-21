__d("WAWebBizToolsChatlistHeaderDropdownItem.react", [
    "fbt",
    "WAWebBizToolsFlowLoadable",
    "WAWebBizToolsGatingUtils",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNavBarTypes",
    "WAWebWamEnumBusinessToolsEntryPointType",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSIconIcStore.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_updateActiveNavBarItem = e.updateActiveNavBarItem;
        if (!o("WAWebBizToolsGatingUtils").isBizToolsDrawerEnabled()) {
            return null;
        }
        let a;
        if (t[0] !== e_updateActiveNavBarItem) {
            a = function(t) {
                t?.stopPropagation();
                o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.BUSINESS_TOOLS);
                if (e_updateActiveNavBarItem != null) {
                    e_updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.BizTools);
                }
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, {
                    entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType").BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_CONVERSATIONS
                }), {
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    transition: "pop-drawer-fast"
                });
            };
            t[0] = e_updateActiveNavBarItem;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Business tools");
            t[2] = l;
        } else {
            l = t[2];
        }
        const c = l;
        let d;
        if (t[3] !== i) {
            const Component = r("WDSMenuItem.react");
            d = <Component testid="mi-biz-tools menu-item" Icon={r("WDSIconIcStore.react")} onPress={i} title={c}/>;
            t[3] = i;
            t[4] = d;
        } else {
            d = t[4];
        }
        return d;
    }
    l.default = c;
}, 226);