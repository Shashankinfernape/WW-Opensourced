__d("WAWebVoipCallsTabOpenCallInfo", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebCmd",
    "WAWebLazyLoadedRetriable",
    "WAWebNavBarTypes",
    "WAWebVoipCallsTabNavigateTo",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebVoipCallsTabResolveCallInfo").__setRef("WAWebVoipCallsTabOpenCallInfo").load();
        return e;
    }), "WAWebVoipCallsTabResolveCallInfo");
    function c(e) {
        o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Calls);
        o("WAWebCmd").Cmd.closeActiveChat();
        o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({});
        return p(e);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const n = yield u();
                const a = n.openFavoriteCallInfoOrChat;
                yield a(t);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebVoipCallsTabOpenCallInfo: failed to open favorite"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("calls-tab-open-favorite-failed");
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield u();
                const n = t.openCallLogInfoPanelForCallId;
                yield n(e);
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebVoipCallsTabOpenCallInfo: failed to resolve call log ",
                    ""
                ])), e).catching(r("getErrorSafe")(error)).sendLogs("calls-tab-open-call-info-failed");
            }
        });
        return _.apply(this, arguments);
    }
    l.openVoipCallsTabCallInfo = c;
    l.openVoipCallsTabFavorite = d;
}, 98);