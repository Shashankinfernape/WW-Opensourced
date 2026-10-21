__d("WAWebChatlistHeaderDropdown.react", [
    "WAWebAdsCreationChatlistHeaderDropdownItem.react",
    "WAWebArchivedChatlistHeaderDropdownItem.react",
    "WAWebBizBroadcastsChatlistHeaderDropdownItem.react",
    "WAWebBizToolsChatlistHeaderDropdownItem.react",
    "WAWebCTWAGatingUtils",
    "WAWebCatalogChatlistHeaderDropdownItem.react",
    "WAWebChannelsChatlistHeaderDropdownItems.react",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebEligibilityLogging",
    "WAWebListsChatlistHeaderDropdownItem.react",
    "WAWebLogoutChatlistHeaderDropdownItem.react",
    "WAWebManageAdsDropdownItem.react",
    "WAWebMarkAllChatsAsReadChatlistHeaderDropdownItem.react",
    "WAWebMobilePlatforms",
    "WAWebNewGroupChatlistHeaderDropdownItem.react",
    "WAWebOrdersChatlistHeaderDropdownItem.react",
    "WAWebQuickRepliesChatlistHeaderDropdownItem.react",
    "WAWebSMBUserJourneyLogger",
    "WAWebScreenLockChatlistHeaderDropdownItem.react",
    "WAWebSelectChatsChatlistHeaderDropdownItem.react",
    "WAWebSettingsGetters",
    "WAWebStarredChatlistHeaderDropdownItem.react",
    "WAWebUserPrefsScreenLock",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumWebcMenuItemLabel",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebDesktopUpsellWamImpression",
    "useWAWebExternalBetaOptIn",
    "useWAWebSettingsValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function c(e) {
        const t = o("react-compiler-runtime").c(37);
        const { activeAccountInfo, chatListCollapsed, isMultiSelectMode, startMultiSelect, updateActiveNavBarItem } = e;
        let m;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            m = [
                o("WAWebSettingsGetters").getShowArchiveV2
            ];
            t[0] = m;
        } else {
            m = t[0];
        }
        const p = o("useWAWebSettingsValues").useSettingsValues(m);
        const _ = p[0];
        let f;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            f = [];
            t[1] = f;
        } else {
            f = t[1];
        }
        e_useEffect(d, f);
        const g = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn();
        const isBetaUser = g[0];
        const isBeta = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb();
        let C;
        if (t[2] !== isBetaUser || t[3] !== isBeta) {
            C = {
                isCtaVisible: false,
                source: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CHATLIST_DROPDOWN,
                isBeta,
                isBetaUser
            };
            t[2] = isBetaUser;
            t[3] = isBeta;
            t[4] = C;
        } else {
            C = t[4];
        }
        o("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression(C);
        let b;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            b = o("WAWebUserPrefsScreenLock").getScreenLockEnabled();
            t[5] = b;
        } else {
            b = t[5];
        }
        const v = b;
        let S;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            S = o("WAWebEligibilityLogging").eligibilityLogger.getValue("wa_web_app_lock_upsell");
            t[6] = S;
        } else {
            S = t[6];
        }
        const R = S;
        let L;
        if (t[7] !== updateActiveNavBarItem) {
            L = s.jsx(r("WAWebBizToolsChatlistHeaderDropdownItem.react"), {
                updateActiveNavBarItem
            });
            t[7] = updateActiveNavBarItem;
            t[8] = L;
        } else {
            L = t[8];
        }
        let E;
        let k;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            E = s.jsx(r("WAWebNewGroupChatlistHeaderDropdownItem.react"), {});
            k = s.jsx(o("WAWebChannelsChatlistHeaderDropdownItems.react").WAWebCreateChannelChatlistHeaderDropdownItem, {});
            t[9] = E;
            t[10] = k;
        } else {
            E = t[9];
            k = t[10];
        }
        let I;
        if (t[11] !== activeAccountInfo) {
            I = o("WAWebMobilePlatforms").isSMB() && s.jsx(r("WAWebAdsCreationChatlistHeaderDropdownItem.react"), {
                activeAccountInfo
            });
            t[11] = activeAccountInfo;
            t[12] = I;
        } else {
            I = t[12];
        }
        let T;
        if (t[13] !== activeAccountInfo) {
            T = activeAccountInfo != null && activeAccountInfo !== "not-linked" && o("WAWebCTWAGatingUtils").shouldShowLegacyManageAdsEntry(activeAccountInfo) && s.jsx(r("WAWebManageAdsDropdownItem.react"), {
                activeAccountInfo
            });
            t[13] = activeAccountInfo;
            t[14] = T;
        } else {
            T = t[14];
        }
        let D;
        let x;
        let $;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            D = s.jsx(r("WAWebBizBroadcastsChatlistHeaderDropdownItem.react"), {});
            x = s.jsx(r("WAWebCatalogChatlistHeaderDropdownItem.react"), {});
            $ = s.jsx(r("WAWebOrdersChatlistHeaderDropdownItem.react"), {});
            t[15] = D;
            t[16] = x;
            t[17] = $;
        } else {
            D = t[15];
            x = t[16];
            $ = t[17];
        }
        let P;
        if (t[18] !== _) {
            P = !_ && s.jsx(r("WAWebArchivedChatlistHeaderDropdownItem.react"), {});
            t[18] = _;
            t[19] = P;
        } else {
            P = t[19];
        }
        let N;
        let M;
        if (t[20] === Symbol.for("react.memo_cache_sentinel")) {
            N = s.jsx(r("WAWebQuickRepliesChatlistHeaderDropdownItem.react"), {});
            M = s.jsx(r("WAWebStarredChatlistHeaderDropdownItem.react"), {});
            t[20] = N;
            t[21] = M;
        } else {
            N = t[20];
            M = t[21];
        }
        let w;
        if (t[22] !== chatListCollapsed || t[23] !== isMultiSelectMode || t[24] !== startMultiSelect) {
            w = s.jsx(r("WAWebSelectChatsChatlistHeaderDropdownItem.react"), {
                chatListCollapsed,
                isMultiSelectMode,
                startMultiSelect
            });
            t[22] = chatListCollapsed;
            t[23] = isMultiSelectMode;
            t[24] = startMultiSelect;
            t[25] = w;
        } else {
            w = t[25];
        }
        let A;
        let F;
        let O;
        let B;
        let W;
        if (t[26] === Symbol.for("react.memo_cache_sentinel")) {
            A = s.jsx(r("WAWebListsChatlistHeaderDropdownItem.react"), {});
            F = s.jsx(r("WAWebMarkAllChatsAsReadChatlistHeaderDropdownItem.react"), {});
            O = s.jsx(o("WAWebChannelsChatlistHeaderDropdownItems.react").WAWebFindChannelsChatlistHeaderDropdownItem, {});
            B = s.jsx(r("WDSMenuItem.react"), {
                type: "separator"
            });
            W = v ? s.jsx(r("WAWebScreenLockChatlistHeaderDropdownItem.react"), {}) : <>{R && s.jsx(r("WAWebScreenLockChatlistHeaderDropdownItem.react"), {})}{s.jsx(r("WAWebLogoutChatlistHeaderDropdownItem.react"), {})}</>;
            t[26] = A;
            t[27] = F;
            t[28] = O;
            t[29] = B;
            t[30] = W;
        } else {
            A = t[26];
            F = t[27];
            O = t[28];
            B = t[29];
            W = t[30];
        }
        let q;
        if (t[31] !== T || t[32] !== P || t[33] !== w || t[34] !== L || t[35] !== I) {
            const U = <>{L}{E}{k}{I}{T}{D}{x}{$}{P}{N}{M}{w}{A}{F}{O}{B}{W}</>;
            const Component = r("WDSMenu.react");
            q = <Component>{U}</Component>;
            t[31] = T;
            t[32] = P;
            t[33] = w;
            t[34] = L;
            t[35] = I;
            t[36] = q;
        } else {
            q = t[36];
        }
        return q;
    }
    function d() {
        o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.OPEN);
        if (o("WAWebMobilePlatforms").isSMB()) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
                featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_HOME,
                userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.OVERFLOW_MENU,
                entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.OVERFLOW_MENU,
                userActionTarget: "overflow_menu_button"
            });
        }
    }
    l.default = c;
}, 98);