__d("WAWebSignalSessionCleanupJob", [
    "WALogger",
    "WAWebODS",
    "WAWebSignalStorage",
    "WAWebSignalStoreApi",
    "WAWebUserPrefsSignalSessionCleanup",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (r("gkx")("16018") && !o("WAWebUserPrefsSignalSessionCleanup").isSignalSessionCleanupComplete()) {
                try {
                    const t = [];
                    yield o("WAWebSignalStorage").getSessionTable().forEach(({ address: n, session: r })=>{
                        if (r == null || r instanceof ArrayBuffer && r.byteLength === 0) {
                            t.push(n);
                        }
                    });
                    if (t.length > 0) {
                        yield o("WAWebSignalStoreApi").waSignalStore.bulkRemoveSession(t);
                        r("WAWebODS").incr("web.signal.session_cleanup.executed");
                    }
                    yield o("WAWebUserPrefsSignalSessionCleanup").setSignalSessionCleanupComplete();
                } catch (t) {
                    r("WAWebODS").incr("web.signal.session_cleanup.error");
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to clean up corrupted signal sessions"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("signal-session-cleanup-failed");
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.cleanupCorruptedSignalSessions = s;
}, 98);