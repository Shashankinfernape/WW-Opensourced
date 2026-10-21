__d("isMetaAIURI", [], function(t, n, r, o, a, i) {
    let e = null;
    const l = [
        "http",
        "https"
    ];
    function s(t) {
        const n = e ?? new RegExp("(^|\\.)meta\\.ai$", "i");
        e = n;
        if (t.isEmpty() && t.toString() !== "#") {
            return false;
        }
        if (!t.getDomain() && !t.getProtocol()) {
            return true;
        }
        return l.indexOf(t.getProtocol()) !== -1 && n.test(t.getDomain());
    }
    s.setRegex = function(t) {
        e = t;
    };
    i.default = s;
}, 66);