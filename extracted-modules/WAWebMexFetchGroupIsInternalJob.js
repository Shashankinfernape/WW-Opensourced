__d("WAWebMexFetchGroupIsInternalJob", [
    "WAWebMexClient",
    "WAWebMexFetchGroupIsInternalJobQuery.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== void 0 ? e : e = n("WAWebMexFetchGroupIsInternalJobQuery.graphql");
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = yield o("WAWebMexClient").fetchQuery(s, {
                id: e
            });
            return n.xwa2_group_query_by_id?.properties?.internal === true;
        });
        return c.apply(this, arguments);
    }
    l.mexFetchGroupIsInternal = u;
}, 98);