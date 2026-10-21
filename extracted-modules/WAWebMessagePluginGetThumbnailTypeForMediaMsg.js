__d("WAWebMessagePluginGetThumbnailTypeForMediaMsg", [
    "WAWebMessagePluginGetThumbnailTypeForMediaMsgRegistry",
    "WAWebPluginCreateRegistryLookup"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(r("WAWebMessagePluginGetThumbnailTypeForMediaMsgRegistry"));
    function s(t) {
        const t_msg = t.msg;
        const r = e(t_msg.type, t_msg.subtype);
        if (r == null || r.getThumbnailTypeForMediaMsg == null) {
            return undefined;
        }
        return r.getThumbnailTypeForMediaMsg(t);
    }
    l.getThumbnailTypeForMediaMsg = s;
}, 98);