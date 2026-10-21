__d("ReactFiberErrorDialogWWW", [
    "ErrorNormalizeUtils",
    "ErrorPubSub",
    "LogHistory",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t) {
        const { componentStack, errorBoundary } = t;
        const i = r("getErrorSafe")(t.error);
        i.componentStack = t.componentStack;
        i.loggingSource = "REACT_FIBER";
        if (errorBoundary != null && errorBoundary.suppressReactDefaultErrorLoggingIUnderstandThisWillMakeBugsHarderToFindAndFix) {
            return false;
        }
        const l = o("LogHistory").getInstance("react_fiber_error_logger");
        l.error("capturedError", JSON.stringify({
            componentStack,
            error: {
                name: i.name,
                message: i.message,
                stack: i.stack
            }
        }));
        const s = r("ErrorNormalizeUtils").normalizeError(i);
        (e || (e = r("ErrorPubSub"))).reportNormalizedError(s);
        return false;
    }
    l.showErrorDialog = s;
}, 98);