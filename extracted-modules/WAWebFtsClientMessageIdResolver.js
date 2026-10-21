__d("WAWebFtsClientMessageIdResolver", [
    "WAWebDBMessageSerialization",
    "WAWebSchemaMessage"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = e.map((e)=>+e.id);
        const n = new Map(e.map((e)=>[
                +e.id,
                e
            ]));
        return o("WAWebSchemaMessage").getMessageTable().anyOf([
            "rowId"
        ], t).then((e)=>{
            const resolved = [];
            e.forEach((e)=>{
                const r = o("WAWebDBMessageSerialization").messageFromDbRow(e);
                const r_rowId = r.rowId;
                const i = r_rowId != null ? n.get(r_rowId) : undefined;
                if (i != null && r_rowId != null && i.id === String(r.rowId) && i.timestamp === r.t && i.chatId === r.id.remote.toString()) {
                    resolved.push(r);
                    n.delete(r_rowId);
                }
            });
            const unresolved = Array.from(n.keys(), function(e) {
                return String(e);
            });
            resolved.sort((e, t)=>t.t - e.t);
            return {
                resolved,
                unresolved
            };
        });
    }
    l.resolveMsgIds = e;
}, 98);