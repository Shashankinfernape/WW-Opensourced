__d("WAWebProductCollection", [
    "Promise",
    "WAWebBaseCollection",
    "WAWebBizCatalogGatingUtils",
    "WAWebProductGetters",
    "WAWebProductModel",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        NO_REVIEW: "NO_REVIEW",
        PENDING: "PENDING",
        REJECTED: "REJECTED",
        APPROVED: "APPROVED",
        OUTDATED: "OUTDATED"
    };
    function u(e, t) {
        return e.displayPriority - t.displayPriority;
    }
    const c = new Set([
        s.OUTDATED,
        s.NO_REVIEW,
        s.APPROVED,
        s.REJECTED,
        s.PENDING
    ]);
    const d = new Set([
        s.APPROVED
    ]);
    function m(e) {
        const t = new Set;
        return e.filter((e)=>{
            if (e.variantInfo != null) {
                const o = e.variantInfo?.availability?.listing.some(function(e) {
                    return e && !r("isStringNullOrEmpty")(e.product_id) && t.has(e.product_id);
                });
                if (o === true) {
                    return false;
                }
            }
            t.add(e.id.toString());
            return true;
        });
    }
    const p = ((t)=>{
        function r() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getProductModels = function(n = false) {
            const e = t.prototype.toArray.call(this);
            if (t.prototype.length < 1) {
                return e;
            }
            const r = t.prototype.head.call(this);
            const a = r?.catalogWid;
            if (!a) {
                return e;
            }
            const i = n ? c : d;
            const l = t.prototype.filter.call(this, function(e) {
                return i.has(e.reviewStatus) && !e.old;
            });
            const s = m(l);
            if (n) {
                return s;
            }
            return s.filter((e)=>!e.isHidden && (!o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() || !e.isSanctioned));
        };
        r_prototype.add = function(n, r) {
            const e = r ? t.prototype.add.call(this, n, r) : t.prototype.add.call(this, n);
            this.sort();
            return e;
        };
        r_prototype.remove = function(n, r) {
            const e = t.prototype.remove.call(this, n, r);
            e.forEach((e)=>{
                if (e != null) {
                    o("WAWebProductGetters").clearProductGetterCacheFor(e);
                }
            });
            return e;
        };
        r_prototype.reset = function() {
            this.forEach(o("WAWebProductGetters").clearProductGetterCacheFor);
            t.prototype.reset.call(this);
        };
        r_prototype.evictImagesFromCache = function(t) {
            const e = this.get(t);
            if (e) {
                e.evictImagesFromCache();
            }
        };
        r_prototype.findImpl = function(r) {
            const t = this.get(r);
            if (t) {
                return (e || (e = n("Promise"))).resolve(t);
            }
            return (e || (e = n("Promise"))).resolve({
                id: r
            });
        };
        return r;
    })(o("WAWebBaseCollection").BaseCollection);
    p.model = o("WAWebProductModel").Product;
    p.comparator = u;
    l.PRODUCT_REVIEW_STATUS = s;
    l.ProductCollection = p;
}, 98);