__d("WAGetLiboqsWasm", [
    "WALiboqsWasm",
    "WALogger",
    "WAResolvable",
    "WAWasmModuleCache",
    "bx",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = r("bx").getURL(r("bx")("47437"));
    function c() {
        const t = new (o("WAResolvable")).Resolvable;
        const n = r("WALiboqsWasm")({
            instantiateWasm: function(a, i) {
                o("WAWasmModuleCache").loadWasmModule(u).then((e)=>WebAssembly.instantiate(e, a)).then((e)=>{
                    i(e);
                    t.resolve();
                }).catch((n)=>{
                    const a = r("getErrorSafe")(n);
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[LiboqsWasm] instantiateWasm failed with error: ",
                        ""
                    ])), a.message);
                    t.reject(a);
                });
                return {};
            }
        }).catch((e)=>{
            const n = r("getErrorSafe")(e);
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[LiboqsWasm] init failed with error: ",
                ""
            ])), n.message);
            t.reject(n);
            throw n;
        });
        return t.promise.then(()=>n);
    }
    l.WALiboqsWasmUrl = u;
    l.loadLiboqsWasm = c;
}, 98);