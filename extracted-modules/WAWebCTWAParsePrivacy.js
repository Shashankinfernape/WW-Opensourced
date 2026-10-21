__d("WAWebCTWAParsePrivacy", [
    "WALogger",
    "WASmaxBizSettingsSyncPrivacySettingRPC"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        try {
            const r = o("WASmaxBizSettingsSyncPrivacySettingRPC").receiveSyncPrivacySettingRPC(t.node());
            const a = r.parsedRequest;
            const i = a.privacySmbDataSharingSettingMixin;
            const smbDataSharingSetting = i?.value;
            if (smbDataSharingSetting == null) {
                return null;
            }
            return {
                smbDataSharingSetting,
                smbDataSharingVersion: i?.version ?? null
            };
        } catch (t) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "parseCTWAPrivacy: Could not parse RPC response"
            ])));
            return null;
        }
    }
    l.parseCTWAPrivacy = s;
}, 98);