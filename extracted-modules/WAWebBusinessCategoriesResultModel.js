__d("WAWebBusinessCategoriesResultModel", [
    "WAWebBaseModel",
    "WAWebBusinessCategoriesResultCollection"
], function(t, n, r, o, a, i, l) {
    const e = "__empty_query__";
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.categories = o("WAWebBaseModel").prop();
            t.notABizId = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getCollection = function() {
            return o("WAWebBusinessCategoriesResultCollection").BusinessCategoriesResultCollection;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "BusinessCategoriesResult";
    const u = o("WAWebBaseModel").defineModel(s);
    l.BUSINESS_CATEGORY_EMPTY_STR_ID = e;
    l.BusinessCategoriesResult = u;
}, 98);