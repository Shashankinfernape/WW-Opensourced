__d("WAWebTextStatusModel", [
    "WAWebBaseModel",
    "WAWebFrontendTextStatusGetters",
    "WAWebTextStatusCollection",
    "WAWebTextStatusGetters",
    "WAWebWid",
    "isStringNotNullAndNotWhitespaceOnly"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.status = o("WAWebBaseModel").prop();
            t.stale = o("WAWebBaseModel").session(true);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getCollection = function() {
            return o("WAWebTextStatusCollection").TextStatusCollection;
        };
        t_prototype.isValidTextStatus = function() {
            return this.status !== undefined && r("isStringNotNullAndNotWhitespaceOnly")(this.status);
        };
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebTextStatusGetters").clearTextStatusGetterCacheFor(this);
            o("WAWebFrontendTextStatusGetters").clearFrontendTextStatusGetterCacheFor(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "textStatus";
    e.idClass = r("WAWebWid");
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);