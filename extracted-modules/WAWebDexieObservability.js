__d("WAWebDexieObservability", [
    "gkx"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (r("gkx")("27164")) {
            const o = e._middlewares?.dbcore ?? [];
            const a = o.filter((e)=>e.level === 0 && e.name == null);
            if (a.length === 1) {
                e.unuse({
                    stack: "dbcore",
                    create: a[0].create
                });
            }
        }
    }
    l.dropDexieObservability = e;
}, 98);