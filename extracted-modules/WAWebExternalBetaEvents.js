__d("WAWebExternalBetaEvents", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.triggerBetaOptInStatusChanges = function() {
            this.trigger("external_beta_events:opt_in_status_changed");
        };
        return t;
    })(r("WAWebEventEmitter"));
    const s = new e;
    l.WAWebExternalBetaEvents = s;
}, 98);