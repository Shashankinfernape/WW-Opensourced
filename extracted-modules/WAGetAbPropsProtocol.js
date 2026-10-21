__d("WAGetAbPropsProtocol", [
    "WALogger",
    "WAResultOrError",
    "WASmaxAbPropsGetExperimentConfigRPC",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield o("WASmaxAbPropsGetExperimentConfigRPC").sendGetExperimentConfigRPC(t);
            if (n.name === "GetExperimentConfigResponseSuccess") {
                const r = n.value;
                const { erid: a, propsAbKey: i, propsDeltaUpdate: l, propsHash: s, propsProp: u, propsRefresh: d, propsRefreshId: m } = r;
                const p = c(u);
                const { newProps: _, samplingConfigs: f } = p;
                return o("WAResultOrError").makeResult({
                    abKey: i,
                    hash: s,
                    refresh: d,
                    refreshId: m,
                    props: _,
                    samplingConfigs: f,
                    erid: a?.elementValue,
                    isDeltaUpdate: l === "true"
                });
            }
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getAbPropsProtocol failed ",
                ""
            ])), n.value);
            return o("WAResultOrError").makeError();
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        const t = [];
        const n = [];
        e.forEach(({ configs: r })=>{
            if (r.name === "ExperimentConfig") {
                t.push({
                    configCode: r.value.configCode,
                    configValue: r.value.configValue,
                    configExpoKey: r.value.configExpoKey?.toString()
                });
            } else {
                if (r.name === "SamplingConfig") {
                    n.push({
                        eventCode: r.value.eventCode,
                        samplingWeight: r.value.samplingWeight
                    });
                }
            }
        });
        return {
            newProps: t,
            samplingConfigs: n
        };
    }
    l.getAbPropsProtocol = s;
}, 98);