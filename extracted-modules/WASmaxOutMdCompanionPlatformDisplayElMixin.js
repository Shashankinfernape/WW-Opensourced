__d("WASmaxOutMdCompanionPlatformDisplayElMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ companionPlatformDisplayElementValue: t }) {
        const n = o("WASmaxJsx").smax("companion_platform_display", null, t);
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeCompanionPlatformDisplayElMixin = s;
}, 98);