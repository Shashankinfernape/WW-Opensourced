__d("WAWebUprReceivedWamLogger", [
    "Promise",
    "WALogger",
    "WAWebMsgGetters",
    "WAWebP2XFunnelIdGenerator",
    "WAWebStructuredMessageBuyerReceiveWamEvent",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebUprPaymentRequest",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = "receiver_log_key";
    const c = "buyer_order_fs_log";
    const d = "universal_payment_request";
    const m = "individual";
    const p = "group";
    const _ = "broadcast";
    const f = "newsletter";
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            yield (s || (s = n("Promise"))).all(t.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    const n = o("WAWebUprPaymentRequest").parseUprPaymentInfo(t);
                    if (n != null) {
                        yield y(t, n).catch((t)=>{
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[WAM:UPR] structured msg receive log err: ",
                                ""
                            ])), t);
                        });
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = S(e);
            const r = t.paymentOptions.length === 1;
            const a = e.id.id + e.to.toJid();
            const i = yield b(u, a);
            const l = yield b(i, c);
            const s = {
                cta: d,
                is_upr: true,
                is_single_option: r,
                chat_type: n,
                order_funnel_id: i,
                currency: t.currency
            };
            new (o("WAWebStructuredMessageReceiveWamEvent")).StructuredMessageReceiveWamEvent({
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM,
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
                businessOwnerJid: R(e),
                messageClassAttributes: JSON.stringify(s)
            }).commit();
            const m = {
                cta: d,
                is_upr: true,
                chat_type: n,
                order_funnel_id: l,
                currency: t.currency
            };
            new (o("WAWebStructuredMessageBuyerReceiveWamEvent")).StructuredMessageBuyerReceiveWamEvent({
                messageClass: o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM,
                messageClassAttributes: JSON.stringify(m)
            }).commit();
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new (o("WAWebP2XFunnelIdGenerator")).P2XFunnelIdGenerator(e, t);
            const r = yield n.genFunnelInfo();
            const a = r.funnel_id;
            return a;
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        if (e.from?.isGroup() === true) {
            return p;
        }
        if (e.broadcastId?.isBroadcast() === true) {
            return _;
        }
        if (e.from?.isNewsletter() === true) {
            return f;
        }
        return m;
    }
    function R(e) {
        return o("WAWebMsgGetters").getSender(e)?.user;
    }
    l.logUprReceivedWAMEvent = g;
}, 98);