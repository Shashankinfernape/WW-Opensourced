__d("WASmaxOutBlocklistsUpdateBlockListReportBlockEntryPointMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ entryPointSource }) {
        const n = o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("entry_point", {
            source: o("WAWap").CUSTOM_STRING(entryPointSource)
        }));
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUpdateBlockListReportBlockEntryPointMixin = s;
}, 98);