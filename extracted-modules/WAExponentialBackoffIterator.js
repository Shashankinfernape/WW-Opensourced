__d("WAExponentialBackoffIterator", [
    "WAExponentialIterator"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        factor: 2,
        jitter: 0,
        maxTimeout: 1 / 0
    };
    function* s(t) {
        const n = babelHelpers.extends({}, e, t);
        const { factor: o, jitter: a, maxTimeout: i, minTimeout: l, retries: s } = n;
        let u = 0;
        for (const c of r("WAExponentialIterator")(o)){
            u++;
            if (u > s) {
                return;
            }
            const d = 1 + (Math.random() * a * 2 - a);
            yield Math.min(l * c * d, i);
        }
    }
    l.defaults = e;
    l.exponentialBackoffIterator = s;
}, 98);