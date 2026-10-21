__d("WAWebApiGroupAbPropConfig", [
    "WALogger",
    "WAWebGroupABPropsCache",
    "WAWebGroupABPropsGlobals",
    "WAWebModelStorageUtils",
    "WAWebSchemaGroupAbPropConfig",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebSchemaGroupAbPropConfig").getGroupAbpropConfigsTable().all();
        });
        return u.apply(this, arguments);
    }
    function c(t, r) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            "abpropGroupConfigs"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const a = yield n.equals([
                    "groupJid"
                ], [
                    t
                ]);
                const i = new Map;
                a.forEach((e)=>{
                    if (e.configExpoKey != null || e.overriddenConfigValue != null) {
                        i.set(e.configCode, {
                            groupJid: e.groupJid,
                            configCode: e.configCode,
                            configValue: e.configValue,
                            configExpoKey: e.configExpoKey,
                            hasAccessed: e.hasAccessed,
                            overriddenConfigValue: e.overriddenConfigValue
                        });
                    }
                });
                let l = false;
                const s = r.map((e)=>{
                    let n = false;
                    const r = i.get(e.configCode);
                    if (r) {
                        const a = r.configExpoKey;
                        if (a != null && e.configExpoKey !== a) {
                            const s = o("WAWebGroupABPropsGlobals").groupExposureKeys.get(t);
                            if (s != null) {
                                s.delete(a);
                                l = true;
                            }
                            const u = o("WAWebGroupABPropsCache").groupAccessedConfigs.get(t);
                            if (u != null) {
                                u.delete(Number(e.configCode));
                            }
                        } else {
                            if (a != null) {
                                n = r.hasAccessed;
                            }
                        }
                    }
                    return babelHelpers.extends({}, e, {
                        hasAccessed: n,
                        overriddenConfigValue: r?.overriddenConfigValue
                    });
                });
                if (l) {
                    o("WAWebGroupABPropsGlobals").updateGroupExpoKey(t);
                }
                yield n.bulkRemoveByIndex([
                    "groupJid"
                ], [
                    t
                ]);
                yield n.bulkCreate(s);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })()).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "update GroupABProps config table failed"
            ]))).verbose().sendLogs("update GroupABProps config table failed when syncing GroupABProps");
            throw t;
        });
    }
    l.getAllGroupABPropConfigs = s;
    l.updateGroupABPropConfigs = c;
}, 98);