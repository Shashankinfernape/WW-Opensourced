__d("WAWebCommentModel", [
    "WAWebAddOnModel",
    "WAWebBaseModel",
    "WAWebCommentGetters"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.parentMsgKey = o("WAWebBaseModel").prop();
            t.t = o("WAWebBaseModel").prop();
            t.author = o("WAWebBaseModel").prop();
            t.read = o("WAWebBaseModel").prop();
            t.ack = o("WAWebBaseModel").prop();
            t.body = o("WAWebBaseModel").prop();
            t.id = o("WAWebBaseModel").prop();
            t.isSendFailure = o("WAWebBaseModel").prop();
            t.subtype = o("WAWebBaseModel").prop();
            t.protocolMessageKey = o("WAWebBaseModel").prop();
            t.revokeTimestamp = o("WAWebBaseModel").prop();
            t.isOverwrittenByRevoke = o("WAWebBaseModel").prop();
            t.revokeSender = o("WAWebBaseModel").session();
            t.startOfDaySkew = o("WAWebBaseModel").session();
            t.startOfDay = o("WAWebBaseModel").session();
            t.links = o("WAWebBaseModel").session(function() {
                return [];
            });
            t.linksIndexParsed = o("WAWebBaseModel").session(0);
            t.phoneNumbers = o("WAWebBaseModel").session(function() {
                return [];
            });
            t.phoneNumbersIndexParsed = o("WAWebBaseModel").session(0);
            t.type = o("WAWebBaseModel").prop();
            t.messageSecret = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebCommentGetters").clearCommentGetterCacheFor(this);
            o("WAWebCommentGetters").clearFrontendCommentGetterCacheFor(this);
        };
        return t;
    })(o("WAWebAddOnModel").AddOnBaseModel);
    e.Proxy = "comment";
    const s = o("WAWebBaseModel").defineModel(e);
    l.Comment = s;
}, 98);