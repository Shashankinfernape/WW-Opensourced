__d("WAWebGroupParticipantsJob", [
    "WAJobOrchestratorTypes",
    "WAWebGroupsParticipantsApi",
    "WAWebLidMigrationUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaParticipant",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("updateParticipants", function(e) {
            return o("WAWebGroupsParticipantsApi").updateParticipants(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP
        }).waitUntilCompleted(e);
    }
    function s(e, t) {
        const n = {
            parentGroupId: e,
            isParentGroupLidAddressingMode: t
        };
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("migrateParticipantsToLIDOrPN", function(e) {
            return g(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP
        }).waitUntilCompleted(n);
    }
    function u({ group: t, isOffline: n, participants: r, reason: a }) {
        const i = {
            group: t,
            participants: r,
            isOffline: n,
            reason: a
        };
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("addParticipants", function(e) {
            return o("WAWebGroupsParticipantsApi").addParticipants(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP
        }).waitUntilCompleted(i);
    }
    function c(e, t, n, r, a, i, l) {
        const s = {
            group: e,
            participants: t,
            timestamp: n,
            author: r,
            reason: a,
            groupMetadata: i,
            isOffline: l
        };
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("removeParticipants", function(e) {
            return o("WAWebGroupsParticipantsApi").removeParticipants(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP
        }).waitUntilCompleted(s);
    }
    function d({ group: t, groupMetadata: n, isOffline: r, participants: a }) {
        const i = {
            group: t,
            participants: a,
            groupMetadata: n,
            isOffline: r
        };
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("demoteParticipants", function(e) {
            return o("WAWebGroupsParticipantsApi").demoteParticipants(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP
        }).waitUntilCompleted(i);
    }
    function m(e, t, n, r) {
        const a = {
            group: e,
            participants: t,
            groupMetadata: n,
            isOffline: r
        };
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("promoteParticipants", function(e) {
            return o("WAWebGroupsParticipantsApi").promoteParticipants(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP
        }).waitUntilCompleted(a);
    }
    function p(e, t) {
        const n = {
            group: e,
            newSuperAdmin: t
        };
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("setGroupSuperAdmin", function(e) {
            return o("WAWebGroupsParticipantsApi").setGroupSuperAdmin(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP
        }).waitUntilCompleted(n);
    }
    function _(e, t, n) {
        const r = {
            group: e,
            participants: t,
            isOffline: n
        };
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("promoteCommunityParticipants", function(e) {
            return o("WAWebGroupsParticipantsApi").promoteCommmunityParticipants(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP
        }).waitUntilCompleted(r);
    }
    function f({ group: t, isOffline: n, participants: r }) {
        const a = {
            group: t,
            participants: r,
            isOffline: n
        };
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("demoteCommunityParticipants", function(e) {
            return o("WAWebGroupsParticipantsApi").demoteCommmunityParticipants(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP
        }).waitUntilCompleted(a);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isParentGroupLidAddressingMode: a, parentGroupId: i }) {
            const l = yield o("WAWebSchemaParticipant").getParticipantTable().get(i);
            if (l != null) {
                const s = a ? o("WAWebLidMigrationUtils").toUserLidOrThrow : o("WAWebLidMigrationUtils").toPnOrThrow;
                const u = function(t) {
                    return t.map((e)=>s(o("WAWebWidFactory").createUserWidOrThrow(e)).toString());
                };
                const c = u(l.participants);
                const d = u(l.admins);
                const m = u(l?.superAdmins ?? []);
                const p = l.pastParticipants?.map(function(e) {
                    const t = s(o("WAWebWidFactory").createUserWidOrThrow(e.jid)).toString();
                    return babelHelpers.extends({}, e, {
                        jid: t
                    });
                }) ?? [];
                yield o("WAWebSchemaParticipant").getParticipantTable().merge(i, {
                    groupId: i,
                    participants: c,
                    pastParticipants: p,
                    admins: d,
                    superAdmins: m
                });
            }
        });
        return h.apply(this, arguments);
    }
    l.updateParticipantsJob = e;
    l.migrateParentGroupToLIDOrFallbackToPNJob = s;
    l.addParticipantsJob = u;
    l.removeParticipantsJob = c;
    l.demoteParticipantsJob = d;
    l.promoteParticipantsJob = m;
    l.setGroupSuperAdminJob = p;
    l.promoteCommunityParticipantsJob = _;
    l.demoteCommunityParticipantsJob = f;
}, 98);