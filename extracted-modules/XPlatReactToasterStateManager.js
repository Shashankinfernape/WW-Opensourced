__d("XPlatReactToasterStateManager", [
    "FBLogger",
    "clearTimeout",
    "removeFromArray",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {};
    function s(e) {
        let t = false;
        return function() {
            if (!t) {
                e();
                t = true;
            }
        };
    }
    const u = (()=>{
        function t({ callbackScheduler, maxQueuedToasts, minimumDurationMs }) {
            this.$1 = 0;
            this.$2 = new Map;
            this.$3 = [];
            this.$4 = [];
            this.$5 = null;
            this.$7 = callbackScheduler;
            this.$6 = maxQueuedToasts;
            this.$8 = minimumDurationMs;
        }
        const t_prototype = t.prototype;
        t_prototype.setMinimumDurationMs = function(t) {
            this.$8 = t;
        };
        t_prototype.getMinimumDurationMs = function() {
            return this.$8;
        };
        t_prototype.push = function(t, duration) {
            const e = `toast-${this.$1++}`;
            const node = {
                duration,
                expired: false,
                id: e,
                shown: false,
                timer: null,
                value: t
            };
            this.$9({
                node,
                type: "PUSH"
            });
            return e;
        };
        t_prototype.replace = function(t, n) {
            this.$9({
                id: t,
                type: "REPLACE",
                value: n
            });
        };
        t_prototype.shown = function(t) {
            this.$9({
                id: t,
                type: "SHOWN"
            });
        };
        t_prototype.delete = function(t) {
            this.$9({
                id: t,
                type: "DELETE"
            });
        };
        t_prototype.expire = function(t) {
            this.$9({
                id: t,
                type: "EXPIRE"
            });
        };
        t_prototype.hidden = function(t) {
            this.$9({
                id: t,
                type: "HIDDEN"
            });
        };
        t_prototype.stopTimer = function(t) {
            this.$9({
                id: t,
                type: "STOP_TIMER"
            });
        };
        t_prototype.resetTimer = function(t) {
            this.$9({
                id: t,
                type: "RESET_TIMER"
            });
        };
        t_prototype.getState = function() {
            return Object.fromEntries(this.$2);
        };
        t_prototype.getEmptyState = function() {
            return e;
        };
        t_prototype.addListener = function(t) {
            const e = this;
            this.$3.push(t);
            return {
                remove: s(()=>{
                    r("removeFromArray")(e.$3, t);
                })
            };
        };
        t_prototype.$10 = function(t) {
            if (this.$5 == null || t.priority > this.$5.priority) {
                this.$5 = t;
            }
        };
        t_prototype.registerView = function(t, n = 1) {
            const e = this;
            const o = {
                handler: t,
                priority: n
            };
            this.$4.push(o);
            this.$10(o);
            this.$11();
            return {
                remove: s(()=>{
                    r("removeFromArray")(e.$4, o);
                    if (e.$5 === o) {
                        e.$5 = null;
                        e.$4.forEach((t)=>e.$10(t));
                    }
                })
            };
        };
        t_prototype.$9 = function(t) {
            const e = this.$2;
            switch(t.type){
                case "PUSH":
                    {
                        const n = t.node;
                        this.$2 = new Map([].concat(Array.from(this.$2), [
                            [
                                n.id,
                                n
                            ]
                        ]));
                        if (this.$6 !== 0) {
                            const r = Array.from(this.$2.values()).filter((e)=>!e.shown && !e.expired);
                            if (r.length > this.$6) {
                                const o = r[0];
                                this.delete(o.id);
                            }
                        }
                    }
                    break;
                case "SHOWN":
                    if (this.$2.has(t.id) && !this.$12(t.id).shown) {
                        const a = babelHelpers.extends({}, this.$12(t.id), {
                            shown: true
                        });
                        this.$2 = new Map([].concat(Array.from(this.$2), [
                            [
                                t.id,
                                this.$13(a)
                            ]
                        ]));
                    }
                    break;
                case "EXPIRE":
                    if (this.$2.has(t.id)) {
                        const i = babelHelpers.extends({}, this.$12(t.id), {
                            expired: true
                        });
                        this.$2 = new Map([].concat(Array.from(this.$2), [
                            [
                                t.id,
                                this.$14(i)
                            ]
                        ]));
                        this.$15(i);
                    }
                    break;
                case "HIDDEN":
                    if (this.$2.has(t.id)) {
                        const l = this.$12(t.id);
                        if (l.shown || l.expired) {
                            this.$2 = new Map(this.$2);
                            this.$2.delete(t.id);
                            this.$14(l);
                        }
                    }
                    break;
                case "DELETE":
                    if (this.$2.has(t.id)) {
                        const s = this.$12(t.id);
                        this.$2 = new Map(this.$2);
                        this.$2.delete(t.id);
                        this.$14(s);
                    }
                    break;
                case "REPLACE":
                    if (this.$2.has(t.id)) {
                        const u = this.$12(t.id);
                        this.$2 = new Map([].concat(Array.from(this.$2), [
                            [
                                t.id,
                                babelHelpers.extends({}, u, {
                                    value: t.value
                                })
                            ]
                        ]));
                    }
                    break;
                case "STOP_TIMER":
                    if (this.$2.has(t.id) && this.$16(this.$12(t.id))) {
                        const c = babelHelpers.extends({}, this.$12(t.id));
                        this.$2 = new Map([].concat(Array.from(this.$2), [
                            [
                                t.id,
                                this.$14(c)
                            ]
                        ]));
                    }
                    break;
                case "RESET_TIMER":
                    if (this.$2.has(t.id) && !this.$16(this.$12(t.id))) {
                        const d = babelHelpers.extends({}, this.$12(t.id));
                        this.$2 = new Map([].concat(Array.from(this.$2), [
                            [
                                t.id,
                                this.$13(d)
                            ]
                        ]));
                    }
                    break;
                default:
                    t.type;
            }
            if (e !== this.$2) {
                this.$11();
            }
        };
        t_prototype.$11 = function() {
            const e = this;
            this.$3.forEach((t)=>e.$7(function() {
                    t();
                }));
            this.$4.forEach((t)=>e.$7(function() {
                    t.handler(t === e.$5 ? e.getState() : e.getEmptyState());
                }));
        };
        t_prototype.$13 = function(t) {
            const e = this;
            if (t.duration !== null && t.timer == null) {
                let n = t.duration;
                if (this.$8 != null && n != null && this.$8 > n) {
                    n = this.$8;
                }
                t.timer = r("setTimeout")(function() {
                    e.expire(t.id);
                }, n);
            }
            return t;
        };
        t_prototype.$14 = function(t) {
            if (t.timer != null) {
                r("clearTimeout")(t.timer);
                t.timer = null;
            }
            return t;
        };
        t_prototype.$15 = function(t) {
            const e = this;
            this.$14(t);
            const n = t.id;
            r("setTimeout")(function() {
                e.delete(n);
            }, 1000);
        };
        t_prototype.$16 = function(t) {
            return t.timer != null;
        };
        t_prototype.$12 = function(t) {
            const e = this.$2.get(t);
            if (e == null) {
                throw r("FBLogger")("comet_ui").mustfixThrow("Toast with given identifier was not found");
            }
            return e;
        };
        t.getInstance = function(n) {
            if (t.$17 == null) {
                t.$17 = new t(n);
            }
            return t.$17;
        };
        t.resetInstance_DO_NOT_USE = function() {
            t.$17 = null;
        };
        return t;
    })();
    l.default = u;
}, 98);