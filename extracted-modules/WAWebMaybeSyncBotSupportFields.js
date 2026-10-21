__d("WAWebMaybeSyncBotSupportFields", [
    "WALogger",
    "WATimeUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProfileCollection",
    "WAWebBotProfileFetchPause",
    "WAWebBotProfileFreshness",
    "WAWebBotStaticProfiles",
    "WAWebGroupQueryGroupJob",
    "WAWebPersistBotProfiles",
    "WAWebSyncBotSupportFields",
    "WAWebWidToJid",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 60000;
    const d = 100;
    const m = new Set;
    const p = new Set;
    const _ = new Map;
    function f(t, { sourceGroupWid, tombstoneOnMissing = true, ttlMs } = {}) {
        if (!(!t.isFbidBot() || o("WAWebBotStaticProfiles").isStaticProfile(t))) {
            const c = o("WAWebBotProfileCollection").BotProfileCollection.get(t);
            const d = c == null ? null : {
                isDeleted: c.isDeleted,
                groupTosRequirements: c.groupTosRequirements,
                product: c.product,
                lastFetchedTimeMs: c.lastFetchedTimeMs
            };
            if (o("WAWebBotProfileFreshness").isBotProfileStale(d, o("WATimeUtils").unixTimeMs(), ttlMs)) {
                if (!m.has(t)) {
                    m.add(t);
                    o("WAWebSyncBotSupportFields").syncBotSupportFields(t, tombstoneOnMissing, sourceGroupWid == null ? null : o("WAWebWidToJid").widToGroupJid(sourceGroupWid)).catch((t)=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[maybeSyncBotSupportFields] sync failed"
                        ]))).catching(r("getErrorSafe")(t)).sendLogs("sbp-maybe-sync-error");
                    }).finally(()=>{
                        m.delete(t);
                    });
                }
            }
        }
    }
    function g(e) {
        e.forEach(({ groupWid, missingAgentWids })=>{
            if (missingAgentWids.length === 0) {
                _.delete(groupWid);
                return;
            }
            if (!p.has(groupWid)) {
                const o = _.get(groupWid) ?? new Set;
                const a = missingAgentWids.filter((e)=>!o.has(e));
                if (a.length !== 0) {
                    a.forEach((e)=>o.add(e));
                    h(groupWid, o);
                    y(groupWid, ()=>{
                        a.forEach((e)=>o.delete(e));
                    });
                }
            }
        });
    }
    function h(groupWid, t) {
        _.delete(groupWid);
        _.set(groupWid, t);
        if (_.size > d) {
            const n = _.keys().next().value;
            if (n != null) {
                _.delete(n);
            }
        }
    }
    function y(groupWid, t) {
        p.add(groupWid);
        o("WAWebGroupQueryGroupJob").queryGroupJob(groupWid, "out_of_sync_update", {
            preserveLocalMembership: true,
            updateGroupStateOnError: false
        }).then((e)=>{
            if (e.status !== "success") {
                t();
            }
        }).catch((e)=>{
            t();
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[maybeQueryGroupAgentRosters] query failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("sbp-group-agent-roster-query-error");
        }).finally(()=>{
            p.delete(groupWid);
        });
    }
    function C(e, { endFetchPause = false, sourceGroupWid, ttlMs } = {}) {
        if (o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
            const c = o("WATimeUtils").unixTimeMs();
            e.forEach((e)=>{
                const t = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
                const n = t?.fetchPauseUntilMs;
                const a = n != null;
                const d = o("WAWebBotProfileFetchPause").isBotProfileFetchPaused(n, c);
                if (!(d && !endFetchPause)) {
                    if (d && t != null) {
                        t.set({
                            fetchPauseUntilMs: null
                        });
                        o("WAWebPersistBotProfiles").mergeBotSupportFields(e, {
                            fetchPauseUntilMs: null
                        }).catch((e)=>{
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[maybeSyncGroupBotSupportFields] failed to end fetch pause"
                            ]))).catching(r("getErrorSafe")(e)).sendLogs("sbp-end-fetch-pause-error");
                        });
                    }
                    f(e, {
                        sourceGroupWid,
                        ttlMs: a ? 0 : ttlMs
                    });
                }
            });
        }
    }
    l.CHAT_OPEN_REFRESH_TTL_MS = c;
    l.maybeSyncBotSupportFields = f;
    l.maybeQueryGroupAgentRosters = g;
    l.maybeSyncGroupBotSupportFields = C;
}, 98);