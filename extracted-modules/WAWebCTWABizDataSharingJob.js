__d("WAWebCTWABizDataSharingJob", [
    "WALogger",
    "WASmaxBizSettingsGetPrivacySettingRPC",
    "WASmaxBizSettingsSetPrivacySettingRPC",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WASmaxBizSettingsGetPrivacySettingRPC").sendGetPrivacySettingRPC();
            e: {
                const n = t;
                if ((typeof n === "object" && n !== null || typeof n === "function") && n.name === "GetPrivacySettingResponseError" && "value" in n) {
                    const r = n.value;
                    const a = r.errorPrivacySettingErrors.value;
                    const { code, text } = a;
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[ctwa] GetPrivacySettingResponseError: fetch failed"
                    ])));
                    return null;
                    break e;
                }
                if ((typeof n === "object" && n !== null || typeof n === "function") && n.name === "GetPrivacySettingResponseSuccess" && "value" in n) {
                    const s = n.value;
                    const u = s.privacySmbDataSharingSettingMixin;
                    return {
                        value: u.value,
                        version: u.version
                    };
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
            }
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(anyValue, anyVersion) {
            const smbDataSharingSettingMixinArgs = anyVersion != null ? {
                anyValue,
                anyVersion
            } : {
                anyValue
            };
            const r = {
                smbDataSharingSettingMixinArgs
            };
            const a = yield o("WASmaxBizSettingsSetPrivacySettingRPC").sendSetPrivacySettingRPC(r);
            switch(a.name){
                case "SetPrivacySettingResponseError":
                    {
                        const i = a.value.errorPrivacySettingErrors.value;
                        const { code, text } = i;
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[ctwa] SetPrivacySettingResponseError: set failed"
                        ])));
                        return null;
                    }
                default:
                    {
                        a.name;
                        const d = a.value.privacySmbDataSharingSettingMixin;
                        if (d == null) {
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[ctwa] SetPrivacySettingResponseError: null value"
                            ])));
                            return null;
                        }
                        return {
                            value: d.value,
                            version: d.version
                        };
                    }
            }
        });
        return p.apply(this, arguments);
    }
    l.getCtwaBizDataSharingSettingJob = c;
    l.setCtwaBizDataSharingSettingJob = m;
}, 98);