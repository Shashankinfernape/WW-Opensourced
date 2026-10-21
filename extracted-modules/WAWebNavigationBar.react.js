__d("WAWebNavigationBar.react", [
    "WALogger",
    "WAWebAiHubNavBarItem.react",
    "WAWebBetaNavBarItem.react",
    "WAWebBizAdCreationNavBarItem.react",
    "WAWebBizAiAgentGating",
    "WAWebBizToolsNavBarItem.react",
    "WAWebBotGating",
    "WAWebCallsNavBarItemLoadable.react",
    "WAWebChatCollection",
    "WAWebChatLockUtils",
    "WAWebChatsNavBarItem.react",
    "WAWebCommunitiesNavBarItem.react",
    "WAWebCustomerManagerNavBarItem.react",
    "WAWebDrawerManager",
    "WAWebEnvironment",
    "WAWebFeedbackNavBarItem.react",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebGroupAdminConsoleGatingUtils",
    "WAWebKeyboardHotKeys.react",
    "WAWebMeTabNavBarItem.react",
    "WAWebMediaHubNavBarItem.react",
    "WAWebMetaBotNavBarItem.react",
    "WAWebMobilePlatforms",
    "WAWebNavBarTypes",
    "WAWebNewslettersNavBarItem.react",
    "WAWebPrivacyModeIndicator.react",
    "WAWebProfileNavBarItem.react",
    "WAWebSettingGatingUtils",
    "WAWebSettingsNavBarItem.react",
    "WAWebStatusNavBarItem.react",
    "WAWebTabOrder",
    "WAWebUseArrowKeyNavigation",
    "WAWebUseFocusSyncOnActiveItemChange",
    "WAWebWindowsArchivedChatsNavBarItem.react",
    "WAWebWindowsLockedChatsNavBarItem.react",
    "WDSPaddings.stylex",
    "cr:12462",
    "cr:16192",
    "cr:17500",
    "cr:21012",
    "cr:21280",
    "cr:6038",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebABPropConfigValue",
    "useWAWebChatLockSettings",
    "useWAWebIsMuseNavBarEntryPoint",
    "useWAWebListener",
    "useWAWebViewerAdministersAnyOrg"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { memo, useEffect, useEffectEvent, useRef, useState } = c;
    const g = {
        paddingBlock10: {
            paddingTop: "x889kno",
            paddingBottom: "x1a8lsjc",
            $$css: true
        }
    };
    const h = {
        header: {
            zIndex: "x12xzxwr",
            position: "x1n2onr6",
            boxSizing: "x9f619",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            minWidth: "xq3y45c",
            width: "xbyj736",
            height: "x5yr21d",
            backgroundColor: "x1h3rtpe",
            $$css: true
        },
        fullWidth: {
            width: "xh8yej3",
            $$css: true
        },
        fullHeight: {
            height: "x5yr21d",
            $$css: true
        },
        wrapper: {
            rowGap: "x129bwdz",
            $$css: true
        }
    };
    function Y2Component() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <hr className="xh8yej3 xjm9jq1 x178xt8z x13fuv20 xx42vgk x18oe1m7 x1sy0etr xstzfhl"/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function C(e) {
        const t = o("react-compiler-runtime").c(105);
        const { activeNavBarItem, headerRef, updateActiveNavBarItem } = e;
        let s;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            s = {
                prefix: "navbar"
            };
            t[0] = s;
        } else {
            s = t[0];
        }
        const c = o("WAWebUseArrowKeyNavigation").useArrowKeyNavigation(s);
        const { down, focusItemIndex, focusSelectedItem, onFocus, ref, up } = c;
        let I;
        if (t[1] !== focusItemIndex) {
            I = function() {
                focusItemIndex(0);
            };
            t[1] = focusItemIndex;
            t[2] = I;
        } else {
            I = t[2];
        }
        const escape = I;
        let D;
        if (t[3] !== down || t[4] !== escape || t[5] !== up) {
            D = {
                up,
                down,
                escape
            };
            t[3] = down;
            t[4] = escape;
            t[5] = up;
            t[6] = D;
        } else {
            D = t[6];
        }
        const x = D;
        o("WAWebUseFocusSyncOnActiveItemChange").useFocusSyncOnActiveItemChange(activeNavBarItem, ref, focusSelectedItem);
        const $ = r("useMergeRefs")(headerRef, ref);
        const P = r("WAWebEnvironment").isWindows === true;
        const N = o("useWAWebABPropConfigValue").useABPropConfigValue("whatsapp_orgs_enabled");
        const M = r("useWAWebViewerAdministersAnyOrg")(n("cr:6038") != null && N);
        const wRef = useRef(M);
        let A;
        let F;
        if (t[7] !== activeNavBarItem || t[8] !== M || t[9] !== updateActiveNavBarItem) {
            A = function() {
                const wRef_current = wRef.current;
                wRef.current = M;
                if (wRef_current && !M && activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.OrgAdmin) {
                    o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                    updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Chats);
                }
                return S;
            };
            F = [
                activeNavBarItem,
                M,
                updateActiveNavBarItem
            ];
            t[7] = activeNavBarItem;
            t[8] = M;
            t[9] = updateActiveNavBarItem;
            t[10] = A;
            t[11] = F;
        } else {
            A = t[10];
            F = t[11];
        }
        useEffect(A, F);
        const isMuseEntryPoint = r("useWAWebIsMuseNavBarEntryPoint")();
        const BRef = useRef(isMuseEntryPoint);
        let W;
        if (t[12] !== updateActiveNavBarItem) {
            W = function() {
                o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
                o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
                updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Chats);
            };
            t[12] = updateActiveNavBarItem;
            t[13] = W;
        } else {
            W = t[13];
        }
        const q = useEffectEvent(W);
        let U;
        if (t[14] !== activeNavBarItem || t[15] !== isMuseEntryPoint || t[16] !== q) {
            U = function() {
                let e = false;
                const BRef_current = BRef.current;
                BRef.current = isMuseEntryPoint;
                if (!BRef_current && isMuseEntryPoint && activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.MetaAI) {
                    o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync().then((t)=>{
                        if (!e && t) {
                            q();
                        }
                    }).catch(v);
                }
                return function() {
                    e = true;
                };
            };
            t[14] = activeNavBarItem;
            t[15] = isMuseEntryPoint;
            t[16] = q;
            t[17] = U;
        } else {
            U = t[17];
        }
        let V;
        if (t[18] !== activeNavBarItem || t[19] !== isMuseEntryPoint) {
            V = [
                activeNavBarItem,
                isMuseEntryPoint
            ];
            t[18] = activeNavBarItem;
            t[19] = isMuseEntryPoint;
            t[20] = V;
        } else {
            V = t[20];
        }
        useEffect(U, V);
        let H;
        if (t[21] === Symbol.for("react.memo_cache_sentinel")) {
            H = function() {
                return P && o("WAWebChatCollection").ChatCollection.some(b);
            };
            t[21] = H;
        } else {
            H = t[21];
        }
        const G = H;
        let z;
        if (t[22] === Symbol.for("react.memo_cache_sentinel")) {
            z = function() {
                return P && o("WAWebChatLockUtils").shouldShowChatLockEntryPoints();
            };
            t[22] = z;
        } else {
            z = t[22];
        }
        const j = z;
        let K;
        if (t[23] === Symbol.for("react.memo_cache_sentinel")) {
            K = G();
            t[23] = K;
        } else {
            K = t[23];
        }
        const Q = useState(K);
        const X = Q[0];
        const Y = Q[1];
        let J;
        if (t[24] === Symbol.for("react.memo_cache_sentinel")) {
            J = j();
            t[24] = J;
        } else {
            J = t[24];
        }
        const Z = useState(J);
        const ee = Z[0];
        const te = Z[1];
        const ne = o("useWAWebChatLockSettings").useChatLockSettings();
        const ne_hideLockedChats = ne.hideLockedChats;
        let oe;
        if (t[25] === Symbol.for("react.memo_cache_sentinel")) {
            oe = function(t) {
                if (P) {
                    if (t.archive === true) {
                        Y(true);
                    } else {
                        const e = G();
                        if (!e) {
                            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                        }
                        Y(e);
                    }
                }
            };
            t[25] = oe;
        } else {
            oe = t[25];
        }
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:archive", oe);
        let ae;
        if (t[26] === Symbol.for("react.memo_cache_sentinel")) {
            ae = function(t) {
                if (P) {
                    if (t.isLocked) {
                        te(true);
                    } else {
                        const e = j();
                        if (!e) {
                            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                        }
                        te(e);
                    }
                }
            };
            t[26] = ae;
        } else {
            ae = t[26];
        }
        o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:isLocked", ae);
        let ie;
        if (t[27] !== activeNavBarItem || t[28] !== updateActiveNavBarItem) {
            ie = {
                activeNavBarItem,
                updateActiveNavBarItem
            };
            t[27] = activeNavBarItem;
            t[28] = updateActiveNavBarItem;
            t[29] = ie;
        } else {
            ie = t[29];
        }
        const le = ie;
        let se;
        if (t[30] !== le || t[31] !== X) {
            se = X && u.createElement(r("WAWebWindowsArchivedChatsNavBarItem.react"), babelHelpers.extends({}, le, {
                key: "navbar-item-archived-chats"
            }));
            t[30] = le;
            t[31] = X;
            t[32] = se;
        } else {
            se = t[32];
        }
        const ue = se;
        let ce;
        if (t[33] !== le || t[34] !== ee || t[35] !== ne_hideLockedChats) {
            ce = ee && !ne_hideLockedChats && u.createElement(r("WAWebWindowsLockedChatsNavBarItem.react"), babelHelpers.extends({}, le, {
                key: "navbar-item-locked-chats"
            }));
            t[33] = le;
            t[34] = ee;
            t[35] = ne_hideLockedChats;
            t[36] = ce;
        } else {
            ce = t[36];
        }
        const de = ce;
        let me;
        if (t[37] !== le || t[38] !== isMuseEntryPoint) {
            me = (isMuseEntryPoint || o("WAWebBotGating").isBotShortcutEntryPointEnabled()) && u.createElement(o("WAWebMetaBotNavBarItem.react").MetaBotNavBarItem, babelHelpers.extends({}, le, {
                isMuseEntryPoint,
                key: "navbar-item-metabot"
            }));
            t[37] = le;
            t[38] = isMuseEntryPoint;
            t[39] = me;
        } else {
            me = t[39];
        }
        const pe = me;
        let _e;
        if (t[40] !== le) {
            _e = o("WAWebMobilePlatforms").isSMB() && !o("WAWebBizAiAgentGating").isBizAiWebAgentChatDisabled() && u.jsx(r("WAWebAiHubNavBarItem.react"), {
                updateActiveNavBarItem: le.updateActiveNavBarItem
            }, "navbar-item-ai-hub");
            t[40] = le;
            t[41] = _e;
        } else {
            _e = t[41];
        }
        const fe = _e;
        let ge;
        if (t[42] === Symbol.for("react.memo_cache_sentinel")) {
            ge = u.jsx(r("WAWebMediaHubNavBarItem.react"), {});
            t[42] = ge;
        } else {
            ge = t[42];
        }
        const he = ge;
        let ye;
        if (t[43] !== le) {
            ye = n("cr:17500") != null ? u.jsx(n("cr:17500"), babelHelpers.extends({}, le)) : null;
            t[43] = le;
            t[44] = ye;
        } else {
            ye = t[44];
        }
        const Ce = ye;
        let be;
        if (t[45] === Symbol.for("react.memo_cache_sentinel")) {
            be = u.jsx(r("WAWebPrivacyModeIndicator.react"), {});
            t[45] = be;
        } else {
            be = t[45];
        }
        const ve = be;
        let Se;
        if (t[46] !== le) {
            Se = o("WAWebMobilePlatforms").isSMB() && u.createElement(o("WAWebBizToolsNavBarItem.react").BizToolsNavBarItem, babelHelpers.extends({}, le, {
                key: "navbar-item-biz-tools"
            }));
            t[46] = le;
            t[47] = Se;
        } else {
            Se = t[47];
        }
        const Re = Se;
        let Le;
        if (t[48] !== le) {
            Le = o("WAWebMobilePlatforms").isSMB() && u.jsx(o("WAWebBizAdCreationNavBarItem.react").BizAdCreationNavBarItem, {
                activeNavBarItem: le.activeNavBarItem
            }, "navbar-item-ads-creation");
            t[48] = le;
            t[49] = Le;
        } else {
            Le = t[49];
        }
        const Ee = Le;
        let ke;
        if (t[50] !== le) {
            ke = o("WAWebMobilePlatforms").isSMB() && u.createElement(r("WAWebCustomerManagerNavBarItem.react"), babelHelpers.extends({}, le, {
                key: "navbar-item-customer-manager"
            }));
            t[50] = le;
            t[51] = ke;
        } else {
            ke = t[51];
        }
        const Ie = ke;
        let Te;
        if (t[52] !== le || t[53] !== M) {
            Te = n("cr:6038") != null && M ? u.jsx(n("cr:6038").OrgAdminNavBarItem, babelHelpers.extends({}, le)) : null;
            t[52] = le;
            t[53] = M;
            t[54] = Te;
        } else {
            Te = t[54];
        }
        const De = Te;
        let xe;
        if (t[55] !== le) {
            xe = n("cr:16192") != null && o("WAWebGroupAdminConsoleGatingUtils").isGroupAdminConsoleEnabled() ? u.createElement(n("cr:16192"), babelHelpers.extends({}, le, {
                key: "navbar-item-group-admin"
            })) : null;
            t[55] = le;
            t[56] = xe;
        } else {
            xe = t[56];
        }
        const $e = xe;
        let Pe;
        if (t[57] !== ue || t[58] !== fe || t[59] !== $e || t[60] !== de || t[61] !== pe || t[62] !== Ee || t[63] !== Re || t[64] !== Ie) {
            Pe = [
                ue,
                de,
                pe,
                fe,
                Re,
                Ee,
                Ie,
                $e
            ];
            if (Pe.some(Boolean)) {
                let Ne;
                if (t[66] === Symbol.for("react.memo_cache_sentinel")) {
                    Ne = <Y2Component key="separator"/>;
                    t[66] = Ne;
                } else {
                    Ne = t[66];
                }
                Pe.unshift(Ne);
            }
            t[57] = ue;
            t[58] = fe;
            t[59] = $e;
            t[60] = de;
            t[61] = pe;
            t[62] = Ee;
            t[63] = Re;
            t[64] = Ie;
            t[65] = Pe;
        } else {
            Pe = t[65];
        }
        let Me;
        if (t[67] === Symbol.for("react.memo_cache_sentinel")) {
            Me = n("cr:12462") ? u.jsx(n("cr:12462").BugnubNavBarItem, {}) : null;
            t[67] = Me;
        } else {
            Me = t[67];
        }
        const we = Me;
        let Ae;
        let Fe;
        if (t[69] === Symbol.for("react.memo_cache_sentinel")) {
            Fe = [
                h.header,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor12,
                g.paddingBlock10
            ];
            t[69] = Fe;
        } else {
            Fe = t[69];
        }
        let Oe;
        if (t[70] === Symbol.for("react.memo_cache_sentinel")) {
            Oe = [
                h.fullWidth,
                h.fullHeight
            ];
            t[70] = Oe;
        } else {
            Oe = t[70];
        }
        let Be;
        let We;
        let qe;
        let Ue;
        let Ve;
        let He;
        if (t[71] !== le) {
            Be = u.jsx(o("WAWebChatsNavBarItem.react").ChatsNavBarItem, babelHelpers.extends({}, le));
            We = u.jsx(o("WAWebCallsNavBarItemLoadable.react").CallsNavBarItemLoadable, babelHelpers.extends({}, le));
            qe = u.jsx(o("WAWebStatusNavBarItem.react").StatusNavBarItem, babelHelpers.extends({}, le));
            Ue = u.jsx(o("WAWebNewslettersNavBarItem.react").NewslettersNavBarItem, babelHelpers.extends({}, le));
            Ve = u.jsx(o("WAWebCommunitiesNavBarItem.react").CommunitiesNavBarItem, babelHelpers.extends({}, le));
            He = n("cr:21280") ? u.jsx(n("cr:21280"), babelHelpers.extends({}, le)) : null;
            t[71] = le;
            t[72] = Be;
            t[73] = We;
            t[74] = qe;
            t[75] = Ue;
            t[76] = Ve;
            t[77] = He;
        } else {
            Be = t[72];
            We = t[73];
            qe = t[74];
            Ue = t[75];
            Ve = t[76];
            He = t[77];
        }
        let Ge;
        if (t[78] !== De || t[79] !== Pe || t[80] !== Be || t[81] !== We || t[82] !== qe || t[83] !== Ue || t[84] !== Ve || t[85] !== He) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            Ge = <Component_1 grow={1} shrink={0} testid="navbar-primary-section" xstyle={h.fullWidth}><Component xstyle={h.wrapper}>{Be}{We}{qe}{Ue}{Ve}{He}{De}{Pe}</Component></Component_1>;
            t[78] = De;
            t[79] = Pe;
            t[80] = Be;
            t[81] = We;
            t[82] = qe;
            t[83] = Ue;
            t[84] = Ve;
            t[85] = He;
            t[86] = Ge;
        } else {
            Ge = t[86];
        }
        let ze;
        if (t[87] === Symbol.for("react.memo_cache_sentinel")) {
            ze = u.jsx(o("WAWebFeedbackNavBarItem.react").FeedbackNavBarItem, {});
            t[87] = ze;
        } else {
            ze = t[87];
        }
        let je;
        if (t[88] !== le) {
            je = u.jsx(o("WAWebBetaNavBarItem.react").BetaNavBarItem, babelHelpers.extends({}, le));
            t[88] = le;
            t[89] = je;
        } else {
            je = t[89];
        }
        let Ke;
        if (t[90] === Symbol.for("react.memo_cache_sentinel")) {
            Ke = we == null ? null : <Y2Component/>;
            t[90] = Ke;
        } else {
            Ke = t[90];
        }
        let Qe;
        if (t[91] !== le) {
            Qe = o("WAWebSettingGatingUtils").isMeTabEnabled() ? u.jsx(o("WAWebMeTabNavBarItem.react").MeTabNavBarItem, babelHelpers.extends({}, le)) : <>{u.jsx(o("WAWebSettingsNavBarItem.react").SettingsNavBarItem, babelHelpers.extends({}, le))}{u.jsx(o("WAWebProfileNavBarItem.react").ProfileNavBarItem, babelHelpers.extends({}, le))}</>;
            t[91] = le;
            t[92] = Qe;
        } else {
            Qe = t[92];
        }
        let Xe;
        if (t[93] !== Ce || t[94] !== je || t[95] !== Qe) {
            const Component = o("WAWebFlex.react").FlexColumn;
            const Component_1 = o("WAWebFlex.react").FlexItem;
            Xe = <Component_1 grow={0} shrink={0} testid="navbar-footer-section" xstyle={h.fullWidth}><Component xstyle={h.wrapper}>{ze}{we}{he}{Ce}{ve}{je}{Ke}{Qe}</Component></Component_1>;
            t[93] = Ce;
            t[94] = je;
            t[95] = Qe;
            t[96] = Xe;
        } else {
            Xe = t[96];
        }
        let Ye;
        if (t[97] !== Ge || t[98] !== Xe) {
            const Component = o("WAWebFlex.react").FlexColumn;
            Ye = <Component xstyle={Oe}>{Ge}{Xe}{Ae}</Component>;
            t[97] = Ge;
            t[98] = Xe;
            t[99] = Ye;
        } else {
            Ye = t[99];
        }
        let Je;
        if (t[100] !== x || t[101] !== $ || t[102] !== onFocus || t[103] !== Ye) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            Je = <Component ref={$} data-testid="chatlist-header" component="header" tabIndex={0} data-tab={o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER} handlers={x} onFocus={onFocus} xstyle={Fe}>{Ye}</Component>;
            t[100] = x;
            t[101] = $;
            t[102] = onFocus;
            t[103] = Ye;
            t[104] = Je;
        } else {
            Je = t[104];
        }
        return Je;
    }
    function b(e) {
        return e.archive && o("WAWebFrontendChatGetters").getShouldAppearInList(e);
    }
    function v(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[navbar] closing Meta AI on the Muse flip failed"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("muse-nav-bar-flip-close-failed");
    }
    function S() {}
    const R = memo(C);
    l.NavigationBar = R;
}, 98);