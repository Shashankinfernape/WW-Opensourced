__d("WAWebCatalogManagementFlowLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WAFilteredCatch",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebCatalogCollection",
    "WAWebContactUtils",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebBizCatalogManagementFlow.react").__setRef("WAWebCatalogManagementFlowLoadable").load();
        return e;
    }), "CatalogManagementFlow");
    const D44 = r("WAWebLoadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingDrawer.react"), {
                title: s._("Catalogue"),
                error: !!t.error
            });
        }
    });
    function m({ entryPoint, isInitialStep, product, promotionCampaign }) {
        _((catalogId, i, l)=>{
            const s = o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession, o("WAWebContactUtils").getMaybeBizPlatformForLogging(catalogId.toString()), entryPoint);
            if (l === true && !i) {
                p();
                return;
            }
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<D44 catalogId={catalogId} product={product} isInitialStep={isInitialStep} promotionCampaign={promotionCampaign}/>, {
                newDrawerContext: s,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
            });
        });
    }
    function p() {
        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
            msg: s._("Couldn't load catalog"),
            id: o("WAWebActionToast.react").genId()
        }));
    }
    function _(e) {
        const t = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        const n = o("WAWebCatalogCollection").CatalogCollection.get(t);
        if (n == null) {
            o("WAWebCatalogCollection").CatalogCollection.find(t).then((n)=>{
                e(t, n);
            }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(n) {
                if (n.status === "not_found" || n.status === 404) {
                    e(t);
                } else {
                    e(t, undefined, true);
                }
            })).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").AdAccountRecoveryRequiredError, function(n) {
                e(t);
            })).catch(()=>{
                e(t, undefined, true);
            });
        } else {
            n.stale = true;
            n.markProductCollectionOld();
            e(t, n);
        }
    }
    l.CatalogManagementFlowLoadable = D44;
    l.openCatalogManagementFlow = m;
    l.showSelfCatalogLoadErrorToast = p;
    l.createCatalogManagementFlowObject = _;
}, 226);