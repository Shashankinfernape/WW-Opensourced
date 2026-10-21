__d("WAWebWindowsArchivedChatsNavBarItem.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebArchivedFlowLoadable",
    "WAWebCountRenderingUtils",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSIconIcArchive.react",
    "WDSIconIcArchiveFilled.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebArchivedChatsActivityIndicator"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(11);
        const { activeNavBarItem, updateActiveNavBarItem } = e;
        const l = o("useWAWebArchivedChatsActivityIndicator").useArchivedChatsActivityIndicator();
        const l_unreadCount = l.unreadCount;
        const d = activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Archived;
        let m;
        if (t[0] !== d || t[1] !== updateActiveNavBarItem) {
            m = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (!d) {
                        const Component = o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable;
                        const e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                            descriptorType: "archived"
                        } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>, {
                            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                            transition: "pop-drawer-fast",
                            focusOnUnMount: true
                        });
                        if (e) {
                            updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Archived);
                            o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.ARCHIVED);
                        }
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[0] = d;
            t[1] = updateActiveNavBarItem;
            t[2] = m;
        } else {
            m = t[2];
        }
        const p = m;
        let _;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("Archived");
            t[3] = _;
        } else {
            _ = t[3];
        }
        const f = _;
        const g = r(d ? "WDSIconIcArchiveFilled.react" : "WDSIconIcArchive.react");
        let h;
        if (t[4] !== l_unreadCount) {
            h = l_unreadCount > 0 ? {
                count: o("WAWebCountRenderingUtils").renderCount(l_unreadCount, 100, "unread_message"),
                border: true,
                size: "small"
            } : undefined;
            t[4] = l_unreadCount;
            t[5] = h;
        } else {
            h = t[5];
        }
        let y;
        if (t[6] !== p || t[7] !== g || t[8] !== d || t[9] !== h) {
            const Component = r("WDSMenuBarItem.react");
            y = <Component icon={g} title={f} testid="navbar-item-archived" isActive={d} onClick={p} activityIndicator={h} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
            t[6] = p;
            t[7] = g;
            t[8] = d;
            t[9] = h;
            t[10] = y;
        } else {
            y = t[10];
        }
        return y;
    }
    l.default = c;
}, 226);