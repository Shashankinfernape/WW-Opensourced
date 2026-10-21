__d("WAWebAddToFavoritesModalLoadable", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebAddToFavoritesModal.react").__setRef("WAWebAddToFavoritesModalLoadable").load();
        return e;
    }), "AddToFavoritesModal");
    const d = r("WAWebLoadable")({
        loader: c,
        loading: function(t) {
            return u.jsx(r("WAWebLoadingModal.react"), {
                title: o("WAWebL10NIsUsingSupportedBritishEnglishLocale").isUsingSupportedBritishEnglishLocale() ? s._("Add to favourites") : s._("Add to favourites"),
                error: !!t.error
            });
        }
    });
    l.AddToFavoritesModalLoadable = d;
}, 226);