__d("WAWebMmsClientIsErrorRetryable", [
    "WAWebHttpErrors",
    "WAWebMediaHostsErrors",
    "WAWebMmsClientErrors"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        switch(e){
            case 408:
                return true;
            case 507:
                return false;
            default:
                return e >= 500;
        }
    }
    function s(e) {
        if (e instanceof o("WAWebMmsClientErrors").MMSThrottleError) {
            return false;
        }
        return e instanceof o("WAWebMediaHostsErrors").NoMediaHostsError || e instanceof o("WAWebHttpErrors").HttpNetworkError || e instanceof o("WAWebMmsClientErrors").MMSUnauthorizedError || e instanceof o("WAWebHttpErrors").HttpStatusCodeError && e.status >= 500;
    }
    l.isRetriableStatusCode = e;
    l.isErrorRetryable = s;
}, 98);