__d("WAWebPromiseQueue", [
    "Promise",
    "WALogger",
    "WAPromiseQueue",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function r(e) {
            return t.call(this, e) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const a = r.prototype;
        a.wait = function() {
            return t.prototype.wait.call(this);
        };
        a.waitUntilResolved = (()=>{
            const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(r = 0) {
                const a = this;
                if (r > 9) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "PromiseQueue: wait called more than 10 times"
                    ]))).sendLogs("promise_queue_long_wait_time");
                    return;
                }
                const i = t.prototype.wait.call(this);
                return new (s || (s = n("Promise")))((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                        try {
                            yield i;
                            if (i !== t.prototype.wait.call(a)) {
                                yield a.waitUntilResolved(r + 1);
                            }
                            e();
                        } catch (e) {
                            n(e);
                        }
                    });
                    return function(t, n) {
                        return e.apply(this, arguments);
                    };
                })());
            });
            function a(e) {
                return r.apply(this, arguments);
            }
            return a;
        })();
        return r;
    })(o("WAPromiseQueue").PromiseQueue);
    l.PromiseQueue = u;
}, 98);