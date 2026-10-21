__d("GHLServerJSParse", [
    "FBLogger",
    "GHLDetectionUtilsPreludeSafe",
    "GHLTypenameRestore",
    "getErrorSafe",
    "json5"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = '"__typename":"AdsSideFeedUnit"';
    const s = '"__typename":"Q4xN7zP9aLbM3vT"';
    const u = "AdsSideFeedUnit";
    const c = "Q4xN7zP9aLbM3vT";
    function d(t, n) {
        if (!n) {
            return t.split(e).join(s);
        }
        let r = t.indexOf(e);
        if (r === -1) {
            return t;
        }
        let o = "";
        let a = 0;
        while(r !== -1){
            o += t.slice(a, r) + s;
            a = r + e.length;
            r = t.indexOf(e, a);
        }
        return o + t.slice(a);
    }
    function m(e) {
        const t = /^\s*\[?\s*\{\s*\"(?:[^\"\\]|\\.)*\"\s*:\s*(?:\"(?:[^\"\\]|\\.)*\"|[[{]|true|false|null|-?[\d.eE+-]+)\s*(?:\"(?:[^\"\\]|\\.)*\"\s*:|[,[{\]}])/.exec(e);
        if (t != null) {
            return `${t[0]}/*x*/${e.slice(t[0].length)}`;
        }
        const n = /^\s*\[?\s*\{\s*\"(?:[^\"\\]|\\.)*\"\s*:/.exec(e);
        if (n != null) {
            return `${n[0]}/*x*/${e.slice(n[0].length)}`;
        }
        const r = /\S/.exec(e);
        if (r != null && (e[r.index] === "{" || e[r.index] === "[")) {
            return `${e.slice(0, r.index + 1)}/*x*/${e.slice(r.index + 1)}`;
        }
        return `/*x*/${e}`;
    }
    function p(e) {
        let t = null;
        const window_Env = window.Env;
        const a = window_Env != null && "v9k2mt7q" in window_Env;
        const i = window_Env != null && "d3hf9km2" in window_Env;
        const l = window_Env != null && "k8pq2mnb" in window_Env;
        const s = window_Env != null && "n5tq2wjb" in window_Env;
        let p = e;
        if (l && p != null) {
            p = d(p, s);
        }
        const _ = a && (o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed() || i && o("GHLDetectionUtilsPreludeSafe").isJSONParseBehaviorallyShimmed());
        const f = window_Env != null && "c6mw9qtk" in window_Env;
        const g = window_Env != null && "j6dw4ztx" in window_Env;
        let h = false;
        if (f && _ && p != null && (!g || o("GHLDetectionUtilsPreludeSafe").isBoxedParseEffective())) {
            try {
                const y = JSON.parse(`{"q7z":${p}}`);
                if (y != null && y.q7z != null) {
                    t = y.q7z;
                    h = true;
                }
            } catch (e) {
                h = false;
            }
        }
        if (!h && _ && window_Env != null && "x8kf2pw6" in window_Env && p != null && (!g || o("GHLDetectionUtilsPreludeSafe").isWrappedParseEffective())) {
            try {
                const C = JSON.parse(`[${p}]`);
                if (Array.isArray(C) && C.length === 1) {
                    t = C[0];
                    h = true;
                }
            } catch (e) {
                h = false;
            }
        }
        if (!h && _) {
            try {
                const b = o("GHLDetectionUtilsPreludeSafe").isStringBehaviorallyShimmed();
                const v = window_Env != null && "r4wt7kmj" in window_Env;
                if (v && b) {
                    o("GHLDetectionUtilsPreludeSafe").restoreNativeString();
                }
                const S = o("GHLDetectionUtilsPreludeSafe").getCleanJSONParse();
                let R = false;
                if (S != null) {
                    try {
                        t = S(p);
                        R = true;
                    } catch (e) {
                        R = false;
                    }
                }
                if (!R) {
                    t = r("json5").fromPiece(m(p));
                }
            } catch (error) {
                r("FBLogger")("ad_blocker_defense_ghost_owl").catching(r("getErrorSafe")(error)).mustfix("Failed to parse ServerJS payload using json5");
                t = JSON.parse(p);
            }
        } else {
            if (!h) {
                t = JSON.parse(p);
            }
        }
        if (l && t != null && p.indexOf(c) !== -1) {
            o("GHLTypenameRestore").restoreTypenameValues(t, c, u);
        }
        return t;
    }
    l.loadBootPayload = p;
}, 98);