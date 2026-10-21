__d("WAWebCartCollection", [
    "WALogger",
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebCartModel",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsCartLidMigration",
    "WAWebUserPrefsKeys",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function n(e, n) {
            let r;
            r = t.call(this) || this;
            r.imageWidth = 100;
            r.imageHeight = 100;
            if (e != null) {
                r.imageWidth = e;
            }
            if (n != null) {
                r.imageHeight = n;
            }
            return r;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.initializeFromCache = function(n) {
            const t = this;
            try {
                const a = n || [];
                a.forEach((e)=>{
                    const n = new (r("WAWebCartModel"))({
                        id: e.id,
                        itemCount: e.itemCount,
                        total: e.total,
                        currency: e.currency,
                        message: e.message
                    });
                    t.add(n, {
                        merge: true
                    });
                    const o = t.get(n.id);
                    if (o != null) {
                        o.cartItemCollection.add(e.products, {
                            merge: true
                        });
                    }
                });
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Error while restoring carts from cache, ",
                    ""
                ])), String(error));
            }
        };
        n_prototype.findCart = function(t) {
            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && o("WAWebUserPrefsCartLidMigration").isCartLidMigrationComplete()) {
                const e = o("WAWebLidMigrationUtils").toUserLid(o("WAWebWidFactory").createUserWidOrThrow(t));
                if (e != null) {
                    return this.gadd(e.toString());
                }
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[cart] findCart: no LID mapping, fallback to PN"
                ]))).sendLogs("cart-find-cart-no-lid-mapping");
            }
            return this.gadd(t);
        };
        return n;
    })(o("WAWebBaseCollection").BaseCollection);
    u.model = r("WAWebCartModel");
    u.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.CART_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 2000
    };
    const c = new u;
    l.CartCollection = c;
}, 98);