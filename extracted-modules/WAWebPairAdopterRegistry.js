__d("WAWebPairAdopterRegistry", [], function(t, n, r, o, a, i) {
    const e = [
        {
            adopterKey: 7652,
            gate: "capi_messaging_pairs_vpv_enabled",
            templateApproved: false
        }
    ];
    function l(t) {
        return e.find((e)=>e.adopterKey === t);
    }
    i.findPairAdopter = l;
}, 66);