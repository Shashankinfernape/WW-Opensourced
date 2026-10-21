__d("WAWebNewslettersNavBarItem.react", [
    "fbt",
    "WAWebAppRootInteractionContext.react",
    "WAWebAppTracker",
    "WAWebChatGetters",
    "WAWebDrawerManager",
    "WAWebInteractionTracePolicy",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebNewsletterCollection",
    "WAWebNewsletterTabNavigateTo",
    "WAWebNewsletterTabPulseState",
    "WAWebSideNavButtonsActivityModel",
    "WAWebUserPrefsNewsletter",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSIconWdsIcChannels.react",
    "WDSIconWdsIcChannelsFilled.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebAppTracker",
    "useWAWebEventTargetValue",
    "useWAWebIsChannelsInChatListEnabled",
    "useWAWebIsNewsletterUiEnabled",
    "useWAWebNewsletterStatusUnread"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function d(e, t) {
        if (e.length === 0) {
            return false;
        }
        return e.some((e)=>{
            const r = e.t ?? 0;
            return o("WAWebChatGetters").getHasUnread(e) && r > t;
        });
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(19);
        const { activeNavBarItem, updateActiveNavBarItem } = e;
        const l = r("useWAWebIsNewsletterUiEnabled")();
        const d = r("useWAWebIsChannelsInChatListEnabled")();
        const m = l && !d;
        let f;
        let g;
        if (t[0] !== activeNavBarItem || t[1] !== d || t[2] !== updateActiveNavBarItem) {
            f = function() {
                if (d && activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Newsletters) {
                    o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                    updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Chats);
                    o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Chats);
                }
            };
            g = [
                activeNavBarItem,
                d,
                updateActiveNavBarItem
            ];
            t[0] = activeNavBarItem;
            t[1] = d;
            t[2] = updateActiveNavBarItem;
            t[3] = f;
            t[4] = g;
        } else {
            f = t[3];
            g = t[4];
        }
        e_useEffect(f, g);
        r("useWAWebAppTracker")(o("WAWebAppTracker").AppTrackerType.ChannelsTab, activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Newsletters);
        let h;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                manualHold: false,
                shouldUseNavigationAsInteraction: true,
                tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_NEWSLETTERS
            };
            t[5] = h;
        } else {
            h = t[5];
        }
        const y = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(h);
        const y_startInteraction = y.startInteraction;
        let b;
        if (t[6] !== activeNavBarItem || t[7] !== y_startInteraction || t[8] !== updateActiveNavBarItem) {
            b = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (activeNavBarItem !== o("WAWebNavBarTypes").NavBarItems.Newsletters) {
                        y_startInteraction();
                        const e = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
                        if (e) {
                            updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Newsletters);
                            o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.NEWSLETTERS);
                            o("WAWebNewsletterTabNavigateTo").showNewsletterTab();
                        }
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[6] = activeNavBarItem;
            t[7] = y_startInteraction;
            t[8] = updateActiveNavBarItem;
            t[9] = b;
        } else {
            b = t[9];
        }
        const v = b;
        const S = activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Newsletters;
        const R = r(S ? "WDSIconWdsIcChannelsFilled.react" : "WDSIconWdsIcChannels.react");
        let L;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            L = [
                "add",
                "change",
                "remove",
                "newsletter_tab_close"
            ];
            t[10] = L;
        } else {
            L = t[10];
        }
        const E = r("useWAWebEventTargetValue")(r("WAWebNewsletterCollection"), L, _);
        const pulse = r("useWAWebEventTargetValue")(r("WAWebNewsletterTabPulseState"), "pulseChange", p);
        const I = o("useWAWebNewsletterStatusUnread").useWAWebNewsletterStatusUnread();
        const T = E || I;
        let D;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            D = s._("Channels");
            t[11] = D;
        } else {
            D = t[11];
        }
        const x = D;
        let $;
        if (t[12] !== v || t[13] !== T || t[14] !== S || t[15] !== pulse || t[16] !== R || t[17] !== m) {
            const Component = r("WDSMenuBarItem.react");
            $ = m && <Component icon={R} activityIndicator={T ? {
                size: "small",
                border: true,
                pulse
            } : undefined} title={x} testid="navbar-item-newsletters" isActive={S} onClick={v} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
            t[12] = v;
            t[13] = T;
            t[14] = S;
            t[15] = pulse;
            t[16] = R;
            t[17] = m;
            t[18] = $;
        } else {
            $ = t[18];
        }
        return $;
    }
    function p() {
        return r("WAWebNewsletterTabPulseState").getIsPulsing();
    }
    function _() {
        return d(r("WAWebNewsletterCollection"), o("WAWebUserPrefsNewsletter").getNewsletterTabLastSeenTimestamp());
    }
    l.NewslettersNavBarItem = m;
}, 226);