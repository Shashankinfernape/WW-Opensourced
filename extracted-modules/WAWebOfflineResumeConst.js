__d("WAWebOfflineResumeConst", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = n("$InternalEnum").Mirrored([
        "INIT",
        "RESUME_ON_RESTART",
        "RESUME_WITH_OPEN_TAB",
        "COMPLETE"
    ]);
    const l = 20000;
    const s = 100;
    const u = 2000;
    const c = 60000;
    const d = 1000;
    const m = 1000;
    i.ResumeStatus = e;
    i.OFFLINE_STANZA_COUNT_CHECK_TIMEOUT_MS = l;
    i.OFFLINE_STANZA_COUNT_LIMIT = s;
    i.OFFLINE_DEVICE_SYNC_DELAY = u;
    i.OFFLINE_STANZA_TIMEOUT_MS = c;
    i.OFFLINE_PREVIEW_PERIOD_MS = d;
    i.UI_UPDATE_TIME_MS = m;
}, 66);