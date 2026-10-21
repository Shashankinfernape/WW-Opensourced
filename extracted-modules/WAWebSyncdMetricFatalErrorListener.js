__d("WAWebSyncdMetricFatalErrorListener", [
    "WAWebSyncdMetricFatalError",
    "WAWebWamEnumMdSyncdFatalErrorCode"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.PATCH_PROTOBUF_SERIALIZATION_FAILED) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.PATCH_PROTOBUF_SERIALIZATION_FAILED;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MUTATIONS_PROTOBUF_SERIALIZATION_FAILED) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MUTATIONS_PROTOBUF_SERIALIZATION_FAILED;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.ACTION_DATA_PROTOBUF_SERIALIZATION_FAILED) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.ACTION_DATA_PROTOBUF_SERIALIZATION_FAILED;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.ENCRYPTION_FAILED) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.ENCRYPTION_FAILED;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_SNAPSHOT_VERSION) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_SNAPSHOT_VERSION;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_SNAPSHOT_MAC) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_SNAPSHOT_MAC;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_SNAPSHOT_KEY_ID) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_SNAPSHOT_KEY_ID;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_PATCH_VERSION) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_PATCH_VERSION;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.PATCH_WITH_BOTH_INLINE_AND_EXTERNAL_MUTATIONS) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.PATCH_WITH_BOTH_INLINE_AND_EXTERNAL_MUTATIONS;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_PATCH_SNAPSHOT_MAC) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_PATCH_SNAPSHOT_MAC;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_PATCH_MAC) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_PATCH_MAC;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_PATCH_KEY_ID) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_PATCH_KEY_ID;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_MEDIA_KEY) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_EXTERNAL_BLOB_REFERENCE_MEDIA_KEY;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_DIRECT_PATH) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_EXTERNAL_BLOB_REFERENCE_DIRECT_PATH;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_FILE_SHA256) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_EXTERNAL_BLOB_REFERENCE_FILE_SHA256;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_FILE_ENC_SHA256) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_EXTERNAL_BLOB_REFERENCE_FILE_ENC_SHA256;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_OPERATION) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_MUTATION_OPERATION;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_RECORD) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_MUTATION_RECORD;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_INDEX) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_MUTATION_INDEX;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_VALUE) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_MUTATION_VALUE;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_KEY_ID) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_MUTATION_KEY_ID;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.EXTERNAL_BLOB_REFERENCE_PROTOBUF_DESERIALIZATION_FAILED) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.EXTERNAL_BLOB_REFERENCE_PROTOBUF_DESERIALIZATION_FAILED;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.SNAPSHOT_PROTOBUF_DESERIALIZATION_FAILED) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.SNAPSHOT_PROTOBUF_DESERIALIZATION_FAILED;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.PATCH_PROTOBUF_DESERIALIZATION_FAILED) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.PATCH_PROTOBUF_DESERIALIZATION_FAILED;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MUTATIONS_PROTOBUF_DESERIALIZATION_FAILED) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MUTATIONS_PROTOBUF_DESERIALIZATION_FAILED;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.ACTION_DATA_PROTOBUF_DESERIALIZATION_FAILED) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.ACTION_DATA_PROTOBUF_DESERIALIZATION_FAILED;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_ACTION_INDEX) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_ACTION_INDEX;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_ACTION_VERSION) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_ACTION_VERSION;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.SNAPSHOT_MAC_MISMATCH_IN_PATCH) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.SNAPSHOT_MAC_MISMATCH_IN_PATCH;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MAC_MISMATCH_PATCH) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MAC_MISMATCH_PATCH;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.DECRYPTION_FAILED) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.DECRYPTION_FAILED;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.DUPLICATE_PATCH_VERSION_IN_COLLECTION) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.DUPLICATE_PATCH_VERSION_IN_COLLECTION;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_PATCH) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_PATCH;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_SNAPSHOT) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_SNAPSHOT;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_ACTION_VALUE) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_ACTION_VALUE;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_ACTION_TIMESTAMP) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_ACTION_TIMESTAMP;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.XMPP_BAD_REQUEST_FOR_COLLECTION) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.XMPP_BAD_REQUEST_FOR_COLLECTION;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.XMPP_NOT_FOUND_FOR_COLLECTION) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.XMPP_NOT_FOUND_FOR_COLLECTION;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.CYCLIC_MUTATION_DEPENDENCY_IN_PATCH) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.CYCLIC_MUTATION_DEPENDENCY_IN_PATCH;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.SERVER_DID_NOT_SEND_ALL_PATCHES) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.SERVER_DID_NOT_SEND_ALL_PATCHES;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.TERMINAL_PATCH_MISSING_DATA) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.TERMINAL_PATCH_MISSING_DATA;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.TERMINAL_PATCH_DESERIALIZATION_ERROR) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.TERMINAL_PATCH_DESERIALIZATION_ERROR;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.TERMINAL_PATCH_UNKNOWN) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.TERMINAL_PATCH_UNKNOWN;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.INVALID_ACTION_INDEX) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.INVALID_ACTION_INDEX;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.XMPP_BAD_REQUEST_GLOBAL_ERROR) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.XMPP_BAD_REQUEST_GLOBAL_ERROR;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.XMPP_NOT_FOUND_GLOBAL_ERROR) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.XMPP_NOT_FOUND_GLOBAL_ERROR;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.XMPP_BAD_METHOD_GLOBAL_ERROR) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.XMPP_BAD_METHOD_GLOBAL_ERROR;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.XMPP_NOT_ACCEPTABLE_GLOBAL_ERROR) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.XMPP_NOT_ACCEPTABLE_GLOBAL_ERROR;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.TOO_MANY_INTERNAL_SERVER_ERRORS_IN_7D) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.TOO_MANY_INTERNAL_SERVER_ERRORS_IN_7D;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.TIMEOUT_WHILE_WAITING_FOR_MISSING_KEY) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.TIMEOUT_WHILE_WAITING_FOR_MISSING_KEY;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_KEY_ON_ALL_CLIENTS) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_KEY_ON_ALL_CLIENTS;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MALFORMED_MUTATION_CLEAR_CHAT) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MALFORMED_MUTATION_CLEAR_CHAT;
        }
        if (e === o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.FAILED_MUTATION_CLEAR_CHAT) {
            return o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.FAILED_MUTATION_CLEAR_CHAT;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    l.convertSyncdErrorCode = e;
}, 98);