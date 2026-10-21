__d("WAWebUserPrefsNewsletter", [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebTimedCache",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").MD_KEYS.NEWSLETTER_TAB_LAST_SEEN_TIMESTAMP);
        const t = typeof e === "number" ? e : 0;
        return t;
    }
    function s(e) {
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").MD_KEYS.NEWSLETTER_TAB_LAST_SEEN_TIMESTAMP, e);
    }
    function u() {
        const e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_RECOMMENDED_NEWSLETTERS);
        return o("WAWebTimedCache").getTimedCacheItemValue(e, o("WAWebABProps").getABPropConfigValue("recommended_channels_background_refresh"));
    }
    function c(e) {
        const t = o("WAWebTimedCache").createTimedCacheItem(e);
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_RECOMMENDED_NEWSLETTERS, t);
    }
    const d = n("$InternalEnum").Mirrored([
        "FULL",
        "LIMITED"
    ]);
    const m = new (o("WAWebTimedCache")).TimedMapCache({
        mapLoad: function() {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_NEWSLETTERS_SUBSCRIBERS);
        },
        mapStore: function(t) {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_NEWSLETTERS_SUBSCRIBERS, t);
        },
        getCacheTtlMs: function() {
            return o("WAWebABProps").getABPropConfigValue("channels_followers_list_cache_refresh_milliseconds");
        }
    });
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = {
                view: d.LIMITED,
                newsletterJid: e
            };
            const n = {
                view: d.FULL,
                newsletterJid: e
            };
            yield m.remove(t);
            yield m.remove(n);
        });
        return _.apply(this, arguments);
    }
    const f = new (o("WAWebTimedCache")).TimedMapCache({
        mapLoad: function() {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_NEWSLETTER_DIRECTORY_PAGES);
        },
        mapStore: function(t) {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_NEWSLETTER_DIRECTORY_PAGES, t);
        },
        getCacheTtlMs: function() {
            return o("WAWebABProps").getABPropConfigValue("channels_directory_v2_cache_refresh_interval_ms");
        }
    });
    const g = new (o("WAWebTimedCache")).TimedMapCache({
        mapLoad: function() {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_NEWSLETTER_DIRECTORY_CATEGORY_PREVIEW);
        },
        mapStore: function(t) {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").KEYS.WA_WEB_CACHED_NEWSLETTER_DIRECTORY_CATEGORY_PREVIEW, t);
        },
        getCacheTtlMs: function() {
            return o("WAWebABProps").getABPropConfigValue("channels_directory_categories_cache_refresh_interval_ms");
        }
    });
    l.getNewsletterTabLastSeenTimestamp = e;
    l.setNewsletterTabLastSeenTimestamp = s;
    l.getCachedRecommendedNewsletters = u;
    l.setCachedRecommendedNewsletters = c;
    l.ValidCachedNewsletterSubscriberKeys = d;
    l.NewsletterSubscribersCache = m;
    l.flushCachedNewsletterSubscribers = p;
    l.NewsletterDirectoryPageCache = f;
    l.NewsletterDirectoryCategoriesPreviewCache = g;
}, 98);