__d("WASmaxAbPropsGetGroupExperimentConfigRPC", [
    "WAComms",
    "WASmaxInAbPropsGetGroupExperimentConfigResponseErrorNoRetry",
    "WASmaxInAbPropsGetGroupExperimentConfigResponseErrorRetry",
    "WASmaxInAbPropsGetGroupExperimentConfigResponseSuccess",
    "WASmaxOutAbPropsGetGroupExperimentConfigRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutAbPropsGetGroupExperimentConfigRequest").makeGetGroupExperimentConfigRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInAbPropsGetGroupExperimentConfigResponseSuccess").parseGetGroupExperimentConfigResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "GetGroupExperimentConfigResponseSuccess",
                    value: a.value
                };
            }
            const ErrorNoRetry = o("WASmaxInAbPropsGetGroupExperimentConfigResponseErrorNoRetry").parseGetGroupExperimentConfigResponseErrorNoRetry(r, n);
            if (ErrorNoRetry.success) {
                return {
                    name: "GetGroupExperimentConfigResponseErrorNoRetry",
                    value: ErrorNoRetry.value
                };
            }
            const ErrorRetry = o("WASmaxInAbPropsGetGroupExperimentConfigResponseErrorRetry").parseGetGroupExperimentConfigResponseErrorRetry(r, n);
            if (ErrorRetry.success) {
                return {
                    name: "GetGroupExperimentConfigResponseErrorRetry",
                    value: ErrorRetry.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetGroupExperimentConfig", {
                Success: a,
                ErrorNoRetry,
                ErrorRetry
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetGroupExperimentConfigRPC = e;
}, 98);