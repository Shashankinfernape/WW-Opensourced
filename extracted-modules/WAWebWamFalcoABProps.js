__d("WAWebWamFalcoABProps", [
    "MetaConfig",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebNetworkStatus",
    "WAWebUserPrefsGeneral",
    "WAWebWamFalcoModes",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 5000;
    let d = null;
    let m = null;
    let p = null;
    function _(e) {
        const t = new Set;
        for (const n of e.split(",")){
            const r = n.trim();
            if (r !== "") {
                t.add(r);
            }
        }
        return t;
    }
    function f(e) {
        const t = new Set;
        for (const n of _(e)){
            const r = parseInt(n, 10);
            if (!Number.isNaN(r)) {
                t.add(r);
            }
        }
        return t;
    }
    function g() {
        return r("justknobx")._("2716");
    }
    function h() {
        const e = o("WAWebABProps").getABPropConfigValue("wa_web_canonical_wam_falco_buffer_size");
        if (e > 0) {
            return e;
        }
        return 2000;
    }
    function y() {
        const e = o("WAWebABProps").getABPropConfigValue("wa_web_wam_falco_flush_interval_ms");
        if (e > 0) {
            return e;
        }
        return c;
    }
    function C() {
        if (!v() || !g() || !o("WAWebCanonicalGating").isCanonicalEnabled()) {
            return false;
        }
        return !r("WAWebNetworkStatus").online;
    }
    function b() {
        return R() === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING && r("MetaConfig")._("609");
    }
    function v() {
        return o("WAWebABPropsCache").isABPropConfigsReady() && r("justknobx")._("1600") && o("WAWebCanonicalUtils").isCanonicalPresent() && L() !== o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY;
    }
    function S() {
        return o("WAWebABPropsCache").isABPropConfigsReady() && R() === o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY;
    }
    function R() {
        try {
            return I(E());
        } catch (t) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to read wa_web_wam_falco_mode from MetaConfig: ",
                ""
            ])), t);
            return o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY;
        }
    }
    function L() {
        try {
            return I(k());
        } catch (e) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to read wa_web_wam_falco_mode from MetaConfig: ",
                ""
            ])), e);
            return o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY;
        }
    }
    function E() {
        if (o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb()) {
            return r("MetaConfig")._("596", true);
        }
        return r("MetaConfig")._("371", true);
    }
    function k() {
        if (o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb()) {
            return r("MetaConfig")._("597");
        }
        return r("MetaConfig")._("410");
    }
    function I(e) {
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY) {
            return o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_WAM_SAMPLING) {
            return o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_WAM_SAMPLING;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_FALCO_SAMPLING) {
            return o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_FALCO_SAMPLING;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING) {
            return o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY) {
            return o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_SAMPLED) {
            return o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_SAMPLED;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_FULL) {
            return o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_FULL;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_WAM_OR_FALCO) {
            return o("WAWebWamFalcoModes").FALCO_MODE_WAM_OR_FALCO;
        }
        return o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY;
    }
    function T() {
        if (d != null) {
            return d;
        }
        if (!o("WAWebABPropsCache").isABPropConfigsReady()) {
            return new Set;
        }
        try {
            d = f(o("WAWebABProps").getABPropConfigValue("wa_web_wam_falco_shadow_event_ids"));
        } catch (e) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to parse wa_web_wam_falco_shadow_event_ids: ",
                ""
            ])), e);
            d = new Set;
        }
        return d;
    }
    function D() {
        const e = r("MetaConfig")._("632", true);
        const t = m;
        if (t != null && t.raw === e) {
            return t.eventIds;
        }
        const n = f(e);
        m = {
            raw: e,
            eventIds: n
        };
        return n;
    }
    function x(e) {
        return D().has(e);
    }
    function $() {
        const e = r("MetaConfig")._("565", true);
        const t = p;
        if (t != null && t.raw === e) {
            return t.eventNames;
        }
        const n = _(e);
        p = {
            raw: e,
            eventNames: n
        };
        return n;
    }
    l.getCanonicalWamFalcoMaxBufferSize = h;
    l.getWamFalcoFlushIntervalMs = y;
    l.shouldBufferFalcoEvent = C;
    l.shouldUseBanzaiOfflineQueue = b;
    l.isFalcoLoggingEnabled = v;
    l.isWamLoggingDisabled = S;
    l.getWamFalcoMode = R;
    l.getShadowLoggingEventIds = T;
    l.isCriticalEvent = x;
    l.getWamFalcoBlocklistEventNames = $;
}, 98);