__d("WAWebDBGetEventMessagesForChat", [
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
                Infinity
            ] : [
                e.internalId,
                e.isEventMsg
            ];
            const a = [
                o("WAWebDBMessageUtils").beginningOfChat(t),
                0
            ];
            return o("WAWebSchemaMessage").getMessageTable().between([
                "internalId",
                "isEventMsg"
            ], a, n, {
                lowerInclusive: false,
                upperInclusive: false,
                reverse: true,
                limit: r
            }).then((e)=>e.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e)));
        });
    }
    l.getEventMessagesForChat = s;
}, 98);