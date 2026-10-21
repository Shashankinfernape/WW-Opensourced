__d("WAMemoizeConcurrent", [
    "Promise",
    "WAAbortError",
    "WAPromiseRaceAbort",
    "WASignalAggregator"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, a) {
        const i = new Map;
        return function(s) {
            if (s?.signal?.aborted) {
                return (e || (e = n("Promise"))).reject(new (o("WAAbortError")).AbortError);
            }
            const u = t.call(this, s);
            let c = i.get(u);
            if (c == null || c.aggregator.signal.aborted) {
                const aggregator = new (r("WASignalAggregator"));
                const m = babelHelpers.extends({}, s, {
                    signal: aggregator.signal
                });
                c = {
                    aggregator,
                    promise: a.call(this, m).finally(()=>{
                        aggregator.dispose();
                        i.delete(u);
                    })
                };
                i.set(u, c);
            }
            const p = s?.signal || new AbortController().signal;
            c.aggregator.add(p);
            return r("WAPromiseRaceAbort")(c.promise, p);
        };
    }
    l.default = s;
}, 98);