__d("WAWebPttTsExternalLogger", [
    "WAWebTimeSpentLoggingExternal",
    "WAWebWamEnumTsExternalEventSource"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        let t = null;
        function n() {
            t?.();
            t = o("WAWebTimeSpentLoggingExternal").beginTsExternalEvent(o("WAWebWamEnumTsExternalEventSource").TS_EXTERNAL_EVENT_SOURCE.PTT_PLAY);
        }
        function r() {
            t?.();
        }
        e.addEventListener("playing", n);
        e.addEventListener("pause", r);
        e.addEventListener("ended", r);
        e.addEventListener("error", r);
        return function() {
            r();
            e.removeEventListener("playing", n);
            e.removeEventListener("pause", r);
            e.removeEventListener("ended", r);
            e.removeEventListener("error", r);
        };
    }
    l.attachPttPlayTimeSpentLogger = e;
}, 98);