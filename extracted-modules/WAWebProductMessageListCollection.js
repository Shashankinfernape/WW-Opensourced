__d("WAWebProductMessageListCollection", [
    "Promise",
    "WAWebBizProductCatalogAction",
    "WAWebProductMessageListModel",
    "WAWebStaleBaseCollection",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function r(...a_1) {
            let r;
            r = t.call(this, ...a_1) || this;
            r.findQueryImpl = function(e) {
                return r.findImpl(e).then((e)=>[
                        e
                    ]);
            };
            r.findImpl = function(t, o) {
                const a = r.get(t);
                if (a == null) {
                    return (e || (e = n("Promise"))).resolve({
                        id: t
                    });
                }
                return r._queryProductList(a, o?.markerId);
            };
            return babelHelpers.assertThisInitialized(r) || babelHelpers.assertThisInitialized(r);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype._queryProductList = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const e_catalogId = e.catalogId;
                const _products = yield o("WAWebBizProductCatalogAction").queryProductList(e_catalogId, e.getNextProductBatchToLoad(), undefined, undefined, t);
                return {
                    id: e.id,
                    _products
                };
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.getOrAdd = function({ catalogOwnerJid, id, productList, requiresDirectConnection, title }) {
            let l = this.get(id);
            if (l != null) {
                return l;
            }
            if (catalogOwnerJid == null) {
                return null;
            }
            const catalogId = o("WAWebWidFactory").createWid(catalogOwnerJid);
            l = this.add({
                id,
                catalogId,
                _productList: productList,
                title,
                requiresDirectConnection
            })[0];
            return l ?? null;
        };
        return r;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    s.model = o("WAWebProductMessageListModel").ProductMessageList;
    const u = new s;
    l.ProductMessageListCollection = u;
}, 98);