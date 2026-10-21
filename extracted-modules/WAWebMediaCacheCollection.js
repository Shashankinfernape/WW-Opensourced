__d("WAWebMediaCacheCollection", [
    "WAWebMediaCacheModel",
    "WAWebStaleBaseCollection"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.add = function(n, r) {
            const t = e.prototype.add.call(this, n, r);
            if (this.length > this.constructor.maxsize) {
                const o = this.length - this.constructor.maxsize;
                const a = this.slice(0, o);
                this.remove(a);
            }
            return t;
        };
        return t;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    e.model = o("WAWebMediaCacheModel").ResizeRotateMediaCache;
    e.maxsize = 5;
    l.WAWebMediaResizeRotateCacheCollection = e;
}, 98);