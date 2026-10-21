__d("WASmaxInAbPropsExperimentConfigMixin", [
    "WAResultOrError",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "prop");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "config_code", 1, void 0);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "config_value");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "config_expo_key", 0, void 0);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                configCode: n.value,
                configValue: r.value,
                configExpoKey: a.value
            });
        }
        return a;
    }
    l.parseExperimentConfigMixin = e;
}, 98);