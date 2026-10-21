__d("WASmaxOutMdContactPointMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ anyContactPointType: t, anyContactPointValue: n }) {
        const r = o("WASmaxJsx").smax("smax$any", {
            contact_point_type: o("WAWap").CUSTOM_STRING(t),
            contact_point_value: o("WAWap").CUSTOM_STRING(n)
        });
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeContactPointMixin = s;
}, 98);