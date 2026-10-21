__d("WAWebBlocklistModel", [
    "WAWebBaseModel",
    "WAWebBlocklistCollection",
    "WAWebContactCollection",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        throw new TypeError(`"${e}" is read-only`);
    }
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.contact = function() {
            const e = o("WAWebContactCollection").ContactCollection.gadd(this.id);
            return e;
        };
        t_prototype.getCollection = function() {
            return o("WAWebBlocklistCollection").BlocklistCollection;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "blocklist";
    s.idClass = r("WAWebWid");
    const u = o("WAWebBaseModel").defineModel(s);
    l.default = u;
}, 98);