__d("WAWebEventResponseModel", [
    "WAWebAddOnModel",
    "WAWebBaseModel",
    "WAWebEventResponseGetters",
    "WAWebFrontendEventResponseGetters"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.parentMsgKey = o("WAWebBaseModel").prop();
            t.eventResponse = o("WAWebBaseModel").prop();
            t.senderTimestampMs = o("WAWebBaseModel").prop();
            t.t = o("WAWebBaseModel").prop();
            t.sender = o("WAWebBaseModel").prop();
            t.read = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.delete = function() {
            e.prototype.delete.call(this);
            o("WAWebEventResponseGetters").clearEventResponseGetterCacheFor(this);
            o("WAWebFrontendEventResponseGetters").clearFrontendEventResponseGetterCacheFor(this);
        };
        return t;
    })(o("WAWebAddOnModel").AddOnBaseModel);
    const s = o("WAWebBaseModel").defineModel(e);
    l.EventResponse = s;
}, 98);