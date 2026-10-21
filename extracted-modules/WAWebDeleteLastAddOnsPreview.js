__d("WAWebDeleteLastAddOnsPreview", [
    "WAWebApiBulkUpdateChatLastAddOnPreview",
    "WAWebMsgKey",
    "WAWebShouldUpdateLastAddOnPreview",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Set(e.map((e)=>r("WAWebMsgKey").fromString(e).remote.toString()));
            const n = yield o("WAWebShouldUpdateLastAddOnPreview").bulkGetChatLastAddOnPreviewMap(Array.from(t));
            const a = new Map;
            n.forEach((t, n)=>{
                const r = t?.parentMsgKey;
                if (r != null && e.includes(r)) {
                    a.set(n, void 0);
                }
            });
            yield o("WAWebApiBulkUpdateChatLastAddOnPreview").bulkUpdateChatLastAddOnPreview(a);
        });
        return s.apply(this, arguments);
    }
    l.deleteLastAddOnsPreview = e;
}, 98);