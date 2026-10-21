__d("WAWebMobilePlatformPersistence", [
    "WAWebMobilePlatforms",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
    "cr:16728",
    "objectValues"
], function(t, n, r, o, a, i, l) {
    function e() {
        const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MOBILE_PLATFORM);
        return r("objectValues")(o("WAWebMobilePlatforms").PLATFORMS).find((e)=>e === t) ?? (n("cr:16728") == null ? void 0 : n("cr:16728").castPlatform(t));
    }
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e != null) {
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MOBILE_PLATFORM, e);
            }
        });
        return u.apply(this, arguments);
    }
    l.getLastMobilePlatform = e;
    l.setLastMobilePlatform = s;
}, 98);