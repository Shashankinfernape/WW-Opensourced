__d("WASmaxBizSettingsSetPrivacySettingRPC", [
    "WAComms",
    "WASmaxInBizSettingsSetPrivacySettingResponseError",
    "WASmaxInBizSettingsSetPrivacySettingResponseSuccess",
    "WASmaxOutBizSettingsSetPrivacySettingRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WASmaxOutBizSettingsSetPrivacySettingRequest").makeSetPrivacySettingRequest(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = o("WASmaxInBizSettingsSetPrivacySettingResponseSuccess").parseSetPrivacySettingResponseSuccess(r, n);
            if (a.success) {
                return {
                    name: "SetPrivacySettingResponseSuccess",
                    value: a.value
                };
            }
            const i = o("WASmaxInBizSettingsSetPrivacySettingResponseError").parseSetPrivacySettingResponseError(r, n);
            if (i.success) {
                return {
                    name: "SetPrivacySettingResponseError",
                    value: i.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("SetPrivacySetting", {
                Success: a,
                Error: i
            }));
        });
        return s.apply(this, arguments);
    }
    l.sendSetPrivacySettingRPC = e;
}, 98);