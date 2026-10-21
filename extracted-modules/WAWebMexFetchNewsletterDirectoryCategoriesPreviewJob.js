__d("WAWebMexFetchNewsletterDirectoryCategoriesPreviewJob", [
    "WAWebMexClient",
    "WAWebMexFetchNewsletterDirectoryCategoriesPreviewJobQuery.graphql",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexFetchNewsletterDirectoryCategoriesPreviewJobQuery.graphql");
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ categories, countryCode, perCategoryLimit }) {
            const a = {
                input: {
                    categories: categories.map(o("WAWebNewsletterDirectoryCategoryUtils").getCategoryValueFromEnum),
                    country_code: countryCode === "" ? undefined : countryCode,
                    per_category_limit: perCategoryLimit
                },
                fetch_status_metadata: o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
            };
            const i = yield o("WAWebMexClient").fetchQuery(s, a);
            return i;
        });
        return c.apply(this, arguments);
    }
    l.mexFetchNewsletterDirectoryCategoriesPreview = u;
}, 98);