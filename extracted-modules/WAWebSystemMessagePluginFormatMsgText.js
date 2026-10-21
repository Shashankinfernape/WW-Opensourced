__d("WAWebSystemMessagePluginFormatMsgText", [
    "WAWebPluginCreateRegistryLookup",
    "WAWebSystemMessagePluginFormatMsgTextRegistry"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(r("WAWebSystemMessagePluginFormatMsgTextRegistry"));
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