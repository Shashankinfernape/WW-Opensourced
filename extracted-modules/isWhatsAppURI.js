__d("isWhatsAppURI", [], function(t, n, r, o, a, i) {
    const e = new RegExp("(^|\\.)whatsapp\\.com$", "i");
    function l(t) {
        if (t.isEmpty() && t.toString() !== "#" || !t.getDomain() && !t.getProtocol() || t.getProtocol() !== "https") {
            return false;
        }
        return e.test(t.getDomain());
    }
    i.default = l;
}, 66);