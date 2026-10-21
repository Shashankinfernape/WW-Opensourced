__d("WASmaxInAbPropsSamplingConfigMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "prop");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "event_code", 1, void 0);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrIntRange(e, "sampling_weight", -10000, 10000);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                eventCode: n.value,
                samplingWeight: r.value
            });
        }
        return r;
    }
    l.parseSamplingConfigMixin = e;
}, 98);