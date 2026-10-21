__d("WAWebHistorySyncLogUtils", [], function(t, n, r, o, a, i) {
    function e(e, t, n) {
        if (e == null) {
            return "";
        }
        const i = (e.msgKey || "").split("_")[2];
        const s = l(e.syncType, e.chunkOrder, e.isReupload);
        const u = e.downloadOptions.filehash?.slice(0, 10) ?? e.filehash?.slice(0, 10);
        return ` ${s}, id: ${i} ## msgCount: ${t ?? "-"}, ## chatCount: ${n ?? "-"}, ## downloadStr: ${u ?? ""} `;
    }
    function l(e, t, n) {
        return `type_${e ?? "none"}_order_${t ?? "none"}_isReupload_${n || 0}`;
    }
    i.getHistorySyncLogDetailsString = e;
    i.getHistorySyncBasicChunkInfoString = l;
}, 66);