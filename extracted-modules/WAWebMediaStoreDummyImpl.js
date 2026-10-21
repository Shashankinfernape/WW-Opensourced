__d("WAWebMediaStoreDummyImpl", [
    "Promise",
    "WAWebAbstractStore"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.name = "noop";
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.get = function(r) {
            return (e || (e = n("Promise"))).resolve();
        };
        r_prototype.queryByIndex = function(r, o) {
            return (e || (e = n("Promise"))).resolve([]);
        };
        r_prototype.getAll = function() {
            return (e || (e = n("Promise"))).resolve([]);
        };
        r_prototype.put = function(r, o) {
            return (e || (e = n("Promise"))).resolve(o);
        };
        r_prototype.del = function(r) {
            return (e || (e = n("Promise"))).resolve();
        };
        r_prototype.count = function() {
            return (e || (e = n("Promise"))).resolve(0);
        };
        r_prototype.clear = function() {
            return (e || (e = n("Promise"))).resolve();
        };
        r_prototype.setMaxSize = function(r) {
            return (e || (e = n("Promise"))).resolve();
        };
        return r;
    })(r("WAWebAbstractStore"));
    l.default = s;
}, 98);