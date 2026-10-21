__d("WAWebBroadcastRecipientCollection", [
    "WAWebBroadcastRecipientModel",
    "WAWebCollection"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.delete = function() {
            this.forEach((e)=>{
                e.delete();
            });
            this.stopListening();
            this.reset();
        };
        return t;
    })(r("WAWebCollection"));
    e.model = r("WAWebBroadcastRecipientModel");
    l.default = e;
}, 98);