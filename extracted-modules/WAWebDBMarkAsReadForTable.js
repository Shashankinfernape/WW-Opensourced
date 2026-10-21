__d("WAWebDBMarkAsReadForTable", [
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return o("WAWebModelStorageUtils").getStorage().lock([
            e
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const o = yield n.anyOf([
                    "msgKey"
                ], t);
                if (o.length !== 0) {
                    yield n.bulkCreateOrReplace(o.map((e)=>babelHelpers.extends({}, e, {
                            read: true
                        })));
                }
                return o.map(({ msgKey })=>r("WAWebMsgKey").from(msgKey));
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    l.markAsReadForTable = e;
}, 98);