__d("WAWebOpenSocket", [
    "Promise",
    "WAAbortError",
    "WACustomError",
    "WALogger",
    "WAPromiseRetryLoop",
    "WAWebWatchedSocket",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = [
        "wss://web.whatsapp.com/ws/chat",
        "wss://web.whatsapp.com:5222/ws/chat"
    ];
    function h(t) {
        if (t.code !== 1000) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] Immediate socket closure: closed: ",
                " ",
                ""
            ])), t.code, t.reason).tags("socket");
        }
    }
    function y(e, t) {
        const n = e != null ? `[socket] ${e} closed. code: ${t.code}` : `[socket] closed connection during initialization. Code: ${t.code}`;
        e: {
            if (t.code === 1000 || t.code === 1001) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket] ",
                    ""
                ])), n).tags("socket");
                break e;
            }
            if (t.code === 1006) {
                if (e != null) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[socket] ",
                        ""
                    ])), n).tags("socket");
                }
                o("WALogger").COUNT(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket] ",
                    ""
                ])), n).tags("socket");
                break e;
            }
            if (t.code === 1002 || t.code === 1003 || t.code === 1007 || t.code === 1008 || t.code === 1009 || t.code === 1010 || t.code === 1011 || t.code === 1015) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket] ",
                    ""
                ])), n).tags("socket");
                break e;
            }
            {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket] ",
                    ". Reason: ",
                    ", clean: ",
                    ""
                ])), n, t.reason, t.wasClean).tags("socket");
                break e;
            }
        }
    }
    function C(e) {
        const t = new AbortController;
        return new (f || (f = n("Promise")))(function(n, a) {
            let i = false;
            const l = [];
            e.forEach((s)=>{
                b({
                    abortSignal: t.signal,
                    onWebSocketClosedImmediately: h,
                    onWebSocketCloseEvent: y,
                    url: s
                }).then((e)=>{
                    if (i) {
                        t.abort();
                        e.close(1000, "loser socket");
                    } else {
                        i = true;
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[socket] openWebSocketsConcurrently opened socket with ",
                            " ws."
                        ])), s).tags("socket");
                        n(e);
                    }
                }).catch((t)=>{
                    if (r("getErrorSafe")(t).name !== "AbortError") {
                        o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[socket] openWebSocketsConcurrently socket with ",
                            " failed: ",
                            ""
                        ])), s, String(t)).tags("socket");
                        l.push(t);
                        if (l.length === e.length) {
                            a(t);
                        }
                    }
                });
            });
        });
    }
    function b({ abortSignal: t, onWebSocketClosedImmediately: r, onWebSocketCloseEvent: a, url: i }) {
        const l = new WebSocket(i);
        l.binaryType = "arraybuffer";
        return new (f || (f = n("Promise")))(function(e, n) {
            l.onopen = e;
            l.onclose = function(e) {
                if (t != null && t.aborted) {
                    n(new (o("WAAbortError")).AbortError);
                    return;
                }
                r?.(e);
                a?.(null, e);
                n(new E(e));
            };
        }).then(()=>l);
    }
    function v() {
        return {
            jitter: 0.1,
            max: 10000,
            algo: {
                type: "fibonacci",
                first: 1000,
                second: 1000
            },
            relativeDelay: true
        };
    }
    function S() {
        if (self.navigator != null) {
            return self.navigator.onLine;
        }
        return true;
    }
    function R(e) {
        const t = g.map((t)=>{
            if (e != null) {
                return `${t}?ED=${e}`;
            }
            return t;
        });
        let n = true;
        const r = function() {
            if (S() && n === false) {
                n = true;
                a.reset();
            }
        };
        var a = new (o("WAPromiseRetryLoop")).PromiseRetryLoop({
            name: "socketOpener",
            timer: v(),
            code: function(r) {
                return C(t).then((e)=>{
                    r(new (o("WAWebWatchedSocket")).WatchedSocket(e));
                }).catch(()=>{
                    n = S();
                });
            }
        });
        self.addEventListener("online", r);
        a.start();
        return a.promise().finally(()=>{
            self.removeEventListener("online", r);
        });
    }
    function L(e) {
        try {
            return JSON.stringify(e);
        } catch (t) {
            return e.toString();
        }
    }
    var E = ((e)=>{
        function t(t) {
            let n;
            const r = typeof t === "string" ? t : L(t);
            n = e.call(this, r) || this;
            n.name = "SocketError";
            n.event = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    l.openWebSocket = R;
}, 98);