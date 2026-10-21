__d("WAWebMessagePluginFormatMsgText", [
    "WAWebMessagePluginFormatMsgTextRegistry",
    "WAWebPluginCreateRegistryLookup"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(r("WAWebMessagePluginFormatMsgTextRegistry"));
    function s(t) {
        let n;
        const t_msg = t.msg;
        if ((n = e(t_msg.type, t_msg.subtype)) == null || n.formatMsgText == null) {
            return undefined;
        }
        return n.formatMsgText(t);
    }
    l.formatMsgText = s;
}, 98);