__d("WAWebMessagePluginMsgDisplayClass", [
    "WAWebMessagePluginMsgDisplayClassRegistry",
    "WAWebPluginCreateRegistryLookup"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(r("WAWebMessagePluginMsgDisplayClassRegistry"));
    function s(t) {
        const t_msg = t.msg;
        const r = e(t_msg.type, t_msg.subtype);
        if (r == null || r.msgDisplayClass == null) {
            return undefined;
        }
        return r.msgDisplayClass(t);
    }
    l.msgDisplayClass = s;
}, 98);