__d("WAWebChatlistHeaderV2.react", [
    "fbt",
    "WAWebActiveAccountInfoContext.react",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatlistHeaderDropdown.react",
    "WAWebCmd",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebFbtCommon",
    "WAWebMessageYourselfMetricUtils",
    "WAWebMobilePlatforms",
    "WAWebNewChatFlowLoadable",
    "WAWebNewChatMenuBarItem.react",
    "WAWebSMBUserJourneyLogger",
    "WAWebTabOrder",
    "WAWebThemeContext",
    "WAWebWaWordmarkIcon.react",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "WDSIconIcMoreVert.react",
    "WDSMenuBarItem.react",
    "cr:16769",
    "cr:23046",
    "react",
    "react-compiler-runtime",
    "useWAWebIsStartupSkeletonVisible",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { memo, useRef, useState } = c;
    const _ = {
        wordmarkColor: {
            color: "x1v5yvga",
            $$css: true
        },
        wordmarkColorDark: {
            color: "x17t9dm2",
            $$css: true
        },
        marginStart8: {
            marginInlineStart: "x150mmf0",
            $$css: true
        }
    };
    function f() {
        return r("WAWebFbtCommon")("WhatsApp");
    }
    function GComponent(e) {
        const t = o("react-compiler-runtime").c(29);
        const { headerRef, isMultiSelectMode, onSelectChatClick, updateActiveNavBarItem } = e;
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = (n("cr:23046") == null ? undefined : n("cr:23046").isWindowsHybridEnabled()) ?? false;
            t[0] = d;
        } else {
            d = t[0];
        }
        const y = d;
        const C = o("WAWebThemeContext").useIsDarkTheme();
        const b = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo();
        const v = useState(true);
        const S = v[0];
        const R = v[1];
        const L = r("useWAWebIsStartupSkeletonVisible")("chatlist_rows");
        const E = !S || L;
        const onNewChat = HComponent;
        let I;
        if (t[1] !== E) {
            const Component = r("WAWebNewChatMenuBarItem.react");
            I = <Component key="btn-new-chat" disabled={E} onNewChat={onNewChat}/>;
            t[1] = E;
            t[2] = I;
        } else {
            I = t[2];
        }
        const T = I;
        let D;
        if (t[3] !== b || t[4] !== isMultiSelectMode || t[5] !== onSelectChatClick || t[6] !== updateActiveNavBarItem) {
            D = u.jsx(r("WAWebChatlistHeaderDropdown.react"), {
                startMultiSelect: onSelectChatClick,
                isMultiSelectMode,
                activeAccountInfo: b,
                updateActiveNavBarItem
            });
            t[3] = b;
            t[4] = isMultiSelectMode;
            t[5] = onSelectChatClick;
            t[6] = updateActiveNavBarItem;
            t[7] = D;
        } else {
            D = t[7];
        }
        const wdsMenuToRender = D;
        let $;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            $ = s._("Menu");
            t[8] = $;
        } else {
            $ = t[8];
        }
        const P = E ? undefined : o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER;
        let N;
        if (t[9] !== E || t[10] !== wdsMenuToRender || t[11] !== P) {
            N = u.jsx(r("WDSMenuBarItem.react"), {
                testid: "menu-bar-menu",
                icon: r("WDSIconIcMoreVert.react"),
                title: $,
                tabOrder: P,
                disabled: E,
                marginInlineXstyle: _.marginStart8,
                wdsMenuToRender
            }, "btn-menu");
            t[9] = E;
            t[10] = wdsMenuToRender;
            t[11] = P;
            t[12] = N;
        } else {
            N = t[12];
        }
        const M = N;
        let w;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            w = y ? null : n("cr:16769") == null ? undefined : n("cr:16769").getTitle();
            t[13] = w;
        } else {
            w = t[13];
        }
        const A = w;
        const F = !y && A == null;
        let O;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            O = !F && {
                title: A ?? s._("Chats")
            };
            t[14] = O;
        } else {
            O = t[14];
        }
        const B = O;
        const WRef = useRef(null);
        let q;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            q = function(t) {
                R(t);
            };
            t[15] = q;
        } else {
            q = t[15];
        }
        const U = q;
        let V;
        if (t[16] !== headerRef) {
            V = function(t) {
                const n = headerRef.current?.parentElement;
                t(n?.getBoundingClientRect());
            };
            t[16] = headerRef;
            t[17] = V;
        } else {
            V = t[17];
        }
        const H = V;
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "chat_list_visibility_change", U);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "get_chat_list_panel_offset", H);
        let menu;
        if (t[18] !== M || t[19] !== T) {
            menu = [
                M,
                T
            ];
            t[18] = M;
            t[19] = T;
            t[20] = menu;
        } else {
            menu = t[20];
        }
        let z;
        if (t[21] !== C) {
            z = F && u.jsx(o("WAWebWaWordmarkIcon.react").WaWordmarkIcon, {
                "aria-hidden": false,
                "aria-label": f(),
                xstyle: C ? _.wordmarkColorDark : _.wordmarkColor
            });
            t[21] = C;
            t[22] = z;
        } else {
            z = t[22];
        }
        let j;
        if (t[23] !== menu || t[24] !== z) {
            j = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
                ref: WRef
            }, B, {
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
                menu,
                focusBackOrCancel: true,
                children: z
            }));
            t[23] = menu;
            t[24] = z;
            t[25] = j;
        } else {
            j = t[25];
        }
        let K;
        if (t[26] !== headerRef || t[27] !== j) {
            K = <header data-testid="chatlist-header" ref={headerRef}>{j}</header>;
            t[26] = headerRef;
            t[27] = j;
            t[28] = K;
        } else {
            K = t[28];
        }
        return K;
    }
    function HComponent(e) {
        e?.preventDefault();
        const Component = o("WAWebNewChatFlowLoadable").NewChatFlowLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "new_chat"
        } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>);
        o("WAWebMessageYourselfMetricUtils").UiMessageYourselfNewChatAction.startSession();
        o("WAWebMessageYourselfMetricUtils").UiMessageYourselfNewChatAction.newChatPressed();
        if (o("WAWebMobilePlatforms").isSMB()) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
                featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_HOME,
                userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
                entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
                userActionTarget: "new_chat_button"
            });
        }
    }
    const y = memo(GComponent);
    l.WAWebChatlistHeaderV2 = y;
}, 226);