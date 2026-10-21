__d("isSecureOculusDotComURI", [], function(t, n, r, o, a, i) {
    const e = new RegExp("(^|\\.)secure\\.oculus\\.com$", "i");
    const l = new RegExp("(^|\\.)work\\.meta\\.com$", "i");
    const s = [
        "https"
    ];
    function u(t) {
        if (t.isEmpty() && t.toString() !== "#" || !t.getDomain() && !t.getProtocol()) {
            return false;
        }
        return s.indexOf(t.getProtocol()) !== -1 && (e.test(t.getDomain()) || l.test(t.getDomain()));
    }
    i.default = u;
}, 66);