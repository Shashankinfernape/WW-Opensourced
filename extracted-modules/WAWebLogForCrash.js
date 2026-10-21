__d("WAWebLogForCrash", [
    "cr:38444",
    "logForCrash"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    let s = null;
    let u = null;
    try {
        const c = n("logForCrash");
        e = c.logForCrash;
        s = c.clearCrashLog;
        u = c.onLogForCrashReady;
    } catch (e) {}
    function d(t, r, o) {
        if (n("cr:38444") != null && r != null) {
            n("cr:38444").logForCrash(t, r, n("cr:38444").RSTLogMode.VALID_UNTIL_NEXT_WRITE, {
                logForNativeReports: false
            });
        }
        e?.(t, r, o);
    }
    function m(e, t) {
        if (n("cr:38444") != null) {
            n("cr:38444").logForCrash(e, "", n("cr:38444").RSTLogMode.VALID_UNTIL_NEXT_WRITE, {
                logForNativeReports: false
            });
        }
        s?.(e, t);
    }
    function p(e) {
        u?.(e);
    }
    l.logForCrash = d;
    l.clearCrashLog = m;
    l.onLogForCrashReady = p;
}, 98);