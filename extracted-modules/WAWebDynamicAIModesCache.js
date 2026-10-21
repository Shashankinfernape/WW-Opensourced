__d("WAWebDynamicAIModesCache", [
    "WAWebABProps",
    "WAWebTimedCache",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        modeId: 0,
        type: "FAST",
        isExperimental: false,
        title: "Fast",
        subtitle: "Answers right away"
    };
    function s(e) {
        const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_DYNAMIC_AI_MODES);
        return o("WAWebTimedCache").getTimedCacheItemValue(t, e ?? o("WAWebABProps").getABPropConfigValue("ai_dynamic_mode_selector_ttl_seconds") * 1000);
    }
    function u() {
        const e = s(Number.MAX_SAFE_INTEGER);
        e == null;
        return e;
    }
    function c(e) {
        const t = o("WAWebTimedCache").createTimedCacheItem(e);
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_DYNAMIC_AI_MODES, t);
    }
    function d() {
        return e;
    }
    function m(e) {
        const n = u();
        return n?.find(function(t) {
            return t.modeId === e;
        }) ?? null;
    }
    l.getCachedDynamicAIModes = s;
    l.getStaleCachedDynamicAIModes = u;
    l.setCachedDynamicAIModes = c;
    l.getDefaultDynamicAIMode = d;
    l.getCachedDynamicAIModeById = m;
}, 98);