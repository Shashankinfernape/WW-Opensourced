__d("WAWebBizNativeAdsResolveRelayIdentityBundle", [
    "FBLogger",
    "JSResourceForInteraction",
    "Promise",
    "WAWebBizAdCreationConsts",
    "WAWebBizAdManagementRootQuery$Parameters",
    "WAWebBizNativeAdsQplHelpers",
    "WAWebBizNativeAdsStoredFBIdentityStore",
    "WAWebCommonAdsTypes",
    "WAWebCreateWhatsAppAdsIdentity",
    "WAWebFetchAdAccountToken",
    "WAWebGetAccountNonce",
    "WAWebGetAdsRelayEnvironment",
    "WAWebGraphQLServerError",
    "WAWebLinkedAccountsJob",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = r("requireDeferred")("WAWebBizAdCreationRoot.entrypoint").__setRef("WAWebBizNativeAdsResolveRelayIdentityBundle");
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("CometRelay").__setRef("WAWebBizNativeAdsResolveRelayIdentityBundle").load();
            return e.loadEntryPoint;
        });
        return c.apply(this, arguments);
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("WAWebResolveAccountTypeAndAdPage").__setRef("WAWebBizNativeAdsResolveRelayIdentityBundle").load();
            return {
                resolveAdsPage: e.resolveAdsPage,
                resolveIdentityForAccountType: e.resolveIdentityForAccountType
            };
        });
        return m.apply(this, arguments);
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("CometRelay").__setRef("WAWebBizNativeAdsResolveRelayIdentityBundle").load();
            return e.loadQuery;
        });
        return _.apply(this, arguments);
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("WAWebWAAOnboarding").__setRef("WAWebBizNativeAdsResolveRelayIdentityBundle").load();
            return e;
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ existingBundle, flowID, options }) {
            const l = yield (e || (e = n("Promise"))).all([
                d(),
                s.load(),
                u()
            ]);
            const c = l[0];
            const { resolveAdsPage, resolveIdentityForAccountType } = c;
            const _ = l[1];
            const f = l[2];
            const g = yield resolveIdentityForAccountType(existingBundle.accountType);
            if (g == null) {
                throw r("FBLogger")("wa_ctwa_web").mustfixThrow(`Failed to resolve identity for ad creation prep (account type: ${existingBundle.accountType})`);
            }
            const h = yield resolveAdsPage(g, existingBundle.linkedPagesInfo);
            const { pageId, pageType } = h;
            const adCreationEntrypointReference = f({
                getEnvironment: function() {
                    return existingBundle.relayEnvironment;
                }
            }, _, {
                ad_account_id: existingBundle.adAccountId,
                ad_account_type: existingBundle.accountType,
                boost_id: options?.boostId,
                draft_id: options?.draftId,
                flow_id: flowID,
                page_id: pageId
            });
            return babelHelpers.extends({}, existingBundle, {
                adCreationEntrypointReference,
                pageId,
                pageType
            });
        });
        return y.apply(this, arguments);
    }
    function C(e, t, n, r, o) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, flow_id, i, l, c) {
            try {
                var g;
                (g = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(g.AdsManagementQplPoint.IDENTITY_RESOLUTION_START);
                g.adsManagementQplAddPoint(g.AdsManagementQplPoint.RESOLVE_IDENTITY_START);
                const h = yield d();
                const { resolveAdsPage, resolveIdentityForAccountType } = h;
                const b = c ?? (yield resolveIdentityForAccountType(t));
                o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.RESOLVE_IDENTITY_END);
                if (b == null) {
                    if (t === "WAA") {
                        throw r("FBLogger")("wa_ctwa_web").mustfixThrow("Failed to get WA access token");
                    }
                    r("FBLogger")("wa_ctwa_web").warn("resolveIdentityForAccountType returned null for non-WAA account type");
                    return null;
                }
                o("WAWebBizNativeAdsQplHelpers").adsManagementQplAnnotateAccountType(t);
                let R;
                if (b.type === "WAA") {
                    var g;
                    (g = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(g.AdsManagementQplPoint.ONBOARD_WAA_START);
                    const L = yield f();
                    R = yield L(flow_id);
                    g.adsManagementQplAddPoint(g.AdsManagementQplPoint.ONBOARD_WAA_END);
                }
                o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.GET_RELAY_ENV_START);
                o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.QUERY_LINKED_PAGES_START);
                const E = yield (e || (e = n("Promise"))).all([
                    r("WAWebGetAdsRelayEnvironment")(b),
                    i ?? o("WAWebLinkedAccountsJob").queryLinkedPagesInfo()
                ]);
                const relayEnvironment = E[0];
                const linkedPagesInfo = E[1];
                o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.GET_RELAY_ENV_END);
                o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.QUERY_LINKED_PAGES_END);
                const T = t === "FB" && linkedPagesInfo.waPageId != null;
                if (T) {
                    try {
                        const D = yield o("WAWebFetchAdAccountToken").fetchToken();
                        if (D.token != null) {
                            const x = yield r("WAWebGetAccountNonce")(D.token);
                            yield r("WAWebCreateWhatsAppAdsIdentity")(b, x);
                        }
                    } catch (error) {
                        r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(error)).warn("Failed to ensure admin permissions on WA ads identity page");
                    }
                }
                let adCreationEntrypointReference = null;
                let P = null;
                let pageType = null;
                if (l === true) {
                    const M = yield (e || (e = n("Promise"))).all([
                        s.load(),
                        u(),
                        resolveAdsPage(b, linkedPagesInfo)
                    ]);
                    const w = M[0];
                    const A = M[1];
                    const F = M[2];
                    P = F.pageId;
                    pageType = F.pageType;
                    adCreationEntrypointReference = A({
                        getEnvironment: function() {
                            return relayEnvironment;
                        }
                    }, w, {
                        ad_account_id: R,
                        ad_account_type: t,
                        boost_id: null,
                        draft_id: null,
                        flow_id,
                        page_id: P
                    });
                }
                const adManagementQueryVariables = {
                    draftPageId: S(t, linkedPagesInfo),
                    pageId1: linkedPagesInfo.fbPageId ?? linkedPagesInfo.waPageId ?? "",
                    pageId2: linkedPagesInfo.fbPageId != null && linkedPagesInfo.waPageId != null ? linkedPagesInfo.waPageId : null
                };
                let adManagementQueryRef = null;
                const W = adManagementQueryVariables.pageId1 === "";
                if (!W) {
                    var g;
                    (g = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(g.AdsManagementQplPoint.PRELOAD_AD_MGMT_QUERY_START);
                    const q = yield p();
                    adManagementQueryRef = q(relayEnvironment, r("WAWebBizAdManagementRootQuery$Parameters"), {
                        after: null,
                        draft_page_id: adManagementQueryVariables.draftPageId,
                        first: o("WAWebBizAdCreationConsts").AD_MANAGEMENT_INITIAL_LOAD_COUNT,
                        options: {},
                        page_id_1: adManagementQueryVariables.pageId1,
                        page_id_2: adManagementQueryVariables.pageId2
                    }, {
                        fetchPolicy: "network-only"
                    });
                    g.adsManagementQplAddPoint(g.AdsManagementQplPoint.PRELOAD_AD_MGMT_QUERY_END);
                }
                o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.IDENTITY_RESOLUTION_END);
                o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(t);
                return {
                    accountType: t,
                    adAccountId: R,
                    adCreationEntrypointReference,
                    adManagementQueryRef,
                    adManagementQueryVariables,
                    hasLinkedFbPage: linkedPagesInfo.fbPageId != null,
                    hasWeakToken: b.type === "WAA" && b.tokenStrength === o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.WEAK,
                    linkedPagesInfo,
                    pageId: P,
                    pageType,
                    relayEnvironment
                };
            } catch (error) {
                o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplFail("identity_resolution_error");
                const U = r("getErrorSafe")(error);
                v(U, t);
                if (t === "FB") {
                    o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity();
                    return null;
                }
                throw error;
            }
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        const n = e instanceof o("WAWebGraphQLServerError").GraphQLServerError ? ` | ${o("WAWebGraphQLServerError").formatGraphQLServerError(e)}` : "";
        if (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)) {
            r("FBLogger")("wa_ctwa_web").warn(`Token invalid/expired during identity resolution for account type: ${t}${n}`);
        } else if (o("WAWebFetchAdAccountToken").hasTerminalIntegrityDenial(e)) {
            r("FBLogger")("wa_ctwa_web").warn(`Terminal integrity denial during identity resolution for account type: ${t}${n}`);
        } else {
            r("FBLogger")("wa_ctwa_web").catching(e).mustfix(`Unexpected error during identity resolution for account type: ${t}${n}`);
        }
    }
    function S(e, t) {
        if (e === "WAA") {
            return t.waPageId ?? t.fbPageId ?? "";
        }
        return t.fbPageId ?? t.waPageId ?? "";
    }
    l.prepareDeferredAdCreationEntrypoint = h;
    l.resolveBizNativeAdsRelayIdentityBundle = C;
    l.resolveDraftPageId = S;
}, 98);