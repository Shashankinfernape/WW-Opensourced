__d("WAWebStarredChatlistHeaderDropdownItem.react", [
    "fbt",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebStarredDrawerLoadable",
    "WAWebStarredMsgCollection",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSIconIcGrade.react",
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
            const a = s._("Starred messages");
            const Component = r("WDSMenuItem.react");
            n = <Component Icon={r("WDSIconIcGrade.react")} title={a} onPress={t} testid="mi-starred menu-item"/>;
            e[0] = n;
        } else {
            n = e[0];
        }
        return n;
    }
    function d(e) {
        e?.stopPropagation();
        const Component = o("WAWebStarredDrawerLoadable").StarredDrawerLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component starredMsgs={o("WAWebStarredMsgCollection").AllStarredMsgsCollection} onClose={o("WAWebDrawerManager").closeDrawerLeft} headerType={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL}/>, {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
        o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.STARRED);
    }
    l.default = c;
}, 226);