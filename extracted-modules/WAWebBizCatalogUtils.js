__d("WAWebBizCatalogUtils", [
    "Promise",
    "WATypeUtils",
    "WAWebCatalogCollection",
    "WAWebFrontendConstants",
    "WAWebNonEmptyString",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "qpl"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = r("qpl")._(774780089, "3436");
    const u = r("qpl")._(774781666, "3445");
    const c = r("qpl")._(774768970, "3447");
    const d = 3;
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.getData().length || 0;
            const IsCached = !e.getCanLoadMore() || !y(n, e.listItemHeight);
            if (t) {
                o("WAWebQplFlowWrapper").QPL.markerAnnotate(t, {
                    bool: {
                        IsCached,
                        IsConsumer: !o("WAWebUserPrefsMeUser").isMeAccount(e.catalog.id)
                    }
                });
            }
            if (IsCached) {
                return true;
            }
            yield e.loadMore(true);
            const a = e.getData().length || 0;
            if (y(a, e.listItemHeight)) {
                return e.loadInitialItems();
            }
            return true;
        });
        return p.apply(this, arguments);
    }
    class _ {
        constructor(e, t, n, o){
            this.loading = null;
            this.catalog = e;
            this.collectionId = t;
            this.forCatalogManager = n;
            this.listItemHeight = o;
            if (r("isStringNullOrEmpty")(t)) {
                this.canLoadMoreAllItems = e.productCollection.length > 0 ? !!this.catalog.afterCursor : true;
            } else {
                this.canLoadMoreCollectionItems = e.collections.length > 0 ? this.catalog.collections.get(t)?.afterCursor !== "" : true;
            }
        }
        loadMore(a) {
            const t = this;
            if (this.loading) {
                return this.loading;
            }
            if (!this.getCanLoadMore()) {
                return (e || (e = n("Promise"))).resolve();
            }
            const collectionId = this.collectionId;
            if (r("isStringNullOrEmpty")(collectionId)) {
                this.loading = o("WAWebCatalogCollection").CatalogCollection.update(this.catalog.id).then(()=>{
                    t.canLoadMoreAllItems = !!t.catalog.afterCursor;
                    t.loading = null;
                });
            } else {
                const l = a === true ? s : undefined;
                this.loading = this.catalog.collections.findCollectionProducts({
                    forCatalogManager: false,
                    catalogWid: this.catalog.id,
                    collectionId,
                    markerId: l
                }).then(()=>{
                    let e;
                    t.canLoadMoreCollectionItems = !!((e = t.catalog.collections.get(collectionId)) != null && e.afterCursor);
                    t.loading = null;
                });
            }
            return this.loading;
        }
        loadInitialItems() {
            const e = s;
            return m(this, e);
        }
        getCanLoadMore() {
            return this.canLoadMoreCollectionItems || this.canLoadMoreAllItems;
        }
        getData() {
            const collectionId = this.collectionId;
            let t;
            if (r("isStringNullOrEmpty")(collectionId)) {
                t = this.catalog.productCollection.getProductModels(this.forCatalogManager) || [];
            } else {
                t = this.catalog.collections.get(collectionId)?.productCollection.getProductModels(this.forCatalogManager) || [];
            }
            return t.map((e)=>({
                    product: e,
                    collection: undefined
                }));
        }
    }
    class f {
        constructor({ canLogQpl, catalog, forCatalogManager, listItemHeight }){
            this.loading = null;
            this.catalog = catalog;
            this.forCatalogManager = forCatalogManager;
            this.listItemHeight = listItemHeight;
            this.canLoadMoreCollections = catalog.collections.length > 0 ? !!this.catalog.collections.afterCursor : true;
            this.canLoadMoreCatalog = catalog.productCollection.length > 0 ? !!this.catalog.afterCursor : true;
            this.canLogQpl = canLogQpl;
        }
        loadMore(r) {
            const t = this;
            if (this.loading) {
                return this.loading;
            }
            if (!this.getCanLoadMore()) {
                return (e || (e = n("Promise"))).resolve();
            }
            if (this.canLoadMoreCollections) {
                const a = this.canLogQpl && r === true ? u : undefined;
                this.loading = this.catalog.collections.findCollectionsList(this.catalog.id, d, this.forCatalogManager, a).then(()=>{
                    t.canLoadMoreCollections = !!t.catalog.collections.afterCursor;
                    t.loading = null;
                });
            } else {
                this.loading = o("WAWebCatalogCollection").CatalogCollection.update(this.catalog.id).then(()=>{
                    t.canLoadMoreCatalog = !!t.catalog.afterCursor;
                    t.loading = null;
                });
            }
            return this.loading;
        }
        loadInitialItems() {
            const e = this.canLogQpl ? u : undefined;
            return m(this, e);
        }
        getCanLoadMore() {
            return this.canLoadMoreCollections || this.canLoadMoreCatalog;
        }
        getData() {
            const e = this;
            const t = this.catalog.collections.getCollectionModels(this.forCatalogManager);
            const n = t.reduce((t = [], item)=>{
                const r = item.productCollection.getProductModels(e.forCatalogManager) || [];
                if (r.length !== 0) {
                    t.push({
                        collection: item,
                        product: undefined
                    });
                    if (r.length > d) {
                        r.length = d;
                    }
                    t.push(...r.map((e)=>({
                            product: e,
                            collection: item
                        })));
                }
                return t;
            }, []);
            const r = n.length > 0;
            if (this.canLoadMoreCollections) {
                return n;
            }
            if (r) {
                n.push({
                    allItems: {
                        totalItemsCount: n.length
                    }
                });
            }
            const o = this.catalog.productCollection.getProductModels(this.forCatalogManager).map((e)=>({
                    product: e,
                    collection: undefined
                }));
            n.push(...o);
            return n;
        }
    }
    class g {
        constructor(e, t, n, r){
            this.loading = null;
            this.canLoadMoreCollections = true;
            this.catalog = e;
            this.forCatalogManager = t;
            this.listItemHeight = n;
            this.canLogQpl = r;
        }
        loadMore(r) {
            const t = this;
            if (this.loading) {
                return this.loading;
            }
            if (!this.getCanLoadMore()) {
                return (e || (e = n("Promise"))).resolve();
            }
            if (this.canLoadMoreCollections) {
                const o = this.canLogQpl && r === true ? c : undefined;
                this.loading = this.catalog.collections.findCollectionsList(this.catalog.id, d, this.forCatalogManager, o).then(()=>{
                    t.canLoadMoreCollections = !!t.catalog.collections.afterCursor;
                    t.loading = null;
                });
            }
            return this.loading || (e || (e = n("Promise"))).resolve();
        }
        loadInitialItems() {
            const e = this.canLogQpl ? c : undefined;
            return m(this, e);
        }
        getCanLoadMore() {
            return this.canLoadMoreCollections;
        }
        resetData() {
            let e;
            if ((e = this.catalog) != null && e.collections) {
                this.catalog.collections.reset();
                this.catalog.collections.afterCursor = "";
            }
            this.canLoadMoreCollections = true;
        }
        getData() {
            return this.catalog.collections.getCollectionModels(this.forCatalogManager).map((e)=>({
                    collection: e,
                    product: undefined
                }));
        }
    }
    class h {
        constructor(e, t, n){
            this.loading = null;
            this.canLoadMore = true;
            this.catalog = e;
            this.catalog.stale = true;
            this.catalog.markProductCollectionOld();
            this.catalog.productCollection.reset();
            this.listItemHeight = t;
            this.collectionId = o("WAWebNonEmptyString").asMaybeNonEmptyString(n);
        }
        loadMore() {
            const t = this;
            if (this.loading) {
                return this.loading;
            }
            if (this.getCanLoadMore()) {
                if (this.canLoadMore) {
                    if (r("isStringNullOrEmpty")(this.collectionId)) {
                        this.loading = o("WAWebCatalogCollection").CatalogCollection.update(this.catalog.id).then(()=>{
                            t.canLoadMore = !!t.catalog.afterCursor;
                            t.loading = null;
                        });
                    } else {
                        this.loading = o("WAWebCatalogCollection").CatalogCollection.findCollectionMembership(this.catalog.id, this.collectionId).then(()=>{
                            t.canLoadMore = !!t.catalog.afterCursor;
                            t.loading = null;
                        });
                    }
                }
                return this.loading || (e || (e = n("Promise"))).resolve();
            }
            return (e || (e = n("Promise"))).resolve();
        }
        loadInitialItems() {
            return m(this);
        }
        getCanLoadMore() {
            return this.canLoadMore;
        }
        getData() {
            return this.catalog.productCollection.getProductModels(true).map((e)=>({
                    product: e,
                    collection: undefined
                }));
        }
    }
    function y(e, listItemHeight) {
        return e * listItemHeight < window.innerHeight;
    }
    const C = (()=>{
        function e(e) {
            this.dataSource = e;
        }
        const e_prototype = e.prototype;
        e_prototype.isScrollAtBottom = function(t) {
            return t.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE >= t.scrollHeight - t.clientHeight;
        };
        e_prototype.willLoadMore = function(t) {
            return !!(this.dataSource.loading || this.isScrollAtBottom(t));
        };
        e_prototype.onScroll = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                if (this.dataSource.loading) {
                    yield this.dataSource.loading;
                    return true;
                }
                if (this.isScrollAtBottom(t)) {
                    yield this.dataSource.loadMore();
                    return true;
                }
                return false;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    function b(e, t, n) {
        const a = o("WAWebCatalogCollection").CatalogCollection.get(e);
        let i;
        let l;
        if (a) {
            if (!r("isStringNullOrEmpty")(t) && n) {
                const s = a.productCollection.get(n.id);
                i = s && a.productCollection.indexOf(s);
                return {
                    productId: n.id.toString(),
                    productIndex: o("WATypeUtils").isNumber(i) && i > -1 ? i.toString() : undefined
                };
            }
            if (!r("isStringNullOrEmpty")(t)) {
                const u = a.collections.get(t);
                l = u && a.collections.indexOf(u);
                const c = n && (u == null ? undefined : u.productCollection.get(n.id));
                i = c && (u == null ? undefined : u.productCollection.indexOf(c));
            }
            return {
                collectionId: t || "",
                productId: n == null ? undefined : n.id.toString(),
                collectionIndex: o("WATypeUtils").isNumber(l) && l > -1 ? l.toString() : undefined,
                productIndex: o("WATypeUtils").isNumber(i) && i > -1 ? i.toString() : undefined
            };
        }
    }
    l.SingleCollectionDataSource = _;
    l.CatalogWithCollectionsDataSource = f;
    l.CollectionsDataSource = g;
    l.CollectionsContentDataSource = h;
    l.CatalogListItemScrollHelper = C;
    l.getProductStatsInFetched = b;
}, 98);