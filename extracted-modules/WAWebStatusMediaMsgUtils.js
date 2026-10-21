__d("WAWebStatusMediaMsgUtils", [
    "WAWebStatusCollection"
], function(t, n, r, o, a, i, l) {
    const e = new Set([
        "image",
        "video",
        "ptv"
    ]);
    function s(t, n) {
        const i = t != null ? o("WAWebStatusCollection").StatusCollection.getStatusModel(t, true) : null;
        const l = i?.msgs?.getModelsArray() ?? [];
        return l.find((t)=>e.has(t.type) && t.id.id === n);
    }
    l.findStatusMediaMsg = s;
}, 98);