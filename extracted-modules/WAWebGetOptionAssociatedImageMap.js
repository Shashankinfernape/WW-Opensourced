__d("WAWebGetOptionAssociatedImageMap", [
    "Promise",
    "WAWebPollOptionHashUtils",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = yield (e || (e = n("Promise"))).all(r.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t_name = t.name;
                    const filehash = e.mediaData.filehash;
                    const a = yield o("WAWebPollOptionHashUtils").generatePollOptionHash(t_name, filehash);
                    return [
                        a,
                        e
                    ];
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            return new Map(a);
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, o) {
            const a = yield (e || (e = n("Promise"))).all(t.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield s(e, o);
                    const n = r("nullthrows")(e.hash);
                    const a = r("nullthrows")(t.get(n));
                    return [
                        e,
                        a
                    ];
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            return new Map(a);
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.length === 0) {
                return new Map;
            }
            return c(e, t);
        });
        return p.apply(this, arguments);
    }
    l.getOptionAssociatedMsgsMap = m;
}, 98);