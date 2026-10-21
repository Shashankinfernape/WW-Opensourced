__d("WAWebPairList", [], function(t, n, r, o, a, i) {
    function e(e) {
        return e.map((e)=>[
                e[0],
                e[1]
            ]).flat();
    }
    function l(e) {
        if (e.length % 2 !== 0) {
            const t = new RangeError("Flattened pairs come in 2, invalid list size to unflatten!");
            t.stack;
            throw t;
        }
        const n = [];
        for(let r = 0; r < e.length; r++){
            n.push([
                e[r],
                e[++r]
            ]);
        }
        return n;
    }
    i.flattenPairList = e;
    i.unFlattenPairList = l;
}, 66);