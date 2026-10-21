__d("WAWebProductImageCollection", [
    "WAWebBaseCollection",
    "WAWebProductImageGetters",
    "WAWebProductImageModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.toArray = function() {
            const t = this;
            return e.prototype.filter.call(this, function(e) {
                if (e.old) {
                    t.remove(e);
                    return false;
                }
                return e;
            });
        };
        t_prototype.remove = function(n, r) {
            const t = e.prototype.remove.call(this, n, r);
            t.forEach((e)=>{
                if (e != null) {
                    o("WAWebProductImageGetters").clearProductImageGetterCacheFor(e);
                }
            });
            return t;
        };
        t_prototype.reset = function() {
            this.forEach(o("WAWebProductImageGetters").clearProductImageGetterCacheFor);
            e.prototype.reset.call(this);
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebProductImageModel").ProductImage;
    l.ProductImageCollection = e;
}, 98);