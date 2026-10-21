__d("WAWebGroupAgentAddSystemMsgs", [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotUtils",
    "WAWebGroupAgentAddAttribution",
    "WAWebGroupAgentRemovalSystemMsgs",
    "WAWebGroupSystemMsg",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebSchemaBotProfile",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = "agentadded";
    const m = new Set([
        (c = o("WAWebBotProduct")).BotProduct.META_AI,
        c.BotProduct.META_AI_THREAD,
        c.BotProduct.SIDE_CHAT,
        c.BotProduct.MANUS,
        c.BotProduct.SUPPORT
    ]);
    const p = n("$InternalEnum").Mirrored([
        "Combined",
        "Muse",
        "Separate"
    ]);
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action: t, dbIsStale: r, meta: a }) {
            const i = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    return o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                        meta: a,
                        action: babelHelpers.extends({}, t, {
                            participants: e
                        }),
                        dbIsStale: r
                    });
                });
                return function(n) {
                    return e.apply(this, arguments);
                };
            })();
            const l = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    return [
                        (yield i(t.participants))
                    ];
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            if (t.reason != null || !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() || !t.participants.some(({ id: t })=>o("WAWebBotUtils").isWidGroupAgentFbidWid(t))) {
                return l();
            }
            if (t.participants.some(({ id: t })=>o("WAWebUserPrefsMeUser").isMeAccount(t))) {
                return [
                    (yield i(t.participants.filter(({ id: t })=>!o("WAWebBotUtils").isWidGroupAgentFbidWid(t))))
                ];
            }
            const s = yield S(t.participants);
            const { agents: u, humans: c } = s;
            if (u.length === 0) {
                return l();
            }
            if (u.length === 1 && c.length === 0) {
                return [
                    (yield T((yield i(u)), u[0], a.author))
                ];
            }
            const d = yield b(u, function(e) {
                return y({
                    action: t,
                    agent: e,
                    dbIsStale: r,
                    meta: a
                });
            });
            if (d.length === 0 || d.some((e)=>e == null)) {
                return l();
            }
            if (c.length === 0) {
                return d;
            }
            return [].concat(d, [
                (yield i(c))
            ]);
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ meta: t, participants: r, prevParticipantIds: a, reason: i }) {
            if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() || t.author == null || i != null) {
                return [];
            }
            const l = new Set(a);
            const s = r.filter(({ id: t })=>o("WAWebBotUtils").isWidGroupAgentFbidWid(t) && !l.has(t.toString()));
            const c = yield (u || (u = n("Promise"))).all(s.map(({ id: t })=>L(t)));
            const d = s.filter((e, t)=>c[t]);
            const m = yield b(d, function(e) {
                return y({
                    action: {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                        participants: [
                            e
                        ],
                        reason: null
                    },
                    agent: e,
                    dbIsStale: true,
                    meta: t
                });
            });
            return m.filter(Boolean);
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action: t, agent: n, dbIsStale: r, meta: a }) {
            const i = yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                meta: o("WAWebGroupAgentRemovalSystemMsgs").withSystemMsgIdSuffix(a, `${d}${n.id.user}`),
                action: babelHelpers.extends({}, t, {
                    participants: [
                        n
                    ]
                }),
                dbIsStale: r
            });
            return T(i, n, a.author);
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = yield (u || (u = n("Promise"))).allSettled(t.map(a));
            return i.flatMap((t)=>{
                if (t.status === "fulfilled") {
                    return [
                        t.value
                    ];
                }
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[genGroupAgentAddMsgs] agent-added row failed"
                ]))).catching(r("getErrorSafe")(t.reason)).sendLogs("group-agent-added-row-failed");
                return [];
            });
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield (u || (u = n("Promise"))).all(e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ id: t }) {
                    return o("WAWebBotUtils").isWidGroupAgentFbidWid(t) && (yield L(t));
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            return {
                agents: e.filter((e, n)=>t[n]),
                humans: e.filter((e, n)=>!t[n])
            };
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return ((e)=>{
                if (e === p.Combined) {
                    return false;
                }
                if (e === p.Muse) {
                    return o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled();
                }
                if (e === p.Separate) {
                    return true;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })((yield k(e)));
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e)) {
                return p.Combined;
            }
            const t = yield x(e);
            const n = t instanceof Error ? null : o("WAWebBotProduct").botProductFromServerValue(t?.product);
            if (m.has(n)) {
                return p.Combined;
            }
            if (o("WAWebBotProduct").isMuseAgentProduct(e, n)) {
                return p.Muse;
            }
            return p.Separate;
        });
        return I.apply(this, arguments);
    }
    function T(e, t, n) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (e == null || !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(t.id)) {
                return e;
            }
            const a = yield x(t.id);
            if (a instanceof Error) {
                return e;
            }
            const i = o("WAWebBotProduct").isMuseAgentProduct(t.id, o("WAWebBotProduct").botProductFromServerValue(a?.product)) && a?.creatorLid != null && n != null && o("WAWebLidMigrationUtils").toUserLid(n)?.user === a.creatorLid;
            return babelHelpers.extends({}, e, {
                body: (i ? o("WAWebGroupAgentAddAttribution").GroupAgentAddAttribution.OWNER : o("WAWebGroupAgentAddAttribution").GroupAgentAddAttribution.MEMBER).valueOf()
            });
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                return yield o("WAWebSchemaBotProfile").getBotProfileTable().get(e.toString());
            } catch (e) {
                const t = r("getErrorSafe")(e);
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[genGroupAgentAddMsgs] bot profile read failed"
                ]))).catching(t).sendLogs("group-agent-added-profile-read-failed");
                return t;
            }
        });
        return $.apply(this, arguments);
    }
    l.genGroupAddNotificationMsgs = _;
    l.genGroupCreateAgentAddMsgs = g;
}, 98);