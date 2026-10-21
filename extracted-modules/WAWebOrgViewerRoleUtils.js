__d("WAWebOrgViewerRoleUtils", [
    "WAWebSchemaOrg"
], function(t, n, r, o, a, i, l) {
    function e({ viewerRole }) {
        return viewerRole === o("WAWebSchemaOrg").OrgMemberRole.Creator || viewerRole === o("WAWebSchemaOrg").OrgMemberRole.Admin;
    }
    function s(t) {
        return t != null && (t.isMemberDirectoryEnabled === true || e(t));
    }
    l.canViewerAdministerOrg = e;
    l.canReadOrgDirectory = s;
}, 98);