__d("WAWebSetTextStatusJob", [
    "WAWebDefinePersistedJob",
    "WAWebUpdateTextStatusJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebDefinePersistedJob").defineWebPersistedJob().finalStep("sendMex", (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ emoji: t, ephemeralDurationSeconds: n, text: r }) {
            const a = yield o("WAWebUpdateTextStatusJob").updateTextStatus(r, t, n);
            return a;
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    })()).end();
    l.setTextStatus = e;
}, 98);