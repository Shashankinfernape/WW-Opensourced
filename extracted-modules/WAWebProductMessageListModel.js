__d("WAWebProductMessageListModel", [
    "WAWebBaseModel",
    "WAWebBizProductCatalogBridge",
    "WAWebBizProductMessageListAction",
    "WAWebCatalogCollection",
    "WAWebMsgKey",
    "WAWebProductCollection",
    "WAWebProductMessageListConstant",
    "WAWebProductTypes",
    "compactMap",
    "countWhere",
    "sumBy"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ERROR",
        "SUCCESS"
    ];
    const s = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.id = o("WAWebBaseModel").prop();
            e.catalogId = o("WAWebBaseModel").prop();
            e.title = o("WAWebBaseModel").prop();
            e.requiresDirectConnection = o("WAWebBaseModel").prop();
            e._productsLoadingStatus = o("WAWebBaseModel").session();
            e._productList = o("WAWebBaseModel").session();
            e._products = o("WAWebBaseModel").session();
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.initialize = function() {
            const e = this;
            t.prototype.initialize.call(this);
            this.productCollection = o("WAWebCatalogCollection").CatalogCollection.gadd({
                id: this.catalogId
            }).productCollection;
            this._productsLoadingStatus = new Map;
            this.listenTo(this, "change:_products", function() {
                return e.triggerProductUpdate();
            });
            this.triggerProductUpdate();
            this.listenTo(this.productCollection, "remove", function(t) {
                return e.$ProductMessageListImpl$p_1(t.id);
            });
        };
        n_prototype.$ProductMessageListImpl$p_1 = function(t) {
            o("WAWebBizProductMessageListAction").updateProductListHeaderImageRejected(t, this.id);
        };
        n_prototype.triggerProductUpdate = function() {
            const e = this;
            if (this._products != null) {
                this._products.forEach((t)=>{
                    const n = e._getFetchStatus(t);
                    e.setProductLoadingStatus(t.id, n);
                    if (t.status === "DELETED") {
                        e.$ProductMessageListImpl$p_1(t.id);
                    }
                    if (t.status !== "DELETED" && n !== "ERROR") {
                        const r = o("WAWebBizProductCatalogBridge").mapProductResponseToModel(t, e.catalogId);
                        if (r.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED) {
                            e.$ProductMessageListImpl$p_1(t.id);
                        }
                        e.productCollection.add(r, {
                            merge: true
                        });
                    }
                });
                this._products = undefined;
            }
        };
        n_prototype.getNextProductBatchToLoad = function() {
            const e = this;
            const t = this.getPageSize();
            const n = this._productList.productSections.reduce((acc, { products })=>[].concat(acc, r("compactMap")(products, function({ productId }) {
                    return productId;
                }).filter((t)=>e.getProductLoadingStatus(t) === "NONE")), []).slice(0, t);
            n.forEach((t)=>e.setProductLoadingStatus(t, "PENDING"));
            return n;
        };
        n_prototype.getPageSize = function() {
            const PRODUCT_PAGE_SIZE = o("WAWebProductTypes").PRODUCT_PAGE_SIZE;
            const t = this.getProductSize();
            if (t < 3 * PRODUCT_PAGE_SIZE) {
                return t;
            }
            return PRODUCT_PAGE_SIZE * 2;
        };
        n_prototype.getProductSize = function() {
            return r("sumBy")(this._productList.productSections, function({ products }) {
                return products.length;
            });
        };
        n_prototype.setProductLoadingStatus = function(t, n) {
            this._productsLoadingStatus.set(t, n);
        };
        n_prototype.getProductLoadingStatus = function(t) {
            return this._productsLoadingStatus.get(t) || "NONE";
        };
        n_prototype.getTotalProductsFetchedOrFailed = function() {
            return r("countWhere")(Array.from(this._productsLoadingStatus), function([n, r]) {
                return e.includes(r);
            });
        };
        n_prototype.getProductList = function() {
            return this._productList;
        };
        n_prototype.getSections = function() {
            return this._productList.productSections;
        };
        n_prototype.getSectionsCount = function() {
            return this._productList.productSections.reduce((acc, { title })=>{
                if (title != null && title !== "") {
                    return acc + 1;
                }
                return acc;
            }, 0);
        };
        n_prototype.isFetching = function() {
            let e = false;
            this._productsLoadingStatus.forEach((t)=>{
                if (t === "PENDING") {
                    e = true;
                }
            });
            return e;
        };
        n_prototype._getFetchStatus = function(t) {
            if (t.status === o("WAWebProductMessageListConstant").INVALID_PRODUCT_TOKEN || !t.image_cdn_urls) {
                return "ERROR";
            }
            return "SUCCESS";
        };
        return n;
    })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "product_list";
    s.idClass = r("WAWebMsgKey");
    const u = o("WAWebBaseModel").defineModel(s);
    l.ProductMessageList = u;
}, 98);