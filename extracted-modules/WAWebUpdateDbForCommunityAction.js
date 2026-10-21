__d("WAWebUpdateDbForCommunityAction", [
    "Promise",
    "WAWebApiParticipantStore",
    "WAWebDBCommunity",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupUnjoinedSubgroupJob",
    "WAWebGroupsParticipantsApi",
    "WAWebSchemaChat",
    "WAWebSchemaGroupMetadata",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return d(e, t, false);
    }
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a) {
            const i = yield (e || (e = n("Promise"))).all([
                o("WAWebDBCommunity").getJoinedSubgroupsMetadata(o("WAWebWidFactory").createWid(t.id)).then((e)=>e.filter((e)=>!o("WAWebWidFactory").createWid(e.id).equals(r))),
                o("WAWebDBCommunity").getUnjoinedSubgroupsMetadata(o("WAWebWidFactory").createWid(t.id))
            ]);
            const l = i[0];
            const u = i[1];
            const c = l.concat(u).map(({ id: t, subject: n })=>({
                    id: o("WAWebWidFactory").createWid(t),
                    subject: n
                }));
            return s(a, c);
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            t.forEach((t)=>{
                t.parentGroupId = n ? e : void 0;
                t.generalSubgroup = n ? t.generalSubgroup : void 0;
                t.hiddenSubgroup = n ? t.hiddenSubgroup : void 0;
            });
            const r = f(t, (yield p(t.map((e)=>e.id))));
            const { joinedSubgroups: a, unjoinedSubgroups: i } = r;
            const l = a.map((t)=>o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(t.id, {
                    parentGroup: n ? e.toString() : void 0,
                    generalSubgroup: n ? t.generalSubgroup : void 0,
                    hiddenSubgroup: n ? t.hiddenSubgroup : void 0
                }));
            const s = o("WAWebGroupUnjoinedSubgroupJob").updateUnjoinedSubgroupsJob(i, e, n);
            return [].concat(l, [
                s
            ]);
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Map((yield o("WAWebGroupsParticipantsApi").bulkGetParticipants(e)).filter(Boolean).map((e)=>[
                    e.groupId,
                    e.participants
                ]));
            const n = o("WAWebUserPrefsMeUser").getMeUserOrThrow().toString();
            return function(e) {
                return t.get(e.toString())?.includes(n) ?? false;
            };
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        return e.reduce((e, n)=>{
            if (t(n.id)) {
                e.joinedSubgroups = e.joinedSubgroups.concat(n);
            } else {
                e.unjoinedSubgroups = e.unjoinedSubgroups.concat(n);
            }
            return e;
        }, {
            joinedSubgroups: [],
            unjoinedSubgroups: []
        });
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = [];
            const r = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
            if (r?.isParentGroup !== true) {
                return n;
            }
            const a = {
                suspended: true,
                terminated: true
            };
            n.push(o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e, a, t));
            const i = yield o("WAWebDBCommunity").getDefaultSubgroup(e);
            if (i != null && (yield o("WAWebGroupsParticipantsApi").checkMyMembership(i))) {
                n.push(o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(i, a, t));
            }
            const l = yield u(r, i, e);
            n.push(...l);
            return n;
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        const t = [];
        t.push(o("WAWebSchemaGroupMetadata").getGroupMetadataTable().remove(e.toString()));
        t.push(o("WAWebSchemaChat").getChatTable().remove(e.toString()));
        return t;
    }
    function C(e, t, n) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = [];
            const a = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
            if (a == null || a.defaultSubgroup !== true) {
                return r;
            }
            const i = a.parentGroup;
            if (i != null) {
                r.push(o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(o("WAWebWidFactory").createWid(i), babelHelpers.extends({
                    suspended: t
                }, t ? {
                    suspendAppealApprovedSeen: false
                } : null), n));
            }
            return r;
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = [];
            const r = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
            if (r == null || r.isParentGroup !== true) {
                return n;
            }
            const a = yield o("WAWebDBCommunity").getDefaultSubgroup(e);
            if (a != null && (yield o("WAWebGroupsParticipantsApi").checkMyMembership(a))) {
                n.push(o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(a, {
                    terminated: true,
                    parentGroup: void 0
                }, t));
            }
            const i = yield u(r, a, e);
            n.push(...i);
            n.push(...y(e));
            return n;
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = [];
            if (!e) {
                return t;
            }
            const n = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
            if (!n || n.isParentGroup !== true) {
                return t;
            }
            const r = yield o("WAWebDBCommunity").getDefaultSubgroup(e);
            const a = r == null ? [] : yield u(n, r, e);
            t.push(...a);
            t.push(...y(e));
            return t;
        });
        return L.apply(this, arguments);
    }
    function E(e, t, n) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            o("WAWebUserPrefsGeneral").removeUserSentMessageToChat(e);
            o("WAWebApiParticipantStore").setAdminshipCache(e.toString(), false);
            const r = [
                o("WAWebGroupHistoryParticipantJob").clearGroupHistoryParticipantStateForGroup(e)
            ];
            if (n) {
                r.push(...yield R(t != null ? o("WAWebWidFactory").createWid(t) : null));
            }
            return r;
        });
        return k.apply(this, arguments);
    }
    l.databaseUpdatesForSubgroupUnlink = s;
    l.partitionSubgroups = f;
    l.databaseUpdatesForIntegrityDeactivateCommunity = g;
    l.maybeUpdateCommunitySuspendedStatus = C;
    l.databaseUpdatesForDeactivateCommunity = v;
    l.databaseUpdatesForExitedCommunity = R;
    l.databaseUpdatesForSelfRemovedFromGroup = E;
}, 98);