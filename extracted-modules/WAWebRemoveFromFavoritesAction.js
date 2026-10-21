__d("WAWebRemoveFromFavoritesAction", [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebAddToFavoritesAction",
    "WAWebDBFavoriteDatabaseApi",
    "WAWebFavoriteCollection",
    "WAWebFavoritesLogging",
    "WAWebFavoritesSync",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebSyncdCoreApi",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function d() {
        if (o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale()) {
            return s._("Removing from Favourites list");
        }
        return s._("Removing from Favourites list");
    }
    function m() {
        if (o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale()) {
            return s._("Removed from Favourites list");
        }
        return s._("Removed from Favourites list");
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
                const i = t.toString();
                if (a.entryPoint != null) {
                    o("WAWebFavoritesLogging").logRemovingMessagingFavorites([
                        i
                    ], a.entryPoint);
                }
                const l = yield o("WAWebDBFavoriteDatabaseApi").getAllFavorites();
                const u = l.find(({ id })=>id === i);
                const p = l.filter(({ id })=>id !== i);
                const _ = o("WATimeUtils").unixTime();
                const f = yield r("WAWebFavoritesSync").getFavoritesMutation(p, _);
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[Favorites] removeFromFavoritesAction, mutation generated"
                ])));
                const g = o("WAWebSyncdCoreApi").lockForSync([
                    "favorite",
                    "chat"
                ], [
                    f
                ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    return o("WAWebDBFavoriteDatabaseApi").removeFavorites([
                        i
                    ]);
                })).then(()=>o("WAWebFavoriteCollection").FavoriteCollection.remove([
                        i
                    ]));
                if (a.suppressToast === true) {
                    yield g;
                } else {
                    const h = new (o("WAWebActionToast.react")).ActionType(d());
                    const y = g.then(()=>new (o("WAWebActionToast.react")).ActionType(m(), u ? {
                            actionText: s._("Undo"),
                            actionHandler: function() {
                                return o("WAWebAddToFavoritesAction").addToFavoritesAction(u, {
                                    entryPoint: a.entryPoint
                                });
                            }
                        } : undefined));
                    o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
                        id: o("WAWebActionToast.react").genId(),
                        initialAction: h,
                        pendingAction: y
                    }));
                }
            }
        });
        return _.apply(this, arguments);
    }
    l.removeFromFavoritesAction = p;
}, 226);