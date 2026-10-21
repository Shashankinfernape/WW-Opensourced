__d("WAWebBrazilPaymentState", [
    "WAWebBizOrderDetailsParams",
    "WAWebBrazilPaymentStateKeys",
    "WAWebPaymentDetailsModels",
    "WAWebPaymentDetailsStatusPolicy"
], function(t, n, r, o, a, i, l) {
    const e = "additional_note";
    function s(e) {
        return S(e)?.[o("WAWebBrazilPaymentStateKeys").RECEIPT_AND_STATE_STAMP_KEY] === true;
    }
    function u(t) {
        return L(S(t)?.[e]);
    }
    function c(e) {
        const a = R(S(e)?.[o("WAWebBrazilPaymentStateKeys").BRAZIL_PAYMENT_STATE_KEY]);
        if (a == null) {
            return o("WAWebPaymentDetailsModels").EMPTY_BRAZIL_PAYMENT_STATE;
        }
        return {
            status: o("WAWebPaymentDetailsModels").PaymentDetailsStatus.cast(L(a.status)) ?? null,
            actor: o("WAWebPaymentDetailsModels").PaymentDetailsActor.cast(L(a.actor)) ?? null,
            statusUpdatedAtMs: E(a.updated_at),
            receiptMsgId: L(a.receipt_message_id),
            receiptAddedAtMs: E(a.receipt_added_at)
        };
    }
    function d(e) {
        return e.status ?? o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_CONFIRMED;
    }
    function m(e, t) {
        const l = S(e);
        if (l == null) {
            return e;
        }
        const s = e.buttons;
        const u = s[0];
        const c = babelHelpers.arrayLikeToArray(s).slice(1);
        return babelHelpers.extends({}, e, {
            buttons: [
                babelHelpers.extends({}, u, {
                    buttonParamsJson: JSON.stringify(babelHelpers.extends({}, l, {
                        [o("WAWebBrazilPaymentStateKeys").BRAZIL_PAYMENT_STATE_KEY]: {
                            status: t.status ?? null,
                            actor: t.actor ?? null,
                            updated_at: t.statusUpdatedAtMs,
                            receipt_message_id: t.receiptMsgId ?? null,
                            receipt_added_at: t.receiptAddedAtMs
                        }
                    }))
                })
            ].concat(c)
        });
    }
    function p(e, t, n, r) {
        const a = e.status;
        const i = a != null && o("WAWebPaymentDetailsStatusPolicy").isTerminalPaymentStatus(a);
        if (i || r < e.statusUpdatedAtMs) {
            return e;
        }
        return babelHelpers.extends({}, e, {
            status: t,
            actor: n,
            statusUpdatedAtMs: r
        });
    }
    function _(e, t, n) {
        if (n < e.receiptAddedAtMs) {
            return e;
        }
        return babelHelpers.extends({}, e, {
            receiptMsgId: t,
            receiptAddedAtMs: n
        });
    }
    function f(e, t) {
        if (t < e.receiptAddedAtMs) {
            return e;
        }
        return babelHelpers.extends({}, e, {
            receiptMsgId: null,
            receiptAddedAtMs: t
        });
    }
    function g(e, t) {
        return e.status === t.status && e.actor === t.actor && e.statusUpdatedAtMs === t.statusUpdatedAtMs && e.receiptMsgId === t.receiptMsgId && e.receiptAddedAtMs === t.receiptAddedAtMs;
    }
    function h(e) {
        const n = v(e)?.name;
        if (typeof n === "string" && o("WAWebBrazilPaymentStateKeys").PAYMENT_REQUEST_BUTTON_NAMES.has(n)) {
            return n;
        }
        return null;
    }
    function y(e) {
        const n = h(e);
        if (n == null) {
            return null;
        }
        const r = L(v(e)?.buttonParamsJson);
        if (n === o("WAWebBrazilPaymentStateKeys").PIX_CODE_REQUEST_BUTTON_NAME && r?.includes(o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE) !== true) {
            return null;
        }
        return r;
    }
    function C(e) {
        const t = S(e);
        const n = t?.payment_settings;
        return h(e) === o("WAWebBrazilPaymentStateKeys").PIX_CODE_REQUEST_BUTTON_NAME && !b(t) && Array.isArray(n) && n.some((e)=>R(e)?.type === o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE);
    }
    function b(e) {
        const n = R(e?.order)?.items;
        return Array.isArray(n) && n.length > 0;
    }
    function v(e) {
        const n = R(e)?.buttons;
        if (Array.isArray(n)) {
            return R(n[0]);
        }
        return null;
    }
    function S(e) {
        const t = y(e);
        if (t == null) {
            return null;
        }
        try {
            return R(JSON.parse(t));
        } catch (e) {
            return null;
        }
    }
    function R(e) {
        if (e != null && typeof e === "object" && !Array.isArray(e)) {
            return e;
        }
        return null;
    }
    function L(e) {
        if (typeof e === "string" && e !== "") {
            return e;
        }
        return null;
    }
    function E(e) {
        if (typeof e === "number" && e > 0) {
            return e;
        }
        return 0;
    }
    l.isReceiptAndStateStamped = s;
    l.getPaymentNote = u;
    l.getBrazilPaymentState = c;
    l.getPaymentDetailsStatus = d;
    l.withBrazilPaymentState = m;
    l.applyStatusUpdate = p;
    l.applyReceiptUpdate = _;
    l.applyReceiptRemoval = f;
    l.isSameBrazilPaymentState = g;
    l.getPaymentRequestButtonName = h;
    l.getPaymentRequestParamsJson = y;
    l.isPixCodeRequestPayload = C;
}, 98);