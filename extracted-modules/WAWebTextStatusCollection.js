__d("WAWebTextStatusCollection", [
    "fbt",
    "WAWebFrontendTextStatusGetters",
    "WAWebStaleBaseCollection",
    "WAWebStatusContactAction",
    "WAWebTextStatusGetters",
    "WAWebTextStatusModel",
    "WAWebWid",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l, s) {
    const e = ((e)=>{
        function t(...a) {
            let t;
            t = e.call(this, ...a) || this;
            t.findImpl = function(e) {
                const t = e instanceof r("WAWebWid") ? o("WAWebWidFactory").asUserWidOrThrow(e) : o("WAWebWidFactory").createUserWidOrThrow(e);
                return o("WAWebStatusContactAction").getStatus(t);
            };
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.remove = function(n, r) {
            const t = e.prototype.remove.call(this, n, r);
            t.forEach((e)=>{
                if (e != null) {
                    o("WAWebTextStatusGetters").clearTextStatusGetterCacheFor(e);
                    o("WAWebFrontendTextStatusGetters").clearFrontendTextStatusGetterCacheFor(e);
                }
            });
            return t;
        };
        t_prototype.reset = function() {
            this.forEach((e)=>{
                o("WAWebTextStatusGetters").clearTextStatusGetterCacheFor(e);
                o("WAWebFrontendTextStatusGetters").clearFrontendTextStatusGetterCacheFor(e);
            });
            e.prototype.reset.call(this);
        };
        return t;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    e.model = r("WAWebTextStatusModel");
    e.idClass = r("WAWebWid");
    function u() {
        return s._("Hey there! I am using WhatsApp.").toString();
    }
    const c = new e;
    l.getDefaultTextStatus = u;
    l.TextStatusCollection = c;
}, 226);