__d("WAWebLeadStageNames", [
    "fbt",
    "WAWebLeadStage"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        switch(e){
            case 0:
                return s._("Lead");
            case 1:
                return s._("Intake");
            case 2:
                return s._("Qualified");
            case 3:
                return s._("Converted");
            case 4:
                return s._("Lost");
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function u() {
        return s._("None");
    }
    function c(e, t) {
        if (t == null) {
            return e;
        }
        return s._("{picker name}: {current value}", [
            s._param("picker name", e),
            s._param("current value", t)
        ]);
    }
    function d(e, t) {
        if (t) {
            return s._("{option name}, selected", [
                s._param("option name", e)
            ]);
        }
        return e;
    }
    function m(t, n) {
        return s._("{lead list name} · {lead stage name}", [
            s._param("lead list name", t),
            s._param("lead stage name", e(n))
        ]);
    }
    function p() {
        return s._("Lead");
    }
    function _(t) {
        return e(t);
    }
    function f(t) {
        const n = t.trim().toLowerCase();
        if (n === "") {
            return null;
        }
        for (const r of o("WAWebLeadStage").ALL_LEAD_STAGES){
            if (e(r).toString().toLowerCase() === n) {
                return r;
            }
        }
        if (n === g || n === h().toString().toLowerCase()) {
            return o("WAWebLeadStage").LeadStage.LEAD;
        }
        return null;
    }
    var g = "none";
    function h() {
        return s._("None");
    }
    l.getLeadStageName = e;
    l.getNoLeadStageName = u;
    l.getLeadStagePickerAriaLabel = c;
    l.getLeadStageOptionAriaLabel = d;
    l.getLeadSublistRowLabel = m;
    l.getLeadListDisplayName = p;
    l.getPipelineColumnHeaderLabel = _;
    l.getLeadStageFromName = f;
}, 226);