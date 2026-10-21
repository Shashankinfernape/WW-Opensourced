__d("isWorkplaceDotComURI", [], function(t, n, r, o, a, i) {
    const e = "(^|\\.)workplace\\.com$";
    const l = new RegExp(e, "i");
    function s(e) {
        return e.getProtocol() === "https" && l.test(e.getDomain());
    }
    i.default = s;
}, 66);