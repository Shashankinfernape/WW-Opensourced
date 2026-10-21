__d("WAWebDBGroupParticipant", [
    "$InternalEnum",
    "Promise",
    "WABatcher",
    "WAJids",
    "WALogger",
    "WAWebDBGroupParticipantHelpers",
    "WAWebDBParticipantTypes",
    "WAWebGroupUtils",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebPhashUtils",
    "WAWebPnhCagUtils",
    "WAWebSchemaParticipant",
    "WAWebWamGroupMetricCache",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = 3000;
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupInfos: t }) {
            const n = yield o("WAWebSchemaParticipant").getParticipantTable().bulkGet(t.map((e)=>e.id.toString()));
            const r = new Map;
            n.forEach((e)=>e && r.set(e.groupId, e.senderKey));
            const a = t.map((e)=>{
                const i = [];
                const l = [];
                const s = e.id.toString();
                const u = r.get(s);
                const c = [];
                e.participants?.forEach(function(e) {
                    if (e.isAdmin) {
                        i.push(e.id);
                    }
                    if (e.isSuperAdmin) {
                        l.push(e.id);
                    }
                    c.push(e.id);
                });
                const d = !!e.defaultSubgroup;
                const m = d ? o("WAWebPnhCagUtils").augmentedCagGroupParticipantList(o("WAWebGroupUtils").amIGroupAdmin(i), e.participants) : c;
                const p = e.pastParticipants?.map(function({ id: t, leaveReason: n, leaveTs: r }) {
                    return {
                        jid: t.toString(),
                        leaveTs: r,
                        leaveReason: n
                    };
                }) ?? [];
                const _ = new Map;
                m.forEach((e)=>{
                    _.set(String(e), false);
                });
                if (u) {
                    const f = new Set(m.map((e)=>o("WAWebWidFactory").asUserWidOrThrow(e).user));
                    u.forEach((e, t)=>{
                        if (f.has(o("WAWebWidFactory").createWid(t).user)) {
                            _.set(t, e);
                        }
                    });
                }
                return {
                    groupId: s,
                    participants: c.map(String),
                    pastParticipants: p,
                    admins: i.map(String),
                    superAdmins: l.map(String),
                    senderKey: _,
                    rotateKey: false,
                    staleType: o("WAWebDBParticipantTypes").STALE_TYPES.DEVICE
                };
            });
            return o("WAWebSchemaParticipant").getParticipantTable().bulkCreateOrReplace(a);
        });
        return C.apply(this, arguments);
    }
    function b({ admins: t, deviceIds: r, group: a, groupInfo: i, participants: l, superAdmins: s }) {
        let u = false;
        if (i != null) {
            u = !!i.defaultSubgroup;
        }
        const c = a.toString();
        return o("WAWebModelStorageUtils").getStorage().lock([
            "participant"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const a = yield n.get(c);
                if (!a) {
                    return n.create(o("WAWebDBGroupParticipantHelpers").createParticipantInfo(c, {
                        participants: l,
                        admins: t,
                        superAdmins: s,
                        deviceIds: r
                    }));
                }
                yield n.createOrReplace(u ? o("WAWebDBGroupParticipantHelpers").replaceParticipantInfoCAG(a, {
                    participants: l,
                    admins: t,
                    superAdmins: s,
                    deviceIds: r
                }) : o("WAWebDBGroupParticipantHelpers").replaceParticipantInfo(a, {
                    participants: l,
                    admins: t,
                    superAdmins: s,
                    deviceIds: r
                }));
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function v(e) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "participant"
        ], (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const r = yield n.bulkGet(e.map((e)=>e.groupId));
                const a = e.map(({ groupId: n, pastParticipants: a }, t)=>{
                    const i = r[t];
                    if (i) {
                        return o("WAWebDBGroupParticipantHelpers").addPastParticipantInfo(i, a);
                    }
                    return o("WAWebDBGroupParticipantHelpers").createParticipantInfo(n, {
                        pastParticipants: a
                    });
                });
                return n.bulkCreateOrReplace(a);
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    }
    const S = o("WABatcher").batch({
        delayMs: h
    }, (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = Array.from(new Set(t.map((e)=>e.id)));
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "participant"
            ], (()=>{
                const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*([a]) {
                    const i = new Map((yield a.bulkGet(r)).filter(Boolean).map((e)=>[
                            e.groupId,
                            e
                        ]));
                    const l = [];
                    const u = [];
                    t.forEach(({ data: t, groupMetadata: n, id: r })=>{
                        const a = !!(n != null && n.defaultSubgroup);
                        const s = i.get(r);
                        if (!s) {
                            if (l.length < 3) {
                                l.push(r);
                            }
                            return;
                        }
                        const c = t.participants;
                        let d = null;
                        switch(t.action){
                            case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.ADD:
                                d = a ? o("WAWebDBGroupParticipantHelpers").addParticipantInfoCAG({
                                    deviceIds: t.deviceIds,
                                    oldDBRecord: s,
                                    participantsAdded: c
                                }) : o("WAWebDBGroupParticipantHelpers").addParticipantInfo({
                                    deviceIds: t.deviceIds,
                                    oldDBRecord: s,
                                    participantsAdded: c
                                });
                                break;
                            case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.REMOVE:
                                d = a ? o("WAWebDBGroupParticipantHelpers").removeParticipantInfoCAG(s, c, t.timestamp, t.author, t.reason) : o("WAWebDBGroupParticipantHelpers").removeParticipantInfo(s, c, t.timestamp, t.author, t.reason);
                                break;
                            case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE:
                                d = a ? o("WAWebDBGroupParticipantHelpers").changeParticipantAdminInfoCAG(s, c, t.deviceIds, o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE) : o("WAWebDBGroupParticipantHelpers").changeParticipantAdminInfo(s, c, t.deviceIds, o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE);
                                break;
                            case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.PROMOTE:
                                d = a ? o("WAWebDBGroupParticipantHelpers").changeParticipantAdminInfoCAG(s, c, t.deviceIds, o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.PROMOTE) : o("WAWebDBGroupParticipantHelpers").changeParticipantAdminInfo(s, c, t.deviceIds, o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.PROMOTE);
                                break;
                            default:
                                if (u.length < 3) {
                                    u.push(t.action);
                                }
                        }
                        if (d != null) {
                            i.set(d.groupId, d);
                        }
                    });
                    if (l.length > 0) {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "updateParticipantsBatched: no local record found for ",
                            " groups => ",
                            ""
                        ])), l.length, l);
                    }
                    if (u.length > 0) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "updateParticipants: failed with ",
                            " unknown actions => ",
                            ""
                        ])), u.length, u);
                    }
                    return a.bulkCreateOrReplace(Array.from(i.values()));
                });
                return function(e) {
                    return a.apply(this, arguments);
                };
            })());
            return t.map((e)=>{});
        });
        return function(e) {
            return t.apply(this, arguments);
        };
    })());
    const R = o("WABatcher").batch({
        delayMs: h
    }, (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = Array.from(new Set(e.map((e)=>e.id)));
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "participant"
            ], (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*([r]) {
                    const a = new Map((yield r.bulkGet(t)).filter(Boolean).map((e)=>[
                            e.groupId,
                            e
                        ]));
                    const i = [];
                    const l = [];
                    e.forEach(({ data: t, id: n })=>{
                        const r = a.get(n);
                        if (!r) {
                            if (i.length < 3) {
                                i.push(n);
                            }
                            return;
                        }
                        const s = t.participants;
                        let u = null;
                        switch(t.action){
                            case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.LINKED_GROUP_PROMOTE:
                                u = o("WAWebDBGroupParticipantHelpers").changeCommunityParticipantAdminInfo({
                                    action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.LINKED_GROUP_PROMOTE,
                                    oldDBRecord: r,
                                    participants: s
                                });
                                break;
                            case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.LINKED_GROUP_DEMOTE:
                                u = o("WAWebDBGroupParticipantHelpers").changeCommunityParticipantAdminInfo({
                                    action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.LINKED_GROUP_DEMOTE,
                                    oldDBRecord: r,
                                    participants: s
                                });
                                break;
                            default:
                                if (l.length < 3) {
                                    l.push(t.action);
                                }
                        }
                        if (u != null) {
                            a.set(u.groupId, u);
                        }
                    });
                    if (i.length > 0) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "updateCommunityParticipantsBatched: no local record found for ",
                            " groups => ",
                            ""
                        ])), i.length, i);
                    }
                    if (l.length > 0) {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "updateCommunityParticipantsBatched: failed with ",
                            " unknown actions => ",
                            ""
                        ])), l.length, l);
                    }
                    return r.bulkCreateOrReplace(Array.from(a.values()));
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })());
            return e.map((e)=>{});
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    })());
    function L({ data: t, group: a, isOffline: l = false }) {
        if (l) {
            return R({
                id: String(a),
                data: t
            });
        }
        const s = t.participants;
        const u = a.toString();
        return o("WAWebModelStorageUtils").getStorage().lock([
            "participant"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const a = yield n.get(u);
                if (!a) {
                    throw new (o("WAWebDBParticipantTypes")).GroupUnSyncedError(`updateCommunityParticipants: group participant info missing for action ${t.action}`);
                }
                switch(t.action){
                    case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.LINKED_GROUP_PROMOTE:
                        return n.createOrReplace(o("WAWebDBGroupParticipantHelpers").changeCommunityParticipantAdminInfo({
                            action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.LINKED_GROUP_PROMOTE,
                            oldDBRecord: a,
                            participants: s
                        }));
                    case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.LINKED_GROUP_DEMOTE:
                        return n.createOrReplace(o("WAWebDBGroupParticipantHelpers").changeCommunityParticipantAdminInfo({
                            action: o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.LINKED_GROUP_DEMOTE,
                            oldDBRecord: a,
                            participants: s
                        }));
                    default:
                        throw r("err")(`updateCommunityParticipants: failed with unknown action ${t.action}`);
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function E(e, t) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "participant"
        ], (()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*([r]) {
                const a = yield r.get(e.toString());
                if (!a) {
                    throw new (o("WAWebDBParticipantTypes")).GroupUnSyncedError("updateParticipants: group participant info missing when trying to update super admin");
                }
                return r.createOrReplace(babelHelpers.extends({}, a, {
                    superAdmins: [
                        t.toString()
                    ]
                }));
            });
            return function(e) {
                return r.apply(this, arguments);
            };
        })());
    }
    function k({ data: t, group: a, groupMetadata: i, isOffline: s = false }) {
        const u = !!(i != null && i.defaultSubgroup);
        if (s) {
            return S({
                id: String(a),
                data: t,
                groupMetadata: i
            });
        }
        const c = t.participants;
        const d = a.toString();
        return o("WAWebModelStorageUtils").getStorage().lock([
            "participant"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const a = yield n.get(d);
                if (!a) {
                    throw new (o("WAWebDBParticipantTypes")).GroupUnSyncedError(`updateParticipants: group participant info missing for action ${t.action}`);
                }
                switch(t.action){
                    case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.ADD:
                        return n.createOrReplace(u ? o("WAWebDBGroupParticipantHelpers").addParticipantInfoCAG({
                            deviceIds: t.deviceIds,
                            oldDBRecord: a,
                            participantsAdded: c
                        }) : o("WAWebDBGroupParticipantHelpers").addParticipantInfo({
                            deviceIds: t.deviceIds,
                            oldDBRecord: a,
                            participantsAdded: c
                        }));
                    case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.REMOVE:
                        return n.createOrReplace(u ? o("WAWebDBGroupParticipantHelpers").removeParticipantInfoCAG(a, c, t.timestamp, t.author, t.reason) : o("WAWebDBGroupParticipantHelpers").removeParticipantInfo(a, c, t.timestamp, t.author, t.reason));
                    case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE:
                        return n.createOrReplace(u ? o("WAWebDBGroupParticipantHelpers").changeParticipantAdminInfoCAG(a, c, t.deviceIds, o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE) : o("WAWebDBGroupParticipantHelpers").changeParticipantAdminInfo(a, c, t.deviceIds, o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.DEMOTE));
                    case o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.PROMOTE:
                        return n.createOrReplace(u ? o("WAWebDBGroupParticipantHelpers").changeParticipantAdminInfoCAG(a, c, t.deviceIds, o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.PROMOTE) : o("WAWebDBGroupParticipantHelpers").changeParticipantAdminInfo(a, c, t.deviceIds, o("WAWebDBParticipantTypes").PARTICIPANT_OPERATION.PROMOTE));
                    default:
                        throw r("err")(`updateParticipants: failed with unknown action ${t.action}`);
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    const I = n("$InternalEnum").Mirrored([
        "Success",
        "Error"
    ]);
    function T(e, t) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let a = I.Error;
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "participant",
                "group-metadata"
            ], (()=>{
                const i = n("asyncToGeneratorRuntime").asyncToGenerator(function*([l, s]) {
                    const u = o("WAWebLidMigrationUtils").toAddressingModeFactory(t);
                    try {
                        const c = r("nullthrows")((yield l.get(e.toString())), "missing participant record to migrate");
                        const d = Array.from(c.senderKey.entries());
                        const p = o("WAWebGroupUtils").amIGroupAdmin(c.admins);
                        const _ = {
                            admins: c.admins.map((e)=>r("nullthrows")(u(o("WAWebWidFactory").createWid(e)), "admin missing a LID-PN mapping").toString()),
                            participants: c.participants.map((e)=>{
                                if (!p && !t) {
                                    const n = o("WAWebWidFactory").createUserWidOrThrow(e);
                                    return r("nullthrows")(o("WAWebLidMigrationUtils").toLid(n), "participant missing a LID mapping").toString();
                                }
                                return r("nullthrows")(u(o("WAWebWidFactory").createWid(e)), "participant missing a LID-PN mapping").toString();
                            }),
                            senderKey: new Map(d.map(([t, n])=>[
                                    x(t, u).toString(),
                                    false
                                ]))
                        };
                        const f = {
                            isLidAddressingMode: t
                        };
                        yield (g || (g = n("Promise"))).all([
                            l.merge(e.toString(), _),
                            s.merge(e.toString(), f)
                        ]);
                        a = I.Success;
                    } catch (t) {
                        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "addressing mode migration failed for ",
                            ": ",
                            ""
                        ])), e, r("getErrorSafe")(t).message);
                    }
                });
                return function(e) {
                    return i.apply(this, arguments);
                };
            })());
            return a;
        });
        return D.apply(this, arguments);
    }
    function x(e, t) {
        const a = o("WAWebWidFactory").createDeviceWidOrThrow(e);
        const i = t(o("WAWebWidFactory").asUserWidOrThrow(a));
        if (i == null) {
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "GroupLidInfra: senderkey device missing a LID-PN mapping, device = ",
                ""
            ])), a).sendLogs("grouplidinfra-senderkey-missing-mapping", {
                sampling: 0.01
            });
        }
        const l = r("nullthrows")(i, "senderkey device missing a LID-PN mapping");
        return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(l.user, l.server, a.device ?? o("WAJids").DEFAULT_DEVICE_ID).toString();
    }
    function $({ group: t }) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "participant"
        ], function([n]) {
            return n.merge(String(t), {
                staleType: o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT
            });
        });
    }
    function P({ groupIds: t }) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "participant"
        ], function([n]) {
            return n.bulkCreateOrMerge(t.map((e)=>({
                    groupId: String(e),
                    staleType: o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT
                })));
        });
    }
    function N({ group: t, newId: r, oldId: a }) {
        const i = String(t);
        return o("WAWebModelStorageUtils").getStorage().lock([
            "participant"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t]) {
                const n = yield t.get(i);
                if (!n) {
                    throw new (o("WAWebDBParticipantTypes")).GroupUnSyncedError("modifyGroupParticipant: group participant info missing");
                }
                return t.createOrReplace(o("WAWebDBGroupParticipantHelpers").modifyParticipantInfo(n, a, r));
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function M(e) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupWid: l }) {
            const s = yield o("WAWebSchemaParticipant").getParticipantTable().get(String(l));
            if (!s) {
                return null;
            }
            if (s.senderKey == null) {
                const _ = s.admins?.length;
                const f = s.superAdmins?.length;
                const g = s.participants?.length;
                const h = s.pastParticipants?.length;
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "getGroupParticipant: group participant info missing sender key in ",
                    ": admins ",
                    ", superAdmins ",
                    ", participants ",
                    ", pastParticipants ",
                    ", rotateKey ",
                    ", version ",
                    ", staleType ",
                    ""
                ])), l.toString(), _, f, g, h, s.rotateKey, s.version, s.staleType).sendLogs("get-group-participant-missing-sender-key");
                return null;
            }
            const y = new Set(s.admins);
            const C = new Set(s.superAdmins);
            const b = s.participants?.map(function(e) {
                return {
                    id: o("WAWebWidFactory").createWid(e),
                    isAdmin: y.has(e),
                    isSuperAdmin: C.has(e)
                };
            }) ?? [];
            const v = s.pastParticipants?.map(function({ jid: t, leaveReason: n, leaveTs: r }) {
                return {
                    id: o("WAWebWidFactory").createWid(t),
                    leaveTs: r,
                    leaveReason: n
                };
            }) ?? [];
            o("WAWebWamGroupMetricCache").cacheGroupMetrics(s);
            const S = s.deviceSyncComplete != null && !s.deviceSyncComplete ? o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT : void 0;
            return {
                participants: b,
                pastParticipants: v,
                staleType: s.staleType ?? S,
                deviceCount: s.senderKey.size
            };
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield o("WAWebSchemaParticipant").getParticipantTable().get(String(e));
                if (!(t != null && t.participants)) {
                    return null;
                }
                const n = t.participants.map((e)=>o("WAWebWidFactory").createWid(e));
                return o("WAWebPhashUtils").phashV2(n);
            } catch (e) {
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "computeGroupParticipantsHash: ",
                    ""
                ])), e).sendLogs("compute-group-participants-hash-error");
                return null;
            }
        });
        return F.apply(this, arguments);
    }
    l.addParticipantInfo = (f = o("WAWebDBGroupParticipantHelpers")).addParticipantInfo;
    l.addParticipantInfoCAG = f.addParticipantInfoCAG;
    l.createParticipantInfo = f.createParticipantInfo;
    l.removeParticipantInfo = f.removeParticipantInfo;
    l.removeParticipantInfoCAG = f.removeParticipantInfoCAG;
    l.replaceParticipantInfo = f.replaceParticipantInfo;
    l.replaceParticipantInfoCAG = f.replaceParticipantInfoCAG;
    l.updateGroupParticipantTableWithoutDeviceSync = y;
    l.replaceParticipants = b;
    l.addPastParticipants = v;
    l.updateCommunityParticipants = L;
    l.setDBGroupSuperAdmin = E;
    l.updateDBParticipants = k;
    l.AddressingModeMigrationResult = I;
    l.migrateParticipantInfoAddressingMode = T;
    l.markGroupParticipantStale = $;
    l.bulkMarkGroupParticipantStale = P;
    l.modifyGroupParticipant = N;
    l.getGroupParticipant = M;
    l.computeGroupParticipantsHash = A;
}, 98);