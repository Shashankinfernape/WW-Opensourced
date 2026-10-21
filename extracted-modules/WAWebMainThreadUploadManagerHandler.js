__d("WAWebMainThreadUploadManagerHandler", [
    "WALogger",
    "WAWebDeserializeBridgedError"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new Map;
    function u(e, callbacks) {
        s.set(e, {
            callbacks
        });
    }
    function c(e) {
        s.delete(e);
    }
    function d(uploadId) {
        const n = s.get(uploadId);
        return n ?? (o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "WAWebMainThreadUploadManagerHandler missing callbacks for ",
            ""
        ])), uploadId), null);
    }
    function m(error) {
        return o("WAWebDeserializeBridgedError").deserializeBridgedError(error);
    }
    function p(e) {
        d(e.uploadId)?.callbacks.handleEncryptionStart();
    }
    function _(e) {
        d(e.uploadId)?.callbacks.handleEncryptionSuccess();
    }
    function f(e) {
        d(e.uploadId)?.callbacks.handleStreamUploadStart();
    }
    function g(e) {
        d(e.uploadId)?.callbacks.handleArrayBufferCreated(e.byteLength);
    }
    function h(e) {
        d(e.uploadId)?.callbacks.handleCheckExistingSuccess();
    }
    function y(e) {
        d(e.uploadId)?.callbacks.handleCheckExistingError(m(e.error));
    }
    function C(e) {
        d(e.uploadId)?.callbacks.handleUploadHostFound({
            hostName: e.hostName,
            hostClass: e.hostClass,
            failCount: e.failCount
        });
    }
    function b(e) {
        d(e.uploadId)?.callbacks.handleUploadAttemptSuccess();
    }
    function v(e) {
        d(e.uploadId)?.callbacks.handleUploadAttemptError({
            error: m(e.error),
            failCount: e.failCount,
            overallLastUploadRetryPhase: e.retryPhase,
            overallT: e.overallT
        });
    }
    function S(e) {
        d(e.uploadId)?.callbacks.handleUploadProgress(e.bytesTransferred);
    }
    function R(e) {
        d(e.uploadId)?.callbacks.handleUploadSuccess();
    }
    function L(e) {
        d(e.uploadId)?.callbacks.handleUploadError(m(e.error));
    }
    l.registerUploadCallbacks = u;
    l.unregisterUploadCallbacks = c;
    l.handleEncryptionStart = p;
    l.handleEncryptionSuccess = _;
    l.handleStreamUploadStart = f;
    l.handleArrayBufferCreated = g;
    l.handleCheckExistingSuccess = h;
    l.handleCheckExistingError = y;
    l.handleUploadHostFound = C;
    l.handleUploadAttemptSuccess = b;
    l.handleUploadAttemptError = v;
    l.handleUploadProgress = S;
    l.handleUploadSuccess = R;
    l.handleUploadError = L;
}, 98);