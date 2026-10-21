__d("WAWebBrokerProtocolResponse", [
    "invariant",
    "WAWebBrokerProtocolTypes",
    "WAWebInvocationId"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t) {
        return {
            __id: e,
            __command: o("WAWebBrokerProtocolTypes").RESPONSE_COMMAND,
            __result: t
        };
    }
    function u(e) {
        if (e != null && e.__command === o("WAWebBrokerProtocolTypes").RESPONSE_COMMAND) {
            if (e.__id == null) {
                s(0, 56278);
            }
            const t = o("WAWebInvocationId").extractInvocationId(e.__id);
            if (!(t != null && Object.hasOwn(e, "__result"))) {
                s(0, 56331);
            }
            const n = e.__result;
            return {
                result: n,
                invocationId: t
            };
        }
    }
    l.buildResponsePayload = e;
    l.unwrapResponsePayload = u;
}, 98);