__d("WAWebCommerceButton.react", [
    "fbt",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileGetters",
    "WAWebBusinessProfileTypes",
    "WAWebBusinessProfileUtils",
    "WAWebContactGetters",
    "WAWebDrawerManager",
    "WAWebFrontendBusinessProfileGetters",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebTabOrder",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumCatalogEntryPoint",
    "WDSIconIcShoppingBag.react",
    "WDSIconIcStore.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBusinessProfileValues",
    "useWAWebContactValues",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        buttonMargin: {
            marginInlineStart: "x150mmf0",
            $$css: true
        }
    };
    function d(e) {
        const n = o("react-compiler-runtime").c(14);
        const { chat, disabled } = e;
        const l = disabled === undefined ? false : disabled;
        const d = r("useWAWebUIM")();
        const chat_contact = chat.contact;
        let p;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                o("WAWebContactGetters").getBusinessProfile
            ];
            n[0] = p;
        } else {
            p = n[0];
        }
        const _ = o("useWAWebContactValues").useContactValues(chat_contact.id, p);
        const f = _[0];
        const g = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(f?.id, [
            o("WAWebBusinessProfileGetters").getProfileOptions,
            o("WAWebBusinessProfileGetters").getCatalogStatus
        ]) ?? [];
        const h = g[0];
        const y = g[1];
        if (o("WAWebBusinessProfileUtils").hasShop(f)) {
            if (o("WAWebBusinessProfileUtils").isShopBanned(f)) {
                return null;
            }
            let C;
            if (n[1] !== chat.contact.businessProfile) {
                C = function(t) {
                    t?.preventDefault();
                    o("WAWebBusinessProfileUtils").goToShop(chat.contact.businessProfile);
                };
                n[1] = chat.contact.businessProfile;
                n[2] = C;
            } else {
                C = n[2];
            }
            const b = C;
            let v;
            if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
                v = s._("Shop");
                n[3] = v;
            } else {
                v = n[3];
            }
            let S;
            if (n[4] !== l || n[5] !== b) {
                const Component = r("WDSMenuBarItem.react");
                S = <Component tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON} testid="shop-button" icon={r("WDSIconIcShoppingBag.react")} title={v} onClick={b} disabled={l} marginInlineXstyle={c.buttonMargin}/>;
                n[4] = l;
                n[5] = b;
                n[6] = S;
            } else {
                S = n[6];
            }
            return S;
        }
        if (f != null && o("WAWebFrontendBusinessProfileGetters").getIsCatalogDisabledDueToMetaLinking(f)) {
            return null;
        }
        if (h?.commerceExperience === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG || h?.commerceExperience === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG || y === o("WAWebBusinessProfileCollection").CATALOG_EXISTS) {
            let L;
            if (n[7] !== chat || n[8] !== d) {
                L = function(t) {
                    t?.preventDefault();
                    o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView("ChatHeader");
                    const newDrawerContext = o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession, o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB, o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_CHAT);
                    const n = chat.contact.id;
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
                        chat,
                        catalogOwnerJid: n.toJid()
                    }), {
                        transition: "slide-left",
                        uim: d,
                        newDrawerContext
                    });
                };
                n[7] = chat;
                n[8] = d;
                n[9] = L;
            } else {
                L = n[9];
            }
            const E = L;
            let k;
            if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
                k = s._("Catalogue");
                n[10] = k;
            } else {
                k = n[10];
            }
            let I;
            if (n[11] !== l || n[12] !== E) {
                const Component = r("WDSMenuBarItem.react");
                I = <Component tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON} testid="product_catalog-button" icon={r("WDSIconIcStore.react")} title={k} onClick={E} disabled={l} marginInlineXstyle={c.buttonMargin}/>;
                n[11] = l;
                n[12] = E;
                n[13] = I;
            } else {
                I = n[13];
            }
            return I;
        }
        return null;
    }
    l.default = d;
}, 226);