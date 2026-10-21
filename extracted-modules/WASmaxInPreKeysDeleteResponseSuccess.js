__d("WASmaxInPreKeysDeleteResponseSuccess", [
    "WASmaxInPreKeysIQResultResponseMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInPreKeysIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        r.success;
        return r;
    }
    l.parseDeleteResponseSuccess = e;
}, 98);