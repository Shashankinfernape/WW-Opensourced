__d("WAWebFetchOwnMuseAgent", [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebFetchWassBotListProfilesGQL",
    "WAWebHatchLinkedStatusManager",
    "WAWebReconcileBotSupportFields",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 5000;
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!(yield p()) || !o("WAWebBotGroupGatingUtils").isMuseGroupAddEnabled()) {
                return null;
            }
            const e = yield o("WAWebFetchWassBotListProfilesGQL").fetchWassBotListProfilesGQL();
            if (e.type !== "success") {
                return null;
            }
            const t = g(e.profiles, o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().user);
            if (t == null) {
                return null;
            }
            return o("WAWebReconcileBotSupportFields").upsertListedAgentProfile(t, Date.now());
        });
        return m.apply(this, arguments);
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = r("WAWebHatchLinkedStatusManager").getLinkedStatusState();
            if (r("WAWebHatchLinkedStatusManager").isLinked() || e !== "failed" && e !== "not_loaded" || o("WAWebABProps").getABPropConfigValue("ai_hatch_integration_enabled") !== true) {
                return r("WAWebHatchLinkedStatusManager").isLinked();
            }
            try {
                yield o("WAPromiseTimeout").promiseTimeout(f(), c, "Hatch linked status refresh timed out");
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[fetchOwnMuseAgent] Hatch linked status refresh failed: ",
                    ""
                ])), String(error));
            }
            return r("WAWebHatchLinkedStatusManager").isLinked();
        });
        return _.apply(this, arguments);
    }
    function f() {
        return new (u || (u = n("Promise")))(function(e) {
            var t = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function() {
                t();
                e();
            });
            r("WAWebHatchLinkedStatusManager").fetchAndUpdateStatus();
        });
    }
    function g(t, n) {
        const a = t.filter((e)=>o("WAWebBotProduct").botProductFromServerValue(e.product) === o("WAWebBotProduct").BotProduct.MUSE && e.isDeprecated !== true && e.creatorLid === n);
        if (a.length > 1) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[fetchOwnMuseAgent] ",
                " live Muse agents listed, offering none"
            ])), a.length).sendLogs("fetch-own-muse-agent-multiple-live");
            return null;
        }
        return a[0] ?? null;
    }
    l.fetchOwnMuseAgent = d;
    l.selectOwnMuseAgentProfile = g;
}, 98);