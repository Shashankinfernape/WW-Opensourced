__d("isInstagramURI", [], function(t, n, r, o, a, i) {
    const e = "(^|\\.)instagram\\.com$";
    let l = null;
    function s(t) {
        if (t.isEmpty() && t.toString() !== "#" || !t.getDomain() && !t.getProtocol() || t.getProtocol() !== "https") {
            return false;
        }
        if (!l) {
            l = new RegExp(e, "i");
        }
        return l.test(t.getDomain());
    }
    i.default = s;
}, 66);