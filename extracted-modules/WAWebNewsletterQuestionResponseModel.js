__d("WAWebNewsletterQuestionResponseModel", [
    "WAWebAddOnModel",
    "WAWebBaseModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.parentMsgKey = o("WAWebBaseModel").prop();
            t.t = o("WAWebBaseModel").prop();
            t.body = o("WAWebBaseModel").prop();
            t.id = o("WAWebBaseModel").prop();
            t.responseServerId = o("WAWebBaseModel").prop();
            t.questionServerId = o("WAWebBaseModel").prop();
            t.senderNotifyName = o("WAWebBaseModel").prop();
            t.replied = o("WAWebBaseModel").prop(false);
            t.starred = o("WAWebBaseModel").prop(false);
            t.senderPictureDirectPath = o("WAWebBaseModel").prop();
            t.isSentByMe = o("WAWebBaseModel").prop(false);
            t.senderId = o("WAWebBaseModel").prop();
            t.isSendFailure = o("WAWebBaseModel").prop();
            t.links = o("WAWebBaseModel").session(function() {
                return [];
            });
            t.linksIndexParsed = o("WAWebBaseModel").session(0);
            t.phoneNumbers = o("WAWebBaseModel").session(function() {
                return [];
            });
            t.phoneNumbersIndexParsed = o("WAWebBaseModel").session(0);
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebAddOnModel").AddOnBaseModel);
    e.Proxy = "newsletterQuestionResponse";
    const s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterQuestionResponse = s;
}, 98);