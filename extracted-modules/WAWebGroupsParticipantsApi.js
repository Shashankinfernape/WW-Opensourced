__d("WAWebGroupsParticipantsApi", [
    "WAWebAdvSyncDeviceListApi",
    "WAWebDBGroupParticipant",
    "WAWebDBParticipantTypes",
    "WAWebGroupType",
    "WAWebGroupUtils",
    "WAWebOfflineDeviceCache",
    "WAWebPnhCagUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ group: t, groupInfo: n, isOffline: r, participants: a, skipDeviceSync: l = false }) {
            const s = [];
            const u = [];
            a.forEach((e)=>{
                if (e.isAdmin) {
                    s.push(e.id);
                }
                if (e.isSuperAdmin) {
                    u.push(e.id);
                }
            });
            const c = o("WAWebGroupUtils").amIGroupAdmin(s);
            let d = false;
            if (n != null) {
                d = !!n.defaultSubgroup;
            }
            const m = d ? o("WAWebPnhCagUtils").augmentedCagGroupParticipantList(c, a) : a.map(({ id: t })=>t);
            let p;
            if (l) {
                p = m;
            } else {
                p = yield C(m, r);
            }
            return o("WAWebDBGroupParticipant").replaceParticipants({
                group: t,
                participants: a,
                admins: s,
                superAdmins: u,
                deviceIds: p,
                groupInfo: n
            });
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ group: t, isOffline: n, participants: a, reason: i }) {
            const l = t.toString();
            let s = false;
            let u = [];
            const c = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            const d = yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(l);
            if (d == null) {
                throw r("err")("addParticipants: groupMetadataRecord is null");
            }
            const m = !!d.defaultSubgroup;
            const p = d.isLidAddressingMode === true;
            const _ = a.some((e)=>e.id.isLid());
            const f = yield o("WAWebSchemaParticipant").getParticipantTable().get(l);
            if (f != null) {
                u = f.admins.map((e)=>o("WAWebWidFactory").createWid(e));
                s = o("WAWebGroupUtils").amIGroupAdmin(u) || i === o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_PROMOTE;
            }
            if (!(_ && !m && !p)) {
                let g = a.map(({ id: t })=>t);
                if (m) {
                    g = i === o("WAWebGroupType").ADD_REASON.DEFAULT_SUBGROUP_PROMOTE ? [].concat(u, g, [
                        c
                    ]) : o("WAWebPnhCagUtils").augmentedCagGroupParticipantList(s, a);
                }
                const h = yield C(g, n);
                return o("WAWebDBGroupParticipant").updateDBParticipants({
                    data: {
                        action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.ADD,
                        participants: a,
                        deviceIds: h
                    },
                    group: t,
                    groupMetadata: d,
                    isOffline: n
                });
            }
        });
        return c.apply(this, arguments);
    }
    function d({ author: t, group: n, groupMetadata: r, isOffline: a, participants: i, reason: l, timestamp: s }) {
        return o("WAWebDBGroupParticipant").updateDBParticipants({
            data: {
                action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.REMOVE,
                participants: i,
                timestamp: s,
                author: t,
                reason: l
            },
            group: n,
            groupMetadata: r,
            isOffline: a
        });
    }
    function m({ group: t, groupMetadata: n, isOffline: r, participants: a }) {
        return o("WAWebDBGroupParticipant").updateDBParticipants({
            data: {
                action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE,
                participants: a
            },
            group: t,
            groupMetadata: n,
            isOffline: r
        });
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ group: t, groupMetadata: n, isOffline: r, participants: a }) {
            const i = t.toString();
            let l = [];
            const s = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            const u = a.some((e)=>o("WAWebUserPrefsMeUser").isMeAccount(e.id));
            let c;
            if (u) {
                const d = yield o("WAWebSchemaParticipant").getParticipantTable().get(i);
                if (d != null) {
                    const m = !!n.defaultSubgroup;
                    if (m) {
                        l = d.admins.map((e)=>o("WAWebWidFactory").createWid(e));
                        c = yield C([].concat(l, [
                            s
                        ]), r);
                    }
                }
            }
            return o("WAWebDBGroupParticipant").updateDBParticipants({
                data: {
                    action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.PROMOTE,
                    participants: a,
                    deviceIds: c
                },
                group: t,
                groupMetadata: n,
                isOffline: r
            });
        });
        return _.apply(this, arguments);
    }
    function f({ group: t, isOffline: n, participants: r }) {
        return o("WAWebDBGroupParticipant").updateCommunityParticipants({
            data: {
                action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.LINKED_GROUP_PROMOTE,
                participants: r
            },
            group: t,
            isOffline: n
        });
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ group: t, newSuperAdmin: n }) {
            return o("WAWebDBGroupParticipant").setDBGroupSuperAdmin(t, n);
        });
        return h.apply(this, arguments);
    }
    function y({ group: t, isOffline: n, participants: r }) {
        return o("WAWebDBGroupParticipant").updateCommunityParticipants({
            data: {
                action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.LINKED_GROUP_DEMOTE,
                participants: r
            },
            group: t,
            isOffline: n
        });
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = false) {
            let n = [];
            if (t === true) {
                e.forEach((e)=>{
                    o("WAWebOfflineDeviceCache").OfflinePendingDeviceCache.addOfflinePendingDevice(String(e));
                });
                return e;
            }
            n = yield o("WAWebAdvSyncDeviceListApi").syncAndGetDeviceList(e);
            let r = [];
            n.forEach((t, n)=>{
                if (!t) {
                    r.push(e[n]);
                } else {
                    const { devices: a, id: i } = t;
                    r = r.concat(a.map((e)=>o("WAWebWidFactory").createDeviceWidFromDeviceListPk(i, e.id, e.isHosted)));
                }
            });
            return r;
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return o("WAWebSchemaParticipant").getParticipantTable().bulkGet(e.map((e)=>e.toString()));
    }
    function S(e) {
        return o("WAWebSchemaParticipant").getParticipantTable().get(e.toString());
    }
    function R(e) {
        const t = e?.participants;
        return t != null && t.some((e)=>o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWid(e)));
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return R((yield S(e)));
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return (yield v(e)).map(R);
        });
        return I.apply(this, arguments);
    }
    l.updateParticipants = e;
    l.addParticipants = u;
    l.removeParticipants = d;
    l.demoteParticipants = m;
    l.promoteParticipants = p;
    l.promoteCommmunityParticipants = f;
    l.setGroupSuperAdmin = g;
    l.demoteCommmunityParticipants = y;
    l.bulkGetParticipants = v;
    l.getParticipants = S;
    l.checkMyMembershipForParticipantRecord = R;
    l.checkMyMembership = L;
    l.bulkCheckMyMembership = k;
}, 98);