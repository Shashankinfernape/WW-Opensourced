__d("WAWebQuerySubGroupAction", [
    "WAFilteredCatch",
    "WAWebBackendErrors",
    "WAWebGroupMetadataCollection",
    "WAWebGroupQuerySubGroupsJob",
    "WAWebGroupUnjoinedSubgroupJob",
    "WAWebLidMappingUsernameLearnUtils",
    "WAWebMexFetchAllSubgroupsJob",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUpdateSubgroupsCommunityAction",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebMexFetchAllSubgroupsJob").mexFetchAllSubgroups(e, t != null && t.length ? t[0] : undefined, "INTERACTIVE");
            yield u(n, e);
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebUpdateSubgroupsCommunityAction").getUnjoinedSubgroups(e);
            const r = n.map((e)=>e.id);
            yield o("WAWebGroupUnjoinedSubgroupJob").updateUnjoinedSubgroupsJob(n, t);
            yield o("WAWebGroupUnjoinedSubgroupJob").cleanUnjoinedSubgroupsJob(r, t);
            o("WAWebUpdateSubgroupsCommunityAction").updateUnjoinedSubgroupsInCollection(n, t);
            o("WAWebUpdateSubgroupsCommunityAction").cleanUnjoinedSubgroupsInCollection(r, t);
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(subgroupId, parentGroupId) {
            const a = r("WAWebGroupMetadataCollection").get(parentGroupId);
            let i;
            try {
                i = yield o("WAWebGroupQuerySubGroupsJob").querySubgroup({
                    anyJoinedSubgroupId: a != null && a.joinedSubgroups.length ? a.joinedSubgroups[0] : undefined,
                    parentGroupId,
                    subgroupId
                });
            } catch (error) {
                return o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(t) {
                    if (t.status === 404 || t.status === 405) {
                        e(parentGroupId);
                    }
                })(error);
            }
            yield o("WAWebLidMappingUsernameLearnUtils").processParsedGroupInfosForLidMappingAndUsernames([
                i
            ]);
            const l = r("WAWebUnjoinedSubgroupMetadataCollection").get(subgroupId.toString());
            if (l != null) {
                l.set({
                    subject: i.subject,
                    participants: i.participants,
                    desc: i.desc,
                    creation: i.creation,
                    owner: i.owner,
                    size: i.size,
                    adminRequestRequired: i.adminRequestRequired,
                    membershipApprovalMode: i.membershipApprovalMode,
                    membershipApprovalRequest: i.membershipApprovalRequest,
                    suspended: i.suspended
                });
                return l;
            }
        });
        return m.apply(this, arguments);
    }
    l.queryAndUpdateSubgroupsMetadata = e;
    l.querySubgroupInfo = d;
}, 98);