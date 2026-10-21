__d("WAExponentialBackoff", [
    "WABackoff",
    "WAExponentialBackoffIterator"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "signal",
        "timeoutIncludesTaskDuration"
    ];
    const s = babelHelpers.extends({}, o("WAExponentialBackoffIterator").defaults, o("WABackoff").defaults);
    function u(t, n) {
        const r = babelHelpers.extends({}, s, t);
        const { signal: a, timeoutIncludesTaskDuration: i } = r;
        const l = babelHelpers.objectWithoutPropertiesLoose(r, e);
        const u = o("WAExponentialBackoffIterator").exponentialBackoffIterator(l);
        return o("WABackoff").backoff({
            signal: a,
            timeoutIterator: u,
            timeoutIncludesTaskDuration: i
        }, n);
    }
    l.exponentialBackoff = u;
}, 98);