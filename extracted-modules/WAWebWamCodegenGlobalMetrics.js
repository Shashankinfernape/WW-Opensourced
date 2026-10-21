__d("WAWebWamCodegenGlobalMetrics", [
    "WAWebWamCodegenUtils",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return typeof e === "number" && e === Math.floor(e);
    }
    const s = function({ id: t, name, type }) {
        this.name = name;
        this.id = t;
        this.type = type;
        if (typeof type === "object") {
            const i = new Set(Object.values(type));
            this.validator = function(e) {
                return i.has(e);
            };
        } else {
            if (type === o("WAWebWamCodegenUtils").TYPES.INTEGER || type === o("WAWebWamCodegenUtils").TYPES.TIMER) {
                this.validator = e;
            } else {
                this.validator = type;
            }
        }
    };
    const u = ((e)=>{
        function t(t, n, r, o) {
            let a;
            a = e.call(this, {
                id: n,
                name: t,
                type: r
            }) || this;
            a.channels = o;
            return a;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s);
    const c = (()=>{
        function e() {
            this.$1 = {};
            this.$2 = new Map;
        }
        const t = e.prototype;
        t.$3 = function(t, n) {
            return `${t}::${n}`;
        };
        t.getEvent = function(t, n) {
            const e = this.$3(t, n);
            return r("nullthrows")(this.$1[e], e);
        };
        t.define = function({ eventName: e, fieldName: n, id: r, type: o }) {
            const a = this.$3(e, n);
            if (!(a in this.$1)) {
                this.$1[a] = new s({
                    id: r,
                    name: n,
                    type: o
                });
            }
            return this.$1[a];
        };
        t.defineGlobal = function(t, n, o, a) {
            if (!this.$2.has(t)) {
                this.$2.set(t, new u(t, n, o, a));
            }
            return r("nullthrows")(this.$2.get(t), t);
        };
        t.hasGlobal = function(t) {
            return this.$2.has(t);
        };
        t.getGlobal = function(t) {
            return r("nullthrows")(this.$2.get(t), t);
        };
        return e;
    })();
    l.GlobalMetric = u;
    l.Metrics = c;
}, 98);