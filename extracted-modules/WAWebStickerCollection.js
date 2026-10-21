__d("WAWebStickerCollection", [
    "WAWebBaseCollection",
    "WAWebStickerGetters",
    "WAWebStickerModel",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = {
        PENDING: "PENDING",
        SUCCESS: "SUCCESS",
        ERROR: "ERROR"
    };
    const s = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.fetch = function(t) {
            throw r("err")(`${this.constructor.name}.fetch is not implemented`);
        };
        t_prototype.remove = function(n, r) {
            const t = e.prototype.remove.call(this, n, r);
            t.forEach((e)=>{
                if (e != null) {
                    o("WAWebStickerGetters").clearStickerGetterCacheFor(e);
                }
            });
            return t;
        };
        t_prototype.reset = function() {
            this.forEach((e)=>o("WAWebStickerGetters").clearStickerGetterCacheFor(e));
            e.prototype.reset.call(this);
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebStickerModel").StickerModel;
    const u = new s;
    l.FETCH_STATE = e;
    l.StickerCollectionImpl = s;
    l.StickerCollection = u;
}, 98);