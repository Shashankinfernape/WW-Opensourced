__d("WAWebMessagePluginRenderMsg", [
    "WAWebMessagePluginRenderMsgRegistry",
    "WAWebPluginCreateRegistryLookup",
    "WAWebStateUtils"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(r("WAWebMessagePluginRenderMsgRegistry"));
    function s(t) {
        const { displayAuthor, msg } = t;
        const a = e(msg.type, msg.subtype);
        if (a == null || a.renderMsg == null) {
            return undefined;
        }
        return a.renderMsg({
            chat: o("WAWebStateUtils").unproxy(t.chat),
            msg: o("WAWebStateUtils").unproxy(t.msg),
            displayAuthor
        });
    }
    l.renderMsg = s;
}, 98);