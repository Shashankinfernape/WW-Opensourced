__d("promiseDone", [
    "ErrorPubSub",
    "PromiseAnnotate",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        const t = r("getErrorSafe")(e);
        t.loggingSource = "PROMISE_DONE";
        (s || (s = r("ErrorPubSub"))).reportError(t);
    }
    function c(e) {
        return (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                try {
                    const n = yield e(t);
                    return n;
                } catch (error) {
                    u(error);
                }
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
    }
    function d(t, n, r) {
        const a = r != null ? c(r) : null;
        const i = arguments.length > 1 ? t.then(n, a) : t;
        if (r == null) {
            i.then(null, u);
        }
        const l = (e || (e = o("PromiseAnnotate"))).getDisplayName(t);
        if (l != null) {
            (e || (e = o("PromiseAnnotate"))).setDisplayName(i, l);
        }
    }
    l.default = d;
}, 98);