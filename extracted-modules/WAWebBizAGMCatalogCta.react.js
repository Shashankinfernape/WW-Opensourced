__d("WAWebBizAGMCatalogCta.react", [
    "WAWebBizToolsFlowLoadable",
    "WAWebBizToolsFlowSteps",
    "WAWebDrawerManager",
    "WAWebMessageBubbleActions.react",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumBusinessToolsEntryPointType",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWidFactory",
    "WDSIconIcStore.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    function c(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = s.jsx(r("WDSIconIcStore.react"), babelHelpers.extends({
                height: 32,
                width: 32
            }, e));
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(10);
        const { businessWid, chat, ctaText, onClick } = e;
        let l;
        if (t[0] !== businessWid) {
            l = o("WAWebUserPrefsMeUser").isMeAccount(businessWid);
            t[0] = businessWid;
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = l;
        let d;
        if (t[2] !== businessWid || t[3] !== chat || t[4] !== u || t[5] !== onClick) {
            d = function() {
                onClick();
                if (u) {
                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, {
                        entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType").BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_CONVERSATIONS,
                        initialStep: o("WAWebBizToolsFlowSteps").BizToolsSteps.Catalog
                    }), {
                        transition: "pop-drawer-fast",
                        focusOnUnMount: true
                    });
                } else {
                    const newDrawerContext = o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession, o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB, o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_CATALOG_MESSAGE);
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(s.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
                        chat,
                        catalogOwnerJid: o("WAWebWidFactory").asUserWidOrThrow(businessWid).toJid()
                    }), {
                        transition: "slide-left",
                        newDrawerContext
                    });
                }
            };
            t[2] = businessWid;
            t[3] = chat;
            t[4] = u;
            t[5] = onClick;
            t[6] = d;
        } else {
            d = t[6];
        }
        const m = d;
        let p;
        if (t[7] !== ctaText || t[8] !== m) {
            p = s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                    {
                        label: ctaText,
                        onClick: m,
                        Icon: c
                    }
                ]
            });
            t[7] = ctaText;
            t[8] = m;
            t[9] = p;
        } else {
            p = t[9];
        }
        return p;
    }
    l.default = d;
}, 98);