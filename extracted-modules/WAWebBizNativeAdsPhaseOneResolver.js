__d("WAWebBizNativeAdsPhaseOneResolver", [
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebBizNativeAdsFlowLoadable",
    "WAWebBizNativeAdsQplHelpers",
    "WAWebBizNativeAdsScenarioRouter",
    "WAWebLinkedAccountsJob",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let u;
            const d = o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
            d.catch(r("WAWebNoop"));
            (u = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(u.AdsManagementQplPoint.BUNDLE_LOAD_START);
            const p = yield (e || (e = n("Promise"))).all([
                c(),
                m()
            ]);
            const _ = p[0];
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.BUNDLE_LOAD_END);
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.ELIGIBILITY_CHECK_START);
            const f = yield _(t);
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.ELIGIBILITY_CHECK_END);
            const g = o("WAWebBizNativeAdsFlowLoadable").resolveAccountType(f);
            let h = null;
            try {
                h = yield d;
            } catch (error) {
                r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(error)).warn("PhaseOneResolver: queryLinkedPagesInfo failed, falling back to defaults");
            }
            const y = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario({
                activeIdentityType: g,
                fbPageHasCreatedAd: h?.fbPageHasCreatedAd ?? false,
                hasValidFBAccessToken: o("WAWebBizAdCreationResolveStoredIdentity").resolveStoredIdentityForAccountType("FB") != null,
                isWAAEligible: f,
                waAdsIdentityPageHasCreatedAd: h?.waAdsIdentityPageHasCreatedAd ?? false
            });
            return {
                accountType: g,
                isWAAEligible: f,
                linkedPagesPromise: h != null ? (e || (e = n("Promise"))).resolve(h) : o("WAWebLinkedAccountsJob").queryLinkedPagesInfo().catch((e)=>{
                    r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(e)).warn("PhaseOneResolver: retry queryLinkedPagesInfo also failed");
                    return {
                        fbPageHasCreatedAd: false,
                        fbPageId: null,
                        waAdsIdentityPageHasCreatedAd: false,
                        waPageId: null
                    };
                }),
                scenario: y
            };
        });
        return u.apply(this, arguments);
    }
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("WAWebGetWAAEligibility").__setRef("WAWebBizNativeAdsPhaseOneResolver").load();
            return e;
        });
        return d.apply(this, arguments);
    }
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("WAWebBizNativeAdsFlow.react").__setRef("WAWebBizNativeAdsPhaseOneResolver").load();
            return e;
        });
        return p.apply(this, arguments);
    }
    l.resolvePhaseOne = s;
}, 98);