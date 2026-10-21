__d("WAWebEventResponseCollection", [
    "WAWebAck",
    "WAWebBaseCollection",
    "WAWebCollectionUtils",
    "WAWebEventResponseModel",
    "WAWebMsgGetters",
    "WAWebUserPrefsMeUser",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.byParent = o("WAWebCollectionUtils").aggregated(function(e) {
                return e.parentMsgKey;
            });
            t.byIsFailedByMe = o("WAWebCollectionUtils").aggregated(function(e) {
                return e.isSendFailure === true || o("WAWebUserPrefsMeUser").isMeAccount(e.sender) && e.ack != null && e.ack < o("WAWebAck").ACK.CLOCK;
            });
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebEventResponseModel").EventResponse;
    function s(e) {
        return new (o("WAWebEventResponseModel")).EventResponse(babelHelpers.extends({}, e, {
            sender: r("nullthrows")(o("WAWebMsgGetters").getSender(e))
        }));
    }
    const u = new e;
    l.createEventResponseModel = s;
    l.EventResponseCollection = u;
}, 98);