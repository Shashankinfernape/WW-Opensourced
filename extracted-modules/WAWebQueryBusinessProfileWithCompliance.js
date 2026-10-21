__d("WAWebQueryBusinessProfileWithCompliance", [
    "Promise",
    "WAWebBackendErrors",
    "WAWebMerchantComplianceJob",
    "WAWebQueryBusinessProfile"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        const r = (e || (e = n("Promise"))).all([
            o("WAWebQueryBusinessProfile").queryBusinessProfile(t),
            o("WAWebMerchantComplianceJob").getMerchantCompliance(t)
        ]).then(u);
        return o("WAWebBackendErrors").attachErrorLogger(r, "Query business profile with compliance failed");
    }
    function u([t, n]) {
        return t.map((e, t)=>babelHelpers.extends({}, e, {
                profile: babelHelpers.extends({}, e.profile, {
                    legal_entity_details: n[t]
                })
            }));
    }
    l.queryBusinessProfileWithCompliance = s;
}, 98);