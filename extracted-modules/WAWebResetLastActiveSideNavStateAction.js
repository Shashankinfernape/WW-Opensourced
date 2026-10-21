__d("WAWebResetLastActiveSideNavStateAction", [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatGetters",
    "WAWebDrawerManager",
    "WAWebGroupType",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarTypes",
    "WAWebSideNavButtonsActivityModel",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = ()=>{
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "mid_drawer_empty_state",
            navBarItem: o("WAWebNavBarTypes").NavBarItems.Communities
        } : s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
            type: o("WAWebNavBarTypes").NavBarItems.Communities
        }), {
            transition: "none"
        });
    };
    const c = ()=>{
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
            descriptorType: "mid_drawer_empty_state",
            navBarItem: o("WAWebNavBarTypes").NavBarItems.Newsletters
        } : s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
            type: o("WAWebNavBarTypes").NavBarItems.Newsletters
        }), {
            transition: "none"
        });
    };
    function d(e) {
        const t = o("WAWebSideNavButtonsActivityModel").getLastActiveButton();
        if (t != null) {
            switch(t){
                case o("WAWebNavBarTypes").NavBarItems.Chats:
                    o("WAWebSideNavButtonsActivityModel").setLastActiveChat(null);
                    break;
                case o("WAWebNavBarTypes").NavBarItems.Newsletters:
                    if (o("WAWebChatGetters").getIsNewsletter(e)) {
                        o("WAWebSideNavButtonsActivityModel").setLastActiveNewsletter(null);
                        c();
                    }
                    break;
                case o("WAWebNavBarTypes").NavBarItems.Communities:
                    if (e.groupType != null) {
                        switch(e.groupType){
                            case o("WAWebGroupType").GroupType.COMMUNITY:
                            case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
                            case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
                            case o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP:
                                o("WAWebSideNavButtonsActivityModel").setLastActiveCommunity(null);
                                u();
                                break;
                            case o("WAWebGroupType").GroupType.DEFAULT:
                                o("WAWebSideNavButtonsActivityModel").setLastActiveChat(null);
                                break;
                        }
                    }
                    break;
                case o("WAWebNavBarTypes").NavBarItems.Archived:
                case o("WAWebNavBarTypes").NavBarItems.Beta:
                case o("WAWebNavBarTypes").NavBarItems.BizTools:
                case o("WAWebNavBarTypes").NavBarItems.AdCreation:
                case o("WAWebNavBarTypes").NavBarItems.Calls:
                case o("WAWebNavBarTypes").NavBarItems.Contacts:
                case o("WAWebNavBarTypes").NavBarItems.Orders:
                case o("WAWebNavBarTypes").NavBarItems.Labels:
                case o("WAWebNavBarTypes").NavBarItems.LockedChats:
                case o("WAWebNavBarTypes").NavBarItems.Starred:
                case o("WAWebNavBarTypes").NavBarItems.Settings:
                case o("WAWebNavBarTypes").NavBarItems.Profile:
                case o("WAWebNavBarTypes").NavBarItems.Status:
                case o("WAWebNavBarTypes").NavBarItems.MediaHub:
                case o("WAWebNavBarTypes").NavBarItems.MetaAI:
                case o("WAWebNavBarTypes").NavBarItems.MeTab:
                case o("WAWebNavBarTypes").NavBarItems.CustomerManager:
                case o("WAWebNavBarTypes").NavBarItems.OrgAdmin:
                case o("WAWebNavBarTypes").NavBarItems.GroupAdmin:
                case o("WAWebNavBarTypes").NavBarItems.ContactsAndGroups:
                    break;
            }
        }
    }
    l.resetLastActiveSideNavStateForChat = d;
}, 98);