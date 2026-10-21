__d("WAWebFavoritesUtils", [
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFavoriteCollection",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return o("WAWebFavoriteCollection").FavoriteCollection.toArray().map((e)=>o("WAWebChatCollection").ChatCollection.get(e.id)).filter((e)=>e != null).sort((e, t)=>{
            const a = o("WAWebFavoriteCollection").FavoriteCollection.get(e.id.toString());
            const i = o("WAWebFavoriteCollection").FavoriteCollection.get(t.id.toString());
            return (a?.orderIndex ?? 0) - (i?.orderIndex ?? 0);
        });
    }
    function s() {
        const e = [];
        for (const t of o("WAWebFavoriteCollection").FavoriteCollection.toArray()){
            const a = o("WAWebWidFactory").createWid(t.id);
            const i = o("WAWebChatCollection").ChatCollection.get(t.id);
            const l = i?.contact ?? o("WAWebContactCollection").ContactCollection.get(a) ?? null;
            if (!(i == null && l == null)) {
                e.push({
                    wid: a,
                    chat: i ?? null,
                    contact: l,
                    orderIndex: t.orderIndex
                });
            }
        }
        e.sort((e, t)=>e.orderIndex - t.orderIndex);
        return e;
    }
    function u(e = 3) {
        return s().filter((e)=>!o("WAWebBotUtils").isMetaAiBot(e.wid)).slice(0, e);
    }
    l.getFavoriteChats = e;
    l.getFavoriteItems = s;
    l.getFavoriteItemsLimited = u;
}, 98);