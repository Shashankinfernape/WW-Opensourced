__d("WAWebABPropsCache", [
    "WALogger",
    "WAResolvable",
    "WAWebABProps",
    "WAWebABPropsConfigs",
    "WAWebABPropsGlobals",
    "WAWebABPropsParseConfigValue",
    "WAWebApiAbPropConfig",
    "WAWebBackendWorkerInitState",
    "WAWebGroupABPropsCache",
    "WAWebRuntimeEnvironmentUtils",
    "err",
    "getErrorSafe",
    "gkx",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    let c;
    let d;
    let m = null;
    function p() {
        const e = window.location.search;
        if (m == null || m.search !== e) {
            const t = new Map;
            new URLSearchParams(e).forEach((e, n)=>{
                if (!t.has(n)) {
                    t.set(n, e);
                }
            });
            m = {
                search: e,
                params: t
            };
        }
        return m.params;
    }
    const _ = 10;
    const f = new Map;
    function g() {
        const t = r("err")("");
        return t.stack ?? "";
    }
    const h = new Map;
    let y = new (o("WAResolvable")).Resolvable;
    let C = null;
    let b;
    function v(e) {
        if (b == null) {
            b = {};
            Object.keys(o("WAWebABPropsConfigs").ABPropConfigs).forEach((e)=>{
                const t = o("WAWebABPropsConfigs").ABPropConfigs[e];
                const n = t[0];
                b[n] = e;
            });
            Object.freeze(b);
        }
        return b[e];
    }
    function S(e) {
        C = e;
    }
    function R(e, t) {
        const n = o("WAWebABPropsConfigs").ABPropConfigs[e];
        const r = n[2];
        const a = n[3];
        if (t) {
            return a;
        }
        return r;
    }
    function L() {
        o("WAWebABProps").setGetABPropConfigValueImpl(T);
        o("WAWebGroupABPropsCache").initializeGroupABPropsCache();
    }
    function E() {
        if (r("gkx")("16539") && !o("WAWebRuntimeEnvironmentUtils").isWorker()) {
            return p();
        }
        return null;
    }
    function k(e, t) {
        if (t == null || t === "") {
            return null;
        }
        const n = o("WAWebABPropsConfigs").ABPropConfigs[e];
        const r = n[1];
        const a = n[2];
        const i = n[3];
        return o("WAWebABPropsParseConfigValue").parseConfigValue(t, r, a);
    }
    function I(e) {
        const t = E();
        if (!(t == null || t.size === 0)) {
            Object.keys(o("WAWebABPropsConfigs").ABPropConfigs).forEach((n)=>{
                const r = k(n, t.get(n));
                if (r != null) {
                    e[String(o("WAWebABPropsConfigs").ABPropConfigs[n][0])] = r;
                }
            });
        }
    }
    function T(e) {
        const n = k(e, E()?.get(e));
        if (n != null) {
            return n;
        }
        const r = o("WAWebABPropsConfigs").ABPropConfigs[e];
        const a = r[0];
        const i = r[2];
        const l = r[3];
        if (!y.resolveWasCalled()) {
            if (!o("WAWebABProps").usedBeforeInitializationConfigs.includes(e)) {
                const m = f.get(e) ?? 0;
                if (m < _) {
                    f.set(e, m + 1);
                    if (m === 0) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[abprops] config accessed before init: ",
                            " stack: ",
                            ""
                        ])), e, g());
                    } else {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[abprops] config accessed before init: ",
                            ""
                        ])), e);
                    }
                }
            }
            return i;
        }
        return $(a);
    }
    function D(e) {
        return e == null && r("justknobx")._("6581");
    }
    function x(e) {
        if (h.get(e) && !o("WAWebABPropsGlobals").accessedConfigs.has(e)) {
            const n = h.get(e)?.configExpoKey;
            if (D(n)) {
                return;
            }
            if (n != null && !o("WAWebABPropsGlobals").exposureKeys.has(n)) {
                o("WAWebABPropsGlobals").exposureKeys.add(n);
                o("WAWebABPropsGlobals").updateGlobalExpoKey();
            }
            o("WAWebABPropsGlobals").accessedConfigs.add(e);
            self.setTimeout(function() {
                return o("WAWebApiAbPropConfig").setConfigAccessed(e);
            }, 0);
        }
    }
    function $(e) {
        x(e);
        const t = h.get(e);
        if (r("gkx")("16539") && t?.overriddenConfigValue != null) {
            return t.overriddenConfigValue;
        }
        return t?.configValue;
    }
    function P(e) {
        const n = k(e, E()?.get(e));
        if (n != null) {
            return {
                value: n,
                source: "url_override"
            };
        }
        const a = o("WAWebABPropsConfigs").ABPropConfigs[e];
        const i = a[0];
        const l = a[2];
        const s = a[3];
        const u = y.resolveWasCalled() ? h.get(i) : null;
        if (r("gkx")("16539") && u?.overriddenConfigValue != null) {
            return {
                value: u.overriddenConfigValue,
                source: "local_override"
            };
        }
        if (u?.configValue != null) {
            return {
                value: u.configValue,
                source: "server"
            };
        }
        return {
            value: l,
            source: "default"
        };
    }
    function N(e) {
        const n = o("WAWebABPropsConfigs").ABPropConfigs[e];
        const r = n[0];
        if (o("WAWebABPropsGlobals").accessedConfigs.has(r)) {
            return h.get(r)?.configExpoKey;
        }
        return null;
    }
    function M() {
        return Array.from(h.values());
    }
    function w() {
        return h;
    }
    const A = 256 * 1024;
    function F(e, t, n) {
        const r = v(e);
        if (r == null) {
            return false;
        }
        return t === R(r, n);
    }
    function O(e, t) {
        const n = {};
        Object.keys(e).forEach((r)=>{
            const o = e[r];
            if (!F(Number(r), o, t)) {
                n[r] = o;
            }
        });
        return n;
    }
    function B() {
        try {
            const e = C;
            if (!r("justknobx")._("6120") || !U() || e == null || h.size === 0) {
                return null;
            }
            const t = r("gkx")("16539");
            const n = {};
            h.forEach((e, r)=>{
                const o = t && e.overriddenConfigValue != null ? e.overriddenConfigValue : e.configValue;
                if (o != null) {
                    n[String(r)] = o;
                }
            });
            I(n);
            const a = O(n, e);
            if (Object.keys(a).length === 0) {
                return null;
            }
            const i = JSON.stringify(a);
            if (new Blob([
                i
            ]).size > A) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "ABProps exceed ",
                    "B, skipping bug report attachment"
                ])), A).sendLogs("abprops-bug-report-too-large");
                return null;
            }
            return i;
        } catch (e) {
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "ABProps bug report serialization failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("abprops-bug-report-serialization-fail");
            return null;
        }
    }
    function W(e) {
        let t = false;
        e.forEach((e)=>{
            h.set(e.configCode, e);
            if (e.hasAccessed === true && !D(e.configExpoKey)) {
                o("WAWebABPropsGlobals").accessedConfigs.add(e.configCode);
                if (e.configExpoKey != null) {
                    o("WAWebABPropsGlobals").exposureKeys.add(e.configExpoKey);
                    t = true;
                }
            }
        });
        if (t) {
            o("WAWebABPropsGlobals").updateGlobalExpoKey();
        }
        y.resolve();
        if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
            const n = w();
            const r = Array.from(n.values()).map((e)=>({
                    configCode: e.configCode,
                    configValue: e.configValue,
                    awaitingExpoKey: D(e.configExpoKey)
                }));
            o("WAWebBackendWorkerInitState").recordInitAbProps({
                configs: r,
                urlSearch: window.location.search
            });
        }
    }
    function q() {
        return y.promise;
    }
    function U() {
        return y.resolveWasCalled();
    }
    function V() {
        h.clear();
        o("WAWebABPropsGlobals").accessedConfigs.clear();
        o("WAWebABPropsGlobals").exposureKeys.clear();
        y = new (o("WAResolvable")).Resolvable;
        C = null;
    }
    l.getABPropConfigNameFromCode = v;
    l.recordABPropsServedDevDefaults = S;
    l.initializeABPropsCache = L;
    l.saveExposure = x;
    l.peekABPropConfigValue = P;
    l.getABPropExpoKey = N;
    l.getAllABPropConfigs = M;
    l.getAllABPropsMap = w;
    l.MAX_BUG_REPORT_ABPROPS_BYTES = A;
    l.getABPropsJsonForBugReport = B;
    l.bulkCreateOrReplaceABPropConfigs = W;
    l.waitForABPropConfigsReady = q;
    l.isABPropConfigsReady = U;
    l.clearABPropConfigs = V;
}, 98);