__d("WASmaxInPreKeysAddResponseSuccess", [
    "WAResultOrError",
    "WASmaxInPreKeysIQResultResponseMixin",
    "WASmaxInPreKeysPQPreKeyListCountLowMixin",
    "WASmaxInPreKeysPreKeyListCountLowMixin",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxInPreKeysIQResultResponseMixin").parseIQResultResponseMixin(e, t);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxInPreKeysPreKeyListCountLowMixin").parsePreKeyListCountLowMixin(e);
        const i = o("WASmaxInPreKeysPQPreKeyListCountLowMixin").parsePQPreKeyListCountLowMixin(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({}, r.value, {
            preKeyListCountLowMixin: a.success ? a.value : null,
            pQPreKeyListCountLowMixin: i.success ? i.value : null
        }));
    }
    l.parseAddResponseSuccess = e;
}, 98);