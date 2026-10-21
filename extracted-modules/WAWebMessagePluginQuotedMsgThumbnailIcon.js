__d("WAWebMessagePluginQuotedMsgThumbnailIcon", [
    "WAWebMessagePluginQuotedMsgThumbnailIconRegistry",
    "WAWebPluginCreateRegistryLookup"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(r("WAWebMessagePluginQuotedMsgThumbnailIconRegistry"));
    function s(t, n) {
        const r = e(t, n);
        return r?.quotedMsgThumbnailIcon;
    }
    l.quotedMsgThumbailIconComponent = s;
}, 98);