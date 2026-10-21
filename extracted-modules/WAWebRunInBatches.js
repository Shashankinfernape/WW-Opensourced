__d("WAWebRunInBatches", [
    "Promise",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i) {
    let e;
    function l(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, o) {
            for(var l = o?.batchSize ?? 1000, s = o?.delayMs ?? 0, u = 0; u < t.length; u += l){
                if (o?.abortController?.signal.aborted) {
                    return;
                }
                const d = t.slice(u, u + l);
                yield r(d);
                yield new (e || (e = n("Promise")))(function(e) {
                    return self.setTimeout(e, s);
                });
            }
        });
        return s.apply(this, arguments);
    }
    i.runInBatches = l;
}, 66);