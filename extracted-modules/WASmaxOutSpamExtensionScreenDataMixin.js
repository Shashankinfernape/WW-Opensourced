__d("WASmaxOutSpamExtensionScreenDataMixin", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamExtensionScreenMixin"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxOutSpamExtensionScreenMixin").mergeExtensionScreenMixin(o("WASmaxJsx").smax("extension_screen", null), e);
        return t;
    }
    function s({ extensionScreenArgs }) {
        const r = o("WASmaxJsx").smax("message", null, o("WASmaxChildren").REPEATED_CHILD(e, extensionScreenArgs, 1, 100));
        return r;
    }
    function u(e, t) {
        const n = s(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.makeExtensionScreenDataExtensionScreen = e;
    l.mergeExtensionScreenDataMixin = u;
}, 98);