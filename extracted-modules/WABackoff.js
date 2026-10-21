__d("WABackoff", [
    "Promise",
    "WARetryPromise",
    "WARetryableError",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = Object.freeze({
        timeoutIncludesTaskDuration: true
    });
    function u(t, o) {
        const a = babelHelpers.extends({}, s, t);
        const { signal: i, timeoutIncludesTaskDuration: l, timeoutIterator: u } = a;
        return r("WARetryPromise")(function({ failCount: a, retry: i }) {
            return new (e || (e = n("Promise")))(function(t, s) {
                const c = Date.now();
                try {
                    o(d, a).then(t).catch(m);
                } catch (e) {
                    m(r("getErrorSafe")(e));
                    return;
                }
                function d(t) {
                    return (e || (e = n("Promise"))).reject(new (r("WARetryableError"))(t));
                }
                function m(e) {
                    if (!(e instanceof r("WARetryableError"))) {
                        return void s(e);
                    }
                    const t = u.next();
                    if (t.done) {
                        return void s(e.source);
                    }
                    const n = Date.now() - c;
                    const o = l ? Math.max(t.value - n, 0) : t.value;
                    i(o);
                }
            });
        }, i);
    }
    l.defaults = s;
    l.backoff = u;
}, 98);