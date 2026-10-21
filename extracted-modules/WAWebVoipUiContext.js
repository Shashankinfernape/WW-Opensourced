__d("WAWebVoipUiContext", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const UContext = s.createContext({
        uiHeight: null,
        showCenteredToast: undefined,
        showToast: undefined,
        openMicrophoneSettings: undefined,
        registerMicrophoneSettingsOpener: undefined,
        isCompactLayout: false,
        activeMicrophoneWarning: null,
        requestSecurityCodeVerification: undefined,
        toggleMobileControls: null
    });
    l.default = UContext;
}, 98);