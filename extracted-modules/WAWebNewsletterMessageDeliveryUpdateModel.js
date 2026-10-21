__d("WAWebNewsletterMessageDeliveryUpdateModel", [
    "WAWebBaseModel",
    "WAWebMsgKey"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.serverId = o("WAWebBaseModel").prop();
            t.msgModel = o("WAWebBaseModel").prop();
            t.code = o("WAWebBaseModel").prop();
            t.t = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.initialize = function() {
            e.prototype.initialize.call(this);
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "newsletter_message_update";
    e.idClass = r("WAWebMsgKey");
    const s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterMessageDeliveryUpdate = s;
}, 98);