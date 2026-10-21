__d("WAWebDBFavoriteDatabaseApi", [
    "WAWebLidMigrationDbUtils",
    "WAWebSchemaFavorite",
    "WAWebUserPrefsFavoritesLidMigration",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebUserPrefsFavoritesLidMigration").isFavoritesMigrationComplete() ? yield C(e) : e;
            yield o("WAWebSchemaFavorite").getFavoriteTable().bulkCreateOrReplace(t);
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebUserPrefsFavoritesLidMigration").isFavoritesMigrationComplete() ? yield C(e) : e;
            yield o("WAWebSchemaFavorite").getFavoriteTable().clear();
            yield o("WAWebSchemaFavorite").getFavoriteTable().bulkCreateOrReplace(t);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebUserPrefsFavoritesLidMigration").isFavoritesMigrationComplete() ? [].concat((yield h(e)), e) : e;
            yield o("WAWebSchemaFavorite").getFavoriteTable().bulkRemove(t);
        });
        return m.apply(this, arguments);
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaFavorite").getFavoriteTable().all();
            if (e.length === 0) {
                return 0;
            }
            const t = Math.max(...e.map(({ orderIndex })=>orderIndex));
            return t + 1;
        });
        return _.apply(this, arguments);
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaFavorite").getFavoriteTable().all();
            if (o("WAWebUserPrefsFavoritesLidMigration").isFavoritesMigrationComplete()) {
                return v(e);
            }
            return e;
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebLidMigrationDbUtils").findAccountLidsForPnChatIds(e);
            return e.map((e)=>t.get(e) ?? e);
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebLidMigrationDbUtils").findAccountLidsForPnChatIds(e.map((e)=>e.id));
            return e.map((e)=>babelHelpers.extends({}, e, {
                    id: t.get(e.id) ?? e.id
                }));
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebLidMigrationDbUtils").findChatIdsForAccountLids(e.map((e)=>e.id));
            return e.map((e)=>babelHelpers.extends({}, e, {
                    id: t.get(e.id) ?? e.id
                }));
        });
        return S.apply(this, arguments);
    }
    l.addOrEditFavorites = e;
    l.setFavorites = u;
    l.removeFavorites = d;
    l.getNextFavoriteOrderIndex = p;
    l.getAllFavorites = f;
}, 98);