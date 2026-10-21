__d("WAWebBrokerProtocolInvocation", [
    "invariant",
    "WAWebBrokerProtocolTypes",
    "WAWebInvocationId"
], function(t, n, r, o, a, i, l, s) {
    function e({ args: t, invocationId: n, method: r }) {
        return {
            __id: n,
            __command: o("WAWebBrokerProtocolTypes").INVOCATION_COMMAND,
            __method: r,
            __args: t
        };
    }
    function u(e) {
        if (e != null && e.__command === o("WAWebBrokerProtocolTypes").INVOCATION_COMMAND) {
            if (!e.__id) {
                s(0, 56278);
            }
            const t = o("WAWebInvocationId").extractInvocationId(e.__id);
            if (!(t != null && e.__method && typeof e.__method === "string" && e.__id && e.__args && Array.isArray(e.__args))) {
                s(0, 56275);
            }
            const n = e;
            const { __method: r, __args: a } = n;
            return {
                method: r,
                args: a,
                invocationId: t
            };
        }
    }
    l.buildInvocationPayload = e;
    l.unwrapInvocationPayload = u;
}, 98);