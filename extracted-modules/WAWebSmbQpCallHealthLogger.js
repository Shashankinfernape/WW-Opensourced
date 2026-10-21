__d("WAWebSmbQpCallHealthLogger", [
    "WAWebSmbQpCallHealthWamEvent",
    "WAWebWamEnumFetchMechanismEnum",
    "WAWebWamEnumFetchResultEnum"
], function(t, n, r, o, a, i, l) {
    const e = 200;
    function s(t, n) {
        const r = n != null && n.length > e ? n.substring(0, e) : n;
        const a = new (o("WAWebSmbQpCallHealthWamEvent")).SmbQpCallHealthWamEvent(babelHelpers.extends({
            fetchMechanism: o("WAWebWamEnumFetchMechanismEnum").FETCH_MECHANISM_ENUM.GRAPHQL,
            fetchResult: t === "success" ? o("WAWebWamEnumFetchResultEnum").FETCH_RESULT_ENUM.SUCCESS : o("WAWebWamEnumFetchResultEnum").FETCH_RESULT_ENUM.EXCEPTION
        }, r != null ? {
            fetchExceptionMessage: r
        } : void 0));
        a.commit();
    }
    l.logSmbQpCallHealth = s;
}, 98);