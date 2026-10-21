__d("WAWebBaseModel", [
    "WALogger",
    "WAWebBaseMirror",
    "WAWebEventEmitter",
    "WAWebModelUtils",
    "WAWebNetworkStatus",
    "WAWebProxyStateFactory",
    "WAWebUiIdleEventBus",
    "cr:5292",
    "err",
    "gkx",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = /^change:/;
    const c = {};
    const d = ((t)=>{
        function a(e, n = {}) {
            let r;
            r = t.call(this) || this;
            r.stale = o("WAWebModelUtils").session(false);
            r.revisionNumber = 1;
            r.__fired = null;
            r.__changes = null;
            r.__initialized = false;
            if (n._internalInitializationDoNotUse) {
                return babelHelpers.assertThisInitialized(r);
            }
            r.stale = e?.stale || r.getDefault("stale") === true;
            r.parent = n.parent;
            r.collection = n.collection;
            r._initDeriveds();
            r._initCollections();
            const r___defaults = r.__defaults;
            const i = r___defaults ? babelHelpers.extends({}, r___defaults, e) : e;
            if (i && !p(i)) {
                r.set(i, babelHelpers.extends({
                    silent: true
                }, n));
            }
            r.initialize();
            r.__initialized = true;
            return r;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.initialize = function() {
            if (this.collection && this.id && !this.collection.modelClass.prototype.isIdType(this.id)) {
                const e = this.collection ? typeof this.collection.modelClass.prototype.idClass : "N/A";
                throw r("err")(`Model id:${String(this.id)} is wrong type (${typeof this.id} vs expected ${e})`);
            }
            this._uiObservers = 0;
            if (this.mirrorMask) {
                this.mirror = new (o("WAWebBaseMirror")).BaseMirror(this);
            }
        };
        a_prototype._refreshStaleModel = function() {
            if (!(!this._uiObservers && this.stale)) {
                if (this.getCollection != null) {
                    this.getCollection().find(this.id);
                } else {
                    throw r("err")("base_model:_refreshStaleModel getCollection does not exist");
                }
            }
        };
        a_prototype.incObservers = function(t) {
            this._uiObservers++;
            if (!t && r("WAWebNetworkStatus").online && this.stale) {
                if (o("WAWebUiIdleEventBus").UiIdleEventBus.uiBusy) {
                    this.listenToOnce(o("WAWebUiIdleEventBus").UiIdleEventBus, "ui_idle", this._refreshStaleModel);
                } else {
                    this._refreshStaleModel();
                }
            }
        };
        a_prototype.decObservers = function() {
            if (this._uiObservers > 0) {
                this._uiObservers--;
            }
            if (this._uiObservers === 0) {
                this.stopListening(o("WAWebUiIdleEventBus").UiIdleEventBus, "ui_idle", this._refreshStaleModel);
            }
        };
        a_prototype.hasObservers = function() {
            return this._uiObservers > 0;
        };
        a_prototype.getObservers_TEST_ONLY = function() {
            return null;
        };
        a_prototype.addChild = function(t, n) {
            const e = {};
            e[t] = n;
            this.set(e, {
                silent: true
            });
            this.listenTo(n, "all", this._getUnboundCachedEventBubblingHandler(t));
        };
        a_prototype.get = function(t) {
            return this[t];
        };
        a_prototype.set = function(keyOrAttrs, valueOrOptions, l) {
            let t;
            if (!r("gkx")("26258") && (n("cr:5292") == null ? undefined : n("cr:5292").currentTransaction) != null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[txn] UI change in ",
                    ". See https://fburl.com/aleoj4tt"
                ])), this.constructor.name);
            }
            let s = l;
            if (typeof keyOrAttrs === "string") {
                return this._set({
                    keyOrAttrs,
                    maybeOptions: s,
                    valueOrOptions
                });
            }
            s = valueOrOptions;
            if ((t = s) != null && t.merge) {
                return this._set({
                    keyOrAttrs: _(keyOrAttrs),
                    valueOrOptions: s
                });
            }
            return this._set({
                keyOrAttrs,
                valueOrOptions: s
            });
        };
        a_prototype._markChange = function(t, oldValue) {
            if (this.__initialized) {
                this._getChanges().push({
                    key: t,
                    oldValue
                });
                if (this.__fired) {
                    this.__fired[t] = false;
                }
            }
        };
        a_prototype._set = function(t) {
            const n = this;
            const { keyOrAttrs, maybeOptions, valueOrOptions } = t;
            this.revisionNumber++;
            const l = !!this.__changes;
            const s = typeof keyOrAttrs === "string" ? [
                {
                    [keyOrAttrs]: valueOrOptions
                },
                maybeOptions
            ] : [
                keyOrAttrs,
                valueOrOptions
            ];
            const u = s[0];
            const c = s[1];
            const d = new Set;
            Object.keys(u).forEach((e)=>{
                const t = n._setKV(e, u[e], c);
                t?.forEach(function(e) {
                    d.add(e);
                });
            });
            if (d.size > 0) {
                for(var m = r("nullthrows")(this._topo, "_topo unexpectedly undefined"), p = r("nullthrows")(this._topoIndexMap), _ = (t)=>{
                    const e = m[t];
                    if (!d.has(e)) {
                        return 1;
                    }
                    const o = n._setD(e);
                    o?.forEach(function(e) {
                        const n = r("nullthrows")(p.get(e));
                        if (n < t) {
                            throw r("err")("Circular derived properties / event listeners");
                        }
                        d.add(e);
                    });
                }, f = 0; f < m.length; f++){
                    _(f);
                }
            }
            const g = c?.silent;
            if (g !== true && this.hasUnfiredChanges()) {
                const h = this.__fired = {};
                for(var y = this._getChanges(), C = y.length > 0; y.length;){
                    const b = y.shift();
                    const { key, oldValue } = b;
                    if (!h[key]) {
                        h[key] = true;
                        const R = this._definition[key].evt;
                        if (this.isListening(R) || this.isListening("all")) {
                            const L = this[key];
                            this.trigger(R, this, L, oldValue);
                        }
                    }
                }
                if (C && this.isListening("change") || this.isListening("all")) {
                    this.trigger("change", this);
                }
            }
            if (!l) {
                if (this.__changes) {
                    this.__changes = null;
                }
                if (this.__fired) {
                    this.__fired = null;
                }
            }
            return this;
        };
        a_prototype._setKV = function(t, n, a) {
            if (this._collections[t]) {
                this[t].set(n, a);
                return;
            }
            const i = this._definition[t];
            if (i) {
                if (i.attr === o("WAWebModelUtils").Attr.DERIVED) {
                    throw r("err")(`Attempting to directly set derived property: ${t}`);
                }
            } else {
                this[t] = n;
                return;
            }
            const l = i.sk;
            const s = this[t];
            if (n !== s) {
                this[l] = n;
                this._markChange(t, s);
                return this._deps?.[t];
            }
        };
        a_prototype._setD = function(t) {
            const n = this._definition[t];
            const r = n.sk;
            const o = n.fn.call(this);
            const a = this[r];
            if (o !== a) {
                this[r] = o;
                this._markChange(t, a);
                return this._deps?.[t];
            }
        };
        a_prototype.hasUnfiredChanges = function() {
            const __fired = this.__fired;
            const __changes = this.__changes;
            if (!__changes) {
                return false;
            }
            if (!__fired) {
                return true;
            }
            for(let n = 0; n < __changes.length; n++){
                if (!__fired[__changes[n].key]) {
                    return true;
                }
            }
            return false;
        };
        a_prototype._getChanges = function() {
            return this.__changes || (this.__changes = []);
        };
        a_prototype._initDeriveds = function() {
            const e = this;
            this.__derived.forEach((t)=>{
                e[e._definition[t].sk] = o("WAWebModelUtils").INIT;
            });
        };
        a_prototype._initCollections = function() {
            const parent = this;
            Object.entries(this._collections).forEach(([n, r])=>{
                parent[n] = new r(null, {
                    parent
                });
            });
        };
        a_prototype.unset = function(t, n) {
            const e = Array.isArray(t) ? t : [
                t
            ];
            const r = {};
            for (const o of e){
                r[o] = undefined;
            }
            this.set(r, n);
        };
        a_prototype.clear = function() {
            this.unset([].concat(this.__props, this.__session));
        };
        a_prototype.delete = function() {
            this.stopListening();
        };
        a_prototype.reset = function() {
            this.set(this.__defaults);
        };
        a_prototype.toJSON = function() {
            return this.serialize();
        };
        a_prototype.serialize = function() {
            const e = this;
            const t = {};
            for(let n = 0; n < this.__props.length; n++){
                t[this.__props[n]] = this[this.__props[n]];
            }
            Object.keys(this._collections).forEach((n)=>{
                t[n] = e[n].serialize();
            });
            return t;
        };
        a_prototype.getDefault = function(t) {
            const e = this._definition[t];
            if (e) {
                const n = e.defaultValue;
                if (typeof n === "function") {
                    return n();
                }
                return n;
            }
        };
        a_prototype._getUnboundCachedEventBubblingHandler = function(t) {
            return c[t] ?? (c[t] = function(e, n, r) {
                if (u.test(e)) {
                    this.trigger(`change:${t}.${e.split(":")[1]}`, n, r);
                } else if (e === "change") {
                    this.trigger("change", this);
                }
            });
        };
        a.isIdType = function(t) {
            if (this.allowedIds && this.allowedIds.includes(t)) {
                return true;
            }
            if (this.idClass) {
                return t instanceof this.idClass;
            }
            return typeof t === "string";
        };
        return a;
    })(r("WAWebEventEmitter"));
    function m(e) {
        const t = o("WAWebModelUtils").convert(e);
        const n = o("WAWebModelUtils").stateExtend(d, t);
        if (e.Proxy) {
            const r = o("WAWebBaseMirror").genMirrorMask(t);
            n.prototype.mirrorMask = r;
            n.prototype.proxyName = e.Proxy;
            o("WAWebProxyStateFactory").ProxyStateFactory(e.Proxy, t, r);
        }
        return n;
    }
    function p(e) {
        for(const t in e){
            if (Object.hasOwn(e, t)) {
                return false;
            }
        }
        return true;
    }
    function _(keyOrAttrs) {
        const t = Object.keys(keyOrAttrs);
        for(var n = t.length, r = {}, o = 0; o < n; o++){
            const a = t[o];
            if (keyOrAttrs[a] !== undefined) {
                r[a] = keyOrAttrs[a];
            }
        }
        return r;
    }
    l.prop = (s = o("WAWebModelUtils")).prop;
    l.session = s.session;
    l.derived = s.derived;
    l.getter = s.getter;
    l.collection = s.collection;
    l.BaseModel = d;
    l.defineModel = m;
}, 98);