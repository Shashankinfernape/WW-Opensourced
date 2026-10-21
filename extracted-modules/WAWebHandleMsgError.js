__d("WAWebHandleMsgError", [
    "$InternalEnum",
    "WACustomError",
    "WAWebMdBadDeviceSentMessageWamEvent",
    "WAWebWamEnumDsmError",
    "WAWebWamEnumE2eFailureReason"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = {
        [o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_SENDER]: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_DSM_SENDER,
        [o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM]: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.DSM_MISSING,
        [o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM]: o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_DSM
    };
    const c = ((e)=>{
        function t(peerType, dsmError) {
            let r;
            if (dsmError === o("WAWebWamEnumDsmError").DSM_ERROR.MISSING_DSM) {
                r = e.call(this, "message should be deviceSentMessage") || this;
            } else if (dsmError === o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_SENDER) {
                r = e.call(this, "message should not be deviceSentMessage") || this;
            } else if (dsmError === o("WAWebWamEnumDsmError").DSM_ERROR.INVALID_DSM) {
                r = e.call(this, "invalid deviceSentMessage") || this;
            } else {
                r = e.call(this, "unknown deviceSentMessage error") || this;
            }
            r.name = "DeviceSentMessageError";
            new (o("WAWebMdBadDeviceSentMessageWamEvent")).MdBadDeviceSentMessageWamEvent({
                peerType,
                dsmError
            }).commit();
            r.peerType = peerType;
            r.dsmError = dsmError;
            r.e2eFailureReason = u[dsmError];
            return babelHelpers.assertThisInitialized(r);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })((s = o("WACustomError")).CustomError);
    const d = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "UnknownDeviceMessageError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const m = ((e)=>{
        function t(t, n, r) {
            let a;
            a = e.call(this, typeof t === "string" ? t : String(t)) || this;
            a.name = "MessageValidationError";
            a.code = t;
            a.e2eFailureReason = n;
            a.sendLogs = r?.sendLogs ?? true;
            return a;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const p = n("$InternalEnum")({
        MessageNotAllowed: 420,
        StaleGroupAddressingMode: 421,
        NewChatMessagesCapped: 475
    });
    const _ = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, `Received Nack error code ${t ?? ""} from Server on message sent`) || this;
            n.name = "MessageSentAckError";
            n.ackErrorCode = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const f = ((e)=>{
        function t() {
            let t;
            t = e.call(this, "AEA enforcement blocked the send") || this;
            t.name = "AeaSendBlockedError";
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const g = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "BizNodeValidationError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(s.CustomError);
    const h = n("$InternalEnum")({
        INVALID_POLL_UPDATE_STANZA: "poll_update_message_stanza_invalid",
        INVALID_REACTION_STANZA: "reaction_message_stanza_invalid",
        INVALID_PIN_IN_CHAT_STANZA: "pin_in_chat_message_stanza_invalid",
        INVALID_COMMENT_STANZA: "comment_message_stanza_invalid",
        INVALID_EVENT_RESPONSE_STANZA: "event_response_message_stanza_invalid",
        INVALID_EVENT_EDIT_STANZA: "event_edit_message_stanza_invalid",
        INVALID_EDIT_STANZA: "edit_message_stanza_invalid",
        INVALID_NEWSLETTER_EDIT_STANZA: "newsletter_edit_stanza_invalid",
        INVALID_POLL_EDIT_STANZA: "poll_edit_message_stanza_invalid",
        INVALID_MEMBER_TAG_STANZA: "member_tag_message_stanza_invalid",
        INVALID_SCHEDULED_MESSAGE_STANZA: "scheduled_message_stanza_invalid"
    });
    const y = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.MESSAGE_TYPE_MISMATCH) || this;
            n.name = "MessageProtobufMismatchError";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(m);
    const C = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, `Received ${t.length} message keys: ${t.join(", ")}`, o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_NUMBER_OF_MESSAGE_TYPES) || this;
            n.name = "MessageProtobufInvalidMessageTypes";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(m);
    l.DeviceSentMessageError = c;
    l.UnknownDeviceMessageError = d;
    l.MessageValidationError = m;
    l.MessageSentAckErrorCode = p;
    l.MessageSentAckError = _;
    l.AeaSendBlockedError = f;
    l.BizNodeValidationError = g;
    l.MessageProtobufMismatchErrorCode = h;
    l.MessageProtobufMismatchError = y;
    l.MessageProtobufInvalidMessageTypes = C;
}, 98);