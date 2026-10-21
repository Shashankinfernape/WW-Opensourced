__d("WAWebSyncGroupBotSupportFields", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupDatabaseJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = r("JSResourceForInteraction")("WAWebMaybeSyncBotSupportFields").__setRef("WAWebSyncGroupBotSupportFields");
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = [], n = {}) {
            const r = n;
            const a = r.endFetchPause;
            const i = a === void 0 ? false : a;
            const l = r.sourceGroupWid;
            if (o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
                const s = e.filter((e)=>e.isFbidBot());
                const c = yield m(t);
                if (!(s.length === 0 && c.length === 0)) {
                    const d = yield u.load();
                    const { maybeQueryGroupAgentRosters: p, maybeSyncGroupBotSupportFields: _ } = d;
                    if (s.length > 0) {
                        _(s, l == null ? {
                            endFetchPause: i
                        } : {
                            endFetchPause: i,
                            sourceGroupWid: l
                        });
                    }
                    if (c.length > 0) {
                        p(c);
                    }
                }
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield (s || (s = n("Promise"))).all(_(e).map(f));
            return t.filter(Boolean);
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        const t = new Map;
        e.forEach(({ groupWid: o, participantWids: a })=>{
            const i = o.toString();
            const l = t.get(i);
            const s = l?.participantsById ?? new Map;
            a.forEach((e)=>{
                s.set(e.toString(), e);
            });
            t.set(i, {
                groupWid: l?.groupWid ?? o,
                participantsById: s
            });
        });
        return Array.from(t.values(), function({ groupWid: t, participantsById: n }) {
            return {
                groupWid: t,
                participantWids: Array.from(n.values())
            };
        });
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupWid: t, participantWids: n }) {
            const r = n.filter(o("WAWebBotUtils").isWidStandardGroupAgentFbidWid);
            if (r.length === 0) {
                return null;
            }
            const a = yield h(t);
            return {
                groupWid: t,
                missingAgentWids: r.filter((e)=>a?.some(function(t) {
                        return t.equals(e);
                    }) !== true)
            };
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const n = yield o("WAWebGroupDatabaseJob").getGroupParticipantJob(t);
                if (n == null) {
                    return void 0;
                }
                return n.participants.map(({ id: t })=>t);
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[maybeLazySyncGroupBotSupportFields] participant read failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("sbp-group-agent-participant-read-error");
                return null;
            }
        });
        return y.apply(this, arguments);
    }
    l.maybeLazySyncGroupBotSupportFields = c;
}, 98);