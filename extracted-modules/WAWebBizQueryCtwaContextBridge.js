__d("WAWebBizQueryCtwaContextBridge", [
    "Promise",
    "WAWebQueryCtwaContextJob",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ context, phone, sourceUrl }) {
        if (phone == null || phone === "" || sourceUrl == null || sourceUrl === "" || context == null || context === "") {
            return (e || (e = n("Promise"))).reject(r("err")("Invalid params passed to fetchCtwaContextData"));
        }
        const l = r("WAWebQueryCtwaContextJob")(phone, context, sourceUrl);
        return l;
    }
    l.fetchCtwaContextData = s;
}, 98);