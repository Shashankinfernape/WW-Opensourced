__d("WAWebUpdateMsgAcksAction", [
    "Promise",
    "WALogger",
    "WAWebAckMsgAction",
    "WAWebHandleMsgReceiptCommon",
    "WAWebMsgCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, ack, t_1) {
            const a = [];
            e.forEach((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const n = yield p(e);
                    if (n) {
                        a.push(o("WAWebAckMsgAction").updateMsgAck(e, n, {
                            from: n.from,
                            to: n.to,
                            ack,
                            t: t_1
                        }));
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            yield (s || (s = n("Promise"))).all(a);
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, t_1) {
            const i = [];
            const l = [];
            let u = 0;
            const c = [];
            t.forEach((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield p(e);
                    if (t) {
                        l.push(o("WAWebAckMsgAction").updateMsgAck(e, t, {
                            from: t.from,
                            to: t.to,
                            ack: r,
                            t: t_1
                        }));
                    } else {
                        u++;
                        if (c.length < 3) {
                            c.push(e);
                        }
                        if (!e.fromMe) {
                            i.push(e);
                        }
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            if (u > 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[updateMsgPeerAcks] no msg for ack, count=",
                    ", keys=",
                    ""
                ])), u, c);
            }
            if (i.length > 0) {
                o("WAWebHandleMsgReceiptCommon").updateOrphanPeerReceipt(i, r, t_1);
            }
            yield (s || (s = n("Promise"))).all(l);
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebMsgCollection").MsgCollection.get(e) ?? o("WAWebMsgCollection").MsgCollection.getByEditMsgKey(e);
        });
        return _.apply(this, arguments);
    }
    l.updateMsgOtherAcks = u;
    l.updateMsgPeerAcks = d;
}, 98);