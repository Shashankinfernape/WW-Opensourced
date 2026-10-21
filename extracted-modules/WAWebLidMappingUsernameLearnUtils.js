__d("WAWebLidMappingUsernameLearnUtils", [
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebGroupType",
    "WAWebHandleGroupNotificationConst",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
            const n = o("WAWebUsernameGatingUtils").lidGroupMigrationNonMemberIQEnabled();
            const r = [];
            const a = [];
            e.forEach((e)=>{
                e.participants?.forEach(function({ displayName: n, id: i, lid: l, phoneNumber: s, username: u }) {
                    r.push({
                        id: o("WAWebWidFactory").asUserWidOrThrow(i),
                        lid: l ? o("WAWebWidFactory").asUserWidOrThrow(l) : null,
                        phoneNumber: s ? o("WAWebWidFactory").asUserWidOrThrow(s) : null,
                        displayName: n
                    });
                    if (t && u != null) {
                        const c = o("WAWebUsernameTypes").asMaybeUsername(u);
                        if (c != null) {
                            a.push({
                                userId: o("WAWebWidFactory").asUserWidOrThrow(i),
                                username: c
                            });
                        }
                    }
                });
                if (n) {
                    if (e.subjectOwner) {
                        r.push({
                            id: e.subjectOwner,
                            lid: e.subjectOwner.isLid() ? e.subjectOwner : null,
                            phoneNumber: e.subjectOwnerPn
                        });
                    }
                    if (e.owner) {
                        let l;
                        r.push({
                            id: e.owner,
                            lid: (l = e.owner) != null && l.isLid() ? e.owner : null,
                            phoneNumber: e.creatorPn
                        });
                    }
                    if (e.descOwner) {
                        let s;
                        r.push({
                            id: e.descOwner,
                            lid: (s = e.descOwner) != null && s.isLid() ? e.descOwner : null,
                            phoneNumber: e.descOwnerPn
                        });
                    }
                }
                if (t) {
                    if (e.owner) {
                        const u = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
                            userId: o("WAWebWidFactory").asUserWidOrThrow(e.owner),
                            username: e.creatorUsername,
                            usernameCountryCode: e.creatorCountryCode
                        });
                        if (u) {
                            a.push(u);
                        }
                    }
                    if (e.subjectOwner && e.subjectOwnerUsername != null) {
                        const c = e.subjectOwner;
                        const d = o("WAWebUsernameTypes").asMaybeUsername(e.subjectOwnerUsername);
                        if (d != null) {
                            a.push({
                                username: d,
                                userId: o("WAWebWidFactory").asUserWidOrThrow(c)
                            });
                        }
                    }
                    if (e.descOwner && e.descOwnerUsername != null) {
                        const m = e.descOwner;
                        const p = o("WAWebUsernameTypes").asMaybeUsername(e.descOwnerUsername);
                        if (p != null) {
                            a.push({
                                username: p,
                                userId: o("WAWebWidFactory").asUserWidOrThrow(m)
                            });
                        }
                    }
                }
            });
            yield o("WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob").createOrReplaceDisplayNamesAndLidPnMappingsInBatches(r, true);
            if (t && a.length > 0) {
                const i = yield o("WAWebSetUsernameJob").setUsernamesJob(a);
                yield o("WAWebInsertUsernameChangeSystemMsg").maybeInsertUsernameChangeSystemMsgs(a, i, "processParsedGroupInfosForLidMappingAndUsernames");
            }
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ flushImmediately: t, notification: n }) {
            const r = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
            const a = [];
            const i = [];
            n.actions.forEach((e)=>{
                const t = o("WAWebHandleGroupNotificationConst").getMappingsFromAction(e);
                a.push(...t);
                if (r) {
                    const s = e.participants ?? e.groupInfo?.participants;
                    s?.forEach(function({ id: t, username: n }) {
                        if (n != null) {
                            const r = o("WAWebUsernameTypes").asMaybeUsername(n);
                            if (r != null) {
                                i.push({
                                    userId: o("WAWebWidFactory").asUserWidOrThrow(t),
                                    username: r
                                });
                            }
                        }
                    });
                    if (e.groupInfo) {
                        const u = e.groupInfo;
                        const { creatorCountryCode: c, creatorUsername: d, owner: m, subjectOwner: p, subjectOwnerUsername: _ } = u;
                        if (m != null) {
                            const f = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
                                userId: o("WAWebWidFactory").asUserWidOrThrow(m),
                                username: d,
                                usernameCountryCode: c
                            });
                            if (f) {
                                i.push(f);
                            }
                        }
                        if (p != null && _ != null) {
                            const g = o("WAWebUsernameTypes").asMaybeUsername(_);
                            if (g != null) {
                                i.push({
                                    username: g,
                                    userId: o("WAWebWidFactory").asUserWidOrThrow(p)
                                });
                            }
                        }
                    }
                    if (e.actionType === o("WAWebGroupType").GROUP_ACTIONS.SUBJECT) {
                        const { s_o: h, subjectOwnerUsername: y } = e;
                        if (h != null && y != null) {
                            const C = o("WAWebUsernameTypes").asMaybeUsername(y);
                            if (C != null) {
                                i.push({
                                    username: C,
                                    userId: o("WAWebWidFactory").asUserWidOrThrow(h)
                                });
                            }
                        }
                    } else {
                        if (e.actionType === o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS) {
                            e.requests.forEach(({ username: t, wid: n })=>{
                                if (t != null) {
                                    const r = o("WAWebUsernameTypes").asMaybeUsername(t);
                                    if (r != null) {
                                        i.push({
                                            username: r,
                                            userId: o("WAWebWidFactory").asUserWidOrThrow(n)
                                        });
                                    }
                                }
                            });
                        }
                    }
                }
            });
            const l = o("WAWebHandleGroupNotificationConst").getAuthorLidPnFieldsFromMeta(n);
            if (l != null) {
                a.push(l);
            }
            if (r) {
                const { author: s, authorUsername: u, authorUsernameCountryCode: c } = n;
                if (s != null) {
                    const d = o("WAWebSetUsernameJob").maybeCreateSetUsernameInfoJobArg({
                        userId: o("WAWebWidFactory").asUserWidOrThrow(s),
                        username: u,
                        usernameCountryCode: c
                    });
                    if (d) {
                        i.push(d);
                    }
                }
            }
            yield o("WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob").createOrReplaceDisplayNamesAndLidPnMappingsInBatches(a, t);
            if (r && i.length > 0) {
                const m = yield o("WAWebSetUsernameJob").setUsernamesJob(i);
                yield o("WAWebInsertUsernameChangeSystemMsg").maybeInsertUsernameChangeSystemMsgs(i, m, "processParsedGroupNotificationForLidMappingAndUsernames");
            }
        });
        return c.apply(this, arguments);
    }
    l.processParsedGroupInfosForLidMappingAndUsernames = e;
    l.processParsedGroupNotificationForLidMappingAndUsernames = u;
}, 98);