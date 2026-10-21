__d("RSTCloseObserver", [
    "FBLogger",
    "RSTConfig",
    "RSTEvents",
    "RSTSessionID",
    "ResponsiveTrackerMainThread",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (r("RSTConfig").ENABLE_SERVICE_WORKER) {
            const t = e.persisted ? o("RSTEvents").RSTEvent.BROWSER_TAB_BACKGROUND : o("RSTEvents").RSTEvent.BROWSER_TAB_CLOSED;
            const n = {
                type: r("RSTConfig").MESSAGE_TYPE,
                event: t,
                eventTime: Date.now(),
                DOMData: {
                    hidden: false
                },
                sessionID: o("RSTSessionID").getSessionID(),
                metadata: null
            };
            try {
                if ("serviceWorker" in navigator) {
                    navigator.serviceWorker?.controller?.postMessage({
                        command: "responsiveness",
                        data: n
                    });
                }
            } catch (error) {
                r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).warn("Failed to send quick browser tab close event to worker");
            }
            try {
                r("ResponsiveTrackerMainThread").postEvent(t);
            } catch (error) {
                r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).mustfix("Failed to send browser tab close/background event to worker");
            }
        }
    }
    function s() {
        window.addEventListener("pagehide", e);
    }
    l.initPageCloseObserver = s;
}, 98);