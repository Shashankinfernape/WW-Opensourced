__d("WAWebAddToFavoritesAction", [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebActionToast.react",
    "WAWebConfirmPopup.react",
    "WAWebDBFavoriteDatabaseApi",
    "WAWebFavoriteCollection",
    "WAWebFavoritesLogging",
    "WAWebFavoritesSync",
    "WAWebFbtCommon",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebModalManager",
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
            return s._("Adding to Favourites list");
        }
        return s._("Adding to Favourites list");
    }
    function m() {
        if (o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale()) {
            return s._("Added to Favourites list");
        }
        return s._("Added to Favourites list");
    }
    function PComponent(e) {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("OK")}>{o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._("You can't add more than {favorites_limit} favourites", [
            s._param("favorites_limit", e)
        ]) : s._("You can't add more than {favorites_limit} favourites", [
            s._param("favorites_limit", e)
        ])}</Component>);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
                const l = yield o("WAWebDBFavoriteDatabaseApi").getAllFavorites();
                const s = o("WAWebABProps").getABPropConfigValue("favorites_limit") ?? 100;
                if (l.length + (Array.isArray(t) ? t.length : 1) > s) {
                    PComponent(s);
                    return;
                }
                let u;
                if (Array.isArray(t)) {
                    let _ = yield o("WAWebDBFavoriteDatabaseApi").getNextFavoriteOrderIndex();
                    u = t.map((e)=>({
                            id: e.toString(),
                            orderIndex: _++
                        }));
                } else {
                    u = [
                        babelHelpers.extends({}, t)
                    ];
                }
                if (a.entryPoint != null) {
                    o("WAWebFavoritesLogging").logAddingMessagingFavorites(u, a.entryPoint);
                }
                const f = l.concat(u);
                const g = o("WATimeUtils").unixTime();
                const h = yield r("WAWebFavoritesSync").getFavoritesMutation(f, g);
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[Favorites] addToFavoritesAction, mutation generated"
                ])));
                const y = o("WAWebSyncdCoreApi").lockForSync([
                    "favorite",
                    "chat"
                ], [
                    h
                ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    return o("WAWebDBFavoriteDatabaseApi").addOrEditFavorites(u);
                })).then(()=>o("WAWebFavoriteCollection").FavoriteCollection.add(u.map((e)=>babelHelpers.extends({}, e))));
                if (a.suppressToast === true) {
                    yield y;
                } else {
                    const C = new (o("WAWebActionToast.react")).ActionType(d());
                    const b = y.then(()=>new (o("WAWebActionToast.react")).ActionType(m()));
                    o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
                        id: o("WAWebActionToast.react").genId(),
                        initialAction: C,
                        pendingAction: b
                    }));
                }
            }
        });
        return f.apply(this, arguments);
    }
    l.showFavoritesLimitExceededPopup = PComponent;
    l.addToFavoritesAction = _;
}, 226);