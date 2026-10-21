__d("WAWebFavoritesLogging", [
    "WALogger",
    "WAWebFavoriteCollection",
    "WAWebMessagingFavoritesUpdateWamEvent",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t, n) {
        try {
            let a = 0;
            let i = 0;
            let l = 0;
            let s = 0;
            o("WAWebFavoriteCollection").FavoriteCollection.forEach((e)=>{
                if (r("WAWebWid").isGroup(e.id)) {
                    l++;
                } else {
                    a++;
                }
            });
            i = a;
            s = l;
            t.forEach((e)=>{
                if (r("WAWebWid").isGroup(e.id)) {
                    s++;
                } else {
                    i++;
                }
            });
            new (o("WAWebMessagingFavoritesUpdateWamEvent")).MessagingFavoritesUpdateWamEvent({
                favoritesUpdateEntryPoint: n,
                contactFavCountBeforeUpdate: a,
                contactFavCountAfterUpdate: i,
                groupFavCountBeforeUpdate: l,
                groupFavCountAfterUpdate: s
            }).commit();
        } catch (error) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Favorites] logAddingMessagingFavorites, error: ",
                ""
            ])), error).sendLogs("logAddingMessagingFavorites");
        }
    }
    function c(e, t) {
        try {
            let n = 0;
            let a = 0;
            let i = 0;
            let l = 0;
            o("WAWebFavoriteCollection").FavoriteCollection.forEach((e)=>{
                if (r("WAWebWid").isGroup(e.id)) {
                    i++;
                } else {
                    n++;
                }
            });
            a = n;
            l = i;
            e.forEach((e)=>{
                if (r("WAWebWid").isGroup(e)) {
                    l--;
                } else {
                    a--;
                }
            });
            a = Math.max(a, 0);
            l = Math.max(l, 0);
            new (o("WAWebMessagingFavoritesUpdateWamEvent")).MessagingFavoritesUpdateWamEvent({
                favoritesUpdateEntryPoint: t,
                contactFavCountBeforeUpdate: n,
                contactFavCountAfterUpdate: a,
                groupFavCountBeforeUpdate: i,
                groupFavCountAfterUpdate: l
            }).commit();
        } catch (error) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[Favorites] logRemovingMessagingFavorites, error: ",
                ""
            ])), error).sendLogs("logRemovingMessagingFavorites");
        }
    }
    l.logAddingMessagingFavorites = u;
    l.logRemovingMessagingFavorites = c;
}, 98);