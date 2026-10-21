__d("WAWebGroupAbPropsParsingJob", [], function(t, n, r, o, a, i) {
    function e(groupJid, t) {
        return t.map(({ configCode, configExpoKey, configValue })=>({
                groupJid,
                configCode: String(configCode),
                configValue,
                configExpoKey: configExpoKey == null ? null : configExpoKey.toString(),
                hasAccessed: false,
                overriddenConfigValue: null
            }));
    }
    i.parseGroupABProps = e;
}, 66);