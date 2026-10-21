__d("WASmaxBizSettingsGetPrivacySettingRPC", [
    "WAComms",
    "WASmaxInBizSettingsGetPrivacySettingResponseError",
    "WASmaxInBizSettingsGetPrivacySettingResponseSuccess",
    "WASmaxOutBizSettingsGetPrivacySettingRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WASmaxOutBizSettingsGetPrivacySettingRequest").makeGetPrivacySettingRequest();
            const n = yield o("WAComms").sendSmaxStanza(t, e);
            const r = o("WASmaxInBizSettingsGetPrivacySettingResponseSuccess").parseGetPrivacySettingResponseSuccess(n, t);
            if (r.success) {
                return {
                    name: "GetPrivacySettingResponseSuccess",
                    value: r.value
                };
            }
            const a = o("WASmaxInBizSettingsGetPrivacySettingResponseError").parseGetPrivacySettingResponseError(n, t);
            if (a.success) {
                return {
                    name: "GetPrivacySettingResponseError",
                    value: a.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetPrivacySetting", {
                Success: r,
                Error: a
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendGetPrivacySettingRPC = e;
}, 98);