__d("WASmaxOutBizSettingsSmbDataSharingSettingValueMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ anyValue, anyVersion }) {
        const r = o("WASmaxJsx").smax("smax$any", {
            value: o("WAWap").CUSTOM_STRING(anyValue),
            version: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, anyVersion)
        });
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSmbDataSharingSettingValueMixin = s;
}, 98);