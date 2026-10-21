__d("WADynamicRouterAsync", [
    "Promise",
    "WALogger",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = {
        sentinel: "RESPONSE_NAMESPACE"
    };
    const c = {
        sentinel: "NOT_HANDLED"
    };
    const d = (()=>{
        function t() {
            const e = this;
            this.$2 = (s || (s = n("Promise"))).resolve();
            this.$3 = new Map;
            this.$4 = 0;
            this.$5 = null;
            this.$6 = null;
            this.$7 = null;
            this.fireAndForget = function(t, n, r, o = false, a, i, l) {
                e.$9(t, n, r, null, o, l);
            };
            this.sendAndReceive = function(t, r, o, a = false, i, l, c) {
                return new (s || (s = n("Promise")))(function(n, i) {
                    let l = null;
                    e.$9(t, r, o, function(t) {
                        try {
                            const r = _(t);
                            if (r) {
                                l = r.call(t, function(t) {
                                    e.$9(u, "", t, n, a);
                                }, function(t) {
                                    e.$9(u, "", t, i, false);
                                });
                            } else {
                                e.$9(u, "", t, n, a);
                            }
                        } catch (t) {
                            e.$9(u, "", t, i, false);
                        }
                    }, a, c);
                });
            };
            this.$8 = function() {
                let t = e.$6;
                if (t) {
                    let r;
                    for(const n = e.$3; t && !(r = m(n, t));){
                        e.$6 = t = t.nextRoute;
                    }
                    if (!(!t || !r)) {
                        const o = e.$10(r, t);
                        let a = true;
                        if (o !== c) {
                            const { prevRoute: i, nextRoute: l } = t;
                            if (e.$6 === t) {
                                e.$6 = l;
                            }
                            if (i) {
                                i.nextRoute = l;
                            } else {
                                e.$5 = l;
                            }
                            if (l) {
                                l.prevRoute = i;
                            } else {
                                a = false;
                                e.$7 = i;
                            }
                        }
                        if (a) {
                            e.$2.then(e.$8).finally(()=>{});
                        }
                        return o;
                    }
                }
            };
        }
        const a = t.prototype;
        a.setAckPayload = function(t) {
            this.$1 = t;
        };
        a.getAckPayoad = function() {
            return this.$1;
        };
        a.hasHandlerForNamespace = function(t) {
            return this.$3.has(t);
        };
        a.getHandledNamespaces = function() {
            return Array.from(this.$3.keys());
        };
        a.setNamespaceHandler = function(t, n) {
            const e = this.$3;
            const r = e.get(t);
            if (r !== n && (++this.$4, e.set(t, n), !r)) {
                const o = this.$5;
                if (o) {
                    if (!this.$6) {
                        this.$2.then(this.$8).finally(()=>{});
                    }
                    this.$6 = o;
                }
            }
        };
        a.setHandlers = function(n, a, i) {
            function t(t, l, s) {
                if (a[t] == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " is not defined for ",
                        ""
                    ])), t, n);
                    throw r("err")(`${t} is not defined for ${n}`);
                }
                i?.(t);
                const u = a[t](l);
                if (s) {
                    s(u);
                }
            }
            this.setNamespaceHandler(n, t);
        };
        a.$9 = function(t, n, r, o, a, i) {
            const e = this.$7;
            const l = {
                namespace: t,
                route: n,
                arg: r,
                resolver: o,
                prevRoute: e,
                nextRoute: null,
                silentLog: a,
                transferList: i ?? null
            };
            this.$7 = l;
            let s = true;
            if (e) {
                e.nextRoute = l;
                s = !this.$6;
            } else {
                this.$5 = l;
            }
            if (s && m(this.$3, l)) {
                this.$6 = l;
                this.$2.then(this.$8).finally(()=>{});
            }
        };
        a.$10 = function(t, { arg: e, resolver: a, route: i, silentLog: l, transferList: u }) {
            const d = this.$4;
            let m = null;
            let p = null;
            try {
                m = t(i, e, a, l, u);
            } catch (e) {
                p = (s || (s = n("Promise"))).reject(e);
            }
            if (m === c) {
                if (d === this.$4) {
                    p = (s || (s = n("Promise"))).reject(r("err")("DynamicRouter: NOT_HANDLED can only be used when updating handlers"));
                } else {
                    return c;
                }
            }
            if (a) {
                if (p) {
                    a(p);
                }
                return;
            } else {
                return p;
            }
        };
        return t;
    })();
    function m(e, { namespace: n }) {
        if (n === u) {
            return p;
        }
        return e.get(n);
    }
    function p(e, t, n) {
        n(t);
    }
    function _(e) {
        if (e != null && (typeof e === "object" || typeof e === "function")) {
            const t = e.then;
            if (typeof t === "function") {
                return t;
            }
            return null;
        }
        return null;
    }
    l.DynamicRouter = d;
}, 98);