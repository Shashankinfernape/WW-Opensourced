__d("WAWebTemplateButtonReplyMsgCollection", [
    "WAWebBaseCollection",
    "WAWebMsgModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebMsgModel").Msg;
    e.comparator = function(e, t) {
        return t.t - e.t;
    };
    l.default = e;
}, 98);