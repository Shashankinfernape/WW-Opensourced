__d("WAWebCatalogChatlistHeaderDropdownItem.react", [
    "fbt",
    "WAWebBizCatalogGatingUtils",
    "WAWebBusinessProfileUtils",
    "WAWebCatalogManagementFlowLoadable",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebConfirmPopup.react",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebProductCatalogMetaLinkingGatingUtils",
    "WAWebSelfBusinessProfileLookup",
    "WAWebShopsLog",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumShopsManagementAction",
    "WAWebWamEnumWebcMenuItemLabel",
    "WDSIconIcGridOn.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebSourceSnapshot"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = new EventTarget;
    function d() {
        const e = o("react-compiler-runtime").c(11);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = o("WAWebSelfBusinessProfileLookup").getSelfBusinessProfile();
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            a = function() {
                return [
                    o("WAWebMobilePlatforms").isSMB() && o("WAWebBizCatalogGatingUtils").blockCatalogCreationECommerceComplianceIndia(n),
                    o("WAWebBusinessProfileUtils").hasShop(n)
                ];
            };
            e[1] = a;
        } else {
            a = e[1];
        }
        const i = r("useWAWebSourceSnapshot")(n ?? c, "change:profileOptions", a);
        const l = i[0];
        const d = i[1];
        if (!(o("WAWebMobilePlatforms").isSMB() && !l)) {
            return null;
        }
        let p;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            p = o("WAWebProductCatalogMetaLinkingGatingUtils").shouldShowMetaLinkedDisabledCatalogTooltipForSelf();
            e[2] = p;
        } else {
            p = e[2];
        }
        const disabled = p;
        let f;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = function() {
                o("WAWebBusinessProfileUtils").goToCommerceManager(n);
                o("WAWebShopsLog").logShopsManagementEvent(o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_COMMERCE_MANAGER_IN_CATALOG_SETTING);
            };
            e[3] = f;
        } else {
            f = e[3];
        }
        const g = f;
        let h;
        if (e[4] !== d) {
            h = function(t) {
                t?.preventDefault();
                if (d) {
                    const e = o("WAWebBusinessProfileUtils").isShopBanned(n);
                    const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                    o("WAWebModalManager").ModalManager.open(<Component title={s._("Catalogue disabled")} onOK={g} okText={s._("Commerce Manager")} onCancel={m}>{e ? s._("You can't restore your catalogue at this time because we have disabled your shop for not complying with our policies. Learn more in Commerce Manager.") : s._("Your catalogue is temporarily disabled because WhatsApp is a sales channel for your shop. To restore your catalogue, go to Commerce Manager and set the shop's visibility to \"hidden\", or remove WhatsApp from the Business Manager account.")}</Component>);
                    o("WAWebShopsLog").logShopsManagementEvent(o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_CATALOG_SETTING);
                } else {
                    o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView("ToolsMenu");
                    o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow({
                        entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS,
                        isInitialStep: true
                    });
                    o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.CATALOG);
                }
            };
            e[4] = d;
            e[5] = h;
        } else {
            h = e[5];
        }
        const y = h;
        let C;
        if (e[6] !== d) {
            C = d ? s._("Catalogue (temporarily disabled)") : s._("Catalogue");
            e[6] = d;
            e[7] = C;
        } else {
            C = e[7];
        }
        const b = C;
        let v;
        if (e[8] !== y || e[9] !== b) {
            const Component = r("WDSMenuItem.react");
            v = <Component testid="mi-catalog menu-item" Icon={r("WDSIconIcGridOn.react")} onPress={y} title={b} disabled={disabled}/>;
            e[8] = y;
            e[9] = b;
            e[10] = v;
        } else {
            v = e[10];
        }
        return v;
    }
    function m() {
        o("WAWebModalManager").ModalManager.close();
        o("WAWebShopsLog").logShopsManagementEvent(o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_CANCEL_IN_CATALOG_SETTING);
    }
    l.default = d;
}, 226);