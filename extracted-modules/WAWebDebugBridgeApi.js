__d("WAWebDebugBridgeApi", [
    "WAWebDownloadWebLogs",
    "WAWebLoggerDebugInfo"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        createDownloadDataForMdWebLogs: function() {
            o("WAWebDownloadWebLogs").createDownloadDataForMdWebLogs();
        },
        getWebLogs: function() {
            return o("WAWebDownloadWebLogs").getWebLogs();
        },
        getDebugInfo: function(t) {
            return o("WAWebLoggerDebugInfo").getDebugInfo(t ?? undefined);
        }
    };
    l.DebugBridgeApi = e;
}, 98);