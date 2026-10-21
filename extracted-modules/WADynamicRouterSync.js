__d("WADynamicRouterSync", [
    "ExecutionEnvironment",
    "Promise",
    "WALogger",
    "WAMapWithDefault",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = [
        "toLastActiveClient"
    ];
    let d;
    let m;
    function p(e, t) {
        if (e != null) {
            const n = e.toLastActiveClient;
            const r = babelHelpers.objectWithoutPropertiesLoose(e, c);
            if (n === true && t != null) {
                return babelHelpers.extends({}, r, {
                    toClientId: r.toClientId ?? t
                });
            }
            return r;
        }
    }
    const _ = (()=>{
        function t() {
            const e = this;
            this.$2 = new Map;
            this.$3 = new (o("WAMapWithDefault")).MapWithDefault(function() {
                return new Set;
            });
            this.$4 = null;
            this.fireAndForget = function(t, n, r, o = false, a, i, l) {
                e.$3.get(t).add({
                    route: n,
                    arg: r,
                    resolver: null,
                    silentLog: o,
                    eventCallbacks: a,
                    transferList: l,
                    opts: p(i, e.$4)
                });
                e.$5(t, n);
            };
            this.sendAndReceive = function(t, r, o, a = false, i, l, s) {
                return new (m || (m = n("Promise")))(function(n) {
                    e.$3.get(t).add({
                        route: r,
                        arg: o,
                        resolver: function(t) {
                            n(t);
                        },
                        silentLog: a,
                        transferList: s,
                        eventCallbacks: i,
                        opts: p(l, e.$4)
                    });
                    e.$5(t, r);
                });
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
            return this.$2.has(t);
        };
        a.getHandledNamespaces = function() {
            return Array.from(this.$2.keys());
        };
        a.setNamespaceHandler = function(t, n) {
            const e = this.$2;
            const r = e.get(t);
            if (r !== n) {
                e.set(t, n);
                if (r == null) {
                    this.$5(t);
                }
            }
        };
        a.$6 = function({ arg: t, eventCallbacks: i, opts: l, resolver: s, route: u, silentLog: c, transferList: d }, a) {
            try {
                this.$4 = l?.fromClientId ?? this.$4;
                a(u, t, s, c, d, i, l);
            } catch (t) {
                s?.((m || (m = n("Promise"))).reject(t));
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Bridge handler: ",
                    ""
                ])), t);
            }
        };
        a.$5 = function(t, n) {
            const e = this;
            const a = this.$3.get(t);
            const i = this.$2.get(t);
            if (i == null) {
                const l = (d || (d = r("ExecutionEnvironment"))).isInWorker ? "worker" : "main-thread";
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "No handler for bridge with namespace: ",
                    " route: ",
                    " called in environment: ",
                    ""
                ])), t, n, l);
                return;
            }
            a.forEach((t)=>{
                a.delete(t);
                e.$6(t, i);
            });
        };
        a.setHandlers = function(t, n, a) {
            function e(e, i, l, s, c, d, m) {
                if (n[e] == null) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " is not defined for ",
                        ""
                    ])), e, t);
                    throw r("err")(`${e} is not defined for ${t}`);
                }
                a?.(e);
                const p = n[e](i, m);
                if (l) {
                    l(p);
                }
            }
            this.setNamespaceHandler(t, e);
        };
        return t;
    })();
    l.normaliseHandlerOptions = p;
    l.DynamicRouterSync = _;
}, 98);