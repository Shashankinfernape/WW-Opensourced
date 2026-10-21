__d("WAWebCatalogCollection", [
    "Promise",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizProductCatalogAction",
    "WAWebBizProductCatalogBridge",
    "WAWebCatalogGetters",
    "WAWebCatalogModel",
    "WAWebCatalogVariantHelper",
    "WAWebMsgGetters",
    "WAWebProductCatalogLogQplEvents",
    "WAWebQplFlowWrapper",
    "WAWebStaleBaseCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.selfCatalogErrorEmailMask = null;
            e.findQueryImpl = function(t, n) {
                return e._findImplCommon(t, n).then((e)=>[
                        e
                    ]);
            };
            e.findImpl = function(t) {
                const n = e.convertCatalogIdForLidMigration(t);
                return e._findImplCommon(n);
            };
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.remove = function(n, r) {
            const e = t.prototype.remove.call(this, n, r);
            e.forEach((e)=>{
                if (e != null) {
                    o("WAWebCatalogGetters").clearCatalogGetterCacheFor(e);
                }
            });
            return e;
        };
        a_prototype.reset = function() {
            this.forEach(o("WAWebCatalogGetters").clearCatalogGetterCacheFor);
            t.prototype.reset.call(this);
        };
        a_prototype.addMsgAsProduct = function(n) {
            const e = o("WAWebMsgGetters").getBusinessOwnerJid(n.unsafe());
            const r = e != null ? o("WAWebWidFactory").createWid(e) : null;
            if (r != null) {
                const a = this.get(r);
                const i = n.productId != null ? a == null ? undefined : a.msgProductCollection.get(n.productId) : null;
                const l = n.productId != null ? a == null ? undefined : a.productCollection.get(n.productId) : null;
                if (!(l?.t && l.t >= n.t) && !(i != null && i.fetchedFromServer)) {
                    const s = o("WAWebBizProductCatalogBridge").mapMsgToProductModel(n);
                    return t.prototype.add.call(this, {
                        id: r,
                        afterCursor: undefined,
                        _msgs: [
                            s
                        ],
                        stale: true,
                        fetchedFromServer: !!l
                    }, {
                        merge: true
                    });
                }
            }
        };
        a_prototype._queryProduct = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ canLogQpl, catalogWid, height, productId, productMsgMediaData, shouldFetchComplianceFields, width }) {
                const p = yield o("WAWebBizProductCatalogAction").queryProduct(catalogWid, productId, width, height, shouldFetchComplianceFields, canLogQpl);
                if (p.error === "NOT_FOUND") {
                    const _ = this.get(catalogWid);
                    if (_ != null) {
                        _.productCollection.remove(productId);
                    }
                    return (u || (u = n("Promise"))).reject(new (o("WAWebBackendErrors")).E404("CatalogCollection:findProduct:_queryProduct NOT_FOUND"));
                }
                if (!p.data) {
                    return t.prototype.add.call(this, {
                        id: catalogWid,
                        afterCursor: undefined
                    });
                }
                const p_data = p.data;
                if (!p_data.image_cdn_urls) {
                    return (u || (u = n("Promise"))).reject(r("err")("CatalogCollection:findProduct:_queryProduct: could not find image_cdn_urls for product"));
                }
                const g = o("WAWebBizProductCatalogBridge").mapProductResponseToModel(p_data, catalogWid);
                g.productMsgMediaData = productMsgMediaData;
                if (g.variantInfo != null) {
                    if (this.get(catalogWid)?.productCollection.get(p_data.id) == null) {
                        g.displayPriority = 1;
                    }
                }
                const y = [
                    g
                ];
                return t.prototype.add.call(this, {
                    id: catalogWid,
                    afterCursor: undefined,
                    _products: y,
                    _msgs: y
                }, {
                    merge: true
                });
            });
            function a(t) {
                return e.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.findProduct = function({ canLogQpl, catalogWid, productId, productMsgMediaData, shouldFetchComplianceFields }) {
            const s = this.convertCatalogIdForLidMigration(catalogWid);
            if (r("isStringNullOrEmpty")(productId)) {
                return (u || (u = n("Promise"))).reject(r("err")(`CatalogCollection:findProduct Received productId type ${productId === undefined ? "undefined" : "null"}`));
            }
            return this._queryProduct({
                catalogWid: s,
                productId,
                productMsgMediaData,
                shouldFetchComplianceFields,
                canLogQpl
            });
        };
        a_prototype._queryCatalog = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ afterCursor, allowShopSource, catalog, catalogWid, checkmarkCollectionId, markerId }) {
                const m = catalog ? catalog.index : 0;
                if (markerId) {
                    o("WAWebQplFlowWrapper").QPL.markerPoint(markerId, "datasource_catalog_start");
                }
                try {
                    const p = o("WAWebCatalogVariantHelper").FULL_VARIANT_INFO_FIELDS;
                    const _ = o("WAWebCatalogVariantHelper").VARIANT_THUMBNAIL_IMAGE_SIZE;
                    const f = o("WAWebCatalogVariantHelper").VARIANT_THUMBNAIL_IMAGE_SIZE;
                    const g = yield o("WAWebBizProductCatalogAction").queryCatalog(catalogWid, afterCursor, 10, undefined, undefined, checkmarkCollectionId, allowShopSource, p, _, f);
                    if (markerId) {
                        o("WAWebQplFlowWrapper").QPL.markerPoint(markerId, "datasource_catalog_end");
                    }
                    if (this.hasSelfCatalogErrorEmailMask() && this.shouldUseCatalogErrorEmailMask(catalogWid)) {
                        this.resetSelfCatalogErrorEmailMask();
                    }
                    if (!g.data.length) {
                        return {
                            id: catalogWid,
                            afterCursor: ""
                        };
                    }
                    const _products = [];
                    g.data.forEach((e)=>{
                        if (e.image_cdn_urls) {
                            _products.push(o("WAWebBizProductCatalogBridge").mapProductResponseToModel(e, catalogWid));
                        }
                    });
                    const y = {
                        type: "success",
                        catalog: g
                    };
                    this.trigger("catalog-loaded", y);
                    const C = this.get(catalogWid);
                    if (C && C.catalogId != null && g.catalog_id != null && C.catalogId !== g.catalog_id) {
                        this.remove(catalogWid);
                    }
                    return {
                        id: catalogWid,
                        afterCursor: g.paging.cursors.after,
                        _products,
                        catalogId: g.catalog_id,
                        catalogType: g.catalog_type,
                        catalogName: g.catalog_name,
                        fetchedFromServer: true,
                        index: m + _products.length
                    };
                } catch (error) {
                    if (error instanceof o("WAWebBackendErrors").AdAccountRecoveryRequiredError && this.shouldUseCatalogErrorEmailMask(catalogWid)) {
                        if (r("isStringNullOrEmpty")(error.emailMask)) {
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "Catalog:AdAccountRecoveryRequiredError empty email mask"
                            ]))).sendLogs("catalog email mask empty");
                            return (u || (u = n("Promise"))).reject(new (o("WAWebBackendErrors")).AdAccountRecoveryRequiredEmailMaskEmptyError);
                        }
                        this.updateSelfCatalogErrorEmailMask(error.emailMask);
                    } else if (error instanceof o("WAWebBackendErrors").CatalogIncorrectNonceError && this.shouldUseCatalogErrorEmailMask(catalogWid)) {
                        const b = {
                            type: "incorrect-nonce"
                        };
                        this.trigger("catalog-loaded", b);
                        return (u || (u = n("Promise"))).reject(error);
                    } else {
                        if (this.hasSelfCatalogErrorEmailMask() && this.shouldUseCatalogErrorEmailMask(catalogWid)) {
                            this.resetSelfCatalogErrorEmailMask();
                        }
                        if (error instanceof o("WAWebBackendErrors").ServerStatusCodeError && error.statusCode === 404) {
                            const v = this.get(catalogWid);
                            if (v != null) {
                                this.remove(catalogWid);
                            }
                        }
                    }
                    const S = {
                        type: "error"
                    };
                    this.trigger("catalog-loaded", S);
                    return (u || (u = n("Promise"))).reject(error);
                }
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype._findImplCommon = function(t, n) {
            const e = this.get(t);
            const a = e && !e.stale ? e.afterCursor : undefined;
            const i = t instanceof r("WAWebWid") ? t : o("WAWebWidFactory").createWid(t.toString());
            return this._queryCatalog({
                afterCursor: a,
                catalog: e,
                catalogWid: i,
                checkmarkCollectionId: undefined,
                markerId: n?.markerId
            });
        };
        a_prototype.findCarouselCatalog = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = this.convertCatalogIdForLidMigration(e);
                const r = this.get(n);
                if (r) {
                    r.set({
                        index: 0
                    });
                }
                const o = yield this._queryCatalog({
                    afterCursor: undefined,
                    allowShopSource: false,
                    catalog: r,
                    catalogWid: n,
                    checkmarkCollectionId: undefined
                });
                if (r) {
                    r.markProductCollectionOld();
                }
                return t.prototype.add.call(this, o, {
                    merge: true
                });
            });
            function r(t) {
                return e.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.findNextProductPage = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = this.convertCatalogIdForLidMigration(e);
                if (t === true) {
                    o("WAWebProductCatalogLogQplEvents").qplPointCatalogView("datasource_start");
                }
                const r = yield this.update(n);
                if (t === true) {
                    o("WAWebProductCatalogLogQplEvents").qplPointCatalogView("datasource_end");
                }
                const a = Array.isArray(r) ? r[0] : r;
                return a.productCollection.getProductModels();
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.findCollectionMembership = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                const r = this.convertCatalogIdForLidMigration(e);
                let o = this.get(r);
                const a = o && !o.stale ? o.afterCursor : undefined;
                const i = yield this._queryCatalog({
                    afterCursor: a,
                    catalog: o,
                    catalogWid: r,
                    checkmarkCollectionId: n
                });
                t.prototype.add.call(this, i, {
                    merge: true
                });
                o = this.get(r);
                if (o) {
                    o.stale = false;
                }
            });
            function r(t, n) {
                return e.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.removeCatalog = function(t) {
            const e = this.convertCatalogIdForLidMigration(t);
            const n = this.get(e);
            if (n) {
                this.remove(e);
            } else {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Catalog data cleanup called on a non-existent catalogId"
                ])));
            }
        };
        a_prototype.get = function(n) {
            return t.prototype.get.call(this, this.convertCatalogIdForLidMigration(n));
        };
        a_prototype.assertGet = function(n) {
            return t.prototype.assertGet.call(this, this.convertCatalogIdForLidMigration(n));
        };
        a_prototype.convertCatalogIdForLidMigration = function(t) {
            const e = t instanceof r("WAWebWid") ? t : o("WAWebWidFactory").createWid(t.toString());
            return e;
        };
        a_prototype.updateSelfCatalogErrorEmailMask = function(t) {
            this.selfCatalogErrorEmailMask = t;
            this.trigger("change:selfCatalogErrorEmailMask");
        };
        a_prototype.resetSelfCatalogErrorEmailMask = function() {
            this.updateSelfCatalogErrorEmailMask(null);
        };
        a_prototype.hasSelfCatalogErrorEmailMask = function() {
            return this.selfCatalogErrorEmailMask != null;
        };
        a_prototype.shouldUseCatalogErrorEmailMask = function(t) {
            return !(t == null || !o("WAWebUserPrefsMeUser").isMeAccount(t));
        };
        return a;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    c.model = r("WAWebCatalogModel");
    const d = new c;
    l.CatalogCollection = d;
}, 98);