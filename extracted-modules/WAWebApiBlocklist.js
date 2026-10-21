__d("WAWebApiBlocklist", [
    "WAWebBoolFunc",
    "WAWebModelStorageUtils",
    "WAWebSchemaBlocklist",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e() {
        return o("WAWebSchemaBlocklist").getBlocklistTable().all().then((e)=>{
            const t = e.map((e)=>o("WAWebWidFactory").createUserWidOrThrow(e.id));
            return t;
        });
    }
    function s(e) {
        const t = e.map((e)=>({
                id: e.toString()
            }));
        return o("WAWebModelStorageUtils").getStorage().lock([
            "blocklist"
        ], function([n]) {
            return n.clear().then(()=>n.bulkCreate(t).then(o("WAWebBoolFunc").returnTrue));
        });
    }
    l.getBlocklist = e;
    l.updateBlocklist = s;
}, 98);