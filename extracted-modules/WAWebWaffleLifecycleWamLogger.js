__d("WAWebWaffleLifecycleWamLogger", [
    "WAWebAccountLinkingConstants",
    "WAWebWaffleCompanionStateLifecycleWamEvent",
    "WAWebWamEnumWaffleLifecycleErrorActionType",
    "WAWebWamEnumWaffleLifecycleErrorCodeType",
    "WAWebWamEnumWaffleLifecycleLinkStateType",
    "WAWebWamEnumWaffleLifecyclePkiVersionType",
    "WAWebWamEnumWaffleLifecycleTraceActionType",
    "WAWebWamEnumWaffleLifecycleTraceSourceType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e === o("WAWebAccountLinkingConstants").AccountLinkState.Active) {
            return o("WAWebWamEnumWaffleLifecycleLinkStateType").WAFFLE_LIFECYCLE_LINK_STATE_TYPE.ACTIVE;
        }
        if (e === o("WAWebAccountLinkingConstants").AccountLinkState.Paused) {
            return o("WAWebWamEnumWaffleLifecycleLinkStateType").WAFFLE_LIFECYCLE_LINK_STATE_TYPE.PAUSED;
        }
        if (e === o("WAWebAccountLinkingConstants").AccountLinkState.Unlinked) {
            return o("WAWebWamEnumWaffleLifecycleLinkStateType").WAFFLE_LIFECYCLE_LINK_STATE_TYPE.UNLINKED;
        }
        return o("WAWebWamEnumWaffleLifecycleLinkStateType").WAFFLE_LIFECYCLE_LINK_STATE_TYPE.NOT_APPLICABLE;
    }
    function s(e) {
        switch(e){
            case "IQErrorRequestTimeout":
                return o("WAWebWamEnumWaffleLifecycleErrorCodeType").WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.TIMEOUT;
            case "IQErrorRateOverlimit":
                return o("WAWebWamEnumWaffleLifecycleErrorCodeType").WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.RATE_OVERLIMIT;
            case "IQErrorNotAuthorized":
                return o("WAWebWamEnumWaffleLifecycleErrorCodeType").WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.NOT_AUTHORIZED;
            case "IQErrorWFNotAuthorizedInvalidPassword":
                return o("WAWebWamEnumWaffleLifecycleErrorCodeType").WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.INVALID_PASSWORD;
            case "IQErrorWFNotFound":
                return o("WAWebWamEnumWaffleLifecycleErrorCodeType").WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.WF_NOT_FOUND;
            case "IQErrorWFStateMismatch":
                return o("WAWebWamEnumWaffleLifecycleErrorCodeType").WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.WF_STATE_MISMATCH;
            case "IQErrorWFSuspended":
                return o("WAWebWamEnumWaffleLifecycleErrorCodeType").WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.WF_SUSPENDED;
            case "IQErrorPayloadEncDec":
                return o("WAWebWamEnumWaffleLifecycleErrorCodeType").WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.PAYLOAD_ENC_DEC;
            default:
                return o("WAWebWamEnumWaffleLifecycleErrorCodeType").WAFFLE_LIFECYCLE_ERROR_CODE_TYPE.UNKNOWN;
        }
    }
    function u(e) {
        switch(e){
            case "retry":
                return o("WAWebWamEnumWaffleLifecycleErrorActionType").WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE.RETRY;
            case "request_nonce":
                return o("WAWebWamEnumWaffleLifecycleErrorActionType").WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE.REQUEST_NONCE;
            case "refresh_token":
                return o("WAWebWamEnumWaffleLifecycleErrorActionType").WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE.REFRESH_TOKEN;
            case "refetch_certs":
                return o("WAWebWamEnumWaffleLifecycleErrorActionType").WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE.REFETCH_CERTS;
            case "purge":
                return o("WAWebWamEnumWaffleLifecycleErrorActionType").WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE.PURGE;
            case "pause":
                return o("WAWebWamEnumWaffleLifecycleErrorActionType").WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE.PAUSE;
            case "server_purge":
                return o("WAWebWamEnumWaffleLifecycleErrorActionType").WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE.PURGE;
            case "server_pause":
                return o("WAWebWamEnumWaffleLifecycleErrorActionType").WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE.PAUSE;
            case "handled":
                return o("WAWebWamEnumWaffleLifecycleErrorActionType").WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE.PURGE;
            case "fail":
                return o("WAWebWamEnumWaffleLifecycleErrorActionType").WAFFLE_LIFECYCLE_ERROR_ACTION_TYPE.FAIL;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function c(e) {
        switch(e){
            case 1:
                return o("WAWebWamEnumWaffleLifecyclePkiVersionType").WAFFLE_LIFECYCLE_PKI_VERSION_TYPE.V1;
            case 2:
                return o("WAWebWamEnumWaffleLifecyclePkiVersionType").WAFFLE_LIFECYCLE_PKI_VERSION_TYPE.V2;
            default:
                return o("WAWebWamEnumWaffleLifecyclePkiVersionType").WAFFLE_LIFECYCLE_PKI_VERSION_TYPE.NOT_APPLICABLE;
        }
    }
    function d({ hasAccessToken, hasExistingRow, linkState, traceAction }) {
        new (o("WAWebWaffleCompanionStateLifecycleWamEvent")).WaffleCompanionStateLifecycleWamEvent({
            waffleLifecycleTraceAction: traceAction,
            waffleLifecycleTraceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType").WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.SYNCD,
            waffleLifecycleLinkState: linkState,
            waffleLifecycleHasExistingRow: hasExistingRow,
            waffleLifecycleHasAccessToken: hasAccessToken
        }).commit();
    }
    function m({ traceAction, traceSource }) {
        new (o("WAWebWaffleCompanionStateLifecycleWamEvent")).WaffleCompanionStateLifecycleWamEvent({
            waffleLifecycleTraceAction: traceAction,
            waffleLifecycleTraceSource: traceSource
        }).commit();
    }
    function p({ elapsedMs, errorAction, errorCode, hasAccessToken, linkState, pkiVersion, traceAction }) {
        new (o("WAWebWaffleCompanionStateLifecycleWamEvent")).WaffleCompanionStateLifecycleWamEvent({
            waffleLifecycleTraceAction: traceAction,
            waffleLifecycleTraceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType").WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.REFRESH_TOKEN,
            waffleLifecycleLinkState: linkState,
            waffleLifecycleHasAccessToken: hasAccessToken,
            waffleLifecycleElapsedMs: elapsedMs,
            waffleLifecycleErrorCode: errorCode,
            waffleLifecycleErrorAction: errorAction,
            waffleLifecyclePkiVersion: pkiVersion
        }).commit();
    }
    function _({ elapsedMs, errorAction, errorCode, hasAccessToken, linkState, pkiVersion }) {
        new (o("WAWebWaffleCompanionStateLifecycleWamEvent")).WaffleCompanionStateLifecycleWamEvent({
            waffleLifecycleTraceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.PING,
            waffleLifecycleTraceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType").WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.REFRESH_TOKEN,
            waffleLifecycleLinkState: linkState,
            waffleLifecycleHasAccessToken: hasAccessToken,
            waffleLifecycleElapsedMs: elapsedMs,
            waffleLifecycleErrorCode: errorCode,
            waffleLifecycleErrorAction: errorAction,
            waffleLifecyclePkiVersion: pkiVersion
        }).commit();
    }
    function f({ linkState, traceSource, unlinkType }) {
        new (o("WAWebWaffleCompanionStateLifecycleWamEvent")).WaffleCompanionStateLifecycleWamEvent({
            waffleLifecycleTraceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.PURGE,
            waffleLifecycleTraceSource: traceSource,
            waffleLifecycleLinkState: linkState,
            waffleLifecycleUnlinkType: unlinkType
        }).commit();
    }
    function g({ linkState, traceSource, unlinkType }) {
        new (o("WAWebWaffleCompanionStateLifecycleWamEvent")).WaffleCompanionStateLifecycleWamEvent({
            waffleLifecycleTraceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.NOT_APPLICABLE,
            waffleLifecycleTraceSource: traceSource,
            waffleLifecycleLinkState: linkState,
            waffleLifecycleUnlinkType: unlinkType
        }).commit();
    }
    function h({ errorAction, errorCode, pkiVersion, retryCount }) {
        new (o("WAWebWaffleCompanionStateLifecycleWamEvent")).WaffleCompanionStateLifecycleWamEvent({
            waffleLifecycleTraceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.NOT_APPLICABLE,
            waffleLifecycleTraceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType").WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.ERROR_RETRY,
            waffleLifecycleErrorCode: errorCode,
            waffleLifecycleErrorAction: errorAction,
            waffleLifecycleRetryCount: retryCount,
            waffleLifecyclePkiVersion: pkiVersion
        }).commit();
    }
    l.mapLinkStateToWam = e;
    l.mapIQErrorNameToWamCode = s;
    l.mapIQErrorActionToWam = u;
    l.mapPkiVersionToWam = c;
    l.logSyncdReceived = d;
    l.logNonceFetch = m;
    l.logRefreshToken = p;
    l.logPing = _;
    l.logPurge = f;
    l.logNotification = g;
    l.logErrorClassification = h;
}, 98);