__d("isRoomsURI", [], function(t, n, r, o, a, i) {
    const e = [
        "https"
    ];
    function l(t) {
        if (t.isEmpty() && t.toString() !== "#") {
            return false;
        }
        const r = t.getDomain()?.toLowerCase();
        if (!r && !t.getProtocol()) {
            return false;
        }
        return e.indexOf(t.getProtocol()) !== -1 && (r === "msngr.com" || r === "fbaud.io" || r === "fb.audio" || r.endsWith(".msngr.com") || r.endsWith(".fbaud.io") || r.endsWith(".fb.audio"));
    }
    i.default = l;
}, 66);