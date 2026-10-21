__d("WAWebBaseCollection", [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WATypeUtils",
    "WAWebBackendErrors",
    "WAWebBaseCachePolicy",
    "WAWebCachePolicies",
    "WAWebCollection",
    "WAWebConnModel",
    "WAWebMiscErrors",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "cr:5292",
    "err",
    "gkx",
    "uniqueID"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = {
        QUERY: "QUERY",
        FIND: "FIND",
        UPDATE: "UPDATE"
    };
    const h = ({}).toString();
    const y = {
        id: "none",
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.NONE
    };
    const C = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t) || this;
            n.name = "CollectionSilentQueryError";
            n.message = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const b = ((t)=>{
        function a() {
            let e;
            e = t.call(this) || this;
            e._inflight = {};
            e._cachePolicy = o("WAWebCachePolicies").createCachePolicy(e, e.constructor.cachePolicy || y);
            e._cachePolicy.enableCaching();
            if (e._cachePolicy.constructor.policy === o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD) {
                e.listenTo(o("WAWebConnModel").Conn, "me_ready", e._updateFromCache);
                if (o("WAWebConnModel").Conn.meReadyTriggered) {
                    e._updateFromCache();
                }
            }
            return e;
        }
        babelHelpers.inheritsLoose(a, t);
        const i = a.prototype;
        i.initializeFromCache = function(t) {
            this.add(t);
        };
        i.saveToCache = function() {
            if (o("WAWebConnModel").Conn.shouldSaveToCache()) {
                const t = this._cachePolicy.id;
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "baseCollection:saveToCache save: ",
                    ""
                ])), String(t));
                r("WAWebUserPrefsStore").setCollection(t, this.toJSON());
            }
        };
        i.add = function(a, i) {
            const e = this;
            if (!r("gkx")("26258")) {
                if ((n("cr:5292") == null ? void 0 : n("cr:5292").currentTransaction) != null) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "UI change in txn for ",
                        ". See https://fburl.com/aleoj4tt"
                    ])), this.constructor.name);
                }
            }
            if (a) {
                if (o("WAWebConnModel").Conn.blockStoreAdds) {
                    throw new (o("WAWebBackendErrors")).LogoutDrop("adding to store when blocking store adds");
                }
                const l = Array.isArray(a) ? a : [
                    a
                ];
                if (l.every((e)=>e?.isState)) {
                    const u = l.filter((t)=>!e.get(t.id));
                    if (u.length) {
                        t.prototype.add.call(this, u, i);
                    }
                    return l;
                }
            }
            return t.prototype.add.call(this, a, i);
        };
        i.findQuery = function(t, n) {
            return this._query({
                data: t,
                options: n,
                type: g.QUERY
            });
        };
        i.find = function(t, a) {
            if (t) {
                return this._query({
                    data: t,
                    options: a,
                    type: g.FIND
                });
            }
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Called find without an id"
            ]))).sendLogs("find-without-id");
            return (f || (f = n("Promise"))).reject(r("err")("called find without an id"));
        };
        i.update = function(t, a) {
            if (t) {
                return this._query({
                    data: t,
                    options: a,
                    type: g.UPDATE
                });
            }
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "Called update without an id"
            ]))).sendLogs("update-without-id");
            return (f || (f = n("Promise"))).reject(r("err")("called update without an id"));
        };
        i.gadd = function(t, n) {
            if (this.modelClass.prototype.isIdType(t)) {
                const e = this.get(t);
                return e || this.add({
                    id: t
                }, n)[0];
            }
            if (t.id != null && t.id !== "") {
                const o = n || {};
                o.merge = true;
                return this.add(t, o)[0];
            }
            throw r("err")("gadd called without an id attr (id)");
        };
        i.delete = function() {
            this._inflight = {};
            this.reset();
        };
        i._query = function(t) {
            const e = this;
            const { data: a, options: i, type: l } = t;
            let s = o("WATypeUtils").isString(a) ? a : a.toString();
            if (s === h) {
                s = r("uniqueID")("collection_query_");
            }
            const u = l === g.QUERY ? void 0 : this.get(a);
            const c = `force-${s}`;
            if (this._inflight[c] && l === g.FIND || l === g.UPDATE) {
                s = c;
            }
            if (this._inflight[s]) {
                if (l === g.FIND && u && !u.stale) {
                    return (f || (f = n("Promise"))).resolve(u);
                }
                return this._inflight[s];
            }
            if (!u || u.stale || l === g.UPDATE) {
                return this._inflight[s] = this._serverQuery({
                    data: a,
                    options: i,
                    type: l
                }).finally(()=>{
                    delete e._inflight[s];
                }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").LogoutDrop, function(e) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "LogoutDrop error: ",
                        ""
                    ])), e.toString());
                })).catch((e)=>{
                    if (e instanceof C) {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "baseCollection:query query promise rejected: ",
                            ""
                        ])), String(e));
                    } else {
                        throw e;
                    }
                });
            }
            return (f || (f = n("Promise"))).resolve(u);
        };
        i._serverQuery = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ data: r, options: a, type }) {
                let l;
                if (type === g.UPDATE) {
                    l = this._update(r, a);
                } else if (type === g.FIND) {
                    l = this.findImpl(r, a);
                } else {
                    l = this.findQueryImpl(r);
                }
                const s = yield l;
                this._markResultsNotStale(s);
                let u;
                if (a?.set === true) {
                    u = this.set(s);
                } else {
                    u = this.add(s, {
                        merge: true
                    });
                }
                if (Array.isArray(s)) {
                    return u;
                }
                if (u[0]) {
                    return u[0];
                }
                throw new (o("WAWebMiscErrors")).ModelCreateError(this.modelClass?.name ?? "Unknown", s);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        i._update = function(t, n) {
            return this.findImpl(t, n);
        };
        i._markResultsNotStale = function(t) {};
        i._updateFromCache = function() {
            const e = this._cachePolicy.id;
            this._cachePolicy.disableCaching();
            if (o("WAWebConnModel").Conn.shouldSaveToCache()) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "baseCollection:initFromCache load: ",
                    ""
                ])), String(e));
                const t = self.performance.now();
                const n = r("WAWebUserPrefsStore").getCollection(e);
                const a = self.performance.now();
                this.initializeFromCache(n);
                const i = self.performance.now();
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "baseCollection:initFromCache complete: ",
                    " items=",
                    " readParse=",
                    "ms initialize=",
                    "ms total=",
                    "ms"
                ])), String(e), Array.isArray(n) ? n.length : 0, Math.round(a - t), Math.round(i - a), Math.round(i - t));
                this._cachePolicy.enableCaching();
            }
        };
        return a;
    })(r("WAWebCollection"));
    l.CollectionSilentQueryError = C;
    l.BaseCollection = b;
}, 98);