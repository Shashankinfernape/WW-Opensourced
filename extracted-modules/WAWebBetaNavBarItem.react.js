__d("WAWebBetaNavBarItem.react", [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBetaIcon.react",
    "WAWebDrawerManager",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebSettingsConst",
    "WAWebSettingsFlowLoadable",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebExternalBetaOptIn"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        iconActive: {
            color: "x14ug900",
            $$css: true
        },
        iconInactive: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(10);
        const { activeNavBarItem, updateActiveNavBarItem } = e;
        const l = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn();
        const d = l[0];
        if (!d) {
            return null;
        }
        const m = activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.Beta;
        let p;
        if (t[0] !== m || t[1] !== updateActiveNavBarItem) {
            p = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (!m) {
                        const Component = o("WAWebSettingsFlowLoadable").SettingsFlowLoadable;
                        const e = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                            descriptorType: "settings",
                            initialStep: o("WAWebSettingsConst").SettingsSteps.Help
                        } : <Component onEnd={o("WAWebDrawerManager").closeDrawerLeft} initialStep={o("WAWebSettingsConst").SettingsSteps.Help}/>, {
                            transition: "pop-drawer-fast"
                        });
                        if (e) {
                            updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Beta);
                            o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.SETTINGS_HELP);
                        }
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[0] = m;
            t[1] = updateActiveNavBarItem;
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        let f;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Beta");
            t[3] = f;
        } else {
            f = t[3];
        }
        const g = f;
        const h = m ? c.iconActive : c.iconInactive;
        let y;
        if (t[4] !== h) {
            y = u.jsx(o("WAWebBetaIcon.react").BetaIcon, {
                iconXstyle: h
            });
            t[4] = h;
            t[5] = y;
        } else {
            y = t[5];
        }
        let C;
        if (t[6] !== _ || t[7] !== m || t[8] !== y) {
            const Component = r("WDSMenuBarItem.react");
            C = <Component customIcon={y} title={g} testid="navbar-item-beta-settings" isActive={m} onClick={_} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
            t[6] = _;
            t[7] = m;
            t[8] = y;
            t[9] = C;
        } else {
            C = t[9];
        }
        return C;
    }
    l.BetaNavBarItem = d;
}, 226);