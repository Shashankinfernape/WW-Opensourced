__d("WAWebNewsletterDirectorySearchQueryJob", [
    "WAWebBackendErrors",
    "WAWebMexFetchNewsletterDirectoryCategoriesPreviewJob",
    "WAWebMexFetchNewsletterDirectoryListJob",
    "WAWebMexFetchNewsletterDirectorySearchResultsJob",
    "WAWebMexFetchRecommendedNewslettersJob",
    "WAWebMexFetchSimilarNewslettersJob",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = yield o("WAWebMexFetchRecommendedNewslettersJob").mexFetchRecommendedNewsletters(e, t);
            const i = d(a.xwa2_newsletters_recommended?.result, "recommended_newsletters");
            return {
                pageInfo: a.xwa2_newsletters_recommended?.page_info,
                newsletters: i
            };
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const t = yield o("WAWebMexFetchSimilarNewslettersJob").mexFetchSimilarNewsletters(e);
                    const n = d(t, "similar_newsletters");
                    return {
                        pageInfo: null,
                        newsletters: n
                    };
                });
                return function() {
                    return t.apply(this, arguments);
                };
            })();
            return o("WAWebNewsletterRpcUtils").runWithBackoff(t);
        });
        return c.apply(this, arguments);
    }
    function d(e, t) {
        if (e != null) {
            return e.map((e)=>{
                const t = o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(e);
                if (t != null) {
                    return m(t);
                }
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "unexpected null mex newsletter metadata");
            });
        }
        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, `unexpected ${t} response`);
    }
    function m({ idJid, newsletterCreationTimeMetadataMixin, newsletterDescriptionMetadataMixin, newsletterInviteLinkMetadataMixin, newsletterNameMetadataMixin, newsletterPictureMetadataMixin, newsletterPrivacyMetadataMixin, newsletterStatusMetadata, newsletterSubscribersMetadataMixin, newsletterVerificationMetadataMixin }) {
        return {
            idJid,
            newsletterCreationTimeMetadataMixin,
            newsletterNameMetadataMixin,
            newsletterPictureMetadataMixin,
            newsletterDescriptionMetadataMixin,
            newsletterInviteLinkMetadataMixin,
            newsletterSubscribersMetadataMixin,
            newsletterPrivacyMetadataMixin,
            newsletterVerificationMetadataMixin,
            newsletterStatusMetadata
        };
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const r = yield o("WAWebMexFetchNewsletterDirectoryListJob").mexFetchNewsletterDirectoryList(e);
                    const a = d(r.xwa2_newsletters_directory_list?.result, "directory_v2_list_newsletters");
                    return {
                        pageInfo: r.xwa2_newsletters_directory_list?.page_info,
                        newsletters: a
                    };
                });
                return function() {
                    return t.apply(this, arguments);
                };
            })();
            return o("WAWebNewsletterRpcUtils").runWithBackoff(t);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const r = yield o("WAWebMexFetchNewsletterDirectorySearchResultsJob").mexFetchNewsletterDirectorySearchResults(e);
                    const a = d(r.xwa2_newsletters_directory_search?.result, "directory_v2_search_newsletter");
                    return {
                        pageInfo: r.xwa2_newsletters_directory_search?.page_info,
                        newsletters: a
                    };
                });
                return function() {
                    return t.apply(this, arguments);
                };
            })();
            return o("WAWebNewsletterRpcUtils").runWithBackoff(t);
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const n = yield o("WAWebMexFetchNewsletterDirectoryCategoriesPreviewJob").mexFetchNewsletterDirectoryCategoriesPreview(e);
                    const r = n.xwa2_newsletters_directory_category_preview?.result;
                    const a = r?.map(function(e) {
                        const t = d(e.newsletters, "directory_category_preview_newsletters");
                        return {
                            category: {
                                type: o("WAWebNewsletterDirectoryCategoryUtils").getNewsletterDirectoryCategoryTypeFromValue(e.category),
                                name: e.category_title
                            },
                            newsletters: t
                        };
                    });
                    return a ?? [];
                });
                return function() {
                    return t.apply(this, arguments);
                };
            })();
            return o("WAWebNewsletterRpcUtils").runWithBackoff(t);
        });
        return y.apply(this, arguments);
    }
    l.getRecommendedNewslettersQuery = e;
    l.getSimilarNewslettersQuery = u;
    l.getNewsletterDirectoryListQuery = p;
    l.getNewsletterDirectorySearchResultsQuery = f;
    l.getNewsletterDirectoryCategoriesPreviewQuery = h;
}, 98);