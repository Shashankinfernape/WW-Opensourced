__d("WAWebHandleBusinessNameChangeLidHelpers", [
    "Promise",
    "WAWebHandleBusinessRemoval",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return e.map((e)=>{
            const t = o("WAWebLidMigrationUtils").getPnAndLidToUpdate(e.id);
            return t.map((t)=>babelHelpers.extends({}, e, {
                    id: t
                }));
        }).reduce((acc, item)=>acc.concat(item), []);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            return o("WAWebModelStorageUtils").getStorage().lock([
                "contact",
                "verified-business-name"
            ], function([a, i]) {
                const l = o("WAWebLidMigrationUtils").getPnAndLidToUpdate(t);
                return (e || (e = n("Promise"))).all([].concat(l.map(o("WAWebHandleBusinessRemoval").removeBusinessPropsFromContact), l.map((e)=>o("WAWebHandleBusinessRemoval").removeVerifiedName(i, e))));
            });
        });
        return c.apply(this, arguments);
    }
    l.getVerifiedNamesToUpdateLidAware = s;
    l.removeVerifiedNameFromTableLidAware = u;
}, 98);