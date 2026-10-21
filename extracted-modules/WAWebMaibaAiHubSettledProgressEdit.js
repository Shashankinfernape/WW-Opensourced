__d("WAWebMaibaAiHubSettledProgressEdit", [
    "WAWebBotTypes",
    "WAWebMaibaWASSMigration",
    "WAWebUnifiedResponseUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (!o("WAWebMaibaWASSMigration").isMaibaAiHubLid(e.id.remote)) {
            return null;
        }
        const n = o("WAWebUnifiedResponseUtils").isSettledProgressStatusOnly(t.unifiedResponse);
        if (s(e, t, n)) {
            return o("WAWebViewMode.flow").ViewModeType.HIDDEN;
        }
        if (u(e, n)) {
            return o("WAWebViewMode.flow").ViewModeType.VISIBLE;
        }
        return null;
    }
    function s(e, t, n) {
        return n && t.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST && o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, e.viewMode);
    }
    function u(e, t) {
        return !t && e.viewMode === o("WAWebViewMode.flow").ViewModeType.HIDDEN && e.associationType == null;
    }
    l.getMaibaAiHubSettledProgressEditViewMode = e;
}, 98);