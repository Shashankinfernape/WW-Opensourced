__d("WAWebAddonEncryptionError", [
    "$InternalEnum",
    "WAAssertUnreachable",
    "WALogger",
    "WAWebHandleMsgError",
    "WAWebMessageSecretErrorsWamEvent",
    "WAWebMsgType",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageSecretAllowedType",
    "WAWebWamEnumMessageSecretErrorType"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = n("$InternalEnum")({
        MISSING_MESSAGE_SECRET: "missing_message_secret",
        WRONG_MESSAGE_SECRET_LENGTH: "wrong_message_secret_length",
        ENCRYPTION_ERROR: "encryption_error",
        DECRYPTION_ERROR: "decryption_error"
    });
    const c = ((e)=>{
        function t(t, n) {
            let r;
            const o = `addonType: ${t}, errorCode: ${String(n)}`;
            r = e.call(this, o, g(n)) || this;
            r.name = "DualEncryptionValidationError";
            m(t, n);
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    function d(t, n) {
        const n_messageSecret = n.messageSecret;
        if (n_messageSecret == null) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "parent msg ",
                " secret is missing"
            ])), n.id);
            throw new c(t, u.MISSING_MESSAGE_SECRET);
        }
        if (n_messageSecret.length !== 32) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "parent msg ",
                " secret is not 32 bytes"
            ])), n.id);
            throw new c(t, u.WRONG_MESSAGE_SECRET_LENGTH);
        }
        return n_messageSecret;
    }
    function m(e, t) {
        const messageMediaType = p(e);
        const messageSecretAllowedList = _(e);
        new (o("WAWebMessageSecretErrorsWamEvent")).MessageSecretErrorsWamEvent({
            messageSecretError: f(t),
            messageMediaType,
            messageSecretAllowedList
        }).commit();
    }
    function p(e) {
        switch(e){
            case o("WAWebMsgType").MsgKind.PollVoteEncrypted:
            case o("WAWebMsgType").MsgKind.PollVoteDecrypted:
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_VOTE;
            case o("WAWebMsgType").MsgKind.ReactionEncrypted:
            case o("WAWebMsgType").MsgKind.ReactionDecrypted:
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.REACTION;
            case o("WAWebMsgType").MsgKind.EventResponseEncrypted:
            case o("WAWebMsgType").MsgKind.EventResponseDecrypted:
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.EVENT_RESPOND;
            case o("WAWebMsgType").MsgKind.EventEditEncrypted:
            case o("WAWebMsgType").MsgKind.EventEditDecrypted:
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
            case o("WAWebMsgType").MsgKind.PollEditEncrypted:
            case o("WAWebMsgType").MsgKind.PollEditDecrypted:
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
            case o("WAWebMsgType").MsgKind.PollAddOptionEncrypted:
            case o("WAWebMsgType").MsgKind.PollAddOptionDecrypted:
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
            case o("WAWebMsgType").MsgKind.MessageEditEncrypted:
            case o("WAWebMsgType").MsgKind.MessageEditDecrypted:
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
            case o("WAWebMsgType").MsgKind.CommentEncrypted:
            case o("WAWebMsgType").MsgKind.CommentDecrypted:
                return o("WAWebWamEnumMediaType").MEDIA_TYPE.COMMENT;
            default:
                return r("WAAssertUnreachable")(e);
        }
    }
    function _(e) {
        switch(e){
            case o("WAWebMsgType").MsgKind.PollVoteEncrypted:
            case o("WAWebMsgType").MsgKind.PollVoteDecrypted:
                return o("WAWebWamEnumMessageSecretAllowedType").MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_POLL;
            case o("WAWebMsgType").MsgKind.ReactionEncrypted:
            case o("WAWebMsgType").MsgKind.ReactionDecrypted:
                return o("WAWebWamEnumMessageSecretAllowedType").MESSAGE_SECRET_ALLOWED_TYPE.REACTION;
            case o("WAWebMsgType").MsgKind.EventResponseEncrypted:
            case o("WAWebMsgType").MsgKind.EventResponseDecrypted:
                return o("WAWebWamEnumMessageSecretAllowedType").MESSAGE_SECRET_ALLOWED_TYPE.EVENT_RESPONSE;
            case o("WAWebMsgType").MsgKind.EventEditEncrypted:
            case o("WAWebMsgType").MsgKind.EventEditDecrypted:
                return o("WAWebWamEnumMessageSecretAllowedType").MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_EVENT_EDIT;
            case o("WAWebMsgType").MsgKind.PollEditEncrypted:
            case o("WAWebMsgType").MsgKind.PollEditDecrypted:
                return o("WAWebWamEnumMessageSecretAllowedType").MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_POLL;
            case o("WAWebMsgType").MsgKind.PollAddOptionEncrypted:
            case o("WAWebMsgType").MsgKind.PollAddOptionDecrypted:
                return o("WAWebWamEnumMessageSecretAllowedType").MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_POLL;
            case o("WAWebMsgType").MsgKind.MessageEditEncrypted:
            case o("WAWebMsgType").MsgKind.MessageEditDecrypted:
                return o("WAWebWamEnumMessageSecretAllowedType").MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_EDIT;
            case o("WAWebMsgType").MsgKind.CommentEncrypted:
            case o("WAWebMsgType").MsgKind.CommentDecrypted:
                return o("WAWebWamEnumMessageSecretAllowedType").MESSAGE_SECRET_ALLOWED_TYPE.COMMENT;
            default:
                return r("WAAssertUnreachable")(e);
        }
    }
    function f(e) {
        switch(e){
            case u.MISSING_MESSAGE_SECRET:
                return o("WAWebWamEnumMessageSecretErrorType").MESSAGE_SECRET_ERROR_TYPE.MISSING_MESSAGE_SECRET;
            case u.WRONG_MESSAGE_SECRET_LENGTH:
                return o("WAWebWamEnumMessageSecretErrorType").MESSAGE_SECRET_ERROR_TYPE.WRONG_LENGTH;
            case u.ENCRYPTION_ERROR:
                return o("WAWebWamEnumMessageSecretErrorType").MESSAGE_SECRET_ERROR_TYPE.ENCRYPTION_ERROR;
            case u.DECRYPTION_ERROR:
                return o("WAWebWamEnumMessageSecretErrorType").MESSAGE_SECRET_ERROR_TYPE.DECRYPTION_ERROR;
        }
    }
    function g(e) {
        switch(e){
            case u.MISSING_MESSAGE_SECRET:
                return o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.MISSING_MESSAGE_SECRET;
            case u.WRONG_MESSAGE_SECRET_LENGTH:
                return o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.MESSAGE_SECRET_INVALID;
            case u.ENCRYPTION_ERROR:
                return o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE;
            case u.DECRYPTION_ERROR:
                return o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.DECRYPTION_FAILED;
        }
    }
    l.DualEncryptionValidationErrorCode = u;
    l.DualEncryptionValidationError = c;
    l.getValidatedMessageSecret = d;
}, 98);