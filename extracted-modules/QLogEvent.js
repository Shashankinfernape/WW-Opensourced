__d("QLogEvent", [
    "DoubleKeyMap",
    "FBLogger",
    "NestedTimeRange",
    "QPLEvent",
    "SimpleHook",
    "performanceNavigationStart"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = new (o("DoubleKeyMap")).DoubleKeyMap;
    const c = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, t, r) || this;
            o.$QPLRange$p_1 = n;
            u.set(n, o.fullname(), o);
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.__onStart = function(n) {
            e.prototype.__onStart.call(this, n);
            this.$QPLRange$p_1.point(`${this.fullname()}_START`, {
                timestamp: n
            });
        };
        t_prototype.__onStop = function(n) {
            e.prototype.__onStop.call(this, n);
            this.$QPLRange$p_1.point(`${this.fullname()}_END`, {
                timestamp: n
            });
            u.delete(this.$QPLRange$p_1, this.fullname());
        };
        t_prototype.range = function(n) {
            if (!this.fullname().startsWith(o("NestedTimeRange").TIME_RANGE_LEVEL_SEPARATOR)) {
                r("FBLogger")("qpl").warn("Range %s cannot have subrange since root name does not start with /", this.fullname());
            }
            const a = o("NestedTimeRange").rangeFullName(this.fullname(), n);
            return u.get(this.$QPLRange$p_1, a) ?? new t(n, this.$QPLRange$p_1, this);
        };
        return t;
    })(o("NestedTimeRange").NestedTimeRange);
    const d = new (o("DoubleKeyMap")).DoubleKeyMap;
    const m = new (s = o("SimpleHook")).SimpleHook;
    const p = new s.SimpleHook;
    const _ = new s.SimpleHook;
    const f = new s.SimpleHook;
    const g = ((t)=>{
        function n(n, r = 0, a = 2, i = false, l) {
            let s;
            const u = (e || (e = o("QPLEvent"))).getMarkerId(n);
            s = t.call(this, `event_${u}`) || this;
            s.event = n;
            s.instanceKey = r;
            s.$QPLEvent$p_1 = a;
            s.isUserFlow = i;
            s.$QPLEvent$p_2 = l;
            d.set(u, r, s);
            return s;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.action = function(t) {
            this.$QPLEvent$p_1 = t;
            return this;
        };
        n_prototype.getAction = function() {
            return this.$QPLEvent$p_1;
        };
        n_prototype.setIsUserFlow = function(t) {
            this.isUserFlow = t;
            return this;
        };
        n_prototype.startFromNavStart = function() {
            this.start(r("performanceNavigationStart")());
            return this;
        };
        n_prototype.startFromTime = function(t) {
            this.start(t);
            return this;
        };
        n_prototype.__onStart = function(t) {
            this.$QPLEvent$p_2?.onStart(this, t);
            m.call(this, t);
        };
        n_prototype.__onStop = function(n) {
            this.$QPLEvent$p_2?.onStop(this, n);
            p.call(this, n);
            u.deleteAll(this);
            d.delete((e || (e = o("QPLEvent"))).getMarkerId(this.event), this.instanceKey);
        };
        n_prototype.range = function(t) {
            return u.get(this, t) ?? new c(t, this);
        };
        n_prototype.point = function(t, n = {}) {
            this.$QPLEvent$p_2?.onPoint(this, t, n);
            _.call(this, t, n);
            return this;
        };
        n_prototype.annotate = function(t) {
            this.$QPLEvent$p_2?.onAnnotate(this, t);
            f.call(this, t);
            return this;
        };
        return n;
    })(o("NestedTimeRange").NestedTimeRange);
    function h(t, n = 0, r) {
        return d.get((e || (e = o("QPLEvent"))).getMarkerId(t), n) ?? new g(t, n, 2, false, r);
    }
    l.OnEventStart = m;
    l.OnEventStop = p;
    l.OnEventPoint = _;
    l.OnEventAnnotate = f;
    l.QPLEvent = g;
    l.event = h;
}, 98);