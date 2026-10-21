__d("WAWebSearchCollection", [
    "compactMap"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(e){
            this.models = [];
            this.models = e;
        }
        query(t, n) {
            let e;
            if (n != null && n.pageLengthPerModel != null) {
                e = {
                    pagination: {
                        pageLength: n.pageLengthPerModel,
                        page: 0
                    }
                };
            }
            return r("compactMap")(this.models, function(n) {
                const r = n.query(t, e);
                return r;
            });
        }
    }
    l.SearchCollection = e;
}, 98);