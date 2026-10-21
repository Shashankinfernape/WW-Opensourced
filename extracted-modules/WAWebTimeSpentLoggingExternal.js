__d("WAWebTimeSpentLoggingExternal", [
    "WAWebABProps",
    "WAWebClock",
    "WAWebTimeSpentLoggingSession",
    "WAWebTsExternalWamEvent",
    "WAWebUnifiedSession"
], function(t, n, r, o, a, i, l) {
    const e = 1000;
    const s = new Set;
    function u() {
        return s.size > 0;
    }
    function c(e) {
        const t = o("WAWebTimeSpentLoggingSession").getOrInitTimeSpentSession();
        const n = {
            source: e,
            tsSessionId: t.id,
            startTimeMs: t.relativeTimestampMs
        };
        n.tsTimestampMs = o("WAWebClock").Clock.getServerTimeMs();
        const r = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
        if (r != null) {
            n.unifiedSessionId = r;
        }
        m(n);
        s.add(n);
        let a = false;
        return function() {
            if (!a) {
                _(n);
                a = true;
            }
        };
    }
    function d(t, n) {
        const r = n - t.startTimeMs;
        if (!(r < e)) {
            const o = {
                tsSessionId: t.tsSessionId,
                tsDuration: Math.floor(r / 1000),
                tsExternalEventSource: t.source,
                relativeTimestampMs: t.startTimeMs
            };
            if (t.tsTimestampMs != null) {
                o.tsTimestampMs = t.tsTimestampMs;
            }
            if (t.unifiedSessionId != null) {
                o.unifiedSessionId = t.unifiedSessionId;
            }
            return o;
        }
    }
    function m(e) {
        e.intervalTimeoutId = self.setTimeout(function() {
            return p(e);
        }, o("WAWebABProps").getABPropConfigValue("ts_session_duration_ms") / 2);
    }
    function p(e) {
        o("WAWebTimeSpentLoggingSession").markTimeSpentActivity();
        const t = o("WAWebTimeSpentLoggingSession").getOrInitTimeSpentSession();
        const n = t.relativeTimestampMs;
        const r = d(e, n);
        if (r != null) {
            new (o("WAWebTsExternalWamEvent")).TsExternalWamEvent(r).commit();
            e.startTimeMs = n;
            m(e);
        }
    }
    function _(e) {
        if (e.intervalTimeoutId != null) {
            self.clearTimeout(e.intervalTimeoutId);
        }
        s.delete(e);
        const t = o("WAWebTimeSpentLoggingSession").getOrInitTimeSpentSession();
        const n = t.relativeTimestampMs;
        const r = d(e, n);
        if (r != null) {
            new (o("WAWebTsExternalWamEvent")).TsExternalWamEvent(r).commit();
        }
    }
    l.tsExternalEventsInProgress = u;
    l.beginTsExternalEvent = c;
}, 98);