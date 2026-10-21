__d("WAWebOrderStatus", [
    "$InternalEnum",
    "WAWebE2EProtoUtils",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebOrderDetails",
    "WAWebOrderGatingUtils",
    "WAWebOrderPaymentStatus",
    "WAWebOrderStatusButton"
], function(t, n, r, o, a, i, l) {
    const e = -1000;
    const s = [
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
    ];
    const u = n("$InternalEnum")({
        Pending: "pending",
        Processing: "processing",
        PartiallyShipped: "partially_shipped",
        Shipped: "shipped",
        Complete: "completed",
        Canceled: "canceled",
        PaymentRequested: "payment_requested",
        PreparingToShip: "preparing_to_ship",
        Delivered: "delivered",
        Confirmed: "confirmed",
        Delayed: "delayed",
        OutForDelivery: "out_for_delivery",
        Failed: "failed",
        Refunded: "refunded"
    });
    function c(e) {
        if (e == null) {
            return null;
        }
        try {
            const t = JSON.parse(e);
            const { order: n, payment: r, reference_id: a } = t;
            const i = u.cast(n?.status);
            let l = null;
            l = o("WAWebOrderPaymentStatus").OrderPaymentStatus.cast(r?.status);
            if (a == null || i == null && l == null) {
                return null;
            }
            return {
                refId: a,
                status: i,
                paymentStatus: l,
                orderCreatorSurface: n?.order_creator_surface === "biz_inbox" ? "biz_inbox" : void 0
            };
        } catch (e) {
            return null;
        }
    }
    function d(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return m({
                interactivePayload: e.interactivePayload,
                interactiveType: e.interactiveType,
                nativeFlowButtons: null,
                nativeFlowName: e.nativeFlowName,
                type: e.type
            });
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW) {
            return m({
                interactivePayload: null,
                interactiveType: null,
                nativeFlowButtons: e.nativeFlowButtons,
                nativeFlowName: e.nativeFlowName,
                type: e.type
            });
        }
        return null;
    }
    function m({ interactivePayload: t, interactiveType: n, nativeFlowButtons: a, nativeFlowName: i, type }) {
        if (!o("WAWebE2EProtoUtils").isOrderNativeFlow(i)) {
            return null;
        }
        if (type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && n === r("WAWebInteractiveMessageType").NATIVE_FLOW && t != null && t.buttons) {
            const s = t.buttons[0].buttonParamsJson;
            return c(s);
        } else if (type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW) {
            const d = a?.[0]?.nativeFlowInfo;
            return c(d?.paramsJson);
        }
    }
    function p(e) {
        return o("WAWebOrderStatusButton").getOrderStatusButton(e) != null;
    }
    function _({ order: t }) {
        const { status: n, tracking: r } = t;
        return r != null && n !== u.Canceled && n !== u.Refunded && n !== u.Failed;
    }
    function f(t, n) {
        const a = t.msgs.getModelsArray().slice(e);
        for(let i = a.length - 1; i >= 0; i--){
            const l = a[i].safe();
            if (l.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW) {
                if (l.nativeFlowName != null && s.includes(l.nativeFlowName) && o("WAWebOrderDetails").getOrderInfo(l)?.referenceId === n) {
                    return l;
                }
            } else if (l.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && l.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW) {
                if (l.nativeFlowName != null && s.includes(l.nativeFlowName) && o("WAWebOrderDetails").getOrderInfo(l)?.referenceId === n) {
                    return l;
                }
            }
        }
        return null;
    }
    const g = function(n, a) {
        const i = n.msgs.getModelsArray().slice(e);
        const l = i.findLast((e)=>e?.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS && d(e)?.refId === a)?.safe();
        if (l != null && (l.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW || l.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && l.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW)) {
            return l;
        }
        return null;
    };
    const h = function(n, a, i = false) {
        const l = n.msgs.getModelsArray().slice(e);
        const s = l.findLast((e)=>{
            const t = e?.nativeFlowName;
            if (t === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS) {
                return o("WAWebOrderPaymentStatus").getOrderPaymentStatusInfoFromNativeFlow(e)?.refId === a;
            }
            if (t === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS) {
                const l = d(e);
                if (l == null || l.refId !== a) {
                    return false;
                }
                return !i || l.paymentStatus != null;
            }
            return false;
        })?.safe();
        if (s != null && (s.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW || s.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && s.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW)) {
            return s;
        }
        return null;
    };
    const y = function(t) {
        if (t == null) {
            return null;
        }
        if (t === u.Complete) {
            return o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured;
        }
        if (t === u.Canceled || t === u.Failed) {
            return o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed;
        }
        if (t === u.Pending || t === u.Processing || t === u.PartiallyShipped || t === u.Shipped || t === u.PaymentRequested || t === u.PreparingToShip || t === u.Delivered || t === u.Confirmed || t === u.Delayed || t === u.OutForDelivery || t === u.Refunded) {
            return o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
        })();
    };
    function C(e) {
        if (e == null) {
            return false;
        }
        return e.items.length === 0;
    }
    function b(e, t) {
        return !e.contact.isEnterprise && C(t);
    }
    function v(e, t) {
        return !e.contact.isEnterprise && !C(t);
    }
    function S() {
        if (o("WAWebOrderGatingUtils").isOrderStatusM1Enabled()) {
            return u.PaymentRequested;
        }
        return u.Pending;
    }
    function R(e, t) {
        const r = g(e, t);
        const o = r != null ? d(r) : null;
        return o?.status ?? u.Pending;
    }
    function L(e, t) {
        const n = g(e, t);
        if (n == null) {
            return false;
        }
        const r = d(n);
        if (r == null) {
            return false;
        }
        const a = r.status == null || r.status === u.Pending || r.status === u.PaymentRequested;
        const i = r.paymentStatus == null || r.paymentStatus === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending;
        return !(a && i);
    }
    function E(e, t, n = false) {
        const a = h(e, t, n);
        let i = null;
        if (a && a?.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS) {
            const l = d(a);
            i = l?.paymentStatus;
            if (i == null) {
                i = y(l?.status);
            }
        } else if (a && a?.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS) {
            i = o("WAWebOrderPaymentStatus").getOrderPaymentStatusInfoFromNativeFlow(a)?.paymentStatus;
        }
        return i;
    }
    function k(e, t) {
        const n = e.msgs.reduce((e, n)=>{
            const a = o("WAWebOrderStatusButton").getOrderStatusButton(n);
            const i = n.safe();
            if (a == null || i.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE || a.reference_id !== t.reference_id) {
                return e;
            }
            return {
                first: e.first ?? i,
                last: i
            };
        }, {
            first: null,
            last: null
        });
        const { first: r, last: a } = n;
        const i = r && o("WAWebOrderStatusButton").getOrderStatusButton(r);
        const l = a && o("WAWebOrderStatusButton").getOrderStatusButton(a);
        const s = (i ?? t).order.items;
        return {
            drawerButton: babelHelpers.extends({}, l ?? t, {
                order: babelHelpers.extends({}, (l ?? t).order, {
                    items: s
                })
            }),
            messageBubbleButton: babelHelpers.extends({}, t, {
                order: babelHelpers.extends({}, t.order, {
                    items: s
                })
            }),
            firstMessage: r,
            lastMessage: a
        };
    }
    l.OrderStatus = u;
    l.paramsJsonToOrderStatusInfo = c;
    l.getOrderStatusInfo = d;
    l.getOrderStatusInfoFor = m;
    l.hasOrderStatusButton = p;
    l.shouldShowTrackingInfo = _;
    l.findOrderDetailsMessage = f;
    l.isSimplifiedOrder = C;
    l.isPaymentRequest = b;
    l.isCharge = v;
    l.getDefaultOrderStatus = S;
    l.findOrderStatus = R;
    l.hasOrderStatusUpdatedFromPending = L;
    l.findOrderPaymentStatus = E;
    l.getMergedOrderStatus = k;
}, 98);