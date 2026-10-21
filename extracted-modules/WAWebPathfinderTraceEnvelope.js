__d("WAWebPathfinderTraceEnvelope", [
    "WALogger",
    "WAWebABProps",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 3;
    const d = "web";
    const m = "ring_capacity";
    const p = 0;
    function _({ entries: t, headClipped: n, totalRecorded: r }) {
        if (t.length === 0) {
            return null;
        }
        const o = babelHelpers.extends({
            version: c,
            platform: d,
            generated_at_ms: Date.now(),
            interaction_count: r
        }, C(t), {
            head_clipped: n,
            serialization_failures: p,
            interactions: t
        });
        if (n) {
            o.clip_reasons = [
                m
            ];
        }
        return o;
    }
    const f = 100 * 1024;
    function g(e) {
        return new Blob([
            e
        ]).size > f;
    }
    function h(e) {
        return g(JSON.stringify(e));
    }
    function y(t, n) {
        if (!o("WAWebABProps").getABPropConfigValue("bug_reporting_attach_pathfinder_pre_bug_creation")) {
            return null;
        }
        try {
            if (!n()) {
                return null;
            }
            const a = _(t());
            if (a == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Pathfinder snapshot empty, skipping trace attachment"
                ]))).sendLogs("pathfinder-trace-empty");
                return null;
            }
            const i = JSON.stringify(a);
            if (g(i)) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Pathfinder snapshot exceeds ",
                    "B, skipping trace attachment"
                ])), f).sendLogs("pathfinder-trace-too-large");
                return null;
            }
            return i;
        } catch (e) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Pathfinder trace serialization failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("pathfinder-trace-serialization-fail");
            return null;
        }
    }
    function C(e) {
        let t = e[0].timestampMs;
        let n = e[0].timestampMs;
        for (const r of e){
            if (r.timestampMs < t) {
                t = r.timestampMs;
            }
            if (r.timestampMs > n) {
                n = r.timestampMs;
            }
        }
        return {
            oldest_ms: t,
            newest_ms: n
        };
    }
    l.CLIP_REASON_RING_CAPACITY = m;
    l.buildPathfinderTraceEnvelope = _;
    l.MAX_TRACE_BYTES = f;
    l.exceedsJsonByteBudget = g;
    l.exceedsTraceByteBudget = h;
    l.serializePathfinderTraceEnvelope = y;
}, 98);