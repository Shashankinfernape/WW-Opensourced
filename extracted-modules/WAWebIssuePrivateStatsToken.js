__d("WAWebIssuePrivateStatsToken", [
    "WADeprecatedSendIq",
    "WALogger",
    "WASemaphore",
    "WATimeUtils",
    "WAWebSignCredentialWamEvent",
    "WAWebWamEnumApplicationState",
    "WAWebWamEnumSignCredentialResult",
    "asyncToGeneratorRuntime",
    "privateStatsToken"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 3;
    function u(result) {
        if (result === "success") {
            return o("WAWebWamEnumSignCredentialResult").SIGN_CREDENTIAL_RESULT.SUCCESS;
        }
        if (result === "bad-request") {
            return o("WAWebWamEnumSignCredentialResult").SIGN_CREDENTIAL_RESULT.ERROR_BAD_REQUEST;
        }
        if (result === "internal-server-error") {
            return o("WAWebWamEnumSignCredentialResult").SIGN_CREDENTIAL_RESULT.ERROR_SERVER;
        }
        if (result === "disconnected") {
            return o("WAWebWamEnumSignCredentialResult").SIGN_CREDENTIAL_RESULT.ERROR_CLIENT_NETWORK;
        }
        if (result === "feature-not-implemented" || result === "service-unavailable" || result === "decryption-error" || result === "unknown") {
            return o("WAWebWamEnumSignCredentialResult").SIGN_CREDENTIAL_RESULT.ERROR_OTHER;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${result}`);
        })();
    }
    function c({ overallStartTime, result, retryAttemptsLeft, retryStartTime }) {
        const signCredentialResult = u(result);
        new (o("WAWebSignCredentialWamEvent")).SignCredentialWamEvent({
            signCredentialResult,
            overallT: o("WATimeUtils").monotonicTimeSince(overallStartTime),
            signCredentialT: o("WATimeUtils").monotonicTimeSince(retryStartTime),
            retryCount: s - retryAttemptsLeft,
            waConnectedToChatd: result !== "disconnected",
            applicationState: document.visibilityState === "visible" ? o("WAWebWamEnumApplicationState").APPLICATION_STATE.FOREGROUND : o("WAWebWamEnumApplicationState").APPLICATION_STATE.BACKGROUND
        }).commit();
    }
    const d = new (o("WASemaphore")).Semaphore(1);
    function m() {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield d.acquire();
            try {
                const n = yield o("privateStatsToken").getToken(o("WADeprecatedSendIq").deprecatedSendIqWithoutRetry);
                const { metric, result } = n;
                if (metric != null) {
                    c(metric);
                }
                if (!result) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Couldn't get a private stats token"
                    ])));
                }
                return result;
            } finally{
                t.release();
            }
        });
        return p.apply(this, arguments);
    }
    l.getToken = m;
}, 98);