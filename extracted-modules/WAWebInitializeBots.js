__d("WAWebInitializeBots", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebBotCanonicalRetry",
    "WAWebPersistBotProfiles",
    "WAWebRequestBotProfiles",
    "WAWebRestoreBotProfilesFromDb",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsBot",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred"
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
    let h;
    let y;
    const C = r("requireDeferred")("WAWebRequestBotList").__setRef("WAWebInitializeBots");
    const b = 2000;
    function v() {
        return o("WAWebUserPrefsBot").getBotListLastRequestedTimestamp();
    }
    let S = null;
    function R(e) {
        if (S != null) {
            self.clearTimeout(S);
        }
        S = self.setTimeout(function() {
            S = null;
            k();
        }, e * 1000);
    }
    function L({ didFetchFromServer: n, durationMs: r }) {
        if (!(r <= b)) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] initializeBots slow ms=",
                " fetchedFromServer=",
                ""
            ])), Math.round(r), n).sendLogs("bot-initialize-slow", {
                sampling: 0.01
            });
        }
    }
    let E = null;
    function k() {
        if (E != null) {
            return E;
        }
        let e = false;
        E = T().then((t)=>{
            e = t;
        }).finally(()=>{
            E = null;
            if (e) {
                o("WAWebBotCanonicalRetry").armCanonicalRetry(I);
            }
        });
        return E;
    }
    function I() {
        const e = E ?? (y || (y = n("Promise"))).resolve();
        e.then(k, k).catch((e)=>{
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] canonical retry bot sync failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("bot-canonical-retry-sync-failed", {
                sampling: 0.01
            });
        });
    }
    function T() {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] skipping bot initialization in worker"
                ])));
                return false;
            }
            if (!o("WAWebBotBaseGating").isBotEnabled()) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] not initializing bots due to feature being disabled"
                ])));
                return false;
            }
            const e = self.performance.now();
            const t = v();
            const n = o("WATimeUtils").unixTime();
            const a = o("WAWebABProps").getABPropConfigValue("bonsai_update_interval");
            let i;
            let l = false;
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] restoring bots from DB"
            ])));
            try {
                yield o("WAWebRestoreBotProfilesFromDb").restoreBotProfilesFromDb();
            } catch (e) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] restoreBotProfilesFromDb error"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("bot-restore-bot-profiles-error");
            }
            if (t + a < n) {
                l = true;
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] requesting bots from server"
                ])));
                yield x();
                i = a;
            } else {
                i = t + a - n;
            }
            L({
                didFetchFromServer: l,
                durationMs: self.performance.now() - e
            });
            R(i);
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] initializing bots complete, next fetch at ",
                ""
            ])), n + i);
            return l;
        });
        return D.apply(this, arguments);
    }
    function x() {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e;
            try {
                const t = yield C.load();
                const n = t.requestBotList;
                e = yield n();
            } catch (e) {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] requestBotList error"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("bot-request-bot-list-error");
                return;
            }
            let a;
            try {
                a = yield o("WAWebRequestBotProfiles").requestBotProfiles(e);
            } catch (e) {
                o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] requestBotProfiles rejected"
                ]))).catching(r("getErrorSafe")(e));
                return;
            }
            try {
                yield o("WAWebPersistBotProfiles").persistBotProfiles(a);
            } catch (e) {
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] persistBotProfiles error"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("bot-persist-bot-profiles-error");
                return;
            }
            P();
        });
        return $.apply(this, arguments);
    }
    function P() {
        o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(o("WATimeUtils").unixTime());
    }
    l.initializeBots = k;
    l.getBotProfilesFromServer = x;
}, 98);