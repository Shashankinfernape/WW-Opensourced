__d("WAWebGroupABPropsUpdateFromStorage", [
    "WALogger",
    "WAWebABPropsParseConfigValue",
    "WAWebApiGroupAbPropConfig",
    "WAWebGroupABPropsCache",
    "WAWebGroupABPropsConfigs",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        for (const t of Object.keys(o("WAWebGroupABPropsConfigs").ABPropConfigs)){
            if (o("WAWebGroupABPropsConfigs").ABPropConfigs[t][0] === e) {
                return t;
            }
        }
        return null;
    }
    function u(e) {
        const t = Number(e.configCode);
        const n = s(t);
        if (n == null) {
            return null;
        }
        const r = o("WAWebGroupABPropsConfigs").ABPropConfigs[n];
        const a = r[1];
        const i = r[2];
        const l = r[3];
        const u = i;
        const c = o("WAWebABPropsParseConfigValue").parseConfigValue(e.configValue, a, u);
        const d = e.overriddenConfigValue != null ? o("WAWebABPropsParseConfigValue").parseConfigValue(e.overriddenConfigValue, a, u) : null;
        return {
            configCode: t,
            configValue: c,
            configExpoKey: e.configExpoKey,
            hasAccessed: e.hasAccessed,
            overriddenConfigValue: d
        };
    }
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = yield o("WAWebApiGroupAbPropConfig").getAllGroupABPropConfigs();
                const n = new Map;
                for (const r of t){
                    const a = u(r);
                    if (a != null) {
                        let i = n.get(r.groupJid);
                        if (i == null) {
                            i = [];
                            n.set(r.groupJid, i);
                        }
                        i.push(a);
                    }
                }
                for (const [s, c] of n){
                    o("WAWebGroupABPropsCache").bulkCreateOrReplaceGroupABPropConfigs(s, c);
                }
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-abprops] cache update from storage failed: ",
                    ""
                ])), t).verbose().sendLogs("[group-abprops] Failed to update group ABProps cache from storage");
            }
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        const n = [];
        for (const r of t){
            const a = u(r);
            if (a != null) {
                n.push(a);
            }
        }
        o("WAWebGroupABPropsCache").bulkCreateOrReplaceGroupABPropConfigs(e, n);
    }
    l.updateGroupABPropsFromStorage = c;
    l.updateSingleGroupABPropsCache = m;
}, 98);