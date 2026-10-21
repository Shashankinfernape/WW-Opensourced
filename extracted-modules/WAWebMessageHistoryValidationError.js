__d("WAWebMessageHistoryValidationError", [
    "$InternalEnum",
    "WAWebHandleMsgError"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        MISSING_MESSAGE_HISTORY_BUNDLE: "message_history_missing_bundle",
        MISSING_MIMETYPE: "message_history_missing_mimetype",
        INVALID_MIMETYPE: "message_history_invalid_mimetype",
        MISSING_FILE_SHA256: "message_history_missing_file_sha256",
        INVALID_FILE_SHA256_LENGTH: "message_history_invalid_file_sha256_length",
        MISSING_MEDIA_KEY: "message_history_missing_media_key",
        INVALID_MEDIA_KEY_LENGTH: "message_history_invalid_media_key_length",
        MISSING_FILE_ENC_SHA256: "message_history_missing_file_enc_sha256",
        INVALID_FILE_ENC_SHA256_LENGTH: "message_history_invalid_file_enc_sha256_length",
        MISSING_DIRECT_PATH: "message_history_missing_direct_path",
        MISSING_MESSAGE_HISTORY_METADATA: "message_history_missing_metadata",
        INVALID_HISTORY_RECEIVERS_LENGTH: "message_history_invalid_receivers_length",
        MISSING_OLDEST_MESSAGE_TIMESTAMP: "message_history_missing_oldest_timestamp",
        INVALID_MESSAGE_COUNT: "message_history_invalid_message_count"
    });
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "MessageHistoryValidationError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebHandleMsgError").MessageValidationError);
    l.MessageHistoryValidationErrorCode = e;
    l.MessageHistoryValidationError = s;
}, 98);