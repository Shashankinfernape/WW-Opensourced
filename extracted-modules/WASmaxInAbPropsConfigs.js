__d("WASmaxInAbPropsConfigs", [
    "WAResultOrError",
    "WASmaxInAbPropsExperimentConfigMixin",
    "WASmaxInAbPropsSamplingConfigMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxInAbPropsExperimentConfigMixin").parseExperimentConfigMixin(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "ExperimentConfig",
                value: t.value
            });
        }
        const n = o("WASmaxInAbPropsSamplingConfigMixin").parseSamplingConfigMixin(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "SamplingConfig",
                value: n.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "ExperimentConfig",
            "SamplingConfig"
        ], [
            t,
            n
        ]);
    }
    l.parseConfigs = e;
}, 98);