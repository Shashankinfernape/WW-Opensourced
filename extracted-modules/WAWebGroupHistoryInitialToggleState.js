__d("WAWebGroupHistoryInitialToggleState", [
    "WAWebGroupHistoryGating",
    "WAWebGroupHistorySentOnceAction",
    "WAWebGroupHistoryToggleActivation"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        if (t) {
            if (e != null) {
                return {
                    shouldSendGroupHistory: e,
                    toggleActivation: babelHelpers.extends({}, o("WAWebGroupHistoryToggleActivation").NO_GROUP_HISTORY_TOGGLE_ACTIVATION, {
                        togglePerGroupUsageActivated: true
                    })
                };
            }
            if (o("WAWebGroupHistoryGating").isGroupHistorySendDefaultOnEnabled()) {
                return {
                    shouldSendGroupHistory: true,
                    toggleActivation: babelHelpers.extends({}, o("WAWebGroupHistoryToggleActivation").NO_GROUP_HISTORY_TOGGLE_ACTIVATION, {
                        toggleDefaultOn: true
                    })
                };
            }
            if (o("WAWebGroupHistorySentOnceAction").hasSentGroupHistoryOnce() && o("WAWebGroupHistoryGating").isGroupHistorySendOnceDefaultOnEnabled()) {
                return {
                    shouldSendGroupHistory: true,
                    toggleActivation: babelHelpers.extends({}, o("WAWebGroupHistoryToggleActivation").NO_GROUP_HISTORY_TOGGLE_ACTIVATION, {
                        toggleUserActivated: true
                    })
                };
            }
            return {
                shouldSendGroupHistory: false,
                toggleActivation: o("WAWebGroupHistoryToggleActivation").NO_GROUP_HISTORY_TOGGLE_ACTIVATION
            };
        }
        return {
            shouldSendGroupHistory: false,
            toggleActivation: o("WAWebGroupHistoryToggleActivation").NO_GROUP_HISTORY_TOGGLE_ACTIVATION
        };
    }
    l.computeInitialGroupHistoryToggleState = e;
}, 98);