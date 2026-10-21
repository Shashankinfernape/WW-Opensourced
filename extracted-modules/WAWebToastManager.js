__d("WAWebToastManager", [
    "$InternalEnum",
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "LEFT",
        "CENTER",
        "RIGHT"
    ]);
    const s = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.open = function(t, n) {
            this.trigger("open_toast", t, n);
        };
        t_prototype.close = function(t) {
            this.trigger("close_toast", t);
        };
        return t;
    })(r("WAWebEventEmitter"));
    const u = new s;
    l.ToastPosition = e;
    l.ToastManager = u;
}, 98);