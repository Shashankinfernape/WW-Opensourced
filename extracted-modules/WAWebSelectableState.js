__d("WAWebSelectableState", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.isSelectable = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.setSelectable = function(t) {
            this.isSelectable = t;
            this.trigger("update-selectable", t);
            return this.isSelectable;
        };
        return t;
    })(r("WAWebEventEmitter"));
    l.default = e;
}, 98);