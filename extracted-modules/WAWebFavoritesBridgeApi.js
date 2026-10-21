__d("WAWebFavoritesBridgeApi", [
    "WAWebFavoriteCollection"
], function(t, n, r, o, a, i, l) {
    const e = {
        setFavoriteCollection: function({ favorites }) {
            o("WAWebFavoriteCollection").FavoriteCollection.set(favorites.map((e)=>({
                    id: e.id,
                    orderIndex: e.orderIndex
                })));
        }
    };
    l.FavoritesBridgeApi = e;
}, 98);