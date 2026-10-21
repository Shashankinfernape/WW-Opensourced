__d("WAWebReconcileBotSupportFields", [
    "Promise",
    "WALogger",
    "WAWebBotProduct",
    "WAWebDBBulkPersistProfilePic",
    "WAWebFetchWassBotListProfilesGQL",
    "WAWebPersistBotProfiles",
    "WAWebSchemaBotProfile",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(t, n, a) {
        const i = [];
        for (const l of n){
            if (!(l.product !== o("WAWebBotProduct").BotProduct.THIRD_PARTY.valueOf() || l.isDeleted === true) && !(l.lastFetchedTimeMs != null && l.lastFetchedTimeMs >= a)) {
                let s;
                try {
                    s = o("WAWebWidFactory").createWid(l.id);
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[computeBotSupportTombstones] skipping malformed id"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("sbp-reconcile-tombstone-parse-error");
                    continue;
                }
                if (!t.has(s.user)) {
                    i.push(s);
                }
            }
        }
        return i;
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = Date.now();
            const t = yield o("WAWebFetchWassBotListProfilesGQL").fetchWassBotListProfilesGQL();
            if (t.type !== "success") {
                return false;
            }
            if (t.profiles.length === 0) {
                return true;
            }
            const a = Date.now();
            const i = new Set(t.profiles.map((e)=>e.botFbid));
            const l = yield o("WAWebSchemaBotProfile").getBotProfileTable().all();
            yield (d || (d = n("Promise"))).all(t.profiles.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    try {
                        yield f(e, a);
                    } catch (error) {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[reconcileBotSupportFields] failed to upsert a listed agent"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("sbp-reconcile-upsert-error");
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            yield d.all(m(i, l, e).map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    try {
                        yield o("WAWebPersistBotProfiles").mergeBotSupportFields(e, {
                            isDeleted: true,
                            lastFetchedTimeMs: a
                        });
                    } catch (error) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[reconcileBotSupportFields] failed to tombstone a delisted agent"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs("sbp-reconcile-tombstone-error");
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            return true;
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, lastFetchedTimeMs) {
            const n = o("WAWebWidFactory").createWid(`${e.botFbid}@bot`);
            yield o("WAWebPersistBotProfiles").mergeBotSupportFields(n, {
                creatorLid: e.creatorLid,
                hcaEntrypointId: e.hcaEntrypointId,
                name: e.name,
                product: e.product,
                isDeprecated: e.isDeprecated,
                isDeleted: false,
                lastFetchedTimeMs
            });
            const a = o("WAWebPersistBotProfiles").setBotProfilePicUrls(n, e.profilePicThumbUrl, e.profilePicFullUrl);
            if (a != null) {
                o("WAWebDBBulkPersistProfilePic").persistProfilePicBatched(a).catch((e)=>{
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[reconcileBotSupportFields] failed to persist a listed agent pic"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("sbp-reconcile-persist-pic-error");
                });
            }
            return n;
        });
        return g.apply(this, arguments);
    }
    l.computeBotSupportTombstones = m;
    l.reconcileBotSupportFields = p;
    l.upsertListedAgentProfile = f;
}, 98);