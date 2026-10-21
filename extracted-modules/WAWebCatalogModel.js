__d("WAWebCatalogModel", [
    "WAWebBaseModel",
    "WAWebBizProductCatalogAction",
    "WAWebBizProductCatalogBridge",
    "WAWebCatalogCollection",
    "WAWebCatalogGetters",
    "WAWebProductCollCollection",
    "WAWebProductCollection",
    "WAWebProductModel",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.catalogId = o("WAWebBaseModel").prop();
            t.catalogType = o("WAWebBaseModel").prop();
            t.catalogName = o("WAWebBaseModel").prop();
            t.afterCursor = o("WAWebBaseModel").prop();
            t.index = o("WAWebBaseModel").prop();
            t.hasCatalogCategories = o("WAWebBaseModel").prop();
            t.fetchedFromServer = o("WAWebBaseModel").session();
            t._products = o("WAWebBaseModel").session();
            t._msgs = o("WAWebBaseModel").session();
            t.lastUsedCountryCode = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            e.prototype.initialize.call(this);
            this.productCollection = new (o("WAWebProductCollection")).ProductCollection;
            this.msgProductCollection = new (o("WAWebProductCollection")).ProductCollection;
            this.collections = new (o("WAWebProductCollCollection")).ProductCollCollection;
            this.listenTo(this, "change:_products", this.triggerProductUpdate);
            this.listenTo(this, "change:_msgs", this.triggerMsgUpdate);
            this.triggerProductUpdate();
            this.triggerMsgUpdate();
        };
        t_prototype.triggerProductUpdate = function() {
            if (this._products) {
                this.productCollection.add(this._products, {
                    merge: true
                });
            }
            this._products = undefined;
        };
        t_prototype.triggerMsgUpdate = function() {
            if (this._msgs) {
                this.msgProductCollection.add(this._msgs, {
                    merge: true
                });
            }
            this._msgs = undefined;
        };
        t_prototype.markProductCollectionOld = function() {
            this.productCollection.forEach((e)=>e.markOld());
        };
        t_prototype.addProduct = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = this.id;
                this.maybeUpdateLastUsedCountryCode(e.complianceInfo?.countryCodeOrigin);
                const a = yield o("WAWebBizProductCatalogAction").addProduct({
                    product: e
                });
                a.catalogWid = n;
                const i = this.productCollection.add(a, {
                    merge: true,
                    at: 0
                })[0];
                return r("nullthrows")(i);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.editProduct = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = yield o("WAWebBizProductCatalogAction").editProduct({
                    product: e
                });
                this.maybeUpdateLastUsedCountryCode(e.complianceInfo?.countryCodeOrigin);
                const a = this.productCollection.add(n, {
                    merge: true
                })[0];
                if (this.collections) {
                    this.collections.forEach((t)=>{
                        if (t.productCollection.get(e.id)) {
                            t.productCollection.add(n, {
                                merge: true
                            });
                        }
                    });
                }
                return r("nullthrows")(a);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.refreshProduct = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this.productCollection.get(e);
                if (t) {
                    t.stale = true;
                }
                const n = yield o("WAWebBizProductCatalogAction").queryProduct(this.id, e);
                if (n.data != null) {
                    const r = o("WAWebBizProductCatalogBridge").mapProductResponseToModel(n.data, this.id);
                    if (t) {
                        this.productCollection.add(r, {
                            merge: true
                        });
                    }
                    if (this.collections) {
                        this.collections.forEach((t)=>{
                            if (t.productCollection.get(e)) {
                                t.productCollection.add(r, {
                                    merge: true
                                });
                            }
                        });
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.maybeUpdateLastUsedCountryCode = function(t) {
            if (t != null) {
                this.lastUsedCountryCode = t;
            }
        };
        t_prototype.pullProduct = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = yield o("WAWebBizProductCatalogAction").queryProduct(this.id, e, undefined, undefined, undefined, t);
                if (n.error === "NOT_FOUND") {
                    this.productCollection.remove(e);
                }
                if (n.data != null) {
                    const r = new (o("WAWebProductModel")).Product(o("WAWebBizProductCatalogBridge").mapProductResponseToModel(n.data, this.id));
                    if (r.variantInfo != null && this.productCollection.get(r.id) == null) {
                        r.displayPriority = 1;
                    }
                    this.updateProduct(r);
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.updateProduct = function(t) {
            this.productCollection.add(t, {
                merge: false
            });
            if (t.variantInfo != null) {
                const e = this.productCollection.get(t.id);
                if (e) {
                    e.set("variantInfo", t.variantInfo);
                }
            }
        };
        t_prototype.getCollection = function() {
            return o("WAWebCatalogCollection").CatalogCollection;
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebCatalogGetters").clearCatalogGetterCacheFor(this);
        };
        t_prototype.getMostRecentlyApprovedProduct = function() {
            return this.productCollection.findFirst(function(e) {
                return !e.isHidden && e.isSanctioned !== true && e.reviewStatus === "APPROVED";
            });
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "catalog";
    e.idClass = r("WAWebWid");
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);