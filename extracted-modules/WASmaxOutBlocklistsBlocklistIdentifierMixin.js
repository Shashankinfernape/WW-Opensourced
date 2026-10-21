__d("WASmaxOutBlocklistsBlocklistIdentifierMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBlocklistsBlocklistIds",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ anyCountryCode, blocklistIdsArgs }) {
        const r = o("WASmaxOutBlocklistsBlocklistIds").mergeBlocklistIds(o("WASmaxJsx").smax("smax$any", {
            country_code: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, anyCountryCode)
        }), blocklistIdsArgs);
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBlocklistIdentifierMixin = s;
}, 98);