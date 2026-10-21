__d("WAWebGroupAgentRemovalSystemMsgs", [
    "Promise",
    "WATimeUtils",
    "WAWebApiParticipantStore",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupSystemMsg",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "agentleft";
    const u = "agentremoved";
    const c = "removedhumans";
    const d = "removedme";
    const m = "removedothers";
    const p = /_/g;
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action: a, dbIsStale: i, isAdmin: l, meta: u }) {
            const d = a.participants.filter(({ id: t })=>o("WAWebBotUtils").isWidGroupAgentFbidWid(t));
            if (d.length === 0 || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                return null;
            }
            const m = u.author;
            const p = a.participants.filter(({ id: t })=>!o("WAWebBotUtils").isWidGroupAgentFbidWid(t));
            const _ = m == null ? [] : p.filter(({ id: t })=>r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(m, t)));
            if (m != null && _.length === 0) {
                return b({
                    action: a,
                    agents: d,
                    dbIsStale: i,
                    humans: p,
                    meta: u
                });
            }
            const f = p.filter((e)=>!_.includes(e));
            const g = yield (e || (e = n("Promise"))).all([
                S({
                    action: a,
                    dbIsStale: i,
                    isAdmin: l,
                    leavingHumans: _,
                    meta: u
                }),
                f.length === 0 ? null : o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: y(u, c),
                    action: babelHelpers.extends({}, a, {
                        participants: f
                    }),
                    dbIsStale: i
                })
            ]);
            const h = yield e.all(d.map((e)=>o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: babelHelpers.extends({}, y(u, `${s}${e.id.user}`), {
                        author: null
                    }),
                    action: babelHelpers.extends({}, a, {
                        participants: [
                            e
                        ]
                    }),
                    dbIsStale: i
                })));
            const C = [].concat(g, h).filter(Boolean);
            if (C.length === 0) {
                return null;
            }
            return C;
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ currentParticipants: t, groupWid: n, isLidAddressingMode: r, previousParticipantIds: a }) {
            const i = new Set(t.map(({ id: t })=>t.toString()));
            const l = a.map((e)=>o("WAWebWidFactory").createWid(e)).filter((e)=>o("WAWebBotUtils").isWidGroupAgentFbidWid(e) && o("WAWebBotGroupGatingUtils").isAgentListedInGroupInfoResponse(e) && !i.has(e.toString())).map((e)=>({
                    id: e,
                    isAdmin: false,
                    isSuperAdmin: false
                }));
            if (l.length === 0) {
                return [];
            }
            const s = yield _({
                meta: {
                    chatId: n,
                    author: null,
                    ts: o("WATimeUtils").unixTime(),
                    isLidAddressingMode: r
                },
                action: {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                    participants: l,
                    reason: null,
                    isLidAddressingMode: r ?? void 0
                },
                dbIsStale: false
            });
            return s ?? [];
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return babelHelpers.extends({}, e, {
            externalId: `${e.externalId ?? r("WAWebMsgKey").newId_DEPRECATED()}${C(t)}`
        });
    }
    function C(e) {
        return e.replace(p, "");
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action: r, agents: a, dbIsStale: i, humans: l, meta: s }) {
            if (l.length === 0) {
                return null;
            }
            const p = l.find(({ id: t })=>o("WAWebUserPrefsMeUser").isMeAccount(t));
            const _ = l.filter((e)=>e !== p);
            const f = yield (e || (e = n("Promise"))).all([
                p == null ? null : o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: y(s, d),
                    action: babelHelpers.extends({}, r, {
                        participants: [
                            p
                        ]
                    }),
                    dbIsStale: i
                }),
                _.length === 0 ? null : o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: y(s, p == null ? c : m),
                    action: babelHelpers.extends({}, r, {
                        participants: _
                    }),
                    dbIsStale: i
                })
            ].concat(a.map((e)=>o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: y(s, `${u}${e.id.user}`),
                    action: babelHelpers.extends({}, r, {
                        participants: [
                            e
                        ]
                    }),
                    dbIsStale: i
                }))));
            const g = f.filter(Boolean);
            if (g.length === 0) {
                return null;
            }
            return g;
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action: t, dbIsStale: n, isAdmin: r, leavingHumans: a, meta: i }) {
            const l = i.author;
            if (a.length === 0 || l == null) {
                return null;
            }
            const s = o("WAWebUserPrefsMeUser").isMeAccount(l) || (r ?? (yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(i.chatId.toString())));
            if (s) {
                return o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: i,
                    action: babelHelpers.extends({}, t, {
                        participants: [
                            babelHelpers.extends({}, a[0], {
                                id: l
                            })
                        ]
                    }),
                    dbIsStale: n
                });
            }
            return null;
        });
        return R.apply(this, arguments);
    }
    l.genGroupAgentRemovalMsgs = _;
    l.genGroupAgentRemovalMsgsForMetadata = g;
    l.withSystemMsgIdSuffix = y;
    l.toSystemMsgIdPart = C;
}, 98);