__d("WAWebAssignedAgentsCollection", [
    "WAWebAgentModel",
    "WAWebBaseCollection"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebAgentModel").Agent;
    l.AssignedAgentsCollection = e;
}, 98);