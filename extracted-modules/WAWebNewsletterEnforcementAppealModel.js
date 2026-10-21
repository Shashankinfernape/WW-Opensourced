__d("WAWebNewsletterEnforcementAppealModel", [
    "WAWebBaseModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.chatId = o("WAWebBaseModel").prop();
            t.enforcementViolationCategory = o("WAWebBaseModel").prop();
            t.enforcementType = o("WAWebBaseModel").prop();
            t.enforcementId = o("WAWebBaseModel").prop();
            t.enforcementSource = o("WAWebBaseModel").prop();
            t.countryCode = o("WAWebBaseModel").prop();
            t.enforcementExtraData = o("WAWebBaseModel").prop();
            t.enforcementPolicyInformation = o("WAWebBaseModel").prop();
            t.appealReasonOptions = o("WAWebBaseModel").prop();
            t.appealState = o("WAWebBaseModel").prop();
            t.appealCreationTime = o("WAWebBaseModel").prop();
            t.appealReason = o("WAWebBaseModel").prop();
            t.lastUpdated = o("WAWebBaseModel").prop();
            t.msgData = o("WAWebBaseModel").prop();
            t.violatingContentData = o("WAWebBaseModel").prop();
            t.additionalAppealReason = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.setAppealState = function(t) {
            this.appealState = t;
        };
        t_prototype.setAppealCreationTime = function(t) {
            this.appealCreationTime = t;
        };
        t_prototype.setAppealReason = function(t) {
            this.appealReason = t;
        };
        t_prototype.setAdditionalAppealReason = function(t) {
            this.additionalAppealReason = t;
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "newsletter_enforcement_appeal";
    const s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterEnforcementAppeal = s;
}, 98);