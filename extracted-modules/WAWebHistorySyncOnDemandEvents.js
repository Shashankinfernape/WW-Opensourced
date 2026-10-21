__d("WAWebHistorySyncOnDemandEvents", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.triggerSuccessHistorySyncOd = function(t) {
            this.trigger("history_sync_on_demand_events:success_history_sync_od", t);
        };
        t_prototype.triggerErrorHistorySyncOd = function(t) {
            this.trigger("history_sync_on_demand_events:error_history_sync_od", t);
        };
        return t;
    })(r("WAWebEventEmitter"));
    const s = new e;
    l.WAWebHistorySyncOnDemandEvents = s;
}, 98);