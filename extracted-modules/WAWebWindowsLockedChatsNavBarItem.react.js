__d("WAWebWindowsLockedChatsNavBarItem.react", [
    "fbt",
    "WAWebChatLockCodeModal.react",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebLockedChatsDrawer.react",
    "WAWebNavBarTypes",
    "WAWebWamEnumActionEntryPoint",
    "WAWebWamEnumLandingSurface",
    "WAWebWamEnumUnlockEntryPoint",
    "WDSIconWdsIcChatlockOutline.react",
    "WDSIconWdsIcChatlockUnlockedFilled.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(8);
        const { activeNavBarItem, updateActiveNavBarItem } = e;
        const l = activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.LockedChats;
        let c;
        if (t[0] !== l || t[1] !== updateActiveNavBarItem) {
            c = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (!l) {
                        const e = yield o("WAWebChatLockCodeModal.react").waitForChatlockSecretCode({
                            unlockAppOnSuccess: true,
                            entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_LIST,
                            unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_LIST,
                            landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER
                        });
                        if (e) {
                            const t = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(u.jsx(r("WAWebLockedChatsDrawer.react"), {
                                entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_LIST,
                                unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_LIST
                            }), {
                                focusType: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
                                transition: "pop-drawer-fast"
                            });
                            if (t) {
                                updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.LockedChats);
                            }
                        }
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[0] = l;
            t[1] = updateActiveNavBarItem;
            t[2] = c;
        } else {
            c = t[2];
        }
        const d = c;
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Locked chats");
            t[3] = m;
        } else {
            m = t[3];
        }
        const p = m;
        const _ = r(l ? "WDSIconWdsIcChatlockUnlockedFilled.react" : "WDSIconWdsIcChatlockOutline.react");
        let f;
        if (t[4] !== d || t[5] !== _ || t[6] !== l) {
            const Component = r("WDSMenuBarItem.react");
            f = <Component icon={_} title={p} testid="navbar-item-locked" isActive={l} onClick={d} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
            t[4] = d;
            t[5] = _;
            t[6] = l;
            t[7] = f;
        } else {
            f = t[7];
        }
        return f;
    }
    l.default = c;
}, 226);