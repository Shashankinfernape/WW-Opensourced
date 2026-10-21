__d("WACrossWorkerPortal", [
    "Promise",
    "WABridgeBatcher",
    "WALogger",
    "WALruCache",
    "WAPromiseManagement",
    "WATransferableResult",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "transferList"
    ];
    const s = [
        "transferList"
    ];
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    const v = (()=>{
        function t(e, t, n, r, a) {
            const i = this;
            this.port = null;
            this.$2 = 1;
            this.openRequests = new Map;
            this.listeners = new Set;
            if (a?.useLRUCache === true) {
                const u = new (o("WALruCache")).LruCache({
                    sizeLimit: a.portalCacheSize ?? 100,
                    getSize: function() {
                        return 1;
                    }
                });
                this.processedRequests = {
                    has: function(t) {
                        return u.has(t);
                    },
                    add: function(t) {
                        u.put(t, true);
                    }
                };
            } else {
                const c = new Set;
                this.processedRequests = {
                    has: function(t) {
                        return c.has(t);
                    },
                    add: function(t) {
                        c.add(t);
                    }
                };
            }
            this.$1 = e;
            this.clientId = r;
            this.config = a;
            this.sendStream = new (o("WABridgeBatcher")).BridgeBatcher(t, function(e) {
                i.$3(e);
            }, this.config?.bridgeBatcherMaxTokens);
            n.forEach((t)=>{
                e.setNamespaceHandler(t, i.$4(t));
            });
        }
        const a = t.prototype;
        a.$5 = function() {
            const e = this.clientId != null ? `${this.clientId}_` : "";
            return `${e}${this.$2++}`;
        };
        a.$6 = function(t) {
            const e = t.split("_");
            if (e.length !== 2) {
                return null;
            }
            return e[0];
        };
        a.addListener = function(t) {
            const e = this;
            this.listeners.add(t);
            return function() {
                return e.listeners.delete(t);
            };
        };
        a.setPort = function(t) {
            const e = this;
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Bridge updating port"
            ])));
            this.port = t;
            this.sendStream.cancel();
            t.onmessage = function(n) {
                if (e.port !== t) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Bridge received msg on old port"
                    ])));
                    return;
                }
                const r = n.data;
                if (!(!r || !Array.isArray(r))) {
                    r.forEach((n)=>{
                        e.$7(n, "incoming");
                        e.$8(t, n);
                    });
                }
            };
            this.openRequests.forEach(({ request: n })=>{
                e.sendStream.addEvent({
                    type: "request",
                    content: n
                });
            });
        };
        a.getBridge = function() {
            return this.$1;
        };
        a.$4 = function(t) {
            const e = this;
            return function(n, r, o, a, i, l, s) {
                e.$9(t, n, r, o, a, i, l, s);
            };
        };
        a.$9 = function(t, n, r, o, a, i, l, s) {
            const u = this.$5();
            const c = babelHelpers.extends({
                fromClientId: this.clientId ?? void 0
            }, s);
            const d = {
                requestId: u,
                expectsResponse: !!o,
                namespace: t,
                name: n,
                arg: r,
                transferList: i,
                silentLog: a,
                opts: c
            };
            this.openRequests.set(u, {
                request: d,
                resolver: o,
                eventCallbacks: l
            });
            this.sendStream.addEvent({
                type: "request",
                content: d
            });
        };
        a.$10 = function(t, n) {
            if (t === this.port) {
                this.sendStream.addEvent({
                    type: "result",
                    content: n
                });
            }
        };
        a.$3 = function(n) {
            const t = this;
            const r = this.port;
            if (r) {
                const o = [];
                const a = new Set;
                for (const i of n){
                    if (i.type === "request") {
                        const l = i.content;
                        const u = l.transferList;
                        const c = babelHelpers.objectWithoutPropertiesLoose(l, e);
                        if (u != null) {
                            for (const d of u){
                                a.add(d);
                            }
                        }
                        o.push({
                            type: "request",
                            content: c
                        });
                    } else {
                        const m = i.content;
                        const p = m.transferList;
                        const _ = babelHelpers.objectWithoutPropertiesLoose(m, s);
                        if (p != null) {
                            for (const f of p){
                                a.add(f);
                            }
                        }
                        o.push({
                            type: "result",
                            content: _
                        });
                    }
                }
                const g = n.map((e)=>{
                    const o = e.content.arg?.type ?? "";
                    return `${e.content.name ?? ""}${o ? `:${o}` : ""}`;
                }).filter(Boolean);
                n.forEach((e)=>{
                    t.$7(e, "outgoing");
                    const o = t.openRequests.get(e.content.requestId);
                    if (o?.eventCallbacks?.onSend != null) {
                        o.eventCallbacks.onSend({
                            queueSize: n.length,
                            queueMsgs: g
                        });
                    }
                });
                try {
                    r.postMessage(o, a.size > 0 ? Array.from(a) : void 0);
                } catch (e) {
                    if (this.config?.onPortError == null) {
                        throw e;
                    }
                    this.$11(r, e);
                }
            }
        };
        a.$11 = function(t, n) {
            const e = r("getErrorSafe")(n);
            if (e.name === "DataCloneError") {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Bridge send dropped; payload already transferred or not cloneable: ",
                    ""
                ])), e.message);
                return;
            }
            if (this.port === t) {
                this.port = null;
            }
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "Bridge send failed; port inaccessible (dropped dead port): ",
                ""
            ])), e.message);
            try {
                let a;
                if (!((a = this.config) == null || a.onPortError == null)) {
                    a.onPortError(e);
                }
            } catch (e) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Bridge onPortError threw: ",
                    ""
                ])), r("getErrorSafe")(e).message);
            }
        };
        a.$7 = function(t, n) {
            this.listeners.forEach((e)=>e(t, n));
        };
        a.$8 = function(t, a) {
            const e = this;
            if (a.type === "request") {
                const i = a.content;
                const { arg: l, expectsResponse: s, name: u, namespace: c, opts: d, requestId: m, silentLog: p } = i;
                if (!p) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "Bridge ",
                        " request for ",
                        ""
                    ])), m, u);
                }
                if (d?.toClientId != null && d.toClientId !== this.clientId) {
                    if (!p) {
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "Bridge ",
                            " not intended for client ",
                            ""
                        ])), m, this.clientId);
                    }
                    return;
                }
                const C = this.$1;
                const v = {
                    type: "result",
                    content: {
                        requestId: m,
                        type: "handled",
                        result: {
                            payload: C.getAckPayoad(),
                            timestamp: Date.now()
                        },
                        silentLog: p,
                        opts: d
                    }
                };
                this.$7(v, "outgoing");
                try {
                    t.postMessage([
                        v
                    ]);
                } catch (e) {
                    if (this.config?.onPortError == null) {
                        throw e;
                    }
                    this.$11(t, e);
                }
                if (s) {
                    const R = C.sendAndReceive(c, u, l, p, void 0, d).then((n)=>{
                        let r = n;
                        let a = null;
                        if (n instanceof o("WATransferableResult").TransferableResult) {
                            r = n.result;
                            a = n.transferList;
                        }
                        e.$10(t, {
                            requestId: m,
                            type: "success",
                            result: r,
                            silentLog: p,
                            opts: d,
                            transferList: a
                        });
                    }, (n)=>{
                        e.$10(t, {
                            requestId: m,
                            type: "error",
                            result: String(n),
                            silentLog: p,
                            opts: d
                        });
                    });
                    o("WAPromiseManagement").preventGarbageCollection(R);
                } else {
                    C.fireAndForget(c, u, l, p, void 0, d);
                }
            } else {
                a.type;
                const L = a.content;
                const { requestId: E, result: k, silentLog: I, type: T } = L;
                const D = this.$6(E);
                if (D !== this.clientId || this.processedRequests.has(E)) {
                    return;
                }
                const x = this.openRequests.get(E);
                if (!x) {
                    o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "Bridge unrecognized result ",
                        ""
                    ])), E);
                    return;
                }
                switch(T){
                    case "success":
                    case "error":
                        {
                            this.openRequests.delete(E);
                            this.processedRequests.add(E);
                            const $ = x.resolver;
                            if ($) {
                                $(T === "success" ? k : (b || (b = n("Promise"))).reject(r("err")(k ?? "")));
                            } else {
                                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                    "Bridge unexpected result to cast: ",
                                    ""
                                ])), k);
                            }
                            break;
                        }
                    case "handled":
                        try {
                            let P;
                            if (!((P = x.eventCallbacks) == null || P.onAck == null)) {
                                P.onAck(k);
                            }
                        } catch (e) {
                            const N = r("getErrorSafe")(e);
                            o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                                "Failed to execute onAck: ",
                                ""
                            ])), N.message);
                        }
                        if (!x.resolver) {
                            this.openRequests.delete(E);
                            this.processedRequests.add(E);
                        }
                        break;
                }
            }
        };
        return t;
    })();
    function S(e, t, n, r, o) {
        return new v(e, n, t, r, o);
    }
    function R(e, t, r) {
        let o = 0;
        e.openRequests.forEach(({ request: l, resolver: s }, i)=>{
            if (!(l.namespace !== t || s == null)) {
                e.openRequests.delete(i);
                s((b || (b = n("Promise"))).reject(r));
                o++;
            }
        });
        return o;
    }
    function L(e) {
        e.port?.close();
        e.port = null;
        e.sendStream.cancel();
        const n = e.openRequests;
        e.openRequests = new Map;
        const r = e.getBridge();
        n.forEach(({ request: t, resolver: n })=>{
            const { arg: a, name: i, namespace: l, silentLog: s } = t;
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "absorbPortal: transferring request #",
                ""
            ])), t.requestId);
            if (n) {
                n(r.sendAndReceive(l, i, a, s));
            } else {
                r.fireAndForget(l, i, a, s);
            }
        });
    }
    l.CrossWorkerPortal = v;
    l.attachPortal = S;
    l.rejectPendingRequests = R;
    l.killPortalAndSendPendingToBridge = L;
}, 98);