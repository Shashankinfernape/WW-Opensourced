__d("WAWebDeserializeBridgedError", [
    "WAAbortError",
    "WALogger",
    "WAWebHttpErrors",
    "WAWebMmsClientErrors",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        const n = {
            message: e.message,
            stack: e.stack ?? "",
            name: e.name
        };
        if (e instanceof o("WAWebHttpErrors").HttpStatusCodeError) {
            return babelHelpers.extends({}, n, {
                statusCode: e.status
            });
        }
        if (e instanceof o("WAAbortError").AbortError || e.name === "AbortError") {
            return babelHelpers.extends({}, n, {
                name: "AbortError",
                isAbort: true
            });
        }
        const r = babelHelpers.extends({}, n);
        return r;
    }
    function u({ isAbort: t, message: n, name, stack: a, statusCode: i }) {
        const l = t === true ? "AbortError" : name;
        const s = l === "AbortError" ? new (o("WAAbortError")).AbortError(n) : l === "MediaNotFoundError" ? new (o("WAWebMmsClientErrors")).MediaNotFoundError(n) : l === "MediaTooLargeError" ? new (o("WAWebMmsClientErrors")).MediaTooLargeError(n) : l === "MediaInvalidError" ? new (o("WAWebMmsClientErrors")).MediaInvalidError(n) : l === "MMSUnauthorizedError" ? new (o("WAWebMmsClientErrors")).MMSUnauthorizedError(n) : l === "MMSForbiddenError" ? new (o("WAWebMmsClientErrors")).MMSForbiddenError(n) : l === "MMSThrottleError" ? new (o("WAWebMmsClientErrors")).MMSThrottleError(n) : l === "HttpStatusCodeError" ? c(i, n) : d(name, n);
        s.message = n;
        s.stack = a || s.stack;
        return s;
    }
    function c(t, n) {
        if (t == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "deserializeBridgedError missing statusCode for HttpStatusCodeError"
            ]))).sendLogs("deserialize-bridged-error-missing-status-code");
            return r("err")(n);
        }
        return new (o("WAWebHttpErrors")).HttpStatusCodeError(t, n);
    }
    function d(e, t) {
        const n = r("err")(t);
        n.name = e || "Error";
        return n;
    }
    l.serializeBridgedError = s;
    l.deserializeBridgedError = u;
}, 98);