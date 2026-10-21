__d("WASmaxOutMdCompanionPlatformIdElMixin", [
    "WASmaxJsx",
    "WASmaxMixins"
], function(t, n, r, o, a, i, l) {
    function e({ companionPlatformIdElementValue: t }) {
        const n = o("WASmaxJsx").smax("companion_platform_id", null, t);
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeCompanionPlatformIdElMixin = s;
}, 98);