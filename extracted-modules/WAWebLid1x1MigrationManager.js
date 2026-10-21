__d("WAWebLid1x1MigrationManager", [
    "Promise",
    "WALogger",
    "WAWebLid1X1MigrationGating",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = (()=>{
        function t() {
            this.$1 = [];
        }
        const r = t.prototype;
        r.addDependentMigrationTask = function(n) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Lid1x1ThreadMigrationManager] task registered"
            ])));
            this.$1.push(n);
        };
        r.executeMigrationIfNeeded = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.$1.length === 0) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Lid1x1ThreadMigrationManager: no dependent migration tasks"
                    ])));
                    return;
                }
                const e = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated();
                try {
                    if (e) {
                        yield (d || (d = n("Promise"))).all(this.$1.map((e)=>e()));
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[Lid1x1ThreadMigrationManager] executed ",
                            " tasks"
                        ])), this.$1.length);
                    }
                } catch (e) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[Lid1x1ThreadMigrationManager] executeMigrationTasks err: ",
                        ""
                    ])), e);
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    const p = new m;
    l.ThreadMigrationManager = p;
}, 98);