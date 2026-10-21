__d("WAWebStatusMsgLookup", [
    "WAWebStatusCollection"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const statusModel = o("WAWebStatusCollection").StatusCollection.getStatusModel(e, true);
        if (statusModel == null) {
            return null;
        }
        const i = statusModel.msgs?.getModelsArray() ?? [];
        const l = i.find((e)=>e.id.id === t);
        if (l == null) {
            return null;
        }
        return {
            statusModel,
            msg: l
        };
    }
    l.findStatusMsgByStanzaId = e;
}, 98);