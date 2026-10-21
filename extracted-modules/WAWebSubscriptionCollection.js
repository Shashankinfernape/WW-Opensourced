__d("WAWebSubscriptionCollection", [
    "WAWebBaseCollection",
    "WAWebSubscriptionModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.initializeFromCache = function(t) {
            this.add(t, {
                merge: true
            });
        };
        n.replaceWith = function(t) {
            this.set(t, {
                add: true,
                remove: true,
                merge: true
            });
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebSubscriptionModel").Subscription;
    const s = new e;
    l.SubscriptionCollection = s;
}, 98);