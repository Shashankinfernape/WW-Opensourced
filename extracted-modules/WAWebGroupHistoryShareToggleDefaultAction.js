__d("WAWebGroupHistoryShareToggleDefaultAction", [
    "Promise",
    "WALogger",
    "WAWebGroupHistoryGating",
    "WAWebGroupMetadataCollection",
    "WAWebPersistAndSyncGroupHistoryToggle",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, shouldDefaultGroupHistoryShareOn) {
            yield o("WAWebPersistAndSyncGroupHistoryToggle").persistAndSyncGroupHistoryToggle(e, shouldDefaultGroupHistoryShareOn);
            r("WAWebGroupMetadataCollection").get(e)?.set({
                shouldDefaultGroupHistoryShareOn
            });
        });
        return c.apply(this, arguments);
    }
    function d(t, a) {
        const i = o("WAWebWidFactory").asGroupWidOrThrow(t);
        if (!o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(i) || !o("WAWebGroupHistoryGating").isGroupHistoryPerGroupToggleMdSyncEnabled()) {
            return (s || (s = n("Promise"))).resolve();
        }
        return u(i, a).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] failed to persist share-toggle choice"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("group-history-toggle-persist-failed");
        });
    }
    function m(e, t, r) {
        if (r && o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(e)) {
            return u(e, t);
        }
        return (s || (s = n("Promise"))).resolve();
    }
    l.setGroupHistoryShareToggleDefault = u;
    l.persistGroupHistoryToggleChoice = d;
    l.persistGroupHistoryShareToggleDefaultOnAdd = m;
}, 98);