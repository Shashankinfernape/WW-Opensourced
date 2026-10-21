__d("WAWebBusinessCategoriesResultCollection", [
    "WAWebBizBusinessProfileAction",
    "WAWebBusinessCategoriesResultModel",
    "WAWebL10N",
    "WAWebStaleBaseCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...i) {
            let t;
            t = e.call(this, ...i) || this;
            t.findImpl = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield o("WAWebBizBusinessProfileAction").queryBusinessCategories(e, r("WAWebL10N").getLocale());
                    const { categories, notABizId } = t;
                    return {
                        id: e,
                        categories,
                        notABizId
                    };
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    e.model = o("WAWebBusinessCategoriesResultModel").BusinessCategoriesResult;
    const s = new e;
    l.BusinessCategoriesResultCollectionImpl = e;
    l.BusinessCategoriesResultCollection = s;
}, 98);