__d("asyncToGeneratorRuntime", [
    "Promise"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    function l(t, r, o, a, i, l, s) {
        try {
            var u = t[l](s);
            var c = u.value;
        } catch (error) {
            o(error);
            return;
        }
        if (u.done) {
            r(c);
        } else {
            (e || (e = n("Promise"))).resolve(c).then(a, i);
        }
    }
    function s(t) {
        return function() {
            const r = this;
            const o = arguments;
            return new (e || (e = n("Promise")))(function(e, n) {
                const a = t.apply(r, o);
                function i(t) {
                    l(a, e, n, i, s, "next", t);
                }
                function s(t) {
                    l(a, e, n, i, s, "throw", t);
                }
                i(undefined);
            });
        };
    }
    i.asyncToGenerator = s;
}, 66);