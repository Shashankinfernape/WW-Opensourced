__d("WAWebSharableEventInviteValidationError", [
    "$InternalEnum",
    "WAWebHandleMsgError"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        SHARABLE_EVENT_INVITE_MISSING_EVENT_ID: "sharable_event_invite_missing_event_id",
        SHARABLE_EVENT_INVITE_MISSING_EVENT_TITLE: "sharable_event_invite_missing_event_title",
        SHARABLE_EVENT_INVITE_MISSING_MESSAGE_SENDER: "sharable_event_invite_missing_message_sender"
    });
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "SharableEventInviteValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    l.SharableEventInviteValidationErrorCode = e;
    l.SharableEventInviteValidationError = s;
}, 98);