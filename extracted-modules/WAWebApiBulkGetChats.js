__d("WAWebApiBulkGetChats", [
    "WAWebSchemaChat"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebSchemaChat").getChatTable().bulkGet(e.map((e)=>e.toString()));
    }
    l.bulkGetChats = e;
}, 98);