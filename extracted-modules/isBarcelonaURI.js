__d("isBarcelonaURI", [], function(t, n, r, o, a, i) {
    const e = "(^|\\.)threads\\.(net|com)$";
    function l(e) {
        const t = e.getProtocol();
        const n = e.getDomain();
        return (t === "http" || t === "https") && (n === "threads.net" || n.endsWith(".threads.net") || n === "threads.com" || n.endsWith(".threads.com"));
    }
    i.default = l;
}, 66);