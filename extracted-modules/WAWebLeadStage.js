__d("WAWebLeadStage", [], function(t, n, r, o, a, i) {
    const e = {
        LEAD: 0,
        INTAKE: 1,
        QUALIFIED: 2,
        CONVERTED: 3,
        LOST: 4
    };
    const l = [
        e.INTAKE,
        e.QUALIFIED,
        e.CONVERTED,
        e.LOST
    ];
    const s = [
        e.LEAD
    ].concat(l);
    function u(t) {
        switch(t){
            case 0:
                return e.LEAD;
            case 1:
                return e.INTAKE;
            case 2:
                return e.QUALIFIED;
            case 3:
                return e.CONVERTED;
            case 4:
                return e.LOST;
            default:
                return null;
        }
    }
    i.LeadStage = e;
    i.LEAD_SUBSTAGE_ORDER = l;
    i.ALL_LEAD_STAGES = s;
    i.getLeadStageFromNumber = u;
}, 66);