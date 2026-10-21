__d("WAWebDBGroupParticipantHelpers", [
    "WAWebApiContact",
    "WAWebDBParticipantTypes",
    "WAWebGroupType",
    "WAWebGroupUtils",
    "WAWebLeaveReasonType",
    "WAWebLidMigrationUtils",
    "WAWebPostSenderKeyExpiredMetric",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumExpiryReason",
    "WAWebWidFactory",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    function e({ deviceIds: t, oldDBRecord: n, participantsAdded: r }) {
        const a = new Map(n.senderKey);
        t.forEach((e)=>{
            if (!(o("WAWebUserPrefsMeUser").isMeDevice(e) || e.isHosted())) {
                a.set(e.toString(), false);
            }
        });
        const i = new Set(r.map(({ id: t })=>t.toString()));
        const l = u(n.pastParticipants, i);
        const s = [].concat(n.participants, i.values().toArray().map((e)=>e.toString()));
        return {
            groupId: n.groupId,
            senderKey: a,
            participants: s,
            pastParticipants: l,
            admins: n.admins,
            superAdmins: n.superAdmins,
            rotateKey: n.rotateKey,
            staleType: n.staleType
        };
    }
    function s({ deviceIds: t, oldDBRecord: n, participantsAdded: r }) {
        const a = new Map(n.senderKey);
        t.forEach((e)=>{
            if (!(o("WAWebUserPrefsMeUser").isMeDevice(e) || e.isHosted())) {
                a.set(e.toString(), false);
            }
        });
        const i = new Set;
        const l = new Set;
        r.forEach(({ id: t, lid: n })=>{
            l.add(t.toString());
            if (n != null && !t.isLid()) {
                i.add(n.toString());
            }
        });
        const s = u(n.pastParticipants, l);
        const c = [].concat(n.participants.filter((e)=>!i.has(e) && !l.has(e)), l.values().toArray().map((e)=>e));
        return {
            groupId: n.groupId,
            senderKey: a,
            participants: c,
            pastParticipants: s,
            admins: n.admins,
            superAdmins: n.superAdmins,
            rotateKey: n.rotateKey,
            staleType: n.staleType
        };
    }
    function u(e, t) {
        return e?.filter(function(e) {
            const n = o("WAWebWidFactory").createUserWidOrThrow(e.jid);
            const r = o("WAWebApiContact").getAlternateUserWid(n);
            const a = t.has(e.jid);
            const i = r ? t.has(r.toString()) : false;
            return !a && !i;
        }) ?? [];
    }
    function c(e, t) {
        return {
            groupId: e.groupId,
            senderKey: e.senderKey,
            participants: e.participants,
            pastParticipants: t.map(({ id: t, leaveReason: n, leaveTs: r })=>({
                    jid: t.toString(),
                    leaveTs: r,
                    leaveReason: n
                })),
            admins: e.admins,
            superAdmins: e.superAdmins,
            rotateKey: e.rotateKey,
            staleType: e.staleType
        };
    }
    function d(e, t, n, r, a) {
        const l = new Map(e.senderKey);
        let s = e.rotateKey;
        l.forEach((e, n)=>{
            const r = o("WAWebWidFactory").createWid(n);
            const a = t.some((e)=>{
                const t = o("WAWebLidMigrationUtils").toCommonAddressingMode(e.id, r);
                const n = t[0];
                const a = t[1];
                if (n != null && a != null) {
                    return n.isSameAccountAndAddressingMode(a);
                }
            });
            if (a) {
                s = s || e;
                l.delete(n);
            }
        });
        if (s) {
            l.forEach((e, t)=>{
                l.set(t, false);
            });
        }
        const u = p(t, e.pastParticipants, n, r);
        if (!e.rotateKey && s) {
            o("WAWebPostSenderKeyExpiredMetric").postSenderKeyExpiredMetric({
                chatId: e.groupId,
                deviceCount: e.senderKey.size,
                expiryReason: o("WAWebWamEnumExpiryReason").EXPIRY_REASON.USER_LEAVE
            });
        }
        const c = new Set(t.map(({ id: t })=>String(t)));
        const d = e.admins.filter((e)=>!c.has(e));
        const m = e.superAdmins?.filter(function(e) {
            return !c.has(e);
        });
        const _ = e.participants.filter((e)=>!c.has(e));
        return {
            groupId: e.groupId,
            senderKey: l,
            participants: _,
            pastParticipants: u,
            admins: d,
            superAdmins: m,
            rotateKey: s,
            staleType: e.staleType
        };
    }
    function m(e, t, n, a, i) {
        const s = new Map(e.senderKey);
        let u = e.rotateKey;
        const c = r("compactMap")(t, function(e) {
            if (e.id.isLid()) {
                return e.id;
            }
            return e.lid;
        });
        s.forEach((e, n)=>{
            const r = o("WAWebWidFactory").createWid(n);
            if (r.isLid() && i !== o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE) {
                const a = c.some((e)=>e.isSameAccountAndAddressingMode(r));
                if (a) {
                    s.delete(n);
                }
                return;
            }
            if (!r.isLid() && i === o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE) {
                s.delete(n);
                return;
            }
            const l = t.some((e)=>e.id.user === r.user && e.id.server === r.server);
            if (l) {
                u = u || e;
                s.delete(n);
            }
        });
        if (u) {
            s.forEach((e, t)=>{
                const n = o("WAWebWidFactory").createWid(t);
                if (!n.isLid()) {
                    s.set(t, false);
                }
            });
        }
        const d = p(t, e.pastParticipants, n, a);
        if (!e.rotateKey && u) {
            o("WAWebPostSenderKeyExpiredMetric").postSenderKeyExpiredMetric({
                chatId: e.groupId,
                deviceCount: e.senderKey.size,
                expiryReason: o("WAWebWamEnumExpiryReason").EXPIRY_REASON.USER_LEAVE
            });
        }
        const m = new Set(t.map(({ id: t })=>String(t)));
        const _ = e.admins.filter((e)=>!m.has(e));
        const f = e.superAdmins?.filter(function(e) {
            return !m.has(e);
        });
        let g = e.participants;
        if (i === o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE) {
            const h = t.reduce((e, { id: n, lid: r })=>{
                if (r == null || n.isLid()) {
                    return e;
                }
                return e.set(n.toString(), r.toString());
            }, new Map);
            g = g.map((e)=>h.get(e) ?? e);
        } else {
            g = g.filter((e)=>!m.has(e));
        }
        return {
            groupId: e.groupId,
            senderKey: s,
            participants: g,
            pastParticipants: d,
            admins: _,
            superAdmins: f,
            rotateKey: u,
            staleType: e.staleType
        };
    }
    function p(e, t, n, r) {
        const a = new Set(e.map(({ id: t })=>String(t)));
        const i = e.map((e)=>({
                jid: e.id.toString(),
                leaveTs: n,
                leaveReason: e.id.equals(r) ? o("WAWebLeaveReasonType").LeaveReason.Left : o("WAWebLeaveReasonType").LeaveReason.Removed
            }));
        t?.forEach(function(e) {
            const t = o("WAWebWidFactory").createUserWidOrThrow(e.jid);
            const n = o("WAWebApiContact").getAlternateUserWid(t);
            const r = a.has(e.jid);
            const l = n ? a.has(n?.toString()) : false;
            if (!r && !l) {
                i.push(e);
            }
            if (!r) {
                a.add(e.jid);
            }
            if (n && !l) {
                a.add(n.toString());
            }
        });
        return i;
    }
    function _(e, t, n, r) {
        let a = e.admins;
        const i = t.map(({ id: t })=>String(t));
        if (r === o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE) {
            a = e.admins.filter((e)=>!i.includes(e));
        } else if (r === o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.PROMOTE) {
            const l = new Set(e.admins);
            i.forEach((e)=>l.add(e));
            a = Array.from(l);
        }
        return {
            groupId: e.groupId,
            senderKey: e.senderKey,
            participants: e.participants,
            pastParticipants: e.pastParticipants,
            admins: a,
            superAdmins: e.superAdmins,
            rotateKey: e.rotateKey,
            staleType: e.staleType
        };
    }
    function f(e, t, n, r) {
        let a = e.admins;
        const i = t.map(({ id: t })=>String(t));
        const l = new Map(e.senderKey);
        if (n != null && n.length > 0) {
            n.forEach((e)=>{
                if (!o("WAWebUserPrefsMeUser").isMeDevice(e) && !e.isHosted()) {
                    const t = String(e);
                    l.set(t, false);
                }
            });
        }
        let s = e.participants;
        if (r === o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE) {
            a = e.admins.filter((e)=>!i.includes(e));
            const u = o("WAWebGroupUtils").amIGroupAdmin(a);
            if (!u) {
                const c = t.reduce((e, { id: n, lid: r })=>{
                    if (r == null || n.isLid()) {
                        return e;
                    }
                    return e.set(n.toString(), r.toString());
                }, new Map);
                s = s.map((e)=>c.get(e) ?? e);
            }
        } else if (r === o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.PROMOTE) {
            const d = t.reduce((e, { id: n, lid: r })=>{
                if (r == null || n.isLid()) {
                    return e;
                }
                return e.set(r.toString(), n.toString());
            }, new Map);
            a = e.admins.concat(i);
            s = s.map((e)=>d.get(e) ?? e);
        }
        return {
            groupId: e.groupId,
            senderKey: l,
            participants: s,
            pastParticipants: e.pastParticipants,
            admins: a,
            superAdmins: e.superAdmins,
            rotateKey: e.rotateKey,
            staleType: e.staleType
        };
    }
    function g({ action: t, oldDBRecord: n, participants: r }) {
        let a = n.admins;
        let i = n.participants;
        const l = r.map(({ id: t })=>String(t));
        if (t === o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.LINKED_GROUP_DEMOTE) {
            a = n.admins.filter((e)=>!l.includes(e));
            i = a;
        } else if (t === o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.LINKED_GROUP_PROMOTE) {
            const s = l.filter((e)=>!n.admins.includes(e));
            a = n.admins.concat(s);
            i = a;
        }
        return {
            groupId: n.groupId,
            senderKey: n.senderKey,
            participants: i,
            pastParticipants: n.pastParticipants,
            admins: a,
            superAdmins: n.superAdmins,
            rotateKey: n.rotateKey,
            staleType: n.staleType
        };
    }
    function h(e, t) {
        const r = t.participants;
        const a = r === void 0 ? [] : r;
        const i = t.pastParticipants;
        const l = i === void 0 ? [] : i;
        const s = t.admins;
        const u = s === void 0 ? [] : s;
        const c = t.deviceIds;
        const d = c === void 0 ? [] : c;
        const m = new Map;
        d.forEach((e)=>{
            if (!o("WAWebUserPrefsMeUser").isMeDevice(e) && !e.isHosted()) {
                const t = String(e);
                if (!m.has(t)) {
                    m.set(t, false);
                }
            }
        });
        return {
            groupId: e,
            senderKey: m,
            participants: a.map(({ id: t })=>String(t)),
            pastParticipants: l.map(({ id: t, leaveReason: n, leaveTs: r })=>({
                    jid: t.toString(),
                    leaveTs: r,
                    leaveReason: n
                })),
            admins: u.map(String),
            superAdmins: t.superAdmins?.map(String),
            rotateKey: false,
            staleType: a.length === 0 ? o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT : void 0
        };
    }
    function y(e, { admins: n, deviceIds: r, participants: a, superAdmins: i }) {
        let l = e.rotateKey;
        const s = e.senderKey;
        const u = new Map;
        r.forEach((e)=>{
            if (!o("WAWebUserPrefsMeUser").isMeDevice(e) && !e.isHosted()) {
                const t = String(e);
                const n = s?.get(t);
                if (n == null) {
                    u.set(t, false);
                } else {
                    u.set(t, n);
                    if (s != null) {
                        s.delete(t);
                    }
                }
            }
        });
        if (s != null) {
            for (const c of s.values()){
                l = l || c;
            }
        }
        return {
            groupId: e.groupId,
            senderKey: u,
            participants: a.map(({ id: t })=>String(t)),
            pastParticipants: e.pastParticipants,
            admins: n.map(String),
            superAdmins: i?.map(String),
            rotateKey: l
        };
    }
    function C(e, { admins: n, deviceIds: r, participants: a, superAdmins: i }) {
        let l = e.rotateKey;
        const s = e.senderKey;
        const u = new Map;
        r.forEach((e)=>{
            if (!o("WAWebUserPrefsMeUser").isMeDevice(e) && !e.isHosted()) {
                const t = String(e);
                const n = s?.get(t);
                if (n == null) {
                    u.set(t, false);
                } else {
                    u.set(t, n);
                    if (s != null) {
                        s.delete(t);
                    }
                }
            }
        });
        if (s != null) {
            for (const [d, m] of s.entries()){
                if (m && !o("WAWebWidFactory").createWid(d).isLid()) {
                    l = true;
                    break;
                }
            }
        }
        return {
            groupId: e.groupId,
            senderKey: u,
            participants: a.map(({ id: t })=>String(t)),
            pastParticipants: e.pastParticipants,
            admins: n.map(String),
            superAdmins: i?.map(String),
            rotateKey: l
        };
    }
    function b(e, t, n) {
        const a = String(t);
        const i = String(n);
        const l = new Map(e.senderKey);
        const s = e.participants.filter((e)=>e !== a).concat(i);
        Array.from(l.keys()).forEach((e)=>{
            const n = o("WAWebWidFactory").createWid(e).user;
            if (t.user === n) {
                l.delete(e);
            } else {
                l.set(e, false);
            }
        });
        l.set(i, false);
        const u = e.admins.map((e)=>{
            if (e === a) {
                return i;
            }
            return e;
        });
        const c = e.superAdmins?.map(function(e) {
            if (e === a) {
                return i;
            }
            return e;
        });
        return babelHelpers.extends({}, e, {
            participants: s,
            senderKey: l,
            admins: u,
            superAdmins: c,
            rotateKey: true
        });
    }
    l.addParticipantInfo = e;
    l.addParticipantInfoCAG = s;
    l.addPastParticipantInfo = c;
    l.removeParticipantInfo = d;
    l.removeParticipantInfoCAG = m;
    l.changeParticipantAdminInfo = _;
    l.changeParticipantAdminInfoCAG = f;
    l.changeCommunityParticipantAdminInfo = g;
    l.createParticipantInfo = h;
    l.replaceParticipantInfo = y;
    l.replaceParticipantInfoCAG = C;
    l.modifyParticipantInfo = b;
}, 98);