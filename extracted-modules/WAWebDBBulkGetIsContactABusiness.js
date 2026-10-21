__d("WAWebDBBulkGetIsContactABusiness", [
    "WAWebSchemaVerifiedBusinessName"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebSchemaVerifiedBusinessName").getVerifiedBusinessNameTable().bulkGet(e.map((e)=>e?.user ?? "")).then((e)=>e.map((e)=>e != null));
    }
    l.bulkGetIsContactABusiness = e;
}, 98);