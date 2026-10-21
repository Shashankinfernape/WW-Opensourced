__d("WAWebChatLockedEntryPoint.react", [
    "fbt",
    "WAWebChatLockCodeModal.react",
    "WAWebChatlistPanelDrawerButton.react",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebLockedChatsDrawer.react",
    "WAWebTabOrder",
    "WAWebWamEnumActionEntryPoint",
    "WAWebWamEnumLandingSurface",
    "WAWebWamEnumUnlockEntryPoint",
    "WDSIconWdsIcChatlockOutline.react",
    "WDSIconWdsIcChatlockUnlockedOutline.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebChatLockEvents",
    "useWAWebChatLockRestriction",
    "useWAWebChatLockSettings"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(10);
        const e_onOpen = e.onOpen;
        const i = o("useWAWebChatLockEvents").useChatLockEvents();
        const l = o("useWAWebChatLockSettings").useChatLockSettings();
        const l_hideLockedChats = l.hideLockedChats;
        const condition = l_hideLockedChats ? "always" : "bypass";
        let m;
        if (t[0] !== condition) {
            m = {
                id: "chatlist-entry-point",
                condition,
                entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.UNKNOWN,
                landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER,
                unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_LIST
            };
            t[0] = condition;
            t[1] = m;
        } else {
            m = t[1];
        }
        o("useWAWebChatLockRestriction").useChatLockRestriction(m);
        let p;
        if (i) {
            p = r("WDSIconWdsIcChatlockUnlockedOutline.react");
        } else {
            p = r("WDSIconWdsIcChatlockOutline.react");
        }
        let _;
        if (t[2] !== p) {
            _ = u.jsx(p, {});
            t[2] = p;
            t[3] = _;
        } else {
            _ = t[3];
        }
        const f = _;
        let g;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("Locked chats");
            t[4] = g;
        } else {
            g = t[4];
        }
        const h = g;
        let y;
        if (t[5] !== e_onOpen) {
            y = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = yield o("WAWebChatLockCodeModal.react").waitForChatlockSecretCode({
                        unlockAppOnSuccess: true,
                        landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER,
                        unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_LIST,
                        entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_LIST
                    });
                    if (e) {
                        const Component = r("WAWebLockedChatsDrawer.react");
                        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component onClose={o("WAWebDrawerManager").closeDrawerLeft} entryPoint={o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_LIST} unlockEntryPoint={o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_LIST}/>, {
                            focusType: o("WAWebKeyboardTabUtils").FocusType.CUSTOM
                        });
                        if (e_onOpen != null) {
                            e_onOpen();
                        }
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[5] = e_onOpen;
            t[6] = y;
        } else {
            y = t[6];
        }
        const C = y;
        let b;
        if (t[7] !== C || t[8] !== f) {
            const Component = r("WAWebChatlistPanelDrawerButton.react");
            b = <Component dataTab={o("WAWebTabOrder").TAB_ORDER.ARCHIVED_ENTRY_POINT} onClick={C} primary={h} icon={f} ariaLabel={h}/>;
            t[7] = C;
            t[8] = f;
            t[9] = b;
        } else {
            b = t[9];
        }
        return b;
    }
    l.default = c;
}, 226);