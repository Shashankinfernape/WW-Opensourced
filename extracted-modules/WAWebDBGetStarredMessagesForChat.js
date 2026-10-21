__d("WAWebDBGetStarredMessagesForChat", [
    "Promise",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebSchemaMessage"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, r, a) {
        return (e || (e = n("Promise"))).resolve().then(()=>{
            if (a != null) {
                return o("WAWebSchemaMessage").getMessageTable().get(a.toString());
            }
        }).then((e)=>{
            const n = e == null ? [
                o("WAWebDBMessageUtils").endOfChat(t),
                1 / 0
            ] : [
                e.internalId,
                e.isStarred
            ];
            const a = [
                o("WAWebDBMessageUtils").beginningOfChat(t),
                0
            ];
            return o("WAWebSchemaMessage").getMessageTable().between([
                "internalId",
                "isStarred"
            ], a, n, {
                lowerInclusive: false,
                upperInclusive: false,
                reverse: true,
                limit: r
            }).then((e)=>e.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e)));
        });
    }
    l.getStarredMessagesForChat = s;
}, 98);