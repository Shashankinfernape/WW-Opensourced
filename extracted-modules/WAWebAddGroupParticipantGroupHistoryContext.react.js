__d("WAWebAddGroupParticipantGroupHistoryContext.react", [
    "WAWebGroupHistoryToggleActivation",
    "WAWebNoop",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const createContext = (e || (e = o("react"))).createContext;
    const UContext = createContext({
        enterFlowTimestamp: null,
        groupWid: null,
        messageCountPromise: null,
        selectedMessageCount: null,
        setSelectedMessageCount: r("WAWebNoop"),
        shouldSendGroupHistory: false,
        setShouldSendGroupHistory: r("WAWebNoop"),
        hasUserToggledGroupHistory: false,
        canShareGroupHistory: false,
        toggleActivation: o("WAWebGroupHistoryToggleActivation").NO_GROUP_HISTORY_TOGGLE_ACTIVATION
    });
    l.default = UContext;
}, 98);