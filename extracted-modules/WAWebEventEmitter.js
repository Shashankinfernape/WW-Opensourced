__d("WAWebEventEmitter", [
    "err",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    const e = /\s+/;
    let s = 0;
    const u = (()=>{
        function t() {}
        const n = t.prototype;
        n.on = function(t, n, o) {
            if (n == null) {
                return this;
            }
            if (typeof n !== "function") {
                throw r("err")("Callback parameter passed is not a function");
            }
            if (this.$3(...[
                this.on
            ].concat(Array.prototype.slice.call(arguments)))) {
                return this;
            }
            this.$4(t).push({
                callback: n,
                context: o
            });
            return this;
        };
        n.once = function(t, n, r) {
            if (n == null) {
                return this;
            }
            if (this.$3(...[
                this.once
            ].concat(Array.prototype.slice.call(arguments)))) {
                return this;
            }
            const e = this;
            let o = false;
            const a = function() {
                if (!o) {
                    o = true;
                    e.off(t, a);
                    n.apply(this, arguments);
                }
            };
            a._callback = n;
            return this.on(t, a, r);
        };
        n.off = function(t, n, r) {
            const e = this.$1;
            if (!e) {
                return this;
            }
            if (this.$3(...[
                this.off
            ].concat(Array.prototype.slice.call(arguments)))) {
                return this;
            }
            if (!t && n == null && r == null) {
                this.$1 = void 0;
                return this;
            }
            for(let o = t ? [
                t
            ] : Object.keys(e), a = 0; a < o.length; a++){
                const i = o[a];
                const l = e[i];
                if (l) {
                    e[i] = [];
                    if (n != null || r != null) {
                        for (const u of l){
                            if (n && n !== u.callback && n !== u.callback._callback || r != null && u.context !== r) {
                                e[i].push(u);
                            }
                        }
                    }
                    if (!e[i].length) {
                        delete e[i];
                    }
                }
            }
            return this;
        };
        n.trigger = function(t) {
            for(var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++){
                n[r - 1] = arguments[r];
            }
            if (!this.$1) {
                return this;
            }
            if (this.$3(...[
                this.trigger
            ].concat(Array.prototype.slice.call(arguments)))) {
                return this;
            }
            const o = this.$5(t);
            const a = this.$5("all");
            if (o) {
                this.$6(o, n);
            }
            if (a) {
                this.$6(a, arguments);
            }
            return this;
        };
        n.stopListening = function(t, n, o) {
            const a = this.$2;
            if (!a) {
                return this;
            }
            const i = t?.listenId;
            const l = i != null && i !== "" ? {
                [i]: t
            } : a;
            const s = !n && !o;
            for(const u in l){
                const c = l[u];
                c.off(n, o, this);
                const d = c.$1;
                if (s || !d || r("isEmptyObject")(d)) {
                    delete a[u];
                }
            }
            if (!this.$2 || r("isEmptyObject")(this.$2)) {
                this.$2 = void 0;
            }
            return this;
        };
        n.listenTo = function(t, n, r) {
            if (r == null) {
                return this;
            }
            this.$7(t);
            t.on(n, r, this);
            return this;
        };
        n.listenToOnce = function(t, n, r) {
            this.$7(t);
            t.once(n, r, this);
            return this;
        };
        n.listenToAndRun = function(t, n, r) {
            this.listenTo(...arguments);
            r.apply(this);
            return this;
        };
        n.getListenersCount = function(t) {
            const e = this.$1;
            if (!e) {
                return 0;
            }
            if (typeof t === "string") {
                return e[t]?.length || 0;
            }
            let r = 0;
            for(const o in e){
                r += e[o]?.length || 0;
            }
            return r;
        };
        n.isListening = function(t) {
            const e = this.$1;
            if (e) {
                if (typeof t === "string") {
                    return !!e[t];
                }
                return !r("isEmptyObject")(e);
            }
            return false;
        };
        n.$7 = function(t) {
            const n = this.$2 || (this.$2 = {});
            const r = t.listenId ??= `l${++s}`;
            n[r] = t;
        };
        n.$4 = function(t) {
            const e = this.$1 || (this.$1 = {});
            return e[t] || (e[t] = []);
        };
        n.$5 = function(t) {
            if (!(t == null || t === "")) {
                const e = this.$1;
                if (e) {
                    return e[t];
                }
            }
        };
        n.$3 = function(n, r, ...args) {
            if (e.test(r)) {
                const t = r.split(e);
                for(var o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++){
                    a[i - 2] = arguments[i];
                }
                for(let l = 0; l < t.length; l++){
                    n.call(...[
                        this,
                        t[l]
                    ].concat(a));
                }
                return true;
            }
            return false;
        };
        n.$6 = function(t, n) {
            let e;
            let r;
            let o = -1;
            const a = t.length;
            const i = n[0];
            const l = n[1];
            const s = n[2];
            e: {
                if (n.length === 0) {
                    while(++o < a){
                        e = t[o];
                        r = e.context ?? this;
                        e.callback.call(r);
                    }
                    break e;
                }
                if (n.length === 1) {
                    while(++o < a){
                        e = t[o];
                        r = e.context ?? this;
                        e.callback.call(r, i);
                    }
                    break e;
                }
                if (n.length === 2) {
                    while(++o < a){
                        e = t[o];
                        r = e.context ?? this;
                        e.callback.call(r, i, l);
                    }
                    break e;
                }
                if (n.length === 3) {
                    while(++o < a){
                        e = t[o];
                        r = e.context ?? this;
                        e.callback.call(r, i, l, s);
                    }
                    break e;
                }
                {
                    while(++o < a){
                        e = t[o];
                        r = e.context ?? this;
                        e.callback.apply(r, n);
                    }
                    break e;
                }
            }
        };
        n.bind = function(t, n, r) {
            return this.on(...arguments);
        };
        n.unbind = function(t, n, r) {
            return this.off(...arguments);
        };
        n.removeListener = function(t, n, r) {
            return this.off(...arguments);
        };
        n.removeAllListeners = function() {
            return this.off();
        };
        return t;
    })();
    l.default = u;
}, 98);