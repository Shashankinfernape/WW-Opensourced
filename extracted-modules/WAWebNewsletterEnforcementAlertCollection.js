__d("WAWebNewsletterEnforcementAlertCollection", [
    "WAWebBaseCollection",
    "WAWebNewsletterEnforcementAlertModel",
    "WAWebNewsletterEnforcementAppealModel"
], function(t, n, r, o, a, i, l) {
    const e = function(t, n) {
        return n.enforcementCreationTime - t.enforcementCreationTime;
    };
    const s = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.setMsgModelMap = function(n) {
            t.msgModelMap = n;
        };
        t_prototype.getAppeals = function() {
            const e = [];
            this.map((t)=>{
                if (t.targetMsgMapForEvidence?.values().toArray().length !== 0 && t.targetMsgMapForEvidence != null) {
                    for (const r of t.targetMsgMapForEvidence.values()){
                        if (r != null && r.appealState !== "NOT_APPEALED" && r.appealState !== "NON_APPEALABLE") {
                            e.push(new (o("WAWebNewsletterEnforcementAppealModel")).NewsletterEnforcementAppeal(r));
                        }
                    }
                } else {
                    if (t.appeal != null && t.appeal.appealState !== "NOT_APPEALED" && t.appeal.appealState !== "NON_APPEALABLE") {
                        e.push(new (o("WAWebNewsletterEnforcementAppealModel")).NewsletterEnforcementAppeal(t.appeal));
                    }
                }
            });
            return e.sort((e, t)=>(t.appealCreationTime ?? 0) - (e.appealCreationTime ?? 0));
        };
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebNewsletterEnforcementAlertModel").NewsletterEnforcementAlert;
    s.comparator = e;
    const u = new s;
    l.NewsletterEnforcementAlertCollection = u;
}, 98);