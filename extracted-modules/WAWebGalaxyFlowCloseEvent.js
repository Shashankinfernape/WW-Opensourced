__d("WAWebGalaxyFlowCloseEvent", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        return `galaxy_flow_${e}_${t}`;
    }
    const s = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebEventEmitter"));
    const u = new s;
    l.getGalaxyFlowCloseEventKey = e;
    l.GalaxyFlowCloseEvent = u;
}, 98);