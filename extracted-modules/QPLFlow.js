__d("QPLFlow", [
    "QPLUserFlow",
    "Random",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = 0;
    const s = "FinalizationRegistry" in self ? new FinalizationRegistry(function({ notClosedEvent }) {
        notClosedEvent();
    }) : null;
    function u(e, t) {
        if (s != null) {
            const n = s;
            const o = e.getQPLAttrs().instanceKey;
            n.register(e, {
                notClosedEvent: function() {
                    r("QPLUserFlow").endFailure(t, "event-not-closed", {
                        instanceKey: o
                    });
                }
            }, e);
        }
    }
    function c(e, t) {
        const n = m(e, t);
        n.start(t?.annotations);
        return n;
    }
    function d(e, t) {
        return m(e, t);
    }
    function m(t, n) {
        const a = n?.instanceKey ?? e++;
        const i = n?.timeoutInMs;
        let l = false;
        var c = {
            addAnnotations: function(n) {
                r("QPLUserFlow").addAnnotations(t, n, {
                    instanceKey: a
                });
            },
            addPoint: function(n, o) {
                r("QPLUserFlow").addPoint(t, n, {
                    instanceKey: a
                });
                if (o != null && t != null) {
                    r("QPLUserFlow").addAnnotations(t, o, {
                        instanceKey: a
                    });
                }
            },
            endCancel: function(cancelReason, o) {
                r("QPLUserFlow").endCancel(t, {
                    annotations: o,
                    cancelReason,
                    instanceKey: a
                });
                l = false;
                s?.unregister(c);
            },
            endFail: function(n, o) {
                r("QPLUserFlow").endFailure(t, n, {
                    annotations: o,
                    instanceKey: a
                });
                l = false;
                s?.unregister(c);
            },
            endSuccess: function(n) {
                r("QPLUserFlow").endSuccess(t, {
                    annotations: n,
                    instanceKey: a
                });
                l = false;
                s?.unregister(c);
            },
            getQPLAttrs: function() {
                return {
                    instanceKey: a
                };
            },
            isActive: function() {
                return l;
            },
            start: function(n) {
                l = true;
                r("QPLUserFlow").start(t, {
                    annotations: n,
                    instanceKey: a,
                    timeoutInMs: i ?? undefined
                });
                u(c, t);
            }
        };
        return c;
    }
    function p() {
        let e = true;
        return {
            addAnnotations: function(t) {},
            addPoint: function(t, n) {},
            endCancel: function(t) {},
            endFail: function(n, r) {
                e = false;
            },
            endSuccess: function(n) {
                e = false;
            },
            getQPLAttrs: function() {
                return {
                    instanceKey: 0
                };
            },
            isActive: function() {
                return e;
            },
            start: function(t) {}
        };
    }
    function _(e, t, n) {
        if (o("Random").coinflip(t)) {
            return c(e, n);
        }
        return p();
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = yield t();
                e.endSuccess();
                return n;
            } catch (error) {
                e.endFail("error", {
                    string: {
                        error_name: r("getErrorSafe")(error).name
                    }
                });
                throw error;
            }
        });
        return g.apply(this, arguments);
    }
    const h = (()=>{
        function e(e, t) {
            this.qplFlow = e;
            this.subspanName = t;
        }
        const e_prototype = e.prototype;
        e_prototype.start = function(t) {
            this.qplFlow.addPoint(`${this.subspanName}_start`, t);
        };
        e_prototype.end = function(t) {
            this.qplFlow.addPoint(`${this.subspanName}_end`, t);
        };
        e_prototype.endFail = function(t) {
            const n = babelHelpers.extends({}, t, {
                bool: babelHelpers.extends({}, t?.bool, {
                    [`${this.subspanName}_failed`]: true
                })
            });
            this.end(n);
        };
        e.start = function(n, r) {
            const t = new e(n, r);
            t.start();
            return t;
        };
        e.wrapInSubspan = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
                const o = e.start(t, n);
                try {
                    const a = yield r();
                    o.end();
                    return a;
                } catch (error) {
                    o.endFail();
                    throw error;
                }
            });
            function r(e, n, r) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return e;
    })();
    l.startQPLFlow = c;
    l.continueQPLFlow = d;
    l.makeQplFlow = m;
    l.startNoopQPLFlow = p;
    l.startQplFlowWithCoinflip = _;
    l.endWith = f;
    l.QplSubspan = h;
}, 98);