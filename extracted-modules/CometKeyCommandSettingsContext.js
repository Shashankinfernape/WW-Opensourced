__d("CometKeyCommandSettingsContext", [
    "CometCustomKeyCommands",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const UContext = s.createContext({
        addCustomCommand: function(t) {},
        checkForKeyCommandConflict: function(t) {
            return [];
        },
        disableCustomCommand: function(t) {},
        getAreSingleKeysDisabled: function() {
            return r("CometCustomKeyCommands").areSingleKeysDisabled;
        },
        getCustomCommandsMap: function() {
            return new Map;
        },
        getCustomKeyCombination: function(t) {},
        getModifiedKeyboardShortcutsPreference: function(t) {
            return 4;
        },
        isViewerShowing: false,
        resetAllCustomCommands: function(t) {},
        resetCustomCommand: function(t) {},
        setAreSingleKeysDisabled: function(t) {},
        setModifiedKeyboardShortcutsPreference: function(t) {},
        setViewerInfo: function(t) {},
        viewerType: "see_all"
    });
    l.default = UContext;
}, 98);