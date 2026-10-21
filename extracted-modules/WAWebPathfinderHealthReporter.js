__d("WAWebPathfinderHealthReporter", [
    "WALogger",
    "WAWebPathfinderFrameworkHealthWamEvent",
    "WAWebWamEnumPathfinderHealthEventType",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = "cap_drops";
    const u = "editing_dedup_drops";
    const c = "capture_volume";
    const d = "ring_buffer_overflows";
    const m = "targetless_touch_drops";
    const p = "unresolvable_custom_event_drops";
    const _ = [
        s,
        u,
        c,
        d,
        m,
        p
    ];
    const f = [
        s,
        p
    ];
    const g = h();
    function h() {
        const e = {};
        for (const t of _){
            e[t] = 0;
        }
        return e;
    }
    function y(e, t) {
        if (!(g[e] == null || !Number.isFinite(t) || t < 0)) {
            g[e] += t;
        }
    }
    function C() {
        const e = [];
        let t = false;
        for (const n of _){
            const r = g[n];
            if (r !== 0 && f.includes(n)) {
                t = true;
            }
            e.push(`${n}: ${String(r)}`);
        }
        if (!t) {
            R();
            return false;
        }
        const o = e.join(", ");
        R();
        b(o);
        return true;
    }
    function b(t) {
        try {
            new (o("WAWebPathfinderFrameworkHealthWamEvent")).PathfinderFrameworkHealthWamEvent({
                pathfinderHealthEventType: o("WAWebWamEnumPathfinderHealthEventType").PATHFINDER_HEALTH_EVENT_TYPE.WEB_SESSION_FOOTPRINT,
                pathfinderHealthEventData: t
            }).commit();
        } catch (t) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] framework-health drain failed"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("pathfinder-framework-health-drain-failed");
        }
    }
    function v() {
        R();
    }
    function S() {
        R();
    }
    function R() {
        for (const e of _){
            g[e] = 0;
        }
    }
    l.COUNTER_CAP_DROPS = s;
    l.COUNTER_EDITING_DEDUP_DROPS = u;
    l.COUNTER_CAPTURE_VOLUME = c;
    l.COUNTER_RING_BUFFER_OVERFLOWS = d;
    l.COUNTER_TARGETLESS_TOUCH_DROPS = m;
    l.COUNTER_UNRESOLVABLE_CUSTOM_EVENT_DROPS = p;
    l.recordPathfinderHealthCounter = y;
    l.drainPathfinderHealthCounters = C;
    l.discardPathfinderHealthCounters = v;
    l.resetPathfinderHealthCountersForTesting = S;
}, 98);