__d("WAWebFavoriteModel", [
    "WAWebBaseModel",
    "WAWebFavoriteCollection"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.orderIndex = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getCollection = function() {
            return o("WAWebFavoriteCollection").FavoriteCollection;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "favorite";
    const s = o("WAWebBaseModel").defineModel(e);
    l.Favorite = s;
}, 98);