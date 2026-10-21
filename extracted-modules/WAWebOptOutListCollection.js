__d("WAWebOptOutListCollection", [
    "Promise",
    "WAWebBaseCollection",
    "WAWebContactCollection",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebOptOutListModel",
    "WAWebUpdateOptOutListDbJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (t)=>{
        if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
            return o("WAWebLidMigrationUtils").toLid(t);
        }
        return null;
    };
    const u = ((t)=>{
        function a() {
            let r;
            r = t.call(this) || this;
            r.updateOptOutListInCollectionAndDb = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isBlocked, targetWid }) {
                    const i = o("WAWebWidFactory").asUserWidOrThrow(targetWid);
                    if (isBlocked) {
                        yield o("WAWebUpdateOptOutListDbJob").updateOptOutListDbJob(i, isBlocked);
                        c.add({
                            id: i
                        });
                        return;
                    }
                    const l = [
                        o("WAWebLidMigrationUtils").toPn(i),
                        s(i),
                        i
                    ].filter(Boolean);
                    yield (e || (e = n("Promise"))).all(l.map((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            yield o("WAWebUpdateOptOutListDbJob").updateOptOutListDbJob(e, isBlocked);
                            c.remove(e);
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })()));
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })();
            r.listenTo(r, "add", function(e) {
                r.$OptOutListCollectionImpl$p_1(e.id, true);
            });
            r.listenTo(r, "remove", function(e) {
                r.$OptOutListCollectionImpl$p_1(e.id, false);
            });
            return r;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.$OptOutListCollectionImpl$p_1 = function(t, n) {
            const e = o("WAWebWidFactory").asUserWidOrThrow(t);
            for (const r of [
                o("WAWebLidMigrationUtils").toPn(e),
                s(e)
            ]){
                if (r) {
                    const a = o("WAWebContactCollection").ContactCollection.get(r);
                    if (a) {
                        a.set("isContactOptedOut", n);
                        if (n) {
                            a.set("isEverOptedOutOfMarketingMessages", n);
                        }
                    }
                }
            }
        };
        a_prototype.replaceAllWith = function(t) {
            const e = this;
            const n = new Map(t.map((e)=>[
                    e.wid.toString(),
                    new (r("WAWebOptOutListModel"))({
                        id: e.wid
                    })
                ]));
            this.toArray().forEach((t)=>{
                if (n.has(t.id.toString())) {
                    n.delete(t.id.toString());
                } else {
                    e.remove(t);
                }
            });
            n.forEach((t)=>e.add(t));
        };
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    u.model = r("WAWebOptOutListModel");
    var c = new u;
    l.OptOutListCollection = c;
}, 98);