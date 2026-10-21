__d("WAWebOrderDetails", [
    "WALogger",
    "WAWebBizOrderDetailsParams",
    "WAWebBrPaymentMethodKey",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "filterNulls",
    "sumBy"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        const n = e?.value;
        if (n != null) {
            const r = e?.offset ?? 1;
            return parseFloat(n ?? 0) / parseInt(r, 10);
        }
    }
    function c(e) {
        if (e == null) {
            return null;
        }
        return r("filterNulls")(e.map((e)=>{
            if (e?.type != null) {
                return babelHelpers.extends({
                    type: e.type
                }, e.payment_instruction != null ? {
                    paymentInstruction: e.payment_instruction
                } : {});
            }
            return null;
        }));
    }
    const d = "custom-item";
    function m(e, t) {
        if (e !== "review_and_pay" && e !== "payment_info" || t == null) {
            return null;
        }
        const i = o("WAWebBizOrderDetailsParams").parse(t);
        const { currency: l, external_payment_configurations: s, order: m, payment_configuration: _, payment_settings: f, reference_id: g } = i;
        const h = u(i.total_amount);
        const y = m?.items ?? [];
        const C = y.map((e)=>({
                id: e?.product_id ?? e?.retailer_id ?? "",
                name: e?.name ?? "",
                amount: u(e?.amount),
                quantity: parseInt(e?.quantity ?? 0, 10),
                isCustomItem: e?.isCustomItem ?? e?.retailer_id?.indexOf(d) === 0,
                isQuantitySet: e?.isQuantitySet ?? true,
                properties: e?.variant_info_list?.map(function({ name, value: n }) {
                    return [
                        name,
                        n
                    ];
                })
            }));
        const b = r("sumBy")(C, function(e) {
            return e.quantity;
        });
        let v = y[0]?.name;
        if (e === "payment_info" && f?.length === 1 && f[0].type === o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE) {
            const S = f[0][o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE];
            v = S.merchant_name;
        }
        if (g == null || l == null || h == null) {
            return null;
        }
        const R = u(m?.shipping);
        const L = u(m?.tax);
        const E = u(m?.discount);
        const k = u(m?.subtotal);
        const I = c(s);
        return babelHelpers.extends({
            title: v,
            referenceId: g,
            currency: l,
            quantity: b,
            shipping: R,
            tax: L,
            discount: E,
            subtotal: k,
            totalAmount: h,
            isOrderNodeOmitted: m == null,
            items: C,
            payment_configuration: _,
            type: i.type
        }, I != null ? {
            externalPaymentConfigurations: I
        } : {}, {
            paymentSettings: f,
            buttonName: e
        }, p(i.ordered_methods, i.rank_source));
    }
    function p(e, t) {
        const n = _(e);
        const { hasUnusableServerOrdering: r, methods: o } = n;
        const a = {};
        if (o.length > 0) {
            a.orderedPaymentMethods = o;
            if (typeof t === "string") {
                a.paymentMethodRankSource = t;
            }
        }
        if (r) {
            a.hasUnusableServerPaymentMethodOrdering = true;
        }
        return a;
    }
    function _(t) {
        if (t == null) {
            return {
                methods: [],
                hasUnusableServerOrdering: false
            };
        }
        if (!Array.isArray(t)) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "ordered_methods was not an array"
            ]))).sendLogs("br-ordered-methods-unusable", {
                sampling: 0.01
            });
            return {
                methods: [],
                hasUnusableServerOrdering: true
            };
        }
        const n = [];
        for (const r of t){
            const a = f(r, n.length);
            if (a != null) {
                n.push(a);
            }
        }
        if (t.length !== n.length) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "ordered_methods dropped ",
                " unusable entries; ",
                " survived"
            ])), t.length - n.length, n.length).sendLogs("br-ordered-methods-unusable", {
                sampling: 0.01
            });
        }
        return {
            methods: n,
            hasUnusableServerOrdering: t.length > 0 && n.length === 0
        };
    }
    function f(e, t) {
        if (e == null || typeof e !== "object" || Array.isArray(e)) {
            return null;
        }
        const n = e.method_key;
        if (typeof n !== "string" || n === "") {
            return null;
        }
        const r = e.rank;
        return {
            methodKey: o("WAWebBrPaymentMethodKey").normalizeServerMethodKey(n),
            rank: typeof r === "number" && Number.isInteger(r) ? r : t,
            isDefault: e.is_default === true
        };
    }
    function g(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return h({
                interactivePayload: e.interactivePayload,
                interactiveType: e.interactiveType,
                nativeFlowButtons: null,
                nativeFlowName: e.nativeFlowName,
                type: e.type
            });
        }
        return h({
            interactivePayload: null,
            interactiveType: null,
            nativeFlowButtons: e.nativeFlowButtons,
            nativeFlowName: e.nativeFlowName,
            type: e.type
        });
    }
    function h({ interactivePayload: t, interactiveType: n, nativeFlowButtons: a, nativeFlowName: i, type }) {
        if (i !== r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS && i !== r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO) {
            return null;
        }
        if (type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && n === r("WAWebInteractiveMessageType").NATIVE_FLOW && t != null && t.buttons) {
            const s = t.buttons[0];
            const { buttonParamsJson: u, name: c } = s;
            return m(c, u);
        } else if (type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW) {
            const p = a?.[0]?.nativeFlowInfo;
            return m(p?.name, p?.paramsJson);
        }
    }
    l.CUSTOM_ITEM_ID_PREFIX = d;
    l.paramsJsonToOrderInfo = m;
    l.getOrderInfo = g;
    l.getOrderInfoFor = h;
}, 98);