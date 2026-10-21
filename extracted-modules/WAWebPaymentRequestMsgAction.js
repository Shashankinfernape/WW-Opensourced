__d("WAWebPaymentRequestMsgAction", [
    "WAWebDBProcessPaymentMessages",
    "WAWebMsgCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new (o("WAWebMsgCollection")).MsgCollection.constructor.model(e);
            const n = yield o("WAWebDBProcessPaymentMessages").processPaymentMessages([
                t
            ]);
            if (n) {
                n.forEach((t)=>{
                    const n = o("WAWebMsgCollection").MsgCollection.get(t.id);
                    if (n) {
                        n.set(t, {
                            merge: true
                        });
                    } else if (t.id === e.id.toString()) {
                        e.type = t.type;
                        e.templateParams = t.templateParams;
                    }
                });
            }
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new (o("WAWebMsgCollection")).MsgCollection.constructor.model(e);
            const n = yield o("WAWebDBProcessPaymentMessages").processPaymentMessages([
                t
            ]);
            if (n) {
                n.forEach((e)=>{
                    const t = o("WAWebMsgCollection").MsgCollection.get(e.id);
                    if (t) {
                        t.set(e, {
                            merge: true
                        });
                    }
                });
            }
        });
        return c.apply(this, arguments);
    }
    l.cancelOrDeclinePaymentRequest = e;
    l.fulfillPaymentRequest = u;
}, 98);