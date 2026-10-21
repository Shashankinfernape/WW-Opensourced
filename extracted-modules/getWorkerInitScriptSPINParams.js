__d("getWorkerInitScriptSPINParams", [
    "SiteData",
    "StaticSiteData",
    "objectEntries"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        let n;
        let o;
        const a = (n = r("SiteData"))[(o = r("StaticSiteData")).spin_mhenv_key];
        const i = babelHelpers.extends({
            [o.hs_key]: n.haste_session,
            [o.spin_rev_key]: n[o.spin_rev_key],
            [o.spin_branch_key]: n[o.spin_branch_key],
            [o.spin_time_key]: n[o.spin_time_key]
        }, a ? {
            [r("StaticSiteData").spin_mhenv_key]: a
        } : null);
        return new Map(r("objectEntries")(i));
    }
    l.default = e;
}, 98);