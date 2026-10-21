__d("WAWebUnifiedResponseScrollSettle", [
    "Promise",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebDocumentFlushed",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 12;
    const d = 5000;
    const m = 2000;
    const p = 24;
    function _(e, t, n, r) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            const e_scrollHeight = e.scrollHeight;
            const a = yield h(t(), d, n);
            if (!a || r()) {
                return false;
            }
            return C(e, e_scrollHeight, c, Date.now() + m, n, r);
        });
        return f.apply(this, arguments);
    }
    function g(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Unified response scroll settle failed"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("ur-scroll-settle-failed");
    }
    function h(e, t, a) {
        if (a.aborted) {
            e.catch(r("WAWebNoop"));
            return (u || (u = n("Promise"))).resolve(false);
        }
        let i;
        let l = r("WAWebNoop");
        let s = false;
        const c = new (u || (u = n("Promise")))(function(e) {
            const n = function() {
                s = true;
                e(false);
            };
            i = self.setTimeout(n, t);
            l = n;
            a.addEventListener("abort", l);
        });
        return u.race([
            e.then(o("WAWebBoolFunc").returnTrue, (e)=>{
                if (s || a.aborted) {
                    return false;
                }
                return y(e);
            }),
            c
        ]).then((e)=>{
            if (i != null) {
                self.clearTimeout(i);
            }
            a.removeEventListener("abort", l);
            return e && !a.aborted;
        });
    }
    function y(e) {
        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "Unified response parser bundle failed to load"
        ]))).catching(r("getErrorSafe")(e)).sendLogs("ur-scroll-settle-parser-load");
        return false;
    }
    function C(e, t, n, r, o, a) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r, a, i) {
            if (n === 0 || (yield o("WAWebDocumentFlushed").documentFlushed({
                signal: a
            }), i() || Date.now() > r)) {
                return false;
            }
            if (e.scrollHeight >= t + p) {
                return true;
            }
            return C(e, t, n - 1, r, a, i);
        });
        return b.apply(this, arguments);
    }
    l.shouldReapplyScrollAfterUnifiedResponseLoad = _;
    l.reportScrollSettleFailure = g;
}, 98);