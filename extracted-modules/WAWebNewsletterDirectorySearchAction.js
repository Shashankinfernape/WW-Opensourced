__d("WAWebNewsletterDirectorySearchAction", [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebGetNewsletterDirectoryChats",
    "WAWebL10N",
    "WAWebNewsletterDirectorySearchJob",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "skipSubscribedNewsletters"
    ];
    const s = [
        "skipSubscribedNewsletters"
    ];
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    function C({ newsletterMetadata }) {
        return newsletterMetadata != null && o("WAWebNewsletterMetadataGetters").getIsPreview(newsletterMetadata);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ categories, countryCodes, cursorToken, searchText, skipSubscribedNewsletters, view }) {
            const s = o("WAWebABProps").getABPropConfigValue("channels_directory_page_size");
            if (searchText.trim() !== "") {
                return k({
                    searchText,
                    limit: s,
                    cursorToken,
                    categories,
                    skipSubscribedNewsletters
                });
            }
            return L({
                view,
                limit: s,
                countryCodes,
                cursorToken,
                categories,
                skipSubscribedNewsletters
            });
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][getSimilarNewslettersAction] Start"
            ])));
            try {
                const n = yield o("WAWebNewsletterDirectorySearchJob").getSimilarNewsletters({
                    newsletterId: o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(e.id.toString()),
                    limit: o("WAWebABProps").getABPropConfigValue("similar_channels_max_limit")
                });
                const r = yield o("WAWebGetNewsletterDirectoryChats").getDirectoryNewsletterChats(n, {
                    skipSubscribedNewsletters: false
                });
                e.newsletterMetadata?.set("similarNewsletters", r.map((e)=>e.id));
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletters][getSimilarNewslettersAction] End"
                ])));
                return r;
            } catch (e) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletters][getSimilarNewslettersAction] failed"
                ]))).sendLogs("failed-to-retrieve-similar-newsletters");
                return [];
            }
        });
        return R.apply(this, arguments);
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][getNewsletterDirectoryListAction] Start"
            ])));
            const t_skipSubscribedNewsletters = t.skipSubscribedNewsletters;
            const r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            const a = yield o("WAWebNewsletterDirectorySearchJob").getNewsletterDirectoryList(r);
            const { newsletters, pageInfo } = a;
            const s = yield o("WAWebGetNewsletterDirectoryChats").getDirectoryNewsletterChats(newsletters, {
                skipSubscribedNewsletters: t_skipSubscribedNewsletters
            });
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][getNewsletterDirectoryListAction] End"
            ])));
            const u = s.reduce((acc, item)=>{
                if (C(item)) {
                    acc.notSubscribed.push(item);
                } else {
                    acc.subscribed.push(item);
                }
                return acc;
            }, {
                subscribed: [],
                notSubscribed: []
            });
            const { notSubscribed, subscribed } = u;
            return {
                pageInfo,
                newsletters: notSubscribed,
                subscribedNewsletters: subscribed
            };
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][getNewsletterDirectorSearchResultsAction] Start"
            ])));
            const e_skipSubscribedNewsletters = e.skipSubscribedNewsletters;
            const n = babelHelpers.objectWithoutPropertiesLoose(e, s);
            const r = yield o("WAWebNewsletterDirectorySearchJob").getNewsletterDirectorySearchResults(n);
            const { newsletters, pageInfo } = r;
            const l = yield o("WAWebGetNewsletterDirectoryChats").getDirectoryNewsletterChats(newsletters, {
                skipSubscribedNewsletters: e_skipSubscribedNewsletters
            });
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][getNewsletterDirectorSearchResultsAction] End"
            ])));
            return {
                pageInfo,
                newsletters: l,
                subscribedNewsletters: []
            };
        });
        return I.apply(this, arguments);
    }
    function T(countryCode) {
        return {
            countryCode,
            categories: o("WAWebNewsletterExtendedGatingUtils").getNewsletterDirectoryCategoryTypes(),
            locale: r("WAWebL10N").getLocale(),
            perCategoryLimit: o("WAWebABProps").getABPropConfigValue("directory_categories_newsletters_per_category_limit")
        };
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebNewsletterDirectorySearchJob").getNewsletterDirectoryCategoriesPreview(T(e));
            return t.map((e)=>e.category);
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "[getNewsletterDirectoryCategoriesPreviewAction] Start"
            ])));
            const t = yield o("WAWebNewsletterDirectorySearchJob").getNewsletterDirectoryCategoriesPreview(T(e));
            const r = yield (y || (y = n("Promise"))).all(t.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield o("WAWebGetNewsletterDirectoryChats").getDirectoryNewsletterChats(e.newsletters, {
                        skipSubscribedNewsletters: false
                    });
                    t.sort((e, t)=>{
                        const n = C(e) ? 1 : 0;
                        const r = C(t) ? 1 : 0;
                        return r - n;
                    });
                    return {
                        category: e.category,
                        newsletters: t
                    };
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "[getNewsletterDirectoryCategoriesPreviewAction] End"
            ])));
            return r;
        });
        return P.apply(this, arguments);
    }
    l.fetchNewsletterDirectories = b;
    l.getSimilarNewslettersAction = S;
    l.getNewsletterDirectoryListAction = L;
    l.getNewsletterDirectorySearchResultsAction = k;
    l.getNewsletterDirectoryCategoriesAction = D;
    l.getNewsletterDirectoryCategoriesPreviewAction = $;
}, 98);