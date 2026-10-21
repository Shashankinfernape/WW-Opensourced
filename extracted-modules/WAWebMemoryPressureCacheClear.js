__d("WAWebMemoryPressureCacheClear", [
    "WALogger",
    "WAWebABProps",
    "WAWebGetters",
    "WAWebMemoryPressureCacheRegistry",
    "WAWebUiIdleEventBus"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 0.5;
    const d = 600 * 1000;
    const m = 3;
    const p = 300 * 1000;
    const _ = 3;
    const f = {
        name: "getters",
        unit: "entries",
        release: o("WAWebGetters").clearAllGetterCaches
    };
    let g = 0;
    let h = 0;
    let y = null;
    let C = null;
    function b(t) {
        T(t);
        const n = S(t);
        if (n != null) {
            const r = [].concat(o("WAWebMemoryPressureCacheRegistry").getMemoryPressureCaches(), [
                f
            ]).map(D);
            if (n === "heap_ratio") {
                g++;
            } else {
                h++;
            }
            y = Date.now();
            C = t.usedJsHeapSizeMb;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[memory-pressure] ",
                " released ",
                " at ",
                "/",
                "MB"
            ])), n, x(r), t.usedJsHeapSizeMb, t.jsHeapSizeLimitMb);
        }
    }
    function v() {
        g = 0;
        h = 0;
        y = null;
        C = null;
    }
    function S(e) {
        if (I()) {
            if (R(e)) {
                return "heap_ratio";
            }
            if (L(e)) {
                return "heap_over_mb";
            }
            return null;
        }
        return null;
    }
    function R(e) {
        return g < m && !E(d) && k(e) && o("WAWebABProps").getABPropConfigValue("web_getters_clear_caches_on_memory_pressure");
    }
    function L({ usedJsHeapSizeMb: t }) {
        if (h >= _ || E(p)) {
            return false;
        }
        const n = o("WAWebABProps").getABPropConfigValue("web_getters_clear_caches_on_memory_over_mb");
        return n > 0 && t > n;
    }
    function E(e) {
        const t = y;
        return t != null && Date.now() - t < e;
    }
    function k({ jsHeapSizeLimitMb: t, usedJsHeapSizeMb: n }) {
        return t > 0 && n / t >= c;
    }
    function I() {
        return document.visibilityState === "hidden" || o("WAWebUiIdleEventBus").UiIdleEventBus.uiBusy === 0;
    }
    function T({ usedJsHeapSizeMb: t }) {
        if (C != null) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[memory-pressure] heap ",
                "MB before the last clear, ",
                "MB on the next sample"
            ])), C, t);
            C = null;
        }
    }
    function D({ name: t, release: n, unit: r }) {
        try {
            return {
                name: t,
                unit: r,
                released: n()
            };
        } catch (e) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[memory-pressure] releasing ",
                " failed: ",
                ""
            ])), t, String(e));
            return {
                name: t,
                unit: r,
                released: 0
            };
        }
    }
    function x(e) {
        return e.map(({ name, released: n, unit: r })=>`${name} ${n} ${r}`).join(", ");
    }
    l.maybeClearCachesForMemoryPressure = b;
    l.resetMemoryPressureStateForTesting = v;
}, 98);