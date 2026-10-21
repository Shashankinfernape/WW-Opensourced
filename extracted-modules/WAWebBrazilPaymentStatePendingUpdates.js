__d("WAWebBrazilPaymentStatePendingUpdates", [
    "WATimeUtils",
    "WAWebBrazilPaymentStateUpdatePayload",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "uniqueBy"
], function(t, n, r, o, a, i, l) {
    const e = 64;
    const s = 10080 * 60 * 1000;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WATimeUtils").unixTimeMs();
            const a = r("uniqueBy")(t.flatMap((e)=>{
                const t = C(e, n);
                if (t != null) {
                    return [
                        t
                    ];
                }
                return [];
            }), function({ msgKey: t }) {
                return t;
            });
            if (a.length !== 0) {
                const i = new Set(a.map(({ msgKey: t })=>t));
                yield f(function(t) {
                    return [].concat(t.filter(({ msgKey: t })=>!i.has(t)), a).slice(-e);
                });
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Set(e.map((e)=>e.id.toString()));
            yield f(function(e) {
                const n = e.filter(({ msgKey: n })=>!t.has(n));
                if (n.length === e.length) {
                    return e;
                }
                return n;
            });
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
            return h().filter(({ paymentMsgId: n })=>e == null || e.has(n)).map(b);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
            const t = h();
            const n = e(t);
            if (n !== t) {
                yield y(n);
            }
        });
        return g.apply(this, arguments);
    }
    function h() {
        const t = o("WATimeUtils").unixTimeMs() - s;
        return (o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.BR_PAYMENT_STATE_PENDING_UPDATES) ?? []).filter(({ savedAtMs: n })=>n > t);
    }
    function y(e) {
        if (e.length === 0) {
            return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.BR_PAYMENT_STATE_PENDING_UPDATES);
        }
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.BR_PAYMENT_STATE_PENDING_UPDATES, [].concat(e));
    }
    function C(e, t) {
        const a = o("WAWebBrazilPaymentStateUpdatePayload").getBrazilPaymentStateUpdate(e);
        const i = e.interactivePayload?.buttons?.[0]?.buttonParamsJson;
        if (a == null || i == null) {
            return null;
        }
        return {
            from: e.from.toString(),
            fromMe: e.id.fromMe,
            id: e.id.id,
            msgKey: e.id.toString(),
            paramsJson: i,
            participant: e.id.participant?.toString(),
            paymentMsgId: a.paymentMsgId,
            remote: e.id.remote.toString(),
            savedAtMs: t,
            t: e.t,
            to: e.to.toString()
        };
    }
    function b({ from: t, fromMe: n, id: a, paramsJson: i, participant: l, remote: s, t: u, to: c }) {
        return {
            id: new (r("WAWebMsgKey"))({
                fromMe: n,
                remote: o("WAWebWidFactory").createWid(s),
                id: a,
                participant: l != null ? o("WAWebWidFactory").createWid(l) : void 0
            }),
            from: o("WAWebWidFactory").createWid(t),
            to: o("WAWebWidFactory").createWid(c),
            t: u,
            viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
            type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
            kind: o("WAWebMsgType").MsgKind.Interactive,
            interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
            nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").BR_PAYMENT_STATE,
            interactivePayload: {
                buttons: [
                    {
                        name: r("WAWebInteractiveMessagesNativeFlowName").BR_PAYMENT_STATE,
                        buttonParamsJson: i
                    }
                ],
                messageVersion: 1
            }
        };
    }
    l.MAX_PENDING_UPDATES = e;
    l.PENDING_UPDATE_TTL_MS = s;
    l.savePendingBrazilPaymentStateUpdates = u;
    l.removePendingBrazilPaymentStateUpdates = d;
    l.getPendingBrazilPaymentStateUpdateMsgs = p;
}, 98);