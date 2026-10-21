__d("WAWebMessagePluginGenerateProtobuf", [
    "WAWebMessagePluginGenerateProtobufRegistry",
    "WAWebPluginCreateRegistryLookup"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(r("WAWebMessagePluginGenerateProtobufRegistry"));
    function s(t) {
        let n;
        const t_json = t.json;
        if ((n = e(t_json.type, t_json.subtype)) == null || n.generateProtobuf == null) {
            return undefined;
        }
        return n.generateProtobuf(t);
    }
    l.generateProtobuf = s;
}, 98);