__d("WAConcurrentPriorityPromiseQueue", [
    "FBLogger",
    "Promise",
    "WAPriorityQueue",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (()=>{
        function t(e, t, n = 0) {
            this.$1 = e;
            this.$2 = t;
            this.$3 = n;
            this.$4 = new Map;
            this.$5 = new Map;
        }
        const t_prototype = t.prototype;
        t_prototype.clearQueue = function() {
            this.$5.clear();
            this.$4.clear();
        };
        t_prototype.enqueue = function(r, o) {
            let t;
            let a;
            const i = new (e || (e = n("Promise")))(function(e, n) {
                t = e;
                a = n;
            });
            this.$6(babelHelpers.extends({}, o, {
                run: (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        try {
                            const e = yield r();
                            t(e);
                        } catch (error) {
                            a(error);
                        }
                    });
                    function o() {
                        return e.apply(this, arguments);
                    }
                    return o;
                })()
            }));
            this.$7();
            return i;
        };
        t_prototype.$6 = function(t) {
            const e = this.$8(t.group);
            e.push(t);
        };
        t_prototype.$9 = function() {
            return this.$10();
        };
        t_prototype.$7 = function() {
            while(this.getRunningTasksCount() < this.$1){
                const e = this.$9();
                if (e == null) {
                    break;
                }
                this.$11(e).catch((e)=>{
                    r("FBLogger")("wmi_wa").catching(r("getErrorSafe")(e)).mustfix("WAConcurrentPriorityPromiseQueue: Task execution failed");
                });
            }
        };
        t_prototype.$11 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const { group, run, signal } = e;
                const a = this.$12(group);
                if (signal != null && signal.aborted) {
                    setTimeout(()=>t.$7(), this.$3);
                    return;
                }
                a.add(e);
                try {
                    yield run();
                } finally{
                    a.delete(e);
                    setTimeout(()=>t.$7(), this.$3);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$10 = function() {
            for (const e of this.$5.values()){
                const t = e.peek();
                if (t && !this.$13(t.group)) {
                    return e.pull();
                }
            }
            return null;
        };
        t_prototype.getRunningTasksCount = function() {
            let e = 0;
            for (const t of this.$4.values()){
                e += t.size;
            }
            return e;
        };
        t_prototype.getEnqueuedTasksCount = function() {
            let e = 0;
            for (const t of this.$5.values()){
                e += t.size();
            }
            return e;
        };
        t_prototype.$12 = function(t) {
            if (!this.$4.has(t)) {
                const e = new Set;
                this.$4.set(t, e);
                return e;
            }
            return r("nullthrows")(this.$4.get(t));
        };
        t_prototype.$13 = function(t) {
            const e = this.$4.get(t);
            if (e == null) {
                return false;
            }
            return e.size >= this.$14(t);
        };
        t_prototype.$8 = function(t) {
            if (!this.$5.has(t)) {
                const e = new (r("WAPriorityQueue"))(function(e) {
                    return e.priority;
                });
                this.$5.set(t, e);
            }
            return r("nullthrows")(this.$5.get(t));
        };
        t_prototype.$14 = function(t) {
            const e = this.$2[t];
            return e ?? Infinity;
        };
        return t;
    })();
    l.default = s;
}, 98);