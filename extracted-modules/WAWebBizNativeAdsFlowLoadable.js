__d("WAWebBizNativeAdsFlowLoadable", [
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebBizAdsErrorPopup.react",
    "WAWebBizNativeAdsBoostLanding",
    "WAWebBizNativeAdsFlowTypes",
    "WAWebBizNativeAdsLoadingDrawer.react",
    "WAWebBizNativeAdsQplHelpers",
    "WAWebBizNativeAdsResolveRelayIdentityBundle",
    "WAWebBizNativeAdsScenarioRouter",
    "WAWebLazyLoadedRetriable",
    "WAWebLinkedAccountsJob",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("WAWebBizNativeAdsFlow.react").__setRef("WAWebBizNativeAdsFlowLoadable").load();
            return e.WAWebBizNativeAdsFlow;
        });
        return d.apply(this, arguments);
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("WAWebGetWAAEligibility").__setRef("WAWebBizNativeAdsFlowLoadable").load();
            return e;
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        const t = o("WAWebBizAdCreationResolveStoredIdentity").resolveStoredAccountType();
        if (t === "FB" || !e) {
            return "FB";
        }
        return "WAA";
    }
    function f(e, t) {
        if (t && e === "RETURNING_WITH_ADS") {
            return [
                o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement,
                o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation
            ];
        }
        return null;
    }
    function g(e, t, n, r) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, flowID, n, a) {
            const I = yield c();
            const { accountType, isWAAEligible, linkedPagesPromise, scenario } = e;
            const p = o("WAWebBizNativeAdsBoostLanding").shouldBoostOpenAdCreation(scenario, a);
            const _ = p ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement;
            const g = f(scenario, p);
            const h = scenario === "FIRST_TIME_NOT_WAA_ELIGIBLE" && o("WAWebBizAdCreationResolveStoredIdentity").resolveStoredIdentityForAccountType("FB") != null;
            if ((scenario === "FIRST_TIME_NOT_WAA_ELIGIBLE" || scenario === "HAS_FB_ADS_NOT_WAA_ELIGIBLE") && !h) {
                n?.();
                o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplSuccess();
                return function(e) {
                    return <I {...babelHelpers.extends({
                        flowID,
                        identityBundle: null,
                        initialStack: g,
                        initialStep: _,
                        isWAAEligible,
                        scenario
                    }, e)}/>;
                };
            }
            let C;
            try {
                C = yield o("WAWebBizNativeAdsResolveRelayIdentityBundle").resolveBizNativeAdsRelayIdentityBundle(accountType, flowID, linkedPagesPromise);
            } catch (error) {
                r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(error)).mustfix(`BizNativeAdsFlowLoadable: phase 2 identity resolution failed for accountType: ${accountType}`);
                throw error;
            }
            if (p && C != null && C.adCreationEntrypointReference == null) {
                C = yield o("WAWebBizNativeAdsResolveRelayIdentityBundle").prepareDeferredAdCreationEntrypoint({
                    existingBundle: C,
                    flowID
                });
            }
            y(scenario, p);
            n?.();
            return function(e) {
                return <I {...babelHelpers.extends({
                    flowID,
                    identityBundle: C,
                    initialStack: g,
                    initialStep: _,
                    isWAAEligible,
                    scenario
                }, e)}/>;
            };
        });
        return h.apply(this, arguments);
    }
    function y(scenario, t) {
        if (t) {
            o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplCancel();
            return;
        }
        if (scenario === "FIRST_TIME_NOT_WAA_ELIGIBLE" || scenario === "HAS_FB_ADS_NO_FB_ACCESS_TOKEN" || scenario === "HAS_FB_ADS_WAA_ACTIVE") {
            o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplSuccess();
        }
    }
    function C({ flowID, initialLoadingStep, onLoadComplete, phase1Result, preselectedProductId }) {
        const p = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (phase1Result != null) {
                return g(phase1Result, flowID, onLoadComplete, preselectedProductId);
            }
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.BUNDLE_LOAD_START);
            const y = o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
            const C = yield (e || (e = n("Promise"))).all([
                m(),
                c()
            ]);
            const b = C[0];
            const V = C[1];
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.BUNDLE_LOAD_END);
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.ELIGIBILITY_CHECK_START);
            const S = yield b(flowID);
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.ELIGIBILITY_CHECK_END);
            const activeIdentityType = _(S);
            let L;
            try {
                L = yield o("WAWebBizNativeAdsResolveRelayIdentityBundle").resolveBizNativeAdsRelayIdentityBundle(activeIdentityType, flowID, y);
            } catch (error) {
                r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(error)).mustfix(`BizNativeAdsFlowLoadable: identity bundle resolution failed for accountType: ${activeIdentityType}`);
                throw error;
            }
            if (L == null && activeIdentityType === "FB" && S) {
                L = yield o("WAWebBizNativeAdsResolveRelayIdentityBundle").resolveBizNativeAdsRelayIdentityBundle("WAA", flowID, y);
            }
            const E = L?.linkedPagesInfo ?? (y != null ? yield y : null);
            const k = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario({
                activeIdentityType,
                fbPageHasCreatedAd: E?.fbPageHasCreatedAd ?? false,
                hasValidFBAccessToken: o("WAWebBizAdCreationResolveStoredIdentity").resolveStoredIdentityForAccountType("FB") != null,
                isWAAEligible: S,
                waAdsIdentityPageHasCreatedAd: E?.waAdsIdentityPageHasCreatedAd ?? false
            });
            const I = o("WAWebBizNativeAdsBoostLanding").shouldBoostOpenAdCreation(k, preselectedProductId);
            const T = I ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement;
            const D = f(k, I);
            if (I && L != null && L.adCreationEntrypointReference == null) {
                L = yield o("WAWebBizNativeAdsResolveRelayIdentityBundle").prepareDeferredAdCreationEntrypoint({
                    existingBundle: L,
                    flowID
                });
            }
            onLoadComplete?.();
            const XComponent = function(t) {
                return <V {...babelHelpers.extends({
                    flowID,
                    identityBundle: L,
                    initialStack: D,
                    initialStep: T,
                    isWAAEligible: S,
                    scenario: k
                }, t)}/>;
            };
            return XComponent;
        }), "BizNativeAdsFlow");
        return r("WAWebLoadable")({
            loader: p,
            loading: function(t) {
                if (t.error) {
                    return u.jsx(r("WAWebBizAdsErrorPopup.react"), {
                        fallback: u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                            step: initialLoadingStep
                        })
                    });
                }
                if (onLoadComplete != null) {
                    return <></>;
                }
                return u.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                    step: initialLoadingStep
                });
            }
        });
    }
    l.resolveAccountType = _;
    l.createBizNativeAdsFlowLoadable = C;
}, 98);