__d("isOculusDotComURI", [], function(t, n, r, o, a, i) {
    const e = new RegExp("(^|\\.)oculus\\.com$", "i");
    const l = [
        "https"
    ];
    function s(t) {
        if (t.isEmpty() && t.toString() !== "#" || !t.getDomain() && !t.getProtocol()) {
            return false;
        }
        return l.indexOf(t.getProtocol()) !== -1 && e.test(t.getDomain());
    }
    i.default = s;
}, 66);