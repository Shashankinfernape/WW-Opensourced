__d("RequireDeferredReference", [
    "CallbackDependencyManager",
    "Promise",
    "RequireDeferredFactoryEvent",
    "ifRequireable",
    "ifRequired",
    "performanceNow",
    "promiseDone",
    "requireWeak"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = 1;
    const c = 2;
    const d = 16;
    const m = u | c | d;
    let p = null;
    function _() {
        if (p == null) {
            p = new (r("CallbackDependencyManager"));
        }
        return p;
    }
    function f(e, t) {
        return `${e}:${t}`;
    }
    const g = new Set;
    const h = (()=>{
        function t(e) {
            this.$1 = e;
        }
        const t_prototype = t.prototype;
        t_prototype.setRequireDeferredForDisplay = function(t) {
            this.$2 = t;
        };
        t_prototype.isRequireDeferredForDisplay = function() {
            return this.$2;
        };
        t_prototype.getModuleId = function() {
            const e = this.$1;
            return e;
        };
        t_prototype.getModuleIdAsRef = function() {
            return this.$1;
        };
        t_prototype.preload = function() {};
        t_prototype.getModuleIfRequired = function() {
            return r("ifRequired").call(null, this.$1, function(e) {
                return e;
            });
        };
        t_prototype.getModuleIfRequireable = function() {
            return r("ifRequireable").call(null, this.$1, function(e) {
                return e;
            });
        };
        t_prototype.isAvailableInSSR_DO_NOT_USE = function() {
            return true;
        };
        t_prototype.$3 = function(t) {
            const e = this;
            const n = r("ifRequireable")("InteractionTracingMetrics", function(t) {
                return t.currentInteractionLogger().addRequireDeferred(e.getModuleId(), (s || (s = r("performanceNow")))());
            });
            let o = false;
            const a = (a, i)=>{
                n?.((s || (s = r("performanceNow")))(), i);
                if (!o) {
                    t(a);
                }
            };
            r("ifRequireable").call(null, this.$1, function(e) {
                return a(e, true);
            }, function() {
                r("requireWeak").call(null, e.$1, function(e) {
                    return a(e, false);
                });
            });
            return {
                remove: function() {
                    o = true;
                }
            };
        };
        t_prototype.load = function() {
            const t = this;
            return new (e || (e = n("Promise")))(function(e) {
                return t.$3(e);
            });
        };
        t_prototype.__setRef = function(t) {
            return this;
        };
        t_prototype.onReadyImmediately = function(t) {
            return this.$3(t);
        };
        t_prototype.onReady = function(o) {
            let t = false;
            const a = this.$3(function(a) {
                r("promiseDone")((e || (e = n("Promise"))).resolve().then(()=>{
                    if (!t) {
                        o(a);
                    }
                }));
            });
            return {
                remove: function() {
                    t = true;
                    a.remove();
                }
            };
        };
        t_prototype.loadImmediately = function(t) {
            return this.$3(t);
        };
        t.getRDModuleName_DO_NOT_USE = function(t) {
            return `rd:${t}`;
        };
        t.unblock = function(o, a) {
            const e = _();
            const i = (i)=>{
                if (!g.has(i)) {
                    g.add(i);
                    e.registerCallback(function() {
                        define(t.getRDModuleName_DO_NOT_USE(i), [
                            i
                        ], function() {
                            n.call(null, i);
                        }, m);
                    }, Array.from(r("RequireDeferredFactoryEvent").members(), function(e) {
                        return f(i, e);
                    }));
                }
                e.satisfyPersistentDependency(f(i, a));
            };
            for (const l of o){
                i(l);
            }
        };
        return t;
    })();
    l.default = h;
}, 98);