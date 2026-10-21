__d("useWAWebCommunityActionListeners", [
    "WAWebActiveCommunityNavigation",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebCmd",
    "WAWebCommunityDailyUtils",
    "WAWebCommunityFlowLoadable",
    "WAWebCommunityFlowStep",
    "WAWebCommunityHomeTheme",
    "WAWebCommunityInfoTabs",
    "WAWebCommunitySettingsDrawer.react",
    "WAWebDrawerManager",
    "WAWebGroupMetadataCollection",
    "WAWebKeyboardTabUtils",
    "WAWebManageCommunityGroupsFlowLoadable",
    "WAWebModalManager",
    "WAWebNewGroupFlowLoadable",
    "WAWebNewGroupFlowStep",
    "WAWebNewSubgroupSuggestionFlowLoadable",
    "WAWebNoop",
    "WAWebSubgroupJoinModalLoadable",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u() {
        const e = o("react-compiler-runtime").c(14);
        const t = r("useWAWebUIM")();
        let n;
        if (e[0] !== t) {
            n = function(n, hasFetchedSubgroups) {
                o("WAWebCommunityDailyUtils").incrementCommunityHomeEvent(n, o("WAWebCommunityDailyUtils").CommunityDailyHomeMetricsType.HOME_VIEWS);
                r("WAWebActiveCommunityNavigation").setActive(n);
                const Component = o("WAWebCommunityFlowLoadable").CommunityFlowLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component key={`community-nav-${n.toString()}`} jid={n} hasFetchedSubgroups={hasFetchedSubgroups} initialStep={o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityHome} onBack={p}/>, {
                    transition: "slide-left",
                    uim: t,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    newDrawerContext: {
                        type: "community_home",
                        communityJid: n
                    },
                    disableRotateFocus: true
                });
            };
            e[0] = t;
            e[1] = n;
        } else {
            n = e[1];
        }
        const a = n;
        let i;
        if (e[2] !== t) {
            i = function(n, r, showFullDescription, scrollToMemberList) {
                const initialTab = r === undefined ? o("WAWebCommunityInfoTabs").CommunityInfoTabs.Community : r;
                o("WAWebCommunityDailyUtils").incrementCommunityHomeEvent(n, o("WAWebCommunityDailyUtils").CommunityDailyHomeMetricsType.HOME_VIEWS);
                const Component = o("WAWebCommunityFlowLoadable").CommunityFlowLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component key={`community-info-${n.toString()}`} jid={n} initialStep={o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityHome} initialTab={initialTab} homeTheme={o("WAWebCommunityHomeTheme").CommunityHomeTheme.TabbedInfo} scrollToMemberList={scrollToMemberList} showFullDescription={showFullDescription} onBack={m}/>, {
                    transition: "slide-left",
                    uim: t,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            e[2] = t;
            e[3] = i;
        } else {
            i = e[3];
        }
        const l = i;
        let u;
        if (e[4] !== t) {
            u = function(n) {
                r("WAWebActiveCommunityNavigation").setActive(n);
                const Component = o("WAWebCommunityFlowLoadable").CommunityFlowLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component jid={n} initialStep={o("WAWebCommunityFlowStep").CommunityFlowStep.PendingGroups} onBack={function() {
                    o("WAWebCmd").Cmd.openCommunityHome(n);
                }}/>, {
                    transition: "slide-left",
                    uim: t,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            e[4] = t;
            e[5] = u;
        } else {
            u = e[5];
        }
        const _ = u;
        let f;
        if (e[6] !== a) {
            f = function(t) {
                r("WAWebActiveCommunityNavigation").setActive(t);
                const Component = o("WAWebManageCommunityGroupsFlowLoadable").ManageCommunityGroupsFlowLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component parentGroupMetadata={r("WAWebGroupMetadataCollection").assertGet(t)} onBack={function() {
                    return a(t, false);
                }}/>);
            };
            e[6] = a;
            e[7] = f;
        } else {
            f = e[7];
        }
        const g = f;
        let h;
        if (e[8] !== a) {
            h = function(t) {
                r("WAWebActiveCommunityNavigation").setActive(t);
                const Component = o("WAWebManageCommunityGroupsFlowLoadable").ManageCommunityGroupsFlowLoadable;
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component parentGroupMetadata={r("WAWebGroupMetadataCollection").assertGet(t)} onBack={function() {
                    return a(t, false);
                }} initialStep="existing_group"/>);
            };
            e[8] = a;
            e[9] = h;
        } else {
            h = e[9];
        }
        const y = h;
        let C;
        if (e[10] !== a) {
            C = function(t) {
                let e;
                const n = o("WAWebChatCollection").ChatCollection.get(t);
                if (!(!n || !((e = n.groupMetadata) != null && e.hasJoined()))) {
                    r("WAWebActiveCommunityNavigation").setActive(t);
                    const Component = r("WAWebCommunitySettingsDrawer.react");
                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component chat={n} onBack={function() {
                        return a(t, false);
                    }}/>, {
                        transition: "flow-transition-drawer-push",
                        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                    });
                }
            };
            e[10] = a;
            e[11] = C;
        } else {
            C = e[11];
        }
        const b = C;
        let v;
        if (e[12] !== a) {
            v = function(t, n, initialSelectedSubgroup) {
                r("WAWebActiveCommunityNavigation").setActive(t);
                let e;
                if (o("WAWebChatCommunityUtils").isSubgroupSuggestionCreation(t)) {
                    const Component = o("WAWebNewSubgroupSuggestionFlowLoadable").NewSubgroupSuggestionFlowLoadable;
                    e = <Component parentGroup={t} onBack={function() {
                        return a(t, false);
                    }}/>;
                } else {
                    const Component = o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable;
                    e = <Component onCreateGroup={n} parentGroupWid={t} onEnd={function() {
                        return a(t, false);
                    }} initialSelectedSubgroup={initialSelectedSubgroup} initialStep={o("WAWebNewGroupFlowStep").NewGroupFlowStep.SET_GROUP_INFO_DRAWER} shortenedCreationFlow/>;
                }
                o("WAWebDrawerManager").DrawerManager.openDrawerLeft(e, {
                    transition: "flow-transition-drawer-push",
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            };
            e[12] = a;
            e[13] = v;
        } else {
            v = e[13];
        }
        const S = v;
        const R = DComponent;
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_subgroup_join_modal", R);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_community_home", a);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_community_tabbed_info", l);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_community_pending_groups_drawer", _);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_community_home_manage_groups", g);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_community_add_new_group", S);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_community_add_existing_group", y);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_community_settings_drawer", b);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_active_chat", c);
    }
    function c() {
        r("WAWebActiveCommunityNavigation").setActive(null);
    }
    function DComponent(subgroupMetadata, source) {
        const Component = o("WAWebSubgroupJoinModalLoadable").SubgroupJoinModalLoadable;
        o("WAWebModalManager").ModalManager.open(<Component subgroupMetadata={subgroupMetadata} onSuccess={r("WAWebNoop")} source={source}/>);
    }
    function m() {
        o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
    }
    function p() {
        r("WAWebActiveCommunityNavigation").setActive(null);
        o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
    }
    l.default = u;
}, 98);