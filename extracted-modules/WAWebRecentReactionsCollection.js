__d("WAWebRecentReactionsCollection", [
    "Promise",
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebDebounce",
    "WAWebRecentReactionModel",
    "WAWebUserPrefsKeys"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 16;
    const u = 100;
    const c = ((t)=>{
        function o() {
            let o;
            o = t.call(this) || this;
            o.findImpl = function(t) {
                return (e || (e = n("Promise"))).resolve({
                    id: t
                });
            };
            o.listenTo(o, "add", r("WAWebDebounce")(function() {
                return o._sortTrim();
            }, u));
            return o;
        }
        babelHelpers.inheritsLoose(o, t);
        const o_prototype = o.prototype;
        o_prototype._sortTrim = function() {
            const length = this.length;
            if (length) {
                this.sort();
                if (length > s) {
                    this.remove(this.slice(s));
                }
            }
        };
        return o;
    })(o("WAWebBaseCollection").BaseCollection);
    c.model = r("WAWebRecentReactionModel");
    c.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.RECENT_REACTIONS_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 2000
    };
    c.comparator = function(e, t) {
        return t.timestamp - e.timestamp;
    };
    const d = new c;
    l.RECENT_REACTIONS_LIMIT = s;
    l.LISTENER_DEBOUNCE_WAIT = u;
    l.RecentReactionsCollection = d;
}, 98);