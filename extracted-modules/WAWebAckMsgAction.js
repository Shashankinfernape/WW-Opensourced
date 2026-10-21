__d("WAWebAckMsgAction", [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebBackendApi",
    "WAWebMessageReceiptBatcher",
    "WAWebMsgCollection",
    "WAWebMsgInfoCollection",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "compactMap",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (!(t.latestEditMsgKey && !t.latestEditMsgKey.equals(e))) {
                const { ack, t: t_1 } = n;
                const participant = e.remote;
                t.updateAck(ack);
                if (r("WAWebWid").isUser(participant)) {
                    yield o("WAWebBackendApi").frontendSendAndReceive("updateMsgInfo", {
                        updates: [
                            {
                                msgKey: t.id,
                                ack,
                                participant,
                                ts: t_1
                            }
                        ]
                    });
                }
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            yield o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches();
            const a = [];
            let i = 0;
            const l = r("compactMap")(t, function(e) {
                const n = o("WAWebMsgCollection").MsgCollection.get(e) ?? o("WAWebMsgCollection").MsgCollection.getByEditMsgKey(e);
                return n || (i++, a.length < 3 && a.push(e), null);
            });
            if (i > 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "processOrphanReadReceipts: ",
                    " skipped, msgIds: ",
                    ""
                ])), i, a.map((e)=>String(e)));
            }
            const c = yield y(l);
            l.forEach((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    try {
                        const t = c.get(e.id.toString());
                        if (!t || t.ack === e.ack) {
                            return undefined;
                        }
                        return _(e.id, e, t);
                    } catch (e) {
                        if (r("gkx")("26258")) {
                            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "Assertion failed: processOrphanReadReceipts failed!"
                            ])));
                        } else {
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "Assertion failed!"
                            ]))).sendLogs("processOrphanReadReceipts failed");
                        }
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t = new Map;
            if (e.length === 1) {
                const r = yield o("WAWebMsgInfoCollection").MsgInfoCollection.find(e[0].id);
                t.set(e[0].id.toString(), r);
            } else {
                t = yield o("WAWebMsgInfoCollection").MsgInfoCollection.findManyAndUpdate(e.map((e)=>e.id));
            }
            const a = new Map;
            const i = [];
            const l = [];
            const s = [];
            let u = 0;
            let _ = 0;
            let f = 0;
            yield (p || (p = n("Promise"))).all(e.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const n = t.get(e.id.toString());
                    if (!n) {
                        u++;
                        if (i.length < 3) {
                            i.push(e.id);
                        }
                        return null;
                    }
                    let r = null;
                    let c = null;
                    if (n.playedRemaining === 0 && n.played.length !== 0) {
                        c = o("WAWebAck").ACK.PLAYED;
                        r = n.played;
                    } else if (n.readRemaining === 0 && n.read.length !== 0) {
                        c = o("WAWebAck").ACK.READ;
                        r = n.read;
                    } else if (n.deliveryRemaining === 0 && n.delivery.length !== 0) {
                        c = o("WAWebAck").ACK.RECEIVED;
                        r = n.delivery;
                    }
                    if (c == null || r == null) {
                        _++;
                        if (l.length < 3) {
                            l.push(e.id);
                        }
                        return null;
                    }
                    f++;
                    if (s.length < 3) {
                        s.push(e.id);
                    }
                    a.set(e.id.toString(), {
                        ack: c,
                        t: Math.max(...r.map((e)=>e.t)),
                        to: e.to,
                        from: e.from
                    });
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            if (u > 0) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "getHighestAcks: no orphan ack found for ",
                    " msgs => ",
                    ""
                ])), u, i);
            }
            if (_ > 0) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "getHighestAcks: orphan ack has 0 receipt for ",
                    " msgs => ",
                    ""
                ])), _, l);
            }
            if (f > 0) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "getHighestAcks: orphan ack found for ",
                    " msgs => ",
                    ""
                ])), f, s);
            }
            return a;
        });
        return C.apply(this, arguments);
    }
    l.updateMsgAck = _;
    l.processOrphanReadReceipts = g;
}, 98);