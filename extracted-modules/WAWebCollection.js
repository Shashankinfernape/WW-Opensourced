__d("WAWebCollection", [
    "WAArrayMove",
    "WALogger",
    "WAWebCollectionInternalUtils",
    "WAWebEventEmitter",
    "compactMap",
    "countWhere",
    "err",
    "getErrorSafe",
    "gkx",
    "sumBy"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = new Set([
        "add",
        "bulk_add",
        "bulk_remove",
        "remove",
        "reset",
        "sort"
    ]);
    const p = ((t)=>{
        function n(e, n = {}) {
            let o;
            o = t.call(this) || this;
            o.$Collection$p_14 = _();
            o.$Collection$p_2 = !o.$Collection$p_14;
            o.$Collection$p_15 = false;
            if (n.parent) {
                o.parent = n.parent;
            }
            const a = o.constructor;
            const { comparator: i, model: l } = a;
            if (!l) {
                throw r("err")("Collection initialized without model. It is likely that you have a circular dependency. Set a breakpoint to find it and use inline `require` instead of `import` to avoid it.");
            }
            o.modelClass = l;
            if (i) {
                o._comparator = i;
            }
            o.$Collection$p_1();
            const s = o;
            Object.defineProperty(o, "length", {
                get: function() {
                    return s._models.length;
                }
            });
            return o;
        }
        babelHelpers.inheritsLoose(n, t);
        const a = n.prototype;
        a.on = function(n, r, o) {
            if (!this.$Collection$p_2 && r != null && f(n)) {
                this.$Collection$p_3();
            }
            return t.prototype.on.call(this, n, r, o);
        };
        a.add = function(t, n) {
            let e;
            if (Array.isArray(t)) {
                e = t.slice();
            } else {
                e = t ? [
                    t
                ] : [];
            }
            return this.set(e, babelHelpers.extends({
                merge: false,
                add: true,
                remove: false
            }, n));
        };
        a.set = function(n, r) {
            const t = this;
            if (!n) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "collection:set called with no models"
                ])));
                return [];
            }
            const a = babelHelpers.extends({
                add: true,
                remove: true,
                merge: true
            }, r);
            let i;
            let l;
            let u;
            let c;
            const d = this._comparator && a.sort !== false;
            const m = [];
            const p = [];
            const _ = {};
            const { add: f, merge: g, remove: h } = a;
            const y = a.at ?? void 0;
            const C = !d && f === true && h === true ? [] : null;
            const b = function() {
                c = n[S];
                if (t.isModel(c)) {
                    l = c;
                }
                i = c.id;
                if (!i) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "collection:set model has no id"
                    ])));
                    return 0;
                }
                u = t.get(i);
                if (u) {
                    const e = u;
                    if (h === true) {
                        _[u.id.toString()] = true;
                    }
                    if (g === true) {
                        c = l && c === l ? l.attributes : c;
                        e.set(c, a);
                        t.$Collection$p_4(function(t) {
                            t.add([
                                e
                            ]);
                        });
                    }
                    n[S] = e;
                } else if (f === true) {
                    l = n[S] = t.$Collection$p_5(c, a);
                    if (l) {
                        const r = l;
                        m.push(r);
                        t.$Collection$p_6(r);
                    } else {
                        return 0;
                    }
                }
                l = u || l;
                if (!l) {
                    return 0;
                }
                const d = l;
                if (C && (!l.id || !_[l.id.toString()])) {
                    C.push(d);
                }
                _[d.id.toString()] = true;
            };
            let v;
            for(var S = 0, R = n.length; S < R; S++){
                v = b();
            }
            if (h === true) {
                for(let L = 0, E = this.length; L < E; L++){
                    l = this._models[L];
                    const k = l;
                    if (!_[l.id.toString()]) {
                        p.push(k);
                    }
                }
                if (p.length) {
                    this.remove(p, babelHelpers.extends({}, a));
                }
            }
            let I;
            if (m.length || C != null && C.length) {
                if (d) {
                    I = true;
                }
                if (typeof y === "number") {
                    this._models.splice(...[
                        y,
                        0
                    ].concat(m));
                } else {
                    const D = C || m;
                    for(let x = 0, $ = D.length; x < $; x++){
                        this._models.push(D[x]);
                    }
                }
                this.$Collection$p_7(m);
                this.$Collection$p_4(function(e) {
                    e.add(m);
                });
            }
            if (I) {
                this.sort({
                    silent: true
                });
            }
            this.$Collection$p_8({
                options: a,
                order: C,
                sort: I,
                toAdd: m
            });
            return n;
        };
        a.remove = function(t, n = {}) {
            let e;
            let r;
            let o;
            let a;
            const i = Array.isArray(t) ? t.slice() : [
                t
            ];
            const l = [];
            for(let s = 0, u = i.length; s < u; s++){
                a = i[s];
                if (!!a && (o = a instanceof this.modelClass ? a.id : a, e = l[s] = this.get(o), e)) {
                    const c = e;
                    this.$Collection$p_9(e);
                    r = this._models.indexOf(e);
                    this._models.splice(r, 1);
                    if (n.silent !== true) {
                        n.index = r;
                        this.$Collection$p_10("remove", c, n);
                    }
                    this.$Collection$p_11(c);
                }
            }
            this.$Collection$p_4(function(e) {
                e.remove(l);
            });
            return l;
        };
        a.reset = function() {
            for(let e = 0, t = this._models.length; e < t; e++){
                this.$Collection$p_11(this._models[e]);
            }
            this.$Collection$p_1();
            this.trigger("reset", this);
        };
        a.sort = function(t = {}) {
            this._models.sort(t.comparator ?? this.createSortComparator());
            if (t.silent !== true) {
                this.trigger("sort", this, t);
            }
            return this;
        };
        a.createSortComparator = function() {
            const e = this;
            return function(t, n) {
                return e._comparator(t, n);
            };
        };
        a.replaceId = function(t, n) {
            const e = this.get(t);
            if (e) {
                this.$Collection$p_12(t);
                e.set({
                    id: n
                });
                this.$Collection$p_13(e);
            }
        };
        a.reorderMutate = function(t, n) {
            o("WAArrayMove").arrayMoveMutate(this._models, t, n);
        };
        a.get = function(t) {
            return this._index[t];
        };
        a.assertGet = function(t) {
            const e = this._index[t];
            if (!e) {
                if (r("gkx")("26258")) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!"
                    ]))).sendLogs("Collection:assertGet no result");
                } else {
                    const n = `${this.constructor.name}:assertGet`;
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "no model with id ",
                        ""
                    ])), String(t)).sendLogs(n);
                }
            }
            return e;
        };
        a.at = function(t) {
            return this._models[t];
        };
        a.serialize = function() {
            return this.map((e)=>e.toJSON());
        };
        a.toJSON = function() {
            return this.serialize();
        };
        a.isModel = function(t) {
            return t instanceof this.modelClass;
        };
        a.includes = function(t, n = 0) {
            if (n === 0) {
                if (t instanceof this.modelClass) {
                    return this.get(t.id) != null;
                }
                return false;
            }
            return this._models.includes(t, n);
        };
        a.indexOf = function(t, n) {
            return this._models.indexOf(t, n);
        };
        a.lastIndexOf = function(t, n) {
            return this._models.lastIndexOf(t, n);
        };
        a.findLast = function(t) {
            return this._models.findLast(t);
        };
        a.every = function(t) {
            return this._models.every(t);
        };
        a.some = function(t) {
            return this._models.some(t);
        };
        a.forEach = function(t) {
            this._models.forEach(t);
        };
        a.map = function(t) {
            return this._models.map(t);
        };
        a.compactMap = function(t) {
            return r("compactMap")(this._models, t);
        };
        a.countWhere = function(t) {
            return r("countWhere")(this._models, t);
        };
        a.sumBy = function(t) {
            return r("sumBy")(this._models, t);
        };
        a.filter = function(t) {
            return this._models.filter(t);
        };
        a.findFirst = function(t) {
            return this._models.find(t);
        };
        a.reduce = function(t, n) {
            return this._models.reduce(t, n);
        };
        a.slice = function(t, n) {
            return this._models.slice(t, n);
        };
        a.where = function(t) {
            return this.filter((e)=>{
                for(const n in t){
                    if (t[n] !== e.get(n)) {
                        return false;
                    }
                }
                return true;
            });
        };
        a.head = function() {
            return this._models[0];
        };
        a.last = function() {
            return this._models[this._models.length - 1];
        };
        a.toArray = function() {
            return this._models.slice();
        };
        a.getModelsArray = function() {
            return this._models;
        };
        a.reorder = function(t, n) {
            return o("WAArrayMove").arrayMove(this._models, t, n);
        };
        a.$Collection$p_1 = function() {
            this._models = [];
            this._index = {};
            this.$Collection$p_4(function(e) {
                e.reset();
            }, false);
        };
        a.$Collection$p_5 = function(t, n) {
            if (this.isModel(t)) {
                if (t.collection == null) {
                    t.collection = this;
                }
                return t;
            }
            const e = babelHelpers.extends({}, n, {
                collection: this
            });
            try {
                return new this.modelClass(t, e);
            } catch (e) {
                let i;
                const l = t.id;
                let s;
                if (l == null) {
                    s = "null/undefined";
                } else if (typeof l === "object") {
                    s = l.constructor?.name ?? "unknown-object";
                } else {
                    s = typeof l;
                }
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "collection:_prepareModel: for model ",
                    " id_shape=",
                    ", id=",
                    ""
                ])), (this == null || (i = this.modelClass) == null ? void 0 : i.name) ?? "", s, l == null || l.toString == null ? void 0 : l.toString()).catching(r("getErrorSafe")(e)).sendLogs("collection-model-creation-error");
                return;
            }
        };
        a.$Collection$p_6 = function(t) {
            this.$Collection$p_13(t);
            if (!t.collection) {
                t.collection = this;
            }
            if (this.$Collection$p_14) {
                this.$Collection$p_15 = true;
            } else {
                this.$Collection$p_16(t);
            }
        };
        a.$Collection$p_11 = function(t) {
            if (this === t.collection) {
                delete t.collection;
            }
            this.$Collection$p_9(t);
            if (t.off && this.$Collection$p_2) {
                t.off("all", this.$Collection$p_17, this);
            }
        };
        a.$Collection$p_3 = function() {
            const e = this;
            this.$Collection$p_2 = true;
            if (this.$Collection$p_15) {
                this._models.forEach((t)=>{
                    e.$Collection$p_16(t);
                });
            }
        };
        a.$Collection$p_7 = function(t) {
            const e = this;
            if (this.$Collection$p_14 && this.$Collection$p_2) {
                t.forEach((t)=>{
                    e.$Collection$p_16(t);
                });
            }
        };
        a.$Collection$p_16 = function(t) {
            if (t.on) {
                t.on("all", this.$Collection$p_17, this);
            }
        };
        a.$Collection$p_13 = function(t) {
            this._index[t.id] = t;
        };
        a.$Collection$p_9 = function(t) {
            delete this._index[t.id];
        };
        a.$Collection$p_12 = function(t) {
            if (this.get(t)) {
                delete this._index[t];
            }
        };
        a.$Collection$p_8 = function({ options: e, order: n, sort: r, toAdd: o }) {
            if (e.silent !== true) {
                for(let a = 0, i = o.length; a < i; a++){
                    this.$Collection$p_10("add", o[a], e);
                }
                if (r === true || n != null && n.length) {
                    this.trigger("sort", this, e);
                }
            }
        };
        a.$Collection$p_10 = function(t, n, r) {
            if (!(n.trigger && (n.trigger(t, n, this, r), !this.$Collection$p_14))) {
                this.trigger(t, n, this, r);
            }
        };
        a.$Collection$p_17 = function(t, n, r, o) {
            const e = t.indexOf(":");
            const a = e === -1 ? t : t.slice(0, e);
            if (!((a === "add" || a === "remove") && (this.$Collection$p_14 || r !== this))) {
                if (a === "destroy") {
                    this.remove(n, o);
                }
                this.trigger(...arguments);
            }
        };
        a.$Collection$p_4 = function(t, n = true) {
            if (this.$Collection$p_18 == null) {
                if (!n) {
                    return;
                }
                this.$Collection$p_18 = o("WAWebCollectionInternalUtils").groupMethodsByKind(this).aggregate;
            }
            this.$Collection$p_18?.forEach(t);
        };
        return n;
    })(r("WAWebEventEmitter"));
    function _() {
        return r("gkx")("12882");
    }
    function f(e) {
        return !m.has(e) && !/\s/.test(e);
    }
    l.default = p;
}, 98);