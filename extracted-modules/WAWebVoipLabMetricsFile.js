__d("WAWebVoipLabMetricsFile", [
    "WACamelCase",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebVoipPersistentFS",
    "WAWebWamEnumFieldStatsRowType",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = "/wa_voip_storage/call_metrics.json";
    const _ = "/wa_voip_storage/call_metrics_js_patch.json";
    const patchVersion = 1;
    const g = "prod-lab";
    const h = "prod-labvideo";
    const y = 44;
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (v()) {
                try {
                    const t = yield o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
                    const n = R(t);
                    if (n == null) {
                        return;
                    }
                    const a = n.split("\n");
                    const patchedRowIndex = E(a);
                    if (patchedRowIndex < 0) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [LabMetrics] no self row in ",
                            ", nothing patched"
                        ])), p);
                        return;
                    }
                    const l = k(a[patchedRowIndex]);
                    const s = I(l);
                    if (s == null) {
                        return;
                    }
                    const g = D(s, e);
                    const { filled, patched } = g;
                    if (patched.length === 0) {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [LabMetrics] no null fields matched, ",
                            " left untouched"
                        ])), p);
                        return;
                    }
                    const C = babelHelpers.extends({}, s, filled);
                    const b = Array.isArray(l) ? [
                        C
                    ].concat(l.slice(1)) : C;
                    const S = new TextEncoder;
                    a[patchedRowIndex] = JSON.stringify(b);
                    const L = S.encode(a.join("\n"));
                    t.FS.writeFile(p, L);
                    t.FS.writeFile(_, S.encode(JSON.stringify({
                        callMetricsByteLength: L.byteLength,
                        patchedFieldCount: patched.length,
                        patchedRowIndex,
                        patchVersion
                    })));
                    yield o("WAWebVoipPersistentFS").syncPersistentFS(t);
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [LabMetrics] filled ",
                        " field(s) in row ",
                        ": ",
                        ""
                    ])), patched.length, patchedRowIndex, patched.join(", "));
                } catch (error) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [LabMetrics] failed to patch ",
                        ""
                    ])), p).catching(r("getErrorSafe")(error));
                }
            }
        });
        return b.apply(this, arguments);
    }
    function v() {
        const e = S();
        return e === g || e === h;
    }
    function S() {
        try {
            const e = o("WAWebABProps").getABPropConfigValue("web_voip_load_wasm_variant");
            if (typeof e === "string") {
                return e;
            }
            return null;
        } catch (e) {
            return null;
        }
    }
    function R(t) {
        try {
            return new TextDecoder().decode(t.FS.readFile(p));
        } catch (error) {
            if (!L(error)) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [LabMetrics] failed to read ",
                    ""
                ])), p).catching(r("getErrorSafe")(error)).sendLogs("voip-lab-metrics-read-failed", {
                    sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
                });
            }
            return null;
        }
    }
    function L(error) {
        if (error == null || typeof error !== "object") {
            return false;
        }
        return error.code === "ENOENT" || error.errno === y;
    }
    function E(e) {
        for(let t = e.length - 1; t >= 0; t--){
            const n = I(k(e[t]));
            if (n != null && T(n)) {
                return t;
            }
        }
        return -1;
    }
    function k(e) {
        if (e.trim() === "") {
            return null;
        }
        try {
            return JSON.parse(e);
        } catch (e) {
            return null;
        }
    }
    function I(e) {
        const t = Array.isArray(e) ? e[0] : e;
        if (t == null || typeof t !== "object" || Array.isArray(t)) {
            return null;
        }
        return t;
    }
    function T({ field_stats_row_type }) {
        return field_stats_row_type === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF || field_stats_row_type === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH;
    }
    function D(e, t) {
        const n = x(e);
        const filled = {};
        const patched = [];
        for (const a of Object.keys(t)){
            const i = n[a];
            if (!(i == null || e[i] != null)) {
                const l = $(t[a]);
                if (l != null) {
                    filled[i] = l;
                    patched.push(`${i}=${String(l)}`);
                }
            }
        }
        return {
            filled,
            patched
        };
    }
    function x(e) {
        const t = {};
        const n = new Set;
        for (const a of Object.keys(e)){
            const i = r("WACamelCase")(a, {
                treatNumbersAsWordBoundaries: false
            });
            if (n.has(i)) {
                t[i] = null;
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [LabMetrics] ambiguous camelCase key ",
                    ", skipping"
                ])), i);
                continue;
            }
            n.add(i);
            t[i] = a;
        }
        return t;
    }
    function $(e) {
        if (typeof e === "number") {
            if (Number.isFinite(e)) {
                return e;
            }
            return null;
        }
        if (typeof e === "boolean") {
            if (e) {
                return 1;
            }
            return 0;
        }
        if (typeof e === "string") {
            return e;
        }
        return null;
    }
    l.patchLabMetricsSelfRow = C;
}, 98);