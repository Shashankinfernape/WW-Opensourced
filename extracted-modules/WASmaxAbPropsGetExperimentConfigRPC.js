__d("WASmaxAbPropsGetExperimentConfigRPC", [
    "WAComms",
    "WASmaxInAbPropsGetExperimentConfigResponseErrorNoRetry",
    "WASmaxInAbPropsGetExperimentConfigResponseErrorRetry",
    "WASmaxInAbPropsGetExperimentConfigResponseSuccess",
    "WASmaxOutAbPropsGetExperimentConfigRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutAbPropsGetExperimentConfigRequest").makeGetExperimentConfigRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInAbPropsGetExperimentConfigResponseSuccess").parseGetExperimentConfigResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "GetExperimentConfigResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInAbPropsGetExperimentConfigResponseErrorNoRetry").parseGetExperimentConfigResponseErrorNoRetry(r, n);
            if (i.success) {
                return {
                    name: "GetExperimentConfigResponseErrorNoRetry",
                    value: i.value
                };
            }
            const l = o("WASmaxInAbPropsGetExperimentConfigResponseErrorRetry").parseGetExperimentConfigResponseErrorRetry(r, n);
            if (l.success) {
                return {
                    name: "GetExperimentConfigResponseErrorRetry",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetExperimentConfig", {
                Success: a,
                ErrorNoRetry: i,
                ErrorRetry: l
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetExperimentConfigRPC = e;
}, 98);