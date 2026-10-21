__d("WAWebOpenLastActiveCommunityAction", [
    "Promise",
    "WALogger",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebGroupType",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarTypes",
    "WAWebSideNavButtonsActivityModel",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = ()=>{
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "mid_drawer_empty_state",
            navBarItem: o("WAWebNavBarTypes").NavBarItems.Communities
        } : c.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
            type: o("WAWebNavBarTypes").NavBarItems.Communities
        }), {
            transition: "none",
            disableRotateFocus: true
        });
        return (s || (s = n("Promise"))).resolve(false);
    };
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = o("WAWebSideNavButtonsActivityModel").getLastActiveCommunity();
            if (t == null) {
                return d();
            }
            try {
                const r = o("WAWebChatCollection").ChatCollection.get(t);
                if (r == null || r.groupType == null) {
                    return d();
                }
                switch(r.groupType){
                    case o("WAWebGroupType").GroupType.COMMUNITY:
                    case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
                    case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
                    case o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP:
                        o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
                        return o("WAWebCmd").Cmd.openChatFromUnread({
                            chat: r,
                            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.CommunitiesTab
                        });
                    case o("WAWebGroupType").GroupType.DEFAULT:
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "openLastActiveCommunity: non-community group"
                        ]))).sendLogs("open-last-active-community-error-not-a-community-group");
                        return d();
                }
            } catch (e) {
                return (s || (s = n("Promise"))).resolve(false);
            }
        });
        return p.apply(this, arguments);
    }
    l.openLastActiveCommunity = m;
}, 98);