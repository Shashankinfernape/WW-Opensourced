__d("WALock", [
    "Promise",
    "WAResolvable",
    "WATagsLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u(t) {
        return {
            lock: function(a, i) {
                const r = new (o("WAResolvable")).Resolvable;
                const l = a.map((e)=>[
                        e,
                        new (o("WAResolvable")).Resolvable
                    ]);
                (s || (s = n("Promise"))).all(l.map(([n, o])=>t.enqueue(n, function() {
                        o.resolve();
                        return r.promise;
                    }))).catch(()=>{
                    o("WATagsLogger").TAGS([
                        "WALock"
                    ]).ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Lock failed for ",
                        ""
                    ])), a);
                });
                return s.all(l.map(([t, n])=>n.promise)).then(()=>i()).finally(()=>{
                    r.resolve();
                });
            },
            wait: function(n) {
                return t.wait(n);
            }
        };
    }
    l.makeLock = u;
}, 98);