__d("WAWebCustomerManagerNavBarItem.react", [
    "fbt",
    "WAWebCustomerManagerDrawerLoadable",
    "WAWebCustomerManagerGating",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebMobilePlatforms",
    "WAWebNavBarTypes",
    "WDSIconIcOpenBook.react",
    "WDSIconIcOpenBookFilled.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(8);
        const { activeNavBarItem, updateActiveNavBarItem } = e;
        const i = o("WAWebMobilePlatforms").isSMB();
        const l = activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.CustomerManager;
        let c;
        if (t[0] !== l || t[1] !== updateActiveNavBarItem) {
            c = function() {
                if (!l) {
                    updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.CustomerManager);
                    o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(o("WAWebCustomerManagerDrawerLoadable").WAWebCustomerManagerDrawerLoadable, {}), {
                        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                        transition: "slide-left"
                    });
                }
            };
            t[0] = l;
            t[1] = updateActiveNavBarItem;
            t[2] = c;
        } else {
            c = t[2];
        }
        const d = c;
        const m = r(l ? "WDSIconIcOpenBookFilled.react" : "WDSIconIcOpenBook.react");
        let p;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("Customer Manager");
            t[3] = p;
        } else {
            p = t[3];
        }
        const _ = p;
        if (!i || !o("WAWebCustomerManagerGating").customerManagerEnabled()) {
            return null;
        }
        let f;
        if (t[4] !== d || t[5] !== m || t[6] !== l) {
            const Component = r("WDSMenuBarItem.react");
            f = <Component icon={m} title={_} testid="navbar-item-customer-manager" isActive={l} onClick={d} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
            t[4] = d;
            t[5] = m;
            t[6] = l;
            t[7] = f;
        } else {
            f = t[7];
        }
        return f;
    }
    l.default = c;
}, 226);