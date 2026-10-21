__d("WAWebCommunitiesNavBarItem.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAppRootInteractionContext.react",
    "WAWebAppTracker",
    "WAWebCommunityActivityCollection",
    "WAWebCommunityDailyUtils",
    "WAWebCommunityFlowLoadable",
    "WAWebDrawerManager",
    "WAWebInteractionTracePolicy",
    "WAWebKeyboardTabUtils",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebOpenLastActiveCommunityAction",
    "WAWebProductFeature",
    "WAWebSideNavButtonsActivityModel",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSIconWdsIcCommunities.react",
    "WDSIconWdsIcCommunitiesFilled.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebAppTracker",
    "useWAWebEventTargetValue",
    "useWAWebNavigateToRouterPage"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(19);
        const { activeNavBarItem, updateActiveNavBarItem } = e;
        r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.CommunitiesTab, activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Communities);
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                manualHold: false,
                shouldUseNavigationAsInteraction: true,
                tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_COMMUNITIES
            };
            t[0] = l;
        } else {
            l = t[0];
        }
        const c = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(l);
        const c_startInteraction = c.startInteraction;
        let p;
        if (t[1] !== updateActiveNavBarItem) {
            p = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                        descriptorType: "community_flow"
                    } : u.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {}), {
                        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                        transition: "pop-drawer-fast",
                        focusOnUnMount: true,
                        disableRotateFocus: true
                    });
                    if (e) {
                        updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Communities);
                        o("WAWebCommunityDailyUtils").incrementCommunityTabEvent(o("WAWebCommunityDailyUtils").CommunityDailyTabMetricsType.TAB_VIEWS);
                        o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.COMMUNITIES);
                        o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Communities);
                        o("WAWebOpenLastActiveCommunityAction").openLastActiveCommunity();
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[1] = updateActiveNavBarItem;
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        let f;
        if (t[3] !== _) {
            f = {
                onNavigationTransitioning: _
            };
            t[3] = _;
            t[4] = f;
        } else {
            f = t[4];
        }
        const g = r("useWAWebNavigateToRouterPage")(o("WAWebNavBarTypes").NavBarItems.Chats, f);
        let h;
        if (t[5] !== activeNavBarItem || t[6] !== _ || t[7] !== g || t[8] !== c_startInteraction) {
            h = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (activeNavBarItem !== o("WAWebNavBarTypes").NavBarItems.Communities) {
                        c_startInteraction();
                        if (g != null) {
                            g();
                            return;
                        }
                        return _();
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[5] = activeNavBarItem;
            t[6] = _;
            t[7] = g;
            t[8] = c_startInteraction;
            t[9] = h;
        } else {
            h = t[9];
        }
        const y = h;
        const C = activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Communities;
        const b = r(C ? "WDSIconWdsIcCommunitiesFilled.react" : "WDSIconWdsIcCommunities.react");
        let v;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            v = [
                "add",
                "change",
                "remove",
                "community_tab_view"
            ];
            t[10] = v;
        } else {
            v = t[10];
        }
        const S = r("useWAWebEventTargetValue")(r("WAWebCommunityActivityCollection"), v, d);
        if (o("WAWebProductFeature").isInternalProduct()) {
            return null;
        }
        let R;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Communities");
            t[11] = R;
        } else {
            R = t[11];
        }
        const L = R;
        let E;
        if (t[12] !== S) {
            E = S ? {
                size: "small",
                border: true
            } : undefined;
            t[12] = S;
            t[13] = E;
        } else {
            E = t[13];
        }
        let k;
        if (t[14] !== b || t[15] !== y || t[16] !== C || t[17] !== E) {
            const Component = r("WDSMenuBarItem.react");
            k = <Component icon={b} activityIndicator={E} title={L} testid="navbar-item-communities" isActive={C} onClick={y} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
            t[14] = b;
            t[15] = y;
            t[16] = C;
            t[17] = E;
            t[18] = k;
        } else {
            k = t[18];
        }
        return k;
    }
    function d() {
        return r("WAWebCommunityActivityCollection").shouldShowTabBadge();
    }
    l.CommunitiesNavBarItem = c;
}, 226);