__d("WAWebChatsNavBarItem.react", [
    "fbt",
    "WAWebAppRootInteractionContext.react",
    "WAWebCountRenderingUtils",
    "WAWebDrawerManager",
    "WAWebInteractionTracePolicy",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebOpenLastActiveChatAction",
    "WAWebSideNavButtonsActivityModel",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSIconWdsIcChat.react",
    "WDSIconWdsIcChatFilled.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebChatsActivityIndicator",
    "useWAWebNavigateToRouterPage"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(15);
        const { activeNavBarItem, updateActiveNavBarItem } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                onNavigationTransitioning: o("WAWebOpenLastActiveChatAction").openLastActiveChatIfNotLocked
            };
            t[0] = l;
        } else {
            l = t[0];
        }
        const c = r("useWAWebNavigateToRouterPage")(o("WAWebNavBarTypes").NavBarItems.Chats, l);
        let d;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                manualHold: false,
                shouldUseNavigationAsInteraction: true,
                tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CHATS
            };
            t[1] = d;
        } else {
            d = t[1];
        }
        const m = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(d);
        const m_startInteraction = m.startInteraction;
        let _;
        if (t[2] !== activeNavBarItem || t[3] !== c || t[4] !== m_startInteraction || t[5] !== updateActiveNavBarItem) {
            _ = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
                    if (e && (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), activeNavBarItem !== o("WAWebNavBarTypes").NavBarItems.Chats)) {
                        m_startInteraction();
                        updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Chats);
                        o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.CHATS);
                        o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Chats);
                        if (c != null) {
                            c();
                            return;
                        }
                        o("WAWebOpenLastActiveChatAction").openLastActiveChatIfNotLocked();
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[2] = activeNavBarItem;
            t[3] = c;
            t[4] = m_startInteraction;
            t[5] = updateActiveNavBarItem;
            t[6] = _;
        } else {
            _ = t[6];
        }
        const f = _;
        const g = activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Chats;
        const h = r(g ? "WDSIconWdsIcChatFilled.react" : "WDSIconWdsIcChat.react");
        const y = o("useWAWebChatsActivityIndicator").useChatsActivityIndicator();
        const y_unreadChatCount = y.unreadChatCount;
        let b;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            b = s._("Chats");
            t[7] = b;
        } else {
            b = t[7];
        }
        const v = b;
        let S;
        if (t[8] !== y_unreadChatCount) {
            S = y_unreadChatCount > 0 ? {
                count: o("WAWebCountRenderingUtils").renderCount(y_unreadChatCount, 100, "unread_message"),
                border: true,
                size: "small"
            } : undefined;
            t[8] = y_unreadChatCount;
            t[9] = S;
        } else {
            S = t[9];
        }
        let R;
        if (t[10] !== h || t[11] !== f || t[12] !== g || t[13] !== S) {
            const Component = r("WDSMenuBarItem.react");
            R = <Component icon={h} activityIndicator={S} title={v} testid="navbar-item-chats" isActive={g} onClick={f} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
            t[10] = h;
            t[11] = f;
            t[12] = g;
            t[13] = S;
            t[14] = R;
        } else {
            R = t[14];
        }
        return R;
    }
    l.ChatsNavBarItem = c;
}, 226);