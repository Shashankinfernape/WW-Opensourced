__d("WAWebContactTextStatusBridge", [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexFetchTextStatusListJob",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebRestOperations",
    "WAWebScheduledOperations",
    "WAWebUpdateTextStatusJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                const a = yield o("WAWebMexFetchTextStatusListJob").mexGetTextStatusList(t, n);
                return {
                    id: a.id,
                    text: a.text,
                    emoji: a.emoji,
                    lastUpdateTime: a.lastUpdateTime,
                    ephemeralDurationSeconds: a.ephemeralDurationSeconds
                };
            } catch (error) {
                if (error instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                    if (error.statusCode !== 401) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "getTextStatus: failed ",
                            " : ",
                            ""
                        ])), error.statusCode, error.message).sendLogs("getTextStatus-failed", {
                            sampling: 0.01
                        });
                    }
                    return {
                        id: t,
                        error,
                        text: ""
                    };
                }
                const i = r("getErrorSafe")(error);
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getTextStatus: failed ",
                    ""
                ])), i.message).sendLogs("getTextStatus-failed-unknown-error", {
                    sampling: 0.01
                });
                return {
                    id: t,
                    error: i,
                    text: ""
                };
            }
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        return o("WAWebRestOperations").runRestOperation(o("WAWebScheduledOperations").ScheduledOperation.SET_TEXT_STATUS, function() {
            return o("WAWebUpdateTextStatusJob").updateTextStatus(e, t, n);
        }, function() {
            return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().waitUntilCompleted(o("WAWebPersistedJobDefinitions").jobSerializers.setTextStatus(e, t, n));
        });
    }
    l.getTextStatus = u;
    l.setTextStatus = d;
}, 98);