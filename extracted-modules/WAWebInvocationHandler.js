__d("WAWebInvocationHandler", [
    "WAWebBrokerProtocolInvocation",
    "WAWebBrokerProtocolResponse",
    "WAWebInvocationInterface"
], function(t, n, r, o, a, i, l) {
    const e = (()=>{
        function e() {
            this.$1 = function(e, { data: n }) {
                const r = o("WAWebBrokerProtocolInvocation").unwrapInvocationPayload(n);
                if (r != null) {
                    const { args: a, invocationId: i, method: l } = r;
                    const s = o("WAWebInvocationInterface").get();
                    s[l](...a).then((t)=>{
                        e.postMessage(o("WAWebBrokerProtocolResponse").buildResponsePayload(i, t));
                    });
                }
            };
        }
        const t = e.prototype;
        t.respondTo = function(t) {
            const e = this;
            t.addEventListener("message", function(n) {
                return e.$1(t, n);
            });
            t.start();
        };
        return e;
    })();
    const s = new e;
    l.default = s;
}, 98);