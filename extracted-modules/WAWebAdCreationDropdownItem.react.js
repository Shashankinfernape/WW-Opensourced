__d("WAWebAdCreationDropdownItem.react", [
    "fbt",
    "WALogger",
    "WAWebBizNativeAdsWamLogger",
    "WAWebChatlistUtils",
    "WDSIconIcCampaignMegaphone.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useEffect = u.useEffect;
    function m(e) {
        const n = o("react-compiler-runtime").c(3);
        const a = e.testid ?? "megaphone-refreshed";
        let i;
        if (n[0] !== e || n[1] !== a) {
            i = c.jsx(r("WDSIconIcCampaignMegaphone.react"), babelHelpers.extends({}, e, {
                testid: a
            }));
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            i = n[2];
        }
        return i;
    }
    function p({ adCreationUrlInput, lwiEntryPoint }) {
        const adCreationUrlInput_activeAccountInfo = adCreationUrlInput.activeAccountInfo;
        u_useEffect(function() {
            o("WAWebBizNativeAdsWamLogger").logAdCreationImpression(lwiEntryPoint, adCreationUrlInput_activeAccountInfo !== "not-linked" && adCreationUrlInput_activeAccountInfo.hasFacebookPage);
        }, [
            adCreationUrlInput_activeAccountInfo,
            lwiEntryPoint
        ]);
        const l = function(t) {
            t?.preventDefault();
            o("WAWebChatlistUtils").handleAdCreation({
                adCreationUrlInput,
                lwiEntryPoint
            });
        };
        let u;
        switch(adCreationUrlInput.sourceAdCreation){
            case "whatsapp_smb_web_ad_creation_home_menu_item":
                u = s._("Advertise");
                break;
            case "whatsapp_smb_web_catalog":
                u = s._("Boost");
                break;
            default:
                adCreationUrlInput.sourceAdCreation;
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[AdCreationDropdownItem] missing CTA for source ",
                    ""
                ])), adCreationUrlInput.sourceAdCreation);
                return null;
        }
        const p = "ad-creation-menu-item";
        const Component = r("WDSMenuItem.react");
        return <Component Icon={m} onPress={l} testid={p} title={u}/>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 226);