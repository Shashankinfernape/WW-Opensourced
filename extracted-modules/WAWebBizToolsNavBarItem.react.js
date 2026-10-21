__d("WAWebBizToolsNavBarItem.react", [
    "fbt",
    "WAWebActiveAccountInfoContext.react",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizNativeAdsGatingUtils",
    "WAWebBizToolsFlowLoadable",
    "WAWebBizToolsGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebChatAssignmentGatingUtils",
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebKeyboardTabUtils",
    "WAWebMidDrawerEmptyState.react",
    "WAWebMobilePlatforms",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebNux",
    "WAWebSMBUserJourneyLogger",
    "WAWebShouldShowAdCreationEntryPoint",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumBusinessToolsEntryPointType",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSIconIcStore.react",
    "WDSIconIcStoreFilled.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebAudienceImportIsFeatureSupported",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebNux"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useMemo, useState } = c;
    function PComponent(e) {
        "use no forget";
        const { activeNavBarItem, updateActiveNavBarItem } = e;
        const i = o("WAWebMobilePlatforms").isSMB();
        const l = useMemo(function() {
            return o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
        }, []);
        const c = useState(false);
        const p = c[0];
        const _ = c[1];
        if (i) {
            o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(l).then(()=>{
                _(true);
            });
        }
        const f = useMemo(function() {
            return o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(l);
        }, [
            l
        ]);
        const g = o("useWAWebAudienceImportIsFeatureSupported").useWAWebAudienceImportIsFeatureSupported();
        const h = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_BROADCAST_AUDIENCE_UPLOAD);
        const y = h[0];
        const C = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_AI_TOOLS_NUX);
        const b = C[0];
        const v = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_ADVERTISE_ENTRY_POINT);
        const S = v[0];
        const activeAccountInfo = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo();
        const L = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        o("useWAWebListener").useListener(f, "change:profileOptions", L);
        const E = p && !o("WAWebBizCatalogGatingUtils").blockCatalogCreationECommerceComplianceIndia(f);
        const k = activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.BizTools;
        const I = r(k ? "WDSIconIcStoreFilled.react" : "WDSIconIcStore.react");
        const T = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("fullscreen")?.existsDrawer() === true;
                if (!(k && !t)) {
                    const n = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(u.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, {
                        entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType").BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_BUSINESS_TOOLS_TAB
                    }), {
                        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                        transition: "pop-drawer-fast",
                        focusOnUnMount: true
                    });
                    if (n) {
                        o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
                        updateActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.BizTools);
                        o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.BUSINESS_TOOLS);
                        o("WAWebDrawerManager").DrawerManager.openDrawerMid(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                            descriptorType: "mid_drawer_empty_state",
                            navBarItem: o("WAWebNavBarTypes").NavBarItems.BizTools
                        } : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                            type: o("WAWebNavBarTypes").NavBarItems.BizTools
                        }), {
                            transition: "none",
                            disableRotateFocus: true
                        });
                        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
                            featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_TOOLS_HOME,
                            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
                            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
                            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR,
                            userActionTarget: "business_tools_button"
                        });
                    }
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const D = s._("Tools");
        const x = y && g === true;
        const $ = b && o("WAWebChatAssignmentGatingUtils").isBizAIToolsSettingsEnabled();
        const P = o("WAWebShouldShowAdCreationEntryPoint").computeShouldShowAdCreationEntryPoint({
            activeAccountInfo
        }) && o("WAWebBizNativeAdsGatingUtils").nativeAdsWebAdvertiseBadgeEnabled() && S;
        if (i && E && o("WAWebBizToolsGatingUtils").isBizToolsDrawerEnabled()) {
            const Component = r("WDSMenuBarItem.react");
            return <Component icon={I} title={D} testid="navbar-item-biz-tools" isActive={k} onClick={T} activityIndicator={x || $ || P ? {
                border: true,
                size: "small"
            } : undefined} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
        }
        return null;
    }
    PComponent.displayName = `${PComponent.name} [from ${i.id}]`;
    l.BizToolsNavBarItem = PComponent;
}, 226);