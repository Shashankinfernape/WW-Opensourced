__d("WAWebPremiumMessageModel", [
    "WAWebBaseModel",
    "WAWebMsgCollection",
    "WAWebPremiumMessageHydrateMessageAction"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.name = o("WAWebBaseModel").prop();
            t.type = o("WAWebBaseModel").prop();
            t.message = o("WAWebBaseModel").prop();
            t.isDeleted = o("WAWebBaseModel").prop();
            t.sentMessageIds = o("WAWebBaseModel").prop();
            t.mediaId = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.initialize = function() {
            const t = this;
            e.prototype.initialize.call(this);
            const n = function() {
                return t.hydrateMessages();
            };
            this.listenTo(this, "change:message", n);
            this.listenTo(this, "change:sentMessageIds", n);
            this.listenTo(this, "change:type", n);
        };
        n.hydrateMessages = function() {
            const e = this;
            o("WAWebMsgCollection").MsgCollection.getModelsArray().filter((t)=>t.smbClientCampaignId === e.id).forEach((t)=>{
                o("WAWebPremiumMessageHydrateMessageAction").hydratePremiumMessage(t, e);
            });
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "premium_message";
    const s = o("WAWebBaseModel").defineModel(e);
    l.PremiumMessage = s;
}, 98);