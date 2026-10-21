__d("WASmaxOutSpamExtensionScreenMixin", [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ extensionScreenExtensionId, extensionScreenSessionId, extensionScreenT, extensionScreenName, extensionScreenEntryPoint, dataElementValue }) {
        let t;
        const u = o("WASmaxJsx").smax("extension_screen", {
            extension_id: (t = o("WAWap")).CUSTOM_STRING(extensionScreenExtensionId),
            session_id: t.CUSTOM_STRING(extensionScreenSessionId),
            t: t.INT(extensionScreenT),
            name: t.CUSTOM_STRING(extensionScreenName),
            entry_point: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, extensionScreenEntryPoint)
        }, o("WASmaxJsx").smax("data", null, dataElementValue));
        return u;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeExtensionScreenMixin = s;
}, 98);