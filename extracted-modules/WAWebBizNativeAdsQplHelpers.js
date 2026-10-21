__d("WAWebBizNativeAdsQplHelpers", [
    "$InternalEnum",
    "WAWebQplFlow",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        BUNDLE_LOAD_START: "bundle_load_start",
        BUNDLE_LOAD_END: "bundle_load_end",
        ELIGIBILITY_CHECK_START: "eligibility_check_start",
        ELIGIBILITY_CHECK_END: "eligibility_check_end",
        IDENTITY_RESOLUTION_START: "identity_resolution_start",
        IDENTITY_RESOLUTION_END: "identity_resolution_end",
        FETCH_TOKEN_START: "fetch_token_start",
        FETCH_TOKEN_END: "fetch_token_end",
        RESOLVE_IDENTITY_START: "resolve_identity_start",
        RESOLVE_IDENTITY_END: "resolve_identity_end",
        ONBOARD_WAA_START: "onboard_waa_start",
        ONBOARD_WAA_END: "onboard_waa_end",
        GET_RELAY_ENV_START: "get_relay_env_start",
        GET_RELAY_ENV_END: "get_relay_env_end",
        RESOLVE_ADS_PAGE_START: "resolve_ads_page_start",
        RESOLVE_ADS_PAGE_END: "resolve_ads_page_end",
        LOAD_ENTRYPOINT_START: "load_entrypoint_start",
        LOAD_ENTRYPOINT_END: "load_entrypoint_end",
        QUERY_LINKED_PAGES_START: "query_linked_pages_start",
        QUERY_LINKED_PAGES_END: "query_linked_pages_end",
        PRELOAD_AD_MGMT_QUERY_START: "preload_ad_mgmt_query_start",
        PRELOAD_AD_MGMT_QUERY_END: "preload_ad_mgmt_query_end",
        GRAPHQL_QUERY_START: "graphql_query_start",
        GRAPHQL_QUERY_END: "graphql_query_end",
        TABLE_RENDER: "table_render",
        PHASE_1_END: "phase_1_end",
        PHASE_2_START: "phase_2_start"
    });
    let s = null;
    function u(is_navigate_back, t) {
        const n = s;
        if (n != null && n.isActive()) {
            n.endCancel();
        }
        const a = r("qpl")._(1029378829, "3548");
        const i = o("WAWebQplFlow").startQplFlow(a, {
            annotations: babelHelpers.extends({}, t, {
                bool: babelHelpers.extends({}, t?.bool, {
                    is_navigate_back
                })
            }),
            timeoutInMs: 30000
        });
        s = i;
        return i;
    }
    function c(e, t) {
        s?.addPoint(e, t);
    }
    function d(account_type) {
        s?.addAnnotations({
            string: {
                account_type
            }
        });
    }
    function m(e) {
        s?.addAnnotations({
            string: {
                scenario: e
            }
        });
    }
    function p(ad_count) {
        s?.addAnnotations({
            int: {
                ad_count
            }
        });
    }
    function _(e) {
        s?.endSuccess(e);
        s = null;
    }
    function f(e, t) {
        s?.endFail(e, t);
        s = null;
    }
    function g() {
        s?.endCancel();
        s = null;
    }
    l.AdsManagementQplPoint = e;
    l.startAdsManagementQpl = u;
    l.adsManagementQplAddPoint = c;
    l.adsManagementQplAnnotateAccountType = d;
    l.adsManagementQplAnnotateScenario = m;
    l.adsManagementQplAnnotateAdCount = p;
    l.endAdsManagementQplSuccess = _;
    l.endAdsManagementQplFail = f;
    l.endAdsManagementQplCancel = g;
}, 98);