__d("WAWebDataLink", [
    "WAWebURLUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = document.createElement("a");
        const n = r("WAWebURLUtils").isBlob(e) || r("WAWebURLUtils").isData(e);
        t.href = n ? e : "";
        return t;
    }
    l.createDataLink = e;
}, 98);