__d("WAWebABPropsUpdateFromStorage", [
    "WALogger",
    "WAWebABPropsCache",
    "WAWebABPropsConfigs",
    "WAWebABPropsGlobals",
    "WAWebABPropsParseConfigValue",
    "WAWebApiAbPropConfig",
    "WAWebGroupABPropsUpdateFromStorage",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = false;
                let n = t;
                if (r("gkx")("16539")) {
                    const a = yield o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb();
                    if (r("gkx")("26259") && a) {
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[abprops] intern beta joined, using DEBUG defaults"
                        ])));
                        n = true;
                    } else if (t && a) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[abprops] dev beta joined, using NON-DEBUG defaults"
                        ])));
                        n = false;
                    }
                }
                o("WAWebABPropsCache").recordABPropsServedDevDefaults(n);
                const i = yield o("WAWebApiAbPropConfig").getABPropConfigs();
                const l = [];
                let d = 0;
                const m = r("compactMap")(i, function(e) {
                    const t = o("WAWebABPropsCache").getABPropConfigNameFromCode(Number(e.configCode));
                    if (t == null) {
                        d++;
                        if (l.length < 3) {
                            l.push(e.configCode);
                        }
                    } else {
                        const a = o("WAWebABPropsConfigs").ABPropConfigs[t];
                        const i = a[0];
                        const s = a[1];
                        const u = a[2];
                        const c = a[3];
                        const m = n ? c : u;
                        const p = o("WAWebABPropsParseConfigValue").parseConfigValue(e.configValue, s, m);
                        let _;
                        if (r("gkx")("16539") && e.overriddenConfigValue != null) {
                            _ = o("WAWebABPropsParseConfigValue").parseConfigValue(e.overriddenConfigValue, s, m);
                        }
                        return {
                            configCode: i,
                            configValue: p,
                            configExpoKey: e.configExpoKey,
                            hasAccessed: e.hasAccessed,
                            overriddenConfigValue: _
                        };
                    }
                });
                if (d > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[abprops] ",
                        " ABProps in storage unavailable => ",
                        ""
                    ])), d, l);
                }
                o("WAWebABPropsCache").bulkCreateOrReplaceABPropConfigs(m);
                o("WAWebABPropsGlobals").updateGlobalExpoKey();
                o("WAWebABPropsGlobals").updateGlobalABKey();
                yield o("WAWebGroupABPropsUpdateFromStorage").updateGroupABPropsFromStorage();
            } catch (e) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[abprops] ABProps cache update failed"
                ]))).catching(r("getErrorSafe")(e)).verbose().sendLogs(`[abprops] Failed to update ABProps configs cache from storage: ${String(e)}`);
            }
        });
        return m.apply(this, arguments);
    }
    l.updateABPropsFromStorage = d;
}, 98);