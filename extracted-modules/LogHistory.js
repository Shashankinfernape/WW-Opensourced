__d("LogHistory", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 500;
    const l = {};
    const s = [];
    function u(level, category, r, o) {
        const args = o[0];
        if (!(typeof args !== "string" || o.length !== 1)) {
            s.push({
                date: Date.now(),
                level,
                category,
                event: r,
                args
            });
            if (s.length > e) {
                s.shift();
            }
        }
    }
    class c {
        constructor(e){
            this.category = e;
        }
        debug(t, ...n) {
            u("debug", this.category, t, n);
            return this;
        }
        log(t, ...n) {
            u("log", this.category, t, n);
            return this;
        }
        warn(t, ...n) {
            u("warn", this.category, t, n);
            return this;
        }
        error(t, ...n) {
            u("error", this.category, t, n);
            return this;
        }
    }
    function d(e) {
        if (!l[e]) {
            l[e] = new c(e);
        }
        return l[e];
    }
    function m() {
        return s;
    }
    function p() {
        s.length = 0;
    }
    function _(e) {
        return e.map((e)=>{
            const t = new Date(e.date).toISOString();
            return [
                t,
                e.level,
                e.category,
                e.event,
                e.args
            ].join(" | ");
        }).join("\n");
    }
    i.getInstance = d;
    i.getEntries = m;
    i.clearEntries = p;
    i.formatEntries = _;
}, 66);