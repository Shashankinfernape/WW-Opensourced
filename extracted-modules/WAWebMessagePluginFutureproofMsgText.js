__d("WAWebMessagePluginFutureproofMsgText", [
    "WAWebMessagePluginFutureproofMsgTextRegistry",
    "WAWebPluginCreateRegistryLookup"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(r("WAWebMessagePluginFutureproofMsgTextRegistry"));
    function s(t) {
        let n;
        const t_msg = t.msg;
        if ((n = e(t_msg.futureproofType, t_msg.futureproofSubtype)) == null || n.futureproofMsgText == null) {
            return undefined;
        }
        return n.futureproofMsgText(t);
    }
    l.futureproofMsgText = s;
}, 98);