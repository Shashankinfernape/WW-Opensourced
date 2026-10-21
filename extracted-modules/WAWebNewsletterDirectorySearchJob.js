__d("WAWebNewsletterDirectorySearchJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebNewsletterDirectorySearchQueryJob",
    "WAWebNewsletterMetadataJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
    "WAWebUserPrefsNewsletter",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 20;
    function u(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getRecommendedNewsletters", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebUserPrefsNewsletter").getCachedRecommendedNewsletters();
            if (t != null) {
                return t;
            }
            const n = yield o("WAWebNewsletterDirectorySearchQueryJob").getRecommendedNewslettersQuery(s, e === "" ? [] : [
                e
            ]);
            const n_newsletters = n.newsletters;
            yield o("WAWebUserPrefsNewsletter").setCachedRecommendedNewsletters(n_newsletters);
            return n_newsletters;
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function c(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getSimilarNewsletters", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebNewsletterDirectorySearchQueryJob").getSimilarNewslettersQuery(e);
            const t_newsletters = t.newsletters;
            return t_newsletters;
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function d(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getNewsletterDirectoryList", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = {
                view: e.view,
                countryCodes: e.countryCodes,
                categories: e.categories
            };
            const n = e.cursorToken == null || e.cursorToken === "";
            if (n) {
                const r = yield o("WAWebUserPrefsNewsletter").NewsletterDirectoryPageCache.get(t);
                if (r != null) {
                    return r;
                }
            }
            const a = yield o("WAWebNewsletterDirectorySearchQueryJob").getNewsletterDirectoryListQuery(e);
            if (n) {
                o("WAWebUserPrefsNewsletter").NewsletterDirectoryPageCache.set(t, a);
            }
            _(a.newsletters);
            return a;
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function m(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getNewsletterDirectorySearchResults", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebNewsletterDirectorySearchQueryJob").getNewsletterDirectorySearchResultsQuery(e);
            _(t.newsletters);
            return t;
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function p(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getNewsletterDirectoryCategoriesPreviewResults", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = babelHelpers.extends({}, e);
            const n = yield o("WAWebUserPrefsNewsletter").NewsletterDirectoryCategoriesPreviewCache.get(t);
            if (n != null) {
                return n;
            }
            const r = yield o("WAWebNewsletterDirectorySearchQueryJob").getNewsletterDirectoryCategoriesPreviewQuery(e);
            o("WAWebUserPrefsNewsletter").NewsletterDirectoryCategoriesPreviewCache.set(t, r);
            const a = r.reduce((acc, { newsletters })=>acc.concat(newsletters), []);
            _(a);
            return r;
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const n = t.reduce((acc, item)=>acc.set(item.idJid, {
                        size: item.newsletterSubscribersMetadataMixin?.subscribersCount
                    }), new Map);
                const r = yield o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().bulkGet(t.map((e)=>e.idJid)).then((e)=>e.filter(Boolean));
                const a = r.map((e)=>babelHelpers.extends({
                        id: e.id
                    }, n.get(e.id)));
                yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(a);
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[maybeUpdateDatabaseRecords] failed to update db records"
                ])));
            }
        });
        return f.apply(this, arguments);
    }
    l.getRecommendedNewsletters = u;
    l.getSimilarNewsletters = c;
    l.getNewsletterDirectoryList = d;
    l.getNewsletterDirectorySearchResults = m;
    l.getNewsletterDirectoryCategoriesPreview = p;
}, 98);