__d("WAWebCarouselCardsCollection", [
    "WAWebBaseCollection",
    "WAWebMsgModel"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        throw new TypeError(`"${e}" is read-only`);
    }
    const s = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.clone = function() {
            const e = new t;
            e.add(this.slice());
            return e;
        };
        t_prototype.getCardsById = function() {
            const e = {};
            this.forEach((t)=>{
                e[t.id.toString()] = t;
            });
            return e;
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebMsgModel").Msg;
    l.default = s;
}, 98);