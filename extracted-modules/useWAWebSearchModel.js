__d("useWAWebSearchModel", [
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useMemo, useState } = s;
    function m(e) {
        const searchInstance = useMemo(e, []);
        const r = useState();
        const results = r[0];
        const a = r[1];
        const query = useCallback((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                const r = yield searchInstance.query(e, n);
                a(r);
                return r;
            });
            return function(t, n) {
                return e.apply(this, arguments);
            };
        })(), [
            searchInstance
        ]);
        const next = useCallback(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (results?.pagination?.next != null) {
                const t = yield results.pagination.next();
                a(t);
                return t;
            }
        }), [
            results
        ]);
        const previous = useCallback(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (results?.pagination?.previous != null) {
                const t = yield results.pagination.previous();
                a(t);
                return t;
            }
        }), [
            results
        ]);
        return {
            results,
            query,
            searchInstance,
            next,
            previous
        };
    }
    l.useSearchModel = m;
}, 98);