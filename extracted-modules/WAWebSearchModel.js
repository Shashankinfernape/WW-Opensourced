__d("WAWebSearchModel", [
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e(e) {
            this.maxPageLength = e?.maxPageLength;
            this.preloadData();
        }
        const e_prototype = e.prototype;
        e_prototype.preloadData = function() {};
        e_prototype.queryFn = function(t, n) {
            throw r("err")("Cannot create `Search` Model without `query` method");
        };
        e_prototype.query = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = {}) {
                const r = this;
                if (this.maxPageLength != null) {
                    if (t?.pagination == null) {
                        t.pagination = {
                            pageLength: this.maxPageLength,
                            page: 0
                        };
                    } else {
                        t.pagination.pageLength = this.maxPageLength;
                    }
                }
                const a = yield this.queryFn(e, t);
                const i = babelHelpers.extends({}, a, {
                    query: {
                        searchText: e,
                        options: t
                    },
                    pagination: null
                });
                if (t?.pagination != null) {
                    let page;
                    let pageLength;
                    let totalPages;
                    let hasMoreResults;
                    let next;
                    let previous;
                    if (a.pagination == null) {
                        page = t.pagination.page ?? 0;
                        pageLength = t.pagination.pageLength;
                        const _ = page * pageLength;
                        const f = _ + pageLength;
                        totalPages = Math.ceil(i.results.length / pageLength);
                        hasMoreResults = page < totalPages - 1;
                        i.results = i.results.slice(_, f);
                    } else {
                        page = a.pagination.page;
                        pageLength = a.pagination.pageLength;
                        totalPages = a.pagination?.totalPages;
                        hasMoreResults = a.pagination?.hasMoreResults;
                    }
                    if (hasMoreResults === true || totalPages != null && totalPages > page + 1) {
                        next = function() {
                            return r.query(e, babelHelpers.extends({}, t, {
                                pagination: {
                                    pageLength,
                                    page: page + 1
                                }
                            }));
                        };
                    }
                    if (page > 0) {
                        previous = function() {
                            return r.query(e, babelHelpers.extends({}, t, {
                                pagination: {
                                    pageLength,
                                    page: page - 1
                                }
                            }));
                        };
                    }
                    i.pagination = {
                        page,
                        pageLength,
                        totalPages,
                        hasMoreResults,
                        next,
                        previous
                    };
                }
                return i;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    l.Search = e;
}, 98);