__d("Arbiter", [
    "invariant",
    "ArbiterToken",
    "CallbackDependencyManager",
    "ErrorGuard",
    "EventEmitter",
    "EventEmitterWithHolding",
    "EventHolder"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    function u(e) {
        if (Array.isArray(e)) {
            return e;
        }
        return [
            e
        ];
    }
    function c(e) {
        if (e instanceof d || e === d) {
            return e;
        }
        return d;
    }
    var d = (()=>{
        function t() {
            const e = new (r("EventEmitter"));
            this.$3 = new m;
            this.$2 = new (r("EventEmitterWithHolding"))(e, this.$3);
            this.$1 = new (r("CallbackDependencyManager"));
            this.$4 = [];
        }
        const t_prototype = t.prototype;
        t_prototype.subscribe = function(t, n, o) {
            const e = this;
            t = u(t);
            t.forEach((e)=>{
                if (!(e && typeof e === "string")) {
                    s(0, 1966, e);
                }
            });
            if (typeof n !== "function") {
                s(0, 1967, n);
            }
            o = o || "all";
            if (!(o === "new" || o === "all")) {
                s(0, 1968, o);
            }
            const a = t.map((t)=>{
                const r = function(o) {
                    return e.$5(n, t, o);
                };
                r.__SMmeta = n.__SMmeta;
                if (o === "new") {
                    return e.$2.addListener(t, r);
                }
                e.$4.push({});
                const a = e.$2.addRetroactiveListener(t, r);
                e.$4.pop();
                return a;
            });
            return new (r("ArbiterToken"))(this, a);
        };
        t_prototype.$5 = function(n, o, a) {
            const t = this.$4[this.$4.length - 1];
            if (t[o] !== false) {
                const i = (e || (e = r("ErrorGuard"))).applyWithGuard(n, null, [
                    o,
                    a
                ]);
                if (i === false) {
                    this.$2.releaseCurrentEvent();
                }
                t[o] = i;
            }
        };
        t_prototype.unsubscribeCurrentSubscription = function() {
            this.$2.removeCurrentListener();
        };
        t_prototype.releaseCurrentPersistentEvent = function() {
            this.$2.releaseCurrentEvent();
        };
        t_prototype.subscribeOnce = function(t, n, r) {
            const e = this;
            const o = this.subscribe(t, function(t, r) {
                e.unsubscribeCurrentSubscription();
                return n(t, r);
            }, r);
            return o;
        };
        t_prototype.unsubscribe = function(t) {
            if (!t.isForArbiterInstance(this)) {
                s(0, 1969);
            }
            t.unsubscribe();
        };
        t_prototype.inform = function(t, n, r) {
            const e = Array.isArray(t);
            t = u(t);
            r = r || "event";
            const o = r === "state" || r === "persistent";
            this.$4.push({});
            for (const i of t){
                if (!i) {
                    s(0, 1970, i);
                }
                this.$3.setHoldingBehavior(i, r);
                this.$2.emitAndHold(i, n);
                this.$6(i, n, o);
            }
            const l = this.$4.pop();
            if (e) {
                return l;
            }
            return l[t[0]];
        };
        t_prototype.query = function(t) {
            const e = this.$3.getHoldingBehavior(t);
            if (!(!e || e === "state")) {
                s(0, 1971, t);
            }
            let n = null;
            this.$3.emitToListener(t, function(e) {
                n = e;
            });
            return n;
        };
        t_prototype.registerCallback = function(t, n) {
            if (typeof t === "function") {
                return this.$1.registerCallback(t, n);
            }
            return this.$1.addDependenciesToExistingCallback(t, n);
        };
        t_prototype.$6 = function(t, n, r) {
            if (n !== null) {
                if (r) {
                    this.$1.satisfyPersistentDependency(t);
                } else {
                    this.$1.satisfyNonPersistentDependency(t);
                }
            }
        };
        t.subscribe = function(n, r, o) {
            return t.prototype.subscribe.apply(c(this), arguments);
        };
        t.unsubscribeCurrentSubscription = function() {
            return t.prototype.unsubscribeCurrentSubscription.apply(c(this));
        };
        t.releaseCurrentPersistentEvent = function() {
            return t.prototype.releaseCurrentPersistentEvent.apply(c(this));
        };
        t.subscribeOnce = function(n, r, o) {
            return t.prototype.subscribeOnce.apply(c(this), arguments);
        };
        t.unsubscribe = function(n) {
            return t.prototype.unsubscribe.apply(c(this), arguments);
        };
        t.inform = function(n, r, o) {
            return t.prototype.inform.apply(c(this), arguments);
        };
        t.informSingle = function(n, r, o) {
            return t.prototype.inform.apply(c(this), arguments);
        };
        t.query = function(n) {
            return t.prototype.query.apply(c(this), arguments);
        };
        t.registerCallback = function(n, r) {
            return t.prototype.registerCallback.apply(c(this), arguments);
        };
        t.$6 = function(n, r, o) {
            return t.prototype.$6.apply(c(this), arguments);
        };
        t.$5 = function(n, r, o) {
            return t.prototype.$5.apply(c(this), arguments);
        };
        return t;
    })();
    var m = ((e)=>{
        function t() {
            let t;
            t = e.call(this) || this;
            t.$ArbiterEventHolder1 = {};
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.setHoldingBehavior = function(t, n) {
            this.$ArbiterEventHolder1[t] = n;
        };
        t_prototype.getHoldingBehavior = function(t) {
            return this.$ArbiterEventHolder1[t];
        };
        t_prototype.holdEvent = function(n, ...args) {
            const t = this.$ArbiterEventHolder1[n];
            if (t !== "persistent") {
                this.$ArbiterEventHolder2(n);
            }
            if (t !== "event") {
                for(var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++){
                    a[i - 1] = arguments[i];
                }
                return e.prototype.holdEvent.call(...[
                    this,
                    n
                ].concat(a));
            }
        };
        t_prototype.$ArbiterEventHolder2 = function(t) {
            const e = this;
            this.emitToListener(t, function() {
                return e.releaseCurrentEvent();
            });
        };
        t_prototype.releaseEvent = function(n) {
            if (n) {
                e.prototype.releaseEvent.call(this, n);
            }
        };
        return t;
    })(r("EventHolder"));
    d.call(d);
    l.default = d;
}, 98);