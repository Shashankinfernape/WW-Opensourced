__d("WAWebCreateMediaBlobUrl", [
    "justknobx"
], function(t, n, r, o, a, i, l) {
    const e = "application/octet-stream";
    const s = new Set([
        e,
        "application/pdf",
        "text/plain"
    ]);
    const u = /^(?:image|video|audio)\/[a-z0-9._+-]+$/;
    function c(t) {
        if (r("justknobx")._("6326")) {
            return window.URL.createObjectURL(t);
        }
        return window.URL.createObjectURL(d(t.type) ? t : t.slice(0, t.size, e));
    }
    function d(e) {
        if (e.includes(",")) {
            return false;
        }
        const t = e.split(";")[0].trim().toLowerCase();
        if (t.endsWith("/xml") || t.endsWith("+xml")) {
            return false;
        }
        return s.has(t) || u.test(t);
    }
    l.createMediaBlobUrl = c;
}, 98);