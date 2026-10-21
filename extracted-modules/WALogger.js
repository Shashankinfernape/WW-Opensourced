__d("WALogger", [
    "$InternalEnum",
    "WATagsLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum").Mirrored([
        "UNCAUGHT_EXCEPTION_SAD",
        "UNHANDLED_REJECTED_PROMISE_SAD",
        "CRASH_OR_UNRECOVERABLE_ERROR_SAD",
        "USER_FORCEFULLY_LOGGED_OUT_SAD",
        "PERFORMANCE_OBSERVER_LONGTASK_SAD",
        "UNCATEGORIZED_SAD",
        "EXTREMELY_BAD_USER_EXPERIENCE_SAD",
        "UNCAUGHT_EXCEPTION",
        "UNHANDLED_REJECTED_PROMISE",
        "MINOR_ISSUE",
        "INVESTIGATION",
        "COUNTING_STAT",
        "UNCATEGORIZED"
    ]);
    const s = new Set([
        e.UNCATEGORIZED_SAD,
        e.UNCAUGHT_EXCEPTION_SAD,
        e.UNHANDLED_REJECTED_PROMISE_SAD,
        e.CRASH_OR_UNRECOVERABLE_ERROR_SAD,
        e.USER_FORCEFULLY_LOGGED_OUT_SAD,
        e.EXTREMELY_BAD_USER_EXPERIENCE_SAD,
        e.PERFORMANCE_OBSERVER_LONGTASK_SAD
    ]);
    const u = o("WATagsLogger").TAGS([]);
    const { COUNT: c, DEV: d, DEV_XMPP: m, ERROR: p, EXPECTED_ERROR: _, LOG: f, WARN: g } = u;
    l.SendLogsType = e;
    l.SadSendLogsTypes = s;
    l.COUNT = c;
    l.DEV = d;
    l.DEV_XMPP = m;
    l.ERROR = p;
    l.EXPECTED_ERROR = _;
    l.LOG = f;
    l.WARN = g;
}, 98);