__d("WAWebUnattributedMessageCollection", [
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebUnattributedMessageModel",
    "WAWebUserPrefsKeys"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebUnattributedMessageModel").UnattributedMessage;
    e.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.UNATTRIBUTED_MESSAGE_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1000
    };
    const s = new e;
    l.UnattributedMessageCollection = s;
}, 98);