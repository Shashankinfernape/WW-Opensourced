__d("WAWebUploadPrivateStatsBackend", [
    "WABackoffUtils",
    "WABase64",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAWebIssuePrivateStatsToken",
    "WAWebNetworkStatus",
    "WAWebPsBufferUploadWamEvent",
    "WAWebWamEnumApplicationState",
    "WAWebWamEnumPsBufferUploadResult",
    "asyncToGeneratorRuntime",
    "privateStatsUpload"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        const content = new Uint8Array(o("WABase64").decodeB64(e));
        return d(t, (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = yield o("privateStatsUpload").upload_UNSAFE_INTERNAL_DO_NOT_USE([
                    {
                        key: t,
                        content
                    }
                ], o("WAWebIssuePrivateStatsToken").getToken);
                const { metrics, uploadedBufferKeys } = n;
                metrics.map(c);
                if (uploadedBufferKeys.length === 0) {
                    e(t);
                }
                e(undefined);
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function u(result) {
        switch(result){
            case "success":
                return o("WAWebWamEnumPsBufferUploadResult").PS_BUFFER_UPLOAD_RESULT.SUCCESS;
            case "error-server-other":
                return o("WAWebWamEnumPsBufferUploadResult").PS_BUFFER_UPLOAD_RESULT.ERROR_SERVER_OTHER;
            case "error-parsing":
                return o("WAWebWamEnumPsBufferUploadResult").PS_BUFFER_UPLOAD_RESULT.ERROR_PARSING;
            case "error-decoding":
                return o("WAWebWamEnumPsBufferUploadResult").PS_BUFFER_UPLOAD_RESULT.ERROR_DECODING;
            case "error-credential":
                return o("WAWebWamEnumPsBufferUploadResult").PS_BUFFER_UPLOAD_RESULT.ERROR_CREDENTIAL;
            case "error-other":
                return o("WAWebWamEnumPsBufferUploadResult").PS_BUFFER_UPLOAD_RESULT.ERROR_OTHER;
            case "error-access-token":
                return o("WAWebWamEnumPsBufferUploadResult").PS_BUFFER_UPLOAD_RESULT.ERROR_ACCESS_TOKEN;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${result}`);
                })();
        }
    }
    function c({ httpResponseCode, result, uploadTime }) {
        const psBufferUploadResult = u(result);
        new (o("WAWebPsBufferUploadWamEvent")).PsBufferUploadWamEvent({
            psBufferUploadResult,
            psBufferUploadT: uploadTime,
            psBufferUploadHttpResponseCode: httpResponseCode,
            applicationState: document.visibilityState === "visible" ? o("WAWebWamEnumApplicationState").APPLICATION_STATE.FOREGROUND : o("WAWebWamEnumApplicationState").APPLICATION_STATE.BACKGROUND
        }).commit();
    }
    function d(t, a) {
        return o("WAPromiseLoop").promiseLoop((()=>{
            const i = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n, i, l) {
                const s = o("WAPromiseDelays").delayMs(o("WABackoffUtils").expBackoff(l, 120000, 1000, 0.1));
                try {
                    yield r("WAWebNetworkStatus").waitIfOffline();
                    return yield a(n);
                } catch (error) {
                    if (l > 1) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[wam] sendLogs failure error: ",
                            ""
                        ])), String(error));
                        return n(t);
                    }
                    return s;
                }
            });
            return function(e, t, n) {
                return i.apply(this, arguments);
            };
        })());
    }
    l.default = s;
}, 98);