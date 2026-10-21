__d("WAWebApiAbPropConfig", [
    "Promise",
    "WALogger",
    "WAWebABPropsConfigs",
    "WAWebABPropsGlobals",
    "WAWebABPropsParseConfigValue",
    "WAWebModelStorageInitialize",
    "WAWebModelStorageUtils",
    "WAWebSchemaAbPropConfig",
    "asyncToGeneratorRuntime",
    "cr:21223",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c() {
        return o("WAWebModelStorageInitialize").initializeWithoutGKs().then(()=>o("WAWebSchemaAbPropConfig").getAbpropConfigsTable().all().then((e)=>e));
    }
    function d(t) {
        const a = o("WAWebABPropsConfigs").ABPropConfigs[t];
        if (a == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "invalid ABProps config name"
            ]))).verbose().sendLogs(`invalid ABProps config name: ${t}`);
            return (u || (u = n("Promise"))).reject(r("err")("invalid ABProps config name"));
        }
        const i = a[0];
        const l = a[1];
        const s = a[2];
        const c = a[3];
        const d = s;
        return o("WAWebModelStorageInitialize").initializeWithoutGKs().then(()=>o("WAWebSchemaAbPropConfig").getAbpropConfigsTable().get(String(i)).then((e)=>{
                const t = e ? o("WAWebABPropsParseConfigValue").parseConfigValue(e.configValue, l, d) : d;
                return t;
            }));
    }
    function m(e, t) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "abpropConfigs"
        ], (()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*([r]) {
                const a = yield r.all();
                const i = new Map;
                a.forEach((e)=>{
                    if (e.configExpoKey != null || e.overriddenConfigValue != null) {
                        i.set(e.configCode, {
                            configCode: e.configCode,
                            configValue: e.configValue,
                            configExpoKey: e.configExpoKey,
                            hasAccessed: e.hasAccessed,
                            overriddenConfigValue: e.overriddenConfigValue
                        });
                    }
                });
                let l = false;
                const s = [];
                e.forEach((e, t)=>{
                    let n = false;
                    const r = i.get(String(t));
                    if (r) {
                        const a = r.configExpoKey;
                        if (a != null && e.configExpoKey !== a) {
                            o("WAWebABPropsGlobals").exposureKeys.delete(a);
                            l = true;
                            o("WAWebABPropsGlobals").accessedConfigs.delete(t);
                        } else if (a != null) {
                            n = r.hasAccessed;
                        }
                    }
                    s.push({
                        configCode: String(t),
                        configValue: e.configValue,
                        configExpoKey: e.configExpoKey,
                        hasAccessed: n,
                        overriddenConfigValue: r?.overriddenConfigValue
                    });
                });
                if (l) {
                    o("WAWebABPropsGlobals").updateGlobalExpoKey();
                }
                if (t) {
                    yield r.bulkCreateOrReplace(s);
                } else {
                    yield r.clear();
                    yield r.bulkCreate(s);
                }
                return a;
            });
            return function(e) {
                return r.apply(this, arguments);
            };
        })()).then((()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(r) {
                if (n("cr:21223") && !t) {
                    try {
                        yield n("cr:21223") == null ? void 0 : n("cr:21223").processAbpropChangelog(r, e);
                    } catch (e) {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to record ABProp diff ",
                            ""
                        ])), e);
                    }
                }
            });
            return function(e) {
                return r.apply(this, arguments);
            };
        })());
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaAbPropConfig").getAbpropConfigsTable().get(String(e));
            if (!(t == null || t?.hasAccessed === true)) {
                yield o("WAWebSchemaAbPropConfig").getAbpropConfigsTable().merge(String(e), {
                    hasAccessed: true
                });
            }
        });
        return _.apply(this, arguments);
    }
    l.getABPropConfigs = c;
    l.parseConfigValue = o("WAWebABPropsParseConfigValue").parseConfigValue;
    l.getConfigValue = d;
    l.updateABPropConfigs = m;
    l.setConfigAccessed = p;
}, 98);