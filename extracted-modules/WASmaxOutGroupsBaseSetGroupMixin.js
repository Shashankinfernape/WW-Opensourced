__d("WASmaxOutGroupsBaseSetGroupMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseIQSetRequestMixin",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ iqTo: t }) {
        const n = o("WASmaxOutGroupsBaseIQSetRequestMixin").mergeBaseIQSetRequestMixin(o("WASmaxJsx").smax("iq", {
            to: o("WAWap").GROUP_JID(t),
            xmlns: "w:g2"
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBaseSetGroupMixin = s;
}, 98);