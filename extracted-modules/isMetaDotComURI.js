__d("isMetaDotComURI", [], function(t, n, r, o, a, i) {
    const e = new RegExp("(^|\\.)meta\\.com$", "i");
    const l = [
        "https"
    ];
    function s(t) {
        if (t.isEmpty() && t.toString() !== "#") {
            return false;
        }
        if (!t.getDomain() && !t.getProtocol()) {
            return true;
        }
        return l.indexOf(t.getProtocol()) !== -1 && e.test(t.getDomain());
    }
    i.default = s;
}, 66);