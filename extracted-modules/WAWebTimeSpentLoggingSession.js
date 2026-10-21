__d("WAWebTimeSpentLoggingSession", [
    "WALogger",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebClock",
    "WAWebTimeSpentLoggingBitArray",
    "WAWebTimeSpentLoggingExternal",
    "WAWebUnifiedSession",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWamTimeSpentArray"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = Math.pow(2, 31) - 1;
    let f = null;
    let g = null;
    const h = new (o("WAShiftTimer")).ShiftTimer(function() {
        if (f != null) {
            r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_SESSION, f);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[time-spent] persisted session"
            ])));
        }
    });
    function y(e = false) {
        if (e) {
            h.forceRunNow();
            return;
        }
        const t = 10;
        h.onOrBefore(t * 1000);
    }
    function C() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_SESSION);
        if (e == null || typeof e !== "object") {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[time-spent] no session to restore"
            ])));
            f = null;
            return;
        }
        const { cumulativeBitsSet: t, id: n, lastActivityTimestampMs: a, relativeTimestampMs: i, sequenceId: l, startTimestampMs: d, tsTimestampMs: m, unifiedSessionId: p } = e;
        if (typeof n !== "number" || typeof d !== "number" || typeof a !== "number" || typeof t !== "number" || typeof l !== "number" || typeof i !== "number" || typeof m !== "number" && m != null || typeof p !== "string" && p != null) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[time-spent] malformed ts session: ",
                ""
            ])), JSON.stringify(e));
            f = null;
            return;
        }
        f = {
            id: n,
            startTimestampMs: d,
            lastActivityTimestampMs: a,
            cumulativeBitsSet: t,
            sequenceId: l,
            relativeTimestampMs: i,
            tsTimestampMs: m ?? null,
            unifiedSessionId: p ?? null
        };
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "[time-spent] restored ts session: ",
            ""
        ])), JSON.stringify(f));
    }
    function b() {
        const t = o("WATimeUtils").unixTimeMs();
        const n = o("WAWebClock").Clock.getServerTimeMs();
        const r = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ?? null;
        if (f == null || t - f.lastActivityTimestampMs >= S() && !o("WAWebTimeSpentLoggingExternal").tsExternalEventsInProgress()) {
            g = f;
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[time-spent] initializing session"
            ])));
            const a = {
                id: Math.floor(Math.random() * _),
                startTimestampMs: t,
                lastActivityTimestampMs: t,
                cumulativeBitsSet: 0,
                sequenceId: -1,
                relativeTimestampMs: 0,
                tsTimestampMs: n,
                unifiedSessionId: r
            };
            f = a;
            y(true);
            return a;
        }
        f.relativeTimestampMs = t - f.startTimestampMs;
        f.tsTimestampMs = n;
        f.unifiedSessionId = r;
        return f;
    }
    function v() {
        b().lastActivityTimestampMs = o("WATimeUtils").unixTimeMs();
        y();
    }
    function S() {
        return o("WAWebABProps").getABPropConfigValue("ts_session_duration_ms");
    }
    function R() {
        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
            "[time-spent] creating time spent array"
        ])));
        return new (r("WAWebWamTimeSpentArray"))({
            getSessionData: function() {
                const e = b();
                return {
                    relativeTimeMs: e.relativeTimestampMs,
                    id: e.id.toString()
                };
            },
            postUpdate: v,
            loggingCallback: function(t) {
                o("WAWebTimeSpentLoggingBitArray").stashAndFlushBitarray(L(t), o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_BITARRAY_EVENT);
            }
        });
    }
    function L(e) {
        let t = b();
        const n = Number(e.sessionId);
        if (t.id !== n) {
            if (g != null && g?.id === n) {
                t = g;
            } else {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[time-spent] expired session data, no session match"
                ])));
                return e;
            }
        }
        t.cumulativeBitsSet += e.sessionCum;
        t.sequenceId++;
        e.sessionSeq = t.sequenceId;
        e.sessionCum = t.cumulativeBitsSet;
        y(true);
        return e;
    }
    l.restoreTimeSpentSession = C;
    l.getOrInitTimeSpentSession = b;
    l.markTimeSpentActivity = v;
    l.createTimeSpentArray = R;
    l.preprocessTsArrayData = L;
}, 98);