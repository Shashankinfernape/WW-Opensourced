__d("useWAWebViewerAdministersAnyOrg", [
    "WAWebOrgCollection",
    "WAWebOrgViewerRoleUtils",
    "react-compiler-runtime",
    "useWAWebAggregated"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(2);
        const n = o("useWAWebAggregated").useOptionalAggregated(o("WAWebOrgCollection").OrgCollection.allOrganizations, e ? true : null);
        let r;
        if (t[0] !== n) {
            r = n.some(o("WAWebOrgViewerRoleUtils").canViewerAdministerOrg);
            t[0] = n;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    l.default = e;
}, 98);