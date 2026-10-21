__d("isMessengerDotComURI", [], function(t, n, r, o, a, i) {
    const e = "(^|\\.)messenger\\.com$";
    const l = new RegExp(e, "i");
    const s = [
        "https"
    ];
    function u(e) {
        if (e.isEmpty() && e.toString() !== "#" || !e.getDomain() && !e.getProtocol()) {
            return false;
        }
        return s.indexOf(e.getProtocol()) !== -1 && l.test(e.getDomain());
    }
    i.default = u;
}, 66);