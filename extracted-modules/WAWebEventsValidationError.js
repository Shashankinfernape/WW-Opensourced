__d("WAWebEventsValidationError", [
    "$InternalEnum",
    "WAWebHandleMsgError"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        MISSING_MESSAGE_SECRET: "missing_message_secret",
        INVALID_MESSAGE_SECRET: "invalid_message_secret",
        EVENT_CREATION_INVALID_NAME: "event_creation_invalid_name",
        EVENT_CREATION_INVALID_DESCRIPTION: "event_creation_invalid_description",
        EVENT_CREATION_INVALID_CANCELED_STATUS: "event_creation_invalid_canceled_status",
        EVENT_CREATION_MISSING_DATE: "event_creation_missing_date",
        EVENT_CREATION_INVALID_LOCATION: "event_creation_invalid_location",
        EVENT_CREATION_INVALID_LOCATION_NAME: "event_creation_invalid_location_name",
        EVENT_CREATION_INVALID_LOCATION_ADDRESS: "event_creation_invalid_location_address",
        EVENT_CREATION_MISSING_MESSAGE_SENDER: "event_creation_missing_message_sender",
        EVENT_CREATION_INVALID_END_TIME: "event_creation_invalid_end_time",
        EVENT_CREATION_INVALID_JOIN_LINK: "event_creation_invalid_join_link"
    });
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "EventCreationValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    const u = n("$InternalEnum")({
        EVENT_RESPONSE_MISSING_MESSAGE_KEY: "event_response_missing_message_key",
        EVENT_RESPONSE_MISSING_ENC_IV: "event_response_missing_enc_iv",
        EVENT_RESPONSE_INVALID_SIZE_ENC_IV: "event_response_invalid_size_enc_iv",
        EVENT_RESPONSE_MISSING_ENC_PAYLOAD: "event_response_missing_enc_payload",
        EVENT_RESPONSE_MISSING_MESSAGE_SENDER: "event_response_missing_message_sender"
    });
    const c = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "EncryptedEventResponseValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    const d = n("$InternalEnum")({
        EVENT_EDIT_MISSING_TARGET_MESSAGE_KEY: "event_edit_missing_target_message_key",
        EVENT_EDIT_MISSING_ENC_IV: "event_edit_missing_enc_iv",
        EVENT_EDIT_INVALID_SIZE_ENC_IV: "event_edit_invalid_size_enc_iv",
        EVENT_EDIT_MISSING_ENC_PAYLOAD: "event_edit_missing_enc_payload",
        EVENT_EDIT_MISSING_MESSAGE_SENDER: "event_edit_missing_message_sender",
        EVENT_EDIT_MISSING_EDITED_MESSAGE: "event_edit_missing_edited_message",
        EVENT_EDIT_MISSING_SENDER_TIMESTAMP: "event_edit_missing_sender_timestamp",
        EVENT_EDIT_PARENT_SENDER_MISMATCH: "event_edit_parent_sender_mismatch",
        EVENT_EDIT_INVALID_PROTOCOL_MESSAGE_TYPE: "event_edit_invalid_protocol_message_type",
        EVENT_EDIT_MISSING_MESSAGE_SECRET: "event_edit_missing_message_secret"
    });
    const m = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "EncryptedEventEditValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    l.EventCreationValidationErrorCode = e;
    l.EventCreationValidationError = s;
    l.EncryptedEventResponseValidationErrorCode = u;
    l.EncryptedEventResponseValidationError = c;
    l.EncryptedEventEditValidationErrorCode = d;
    l.EncryptedEventEditValidationError = m;
}, 98);