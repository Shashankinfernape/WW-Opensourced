__d("WAWebFavoriteCollection", [
    "WAWebBaseCollection",
    "WAWebContactCollection",
    "WAWebFavoriteModel",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            let t;
            t = e.call(this) || this;
            t.listenTo(t, "add", function(e) {
                const t = o("WAWebContactCollection").ContactCollection.get(o("WAWebWidFactory").createWid(e.id));
                if (t) {
                    t.set("isFavorite", true);
                }
            });
            t.listenTo(t, "remove", function(e) {
                const t = o("WAWebContactCollection").ContactCollection.get(o("WAWebWidFactory").createWid(e.id));
                if (t) {
                    t.set("isFavorite", false);
                }
            });
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebFavoriteModel").Favorite;
    const s = new e;
    l.FavoriteCollection = s;
}, 98);