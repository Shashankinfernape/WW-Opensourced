__d("WAWebMultipleMessageParserPluginParseProtobuf", [
    "cr:37446"
], function(t, n, r, o, a, i, l) {
    const s = n("cr:37446") ?? [];
    function u(e) {
        const pluginsMatched = [];
        let result;
        for (const r of s){
            const o = r(e);
            if (o != null) {
                pluginsMatched.push(`${o.msgData.type}:${o.msgData.subtype ?? "null"}`);
                if (result == null) {
                    result = o;
                }
            }
        }
        return {
            result,
            pluginsMatched
        };
    }
    l.parseProtobufWithMultipleMessageParserPlugin = u;
}, 98);