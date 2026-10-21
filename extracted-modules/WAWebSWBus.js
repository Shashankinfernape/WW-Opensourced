__d("WAWebSWBus", [
    "Promise",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebNoop",
    "WAWebSWBusActions",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let u;
    const c = [
        r("WAWebSWBusActions").HEARTBEAT
    ];
    const d = (()=>{
        function e(t) {
            const o = this;
            this.$1 = function(t) {
                if (!(t.data == null || t.data.action == null)) {
                    const a = t.data;
                    if (!(t.ports == null || t.ports.length === 0)) {
                        const i = t.ports;
                        if (!(!e.isSW() && window.navigator.serviceWorker && t.source !== window.navigator.serviceWorker.controller)) {
                            let l;
                            if (typeof t.waitUntil === "function") {
                                l = function(n) {
                                    return t.waitUntil(n);
                                };
                            } else {
                                l = r("WAWebNoop");
                            }
                            l((u || (u = n("Promise"))).resolve(o.requestHandler(a)).then((e)=>{
                                i[0].postMessage(e);
                            }).catch((e)=>{
                                i[0].postMessage({
                                    error: String(e)
                                });
                            }));
                        }
                    }
                }
            };
            this.requestHandler = t;
        }
        const t = e.prototype;
        t.init = function() {
            const t = e.isSW() ? self : window.navigator.serviceWorker;
            try {
                if (!t) {
                    return;
                }
                t.addEventListener("message", this.$1);
            } catch (e) {}
        };
        e.isSW = function() {
            return typeof window === "undefined";
        };
        e.getRequestor = function(r) {
            if (e.isSW()) {
                if (typeof r === "string") {
                    return self.clients.get(r);
                }
            } else {
                if (window.navigator.serviceWorker) {
                    return window.navigator.serviceWorker.ready.then(()=>{
                        if (window.navigator.serviceWorker) {
                            return window.navigator.serviceWorker.controller;
                        }
                        return null;
                    });
                }
                return (u || (u = n("Promise"))).resolve(null);
            }
            return (u || (u = n("Promise"))).resolve(r);
        };
        e.broadcast = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, o) {
                if (!e.isSW()) {
                    throw r("err")("Broadcast called from non-serviceworker.");
                }
                const a = yield self.clients.matchAll();
                if (a.length === 0) {
                    return (u || (u = n("Promise"))).reject(r("err")("No clients available."));
                }
                return (u || (u = n("Promise"))).all(a.map((n)=>e.request(n, t, o)));
            });
            function o(e, n) {
                return t.apply(this, arguments);
            }
            return o;
        })();
        e.request = function(a, i, l) {
            const s = o("WAWebBuildConstants").VERSION_STR;
            const c = new MessageChannel;
            const d = new (u || (u = n("Promise")))(function(t, n) {
                c.port1.onmessage = function(e) {
                    let r;
                    if ((r = e.data) != null && r.error) {
                        n(e.data.error);
                    } else {
                        t(e.data);
                    }
                };
                return e.getRequestor(a).then((e)=>{
                    if (!e) {
                        return n(r("err")("No ServiceWorker controlling this client."));
                    }
                    e.postMessage({
                        action: i,
                        message: l,
                        version: s
                    }, [
                        c.port2
                    ]);
                });
            });
            return d;
        };
        return e;
    })();
    l.default = d;
}, 98);