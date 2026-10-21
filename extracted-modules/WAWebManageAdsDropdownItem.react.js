__d("WAWebManageAdsDropdownItem.react", [
    "fbt",
    "WAWebBizNativeAdsWamLogger",
    "WAWebChatlistUtils",
    "WAWebWamEnumLwiEntryPoint",
    "WAWebWamEnumManageAdsEntryPoint",
    "WDSIconIcAdGroup.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    function d(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_activeAccountInfo = e.activeAccountInfo;
        let a;
        if (t[0] !== e_activeAccountInfo) {
            a = [
                e_activeAccountInfo
            ];
            t[0] = e_activeAccountInfo;
            t[1] = a;
        } else {
            a = t[1];
        }
        e_useEffect(m, a);
        let i;
        if (t[2] !== e_activeAccountInfo) {
            i = function(t) {
                t?.preventDefault();
                o("WAWebChatlistUtils").handleManageAds({
                    activeAccountInfo: e_activeAccountInfo,
                    entryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_HOME_SCREEN_OVERFLOW_MANAGE_ITEM,
                    sourceManageAdsType: "whatsapp_smb_web_manage_ads_home_menu_item"
                });
            };
            t[2] = e_activeAccountInfo;
            t[3] = i;
        } else {
            i = t[3];
        }
        const l = i;
        let d;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            d = s._("Manage ads");
            t[4] = d;
        } else {
            d = t[4];
        }
        const p = d;
        let _;
        if (t[5] !== l) {
            const Component = r("WDSMenuItem.react");
            _ = <Component Icon={r("WDSIconIcAdGroup.react")} onPress={l} testid="manage-ads-menu-item" title={p}/>;
            t[5] = l;
            t[6] = _;
        } else {
            _ = t[6];
        }
        return _;
    }
    function m() {
        o("WAWebBizNativeAdsWamLogger").logManageAdsEntryPointImpression(o("WAWebWamEnumManageAdsEntryPoint").MANAGE_ADS_ENTRY_POINT.WEB_OVERFLOW_MENU);
    }
    l.default = d;
}, 226);