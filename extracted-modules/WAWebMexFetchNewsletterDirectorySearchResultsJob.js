__d("WAWebMexFetchNewsletterDirectorySearchResultsJob", [
    "WAWebMexClient",
    "WAWebMexFetchNewsletterDirectorySearchResultsJobQuery.graphql",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexFetchNewsletterDirectorySearchResultsJobQuery.graphql");
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ categories, cursorToken, limit, searchText }) {
            const i = {
                input: {
                    search_text: searchText,
                    categories: categories.map(o("WAWebNewsletterDirectoryCategoryUtils").getCategoryValueFromEnum),
                    limit,
                    start_cursor: cursorToken
                },
                fetch_status_metadata: o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
            };
            const l = yield o("WAWebMexClient").fetchQuery(s, i);
            return l;
        });
        return c.apply(this, arguments);
    }
    l.mexFetchNewsletterDirectorySearchResults = u;
}, 98);