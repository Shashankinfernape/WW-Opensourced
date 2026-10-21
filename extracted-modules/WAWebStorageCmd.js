__d("WAWebStorageCmd", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebEventEmitter"));
    const s = new e;
    function u(e, t) {
        e.on("versionchange", function() {
            s.trigger("idb_version_change", t);
        });
    }
    l.StorageCmd = s;
    l.notifyOnVersionChange = u;
}, 98);