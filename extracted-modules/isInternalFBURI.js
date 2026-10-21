__d("isInternalFBURI", [], function(t, n, r, o, a, i) {
    const e = "(^|\\.)internalfb\\.com$";
    const l = new RegExp(e, "i");
    function s(e) {
        return l.test(e.getDomain());
    }
    i.default = s;
}, 66);