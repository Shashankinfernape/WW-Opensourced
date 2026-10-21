__d("WAWebMidDrawerEmptyState.react", [
    "fbt",
    "WAWebActiveCommunityNavigation",
    "WAWebAppContext.react",
    "WAWebBotBaseGating",
    "WAWebChannelsQuickActions",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebCommunityNavigationQuickActions",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerManagerContext",
    "WAWebIntroPanelStyles.stylex",
    "WAWebMetaAILandingLoadable",
    "WAWebNavBarTypes",
    "WAWebNewsletterGatingUtils",
    "WAWebQuickActionGatingUtils",
    "WAWebQuickActionSection.react",
    "WAWebStatusQuickActions",
    "WAWebVoipCallsTabEmptyStateLoadable.react",
    "WDSIconIcAccountCircle.react",
    "WDSIconIcLock.react",
    "WDSIconIcSettingsFilled.react",
    "WDSIconIcStoreFilled.react",
    "WDSIconWdsIcChannelsFilled.react",
    "WDSIconWdsIcCommunitiesFilled.react",
    "WDSIconWdsIcStatusFilled.react",
    "WDSText.react",
    "cr:21286",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        heroIcon: {
            color: "x1vef352",
            display: "x1rg5ohu",
            $$css: true
        },
        spacingSingleBottom: {
            marginBottom: "xcytdqz",
            $$css: true
        },
        spacingTripleBottom: {
            marginBottom: "x14mdic9",
            $$css: true
        },
        spacingTripleTop: {
            marginTop: "x9u28bd",
            $$css: true
        },
        introAnimated: {
            transitionProperty: "x11xpdln",
            transitionDuration: "x13dflua",
            transitionTimingFunction: "xwji4o3",
            $$css: true
        },
        introShiftedForRightDrawer: {
            transform: "x1kv6fzm",
            $$css: true
        }
    };
    function m(t) {
        const l = o("react-compiler-runtime").c(66);
        const t_type = t.type;
        const m = r("useWAWebEventTargetValue")(r("WAWebActiveCommunityNavigation"), "change", p);
        let _;
        if (l[0] !== m) {
            _ = m != null ? o("WAWebChatCollection").ChatCollection.get(m) : null;
            l[0] = m;
            l[1] = _;
        } else {
            _ = l[1];
        }
        const f = _;
        const g = o("WAWebAppContext.react").useAppContext();
        const g_rightDrawerOpen = g.rightDrawerOpen;
        const y = o("WAWebDrawerManagerContext").useDrawerManagerContext("left");
        const y_drawerContext = y.drawerContext;
        const b = y_drawerContext.type === "quick_action";
        const v = y_drawerContext.type === "community_home";
        let S;
        if (l[2] === Symbol.for("react.memo_cache_sentinel")) {
            S = [
                "change:suspended"
            ];
            l[2] = S;
        } else {
            S = l[2];
        }
        let R;
        if (l[3] !== f) {
            R = function() {
                return o("WAWebChatCommunityUtils").isSuspendedCommunity(f);
            };
            l[3] = f;
            l[4] = R;
        } else {
            R = l[4];
        }
        const isSuspended = r("useWAWebEventTargetValue")(f?.groupMetadata, S, R);
        let E;
        if (l[5] === Symbol.for("react.memo_cache_sentinel")) {
            E = [
                "change:participants"
            ];
            l[5] = E;
        } else {
            E = l[5];
        }
        let k;
        if (l[6] !== f?.groupMetadata?.participants) {
            k = function() {
                let e;
                return !!(!(f == null || (e = f.groupMetadata) == null || (e = e.participants) == null) && e.iAmAdmin());
            };
            l[6] = f?.groupMetadata?.participants;
            l[7] = k;
        } else {
            k = l[7];
        }
        const isAdmin = r("useWAWebEventTargetValue")(f?.groupMetadata, E, k);
        let D;
        if (l[8] === Symbol.for("react.memo_cache_sentinel")) {
            D = [
                "change:suspended",
                "change:terminated"
            ];
            l[8] = D;
        } else {
            D = l[8];
        }
        let x;
        if (l[9] !== f) {
            x = function() {
                return o("WAWebChatCommunityUtils").canAddGroupToCommunity(f);
            };
            l[9] = f;
            l[10] = x;
        } else {
            x = l[10];
        }
        const canAddGroup = r("useWAWebEventTargetValue")(f?.groupMetadata, D, x);
        let P;
        if (l[11] === Symbol.for("react.memo_cache_sentinel")) {
            P = [
                "change:allowNonAdminSubGroupCreation"
            ];
            l[11] = P;
        } else {
            P = l[11];
        }
        let N;
        if (l[12] !== f?.groupMetadata?.allowNonAdminSubGroupCreation) {
            N = function() {
                return f?.groupMetadata?.allowNonAdminSubGroupCreation === true;
            };
            l[12] = f?.groupMetadata?.allowNonAdminSubGroupCreation;
            l[13] = N;
        } else {
            N = l[13];
        }
        const allowNonAdminSubGroupCreation = r("useWAWebEventTargetValue")(f?.groupMetadata, P, N);
        let A;
        let F;
        let O;
        let B;
        let W;
        e: switch(t_type){
            case o("WAWebNavBarTypes").NavBarItems.Status:
                {
                    let q;
                    if (l[14] === Symbol.for("react.memo_cache_sentinel")) {
                        q = c.jsx(r("WDSIconWdsIcStatusFilled.react"), {
                            testid: "status-filled-refreshed",
                            height: 64,
                            width: 64,
                            iconXstyle: d.heroIcon
                        });
                        l[14] = q;
                    } else {
                        q = l[14];
                    }
                    A = q;
                    let U;
                    if (l[15] === Symbol.for("react.memo_cache_sentinel")) {
                        U = s._("Share statuses");
                        l[15] = U;
                    } else {
                        U = l[15];
                    }
                    F = U;
                    let V;
                    if (l[16] === Symbol.for("react.memo_cache_sentinel")) {
                        V = s._("Share photos, videos and text that disappear after 24 hours.");
                        l[16] = V;
                    } else {
                        V = l[16];
                    }
                    O = V;
                    const H = !b && o("WAWebQuickActionGatingUtils").isQuickActionsEnabled("status");
                    if (H) {
                        let G;
                        if (l[17] === Symbol.for("react.memo_cache_sentinel")) {
                            G = c.jsx(r("WAWebQuickActionSection.react"), {
                                actions: r("WAWebStatusQuickActions"),
                                context: undefined,
                                surface: "status"
                            });
                            l[17] = G;
                        } else {
                            G = l[17];
                        }
                        W = G;
                    }
                    if (!o("WAWebNewsletterGatingUtils").isNewsletterStatusProfileRingEnabled()) {
                        let z;
                        let j;
                        if (l[18] === Symbol.for("react.memo_cache_sentinel")) {
                            z = (e || (e = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encrypted);
                            j = <span {...babelHelpers.extends({}, e.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encryptedIcon), {
                                children: c.jsx(r("WDSIconIcLock.react"), {
                                    height: 20,
                                    width: 20,
                                    testid: "lock-outline"
                                })
                            })}/>;
                            l[18] = z;
                            l[19] = j;
                        } else {
                            z = l[18];
                            j = l[19];
                        }
                        let K;
                        if (l[20] === Symbol.for("react.memo_cache_sentinel")) {
                            K = <div {...babelHelpers.extends({}, z, {
                                children: [
                                    j,
                                    " ",
                                    s._("Your statuses are end-to-end encrypted")
                                ]
                            })}/>;
                            l[20] = K;
                        } else {
                            K = l[20];
                        }
                        B = K;
                    }
                    break e;
                }
            case o("WAWebNavBarTypes").NavBarItems.Newsletters:
                {
                    let Q;
                    if (l[21] === Symbol.for("react.memo_cache_sentinel")) {
                        Q = c.jsx(r("WDSIconWdsIcChannelsFilled.react"), {
                            testid: "newsletter",
                            height: 64,
                            width: 64,
                            iconXstyle: d.heroIcon
                        });
                        l[21] = Q;
                    } else {
                        Q = l[21];
                    }
                    A = Q;
                    let X;
                    if (l[22] === Symbol.for("react.memo_cache_sentinel")) {
                        X = s._("Discover channels");
                        l[22] = X;
                    } else {
                        X = l[22];
                    }
                    F = X;
                    let Y;
                    if (l[23] === Symbol.for("react.memo_cache_sentinel")) {
                        Y = s._("Entertainment, sports, news, lifestyle, people and more. Follow the channels that interest you");
                        l[23] = Y;
                    } else {
                        Y = l[23];
                    }
                    O = Y;
                    const J = !b && o("WAWebQuickActionGatingUtils").isQuickActionsEnabled("channels");
                    if (J) {
                        let Z;
                        if (l[24] === Symbol.for("react.memo_cache_sentinel")) {
                            Z = c.jsx(r("WAWebQuickActionSection.react"), {
                                actions: r("WAWebChannelsQuickActions"),
                                context: undefined,
                                surface: "channels"
                            });
                            l[24] = Z;
                        } else {
                            Z = l[24];
                        }
                        W = Z;
                    }
                    break e;
                }
            case o("WAWebNavBarTypes").NavBarItems.Settings:
                {
                    let ee;
                    if (l[25] === Symbol.for("react.memo_cache_sentinel")) {
                        ee = c.jsx(r("WDSIconIcSettingsFilled.react"), {
                            height: 64,
                            width: 64,
                            iconXstyle: d.heroIcon,
                            testid: "settings_active_icon"
                        });
                        l[25] = ee;
                    } else {
                        ee = l[25];
                    }
                    A = ee;
                    let te;
                    if (l[26] === Symbol.for("react.memo_cache_sentinel")) {
                        te = s._("Settings");
                        l[26] = te;
                    } else {
                        te = l[26];
                    }
                    F = te;
                    break e;
                }
            case o("WAWebNavBarTypes").NavBarItems.Profile:
                {
                    let ne;
                    if (l[27] === Symbol.for("react.memo_cache_sentinel")) {
                        ne = c.jsx(r("WDSIconIcAccountCircle.react"), {
                            height: 64,
                            width: 64,
                            iconXstyle: d.heroIcon
                        });
                        l[27] = ne;
                    } else {
                        ne = l[27];
                    }
                    A = ne;
                    let re;
                    if (l[28] === Symbol.for("react.memo_cache_sentinel")) {
                        re = s._("Profile");
                        l[28] = re;
                    } else {
                        re = l[28];
                    }
                    F = re;
                    break e;
                }
            case o("WAWebNavBarTypes").NavBarItems.Communities:
                {
                    let oe;
                    if (l[29] === Symbol.for("react.memo_cache_sentinel")) {
                        oe = c.jsx(r("WDSIconWdsIcCommunitiesFilled.react"), {
                            height: 64,
                            width: 64,
                            iconXstyle: d.heroIcon
                        });
                        l[29] = oe;
                    } else {
                        oe = l[29];
                    }
                    A = oe;
                    let ae;
                    if (l[30] === Symbol.for("react.memo_cache_sentinel")) {
                        ae = s._("Create communities");
                        l[30] = ae;
                    } else {
                        ae = l[30];
                    }
                    F = ae;
                    let ie;
                    if (l[31] === Symbol.for("react.memo_cache_sentinel")) {
                        ie = s._("Bring members together in topic-based groups and easily send them admin announcements.");
                        l[31] = ie;
                    } else {
                        ie = l[31];
                    }
                    O = ie;
                    const le = f != null && v && o("WAWebQuickActionGatingUtils").isQuickActionsEnabled("community_navigation");
                    if (le && f != null) {
                        let se;
                        if (l[32] !== f || l[33] !== canAddGroup || l[34] !== allowNonAdminSubGroupCreation || l[35] !== isAdmin || l[36] !== isSuspended) {
                            se = c.jsx(r("WAWebQuickActionSection.react"), {
                                actions: r("WAWebCommunityNavigationQuickActions"),
                                context: {
                                    chat: f,
                                    isSuspended,
                                    isAdmin,
                                    canAddGroup,
                                    allowNonAdminSubGroupCreation
                                },
                                surface: "community_navigation"
                            });
                            l[32] = f;
                            l[33] = canAddGroup;
                            l[34] = allowNonAdminSubGroupCreation;
                            l[35] = isAdmin;
                            l[36] = isSuspended;
                            l[37] = se;
                        } else {
                            se = l[37];
                        }
                        W = se;
                    }
                    let ue;
                    let ce;
                    if (l[38] === Symbol.for("react.memo_cache_sentinel")) {
                        ue = (e || (e = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encrypted);
                        ce = <span {...babelHelpers.extends({}, e.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encryptedIcon), {
                            children: c.jsx(r("WDSIconIcLock.react"), {
                                height: 20,
                                width: 20,
                                testid: "lock-outline"
                            })
                        })}/>;
                        l[38] = ue;
                        l[39] = ce;
                    } else {
                        ue = l[38];
                        ce = l[39];
                    }
                    let de;
                    if (l[40] === Symbol.for("react.memo_cache_sentinel")) {
                        de = <div {...babelHelpers.extends({}, ue, {
                            children: [
                                ce,
                                " ",
                                s._("Your personal messages in communities are end-to-end encrypted")
                            ]
                        })}/>;
                        l[40] = de;
                    } else {
                        de = l[40];
                    }
                    B = de;
                    break e;
                }
            case o("WAWebNavBarTypes").NavBarItems.BizTools:
                {
                    let me;
                    if (l[41] === Symbol.for("react.memo_cache_sentinel")) {
                        me = c.jsx(r("WDSIconIcStoreFilled.react"), {
                            testid: "biz_tools_empty_state_icon",
                            height: 64,
                            width: 64,
                            iconXstyle: d.heroIcon
                        });
                        l[41] = me;
                    } else {
                        me = l[41];
                    }
                    A = me;
                    let pe;
                    if (l[42] === Symbol.for("react.memo_cache_sentinel")) {
                        pe = s._("Business tools");
                        l[42] = pe;
                    } else {
                        pe = l[42];
                    }
                    F = pe;
                    let _e;
                    if (l[43] === Symbol.for("react.memo_cache_sentinel")) {
                        _e = s._("Manage your business and reach more customers, all in one place.");
                        l[43] = _e;
                    } else {
                        _e = l[43];
                    }
                    O = _e;
                    break e;
                }
            case o("WAWebNavBarTypes").NavBarItems.Calls:
                {
                    let fe;
                    if (l[44] === Symbol.for("react.memo_cache_sentinel")) {
                        fe = c.jsx(o("WAWebVoipCallsTabEmptyStateLoadable.react").VoipCallsTabEmptyStateLoadable, {});
                        l[44] = fe;
                    } else {
                        fe = l[44];
                    }
                    return fe;
                }
            case o("WAWebNavBarTypes").NavBarItems.Contacts:
                {
                    if (n("cr:21286") != null) {
                        let ge;
                        if (l[45] === Symbol.for("react.memo_cache_sentinel")) {
                            ge = c.jsx(n("cr:21286"), {});
                            l[45] = ge;
                        } else {
                            ge = l[45];
                        }
                        return ge;
                    }
                    return null;
                }
            case o("WAWebNavBarTypes").NavBarItems.MetaAI:
                {
                    if (o("WAWebBotBaseGating").isMetaAIHomeEnabled()) {
                        let he;
                        if (l[46] === Symbol.for("react.memo_cache_sentinel")) {
                            he = c.jsx(o("WAWebMetaAILandingLoadable").WAWebMetaAILandingLoadable, {});
                            l[46] = he;
                        } else {
                            he = l[46];
                        }
                        return he;
                    }
                    return null;
                }
            case o("WAWebNavBarTypes").NavBarItems.Archived:
            case o("WAWebNavBarTypes").NavBarItems.Chats:
            case o("WAWebNavBarTypes").NavBarItems.Beta:
            case o("WAWebNavBarTypes").NavBarItems.AdCreation:
            case o("WAWebNavBarTypes").NavBarItems.Orders:
            case o("WAWebNavBarTypes").NavBarItems.Labels:
            case o("WAWebNavBarTypes").NavBarItems.LockedChats:
            case o("WAWebNavBarTypes").NavBarItems.Starred:
            case o("WAWebNavBarTypes").NavBarItems.MediaHub:
            case o("WAWebNavBarTypes").NavBarItems.MeTab:
            case o("WAWebNavBarTypes").NavBarItems.CustomerManager:
            case o("WAWebNavBarTypes").NavBarItems.OrgAdmin:
            case o("WAWebNavBarTypes").NavBarItems.GroupAdmin:
            case o("WAWebNavBarTypes").NavBarItems.ContactsAndGroups:
                return null;
        }
        let ye;
        if (l[47] === Symbol.for("react.memo_cache_sentinel")) {
            ye = [
                d.spacingSingleBottom,
                d.spacingTripleTop
            ];
            l[47] = ye;
        } else {
            ye = l[47];
        }
        let Ce;
        if (l[48] !== F) {
            const Component = r("WDSText.react");
            Ce = <Component type="LargeTitle1" colorName="contentDefault" testid="empty-state-title" isPrimaryHeading xstyle={ye}>{F}</Component>;
            l[48] = F;
            l[49] = Ce;
        } else {
            Ce = l[49];
        }
        const be = Ce;
        let ve;
        if (l[50] !== O) {
            const Component = r("WDSText.react");
            ve = <Component type="Body1" testid="empty-state-paragraph" colorName="contentDeemphasized" xstyle={d.spacingTripleBottom}>{O}</Component>;
            l[50] = O;
            l[51] = ve;
        } else {
            ve = l[51];
        }
        const Se = ve;
        let Re;
        if (l[52] !== g_rightDrawerOpen) {
            Re = (e || (e = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.intro, d.introAnimated, g_rightDrawerOpen && d.introShiftedForRightDrawer);
            l[52] = g_rightDrawerOpen;
            l[53] = Re;
        } else {
            Re = l[53];
        }
        let Le;
        if (l[54] === Symbol.for("react.memo_cache_sentinel")) {
            Le = (e || (e = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.body);
            l[54] = Le;
        } else {
            Le = l[54];
        }
        let Ee;
        if (l[55] !== A) {
            Ee = A != null && <div>{A}</div>;
            l[55] = A;
            l[56] = Ee;
        } else {
            Ee = l[56];
        }
        const ke = F != null && be;
        const Ie = O != null && Se;
        let Te;
        if (l[57] !== B || l[58] !== W || l[59] !== Ee || l[60] !== ke || l[61] !== Ie) {
            Te = <div {...babelHelpers.extends({}, Le, {
                children: [
                    Ee,
                    ke,
                    Ie,
                    B,
                    W
                ]
            })}/>;
            l[57] = B;
            l[58] = W;
            l[59] = Ee;
            l[60] = ke;
            l[61] = Ie;
            l[62] = Te;
        } else {
            Te = l[62];
        }
        let De;
        if (l[63] !== Re || l[64] !== Te) {
            const Component = r("WAWebDrawerBody.react");
            const Component_1 = r("WAWebDrawer.react");
            De = <Component_1 theme="white-bg" testid="empty-state-drawer" disableNavigationLogging><Component><div {...babelHelpers.extends({}, Re, {
                children: Te
            })}/></Component></Component_1>;
            l[63] = Re;
            l[64] = Te;
            l[65] = De;
        } else {
            De = l[65];
        }
        return De;
    }
    function p() {
        return r("WAWebActiveCommunityNavigation").getActive();
    }
    l.MidDrawerEmptyState = m;
}, 226);