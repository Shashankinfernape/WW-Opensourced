__d("WAWebSingleSelection", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t = [], n, r = "next") {
            let o;
            o = e.call(this) || this;
            o.list = t;
            o.index = -1;
            o.value = undefined;
            o.getter = n;
            o.deleteDir = r;
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.init = function(t = [], n = false) {
            let e = n;
            let r;
            let o;
            this.list = t;
            if (this.value != null) {
                if (t.length === 0) {
                    this.unset();
                    return;
                }
                r = t.indexOf(this.value);
                if (r > -1) {
                    if (r === this.index) {
                        return;
                    }
                    o = true;
                    e = false;
                } else if (!e || this.index < 0) {
                    r = -1;
                } else {
                    const a = this.deleteDir === "prev" ? -1 : 0;
                    r = this.index + a;
                    r = Math.max(r, 0);
                    r = Math.min(r, t.length - 1);
                    o = r > -1;
                }
                this.set(r, e, o);
            }
        };
        t_prototype.unset = function() {
            const value = this.value;
            this.value = undefined;
            this.index = -1;
            if (value != null) {
                this.$SingleSelection$p_1(value, false);
                this.trigger("unset");
            }
        };
        t_prototype.reset = function(t = true, n = true) {
            if (!(this.index < 0) && this.value != null) {
                this.$SingleSelection$p_1(this.value, n === true ? "focus" : "select", t);
            }
        };
        t_prototype.set = function(t, n = true, r = true) {
            if (this.list.length) {
                const e = Math.min(Math.max(t, -1), this.list.length - 1);
                const previous = this.value;
                const a = e > -1 ? this.list[e] : undefined;
                if (a != null) {
                    this.value = a;
                    this.$SingleSelection$p_1(a, n === true ? "focus" : "select");
                } else if (r === true) {
                    this.value = undefined;
                }
                if (r === true && previous != null && previous !== a) {
                    this.$SingleSelection$p_1(previous, false);
                }
                this.trigger("change", {
                    current: this.value,
                    previous
                });
                this.index = e;
            }
        };
        t_prototype.getVal = function() {
            return this.value;
        };
        t_prototype.setVal = function(t, n = true) {
            const e = this.list.indexOf(t);
            if (e > -1) {
                this.set(e, n);
            } else {
                this.unset();
                this.value = t;
            }
        };
        t_prototype.setFirst = function(t = true) {
            if (this.list.length !== 0) {
                this.set(0, t, true);
            }
        };
        t_prototype.setLast = function(t = true) {
            if (this.list.length !== 0) {
                this.set(this.list.length - 1, t, true);
            }
        };
        t_prototype.setPrev = function(t = true, n = false) {
            if (this.list.length !== 0) {
                this.set(this.prev(n), t, true);
            }
        };
        t_prototype.setNext = function(t = true, n = false) {
            if (this.list.length !== 0) {
                this.set(this.next(n), t, true);
            }
        };
        t_prototype.prev = function(t = false) {
            if (this.list.length === 0) {
                return -1;
            }
            if (t) {
                if (this.index - 1 < 0) {
                    return this.list.length - 1;
                }
                return this.index - 1;
            }
            if (this.index === -1) {
                return -1;
            }
            return this.index - 1;
        };
        t_prototype.next = function(t = false) {
            if (this.list.length === 0) {
                return -1;
            }
            if (t) {
                if (this.index + 1 > this.list.length - 1) {
                    return 0;
                }
                return this.index + 1;
            }
            return Math.min(this.index + 1, this.list.length - 1);
        };
        t_prototype.$SingleSelection$p_1 = function(t, ...args) {
            if (this.getter != null) {
                for(var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++){
                    n[r - 1] = arguments[r];
                }
                this.trigger(...[
                    this.getter(t)
                ].concat(n));
            }
        };
        t_prototype.getList = function() {
            return this.list;
        };
        t_prototype.setIndex = function(t) {
            this.set(t);
        };
        t_prototype.setItemKey = function(t) {
            const e = this;
            if (this.getter != null) {
                const n = this.list.findIndex((n)=>e.getter?.(n) === t);
                if (n > -1) {
                    this.set(n);
                } else {
                    this.unset();
                }
            }
        };
        return t;
    })(r("WAWebEventEmitter"));
    l.default = e;
}, 98);