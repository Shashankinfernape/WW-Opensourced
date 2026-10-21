__d("WAGetGroupAbPropsProtocol", [
    "WALogger",
    "WAResultOrError",
    "WASmaxAbPropsGetGroupExperimentConfigRPC",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield o("WASmaxAbPropsGetGroupExperimentConfigRPC").sendGetGroupExperimentConfigRPC(t);
            if (n.name === "GetGroupExperimentConfigResponseSuccess") {
                const r = n.value;
                const { propsHash, propsProp, propsRefresh, propsRefreshId } = r;
                const props = c(propsProp);
                return o("WAResultOrError").makeResult({
                    groupJid: t.propsGroup,
                    hash: propsHash,
                    refresh: propsRefresh,
                    refreshId: propsRefreshId,
                    props
                });
            }
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getGroupAbPropsProtocol failed ",
                ""
            ])), n.value);
            return o("WAResultOrError").makeError();
        });
        return u.apply(this, arguments);
    }
    function c(propsProp) {
        const t = [];
        propsProp.forEach(({ experimentOrSamplingConfigMixinGroup })=>{
            if (experimentOrSamplingConfigMixinGroup.name === "ExperimentConfig") {
                t.push({
                    configCode: experimentOrSamplingConfigMixinGroup.value.configCode,
                    configValue: experimentOrSamplingConfigMixinGroup.value.configValue,
                    configExpoKey: experimentOrSamplingConfigMixinGroup.value.configExpoKey?.toString()
                });
            }
        });
        return t;
    }
    l.getGroupAbPropsProtocol = s;
}, 98);