__d("WAWebPrivacyModeContext", [
    "WAWebCmd",
    "WAWebPrivacyModeBlurConfig",
    "WAWebUserPrefsPrivacyMode",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { createContext: c, useCallback: d, useContext: m, useEffect: p, useMemo: _, useState: f } = u;
    const g = {
        isPrivacyModeEnabled: false,
        setPrivacyModeEnabled: function() {},
        getBlurForCategory: function(t) {
            return o("WAWebPrivacyModeBlurConfig").blurValueForPreset(o("WAWebPrivacyModeBlurConfig").defaultPresetForCategory(t));
        },
        updateBlurPreset: function() {},
        resetBlurPresets: function() {}
    };
    const h = c(g);
    function y(e) {
        const t = o("react-compiler-runtime").c(13);
        const n = e.children;
        const r = f(o("WAWebUserPrefsPrivacyMode").isPrivacyScreenEnabled);
        const a = r[0];
        const i = r[1];
        const l = f(b);
        const u = l[0];
        const c = l[1];
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = function(t) {
                i(t);
                o("WAWebUserPrefsPrivacyMode").setPrivacyScreenEnabled(t);
            };
            t[0] = d;
        } else {
            d = t[0];
        }
        const m = d;
        let _;
        let g;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            _ = function() {
                const e = function() {
                    i(C);
                };
                o("WAWebCmd").Cmd.on("toggle_privacy_mode", e);
                return function() {
                    o("WAWebCmd").Cmd.off("toggle_privacy_mode", e);
                };
            };
            g = [];
            t[1] = _;
            t[2] = g;
        } else {
            _ = t[1];
            g = t[2];
        }
        p(_, g);
        let y;
        if (t[3] !== u) {
            y = function(t) {
                const n = u.get(t) ?? o("WAWebPrivacyModeBlurConfig").defaultPresetForCategory(t);
                return o("WAWebPrivacyModeBlurConfig").blurValueForPreset(n);
            };
            t[3] = u;
            t[4] = y;
        } else {
            y = t[4];
        }
        const v = y;
        let S;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            S = function(t, n) {
                o("WAWebUserPrefsPrivacyMode").setBlurPreset(t, n);
                c(function(e) {
                    const r = new Map(e);
                    r.set(t, n);
                    return r;
                });
            };
            t[5] = S;
        } else {
            S = t[5];
        }
        const R = S;
        let L;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            L = function() {
                const e = new Map;
                for (const t of o("WAWebPrivacyModeBlurConfig").BlurCategory.members()){
                    const n = o("WAWebPrivacyModeBlurConfig").defaultPresetForCategory(t);
                    o("WAWebUserPrefsPrivacyMode").setBlurPreset(t, n);
                    e.set(t, n);
                }
                c(e);
            };
            t[6] = L;
        } else {
            L = t[6];
        }
        const E = L;
        let k;
        if (t[7] !== v || t[8] !== a) {
            k = {
                isPrivacyModeEnabled: a,
                setPrivacyModeEnabled: m,
                getBlurForCategory: v,
                updateBlurPreset: R,
                resetBlurPresets: E
            };
            t[7] = v;
            t[8] = a;
            t[9] = k;
        } else {
            k = t[9];
        }
        const I = k;
        let T;
        if (t[10] !== n || t[11] !== I) {
            T = <h.Provider value={I}>{n}</h.Provider>;
            t[10] = n;
            t[11] = I;
            t[12] = T;
        } else {
            T = t[12];
        }
        return T;
    }
    function C(e) {
        const t = !e;
        o("WAWebUserPrefsPrivacyMode").setPrivacyScreenEnabled(t);
        return t;
    }
    function b() {
        const e = new Map;
        for (const t of o("WAWebPrivacyModeBlurConfig").BlurCategory.members()){
            e.set(t, o("WAWebUserPrefsPrivacyMode").getBlurPreset(t));
        }
        return e;
    }
    function v() {
        return m(h);
    }
    l.WAWebPrivacyModeProvider = y;
    l.usePrivacyMode = v;
}, 98);