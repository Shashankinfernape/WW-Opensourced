__d("WALruCache", [
    "WALogger",
    "WAShiftTimer",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = function(t, n) {
        this.key = t;
        this.value = n;
        this.prev = null;
        this.next = null;
    };
    const u = (()=>{
        function t(e) {
            const t = this;
            this.$2 = new Map;
            this.purgeNow = function() {
                t.$15(t.$3);
            };
            this.$3 = e.sizeLimit;
            this.$7 = e.getSize;
            this.$8 = e.onPurge;
            this.$9 = e.shouldEvict ?? function() {
                return true;
            };
            this.$10 = e.onEvict;
            this.$11 = e.onAdd;
            this.$12 = e.onDelete;
            this.$4 = 0;
            this.$5 = new s("placeholder-head", null);
            this.$6 = new s("placeholder-tail", null);
            this.$5.next = this.$6;
            this.$6.prev = this.$5;
            this.$1 = new (o("WAShiftTimer")).ShiftTimer(function() {
                return t.purgeNow();
            });
        }
        const n = t.prototype;
        n.get = function(t) {
            if (!this.$2.has(t)) {
                return null;
            }
            const e = this.$2.get(t);
            if (e == null) {
                return null;
            }
            const { prev: n, next: o } = e;
            if (n) {
                n.next = o;
            }
            if (o) {
                o.prev = n;
            }
            const a = this.$5.next;
            if (a == null) {
                throw r("err")("The linked list is not constructed properly.");
            }
            this.$5.next = e;
            a.prev = e;
            e.prev = this.$5;
            e.next = a;
            return e.value;
        };
        n.has = function(t) {
            return this.$2.has(t);
        };
        n.touch = function(t) {
            this.get(t);
        };
        n.put = function(n, r) {
            if (this.$3 !== 0) {
                if (this.$7(r) > this.$3) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Blob size is larger than the limit of the whole store."
                    ])));
                    return;
                }
                this.delete(n);
                this.$14(n, r);
                this.schedulePurge();
            }
        };
        n.$14 = function(t, n) {
            const e = new s(t, n);
            this.$2.set(t, e);
            const o = this.$5.next;
            if (o == null) {
                throw r("err")("The linked list is not constructed properly.");
            }
            this.$5.next = e;
            o.prev = e;
            e.prev = this.$5;
            e.next = o;
            this.$4 += this.$7(n);
            if (this.$11) {
                this.$11(t, n);
            }
        };
        n.delete = function(t) {
            if (this.$2.has(t)) {
                const e = this.$2.get(t);
                if (e != null) {
                    this.$4 -= this.$7(e.value);
                    const { prev: n, next: r } = e;
                    if (n) {
                        n.next = r;
                    }
                    if (r) {
                        r.prev = n;
                    }
                    this.$2.delete(t);
                    if (this.$12) {
                        this.$12(t, e.value);
                    }
                }
            }
        };
        n.clear = function() {
            this.$2.clear();
            this.$4 = 0;
            this.$5.next = this.$6;
            this.$6.prev = this.$5;
            if (this.$13) {
                this.$13();
            }
        };
        n.trimTo = function(t) {
            this.$15(t);
        };
        n.$15 = function(t) {
            for(let e = this.$6.prev; this.$4 > t && e !== this.$5; e = e ? e.prev : null){
                if (e == null) {
                    throw r("err")("The linked list is not constructed properly.");
                }
                const n = e;
                const { key: o, value: a } = n;
                if (this.$9(o, a)) {
                    this.delete(o);
                    if (this.$10) {
                        this.$10(o, a);
                    }
                }
            }
            if (this.$8) {
                this.$8(this.$2);
            }
        };
        n.schedulePurge = function() {
            this.$1.onOrBefore(1000);
        };
        n.getCurrentSize = function() {
            return this.$4;
        };
        n.getSizeLimit = function() {
            return this.$3;
        };
        n.getPlaceholderHead = function() {
            return this.$5;
        };
        n.forEach = function(t) {
            if (this.$4 !== 0) {
                let e = this.$6.prev;
                if (e == null) {
                    throw r("err")("The linked list is not constructed properly.");
                }
                while(e != null && e !== this.$5){
                    t(e.value);
                    e = e.prev;
                }
            }
        };
        return t;
    })();
    l.LruCache = u;
}, 98);