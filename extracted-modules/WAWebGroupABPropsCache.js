__d("WAWebGroupABPropsCache", [
    "WALogger",
    "WAResolvable",
    "WAWebGroupABPropsConfigs",
    "WAWebGroupABPropsGlobals",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new Map;
    const u = new Map;
    let c = new (o("WAResolvable")).Resolvable;
    let d = null;
    function m() {
        d = f;
    }
    function p() {
        return d;
    }
    function _(e, t) {
        const r = s.get(e);
        if (r != null) {
            let a = u.get(e);
            if (a == null) {
                a = new Set;
                u.set(e, a);
            }
            if (!a.has(t)) {
                const i = r.get(t)?.configExpoKey;
                if (i != null) {
                    let l = o("WAWebGroupABPropsGlobals").groupExposureKeys.get(e);
                    if (l == null) {
                        l = new Set;
                        o("WAWebGroupABPropsGlobals").groupExposureKeys.set(e, l);
                    }
                    if (!l.has(i)) {
                        l.add(i);
                        o("WAWebGroupABPropsGlobals").updateGroupExpoKey(e);
                    }
                }
                a.add(t);
            }
        }
    }
    function f(t, n) {
        const a = o("WAWebGroupABPropsConfigs").ABPropConfigs[n];
        const i = a[0];
        if (!c.resolveWasCalled()) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-abprops] access before init: ",
                ""
            ])), n);
            return;
        }
        const l = s.get(t);
        const u = l?.get(i);
        if (u != null) {
            _(t, i);
            if (r("gkx")("16539") && u.overriddenConfigValue != null) {
                return u.overriddenConfigValue;
            }
            return u.configValue;
        }
    }
    function g(e, t) {
        let n = s.get(e);
        if (n == null) {
            n = new Map;
            s.set(e, n);
        }
        let r = false;
        for (const a of t){
            n.set(a.configCode, a);
            if (a.hasAccessed === true) {
                let i = u.get(e);
                if (i == null) {
                    i = new Set;
                    u.set(e, i);
                }
                i.add(a.configCode);
                const l = a.configExpoKey;
                if (l != null) {
                    let d = o("WAWebGroupABPropsGlobals").groupExposureKeys.get(e);
                    if (d == null) {
                        d = new Set;
                        o("WAWebGroupABPropsGlobals").groupExposureKeys.set(e, d);
                    }
                    d.add(l);
                    r = true;
                }
            }
        }
        if (r) {
            o("WAWebGroupABPropsGlobals").updateGroupExpoKey(e);
        }
        c.resolve();
    }
    function h(e) {
        const t = s.get(e);
        if (t == null) {
            return [];
        }
        return Array.from(t.values());
    }
    function y() {
        s.clear();
        u.clear();
        o("WAWebGroupABPropsGlobals").groupExposureKeys.clear();
        c = new (o("WAResolvable")).Resolvable;
    }
    l.groupAccessedConfigs = u;
    l.initializeGroupABPropsCache = m;
    l.getGetGroupABPropConfigValueImpl = p;
    l.bulkCreateOrReplaceGroupABPropConfigs = g;
    l.getAllGroupABPropConfigsForGroup = h;
    l.clearGroupABPropConfigs = y;
}, 98);