__d("WAWebNewsletterEnforcementAlertModel", [
    "WAWebBaseModel",
    "WAWebNewsletterEnforcementAppealModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.chatId = o("WAWebBaseModel").prop();
            t.enforcementCreationTime = o("WAWebBaseModel").prop();
            t.enforcementViolationCategory = o("WAWebBaseModel").prop();
            t.enforcementType = o("WAWebBaseModel").prop();
            t.enforcementId = o("WAWebBaseModel").prop();
            t.enforcementExtraData = o("WAWebBaseModel").prop();
            t.enforcementPolicyInformation = o("WAWebBaseModel").prop();
            t.enforcementSource = o("WAWebBaseModel").prop();
            t.countryCodes = o("WAWebBaseModel").prop();
            t.targetMsgMapForEvidence = o("WAWebBaseModel").prop();
            t.lastUpdated = o("WAWebBaseModel").prop();
            t.appeal = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.set = function(n, r, a) {
            if (typeof n === "string" && n === "appeal" && r != null) {
                if (!(r instanceof o("WAWebNewsletterEnforcementAppealModel").NewsletterEnforcementAppeal)) {
                    const t = new (o("WAWebNewsletterEnforcementAppealModel")).NewsletterEnforcementAppeal(r);
                    return e.prototype.set.call(this, n, t, a);
                }
                return e.prototype.set.call(this, n, r, a);
            }
            if (typeof n === "string" && n === "targetMsgMapForEvidence" && r != null) {
                if (r instanceof Map) {
                    const i = new Map;
                    for (const [s, u] of r.entries()){
                        if (u != null && !(u instanceof o("WAWebNewsletterEnforcementAppealModel").NewsletterEnforcementAppeal)) {
                            i.set(s, new (o("WAWebNewsletterEnforcementAppealModel")).NewsletterEnforcementAppeal(u));
                        } else {
                            i.set(s, u);
                        }
                    }
                    return e.prototype.set.call(this, n, i, a);
                }
                return e.prototype.set.call(this, n, r, a);
            }
            if (typeof n === "object" && n != null) {
                const c = babelHelpers.extends({}, n);
                let d = false;
                if (c.appeal != null && !(c.appeal instanceof o("WAWebNewsletterEnforcementAppealModel").NewsletterEnforcementAppeal)) {
                    c.appeal = new (o("WAWebNewsletterEnforcementAppealModel")).NewsletterEnforcementAppeal(c.appeal);
                    d = true;
                }
                const m = c.targetMsgMapForEvidence;
                if (m != null && m instanceof Map) {
                    const p = new Map;
                    for (const [f, g] of m.entries()){
                        if (g != null && !(g instanceof o("WAWebNewsletterEnforcementAppealModel").NewsletterEnforcementAppeal)) {
                            p.set(f, new (o("WAWebNewsletterEnforcementAppealModel")).NewsletterEnforcementAppeal(g));
                            d = true;
                        } else {
                            p.set(f, g);
                        }
                    }
                    c.targetMsgMapForEvidence = p;
                }
                if (d) {
                    return e.prototype.set.call(this, c, r, a);
                }
            }
            return e.prototype.set.call(this, n, r, a);
        };
        t_prototype.isValidAlertToRender = function() {
            return this.appeal?.appealState !== "SUCCESS" && this.appeal?.appealState !== "CONTENT_UNAVAILABLE" || Array.from(this.targetMsgMapForEvidence?.values() ?? []).some((e)=>e.appealState !== "SUCCESS" && e.appealState !== "CONTENT_UNAVAILABLE") || false;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "newsletter_enforcement_alert";
    const s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterEnforcementAlert = s;
}, 98);