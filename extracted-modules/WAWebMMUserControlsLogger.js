__d("WAWebMMUserControlsLogger", [
    "WAWebMarketingMessageUserControlsJourneyWamEvent",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebUnifiedSession"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        const e = o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMMessageLevelFeedbackNotInterestedMenuEnabled();
        if (e) {
            return 4;
        }
        return 3;
    }
    function s({ action, entryPoint, isSuccess, message }) {
        new (o("WAWebMarketingMessageUserControlsJourneyWamEvent")).MarketingMessageUserControlsJourneyWamEvent({
            isSuccess,
            mmUserControlsAction: action,
            mmUserControlsEntryPoint: entryPoint,
            sequenceNumber: o("WAWebUnifiedSession").UnifiedSessionManager.getSequence() - 1,
            templateId: message?.templateId ?? undefined,
            unifiedSessionId: o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ?? undefined,
            mmUserControlsRolloutVariant: e()
        }).commit();
    }
    l.logMarketingMessageUserControlsJourney = s;
}, 98);