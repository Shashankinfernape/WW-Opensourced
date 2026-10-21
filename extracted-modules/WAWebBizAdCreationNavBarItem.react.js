__d("WAWebBizAdCreationNavBarItem.react", [
    "fbt",
    "WAWebActiveAccountInfoContext.react",
    "WAWebAdvertiseEntryPointQplHelpers",
    "WAWebAuthAgentFeatureControlGateKeeper",
    "WAWebBizNativeAdsGatingUtils",
    "WAWebBizNativeAdsWamLogger",
    "WAWebChatlistUtils",
    "WAWebNavBarLogEvents",
    "WAWebNavBarTypes",
    "WAWebNux",
    "WAWebShouldShowAdCreationEntryPoint",
    "WAWebWamEnumLwiEntryPoint",
    "WAWebWamEnumWebcNavbarItemLabel",
    "WDSIconIcCampaignMegaphone.react",
    "WDSIconIcCampaignMegaphoneFilled.react",
    "WDSMenuBarItem.react",
    "react",
    "useWAWebNux"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function d(e) {
        "use no forget";
        const e_activeNavBarItem = e.activeNavBarItem;
        const n = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo();
        const a = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_ADVERTISE_ENTRY_POINT);
        const i = a[0];
        const l = a[2];
        const d = s._("Advertise");
        const m = o("WAWebShouldShowAdCreationEntryPoint").computeShouldShowAdCreationEntryPoint({
            activeAccountInfo: n
        });
        e_useEffect(function() {
            if (m) {
                o("WAWebBizNativeAdsWamLogger").logAdCreationImpression(o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_SCREEN_ICON, (n !== "not-linked" && n?.hasFacebookPage) ?? false);
                o("WAWebAdvertiseEntryPointQplHelpers").endAdvertiseEntryPointQplVisible(n !== "not-linked");
            } else {
                if (Object.is(n, null) && !o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled("CTW_ADS")) {
                    o("WAWebBizNativeAdsWamLogger").logAdCreationEntryPointSuppressed(o("WAWebBizNativeAdsWamLogger").AdCreationEntryPointSuppressionReason.LINKED_ACCOUNTS_NULL);
                    o("WAWebAdvertiseEntryPointQplHelpers").endAdvertiseEntryPointQplSuppressed(o("WAWebBizNativeAdsWamLogger").AdCreationEntryPointSuppressionReason.LINKED_ACCOUNTS_NULL);
                }
            }
        }, [
            m,
            n
        ]);
        const p = e_activeNavBarItem === o("WAWebNavBarTypes").NavBarItems.AdCreation;
        const _ = m && o("WAWebBizNativeAdsGatingUtils").nativeAdsWebAdvertiseBadgeEnabled();
        const f = _ && i;
        const g = function() {
            if (f) {
                l();
            }
            if (!p) {
                if (n != null) {
                    o("WAWebChatlistUtils").handleAdCreation({
                        adCreationUrlInput: {
                            activeAccountInfo: n,
                            sourceAdCreation: "whatsapp_smb_web_ad_creation_home_screen_icon"
                        },
                        lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_SCREEN_ICON
                    });
                }
                o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.ADS_CREATION);
            }
        };
        const h = r(p ? "WDSIconIcCampaignMegaphoneFilled.react" : "WDSIconIcCampaignMegaphone.react");
        if (m) {
            const Component = r("WDSMenuBarItem.react");
            return <Component icon={h} title={d} testid="navbar-item-ads-creation" isActive={p} onClick={g} activityIndicator={f ? {
                accessibilityText: s._("New"),
                border: true,
                size: "small",
                testid: "navbar-item-ads-creation-badge"
            } : undefined} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
        }
        return null;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.BizAdCreationNavBarItem = d;
}, 226);