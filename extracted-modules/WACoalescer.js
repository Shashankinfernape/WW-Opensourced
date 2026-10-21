__d("WACoalescer", [
    "WALogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s({ dispatch, name, waitBeforeDispatch }) {
        let s = [];
        let u = false;
        function c() {
            return d.apply(this, arguments);
        }
        function d() {
            d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    yield waitBeforeDispatch();
                } finally{
                    u = false;
                }
                const e = s;
                s = [];
                yield dispatch(e);
            });
            return d.apply(this, arguments);
        }
        return {
            add: function(n) {
                s.push(n);
                if (!u) {
                    u = true;
                    c().catch((t)=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[coalescer] ",
                            " dispatch failed"
                        ])), name).catching(r("getErrorSafe")(t)).sendLogs("coalescer-dispatch-failed");
                    });
                }
            }
        };
    }
    l.createCoalescer = s;
}, 98);