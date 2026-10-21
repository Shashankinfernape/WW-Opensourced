__d("WAWebMexFetchNewsletterDirectoryListJob", [
    "WAWebMexClient",
    "WAWebMexFetchNewsletterDirectoryListJobQuery.graphql",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexFetchNewsletterDirectoryListJobQuery.graphql");
    function u(view) {
        if (view === o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryListView.Recommended) {
            return "RECOMMENDED";
        }
        if (view === o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryListView.New) {
            return "NEW";
        }
        if (view === o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryListView.Popular) {
            return "POPULAR";
        }
        if (view === o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryListView.Featured) {
            return "FEATURED";
        }
        if (view === o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryListView.Trending) {
            return "TRENDING";
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${view}`);
        })();
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ categories, countryCodes, cursorToken, limit, view }) {
            const l = {
                input: {
                    view: u(view),
                    filters: {
                        country_codes: countryCodes,
                        categories: categories.map(o("WAWebNewsletterDirectoryCategoryUtils").getCategoryValueFromEnum)
                    },
                    limit,
                    start_cursor: cursorToken
                },
                fetch_status_metadata: o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
            };
            const c = yield o("WAWebMexClient").fetchQuery(s, l);
            return c;
        });
        return d.apply(this, arguments);
    }
    l.mexFetchNewsletterDirectoryList = c;
}, 98);