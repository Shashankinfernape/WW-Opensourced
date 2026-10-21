__d("WAWebVoipWasmResourceTiming", [
    "WAWebVoipWasmArtifactRegistry"
], function(t, n, r, o, a, i, l) {
    const e = 250;
    const s = 2500;
    function u(e) {
        if (typeof self.performance.getEntriesByType !== "function") {
            return "unknown";
        }
        if (o("WAWebVoipWasmArtifactRegistry").getSelectedVoipWasmUri() == null) {
            return "not_seen";
        }
        const t = self.performance.getEntriesByType("resource");
        if (m(t, (t)=>t.startTime >= e) != null) {
            return "seen";
        }
        if (_(t.length)) {
            return "unknown";
        }
        return "not_seen";
    }
    function c(e) {
        if (typeof self.performance.getEntriesByType === "function") {
            const n = m(self.performance.getEntriesByType("resource"), (t)=>t.startTime >= e);
            const r = p(n, "responseEnd");
            if (!(n == null || r == null || r < n.startTime)) {
                const int = {
                    wasm_download_ms: Math.round(r - n.startTime)
                };
                const a = p(n, "transferSize");
                if (a != null && (p(n, "decodedBodySize") ?? 0) > 0) {
                    int.wasm_transfer_kb = Math.round(a / 1024);
                }
                return {
                    int
                };
            }
        }
    }
    function d(e, t) {
        if (typeof self.performance.getEntriesByType !== "function" || o("WAWebVoipWasmArtifactRegistry").getSelectedVoipWasmUri() == null) {
            return "unknown";
        }
        const n = self.performance.getEntriesByType("resource");
        const r = m(n, (t)=>t.startTime < e);
        if (r == null) {
            if (_(n.length)) {
                return "unknown";
            }
            return "none";
        }
        if (r.startTime >= t) {
            return "started_after_trigger";
        }
        const a = p(r, "responseEnd");
        if (a == null || a < r.startTime) {
            return "unknown";
        }
        if (a <= t) {
            return "complete_before_trigger";
        }
        return "in_flight_at_trigger";
    }
    function m(e, t) {
        const n = o("WAWebVoipWasmArtifactRegistry").getSelectedVoipWasmUri();
        if (n == null) {
            return null;
        }
        const href = new URL(n, window.location.href).href;
        return e.find((e)=>e.name === href && t(e));
    }
    function p(e, t) {
        const n = e == null ? null : Reflect.get(e, t);
        if (typeof n === "number") {
            return n;
        }
        return null;
    }
    function _(t) {
        return Reflect.get(self, "__isresourcetimingbufferfull") === true || t === e || t >= s;
    }
    l.getVoipWasmFetchState = u;
    l.getVoipWasmDownloadAnnotations = c;
    l.getVoipWasmPrefetchState = d;
}, 98);