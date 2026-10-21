__d("WAWebLazyLoadedRetriable", [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(t) {
        return function(n, r) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Loadable error: ",
                ""
            ])), n.stack);
            const a = r > 1 ? "s" : "";
            const i = `loadable:${t} failed to load after [${r}] attempt${a}`;
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to load a component"
            ]))).sendLogs(i);
        };
    }
    function _(e, t) {
        try {
            t();
        } catch (t) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebLazyLoadedRetriable: ",
                " hook threw"
            ])), e);
        }
    }
    function f(e, t) {
        try {
            return t();
        } catch (t) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebLazyLoadedRetriable: ",
                " predicate threw"
            ])), e);
            return false;
        }
    }
    const g = 10;
    function h(e, t, a) {
        const i = p(t);
        let l = "INIT";
        let s;
        let u = 0;
        return function c() {
            switch(l){
                case "INIT":
                case "FAILURE":
                    l = "INFLIGHT";
                    s = e().then((e)=>{
                        const t = !!e;
                        if (!t) {
                            i(r("err")("Lazyload response is empty"), u);
                        }
                        if (u > 0 && t) {
                            _("onRetrySuccess", function() {
                                if (!(a == null || a.onRetrySuccess == null)) {
                                    a.onRetrySuccess(u);
                                }
                            });
                        }
                        l = "SUCCESS";
                        return e;
                    }).catch((()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            const n = r("getErrorSafe")(e);
                            l = "FAILURE";
                            u++;
                            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "Lazyload failure for component ",
                                " - attempt ",
                                " of ",
                                ""
                            ])), t, u, g + 1);
                            _("onAttemptFailure", function() {
                                if (!(a == null || a.onAttemptFailure == null)) {
                                    a.onAttemptFailure(n, u);
                                }
                            });
                            const s = f("isTerminalError", function() {
                                return (a == null || a.isTerminalError == null ? void 0 : a.isTerminalError(n)) === true;
                            });
                            if (!s && u <= g) {
                                yield o("WAPromiseDelays").delayMs(u * 1000);
                                return c();
                            }
                            if (a?.onFinalFailure != null) {
                                _("onFinalFailure", function() {
                                    a.onFinalFailure?.(n, u);
                                });
                            } else {
                                i(n, u);
                            }
                            throw e;
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })());
                    return s;
                case "INFLIGHT":
                case "SUCCESS":
                    return r("nullthrows")(s);
                default:
                    return (m || (m = n("Promise"))).reject(r("err")("retriable_promise_hoc:promiseStatus is invalid"));
            }
        };
    }
    l.default = h;
}, 98);