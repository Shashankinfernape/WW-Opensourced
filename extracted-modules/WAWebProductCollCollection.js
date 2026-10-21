__d("WAWebProductCollCollection", [
    "WALogger",
    "WAWebABProps",
    "WAWebBizProductCatalogBridge",
    "WAWebBusinessProfileCollection",
    "WAWebCatalogVariantHelper",
    "WAWebProductCollModel",
    "WAWebQplFlowWrapper",
    "WAWebQueryProductCollections",
    "WAWebQueryProductSingleCollection",
    "WAWebSocketModel",
    "WAWebStaleBaseCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = 100;
    const c = 10;
    function d(e) {
        const t = {
            id: e.id,
            name: e.name,
            reviewStatus: e.reviewStatus,
            totalItemsCount: e.totalItemsCount,
            canAppeal: e.canAppeal,
            commerceUrl: e.commerceUrl,
            rejectReason: e.rejectReason
        };
        return t;
    }
    const m = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.afterCursor = "";
            e.$ProductCollCollection$p_1 = false;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.add = function(n, r) {
            if (!this.$ProductCollCollection$p_1 && o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_3")) {
                this.$ProductCollCollection$p_1 = true;
                this.stopListening(o("WAWebSocketModel").Socket, "change:stream");
            }
            return t.prototype.add.call(this, n, r);
        };
        a_prototype.findCollectionsList = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, productsCount, a, i) {
                const l = this;
                if (i) {
                    o("WAWebQplFlowWrapper").QPL.markerPoint(i, "datasource_collections_start");
                }
                try {
                    let s;
                    let m;
                    let p;
                    const _ = yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(t);
                    if (o("WAWebCatalogVariantHelper").shouldRequestVariantInfo(_)) {
                        s = o("WAWebCatalogVariantHelper").FULL_VARIANT_INFO_FIELDS;
                        m = o("WAWebCatalogVariantHelper").VARIANT_THUMBNAIL_IMAGE_SIZE;
                        p = o("WAWebCatalogVariantHelper").VARIANT_THUMBNAIL_IMAGE_SIZE;
                    }
                    const f = yield r("WAWebQueryProductCollections")({
                        catalogWid: t,
                        afterCursor: this.afterCursor,
                        limit: c,
                        productsCount,
                        width: u,
                        height: u,
                        variantInfoFields: s,
                        variantThumbnailHeight: m,
                        variantThumbnailWidth: p
                    });
                    if (i) {
                        o("WAWebQplFlowWrapper").QPL.markerPoint(i, "datasource_collections_end");
                    }
                    this.afterCursor = f.afterCursor;
                    this.add(f.collections.map(d), {
                        merge: true
                    });
                    f.collections.forEach((e)=>{
                        const n = l.get(e.id);
                        if (n) {
                            n.addProducts(e.products.map((e)=>o("WAWebBizProductCatalogBridge").mapProductResponseToModel(e, t)));
                        }
                    });
                    this.trigger("change");
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed findCollectionsList, error: ",
                        ""
                    ])), error).verbose().sendLogs("Find collections list failed");
                    throw error;
                }
            });
            function a(e, n, r, o) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.getCollectionModels = function(t) {
            const e = this.toArray();
            if (t) {
                return e;
            }
            return e.filter((e)=>!e.isHidden && e.reviewStatus === "APPROVED");
        };
        a_prototype.findCollectionProducts = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ catalogWid, collectionId, forCatalogManager, markerId }) {
                let l = this.get(collectionId);
                const m = l ? l.afterCursor : undefined;
                if (markerId) {
                    o("WAWebQplFlowWrapper").QPL.markerPoint(markerId, "datasource_start");
                }
                try {
                    let p;
                    let _;
                    let f;
                    const g = yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(catalogWid);
                    if (o("WAWebCatalogVariantHelper").shouldRequestVariantInfo(g)) {
                        p = o("WAWebCatalogVariantHelper").FULL_VARIANT_INFO_FIELDS;
                        _ = o("WAWebCatalogVariantHelper").VARIANT_THUMBNAIL_IMAGE_SIZE;
                        f = o("WAWebCatalogVariantHelper").VARIANT_THUMBNAIL_IMAGE_SIZE;
                    }
                    const h = yield r("WAWebQueryProductSingleCollection")({
                        catalogWid,
                        collectionId,
                        afterCursor: m,
                        limit: c,
                        width: u,
                        height: u,
                        variantInfoFields: p,
                        variantThumbnailHeight: _,
                        variantThumbnailWidth: f
                    });
                    if (markerId) {
                        o("WAWebQplFlowWrapper").QPL.markerPoint(markerId, "datasource_end");
                    }
                    if (h.collections.length === 1) {
                        this.add(h.collections.map(d), {
                            merge: true
                        });
                        l = this.get(collectionId);
                        if (l) {
                            l.addProducts(h.collections[0].products.map((e)=>o("WAWebBizProductCatalogBridge").mapProductResponseToModel(e, catalogWid)));
                            l.afterCursor = h.afterCursor;
                        }
                    }
                } catch (error) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed findCollectionProducts, error: ",
                        ""
                    ])), error).verbose().sendLogs("Find collection products failed");
                    throw error;
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    m.model = r("WAWebProductCollModel");
    l.ProductCollCollection = m;
}, 98);