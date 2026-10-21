__d("WAWebBizAISettingsCategoryHandlers", [
    "WAWebBizAISettingsCategoryRegistry",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiHandoffRemovalTimingFetchQuery",
    "WAWebBizAiRulesGenMutation",
    "WAWebProtobufSyncAction.pb",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map([
        [
            o("WAWebProtobufSyncAction.pb").SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.INSTRUCTIONS,
            o("WAWebBizAiRulesGenMutation").fetchRules
        ],
        [
            o("WAWebProtobufSyncAction.pb").SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.HANDOFF_REMOVAL_TIMING,
            s
        ]
    ]);
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent()) {
                yield o("WAWebBizAiHandoffRemovalTimingFetchQuery").fetchHandoffRemovalTiming();
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        if (e === o("WAWebProtobufSyncAction.pb").SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.HANDOFF_REMOVAL_TIMING) {
            return o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent() && o("WAWebBizAiAgentGating").isHandoffRemovalTimingSyncEnabled();
        }
        return true;
    }
    function d(t) {
        const fetch = e.get(t);
        if (fetch != null && c(t)) {
            o("WAWebBizAISettingsCategoryRegistry").registerCategory(t, {
                fetch
            });
        }
    }
    l.registerCategoryHandler = d;
}, 98);