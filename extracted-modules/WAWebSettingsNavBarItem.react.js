__d("WAWebSettingsNavBarItem.react", [
    "fbt",
    "WAWebActions",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAppRootInteractionContext.react",
    "WAWebDrawerManager",
    "WAWebInteractionTracePolicy",
    "WAWebKeyboardTabUtils",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebSettingsFlowLoadable",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSIconIcSettings.react",
    "WDSIconIcSettingsFilled.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(10);
        const { activeNavBarItem, updateActiveNavBarItem } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                manualHold: false,
                shouldUseNavigationAsInteraction: true,
                tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_SETTINGS
            };
            t[0] = l;
        } else {
            l = t[0];
        }
        const c = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(l);
        const c_startInteraction = c.startInteraction;
        let f;
        if (t[1] !== activeNavBarItem || t[2] !== c_startInteraction || t[3] !== updateActiveNavBarItem) {
            f = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (activeNavBarItem !== o("WAWebNavBarTypes").NavBarItems.Settings) {
                        c_startInteraction();
                        const Component = o("WAWebSettingsFlowLoadable").SettingsFlowLoadable;
                        const e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                            descriptorType: "settings"
                        } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft}/>, {
                            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                            transition: "pop-drawer-fast",
                            focusOnUnMount: true
                        });
                        if (e) {
                            updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Settings);
                            o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.SETTINGS);
                            self.setTimeout(d, 0);
                        }
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[1] = activeNavBarItem;
            t[2] = c_startInteraction;
            t[3] = updateActiveNavBarItem;
            t[4] = f;
        } else {
            f = t[4];
        }
        const g = f;
        const h = activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Settings;
        const y = h ? p : m;
        let C;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            C = s._("Settings");
            t[5] = C;
        } else {
            C = t[5];
        }
        const b = C;
        let v;
        if (t[6] !== g || t[7] !== h || t[8] !== y) {
            const Component = r("WDSMenuBarItem.react");
            v = <Component testid="navbar-item-settings" icon={y} title={b} keyboardShortcutAction={o("WAWebActions").Action.OPEN_SETTINGS} onClick={g} isActive={h} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
            t[6] = g;
            t[7] = h;
            t[8] = y;
            t[9] = v;
        } else {
            v = t[9];
        }
        return v;
    }
    function d() {
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "mid_drawer_empty_state",
            navBarItem: o("WAWebNavBarTypes").NavBarItems.Settings
        } : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
            type: o("WAWebNavBarTypes").NavBarItems.Settings
        }), {
            transition: "none",
            disableRotateFocus: true,
            noFocus: true
        });
    }
    function m(e) {
        const n = o("react-compiler-runtime").c(3);
        const a = e.testid ?? "settings_inactive_icon";
        let i;
        if (n[0] !== e || n[1] !== a) {
            i = u.jsx(r("WDSIconIcSettings.react"), babelHelpers.extends({}, e, {
                testid: a
            }));
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            i = n[2];
        }
        return i;
    }
    function p(e) {
        const n = o("react-compiler-runtime").c(3);
        const a = e.testid ?? "settings_active_icon";
        let i;
        if (n[0] !== e || n[1] !== a) {
            i = u.jsx(r("WDSIconIcSettingsFilled.react"), babelHelpers.extends({}, e, {
                testid: a
            }));
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            i = n[2];
        }
        return i;
    }
    l.SettingsNavBarItem = c;
}, 226);