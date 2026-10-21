__d("WAWebPersistAndSyncGroupHistoryToggle", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryToggleModeStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = r("JSResourceForInteraction")("WAWebSendGroupHistoryToggleMutation").__setRef("WAWebPersistAndSyncGroupHistoryToggle");
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = yield o("WAWebGroupHistoryToggleModeStore").setGroupHistoryToggleMode(t, n);
            if (!a || !o("WAWebGroupHistoryGating").isGroupHistoryPerGroupToggleMdSyncEnabled()) {
                return a;
            }
            try {
                const i = yield s.load();
                const l = i.sendGroupHistoryToggleMutation;
                yield l(t, n);
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "persistAndSyncGroupHistoryToggle: sending the toggle mutation failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("group-history-toggle-sync-send-failed");
            }
            return a;
        });
        return c.apply(this, arguments);
    }
    l.persistAndSyncGroupHistoryToggle = u;
}, 98);