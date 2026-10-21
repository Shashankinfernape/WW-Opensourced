__d("WAWebDBUpdateAddOnAcksForTable", [
    "WAWebModelStorageUtils",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e, t, a) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            e
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const o = [];
                const i = new Map;
                for (const l of t){
                    const s = l.msgKey.toString();
                    o.push(s);
                    i.set(l.msgKey.toString(), l);
                }
                const u = yield n.anyOf([
                    "msgKey"
                ], o, {
                    shouldDecrypt: false
                });
                const c = [];
                const d = [];
                for (const m of u){
                    const p = r("nullthrows")(i.get(m.msgKey));
                    if (a(m, p)) {
                        const _ = babelHelpers.extends({}, m, {
                            ack: p.ack
                        });
                        c.push(_);
                        d.push(p);
                    }
                }
                yield n.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(c);
                return d;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    l.updateAddOnAcksForTable = e;
}, 98);