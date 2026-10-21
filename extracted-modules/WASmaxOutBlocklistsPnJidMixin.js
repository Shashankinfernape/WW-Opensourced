__d("WASmaxOutBlocklistsPnJidMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ anyPnJid }) {
        const n = o("WASmaxJsx").smax("smax$any", {
            pn_jid: o("WAWap").JID(anyPnJid)
        });
        return n;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePnJidMixin = s;
}, 98);