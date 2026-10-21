__d("WAWebUserPrefsDBSettings", [
    "WAWebUserPrefsCacheStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e != null) {
                yield o("WAWebUserPrefsCacheStorage").userPrefsCacheStorage.setItemToCacheStorage(o("WAWebUserPrefsKeys").MD_KEYS.COLUMN_PACKING_ENABLED, e);
            } else {
                yield o("WAWebUserPrefsCacheStorage").userPrefsCacheStorage.removeItemFromCacheStorage(o("WAWebUserPrefsKeys").MD_KEYS.COLUMN_PACKING_ENABLED);
            }
        });
        return s.apply(this, arguments);
    }
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebUserPrefsCacheStorage").userPrefsCacheStorage.getItemFromCacheStorage(o("WAWebUserPrefsKeys").MD_KEYS.COLUMN_PACKING_ENABLED);
            return e;
        });
        return c.apply(this, arguments);
    }
    l.setColumnPackingValueToStorage = e;
    l.getColumnPackingValueFromStorage = u;
}, 98);