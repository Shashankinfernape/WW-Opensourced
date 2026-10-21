__d("WAWebStatusNavBarItem.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAppRootInteractionContext.react",
    "WAWebAppTracker",
    "WAWebDrawerManager",
    "WAWebInteractionTracePolicy",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebProductFeature",
    "WAWebStatusNavigateTo",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSIconWdsIcStatus.react",
    "WDSIconWdsIcStatusFilled.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebAppTracker",
    "useWAWebStatusActivityIndicator"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(17);
        const { activeNavBarItem, updateActiveNavBarItem } = e;
        const l = o("useWAWebStatusActivityIndicator").useWAWebStatusActivityIndicator();
        const { clearUnreadActivity, hasUnread } = l;
        r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.StatusTab, activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Status);
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                manualHold: false,
                shouldUseNavigationAsInteraction: true,
                tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_STATUS
            };
            t[0] = m;
        } else {
            m = t[0];
        }
        const p = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(m);
        const p_startInteraction = p.startInteraction;
        let f;
        if (t[1] !== activeNavBarItem || t[2] !== clearUnreadActivity || t[3] !== p_startInteraction || t[4] !== updateActiveNavBarItem) {
            f = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (activeNavBarItem !== o("WAWebNavBarTypes").NavBarItems.Status) {
                        p_startInteraction();
                        const e = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
                        if (e) {
                            updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Status);
                            o("WAWebStatusNavigateTo").navigateToStatus(clearUnreadActivity);
                            o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.STATUS);
                            o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                                descriptorType: "mid_drawer_empty_state",
                                navBarItem: o("WAWebNavBarTypes").NavBarItems.Status
                            } : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                                type: o("WAWebNavBarTypes").NavBarItems.Status
                            }), {
                                transition: "none",
                                disableRotateFocus: true
                            });
                        }
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[1] = activeNavBarItem;
            t[2] = clearUnreadActivity;
            t[3] = p_startInteraction;
            t[4] = updateActiveNavBarItem;
            t[5] = f;
        } else {
            f = t[5];
        }
        const g = f;
        if (o("WAWebProductFeature").isInternalProduct()) {
            return null;
        }
        const h = activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Status;
        const y = r(h ? "WDSIconWdsIcStatusFilled.react" : "WDSIconWdsIcStatus.react");
        let C;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            C = s._("Status");
            t[6] = C;
        } else {
            C = t[6];
        }
        const b = C;
        let v;
        if (t[7] !== hasUnread) {
            v = hasUnread ? s._("Updates in Status") : s._("Status");
            t[7] = hasUnread;
            t[8] = v;
        } else {
            v = t[8];
        }
        const accessibilityText = v;
        let R;
        if (t[9] !== accessibilityText || t[10] !== hasUnread) {
            R = hasUnread ? {
                accessibilityText,
                size: "small",
                border: true
            } : undefined;
            t[9] = accessibilityText;
            t[10] = hasUnread;
            t[11] = R;
        } else {
            R = t[11];
        }
        let L;
        if (t[12] !== g || t[13] !== h || t[14] !== y || t[15] !== R) {
            const Component = r("WDSMenuBarItem.react");
            L = <Component icon={y} activityIndicator={R} title={b} testid="navbar-item-status" isActive={h} onClick={g} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
            t[12] = g;
            t[13] = h;
            t[14] = y;
            t[15] = R;
            t[16] = L;
        } else {
            L = t[16];
        }
        return L;
    }
    l.StatusNavBarItem = c;
}, 226);