__d("WAWebInvocationDispatcher", [
    "invariant",
    "Promise",
    "WAWebBrokerProtocolInvocation",
    "WAWebBrokerProtocolResponse",
    "WAWebInvocationId",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = (()=>{
        function t() {
            const e = this;
            this.$2 = new Map;
            this.$3 = function(t) {
                const n = o("WAWebBrokerProtocolResponse").unwrapResponsePayload(t.data);
                if (n != null) {
                    const { invocationId: a, result: i } = n;
                    if (e.$2.has(a)) {
                        const l = r("nullthrows")(e.$2.get(a));
                        const s = l.resolve;
                        s(i);
                        e.$2.delete(a);
                    }
                }
            };
        }
        const a = t.prototype;
        a.setConnectionManager = function(t) {
            const e = this;
            this.$1 = t;
            t.waitForConnection().then(()=>{
                const n = r("nullthrows")(t.getPort(), "Port obtained from ConnectionManager after connection");
                n.addEventListener("message", e.$3);
                n.start();
            });
        };
        a.invoke = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
                const i = this;
                if (!this.$1) {
                    s(0, 56298);
                }
                yield this.$1.waitForConnection();
                if (!this.$1) {
                    s(0, 56298);
                }
                const l = r("nullthrows")(this.$1.getPort(), "Port obtained from ConnectionManager after connection");
                const u = o("WAWebInvocationId").genInvocationId();
                l.postMessage(o("WAWebBrokerProtocolInvocation").buildInvocationPayload({
                    invocationId: u,
                    method: t,
                    args: a
                }));
                return new (e || (e = n("Promise")))(function(e, t) {
                    i.$2.set(u, {
                        resolve: e,
                        reject: t
                    });
                });
            });
            function a(e, n) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        return t;
    })();
    const c = new u;
    l.default = c;
}, 98);