__d("WAWebOpenLastActiveNewsletterAction", [
    "Promise",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarTypes",
    "WAWebNewsletterCollection",
    "WAWebSideNavButtonsActivityModel",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = ()=>{
        const Newsletters = o("WAWebNavBarTypes").NavBarItems.Newsletters;
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "mid_drawer_empty_state",
            navBarItem: Newsletters
        } : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
            type: Newsletters
        }), {
            transition: "none",
            disableRotateFocus: true
        });
    };
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = o("WAWebSideNavButtonsActivityModel").getLastActiveNewsletter();
            if (t == null) {
                c();
                return (e || (e = n("Promise"))).resolve(false);
            }
            try {
                const a = r("WAWebNewsletterCollection").get(t);
                if (a == null) {
                    c();
                    return (e || (e = n("Promise"))).resolve(false);
                }
                o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
                return o("WAWebCmd").Cmd.openChatFromUnread({
                    chat: a,
                    chatEntryPoint: o("WAWebSideNavButtonsActivityModel").getLastActiveNewsletterEntryPoint()
                });
            } catch (t) {
                return (e || (e = n("Promise"))).resolve(false);
            }
        });
        return m.apply(this, arguments);
    }
    l.openLastActiveNewsletter = d;
}, 98);