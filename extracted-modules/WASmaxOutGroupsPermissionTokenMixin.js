__d("WASmaxOutGroupsPermissionTokenMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsPrivacyTokenContentsMixin"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxJsx").smax("smax$any", null, o("WASmaxOutGroupsPrivacyTokenContentsMixin").mergePrivacyTokenContentsMixin(o("WASmaxJsx").smax("privacy", null), e));
        return t;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePermissionTokenMixin = s;
}, 98);