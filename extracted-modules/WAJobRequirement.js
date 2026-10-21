__d("WAJobRequirement", [
    "Promise",
    "WALogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = (()=>{
        function t(e) {
            const t = this;
            this.$1 = (s || (s = n("Promise"))).resolve();
            this.$2 = true;
            this.$3 = null;
            this.$4 = function() {
                const e = t.$3;
                if (e != null) {
                    t.$3 = null;
                    return (s || (s = n("Promise"))).all(e).then(t.$4);
                }
                t.$2 = true;
            };
            this.name = e;
        }
        const r = t.prototype;
        r.addBlocker = function(r) {
            const t = this;
            const a = r.catch((n)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "JobRequirement[",
                    "] blocker errored ",
                    ""
                ])), t.name, n).sendLogs("job-blocker-rejected");
            });
            if (this.$2) {
                this.$2 = false;
                this.$1 = (s || (s = n("Promise"))).all([
                    this.$1,
                    a
                ]).then(this.$4);
            } else {
                const i = this.$3;
                if (i != null) {
                    i.push(a);
                } else {
                    this.$3 = [
                        a
                    ];
                }
            }
        };
        r.waitUntilSatisfied = function() {
            return this.$1;
        };
        r.isSatisfied = function() {
            return this.$2;
        };
        r.isSatisfiable = function() {
            return true;
        };
        return t;
    })();
    function c(e, t) {
        const r = e.filter((e)=>!e.isSatisfiable());
        if (r.length > 0) {
            const o = r.map((e)=>e.name);
            return function(e) {
                t?.("unsatisfiable", o, e);
                return r[0].waitUntilSatisfied();
            };
        }
        let a = e.map(()=>(s || (s = n("Promise"))).resolve());
        let i = (s || (s = n("Promise"))).resolve();
        let l = null;
        const u = function() {
            if (a.every((t, n)=>t === e[n].waitUntilSatisfied())) {
                l = null;
                return;
            }
            const t = [];
            const r = e.map((e)=>{
                const n = e.waitUntilSatisfied();
                if (!e.isSatisfied()) {
                    t.push(e.name);
                    n.then(()=>{
                        const n = t.indexOf(e.name);
                        t.splice(n, 1);
                    });
                }
                return n;
            });
            a = r;
            l = t;
            return (s || (s = n("Promise"))).all(r).then(u);
        };
        return function(e) {
            if (l == null) {
                const n = u();
                if (n != null) {
                    i = i.then(()=>n);
                }
            }
            t?.(l == null ? "satisfied" : "unsatisfied", l, e);
            return i;
        };
    }
    l.JobRequirement = u;
    l.joinRequirements = c;
}, 98);