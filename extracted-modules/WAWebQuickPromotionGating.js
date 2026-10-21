__d("WAWebQuickPromotionGating", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCTWAConstants",
    "WAWebMobilePlatforms"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return o("WAWebABProps").getABPropConfigValue("privacy_tips_profile_build");
    }
    function u() {
        return o("WATimeUtils").castToUnixTime(o("WAWebABProps").getABPropConfigValue("updates_privacy_notice_rollout_date"));
    }
    function c() {
        return o("WAWebMobilePlatforms").isSMB() && o("WAWebABProps").getABPropConfigValue("smb_graphql_to_fetch_qp_enabled");
    }
    function d() {
        return o("WAWebABProps").getABPropConfigValue("smb_graphql_to_fetch_qp_frequency_mins");
    }
    function m() {
        if (o("WAWebMobilePlatforms").isSMB()) {
            return d();
        }
        return o("WAWebABProps").getABPropConfigValue("consumer_web_qp_graphql_to_fetch_qp_frequency_mins");
    }
    function p() {
        return !o("WAWebMobilePlatforms").isSMB() || c();
    }
    function _(t) {
        const n = new Map(Array.from(o("WAWebCTWAConstants").KNOWN_QP_SURFACES.values(), function(e) {
            return [
                e,
                e
            ];
        }));
        const r = new Set;
        const a = [];
        let i = 0;
        t.split(",").forEach((e)=>{
            const t = n.get(e);
            if (t != null) {
                r.add(t);
            } else {
                i++;
                if (a.length < 3) {
                    a.push(e);
                }
            }
        });
        if (i > 0) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "qpSurfaceIdsUsingGraphQL: ",
                " unknown surface IDs => ",
                ""
            ])), i, a);
        }
        return r;
    }
    function f() {
        return _(o("WAWebABProps").getABPropConfigValue("smb_graphql_to_fetch_qp_surface_ids"));
    }
    function g() {
        return _(o("WAWebABProps").getABPropConfigValue("consumer_graphql_web_to_fetch_qp_surface_ids"));
    }
    function h() {
        if (o("WAWebMobilePlatforms").isSMB()) {
            return f();
        }
        return g();
    }
    l.profilePrivacyTipsEnabled = s;
    l.getUpdatesTabPrivacyNoticeRolloutDate = u;
    l.qpGraphQLEnabledSMB = c;
    l.qpGraphQLFetchIntervalMinutesSMB = d;
    l.qpGraphQLFetchIntervalMinutes = m;
    l.qpGraphQLEnabled = p;
    l.qpSurfaceIdsUsingGraphQLSMB = f;
    l.qpSurfaceIdsUsingGraphQLConsumer = g;
    l.qpSurfaceIdsUsingGraphQL = h;
}, 98);